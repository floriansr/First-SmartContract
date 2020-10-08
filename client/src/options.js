import HelloWorld from "./contracts/HelloWorld.json";

const options = {
  contracts: [HelloWorld],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:7545",
    },
  },
};

export default options
