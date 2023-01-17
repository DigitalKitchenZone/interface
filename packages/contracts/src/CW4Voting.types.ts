/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type DaoResponse = string;
export type ExecuteMsg = {
  member_changed_hook: {
    diffs: MemberDiff[];
    [k: string]: unknown;
  };
};
export interface MemberDiff {
  key: string;
  new?: number | null;
  old?: number | null;
  [k: string]: unknown;
}
export type GroupContractResponse = string;
export interface InfoResponse {
  info: ContractVersion;
  [k: string]: unknown;
}
export interface ContractVersion {
  contract: string;
  version: string;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  cw4_group_code_id: number;
  initial_members: Member[];
  [k: string]: unknown;
}
export interface Member {
  addr: string;
  weight: number;
  [k: string]: unknown;
}
export interface MigrateMsg {
  [k: string]: unknown;
}
export type QueryMsg = {
  group_contract: {
    [k: string]: unknown;
  };
} | {
  dao: {
    [k: string]: unknown;
  };
} | {
  voting_power_at_height: {
    address: string;
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  total_power_at_height: {
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  info: {
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export interface TotalPowerAtHeightResponse {
  height: number;
  power: Uint128;
  [k: string]: unknown;
}
export interface VotingPowerAtHeightResponse {
  height: number;
  power: Uint128;
  [k: string]: unknown;
}
export type CW4VotingExecuteMsg = ExecuteMsg;