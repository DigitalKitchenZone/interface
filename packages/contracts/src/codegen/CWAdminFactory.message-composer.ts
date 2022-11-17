/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { ExecuteMsg, Binary, InstantiateMsg } from "./CWAdminFactory.types";
export interface CWAdminFactoryMessage {
  contractAddress: string;
  sender: string;
  instantiateContractWithSelfAdmin: ({
    codeId,
    instantiateMsg,
    label
  }: {
    codeId: number;
    instantiateMsg: Binary;
    label: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class CWAdminFactoryMessageComposer implements CWAdminFactoryMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.instantiateContractWithSelfAdmin = this.instantiateContractWithSelfAdmin.bind(this);
  }

  instantiateContractWithSelfAdmin = ({
    codeId,
    instantiateMsg,
    label
  }: {
    codeId: number;
    instantiateMsg: Binary;
    label: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          instantiate_contract_with_self_admin: {
            code_id: codeId,
            instantiate_msg: instantiateMsg,
            label
          }
        })),
        funds
      })
    };
  };
}