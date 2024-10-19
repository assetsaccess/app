/* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import { useAuth } from '../../contexts/authContext';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const { connectWallet, connectEmail } = useAuth();
//     const navigate = useNavigate();

//     const handleEmailLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await connectEmail(email, password);
//             navigate('/dashboard');
//         } catch (error) {
//             console.error('Email login failed:', error);
//         }
//     };

//     const handleWalletLogin = async () => {
//         try {
//             await connectWallet();
//             navigate('/dashboard');
//         } catch (error) {
//             console.error('Wallet login failed:', error);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 via-indigo-900 to-black py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8 backdrop-blur-md bg-white/10 rounded-lg shadow-xl p-8">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-extrabold text-white">
//                         Welcome to Assets Access
//                     </h2>
//                     <p className="text-indigo-200 mt-2">
//                         Sign in to continue to the decentralized future
//                     </p>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleEmailLogin}>
//                     <input type="hidden" name="remember" defaultValue="true" />
//                     <div className="rounded-md shadow-sm">
//                         <div>
//                             <label htmlFor="email-address" className="sr-only">
//                                 Email address
//                             </label>
//                             <input
//                                 id="email-address"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 className="appearance-none rounded-t-lg relative block w-full px-4 py-3 border border-transparent placeholder-gray-400 text-gray-100 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                 placeholder="Email address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="sr-only">
//                                 Password
//                             </label>
//                             <input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 autoComplete="current-password"
//                                 required
//                                 className="appearance-none rounded-b-lg relative block w-full px-4 py-3 border border-transparent placeholder-gray-400 text-gray-100 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     <div className="mt-6">
//                         <button
//                             type="submit"
//                             className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             Sign in with Email
//                         </button>
//                     </div>
//                 </form>
//                 <div className="relative mt-6">
//                     <p className="text-center text-white">or</p>
//                     <div>
//                         <button
//                             onClick={handleWalletLogin}
//                             className="w-full flex items-center justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-gradient-to-l hover:shadow-lg transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//                         >
//                             <svg
//                                 className="w-6 h-6 mr-2"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M12 4v16m8-8H4"
//                                 />
//                             </svg>
//                             Connect Wallet
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;

// import { useState } from 'react';
// import { useAuth } from '../../contexts/authContext';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify CSS

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [isLogin, setIsLogin] = useState(true); // Manage login/signup switch
//     const { connectWallet, connectEmail, signupWithEmail } = useAuth();
//     const navigate = useNavigate();

//     const handleEmailLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await connectEmail(email, password);
//             navigate('/dashboard');
//             toast.success('Successfully logged in!', { position: "top-right" });
//         } catch (error) {
//             toast.error('Email login failed. Please check your credentials.', { position: "top-right" });
//         }
//     };

//     const handleEmailSignup = async (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             toast.error('Passwords do not match', { position: "top-right" });
//             return;
//         }
//         try {
//             await signupWithEmail(email, password);
//             navigate('/dashboard');
//             toast.success('Account created successfully!', { position: "top-right" });
//         } catch (error) {
//             toast.error('Signup failed. Please try again.', { position: "top-right" });
//         }
//     };

//     const handleWalletLogin = async () => {
//         try {
//             await connectWallet();
//             navigate('/dashboard');
//             toast.success('Wallet connected successfully!', { position: "top-right" });
//         } catch (error) {
//             toast.error('Wallet connection failed.', { position: "top-right" });
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 via-indigo-900 to-black py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8 backdrop-blur-md bg-white/10 rounded-lg shadow-xl p-8">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-extrabold text-white">
//                         Welcome to Assets Access
//                     </h2>
//                     <p className="text-indigo-200 mt-2">
//                         {isLogin ? 'Sign in to continue' : 'Create an account'}
//                     </p>
//                 </div>

//                 {/* Tabs for switching between Login and Signup */}
//                 <div className="flex justify-center space-x-4">
//                     <button
//                         className={`py-2 px-4 text-sm font-medium ${isLogin ? 'text-indigo-600' : 'text-white hover:text-indigo-300'
//                             }`}
//                         onClick={() => setIsLogin(true)}
//                     >
//                         Sign In
//                     </button>
//                     <button
//                         className={`py-2 px-4 text-sm font-medium ${!isLogin ? 'text-indigo-600' : 'text-white hover:text-indigo-300'
//                             }`}
//                         onClick={() => setIsLogin(false)}
//                     >
//                         Sign Up
//                     </button>
//                 </div>

