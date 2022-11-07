import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { ClaimRecord, ClaimRecordSDKType } from "./claim_record";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
    /**
     * this line is used by starport scaffolding # genesis/proto/state
     * balance of the claim module's account
     */
    moduleAccountBalance?: Coin;
    /** params defines all the parameters of the module. */
    params?: Params;
    /** list of claim records, one for every airdrop recipient */
    claimRecords: ClaimRecord[];
}
/** GenesisState defines the claim module's genesis state. */
export interface GenesisStateSDKType {
    /**
     * this line is used by starport scaffolding # genesis/proto/state
     * balance of the claim module's account
     */
    module_account_balance?: CoinSDKType;
    /** params defines all the parameters of the module. */
    params?: ParamsSDKType;
    /** list of claim records, one for every airdrop recipient */
    claim_records: ClaimRecordSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
