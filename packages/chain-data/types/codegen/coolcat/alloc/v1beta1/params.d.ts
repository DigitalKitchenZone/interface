import * as _m0 from "protobufjs/minimal";
export interface DistributionProportions {
    communityPool: string;
}
export interface DistributionProportionsSDKType {
    community_pool: string;
}
export interface Params {
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions?: DistributionProportions;
}
export interface ParamsSDKType {
    /** distribution_proportions defines the proportion of the minted denom */
    distribution_proportions?: DistributionProportionsSDKType;
}
export declare const DistributionProportions: {
    encode(message: DistributionProportions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions;
    fromJSON(object: any): DistributionProportions;
    toJSON(message: DistributionProportions): unknown;
    fromPartial(object: Partial<DistributionProportions>): DistributionProportions;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
