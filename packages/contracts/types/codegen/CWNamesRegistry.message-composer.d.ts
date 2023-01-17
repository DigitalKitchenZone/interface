/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
export interface CWNamesRegistryMessage {
    contractAddress: string;
    sender: string;
    registerName: ({ name }: {
        name: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ newAdmin }: {
        newAdmin?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    reserve: ({ name }: {
        name: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    revoke: ({ name }: {
        name: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class CWNamesRegistryMessageComposer implements CWNamesRegistryMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    registerName: ({ name }: {
        name: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ newAdmin }: {
        newAdmin?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    reserve: ({ name }: {
        name: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    revoke: ({ name }: {
        name: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
