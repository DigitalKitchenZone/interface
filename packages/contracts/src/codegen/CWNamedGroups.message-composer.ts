/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { DumpResponse, Group, ExecuteMsg, InstantiateMsg, IsAddressInGroupResponse, Addr, ListAddressesResponse, ListGroupsResponse, QueryMsg } from "./CWNamedGroups.types";
export interface CWNamedGroupsMessage {
  contractAddress: string;
  sender: string;
  update: ({
    addressesToAdd,
    addressesToRemove,
    group
  }: {
    addressesToAdd?: string[];
    addressesToRemove?: string[];
    group: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeGroup: ({
    group
  }: {
    group: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateOwner: ({
    owner
  }: {
    owner: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class CWNamedGroupsMessageComposer implements CWNamedGroupsMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.update = this.update.bind(this);
    this.removeGroup = this.removeGroup.bind(this);
    this.updateOwner = this.updateOwner.bind(this);
  }

  update = ({
    addressesToAdd,
    addressesToRemove,
    group
  }: {
    addressesToAdd?: string[];
    addressesToRemove?: string[];
    group: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update: {
            addresses_to_add: addressesToAdd,
            addresses_to_remove: addressesToRemove,
            group
          }
        })),
        funds
      })
    };
  };
  removeGroup = ({
    group
  }: {
    group: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_group: {
            group
          }
        })),
        funds
      })
    };
  };
  updateOwner = ({
    owner
  }: {
    owner: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_owner: {
            owner
          }
        })),
        funds
      })
    };
  };
}