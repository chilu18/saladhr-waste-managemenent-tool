import { ethers } from 'ethers';
import { GreenToken__factory, GreenToken } from './typechain-types';
import contract from './typechain-types/contracts/GreenToken.json'

export const mint_and_send_tokens = async (numTokens: number, accountAddress: string) => {
  const provider = new ethers.JsonRpcProvider("https://rpc-evm-sidechain.xrpl.org");
  const signer = new ethers.Wallet("b78425e8ffe0a1fac052d0996987fbde38fd29eb60d2201623905a68944c7edb", provider);

  const GreenTokenContract = new ethers.Contract("0xEb4B1a7768bA4Cefb12Af81e786911f98AEB3C1D", contract.abi, signer);

  const mint_transaction = await GreenTokenContract.buy({ value: ethers.parseEther(String(numTokens)), gasLimit: 500_000 });
  await mint_transaction.wait(1);

  const balance_before = await GreenTokenContract.balanceOf(accountAddress);
  console.log("GreenToken balance before: ", balance_before);

  const transfer_transaction = await GreenTokenContract.transfer(accountAddress, ethers.parseEther(String(numTokens)));
  await transfer_transaction.wait(1);

  const balance_after = await GreenTokenContract.balanceOf(accountAddress);
  console.log("GreenToken balance after: ", balance_after);

};

export function calculate_num_tokens(inWeight: number, outWeight: number): number {
  const int_num_tokens = ((inWeight - outWeight) / inWeight) * 100;
  const numTokens = Math.round(0.01*(Math.pow(1.09, int_num_tokens)));
  return numTokens;
}
