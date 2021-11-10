import {toWei} from "./web3Funcs";


export const createVision = async (contract, account, title, descr, amount, deadline) => {
    const response1 = await contract.methods.createVision(title, descr, toWei(amount), deadline).send({
        from: account
    }).then((response) => {

        console.log(response);
    });
    console.log("Created Vision::", response1);
};
