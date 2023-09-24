import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@rainbow-me/rainbowkit/styles.css";

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  metaMaskWallet,
  rabbyWallet,
  trustWallet,
  coinbaseWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { RainbowKitProvider, midnightTheme } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  arbitrum,
  cronos,
  fantom,
  metis,
  optimism,
  polygon,
  goerli,
} from "wagmi/chains";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const APP_NAME = "Illuminate";
const ALCHEMY_API_KEY = "8LUUJsgQ0npoREz6yHrDptBZ6eOD_AWh";
const WC_PROJECT_ID = "3d4102b7aeae67e08285a519f9f16328";

const { chains, publicClient } = configureChains(
  [mainnet, arbitrum, cronos, fantom, metis, optimism, polygon, goerli],
  [alchemyProvider({ apiKey: ALCHEMY_API_KEY }), publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet({ chains }),
      rabbyWallet({ chains }),
      metaMaskWallet({ projectId: WC_PROJECT_ID, chains }),
    ],
  },
  {
    groupName: "Alternatives",
    wallets: [
      trustWallet({ projectId: WC_PROJECT_ID, chains }),
      coinbaseWallet({ appName: APP_NAME, chains }),
    ],
  },
  {
    groupName: "WalletConnect",
    wallets: [walletConnectWallet({ projectId: WC_PROJECT_ID, chains })],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

import App from "./App";

const Root = (): JSX.Element => {
  return (
    <StrictMode>
      <BrowserRouter>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains} theme={midnightTheme()}>
            <App />
          </RainbowKitProvider>
        </WagmiConfig>
      </BrowserRouter>
    </StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
