/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { DumpResponse, IsAddressInGroupResponse, ListAddressesResponse, ListGroupsResponse } from "./CWNamedGroups.types";
export interface CWNamedGroupsReadOnlyInterface {
    contractAddress: string;
    dump: () => Promise<DumpResponse>;
    listGroups: ({ address, limit, offset }: {
        address: string;
        limit?: number;
        offset?: number;
    }) => Promise<ListGroupsResponse>;
    listAddresses: ({ group, limit, offset }: {
        group: string;
        limit?: number;
        offset?: number;
    }) => Promise<ListAddressesResponse>;
    isAddressInGroup: ({ address, group }: {
        address: string;
        group: string;
    }) => Promise<IsAddressInGroupResponse>;
}
export declare class CWNamedGroupsQueryClient implements CWNamedGroupsReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    dump: () => Promise<DumpResponse>;
    listGroups: ({ address, limit, offset }: {
        address: string;
        limit?: number;
        offset?: number;
    }) => Promise<ListGroupsResponse>;
    listAddresses: ({ group, limit, offset }: {
        group: string;
        limit?: number;
        offset?: number;
    }) => Promise<ListAddressesResponse>;
    isAddressInGroup: ({ address, group }: {
        address: string;
        group: string;
    }) => Promise<IsAddressInGroupResponse>;
}
export interface CWNamedGroupsInterface extends CWNamedGroupsReadOnlyInterface {
    contractAddress: string;
    sender: string;
    update: ({ addressesToAdd, addressesToRemove, group }: {
        addressesToAdd?: string[];
        addressesToRemove?: string[];
        group: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeGroup: ({ group }: {
        group: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateOwner: ({ owner }: {
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class CWNamedGroupsClient extends CWNamedGroupsQueryClient implements CWNamedGroupsInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    update: ({ addressesToAdd, addressesToRemove, group }: {
        addressesToAdd?: string[];
        addressesToRemove?: string[];
        group: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeGroup: ({ group }: {
        group: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateOwner: ({ owner }: {
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}