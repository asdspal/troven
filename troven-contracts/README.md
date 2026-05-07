# Troven Contracts — Step M0.1

This workspace contains the Hardhat project that backs the Troven blueprint. Step M0.1 focuses on bootstrapping the toolchain, verifying connectivity to Mezo testnet, and preparing directories for upcoming contract work.

## Project Structure

- [`hardhat.config.ts`](hardhat.config.ts) — Solidity 0.8.28, `london` EVM, Mezo testnet/mainnet targets.
- [`contracts/interfaces/`](contracts/interfaces) — landing zone for BorrowerOperations/TroveManager/etc. definitions in Step M1.
- [`scripts/`](scripts) — includes [`scripts/check-network.ts`](scripts/check-network.ts) for RPC verification.
- [`test/`](test) — placeholder for future mocha/ethers tests.

## Quickstart

```bash
pnpm install
pnpm hardhat compile
pnpm hardhat run scripts/check-network.ts --network mezotestnet
```

Environment variables live in [.env](.env) — set `DEPLOYER_KEY`, `NEXT_PUBLIC_SPECTRUM_RPC`, and `NEXT_PUBLIC_MEZO_TESTNET_RPC` before running live network commands.
