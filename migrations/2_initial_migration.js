const CappedAToken = artifacts.require("ERC20_CappedAToken.sol");

module.exports = async function (deployer, network, accounts) {
 await deployer.deploy(CappedAToken);
};

// > transaction hash:    0x1f1837fb215c8bca3cf70058ff0fb4481ac6d9e283c91e9a97e2936d68fa81ef
// > contract address:    0xF47eE939B1E69F08F4A48655C33f6272B502047f