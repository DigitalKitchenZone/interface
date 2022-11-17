/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Duration, Threshold, CosmosMsgForEmpty, Vote, Coin, DepositInfo } from "./CWProposalSingle.types";
export interface CWProposalSingleMessage {
    contractAddress: string;
    sender: string;
    propose: ({ description, msgs, title }: {
        description: string;
        msgs: CosmosMsgForEmpty[];
        title: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    vote: ({ proposalId, vote }: {
        proposalId: number;
        vote: Vote;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    execute: ({ proposalId }: {
        proposalId: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    close: ({ proposalId }: {
        proposalId: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ allowRevoting, closeProposalOnExecutionFailure, dao, depositInfo, maxVotingPeriod, minVotingPeriod, onlyMembersExecute, threshold }: {
        allowRevoting: boolean;
        closeProposalOnExecutionFailure: boolean;
        dao: string;
        depositInfo?: DepositInfo;
        maxVotingPeriod: Duration;
        minVotingPeriod?: Duration;
        onlyMembersExecute: boolean;
        threshold: Threshold;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    addProposalHook: ({ address }: {
        address: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeProposalHook: ({ address }: {
        address: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    addVoteHook: ({ address }: {
        address: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeVoteHook: ({ address }: {
        address: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class CWProposalSingleMessageComposer implements CWProposalSingleMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    propose: ({ description, msgs, title }: {
        description: string;
        msgs: CosmosMsgForEmpty[];
        title: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    vote: ({ proposalId, vote }: {
        proposalId: number;
        vote: Vote;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    execute: ({ proposalId }: {
        proposalId: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    close: ({ proposalId }: {
        proposalId: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateConfig: ({ allowRevoting, closeProposalOnExecutionFailure, dao, depositInfo, maxVotingPeriod, minVotingPeriod, onlyMembersExecute, threshold }: {
        allowRevoting: boolean;
        closeProposalOnExecutionFailure: boolean;
        dao: string;
        depositInfo?: DepositInfo;
        maxVotingPeriod: Duration;
        minVotingPeriod?: Duration;
        onlyMembersExecute: boolean;
        threshold: Threshold;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    addProposalHook: ({ address }: {
        address: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeProposalHook: ({ address }: {
        address: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    addVoteHook: ({ address }: {
        address: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeVoteHook: ({ address }: {
        address: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
