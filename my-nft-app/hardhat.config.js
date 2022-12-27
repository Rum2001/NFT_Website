require("@nomicfoundation/hardhat-toolbox");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.17",
    networks: {
      goerli: {
        url: "wss://shy-smart-county.rinkeby.discover.quiknode.pro/b2575425197d5832b93e7a028551cca873c0fb0f/",
        accounts: ["0x39D4E17Df480caD1149ce30785Ebb3A59900eC65"]
      },
    },
};