//                 <form className="mt-8 space-y-6" onSubmit={isLogin ? handleEmailLogin : handleEmailSignup}>
//                     <div className="rounded-md shadow-sm">
//                         <div>
//                             <label htmlFor="email-address" className="sr-only">
//                                 Email address
//                             </label>
//                             <input
//                                 id="email-address"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 className="appearance-none rounded-t-lg relative block w-full px-4 py-3 border border-transparent placeholder-gray-400 text-gray-100 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                 placeholder="Email address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="password" className="sr-only">
//                                 Password
//                             </label>
//                             <input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 autoComplete="current-password"
//                                 required
//                                 className="appearance-none rounded-b-lg relative block w-full px-4 py-3 border border-transparent placeholder-gray-400 text-gray-100 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>

//                         {!isLogin && (
//                             <div>
//                                 <label htmlFor="confirm-password" className="sr-only">
//                                     Confirm Password
//                                 </label>
//                                 <input
//                                     id="confirm-password"
//                                     name="confirmPassword"
//                                     type="password"
//                                     required
//                                     className="appearance-none rounded-b-lg relative block w-full px-4 py-3 border border-transparent placeholder-gray-400 text-gray-100 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                     placeholder="Confirm Password"
//                                     value={confirmPassword}
//                                     onChange={(e) => setConfirmPassword(e.target.value)}
//                                 />
//                             </div>
//                         )}
//                     </div>

//                     <div className="mt-6">
//                         <button
//                             type="submit"
//                             className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             {isLogin ? 'Sign in with Email' : 'Sign up with Email'}
//                         </button>
//                     </div>
//                 </form>

//                 <div className="relative mt-6">
//                     <p className="text-center text-white">or</p>
//                     <div>
//                         <button
//                             onClick={handleWalletLogin}
//                             className="w-full flex items-center justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-gradient-to-l hover:shadow-lg transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//                         >
//                             <svg
//                                 className="w-6 h-6 mr-2"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M12 4v16m8-8H4"
//                                 />
//                             </svg>
//                             Connect Wallet
//                         </button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default LoginPage;

// import { useState } from 'react';
// import { useAuth } from '../../contexts/authContext';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup
//     const [isWallet, setIsWallet] = useState(false); // Toggle between wallet/email login/signup
//     const { connectWallet, connectEmail, signupWithEmail } = useAuth();
//     const navigate = useNavigate();

//     // Handle email login
//     const handleEmailLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await connectEmail(email, password);
//             navigate('/dashboard');
//             toast.success('Successfully logged in with email!', { position: 'top-right' });
//         } catch (error) {
//             toast.error('Email login failed. Please check your credentials.', { position: 'top-right' });
//         }
//     };

//     // Handle email signup
//     const handleEmailSignup = async (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             toast.error('Passwords do not match!', { position: 'top-right' });
//             return;
//         }
//         try {
//             await signupWithEmail(email, password);
//             navigate('/dashboard');
//             toast.success('Account created successfully!', { position: 'top-right' });
//         } catch (error) {
//             toast.error('Signup failed. Please try again.', { position: 'top-right' });
//         }
//     };

//     // Handle wallet login
//     const handleWalletLogin = async () => {
//         try {
//             await connectWallet();
//             navigate('/dashboard');
//             toast.success('Wallet connected successfully!', { position: 'top-right' });
//         } catch (error) {
//             toast.error('Wallet login failed. Please try again.', { position: 'top-right' });
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 via-indigo-900 to-black py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8 backdrop-blur-md bg-white/10 rounded-lg shadow-xl p-8">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-extrabold text-white">Welcome to Assets Access</h2>
//                     <p className="text-indigo-200 mt-2">
//                         {isLogin ? 'Sign in to continue' : 'Create an account'}
//                     </p>
//                 </div>

//                 {/* Tabs for switching between Login/Signup */}
//                 <div className="flex justify-center space-x-4">
//                     <button
//                         className={`py-2 px-4 text-sm font-medium ${isLogin ? 'text-indigo-600' : 'text-white hover:text-indigo-300'
//                             }`}
//                         onClick={() => setIsLogin(true)}
//                     >
//                         Sign In
//                     </button>
//                     <button
//                         className={`py-2 px-4 text-sm font-medium ${!isLogin ? 'text-indigo-600' : 'text-white hover:text-indigo-300'
//                             }`}
//                         onClick={() => setIsLogin(false)}
//                     >
//                         Sign Up
//                     </button>
//                 </div>

