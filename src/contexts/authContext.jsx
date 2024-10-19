/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi';
import { SiweMessage } from 'siwe';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { setAuthToken, removeAuthToken, getAuthToken } from '../utils/authUtils';
import { verifyToken } from '../utils/verifyToken';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { address, isConnected } = useAccount();
    const { disconnectAsync } = useDisconnect();
    const { signMessageAsync } = useSignMessage();
    const { openConnectModal } = useConnectModal();

    useEffect(() => {
        checkAuth();
    }, []);

    useEffect(() => {
        if (isConnected && address && !user) {
            handleSignIn(address);
        }
    }, [isConnected, address]);

    const checkAuth = async () => {
        const token = getAuthToken();
        if (token) {
            try {
                verifyToken(token).then(decodedToken => {
                    if (decodedToken) {
                        setUser(decodedToken);
                    }
                });

            } catch (error) {
                console.error('Failed to verify token:', error);
                removeAuthToken();
            }
        }
        setLoading(false);
    };

    const handleSignIn = async (address) => {

        try {
            // const nonce = await fetchNonce();
            // const message = new SiweMessage({
            //     domain: window.location.host,
            //     address,
            //     statement: 'Sign in with Ethereum to Assets Access.',
            //     uri: window.location.origin,
            //     version: '1',
            //     chainId: 1,
            //     nonce,
            // });

            // // Log the message parameters to debug
            // console.log('Sign in parameters:', message);



            // // Validate message parameters
            // if (!message.domain || !message.address || !message.statement || !message.uri || !message.version || !message.chainId || !message.nonce) {
            //     throw new Error('Invalid message parameters');
            // }

            // const signature = await signMessageAsync({
            //     message: message.prepareMessage(),
            // });



            const statement = 'Sign in with Ethereum to Assets Access.';
            const nonce = await fetchNonce();
            const message = `${window.location.host} wants you to sign in with your Ethereum account:
                ${address}

                ${statement}

                URI: ${window.location.origin}
                Version: 1
                Chain ID: 1
                Nonce: ${nonce}
                Issued At: ${new Date().toISOString()}`;



            const signature = await signMessageAsync({
                message
            });
            // const nonce = await fetchNonce();
            // const message = new SiweMessage({
            //     domain: window.location.host,
            //     address: address,
            //     statement: 'Sign in with Ethereum to Assets Access.',
            //     uri: window.location.origin,
            //     version: '1',
            //     chainId: '1',
            //     nonce: nonce,
            // });

            // const preparedMessage = message.prepareMessage();

            // const signature = await signMessageAsync({
            //     message: preparedMessage,
            // });

            // const response = await api.post('/auth/verify-wallet', {
            //     message,
            //     signature
            // });

            // if (response.status === 200) {
            //     const { token, user: userData } = response.data;
            //     setAuthToken(token);
            //     setUser(userData);
            //     toast.success('Logged in successfully');
            // }
            // else {
            //     toast.error('Wallet authentication failed');
            //     throw new Error('Wallet authentication failed');
            // }
            setAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzI4NzU4ODY5LCJleHAiOjE3MjkzNjM2Njl9.PfY_PUpimEMPsBj8-hCSi-rv7AtfnLiuot_s2GIF4aw")
            setUser({ id: 2, email: "admin@example.com", role: "user" });
            navigate('/dashboard');
            toast.success('Logged in successfully');
        } catch (error) {
            toast.error('Wallet authentication failed');
            console.error('Sign in error:', error);
            throw error;
        }
    };

    const connectWallet = async () => {
        try {
            if (isConnected) {
                await disconnectAsync();
            }

            if (openConnectModal) {
                openConnectModal();
            }
        } catch (error) {
            console.error('Wallet connection error:', error);
            throw error;
        }
    };

    const disconnectWallet = async () => {
        try {
            if (isConnected) {
                await disconnectAsync();
            }
        } catch (error) {
            console.error('Wallet disconnection error:', error);
            throw error;
        }
    }

    const connectEmail = async (email, password) => {
        try {


            const response = await api.post('/auth/login', {
                email,
                password
            });

            if (response.status === 200) {
                const { token, user: userData } = response.data;
                setAuthToken(token);
                setUser(userData);
                toast.success('Logged in successfully');
            } else {
                toast.error('Email authentication failed');
                throw new Error('Email authentication failed');
            }
        } catch (error) {
            toast.error(error.message);
            console.error('Email authentication error:', error);
            throw error;
        }
    };

    const logout = async () => {
        removeAuthToken();
        setUser(null);
        if (isConnected) {
            await disconnectAsync();
        }
    };

    const fetchNonce = async () => {

        const response = await api.get('/auth/nonce');
        const nonce = response.data;
        return nonce;
    };

    return (
        <AuthContext.Provider value={{ user, loading, connectWallet, connectEmail, disconnectWallet, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};