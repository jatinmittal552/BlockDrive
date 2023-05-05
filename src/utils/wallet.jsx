// TODO 2.a - Setup a Beacon Wallet instance
import { BeaconWallet } from "@taquito/beacon-wallet";

export const wallet = new BeaconWallet({
    name: "Tezos File Storage System Dapp",
    preferredNetwork: "ghostnet",
    eventHandlers: {
        PERMISSION_REQUEST_SUCCESS: {
          handler: async (data) => {
            console.log('permission data:', data);
          },
        },
      },
})

// TODO 2.b - Complete connectWallet function (for ghostnet)
export const connectWallet = async () => {
    console.log("check");
    console.log(wallet);
    await wallet.requestPermissions({ network: {type: "ghostnet"}});
    console.log("hello");
    // await wallet.requestPermissions();
};

// TODO 2.c - Complete getAccount function
export const getAccount = async () => {
    const connectedWallet = await wallet.client.getActiveAccount();
    if (connectedWallet) {
        return connectedWallet.address;
    }
    else{
        return "";
    }
};

export const LogOut = async () => {
    await wallet.clearActiveAccount();


}