//                 {/* Wallet vs Email toggle */}
//                 <div className="flex justify-center space-x-4 mt-6">
//                     <button
//                         className={`py-2 px-4 text-sm font-medium ${isWallet ? 'text-indigo-600' : 'text-white hover:text-indigo-300'
//                             }`}
//                         onClick={() => setIsWallet(true)}
//                     >
//                         Wallet {isLogin ? 'Login' : 'Signup'}
//                     </button>
//                     <button
//                         className={`py-2 px-4 text-sm font-medium ${!isWallet ? 'text-indigo-600' : 'text-white hover:text-indigo-300'
//                             }`}
//                         onClick={() => setIsWallet(false)}
//                     >
//                         Email {isLogin ? 'Login' : 'Signup'}
//                     </button>
//                 </div>

//                 {/* Conditional rendering based on the tab */}
//                 {isWallet ? (
//                     <div className="relative mt-8">
//                         <button
//                             onClick={handleWalletLogin}
//                             className="w-full flex items-center justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-gradient-to-l hover:shadow-lg transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//                         >
//                             <svg
//                                 className="w-6 h-6 mr-2"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M12 4v16m8-8H4"
//                                 />
//                             </svg>
//                             {isLogin ? 'Connect Wallet to Login' : 'Connect Wallet to Signup'}
//                         </button>
//                     </div>
//                 ) : (
//                     <form className="mt-8 space-y-6" onSubmit={isLogin ? handleEmailLogin : handleEmailSignup}>
//                         <div className="rounded-md shadow-sm">
//                             <div>
//                                 <label htmlFor="email-address" className="sr-only">
//                                     Email address
//                                 </label>
//                                 <input
//                                     id="email-address"
//                                     name="email"
//                                     type="email"
//                                     autoComplete="email"
//                                     required
//                                     className="appearance-none rounded-t-lg relative block w-full px-4 py-3 border border-transparent placeholder-gray-400 text-gray-100 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                     placeholder="Email address"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="sr-only">
//                                     Password
//                                 </label>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     autoComplete="current-password"
//                                     required
//                                     className="appearance-none rounded-b-lg relative block w-full px-4 py-3 border border-transparent placeholder-gray-400 text-gray-100 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                             </div>

//                             {!isLogin && (
//                                 <div>
//                                     <label htmlFor="confirm-password" className="sr-only">
//                                         Confirm Password
//                                     </label>
//                                     <input
//                                         id="confirm-password"
//                                         name="confirmPassword"
//                                         type="password"
//                                         required
//                                         className="appearance-none rounded-b-lg relative block w-full px-4 py-3 border border-transparent placeholder-gray-400 text-gray-100 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                         placeholder="Confirm Password"
//                                         value={confirmPassword}
//                                         onChange={(e) => setConfirmPassword(e.target.value)}
//                                     />
//                                 </div>
//                             )}
//                         </div>

//                         <div className="mt-6">
//                             <button
//                                 type="submit"
//                                 className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                             >
//                                 {isLogin ? 'Sign in with Email' : 'Sign up with Email'}
//                             </button>
//                         </div>
//                     </form>
//                 )}
//             </div>

//         </div>
//     );
// };

// export default LoginPage;

// import { useState } from 'react';
// import { useAuth } from '../../contexts/authContext';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup
//     const { connectWallet, connectEmail, signupWithEmail } = useAuth();
//     const navigate = useNavigate();

//     // Handle email login
//     const handleEmailLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await connectEmail(email, password);
//             navigate('/dashboard');
//             toast.success('Successfully logged in with email!', { position: 'top-right' });
//         } catch (error) {
//             toast.error('Email login failed. Please check your credentials.', { position: 'top-right' });
//         }
//     };

//     // Handle email signup
//     const handleEmailSignup = async (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             toast.error('Passwords do not match!', { position: 'top-right' });
//             return;
//         }
//         try {
//             await signupWithEmail(email, password);
//             navigate('/dashboard');
//             toast.success('Account created successfully!', { position: 'top-right' });
//         } catch (error) {
//             toast.error('Signup failed. Please try again.', { position: 'top-right' });
//         }
//     };

//     // Handle wallet login
//     const handleWalletLogin = async () => {
//         try {
//             await connectWallet();
//             navigate('/dashboard');
//             toast.success('Wallet connected successfully!', { position: 'top-right' });
//         } catch (error) {
//             toast.error('Wallet login failed. Please try again.', { position: 'top-right' });
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
//                 <div className="text-center mb-6">
//                     <h2 className="text-2xl font-semibold text-gray-800">
//                         {isLogin ? 'Sign In' : 'Sign Up'}
//                     </h2>
//                     <p className="text-gray-500">
//                         {isLogin ? 'Welcome back! Please sign in.' : 'Create a new account.'}
//                     </p>
//                 </div>

