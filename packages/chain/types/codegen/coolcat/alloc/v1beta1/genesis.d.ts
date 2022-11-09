import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the alloc module's genesis state. */
export interface GenesisState {
    /** GenesisState defines the alloc module's genesis state. */
    params?: Params;
}
/** GenesisState defines the alloc module's genesis state. */
export interface GenesisStateSDKType {
    /** GenesisState defines the alloc module's genesis state. */
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
