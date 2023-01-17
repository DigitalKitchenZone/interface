/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export declare type ExecuteMsg = {
    receive: Cw20ReceiveMsg;
} | {
    fund: {
        [k: string]: unknown;
    };
} | {
    withdraw: {
        [k: string]: unknown;
    };
};
export declare type Uint128 = string;
export declare type Binary = string;
export interface Cw20ReceiveMsg {
    amount: Uint128;
    msg: Binary;
    sender: string;
    [k: string]: unknown;
}
export declare type TokenInfo = {
    native: {
        amount: Uint128;
        denom: string;
        [k: string]: unknown;
    };
} | {
    cw20: {
        amount: Uint128;
        contract_addr: string;
        [k: string]: unknown;
    };
};
export interface InstantiateMsg {
    counterparty_one: Counterparty;
    counterparty_two: Counterparty;
    [k: string]: unknown;
}
export interface Counterparty {
    address: string;
    promise: TokenInfo;
    [k: string]: unknown;
}
export declare type QueryMsg = {
    status: {
        [k: string]: unknown;
    };
};
export declare type Addr = string;
export declare type CheckedTokenInfo = {
    native: {
        amount: Uint128;
        denom: string;
        [k: string]: unknown;
    };
} | {
    cw20: {
        amount: Uint128;
        contract_addr: Addr;
        [k: string]: unknown;
    };
};
export interface StatusResponse {
    counterparty_one: CheckedCounterparty;
    counterparty_two: CheckedCounterparty;
    [k: string]: unknown;
}
export interface CheckedCounterparty {
    address: Addr;
    promise: CheckedTokenInfo;
    provided: boolean;
    [k: string]: unknown;
}
export declare type CWTokenSwapExecuteMsg = ExecuteMsg;