//                 {/* Tabs for switching between Sign In and Sign Up */}
//                 <div className="flex justify-center mb-6 border-b-2 border-gray-200">
//                     <button
//                         className={`py-2 px-4 text-sm font-medium ${isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
//                             }`}
//                         onClick={() => setIsLogin(true)}
//                     >
//                         Sign In
//                     </button>
//                     <button
//                         className={`py-2 px-4 text-sm font-medium ${!isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
//                             }`}
//                         onClick={() => setIsLogin(false)}
//                     >
//                         Sign Up
//                     </button>
//                 </div>

//                 {/* Conditional rendering based on the tab */}
//                 <form className="space-y-6" onSubmit={isLogin ? handleEmailLogin : handleEmailSignup}>
//                     <div className="space-y-4">
//                         <div>
//                             <label htmlFor="email-address" className="sr-only">Email address</label>
//                             <input
//                                 id="email-address"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                                 placeholder="Email address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="password" className="sr-only">Password</label>
//                             <input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 autoComplete="current-password"
//                                 required
//                                 className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>

//                         {!isLogin && (
//                             <div>
//                                 <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
//                                 <input
//                                     id="confirm-password"
//                                     name="confirmPassword"
//                                     type="password"
//                                     required
//                                     className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                                     placeholder="Confirm Password"
//                                     value={confirmPassword}
//                                     onChange={(e) => setConfirmPassword(e.target.value)}
//                                 />
//                             </div>
//                         )}
//                     </div>

//                     <div className="mt-6">
//                         <button
//                             type="submit"
//                             className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                         >
//                             {isLogin ? 'Sign In' : 'Sign Up'}
//                         </button>
//                     </div>
//                 </form>

//                 {/* Wallet Login */}
//                 <div className="relative mt-8">
//                     <button
//                         onClick={handleWalletLogin}
//                         className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                     >
//                         <svg
//                             className="w-6 h-6 mr-2"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M12 4v16m8-8H4"
//                             />
//                         </svg>
//                         Connect Wallet {isLogin ? 'to Sign In' : 'to Sign Up'}
//                     </button>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default LoginPage;


import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup
    const { connectWallet, connectEmail, signupWithEmail } = useAuth();
    const navigate = useNavigate();

    // Handle email login
    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            await connectEmail(email, password);
            navigate('/dashboard');
            toast.success('Successfully logged in with email!', { position: 'top-right' });
        } catch (error) {
            toast.error('Email login failed. Please check your credentials.', { position: 'top-right' });
        }
    };

    // Handle email signup
    const handleEmailSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match!', { position: 'top-right' });
            return;
        }
        try {
            await signupWithEmail(email, password);
            navigate('/dashboard');
            toast.success('Account created successfully!', { position: 'top-right' });
        } catch (error) {
            toast.error('Signup failed. Please try again.', { position: 'top-right' });
        }
    };

    // Handle wallet login
    const handleWalletLogin = async () => {
        try {
            await connectWallet();
            navigate('/dashboard');
            toast.success('Wallet connected successfully!', { position: 'top-right' });
        } catch (error) {
            toast.error('Wallet login failed. Please try again.', { position: 'top-right' });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 transition-all duration-300 ease-in-out hover:shadow-2xl">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </h2>
                    <p className="text-gray-600">
                        {isLogin ? 'Welcome back! Please sign in.' : 'Create a new account.'}
                    </p>
                </div>

                {/* Tabs for switching between Sign In and Sign Up */}
                <div className="flex justify-center mb-6 border-b-2 border-gray-300">
                    <button
                        className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                            }`}
                        onClick={() => setIsLogin(true)}
                    >
                        Sign In
                    </button>
                    <button
                        className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${!isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                            }`}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Conditional rendering based on the tab */}
                <form className="space-y-6" onSubmit={isLogin ? handleEmailLogin : handleEmailSignup}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all duration-300 hover:shadow-md"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all duration-300 hover:shadow-md"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {!isLogin && (
                            <div>
                                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                                <input
                                    id="confirm-password"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all duration-300 hover:shadow-md"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        )}
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-teal-400 hover:from-teal-400 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-transform duration-300 hover:scale-105"
                        >
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </button>
                    </div>
                </form>

                {/* Wallet Login */}
                <div className="relative mt-8">
                    <button
                        onClick={handleWalletLogin}
                        className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-105"
                    >
                        <svg
                            className="w-6 h-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                        Connect Wallet {isLogin ? 'to Sign In' : 'to Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

