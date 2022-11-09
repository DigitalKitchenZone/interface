/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Duration, Threshold, ConfigResponse, CosmosMsgForEmpty, Vote, Coin, DepositInfo, GetVoteResponse, InfoResponse, ListProposalsResponse, ProposalResponse, ListVotesResponse, ProposalCountResponse, ProposalHooksResponse, ReverseProposalsResponse, VoteHooksResponse } from "./CWProposalSingle.types";
export interface CWProposalSingleReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
    proposal: ({ proposalId }: {
        proposalId: number;
    }) => Promise<ProposalResponse>;
    listProposals: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: number;
    }) => Promise<ListProposalsResponse>;
    reverseProposals: ({ limit, startBefore }: {
        limit?: number;
        startBefore?: number;
    }) => Promise<ReverseProposalsResponse>;
    proposalCount: () => Promise<ProposalCountResponse>;
    getVote: ({ proposalId, voter }: {
        proposalId: number;
        voter: string;
    }) => Promise<GetVoteResponse>;
    listVotes: ({ limit, proposalId, startAfter }: {
        limit?: number;
        proposalId: number;
        startAfter?: string;
    }) => Promise<ListVotesResponse>;
    proposalHooks: () => Promise<ProposalHooksResponse>;
    voteHooks: () => Promise<VoteHooksResponse>;
    info: () => Promise<InfoResponse>;
}
export declare class CWProposalSingleQueryClient implements CWProposalSingleReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
    proposal: ({ proposalId }: {
        proposalId: number;
    }) => Promise<ProposalResponse>;
    listProposals: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: number;
    }) => Promise<ListProposalsResponse>;
    reverseProposals: ({ limit, startBefore }: {
        limit?: number;
        startBefore?: number;
    }) => Promise<ReverseProposalsResponse>;
    proposalCount: () => Promise<ProposalCountResponse>;
    getVote: ({ proposalId, voter }: {
        proposalId: number;
        voter: string;
    }) => Promise<GetVoteResponse>;
    listVotes: ({ limit, proposalId, startAfter }: {
        limit?: number;
        proposalId: number;
        startAfter?: string;
    }) => Promise<ListVotesResponse>;
    proposalHooks: () => Promise<ProposalHooksResponse>;
    voteHooks: () => Promise<VoteHooksResponse>;
    info: () => Promise<InfoResponse>;
}
export interface CWProposalSingleInterface extends CWProposalSingleReadOnlyInterface {
    contractAddress: string;
    sender: string;
    propose: ({ description, msgs, title }: {
        description: string;
        msgs: CosmosMsgForEmpty[];
        title: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, vote }: {
        proposalId: number;
        vote: Vote;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    execute: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    close: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ allowRevoting, closeProposalOnExecutionFailure, dao, depositInfo, maxVotingPeriod, minVotingPeriod, onlyMembersExecute, threshold }: {
        allowRevoting: boolean;
        closeProposalOnExecutionFailure: boolean;
        dao: string;
        depositInfo?: DepositInfo;
        maxVotingPeriod: Duration;
        minVotingPeriod?: Duration;
        onlyMembersExecute: boolean;
        threshold: Threshold;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addProposalHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeProposalHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addVoteHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeVoteHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class CWProposalSingleClient extends CWProposalSingleQueryClient implements CWProposalSingleInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    propose: ({ description, msgs, title }: {
        description: string;
        msgs: CosmosMsgForEmpty[];
        title: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, vote }: {
        proposalId: number;
        vote: Vote;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    execute: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    close: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ allowRevoting, closeProposalOnExecutionFailure, dao, depositInfo, maxVotingPeriod, minVotingPeriod, onlyMembersExecute, threshold }: {
        allowRevoting: boolean;
        closeProposalOnExecutionFailure: boolean;
        dao: string;
        depositInfo?: DepositInfo;
        maxVotingPeriod: Duration;
        minVotingPeriod?: Duration;
        onlyMembersExecute: boolean;
        threshold: Threshold;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addProposalHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeProposalHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addVoteHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeVoteHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}