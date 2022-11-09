/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MemberDiff } from "./CW4Voting.types";
export interface CW4VotingMessage {
    contractAddress: string;
    sender: string;
    memberChangedHook: ({ diffs }: {
        diffs: MemberDiff[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class CW4VotingMessageComposer implements CW4VotingMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    memberChangedHook: ({ diffs }: {
        diffs: MemberDiff[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}