import styles from "./Connect.module.scss";

import { CSSProperties } from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: CSSProperties;
}
const Button = ({ text, style, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      style={style}
      onClick={onClick}
      className={styles.button}
    >
      {text}
    </button>
  );
};

const Connect = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,

        mounted,
      }) => {
        const connected = account && chain;

        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button text="CONNECT WALLET" onClick={openConnectModal} />
                );
              }

              if (chain.unsupported) {
                return <Button text="Wrong Network" onClick={openChainModal} />;
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <Button
                    onClick={openChainModal}
                    text={chain.name ?? "Unknown Network"}
                    style={{ display: "flex", alignItems: "center" }}
                  />

                  <Button
                    onClick={openAccountModal}
                    text={account.displayName}
                    style={{ display: "flex", alignItems: "center" }}
                  />
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default Connect;
