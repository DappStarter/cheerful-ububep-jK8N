require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind proof install basket foster gate'; 
let testAccounts = [
"0x814af57650adbc866f9f82a55126165743021654064ea709f14f761acc1af9a0",
"0x97d702e8dddb97df248761bfb999b0b2b55d8e6c1d83b4a316afc3972c11e9f4",
"0x821372d58105ac47a94f81aee614fe57b75c84863afec7a3272f3a699ab54bad",
"0x446ae5204db7b27227bd8da763b07699d9bd4d971ac27ea5951d79262478c41f",
"0xbe9548160317bd8238a30c573c107af5757ee8558244e0793515f605aa7f4373",
"0x4ed2f1f8e5e6e643585dad003c0b20f76bb2e1e048a3e009934fde53b8d2189e",
"0x2ef5787a2707fafda9895215e20cbeb00271d41eb0a4bc3f6a01c2ad8b26ebc7",
"0xfc43cc78b1939e30a0cc8164abf8f341024c6272f6ad730d91754bc6da180437",
"0xef9bef19d33f26b2667c6cbf84c4b777f0bbc8f68ce77108fd0312741083a39b",
"0x887cbc0c889ddad308b3cae0ad2ca14e13001a1fdae841695badbc1f77bb4834"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

