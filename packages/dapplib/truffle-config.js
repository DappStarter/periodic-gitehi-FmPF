require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remain unfold inner clip bottom gift'; 
let testAccounts = [
"0x51efd668f440ecde12dacf66a10abec995fcbf36c3d62e870fdd26a17b5fa9d8",
"0xdb67048a371f8406cb2187b3f8b0e5f7ec3a64916c6907f961be7086b441cce3",
"0x83399ee2bca817e4845c6b687f1f0182aabe02ef1c69a192f4b7ef15f2c79661",
"0x4a54aab09f94a02d5b953395fdc89ac8cac97ed228871f58888c645c0905fd13",
"0xe7f084ba81dfcf5013cd98d57f51ae5554ab6ea07d6d1ed9146ff39a8f481671",
"0xe1b3c0ee2184418baa3ae5709aa97cacee743fe390a876533729b0370a05f83c",
"0x29d3da549c819b6d92b520c25704ae31678b866e010b17c007980e635095ffc7",
"0x8006b5eae464ae7b44f838b63b299c06ce3450e302619444b0a07d4d06a4e397",
"0x3263d96fa065091343247c55d22877aab1555651d56637fae7b843cfe8902a54",
"0xf604919affce5baef823235518499338aabc355a16aecba42ca95dd03516c662"
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

