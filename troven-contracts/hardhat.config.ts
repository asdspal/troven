import { defineConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-verify";

const spectrumRpc = process.env.NEXT_PUBLIC_SPECTRUM_RPC;
const mezoTestnetRpc = process.env.NEXT_PUBLIC_MEZO_TESTNET_RPC ?? "https://rpc.test.mezo.org";

export default defineConfig({
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "london",
      optimizer: { enabled: true, runs: 200 },
    },
  },
  networks: {
    mezotestnet: {
      type: "http",
      url: spectrumRpc ?? mezoTestnetRpc,
      chainId: 31611,
      accounts: process.env.DEPLOYER_KEY ? [process.env.DEPLOYER_KEY] : [],
    },
    mezomainnet: {
      type: "http",
      url: "https://rpc-http.mezo.boar.network",
      chainId: 31612,
      accounts: process.env.DEPLOYER_KEY ? [process.env.DEPLOYER_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      mezotestnet: "placeholder",
    },
    customChains: [
      {
        network: "mezotestnet",
        chainId: 31611,
        urls: {
          apiURL: "https://explorer.test.mezo.org/api",
          browserURL: "https://explorer.test.mezo.org",
        },
      },
    ],
  },
});
