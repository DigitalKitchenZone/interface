/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export interface DumpResponse {
    groups: Group[];
    [k: string]: unknown;
}
export interface Group {
    addresses: string[];
    name: string;
    [k: string]: unknown;
}
export declare type ExecuteMsg = {
    update: {
        addresses_to_add?: string[] | null;
        addresses_to_remove?: string[] | null;
        group: string;
        [k: string]: unknown;
    };
} | {
    remove_group: {
        group: string;
        [k: string]: unknown;
    };
} | {
    update_owner: {
        owner: string;
        [k: string]: unknown;
    };
};
export interface InstantiateMsg {
    groups?: Group[] | null;
    [k: string]: unknown;
}
export interface IsAddressInGroupResponse {
    is_in_group: boolean;
    [k: string]: unknown;
}
export declare type Addr = string;
export interface ListAddressesResponse {
    addresses: Addr[];
    [k: string]: unknown;
}
export interface ListGroupsResponse {
    groups: string[];
    [k: string]: unknown;
}
export declare type QueryMsg = {
    dump: {
        [k: string]: unknown;
    };
} | {
    list_groups: {
        address: string;
        limit?: number | null;
        offset?: number | null;
        [k: string]: unknown;
    };
} | {
    list_addresses: {
        group: string;
        limit?: number | null;
        offset?: number | null;
        [k: string]: unknown;
    };
} | {
    is_address_in_group: {
        address: string;
        group: string;
        [k: string]: unknown;
    };
};
export declare type CWNamedGroupsExecuteMsg = ExecuteMsg;
