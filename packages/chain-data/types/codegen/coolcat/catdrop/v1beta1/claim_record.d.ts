import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export declare enum Action {
    ActionVote = 0,
    ActionDelegateStake = 1,
    ActionCreateProfile = 2,
    ActionUseClowder = 3,
    UNRECOGNIZED = -1
}
export declare enum ActionSDKType {
    ActionVote = 0,
    ActionDelegateStake = 1,
    ActionCreateProfile = 2,
    ActionUseClowder = 3,
    UNRECOGNIZED = -1
}
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
export interface ClaimRecord {
    /** address of claim user */
    address: string;
    /** total initial claimable amount for the user */
    initialClaimableAmount: Coin[];
    /**
     * true if action is completed
     * index of bool in array refers to action enum #
     */
    actionCompleted: boolean[];
}
export interface ClaimRecordSDKType {
    /** address of claim user */
    address: string;
    /** total initial claimable amount for the user */
    initial_claimable_amount: CoinSDKType[];
    /**
     * true if action is completed
     * index of bool in array refers to action enum #
     */
    action_completed: boolean[];
}
export declare const ClaimRecord: {
    encode(message: ClaimRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord;
    fromJSON(object: any): ClaimRecord;
    toJSON(message: ClaimRecord): unknown;
    fromPartial(object: Partial<ClaimRecord>): ClaimRecord;
};
