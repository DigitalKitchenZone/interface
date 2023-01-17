/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Uint128, Binary } from "./CWTokenSwap.types";
export interface CWTokenSwapMessage {
    contractAddress: string;
    sender: string;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    fund: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    withdraw: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class CWTokenSwapMessageComposer implements CWTokenSwapMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    fund: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    withdraw: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
