import { Action, ActionSDKType } from "./claim_record";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface MsgClaimFor {
    sender: string;
    address: string;
    action: Action;
}
export interface MsgClaimForSDKType {
    sender: string;
    address: string;
    action: ActionSDKType;
}
export interface MsgClaimForResponse {
    address: string;
    /** total initial claimable amount for the user */
    claimedAmount: Coin[];
}
export interface MsgClaimForResponseSDKType {
    address: string;
    /** total initial claimable amount for the user */
    claimed_amount: CoinSDKType[];
}
export declare const MsgClaimFor: {
    encode(message: MsgClaimFor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimFor;
    fromJSON(object: any): MsgClaimFor;
    toJSON(message: MsgClaimFor): unknown;
    fromPartial(object: Partial<MsgClaimFor>): MsgClaimFor;
};
export declare const MsgClaimForResponse: {
    encode(message: MsgClaimForResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimForResponse;
    fromJSON(object: any): MsgClaimForResponse;
    toJSON(message: MsgClaimForResponse): unknown;
    fromPartial(object: Partial<MsgClaimForResponse>): MsgClaimForResponse;
};
