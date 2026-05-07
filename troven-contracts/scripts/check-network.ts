import { ethers } from "ethers";
import { JsonRpcProvider } from "ethers";

const provider = new JsonRpcProvider(
  process.env.NEXT_PUBLIC_SPECTRUM_RPC ??
    process.env.NEXT_PUBLIC_MEZO_TESTNET_RPC ??
    "https://rpc.test.mezo.org"
);

async function main() {
  const network = await provider.getNetwork();
  console.log("chainId:", network.chainId.toString());
  console.log("name:", network.name ?? "unknown");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
