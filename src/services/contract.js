import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "../config";

export const getContract = async () => {
    if (!window.ethereum) {
        throw new Error("MetaMask is required. Please install MetaMask.");
    }

    const provider = new ethers.BrowserProvider(window.ethereum); // ✅ Correct for ethers v6
    const signer = await provider.getSigner(); // ✅ Ensure signer is fetched
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    return { contract, signer }; // ✅ Return both contract and signer
};
