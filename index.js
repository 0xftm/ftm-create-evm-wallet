const ethers = require('ethers');
const { gweiToEther } = require('ftm-gas-convert');
const { getGasPrice } = require('ftm-check-gas-price');
const { checkBalance } = require('ftm-check-balance');

// Function to create an EVM wallet
function createEvmWallet() {
    const gweiValue = 3000000000; // 1 Gwei
    const etherValue = gweiToEther(gweiValue);
    console.log(etherValue); // Output: 1 Ether

    const gasPrice = getGasPrice();
    console.log('Gas Price (in GWei):', gasPrice);
    
    const walletAddress = '0x1234567890123456789012345678901234567890'; // Replace with your wallet address
    const providerUrl = 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'; // Replace with your Infura project ID or any other Ethereum provider URL
    checkBalance(walletAddress, providerUrl)
        .then(balance => {
            console.log(`Wallet balance: ${balance} ETH`);
        })
        .catch(error => {
            console.error(error.message);
        });

        
    // Generate random wallet
    const wallet = ethers.Wallet.createRandom();

    // Return wallet address and private key
    return {
        address: wallet.address,
        privateKey: wallet.privateKey
    };
}

// Exporting the createEvmWallet function
module.exports = createEvmWallet;
