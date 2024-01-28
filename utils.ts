import fs from "fs/promises";
import { Presets, SingleBar } from "cli-progress";
import { KEYS_FILENAME, TX_SCAN } from "./constants";
import { Network } from "./types";

export async function loadKeys() {
  const file = await fs.readFile(KEYS_FILENAME, { encoding: "utf8" });

  return file.split("\n").filter(Boolean).map((item) => item.trim());
}

export const delay = (seconds: number) => {
  return new Promise<void>((resolve) => {
    const bar = new SingleBar({
      format: "Delay [{bar}] {value}/{total}",
    }, Presets.shades_classic);

    bar.start(seconds, 0);
    let counter = 0;

    const timer = setInterval(() => {
      counter = counter + 1;
      bar.update(counter);
      if (counter === seconds) {
        clearInterval(timer);
        bar.stop();
        resolve();
      }
    }, 1000);
  });
};

export function getTxLink(network: Network, txHash: string) {
  const url = TX_SCAN[network];
  return `${url}${txHash}`;
}
