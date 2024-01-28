import cli from "cli";
import { JsonRpcProvider, parseEther, Wallet } from "ethers";
import random from "lodash/random";
import {
  DATA,
  DELAY_FROM_SECONDS,
  DELAY_TO_SECONDS,
  FROM_NETWORK,
  RPC_URLS,
  TO,
  TO_NETWORK,
  VALUES,
} from "./constants";
import { delay, getTxLink, loadKeys } from "./utils";

const keys = await loadKeys();
const provider = new JsonRpcProvider(RPC_URLS[FROM_NETWORK]);

if (FROM_NETWORK === TO_NETWORK) {
  console.log("FROM_NETWORK и TO_NETWORK не должны совпадать");
}

async function mint(key: string) {
  const wallet = new Wallet(key, provider);
  const { address } = wallet;

  const balance = await provider.getBalance(address);

  if (balance === 0n) {
    console.log("0 balance");
    return;
  }

  const { maxFeePerGas, maxPriorityFeePerGas } = await provider
    .getFeeData();

  cli.spinner("Отправляю транзакцию");

  const value = parseEther(VALUES[TO_NETWORK].toString());

  const tx = await wallet.sendTransaction({
    from: address,
    to: TO,
    value,
    data: DATA,
    maxFeePerGas,
    maxPriorityFeePerGas,
  });

  await provider.waitForTransaction(tx.hash);

  cli.spinner(getTxLink(FROM_NETWORK, tx.hash), true);
}

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const count = i + 1;
  const { length } = keys;
  const last = i === keys.length - 1;
  const { address } = new Wallet(key);

  console.log(`${count}/${length}: ${address}`);

  try {
    await mint(key);
  } catch (error) {
    console.log(error.message);
    cli.spinner("", true);
  }

  if (!last) {
    await delay(random(DELAY_FROM_SECONDS, DELAY_TO_SECONDS));
  }
}
