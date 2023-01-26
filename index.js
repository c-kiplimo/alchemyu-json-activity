
const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "https://eth-mainnet.g.alchemy.com/v2/f77ma6-G6-pYqsJCeM2rwuVE4HUffddD";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBlockByNumber",
  params: [
    "0xb443", // block 46147
    false  // retrieve the full transaction object in transactions array
  ]
}).then((response) => {
  console.log(response.data.result);
});