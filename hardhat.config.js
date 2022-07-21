require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/NxqTpvtF2Oc8wO4Yl8A__1MD-fkG2bgm",
      accounts: ["e3e1b92aba1c2e4b657c4a6f25cee54108cee8f54633b1533a8b29136f402de1"],
    },
  },
};