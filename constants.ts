import { Network } from "./types";

export const FROM_NETWORK: Network = Network.Arbitrum;
export const TO_NETWORK: Network = Network.Optimism;

export const KEYS_FILENAME = "keys.txt";

export const DELAY_FROM_SECONDS = 10;
export const DELAY_TO_SECONDS = 20;

export const TO = "0x0a88bc5c32b684d467b43c06d9e0899efeaf59df";

export const DATA =
  "0x646174613a2c7b2270223a226c61796572322d3230222c226f70223a22636c61696d222c227469636b223a22244c32222c22616d74223a2231303030227d";

export const RPC_URLS = {
  [Network.Base]: "https://base.llamarpc.com",
  [Network.Optimism]: "https://optimism.llamarpc.com",
  [Network.Arbitrum]: "https://1rpc.io/arb",
  [Network.Linea]: "https://1rpc.io/linea",
  [Network.zkSync]: "https://mainnet.era.zksync.io",
  [Network.PolygonZkEVM]: "https://polygon-zkevm.drpc.org",
  [Network.Scroll]: "https://rpc.ankr.com/scroll",
};

export const VALUES = {
  [Network.Base]: 0.000230000000009021,
  [Network.Optimism]: 0.000230000000009007,
  [Network.Arbitrum]: 0.000230000000009002,
  [Network.Linea]: 0.000230000000009023,
  [Network.zkSync]: 0.000230000000009014,
  [Network.PolygonZkEVM]: 0.000230000000009017,
  [Network.Scroll]: 0.000230000000009019,
};

export const TX_SCAN = {
  [Network.Base]: "https://basescan.org/tx/",
  [Network.Optimism]: "https://optimistic.etherscan.io/tx/",
  [Network.Arbitrum]: "https://arbiscan.io/tx/",
  [Network.Linea]: "https://lineascan.build/tx/",
  [Network.zkSync]: "https://explorer.zksync.io/tx/",
  [Network.PolygonZkEVM]: "https://zkevm.polygonscan.com/tx/",
  [Network.Scroll]: "https://scrollscan.com/tx",
};
