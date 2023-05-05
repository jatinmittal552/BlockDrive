import { connectWallet, wallet } from "../utils/wallet";

const GetStartedBtn = () => {
  const onConnectWallet = async() => {
    console.log("hello");
    // connectWallet();
    await wallet.requestPermissions({network:{type:"ghostnet"}});
  }
  return (
    <button className="bg-secondary rounded-[7px] px-4 py-2 text-[0.8rem] text-getStarted font-bold" onClick={onConnectWallet}>
     Connect Wallet
    </button>
  );
};

export default GetStartedBtn;
