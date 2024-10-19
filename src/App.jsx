/* eslint-disable no-unused-vars */
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './contexts/authContext';
// import { ProtectedRoute } from './components/Auth/ProtectedRoute';
// import LoginPage from './components/Auth/LoginPage';
// // import Dashboard from './components/Dashboard/Dashboard';
// import {
//   getDefaultWallets,
//   RainbowKitProvider,
// } from '@rainbow-me/rainbowkit';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import { mainnet, baseMainnet } from 'wagmi/chains';
// import { publicProvider } from 'wagmi/providers/public';
// import Dash from './components/Dashboard/Dash';

// const { chains, publicClient } = configureChains(
//   [mainnet, baseMainnet],
//   [publicProvider()]
// );

// const { connectors } = getDefaultWallets({
//   appName: 'Your App Name',
//   projectId: 'YOUR_PROJECT_ID', // Get this from WalletConnect
//   chains
// });

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient
// })

// function App() {
//   return (
//     <WagmiConfig config={wagmiConfig}>
//       <RainbowKitProvider chains={chains}>
//         <Router>
//           <AuthProvider>
//             <Routes>
//               <Route path="/login" element={<LoginPage />} />
//               <Route
//                 path="/dashboard"
//                 element={
//                   <ProtectedRoute>
//                     <Dash />
//                   </ProtectedRoute>
//                 }
//               />
//               {/* Add more routes as needed */}
//             </Routes>
//           </AuthProvider>
//         </Router>
//       </RainbowKitProvider>
//     </WagmiConfig>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './components/Auth/LoginPage';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, base } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@rainbow-me/rainbowkit/styles.css';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import MarketplacePage from './pages/MarketplacePage';
import MyAssetsPage from './pages/MyAssetsPage';
import NotificationsPage from './pages/NotificationsPage';
import AccessAiPage from './pages/AccessAiPage';
import SettingsPage from './pages/SettingsPage';


// const { connectors } = getDefaultWallets({
//   appName: 'Your App Name',
//   projectId: 'YOUR_PROJECT_ID', // Get this from WalletConnect
//   chains: [mainnet, base]
// });

// const config = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient: http()
// });

const { wallets } = getDefaultWallets({
  appName: 'Your App Name',
  projectId: 'YOUR_PROJECT_ID', // Get this from WalletConnect
  chains: [mainnet, base]
});

const config = createConfig({
  chains: [mainnet, base],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={[mainnet, base]}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <DashboardLayout />
                    </ProtectedRoute>
                  }
                >

                  <Route index element={<Dashboard />} />
                  <Route path='marketplace' element={<MarketplacePage />} />
                  <Route path='assets' element={<MyAssetsPage />} />
                  <Route path='notification' element={< NotificationsPage />} />
                  <Route path='accessai' element={< AccessAiPage />} />
                  <Route path='settings' element={< SettingsPage />} />
                  {/* Add more routes as needed */}

                </Route>
                {/* Add more routes as needed */}
              </Routes>
              <ToastContainer />
            </AuthProvider>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;