const HelloWorld = artifacts.require("HelloWorld");
const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(HelloWorld);
};
