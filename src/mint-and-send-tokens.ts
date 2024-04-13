// import { ethers } from "ethers";
// import { ethers } from "hardhat";
const { ethers } = require("hardhat");

import {GreenToken} from "../typechain-types";

const mint_and_send_tokens = async (numTokens: number, accountAddress: string) => {
  // Mint Tokens using supplier funds
  const GreenTokenFactory = await ethers.getContractFactory("GreenToken");
  const greenToken = GreenTokenFactory.attach("0xEb4B1a7768bA4Cefb12Af81e786911f98AEB3C1D") as GreenToken;

  const mint_transaction = await greenToken.buy({
      value: ethers.parseEther(String(numTokens))
  });
  await mint_transaction.wait(1);

  const balance_before = await greenToken.balanceOf(accountAddress);
  console.log("GreenToken balance before: ", balance_before);

  const transfer_transaction = await greenToken.transfer(accountAddress, ethers.parseEther(String(numTokens)));
  await transfer_transaction.wait(1);

  const balance_after = await greenToken.balanceOf(accountAddress);
  console.log("GreenToken balance after: ", balance_after);

}

function calculate_num_tokens(inWeight: number, outWeight: number): number {
  const numTokens = Math.round(((inWeight - outWeight) / inWeight) * 100);
  return numTokens;
}