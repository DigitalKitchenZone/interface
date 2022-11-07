/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { ConfigResponse, IsNameAvailableToRegisterResponse, LookUpDaoByNameResponse, LookUpNameByDaoResponse } from "./CWNamesRegistry.types";
export interface CWNamesRegistryReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
    lookUpNameByDao: ({ dao }: {
        dao: string;
    }) => Promise<LookUpNameByDaoResponse>;
    lookUpDaoByName: ({ name }: {
        name: string;
    }) => Promise<LookUpDaoByNameResponse>;
    isNameAvailableToRegister: ({ name }: {
        name: string;
    }) => Promise<IsNameAvailableToRegisterResponse>;
}
export declare class CWNamesRegistryQueryClient implements CWNamesRegistryReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
    lookUpNameByDao: ({ dao }: {
        dao: string;
    }) => Promise<LookUpNameByDaoResponse>;
    lookUpDaoByName: ({ name }: {
        name: string;
    }) => Promise<LookUpDaoByNameResponse>;
    isNameAvailableToRegister: ({ name }: {
        name: string;
    }) => Promise<IsNameAvailableToRegisterResponse>;
}
export interface CWNamesRegistryInterface extends CWNamesRegistryReadOnlyInterface {
    contractAddress: string;
    sender: string;
    registerName: ({ name }: {
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ newAdmin }: {
        newAdmin?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    reserve: ({ name }: {
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    revoke: ({ name }: {
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class CWNamesRegistryClient extends CWNamesRegistryQueryClient implements CWNamesRegistryInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    registerName: ({ name }: {
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ newAdmin }: {
        newAdmin?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    reserve: ({ name }: {
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    revoke: ({ name }: {
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}