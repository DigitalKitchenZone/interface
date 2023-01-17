import * as _14 from "./authz/v1beta1/authz";
import * as _15 from "./authz/v1beta1/event";
import * as _16 from "./authz/v1beta1/genesis";
import * as _17 from "./authz/v1beta1/query";
import * as _18 from "./authz/v1beta1/tx";
import * as _19 from "./bank/v1beta1/authz";
import * as _20 from "./bank/v1beta1/bank";
import * as _21 from "./bank/v1beta1/genesis";
import * as _22 from "./bank/v1beta1/query";
import * as _23 from "./bank/v1beta1/tx";
import * as _24 from "./base/abci/v1beta1/abci";
import * as _25 from "./base/query/v1beta1/pagination";
import * as _26 from "./base/reflection/v2alpha1/reflection";
import * as _27 from "./base/v1beta1/coin";
import * as _28 from "./crypto/ed25519/keys";
import * as _29 from "./crypto/hd/v1/hd";
import * as _30 from "./crypto/keyring/v1/record";
import * as _31 from "./crypto/multisig/keys";
import * as _32 from "./crypto/secp256k1/keys";
import * as _33 from "./crypto/secp256r1/keys";
import * as _34 from "./distribution/v1beta1/distribution";
import * as _35 from "./distribution/v1beta1/genesis";
import * as _36 from "./distribution/v1beta1/query";
import * as _37 from "./distribution/v1beta1/tx";
import * as _38 from "./gov/v1beta1/genesis";
import * as _39 from "./gov/v1beta1/gov";
import * as _40 from "./gov/v1beta1/query";
import * as _41 from "./gov/v1beta1/tx";
import * as _42 from "./params/v1beta1/params";
import * as _43 from "./params/v1beta1/query";
import * as _44 from "./staking/v1beta1/authz";
import * as _45 from "./staking/v1beta1/genesis";
import * as _46 from "./staking/v1beta1/query";
import * as _47 from "./staking/v1beta1/staking";
import * as _48 from "./staking/v1beta1/tx";
import * as _49 from "./tx/signing/v1beta1/signing";
import * as _50 from "./tx/v1beta1/service";
import * as _51 from "./tx/v1beta1/tx";
import * as _52 from "./upgrade/v1beta1/query";
import * as _53 from "./upgrade/v1beta1/tx";
import * as _54 from "./upgrade/v1beta1/upgrade";
import * as _121 from "./authz/v1beta1/query.rpc.Query";
import * as _122 from "./bank/v1beta1/query.rpc.Query";
import * as _123 from "./distribution/v1beta1/query.rpc.Query";
import * as _124 from "./gov/v1beta1/query.rpc.Query";
import * as _125 from "./params/v1beta1/query.rpc.Query";
import * as _126 from "./staking/v1beta1/query.rpc.Query";
import * as _127 from "./tx/v1beta1/service.rpc.Service";
import * as _128 from "./upgrade/v1beta1/query.rpc.Query";
import * as _129 from "./authz/v1beta1/tx.rpc.msg";
import * as _130 from "./bank/v1beta1/tx.rpc.msg";
import * as _131 from "./distribution/v1beta1/tx.rpc.msg";
import * as _132 from "./gov/v1beta1/tx.rpc.msg";
import * as _133 from "./staking/v1beta1/tx.rpc.msg";
import * as _134 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _129.MsgClientImpl;
            QueryClientImpl: typeof _121.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _17.QueryGrantsRequest): Promise<_17.QueryGrantsResponse>;
                granterGrants(request: _17.QueryGranterGrantsRequest): Promise<_17.QueryGranterGrantsResponse>;
                granteeGrants(request: _17.QueryGranteeGrantsRequest): Promise<_17.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _18.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _18.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _18.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _18.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _18.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _18.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _18.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgGrant;
                fromJSON(object: any): _18.MsgGrant;
                toJSON(message: _18.MsgGrant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _18.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _18.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgExecResponse;
                fromJSON(object: any): _18.MsgExecResponse;
                toJSON(message: _18.MsgExecResponse): unknown;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _18.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _18.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgExec;
                fromJSON(object: any): _18.MsgExec;
                toJSON(message: _18.MsgExec): unknown;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _18.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _18.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgGrantResponse;
                fromJSON(_: any): _18.MsgGrantResponse;
                toJSON(_: _18.MsgGrantResponse): unknown;
                fromPartial(_: {}): _18.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _18.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgRevoke;
                fromJSON(object: any): _18.MsgRevoke;
                toJSON(message: _18.MsgRevoke): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _18.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _18.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgRevokeResponse;
                fromJSON(_: any): _18.MsgRevokeResponse;
                toJSON(_: _18.MsgRevokeResponse): unknown;
                fromPartial(_: {}): _18.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _17.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGrantsRequest;
                fromJSON(object: any): _17.QueryGrantsRequest;
                toJSON(message: _17.QueryGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _17.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGrantsResponse;
                fromJSON(object: any): _17.QueryGrantsResponse;
                toJSON(message: _17.QueryGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _17.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _17.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranterGrantsRequest;
                fromJSON(object: any): _17.QueryGranterGrantsRequest;
                toJSON(message: _17.QueryGranterGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _17.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranterGrantsResponse;
                fromJSON(object: any): _17.QueryGranterGrantsResponse;
                toJSON(message: _17.QueryGranterGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _17.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _17.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranteeGrantsRequest;
                fromJSON(object: any): _17.QueryGranteeGrantsRequest;
                toJSON(message: _17.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _17.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranteeGrantsResponse;
                fromJSON(object: any): _17.QueryGranteeGrantsResponse;
                toJSON(message: _17.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _17.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.GenesisState;
                fromJSON(object: any): _16.GenesisState;
                toJSON(message: _16.GenesisState): unknown;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _16.GenesisState;
            };
            EventGrant: {
                encode(message: _15.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.EventGrant;
                fromJSON(object: any): _15.EventGrant;
                toJSON(message: _15.EventGrant): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _15.EventGrant;
            };
            EventRevoke: {
                encode(message: _15.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.EventRevoke;
                fromJSON(object: any): _15.EventRevoke;
                toJSON(message: _15.EventRevoke): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _15.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _14.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GenericAuthorization;
                fromJSON(object: any): _14.GenericAuthorization;
                toJSON(message: _14.GenericAuthorization): unknown;
                fromPartial(object: {
                    msg?: string;
                }): _14.GenericAuthorization;
            };
            Grant: {
                encode(message: _14.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Grant;
                fromJSON(object: any): _14.Grant;
                toJSON(message: _14.Grant): unknown;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _14.Grant;
            };
            GrantAuthorization: {
                encode(message: _14.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GrantAuthorization;
                fromJSON(object: any): _14.GrantAuthorization;
                toJSON(message: _14.GrantAuthorization): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _14.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _14.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GrantQueueItem;
                fromJSON(object: any): _14.GrantQueueItem;
                toJSON(message: _14.GrantQueueItem): unknown;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _14.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _130.MsgClientImpl;
            QueryClientImpl: typeof _122.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _22.QueryBalanceRequest): Promise<_22.QueryBalanceResponse>;
                allBalances(request: _22.QueryAllBalancesRequest): Promise<_22.QueryAllBalancesResponse>;
                spendableBalances(request: _22.QuerySpendableBalancesRequest): Promise<_22.QuerySpendableBalancesResponse>;
                totalSupply(request?: _22.QueryTotalSupplyRequest): Promise<_22.QueryTotalSupplyResponse>;
                supplyOf(request: _22.QuerySupplyOfRequest): Promise<_22.QuerySupplyOfResponse>;
                params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                denomMetadata(request: _22.QueryDenomMetadataRequest): Promise<_22.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _22.QueryDenomsMetadataRequest): Promise<_22.QueryDenomsMetadataResponse>;
                denomOwners(request: _22.QueryDenomOwnersRequest): Promise<_22.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _23.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _23.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _23.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _23.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _23.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgSend;
                fromJSON(object: any): _23.MsgSend;
                toJSON(message: _23.MsgSend): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _23.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _23.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgSendResponse;
                fromJSON(_: any): _23.MsgSendResponse;
                toJSON(_: _23.MsgSendResponse): unknown;
                fromPartial(_: {}): _23.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _23.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgMultiSend;
                fromJSON(object: any): _23.MsgMultiSend;
                toJSON(message: _23.MsgMultiSend): unknown;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _23.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _23.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgMultiSendResponse;
                fromJSON(_: any): _23.MsgMultiSendResponse;
                toJSON(_: _23.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _23.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _22.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryBalanceRequest;
                fromJSON(object: any): _22.QueryBalanceRequest;
                toJSON(message: _22.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _22.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _22.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryBalanceResponse;
                fromJSON(object: any): _22.QueryBalanceResponse;
                toJSON(message: _22.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _22.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _22.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryAllBalancesRequest;
                fromJSON(object: any): _22.QueryAllBalancesRequest;
                toJSON(message: _22.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _22.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryAllBalancesResponse;
                fromJSON(object: any): _22.QueryAllBalancesResponse;
                toJSON(message: _22.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _22.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _22.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySpendableBalancesRequest;
                fromJSON(object: any): _22.QuerySpendableBalancesRequest;
                toJSON(message: _22.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _22.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySpendableBalancesResponse;
                fromJSON(object: any): _22.QuerySpendableBalancesResponse;
                toJSON(message: _22.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _22.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _22.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryTotalSupplyRequest;
                fromJSON(object: any): _22.QueryTotalSupplyRequest;
                toJSON(message: _22.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _22.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryTotalSupplyResponse;
                fromJSON(object: any): _22.QueryTotalSupplyResponse;
                toJSON(message: _22.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _22.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _22.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySupplyOfRequest;
                fromJSON(object: any): _22.QuerySupplyOfRequest;
                toJSON(message: _22.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _22.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _22.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySupplyOfResponse;
                fromJSON(object: any): _22.QuerySupplyOfResponse;
                toJSON(message: _22.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _22.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _22.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsRequest;
                fromJSON(_: any): _22.QueryParamsRequest;
                toJSON(_: _22.QueryParamsRequest): unknown;
                fromPartial(_: {}): _22.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _22.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsResponse;
                fromJSON(object: any): _22.QueryParamsResponse;
                toJSON(message: _22.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _22.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _22.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomsMetadataRequest;
                fromJSON(object: any): _22.QueryDenomsMetadataRequest;
                toJSON(message: _22.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _22.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomsMetadataResponse;
                fromJSON(object: any): _22.QueryDenomsMetadataResponse;
                toJSON(message: _22.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _22.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _22.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomMetadataRequest;
                fromJSON(object: any): _22.QueryDenomMetadataRequest;
                toJSON(message: _22.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _22.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _22.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomMetadataResponse;
                fromJSON(object: any): _22.QueryDenomMetadataResponse;
                toJSON(message: _22.QueryDenomMetadataResponse): unknown;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _22.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _22.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomOwnersRequest;
                fromJSON(object: any): _22.QueryDenomOwnersRequest;
                toJSON(message: _22.QueryDenomOwnersRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _22.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DenomOwner;
                fromJSON(object: any): _22.DenomOwner;
                toJSON(message: _22.DenomOwner): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _22.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _22.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomOwnersResponse;
                fromJSON(object: any): _22.QueryDenomOwnersResponse;
                toJSON(message: _22.QueryDenomOwnersResponse): unknown;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _22.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _21.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GenesisState;
                fromJSON(object: any): _21.GenesisState;
                toJSON(message: _21.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _21.GenesisState;
            };
            Balance: {
                encode(message: _21.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Balance;
                fromJSON(object: any): _21.Balance;
                toJSON(message: _21.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _21.Balance;
            };
            Params: {
                encode(message: _20.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Params;
                fromJSON(object: any): _20.Params;
                toJSON(message: _20.Params): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _20.Params;
            };
            SendEnabled: {
                encode(message: _20.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SendEnabled;
                fromJSON(object: any): _20.SendEnabled;
                toJSON(message: _20.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _20.SendEnabled;
            };
            Input: {
                encode(message: _20.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Input;
                fromJSON(object: any): _20.Input;
                toJSON(message: _20.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _20.Input;
            };
            Output: {
                encode(message: _20.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Output;
                fromJSON(object: any): _20.Output;
                toJSON(message: _20.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _20.Output;
            };
            Supply: {
                encode(message: _20.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Supply;
                fromJSON(object: any): _20.Supply;
                toJSON(message: _20.Supply): unknown;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _20.Supply;
            };
            DenomUnit: {
                encode(message: _20.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.DenomUnit;
                fromJSON(object: any): _20.DenomUnit;
                toJSON(message: _20.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _20.DenomUnit;
            };
            Metadata: {
                encode(message: _20.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Metadata;
                fromJSON(object: any): _20.Metadata;
                toJSON(message: _20.Metadata): unknown;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _20.Metadata;
            };
            SendAuthorization: {
                encode(message: _19.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SendAuthorization;
                fromJSON(object: any): _19.SendAuthorization;
                toJSON(message: _19.SendAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _19.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _24.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.TxResponse;
                    fromJSON(object: any): _24.TxResponse;
                    toJSON(message: _24.TxResponse): unknown;
                    fromPartial(object: {
                        height?: string | number | import("long");
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _24.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _24.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ABCIMessageLog;
                    fromJSON(object: any): _24.ABCIMessageLog;
                    toJSON(message: _24.ABCIMessageLog): unknown;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _24.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _24.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.StringEvent;
                    fromJSON(object: any): _24.StringEvent;
                    toJSON(message: _24.StringEvent): unknown;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _24.StringEvent;
                };
                Attribute: {
                    encode(message: _24.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Attribute;
                    fromJSON(object: any): _24.Attribute;
                    toJSON(message: _24.Attribute): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _24.Attribute;
                };
                GasInfo: {
                    encode(message: _24.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GasInfo;
                    fromJSON(object: any): _24.GasInfo;
                    toJSON(message: _24.GasInfo): unknown;
                    fromPartial(object: {
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                    }): _24.GasInfo;
                };
                Result: {
                    encode(message: _24.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Result;
                    fromJSON(object: any): _24.Result;
                    toJSON(message: _24.Result): unknown;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _24.Result;
                };
                SimulationResponse: {
                    encode(message: _24.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SimulationResponse;
                    fromJSON(object: any): _24.SimulationResponse;
                    toJSON(message: _24.SimulationResponse): unknown;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: string | number | import("long");
                            gasUsed?: string | number | import("long");
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _24.SimulationResponse;
                };
                MsgData: {
                    encode(message: _24.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgData;
                    fromJSON(object: any): _24.MsgData;
                    toJSON(message: _24.MsgData): unknown;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _24.MsgData;
                };
                TxMsgData: {
                    encode(message: _24.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.TxMsgData;
                    fromJSON(object: any): _24.TxMsgData;
                    toJSON(message: _24.TxMsgData): unknown;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _24.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _24.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SearchTxsResult;
                    fromJSON(object: any): _24.SearchTxsResult;
                    toJSON(message: _24.SearchTxsResult): unknown;
                    fromPartial(object: {
                        totalCount?: string | number | import("long");
                        count?: string | number | import("long");
                        pageNumber?: string | number | import("long");
                        pageTotal?: string | number | import("long");
                        limit?: string | number | import("long");
                        txs?: {
                            height?: string | number | import("long");
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: string | number | import("long");
                            gasUsed?: string | number | import("long");
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _24.SearchTxsResult;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _25.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.PageRequest;
                    fromJSON(object: any): _25.PageRequest;
                    toJSON(message: _25.PageRequest): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _25.PageRequest;
                };
                PageResponse: {
                    encode(message: _25.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.PageResponse;
                    fromJSON(object: any): _25.PageResponse;
                    toJSON(message: _25.PageResponse): unknown;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    }): _25.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _26.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.AppDescriptor;
                    fromJSON(object: any): _26.AppDescriptor;
                    toJSON(message: _26.AppDescriptor): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _26.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _26.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.TxDescriptor;
                    fromJSON(object: any): _26.TxDescriptor;
                    toJSON(message: _26.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _26.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _26.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.AuthnDescriptor;
                    fromJSON(object: any): _26.AuthnDescriptor;
                    toJSON(message: _26.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _26.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _26.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SigningModeDescriptor;
                    fromJSON(object: any): _26.SigningModeDescriptor;
                    toJSON(message: _26.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _26.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _26.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ChainDescriptor;
                    fromJSON(object: any): _26.ChainDescriptor;
                    toJSON(message: _26.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _26.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _26.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.CodecDescriptor;
                    fromJSON(object: any): _26.CodecDescriptor;
                    toJSON(message: _26.CodecDescriptor): unknown;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _26.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _26.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.InterfaceDescriptor;
                    fromJSON(object: any): _26.InterfaceDescriptor;
                    toJSON(message: _26.InterfaceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _26.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _26.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _26.InterfaceImplementerDescriptor;
                    toJSON(message: _26.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _26.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _26.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _26.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _26.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _26.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _26.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ConfigurationDescriptor;
                    fromJSON(object: any): _26.ConfigurationDescriptor;
                    toJSON(message: _26.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _26.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _26.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgDescriptor;
                    fromJSON(object: any): _26.MsgDescriptor;
                    toJSON(message: _26.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _26.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _26.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _26.GetAuthnDescriptorRequest;
                    toJSON(_: _26.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _26.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _26.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _26.GetAuthnDescriptorResponse;
                    toJSON(message: _26.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _26.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _26.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetChainDescriptorRequest;
                    fromJSON(_: any): _26.GetChainDescriptorRequest;
                    toJSON(_: _26.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _26.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _26.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetChainDescriptorResponse;
                    fromJSON(object: any): _26.GetChainDescriptorResponse;
                    toJSON(message: _26.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _26.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _26.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetCodecDescriptorRequest;
                    fromJSON(_: any): _26.GetCodecDescriptorRequest;
                    toJSON(_: _26.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _26.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _26.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetCodecDescriptorResponse;
                    fromJSON(object: any): _26.GetCodecDescriptorResponse;
                    toJSON(message: _26.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _26.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _26.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _26.GetConfigurationDescriptorRequest;
                    toJSON(_: _26.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _26.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _26.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _26.GetConfigurationDescriptorResponse;
                    toJSON(message: _26.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _26.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _26.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _26.GetQueryServicesDescriptorRequest;
                    toJSON(_: _26.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _26.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _26.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _26.GetQueryServicesDescriptorResponse;
                    toJSON(message: _26.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _26.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _26.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetTxDescriptorRequest;
                    fromJSON(_: any): _26.GetTxDescriptorRequest;
                    toJSON(_: _26.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _26.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _26.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetTxDescriptorResponse;
                    fromJSON(object: any): _26.GetTxDescriptorResponse;
                    toJSON(message: _26.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _26.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _26.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryServicesDescriptor;
                    fromJSON(object: any): _26.QueryServicesDescriptor;
                    toJSON(message: _26.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _26.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _26.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryServiceDescriptor;
                    fromJSON(object: any): _26.QueryServiceDescriptor;
                    toJSON(message: _26.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _26.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _26.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryMethodDescriptor;
                    fromJSON(object: any): _26.QueryMethodDescriptor;
                    toJSON(message: _26.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _26.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _27.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Coin;
                fromJSON(object: any): _27.Coin;
                toJSON(message: _27.Coin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _27.Coin;
            };
            DecCoin: {
                encode(message: _27.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecCoin;
                fromJSON(object: any): _27.DecCoin;
                toJSON(message: _27.DecCoin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _27.DecCoin;
            };
            IntProto: {
                encode(message: _27.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.IntProto;
                fromJSON(object: any): _27.IntProto;
                toJSON(message: _27.IntProto): unknown;
                fromPartial(object: {
                    int?: string;
                }): _27.IntProto;
            };
            DecProto: {
                encode(message: _27.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecProto;
                fromJSON(object: any): _27.DecProto;
                toJSON(message: _27.DecProto): unknown;
                fromPartial(object: {
                    dec?: string;
                }): _27.DecProto;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _28.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.PubKey;
                fromJSON(object: any): _28.PubKey;
                toJSON(message: _28.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _28.PubKey;
            };
            PrivKey: {
                encode(message: _28.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.PrivKey;
                fromJSON(object: any): _28.PrivKey;
                toJSON(message: _28.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _28.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _29.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.BIP44Params;
                    fromJSON(object: any): _29.BIP44Params;
                    toJSON(message: _29.BIP44Params): unknown;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _29.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _30.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Record;
                    fromJSON(object: any): _30.Record;
                    toJSON(message: _30.Record): unknown;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _30.Record;
                };
                Record_Local: {
                    encode(message: _30.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Record_Local;
                    fromJSON(object: any): _30.Record_Local;
                    toJSON(message: _30.Record_Local): unknown;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _30.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _30.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Record_Ledger;
                    fromJSON(object: any): _30.Record_Ledger;
                    toJSON(message: _30.Record_Ledger): unknown;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _30.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _30.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Record_Multi;
                    fromJSON(_: any): _30.Record_Multi;
                    toJSON(_: _30.Record_Multi): unknown;
                    fromPartial(_: {}): _30.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _30.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Record_Offline;
                    fromJSON(_: any): _30.Record_Offline;
                    toJSON(_: _30.Record_Offline): unknown;
                    fromPartial(_: {}): _30.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _31.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.LegacyAminoPubKey;
                fromJSON(object: any): _31.LegacyAminoPubKey;
                toJSON(message: _31.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _31.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _32.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PubKey;
                fromJSON(object: any): _32.PubKey;
                toJSON(message: _32.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _32.PubKey;
            };
            PrivKey: {
                encode(message: _32.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PrivKey;
                fromJSON(object: any): _32.PrivKey;
                toJSON(message: _32.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _32.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _33.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.PubKey;
                fromJSON(object: any): _33.PubKey;
                toJSON(message: _33.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _33.PubKey;
            };
            PrivKey: {
                encode(message: _33.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.PrivKey;
                fromJSON(object: any): _33.PrivKey;
                toJSON(message: _33.PrivKey): unknown;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _33.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _131.MsgClientImpl;
            QueryClientImpl: typeof _123.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                validatorOutstandingRewards(request: _36.QueryValidatorOutstandingRewardsRequest): Promise<_36.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _36.QueryValidatorCommissionRequest): Promise<_36.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _36.QueryValidatorSlashesRequest): Promise<_36.QueryValidatorSlashesResponse>;
                delegationRewards(request: _36.QueryDelegationRewardsRequest): Promise<_36.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _36.QueryDelegationTotalRewardsRequest): Promise<_36.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _36.QueryDelegatorWithdrawAddressRequest): Promise<_36.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _36.QueryCommunityPoolRequest): Promise<_36.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _37.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _37.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _37.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _37.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _37.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _37.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _37.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _37.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _37.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgSetWithdrawAddress;
                fromJSON(object: any): _37.MsgSetWithdrawAddress;
                toJSON(message: _37.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _37.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _37.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _37.MsgSetWithdrawAddressResponse;
                toJSON(_: _37.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _37.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _37.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _37.MsgWithdrawDelegatorReward;
                toJSON(message: _37.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _37.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _37.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _37.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _37.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _37.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _37.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _37.MsgWithdrawValidatorCommission;
                toJSON(message: _37.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _37.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _37.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _37.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _37.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _37.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _37.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgFundCommunityPool;
                fromJSON(object: any): _37.MsgFundCommunityPool;
                toJSON(message: _37.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _37.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _37.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _37.MsgFundCommunityPoolResponse;
                toJSON(_: _37.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _37.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _36.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsRequest;
                fromJSON(_: any): _36.QueryParamsRequest;
                toJSON(_: _36.QueryParamsRequest): unknown;
                fromPartial(_: {}): _36.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _36.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsResponse;
                fromJSON(object: any): _36.QueryParamsResponse;
                toJSON(message: _36.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _36.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _36.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _36.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _36.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _36.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _36.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _36.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _36.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _36.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _36.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorCommissionRequest;
                fromJSON(object: any): _36.QueryValidatorCommissionRequest;
                toJSON(message: _36.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _36.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _36.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorCommissionResponse;
                fromJSON(object: any): _36.QueryValidatorCommissionResponse;
                toJSON(message: _36.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _36.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _36.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorSlashesRequest;
                fromJSON(object: any): _36.QueryValidatorSlashesRequest;
                toJSON(message: _36.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: string | number | import("long");
                    endingHeight?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _36.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _36.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorSlashesResponse;
                fromJSON(object: any): _36.QueryValidatorSlashesResponse;
                toJSON(message: _36.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: string | number | import("long");
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _36.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _36.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationRewardsRequest;
                fromJSON(object: any): _36.QueryDelegationRewardsRequest;
                toJSON(message: _36.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _36.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _36.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationRewardsResponse;
                fromJSON(object: any): _36.QueryDelegationRewardsResponse;
                toJSON(message: _36.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _36.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _36.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _36.QueryDelegationTotalRewardsRequest;
                toJSON(message: _36.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _36.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _36.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _36.QueryDelegationTotalRewardsResponse;
                toJSON(message: _36.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _36.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _36.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _36.QueryDelegatorValidatorsRequest;
                toJSON(message: _36.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _36.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _36.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _36.QueryDelegatorValidatorsResponse;
                toJSON(message: _36.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _36.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _36.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _36.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _36.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _36.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _36.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _36.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _36.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _36.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _36.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryCommunityPoolRequest;
                fromJSON(_: any): _36.QueryCommunityPoolRequest;
                toJSON(_: _36.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _36.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _36.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryCommunityPoolResponse;
                fromJSON(object: any): _36.QueryCommunityPoolResponse;
                toJSON(message: _36.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _36.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _35.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.DelegatorWithdrawInfo;
                fromJSON(object: any): _35.DelegatorWithdrawInfo;
                toJSON(message: _35.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _35.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _35.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _35.ValidatorOutstandingRewardsRecord;
                toJSON(message: _35.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _35.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _35.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _35.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _35.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _35.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _35.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _35.ValidatorHistoricalRewardsRecord;
                toJSON(message: _35.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: string | number | import("long");
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _35.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _35.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _35.ValidatorCurrentRewardsRecord;
                toJSON(message: _35.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: string | number | import("long");
                    };
                }): _35.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _35.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.DelegatorStartingInfoRecord;
                fromJSON(object: any): _35.DelegatorStartingInfoRecord;
                toJSON(message: _35.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: string | number | import("long");
                        stake?: string;
                        height?: string | number | import("long");
                    };
                }): _35.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _35.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ValidatorSlashEventRecord;
                fromJSON(object: any): _35.ValidatorSlashEventRecord;
                toJSON(message: _35.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: string | number | import("long");
                    period?: string | number | import("long");
                    validatorSlashEvent?: {
                        validatorPeriod?: string | number | import("long");
                        fraction?: string;
                    };
                }): _35.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GenesisState;
                fromJSON(object: any): _35.GenesisState;
                toJSON(message: _35.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: string | number | import("long");
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: string | number | import("long");
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: string | number | import("long");
                            stake?: string;
                            height?: string | number | import("long");
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: string | number | import("long");
                        period?: string | number | import("long");
                        validatorSlashEvent?: {
                            validatorPeriod?: string | number | import("long");
                            fraction?: string;
                        };
                    }[];
                }): _35.GenesisState;
            };
            Params: {
                encode(message: _34.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Params;
                fromJSON(object: any): _34.Params;
                toJSON(message: _34.Params): unknown;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _34.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _34.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorHistoricalRewards;
                fromJSON(object: any): _34.ValidatorHistoricalRewards;
                toJSON(message: _34.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _34.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _34.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorCurrentRewards;
                fromJSON(object: any): _34.ValidatorCurrentRewards;
                toJSON(message: _34.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: string | number | import("long");
                }): _34.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _34.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorAccumulatedCommission;
                fromJSON(object: any): _34.ValidatorAccumulatedCommission;
                toJSON(message: _34.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _34.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _34.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorOutstandingRewards;
                fromJSON(object: any): _34.ValidatorOutstandingRewards;
                toJSON(message: _34.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _34.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _34.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorSlashEvent;
                fromJSON(object: any): _34.ValidatorSlashEvent;
                toJSON(message: _34.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validatorPeriod?: string | number | import("long");
                    fraction?: string;
                }): _34.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _34.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorSlashEvents;
                fromJSON(object: any): _34.ValidatorSlashEvents;
                toJSON(message: _34.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: string | number | import("long");
                        fraction?: string;
                    }[];
                }): _34.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _34.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.FeePool;
                fromJSON(object: any): _34.FeePool;
                toJSON(message: _34.FeePool): unknown;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _34.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _34.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.CommunityPoolSpendProposal;
                fromJSON(object: any): _34.CommunityPoolSpendProposal;
                toJSON(message: _34.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _34.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _34.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegatorStartingInfo;
                fromJSON(object: any): _34.DelegatorStartingInfo;
                toJSON(message: _34.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previousPeriod?: string | number | import("long");
                    stake?: string;
                    height?: string | number | import("long");
                }): _34.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _34.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegationDelegatorReward;
                fromJSON(object: any): _34.DelegationDelegatorReward;
                toJSON(message: _34.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _34.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _34.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _34.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _34.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _34.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _132.MsgClientImpl;
            QueryClientImpl: typeof _124.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _40.QueryProposalRequest): Promise<_40.QueryProposalResponse>;
                proposals(request: _40.QueryProposalsRequest): Promise<_40.QueryProposalsResponse>;
                vote(request: _40.QueryVoteRequest): Promise<_40.QueryVoteResponse>;
                votes(request: _40.QueryVotesRequest): Promise<_40.QueryVotesResponse>;
                params(request: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                deposit(request: _40.QueryDepositRequest): Promise<_40.QueryDepositResponse>;
                deposits(request: _40.QueryDepositsRequest): Promise<_40.QueryDepositsResponse>;
                tallyResult(request: _40.QueryTallyResultRequest): Promise<_40.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _41.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _41.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _41.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _41.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _41.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _41.MsgSubmitProposal;
                    };
                    vote(value: _41.MsgVote): {
                        typeUrl: string;
                        value: _41.MsgVote;
                    };
                    voteWeighted(value: _41.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _41.MsgVoteWeighted;
                    };
                    deposit(value: _41.MsgDeposit): {
                        typeUrl: string;
                        value: _41.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _41.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _41.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _41.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _41.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _41.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _41.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _41.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _41.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _41.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _41.MsgSubmitProposal;
                    };
                    vote(value: _41.MsgVote): {
                        typeUrl: string;
                        value: _41.MsgVote;
                    };
                    voteWeighted(value: _41.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _41.MsgVoteWeighted;
                    };
                    deposit(value: _41.MsgDeposit): {
                        typeUrl: string;
                        value: _41.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _41.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _41.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _41.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _41.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _41.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _41.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _41.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _41.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _41.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSubmitProposal;
                fromJSON(object: any): _41.MsgSubmitProposal;
                toJSON(message: _41.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _41.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _41.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSubmitProposalResponse;
                fromJSON(object: any): _41.MsgSubmitProposalResponse;
                toJSON(message: _41.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _41.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _41.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgVote;
                fromJSON(object: any): _41.MsgVote;
                toJSON(message: _41.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                    option?: _39.VoteOption;
                }): _41.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _41.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgVoteResponse;
                fromJSON(_: any): _41.MsgVoteResponse;
                toJSON(_: _41.MsgVoteResponse): unknown;
                fromPartial(_: {}): _41.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _41.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgVoteWeighted;
                fromJSON(object: any): _41.MsgVoteWeighted;
                toJSON(message: _41.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                    options?: {
                        option?: _39.VoteOption;
                        weight?: string;
                    }[];
                }): _41.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _41.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgVoteWeightedResponse;
                fromJSON(_: any): _41.MsgVoteWeightedResponse;
                toJSON(_: _41.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _41.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _41.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgDeposit;
                fromJSON(object: any): _41.MsgDeposit;
                toJSON(message: _41.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _41.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgDepositResponse;
                fromJSON(_: any): _41.MsgDepositResponse;
                toJSON(_: _41.MsgDepositResponse): unknown;
                fromPartial(_: {}): _41.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _40.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryProposalRequest;
                fromJSON(object: any): _40.QueryProposalRequest;
                toJSON(message: _40.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _40.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _40.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryProposalResponse;
                fromJSON(object: any): _40.QueryProposalResponse;
                toJSON(message: _40.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: string | number | import("long");
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _39.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _40.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _40.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryProposalsRequest;
                fromJSON(object: any): _40.QueryProposalsRequest;
                toJSON(message: _40.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _39.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _40.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _40.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryProposalsResponse;
                fromJSON(object: any): _40.QueryProposalsResponse;
                toJSON(message: _40.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: string | number | import("long");
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _39.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _40.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _40.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryVoteRequest;
                fromJSON(object: any): _40.QueryVoteRequest;
                toJSON(message: _40.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                }): _40.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _40.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryVoteResponse;
                fromJSON(object: any): _40.QueryVoteResponse;
                toJSON(message: _40.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        option?: _39.VoteOption;
                        options?: {
                            option?: _39.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _40.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _40.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryVotesRequest;
                fromJSON(object: any): _40.QueryVotesRequest;
                toJSON(message: _40.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _40.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _40.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryVotesResponse;
                fromJSON(object: any): _40.QueryVotesResponse;
                toJSON(message: _40.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        option?: _39.VoteOption;
                        options?: {
                            option?: _39.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _40.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _40.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsRequest;
                fromJSON(object: any): _40.QueryParamsRequest;
                toJSON(message: _40.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _40.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _40.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsResponse;
                fromJSON(object: any): _40.QueryParamsResponse;
                toJSON(message: _40.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _40.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _40.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDepositRequest;
                fromJSON(object: any): _40.QueryDepositRequest;
                toJSON(message: _40.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    depositor?: string;
                }): _40.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _40.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDepositResponse;
                fromJSON(object: any): _40.QueryDepositResponse;
                toJSON(message: _40.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: string | number | import("long");
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _40.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _40.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDepositsRequest;
                fromJSON(object: any): _40.QueryDepositsRequest;
                toJSON(message: _40.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _40.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _40.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDepositsResponse;
                fromJSON(object: any): _40.QueryDepositsResponse;
                toJSON(message: _40.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: string | number | import("long");
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _40.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _40.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryTallyResultRequest;
                fromJSON(object: any): _40.QueryTallyResultRequest;
                toJSON(message: _40.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                }): _40.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _40.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryTallyResultResponse;
                fromJSON(object: any): _40.QueryTallyResultResponse;
                toJSON(message: _40.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _40.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _39.VoteOption;
            voteOptionToJSON(object: _39.VoteOption): string;
            proposalStatusFromJSON(object: any): _39.ProposalStatus;
            proposalStatusToJSON(object: _39.ProposalStatus): string;
            VoteOption: typeof _39.VoteOption;
            ProposalStatus: typeof _39.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _39.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.WeightedVoteOption;
                fromJSON(object: any): _39.WeightedVoteOption;
                toJSON(message: _39.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _39.VoteOption;
                    weight?: string;
                }): _39.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _39.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.TextProposal;
                fromJSON(object: any): _39.TextProposal;
                toJSON(message: _39.TextProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _39.TextProposal;
            };
            Deposit: {
                encode(message: _39.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Deposit;
                fromJSON(object: any): _39.Deposit;
                toJSON(message: _39.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.Deposit;
            };
            Proposal: {
                encode(message: _39.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Proposal;
                fromJSON(object: any): _39.Proposal;
                toJSON(message: _39.Proposal): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _39.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _39.Proposal;
            };
            TallyResult: {
                encode(message: _39.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.TallyResult;
                fromJSON(object: any): _39.TallyResult;
                toJSON(message: _39.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _39.TallyResult;
            };
            Vote: {
                encode(message: _39.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Vote;
                fromJSON(object: any): _39.Vote;
                toJSON(message: _39.Vote): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long");
                    voter?: string;
                    option?: _39.VoteOption;
                    options?: {
                        option?: _39.VoteOption;
                        weight?: string;
                    }[];
                }): _39.Vote;
            };
            DepositParams: {
                encode(message: _39.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DepositParams;
                fromJSON(object: any): _39.DepositParams;
                toJSON(message: _39.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _39.DepositParams;
            };
            VotingParams: {
                encode(message: _39.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.VotingParams;
                fromJSON(object: any): _39.VotingParams;
                toJSON(message: _39.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                }): _39.VotingParams;
            };
            TallyParams: {
                encode(message: _39.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.TallyParams;
                fromJSON(object: any): _39.TallyParams;
                toJSON(message: _39.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _39.TallyParams;
            };
            GenesisState: {
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GenesisState;
                fromJSON(object: any): _38.GenesisState;
                toJSON(message: _38.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: string | number | import("long");
                    deposits?: {
                        proposalId?: string | number | import("long");
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long");
                        voter?: string;
                        option?: _39.VoteOption;
                        options?: {
                            option?: _39.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: string | number | import("long");
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _39.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _38.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _125.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                subspaces(request?: _43.QuerySubspacesRequest): Promise<_43.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _43.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsRequest;
                fromJSON(object: any): _43.QueryParamsRequest;
                toJSON(message: _43.QueryParamsRequest): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _43.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _43.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsResponse;
                fromJSON(object: any): _43.QueryParamsResponse;
                toJSON(message: _43.QueryParamsResponse): unknown;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _43.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _43.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QuerySubspacesRequest;
                fromJSON(_: any): _43.QuerySubspacesRequest;
                toJSON(_: _43.QuerySubspacesRequest): unknown;
                fromPartial(_: {}): _43.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _43.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QuerySubspacesResponse;
                fromJSON(object: any): _43.QuerySubspacesResponse;
                toJSON(message: _43.QuerySubspacesResponse): unknown;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _43.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _43.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Subspace;
                fromJSON(object: any): _43.Subspace;
                toJSON(message: _43.Subspace): unknown;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _43.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _42.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ParameterChangeProposal;
                fromJSON(object: any): _42.ParameterChangeProposal;
                toJSON(message: _42.ParameterChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _42.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _42.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ParamChange;
                fromJSON(object: any): _42.ParamChange;
                toJSON(message: _42.ParamChange): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _42.ParamChange;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _133.MsgClientImpl;
            QueryClientImpl: typeof _126.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _46.QueryValidatorsRequest): Promise<_46.QueryValidatorsResponse>;
                validator(request: _46.QueryValidatorRequest): Promise<_46.QueryValidatorResponse>;
                validatorDelegations(request: _46.QueryValidatorDelegationsRequest): Promise<_46.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _46.QueryValidatorUnbondingDelegationsRequest): Promise<_46.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _46.QueryDelegationRequest): Promise<_46.QueryDelegationResponse>;
                unbondingDelegation(request: _46.QueryUnbondingDelegationRequest): Promise<_46.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _46.QueryDelegatorDelegationsRequest): Promise<_46.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _46.QueryDelegatorUnbondingDelegationsRequest): Promise<_46.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _46.QueryRedelegationsRequest): Promise<_46.QueryRedelegationsResponse>;
                delegatorValidators(request: _46.QueryDelegatorValidatorsRequest): Promise<_46.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _46.QueryDelegatorValidatorRequest): Promise<_46.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _46.QueryHistoricalInfoRequest): Promise<_46.QueryHistoricalInfoResponse>;
                pool(request?: _46.QueryPoolRequest): Promise<_46.QueryPoolResponse>;
                params(request?: _46.QueryParamsRequest): Promise<_46.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _48.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _48.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _48.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _48.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _48.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _48.MsgCreateValidator): {
                        typeUrl: string;
                        value: _48.MsgCreateValidator;
                    };
                    editValidator(value: _48.MsgEditValidator): {
                        typeUrl: string;
                        value: _48.MsgEditValidator;
                    };
                    delegate(value: _48.MsgDelegate): {
                        typeUrl: string;
                        value: _48.MsgDelegate;
                    };
                    beginRedelegate(value: _48.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _48.MsgBeginRedelegate;
                    };
                    undelegate(value: _48.MsgUndelegate): {
                        typeUrl: string;
                        value: _48.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _48.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _48.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _48.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _48.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _48.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _48.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _48.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _48.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _48.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _48.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _48.MsgCreateValidator): {
                        typeUrl: string;
                        value: _48.MsgCreateValidator;
                    };
                    editValidator(value: _48.MsgEditValidator): {
                        typeUrl: string;
                        value: _48.MsgEditValidator;
                    };
                    delegate(value: _48.MsgDelegate): {
                        typeUrl: string;
                        value: _48.MsgDelegate;
                    };
                    beginRedelegate(value: _48.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _48.MsgBeginRedelegate;
                    };
                    undelegate(value: _48.MsgUndelegate): {
                        typeUrl: string;
                        value: _48.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _48.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _48.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _48.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _48.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _48.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _48.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _48.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _48.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _48.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _48.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _48.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgCreateValidator;
                fromJSON(object: any): _48.MsgCreateValidator;
                toJSON(message: _48.MsgCreateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _48.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _48.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgCreateValidatorResponse;
                fromJSON(_: any): _48.MsgCreateValidatorResponse;
                toJSON(_: _48.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _48.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _48.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgEditValidator;
                fromJSON(object: any): _48.MsgEditValidator;
                toJSON(message: _48.MsgEditValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _48.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _48.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgEditValidatorResponse;
                fromJSON(_: any): _48.MsgEditValidatorResponse;
                toJSON(_: _48.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _48.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _48.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgDelegate;
                fromJSON(object: any): _48.MsgDelegate;
                toJSON(message: _48.MsgDelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _48.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _48.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgDelegateResponse;
                fromJSON(_: any): _48.MsgDelegateResponse;
                toJSON(_: _48.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _48.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _48.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgBeginRedelegate;
                fromJSON(object: any): _48.MsgBeginRedelegate;
                toJSON(message: _48.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _48.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _48.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgBeginRedelegateResponse;
                fromJSON(object: any): _48.MsgBeginRedelegateResponse;
                toJSON(message: _48.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: Date;
                }): _48.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _48.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgUndelegate;
                fromJSON(object: any): _48.MsgUndelegate;
                toJSON(message: _48.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _48.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _48.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgUndelegateResponse;
                fromJSON(object: any): _48.MsgUndelegateResponse;
                toJSON(message: _48.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: Date;
                }): _48.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _47.BondStatus;
            bondStatusToJSON(object: _47.BondStatus): string;
            BondStatus: typeof _47.BondStatus;
            HistoricalInfo: {
                encode(message: _47.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.HistoricalInfo;
                fromJSON(object: any): _47.HistoricalInfo;
                toJSON(message: _47.HistoricalInfo): unknown;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: string | number | import("long");
                            app?: string | number | import("long");
                        };
                        chainId?: string;
                        height?: string | number | import("long");
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _47.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _47.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _47.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.CommissionRates;
                fromJSON(object: any): _47.CommissionRates;
                toJSON(message: _47.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _47.CommissionRates;
            };
            Commission: {
                encode(message: _47.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Commission;
                fromJSON(object: any): _47.Commission;
                toJSON(message: _47.Commission): unknown;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _47.Commission;
            };
            Description: {
                encode(message: _47.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Description;
                fromJSON(object: any): _47.Description;
                toJSON(message: _47.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _47.Description;
            };
            Validator: {
                encode(message: _47.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Validator;
                fromJSON(object: any): _47.Validator;
                toJSON(message: _47.Validator): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _47.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: string | number | import("long");
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _47.Validator;
            };
            ValAddresses: {
                encode(message: _47.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ValAddresses;
                fromJSON(object: any): _47.ValAddresses;
                toJSON(message: _47.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _47.ValAddresses;
            };
            DVPair: {
                encode(message: _47.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DVPair;
                fromJSON(object: any): _47.DVPair;
                toJSON(message: _47.DVPair): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _47.DVPair;
            };
            DVPairs: {
                encode(message: _47.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DVPairs;
                fromJSON(object: any): _47.DVPairs;
                toJSON(message: _47.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _47.DVPairs;
            };
            DVVTriplet: {
                encode(message: _47.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DVVTriplet;
                fromJSON(object: any): _47.DVVTriplet;
                toJSON(message: _47.DVVTriplet): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _47.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _47.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DVVTriplets;
                fromJSON(object: any): _47.DVVTriplets;
                toJSON(message: _47.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _47.DVVTriplets;
            };
            Delegation: {
                encode(message: _47.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Delegation;
                fromJSON(object: any): _47.Delegation;
                toJSON(message: _47.Delegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _47.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _47.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.UnbondingDelegation;
                fromJSON(object: any): _47.UnbondingDelegation;
                toJSON(message: _47.UnbondingDelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long");
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _47.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _47.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.UnbondingDelegationEntry;
                fromJSON(object: any): _47.UnbondingDelegationEntry;
                toJSON(message: _47.UnbondingDelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: string | number | import("long");
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _47.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _47.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.RedelegationEntry;
                fromJSON(object: any): _47.RedelegationEntry;
                toJSON(message: _47.RedelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: string | number | import("long");
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _47.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _47.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Redelegation;
                fromJSON(object: any): _47.Redelegation;
                toJSON(message: _47.Redelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long");
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _47.Redelegation;
            };
            Params: {
                encode(message: _47.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Params;
                fromJSON(object: any): _47.Params;
                toJSON(message: _47.Params): unknown;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _47.Params;
            };
            DelegationResponse: {
                encode(message: _47.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DelegationResponse;
                fromJSON(object: any): _47.DelegationResponse;
                toJSON(message: _47.DelegationResponse): unknown;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _47.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _47.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.RedelegationEntryResponse;
                fromJSON(object: any): _47.RedelegationEntryResponse;
                toJSON(message: _47.RedelegationEntryResponse): unknown;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: string | number | import("long");
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _47.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _47.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.RedelegationResponse;
                fromJSON(object: any): _47.RedelegationResponse;
                toJSON(message: _47.RedelegationResponse): unknown;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _47.RedelegationResponse;
            };
            Pool: {
                encode(message: _47.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Pool;
                fromJSON(object: any): _47.Pool;
                toJSON(message: _47.Pool): unknown;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _47.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _46.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorsRequest;
                fromJSON(object: any): _46.QueryValidatorsRequest;
                toJSON(message: _46.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _46.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _46.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorsResponse;
                fromJSON(object: any): _46.QueryValidatorsResponse;
                toJSON(message: _46.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _47.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _46.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _46.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorRequest;
                fromJSON(object: any): _46.QueryValidatorRequest;
                toJSON(message: _46.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _46.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _46.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorResponse;
                fromJSON(object: any): _46.QueryValidatorResponse;
                toJSON(message: _46.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _47.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _46.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _46.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _46.QueryValidatorDelegationsRequest;
                toJSON(message: _46.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _46.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _46.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _46.QueryValidatorDelegationsResponse;
                toJSON(message: _46.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _46.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _46.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _46.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _46.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _46.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _46.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _46.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _46.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _46.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _46.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegationRequest;
                fromJSON(object: any): _46.QueryDelegationRequest;
                toJSON(message: _46.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _46.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _46.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegationResponse;
                fromJSON(object: any): _46.QueryDelegationResponse;
                toJSON(message: _46.QueryDelegationResponse): unknown;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _46.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _46.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _46.QueryUnbondingDelegationRequest;
                toJSON(message: _46.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _46.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _46.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _46.QueryUnbondingDelegationResponse;
                toJSON(message: _46.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _46.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _46.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _46.QueryDelegatorDelegationsRequest;
                toJSON(message: _46.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _46.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _46.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _46.QueryDelegatorDelegationsResponse;
                toJSON(message: _46.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _46.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _46.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _46.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _46.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _46.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _46.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _46.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _46.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _46.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _46.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryRedelegationsRequest;
                fromJSON(object: any): _46.QueryRedelegationsRequest;
                toJSON(message: _46.QueryRedelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _46.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _46.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryRedelegationsResponse;
                fromJSON(object: any): _46.QueryRedelegationsResponse;
                toJSON(message: _46.QueryRedelegationsResponse): unknown;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: string | number | import("long");
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: string | number | import("long");
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _46.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _46.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _46.QueryDelegatorValidatorsRequest;
                toJSON(message: _46.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _46.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _46.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _46.QueryDelegatorValidatorsResponse;
                toJSON(message: _46.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _47.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _46.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _46.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _46.QueryDelegatorValidatorRequest;
                toJSON(message: _46.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _46.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _46.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _46.QueryDelegatorValidatorResponse;
                toJSON(message: _46.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _47.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _46.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _46.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryHistoricalInfoRequest;
                fromJSON(object: any): _46.QueryHistoricalInfoRequest;
                toJSON(message: _46.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: string | number | import("long");
                }): _46.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _46.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryHistoricalInfoResponse;
                fromJSON(object: any): _46.QueryHistoricalInfoResponse;
                toJSON(message: _46.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long");
                                app?: string | number | import("long");
                            };
                            chainId?: string;
                            height?: string | number | import("long");
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _47.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: string | number | import("long");
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _46.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _46.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryPoolRequest;
                fromJSON(_: any): _46.QueryPoolRequest;
                toJSON(_: _46.QueryPoolRequest): unknown;
                fromPartial(_: {}): _46.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _46.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryPoolResponse;
                fromJSON(object: any): _46.QueryPoolResponse;
                toJSON(message: _46.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _46.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _46.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryParamsRequest;
                fromJSON(_: any): _46.QueryParamsRequest;
                toJSON(_: _46.QueryParamsRequest): unknown;
                fromPartial(_: {}): _46.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _46.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryParamsResponse;
                fromJSON(object: any): _46.QueryParamsResponse;
                toJSON(message: _46.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _46.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _45.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisState;
                fromJSON(object: any): _45.GenesisState;
                toJSON(message: _45.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: string | number | import("long");
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _47.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long");
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long");
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _45.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _45.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.LastValidatorPower;
                fromJSON(object: any): _45.LastValidatorPower;
                toJSON(message: _45.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: string | number | import("long");
                }): _45.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _44.AuthorizationType;
            authorizationTypeToJSON(object: _44.AuthorizationType): string;
            AuthorizationType: typeof _44.AuthorizationType;
            StakeAuthorization: {
                encode(message: _44.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.StakeAuthorization;
                fromJSON(object: any): _44.StakeAuthorization;
                toJSON(message: _44.StakeAuthorization): unknown;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _44.AuthorizationType;
                }): _44.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _44.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.StakeAuthorization_Validators;
                fromJSON(object: any): _44.StakeAuthorization_Validators;
                toJSON(message: _44.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _44.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _49.SignMode;
                signModeToJSON(object: _49.SignMode): string;
                SignMode: typeof _49.SignMode;
                SignatureDescriptors: {
                    encode(message: _49.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.SignatureDescriptors;
                    fromJSON(object: any): _49.SignatureDescriptors;
                    toJSON(message: _49.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _49.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: string | number | import("long");
                        }[];
                    }): _49.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _49.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.SignatureDescriptor;
                    fromJSON(object: any): _49.SignatureDescriptor;
                    toJSON(message: _49.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _49.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: string | number | import("long");
                    }): _49.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _49.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.SignatureDescriptor_Data;
                    fromJSON(object: any): _49.SignatureDescriptor_Data;
                    toJSON(message: _49.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _49.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _49.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _49.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _49.SignatureDescriptor_Data_Single;
                    toJSON(message: _49.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _49.SignMode;
                        signature?: Uint8Array;
                    }): _49.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _49.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _49.SignatureDescriptor_Data_Multi;
                    toJSON(message: _49.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _49.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _127.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _50.SimulateRequest): Promise<_50.SimulateResponse>;
                getTx(request: _50.GetTxRequest): Promise<_50.GetTxResponse>;
                broadcastTx(request: _50.BroadcastTxRequest): Promise<_50.BroadcastTxResponse>;
                getTxsEvent(request: _50.GetTxsEventRequest): Promise<_50.GetTxsEventResponse>;
                getBlockWithTxs(request: _50.GetBlockWithTxsRequest): Promise<_50.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _51.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Tx;
                fromJSON(object: any): _51.Tx;
                toJSON(message: _51.Tx): unknown;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: string | number | import("long");
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _49.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: string | number | import("long");
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: string | number | import("long");
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _51.Tx;
            };
            TxRaw: {
                encode(message: _51.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TxRaw;
                fromJSON(object: any): _51.TxRaw;
                toJSON(message: _51.TxRaw): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _51.TxRaw;
            };
            SignDoc: {
                encode(message: _51.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.SignDoc;
                fromJSON(object: any): _51.SignDoc;
                toJSON(message: _51.SignDoc): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: string | number | import("long");
                }): _51.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _51.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.SignDocDirectAux;
                fromJSON(object: any): _51.SignDocDirectAux;
                toJSON(message: _51.SignDocDirectAux): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: string | number | import("long");
                    sequence?: string | number | import("long");
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _51.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _51.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TxBody;
                fromJSON(object: any): _51.TxBody;
                toJSON(message: _51.TxBody): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: string | number | import("long");
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _51.TxBody;
            };
            AuthInfo: {
                encode(message: _51.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.AuthInfo;
                fromJSON(object: any): _51.AuthInfo;
                toJSON(message: _51.AuthInfo): unknown;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _49.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: string | number | import("long");
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: string | number | import("long");
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _51.AuthInfo;
            };
            SignerInfo: {
                encode(message: _51.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.SignerInfo;
                fromJSON(object: any): _51.SignerInfo;
                toJSON(message: _51.SignerInfo): unknown;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _49.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: string | number | import("long");
                }): _51.SignerInfo;
            };
            ModeInfo: {
                encode(message: _51.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ModeInfo;
                fromJSON(object: any): _51.ModeInfo;
                toJSON(message: _51.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _49.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _51.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _51.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ModeInfo_Single;
                fromJSON(object: any): _51.ModeInfo_Single;
                toJSON(message: _51.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _49.SignMode;
                }): _51.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _51.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ModeInfo_Multi;
                fromJSON(object: any): _51.ModeInfo_Multi;
                toJSON(message: _51.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _51.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _51.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Fee;
                fromJSON(object: any): _51.Fee;
                toJSON(message: _51.Fee): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: string | number | import("long");
                    payer?: string;
                    granter?: string;
                }): _51.Fee;
            };
            Tip: {
                encode(message: _51.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Tip;
                fromJSON(object: any): _51.Tip;
                toJSON(message: _51.Tip): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _51.Tip;
            };
            AuxSignerData: {
                encode(message: _51.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.AuxSignerData;
                fromJSON(object: any): _51.AuxSignerData;
                toJSON(message: _51.AuxSignerData): unknown;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: string | number | import("long");
                        sequence?: string | number | import("long");
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _49.SignMode;
                    sig?: Uint8Array;
                }): _51.AuxSignerData;
            };
            orderByFromJSON(object: any): _50.OrderBy;
            orderByToJSON(object: _50.OrderBy): string;
            broadcastModeFromJSON(object: any): _50.BroadcastMode;
            broadcastModeToJSON(object: _50.BroadcastMode): string;
            OrderBy: typeof _50.OrderBy;
            BroadcastMode: typeof _50.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _50.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetTxsEventRequest;
                fromJSON(object: any): _50.GetTxsEventRequest;
                toJSON(message: _50.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _50.OrderBy;
                }): _50.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _50.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetTxsEventResponse;
                fromJSON(object: any): _50.GetTxsEventResponse;
                toJSON(message: _50.GetTxsEventResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long");
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _49.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long");
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long");
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: string | number | import("long");
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _50.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _50.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.BroadcastTxRequest;
                fromJSON(object: any): _50.BroadcastTxRequest;
                toJSON(message: _50.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _50.BroadcastMode;
                }): _50.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _50.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.BroadcastTxResponse;
                fromJSON(object: any): _50.BroadcastTxResponse;
                toJSON(message: _50.BroadcastTxResponse): unknown;
                fromPartial(object: {
                    txResponse?: {
                        height?: string | number | import("long");
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _50.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _50.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.SimulateRequest;
                fromJSON(object: any): _50.SimulateRequest;
                toJSON(message: _50.SimulateRequest): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long");
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _49.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long");
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long");
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _50.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _50.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.SimulateResponse;
                fromJSON(object: any): _50.SimulateResponse;
                toJSON(message: _50.SimulateResponse): unknown;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _50.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _50.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetTxRequest;
                fromJSON(object: any): _50.GetTxRequest;
                toJSON(message: _50.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _50.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _50.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetTxResponse;
                fromJSON(object: any): _50.GetTxResponse;
                toJSON(message: _50.GetTxResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long");
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _49.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long");
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long");
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: string | number | import("long");
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long");
                        gasUsed?: string | number | import("long");
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _50.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _50.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetBlockWithTxsRequest;
                fromJSON(object: any): _50.GetBlockWithTxsRequest;
                toJSON(message: _50.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _50.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _50.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetBlockWithTxsResponse;
                fromJSON(object: any): _50.GetBlockWithTxsResponse;
                toJSON(message: _50.GetBlockWithTxsResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long");
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _49.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long");
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long");
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long");
                                app?: string | number | import("long");
                            };
                            chainId?: string;
                            height?: string | number | import("long");
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long");
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long");
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: string | number | import("long");
                                    validatorPower?: string | number | import("long");
                                    timestamp?: Date;
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: string | number | import("long");
                                                    app?: string | number | import("long");
                                                };
                                                chainId?: string;
                                                height?: string | number | import("long");
                                                time?: Date;
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: string | number | import("long");
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: Date;
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: string | number | import("long");
                                                proposerPriority?: string | number | import("long");
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: string | number | import("long");
                                                proposerPriority?: string | number | import("long");
                                            };
                                            totalVotingPower?: string | number | import("long");
                                        };
                                    };
                                    commonHeight?: string | number | import("long");
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long");
                                        proposerPriority?: string | number | import("long");
                                    }[];
                                    totalVotingPower?: string | number | import("long");
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: string | number | import("long");
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _50.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _134.MsgClientImpl;
            QueryClientImpl: typeof _128.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _52.QueryCurrentPlanRequest): Promise<_52.QueryCurrentPlanResponse>;
                appliedPlan(request: _52.QueryAppliedPlanRequest): Promise<_52.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _52.QueryUpgradedConsensusStateRequest): Promise<_52.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _52.QueryModuleVersionsRequest): Promise<_52.QueryModuleVersionsResponse>;
                authority(request?: _52.QueryAuthorityRequest): Promise<_52.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _53.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _53.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _53.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _53.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _53.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _53.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _53.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _53.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _53.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _53.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _53.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _53.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _53.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _53.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _53.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _53.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _53.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _53.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _54.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Plan;
                fromJSON(object: any): _54.Plan;
                toJSON(message: _54.Plan): unknown;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: string | number | import("long");
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _54.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _54.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.SoftwareUpgradeProposal;
                fromJSON(object: any): _54.SoftwareUpgradeProposal;
                toJSON(message: _54.SoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long");
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _54.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _54.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _54.CancelSoftwareUpgradeProposal;
                toJSON(message: _54.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _54.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _54.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ModuleVersion;
                fromJSON(object: any): _54.ModuleVersion;
                toJSON(message: _54.ModuleVersion): unknown;
                fromPartial(object: {
                    name?: string;
                    version?: string | number | import("long");
                }): _54.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _53.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSoftwareUpgrade;
                fromJSON(object: any): _53.MsgSoftwareUpgrade;
                toJSON(message: _53.MsgSoftwareUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long");
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _53.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _53.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _53.MsgSoftwareUpgradeResponse;
                toJSON(_: _53.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: {}): _53.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _53.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgCancelUpgrade;
                fromJSON(object: any): _53.MsgCancelUpgrade;
                toJSON(message: _53.MsgCancelUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                }): _53.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _53.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgCancelUpgradeResponse;
                fromJSON(_: any): _53.MsgCancelUpgradeResponse;
                toJSON(_: _53.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: {}): _53.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _52.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryCurrentPlanRequest;
                fromJSON(_: any): _52.QueryCurrentPlanRequest;
                toJSON(_: _52.QueryCurrentPlanRequest): unknown;
                fromPartial(_: {}): _52.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _52.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryCurrentPlanResponse;
                fromJSON(object: any): _52.QueryCurrentPlanResponse;
                toJSON(message: _52.QueryCurrentPlanResponse): unknown;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long");
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _52.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _52.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAppliedPlanRequest;
                fromJSON(object: any): _52.QueryAppliedPlanRequest;
                toJSON(message: _52.QueryAppliedPlanRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _52.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _52.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAppliedPlanResponse;
                fromJSON(object: any): _52.QueryAppliedPlanResponse;
                toJSON(message: _52.QueryAppliedPlanResponse): unknown;
                fromPartial(object: {
                    height?: string | number | import("long");
                }): _52.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _52.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _52.QueryUpgradedConsensusStateRequest;
                toJSON(message: _52.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: {
                    lastHeight?: string | number | import("long");
                }): _52.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _52.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _52.QueryUpgradedConsensusStateResponse;
                toJSON(message: _52.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _52.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _52.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryModuleVersionsRequest;
                fromJSON(object: any): _52.QueryModuleVersionsRequest;
                toJSON(message: _52.QueryModuleVersionsRequest): unknown;
                fromPartial(object: {
                    moduleName?: string;
                }): _52.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _52.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryModuleVersionsResponse;
                fromJSON(object: any): _52.QueryModuleVersionsResponse;
                toJSON(message: _52.QueryModuleVersionsResponse): unknown;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: string | number | import("long");
                    }[];
                }): _52.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _52.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAuthorityRequest;
                fromJSON(_: any): _52.QueryAuthorityRequest;
                toJSON(_: _52.QueryAuthorityRequest): unknown;
                fromPartial(_: {}): _52.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _52.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAuthorityResponse;
                fromJSON(object: any): _52.QueryAuthorityResponse;
                toJSON(message: _52.QueryAuthorityResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _52.QueryAuthorityResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _129.MsgClientImpl;
                };
                bank: {
                    v1beta1: _130.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _131.MsgClientImpl;
                };
                gov: {
                    v1beta1: _132.MsgClientImpl;
                };
                staking: {
                    v1beta1: _133.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _134.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: _17.QueryGrantsRequest): Promise<_17.QueryGrantsResponse>;
                        granterGrants(request: _17.QueryGranterGrantsRequest): Promise<_17.QueryGranterGrantsResponse>;
                        granteeGrants(request: _17.QueryGranteeGrantsRequest): Promise<_17.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _22.QueryBalanceRequest): Promise<_22.QueryBalanceResponse>;
                        allBalances(request: _22.QueryAllBalancesRequest): Promise<_22.QueryAllBalancesResponse>;
                        spendableBalances(request: _22.QuerySpendableBalancesRequest): Promise<_22.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _22.QueryTotalSupplyRequest): Promise<_22.QueryTotalSupplyResponse>;
                        supplyOf(request: _22.QuerySupplyOfRequest): Promise<_22.QuerySupplyOfResponse>;
                        params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                        denomMetadata(request: _22.QueryDenomMetadataRequest): Promise<_22.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _22.QueryDenomsMetadataRequest): Promise<_22.QueryDenomsMetadataResponse>;
                        denomOwners(request: _22.QueryDenomOwnersRequest): Promise<_22.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _36.QueryValidatorOutstandingRewardsRequest): Promise<_36.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _36.QueryValidatorCommissionRequest): Promise<_36.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _36.QueryValidatorSlashesRequest): Promise<_36.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _36.QueryDelegationRewardsRequest): Promise<_36.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _36.QueryDelegationTotalRewardsRequest): Promise<_36.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _36.QueryDelegatorWithdrawAddressRequest): Promise<_36.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _36.QueryCommunityPoolRequest): Promise<_36.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _40.QueryProposalRequest): Promise<_40.QueryProposalResponse>;
                        proposals(request: _40.QueryProposalsRequest): Promise<_40.QueryProposalsResponse>;
                        vote(request: _40.QueryVoteRequest): Promise<_40.QueryVoteResponse>;
                        votes(request: _40.QueryVotesRequest): Promise<_40.QueryVotesResponse>;
                        params(request: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                        deposit(request: _40.QueryDepositRequest): Promise<_40.QueryDepositResponse>;
                        deposits(request: _40.QueryDepositsRequest): Promise<_40.QueryDepositsResponse>;
                        tallyResult(request: _40.QueryTallyResultRequest): Promise<_40.QueryTallyResultResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                        subspaces(request?: _43.QuerySubspacesRequest): Promise<_43.QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _46.QueryValidatorsRequest): Promise<_46.QueryValidatorsResponse>;
                        validator(request: _46.QueryValidatorRequest): Promise<_46.QueryValidatorResponse>;
                        validatorDelegations(request: _46.QueryValidatorDelegationsRequest): Promise<_46.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _46.QueryValidatorUnbondingDelegationsRequest): Promise<_46.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _46.QueryDelegationRequest): Promise<_46.QueryDelegationResponse>;
                        unbondingDelegation(request: _46.QueryUnbondingDelegationRequest): Promise<_46.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _46.QueryDelegatorDelegationsRequest): Promise<_46.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _46.QueryDelegatorUnbondingDelegationsRequest): Promise<_46.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _46.QueryRedelegationsRequest): Promise<_46.QueryRedelegationsResponse>;
                        delegatorValidators(request: _46.QueryDelegatorValidatorsRequest): Promise<_46.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _46.QueryDelegatorValidatorRequest): Promise<_46.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _46.QueryHistoricalInfoRequest): Promise<_46.QueryHistoricalInfoResponse>;
                        pool(request?: _46.QueryPoolRequest): Promise<_46.QueryPoolResponse>;
                        params(request?: _46.QueryParamsRequest): Promise<_46.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _50.SimulateRequest): Promise<_50.SimulateResponse>;
                        getTx(request: _50.GetTxRequest): Promise<_50.GetTxResponse>;
                        broadcastTx(request: _50.BroadcastTxRequest): Promise<_50.BroadcastTxResponse>;
                        getTxsEvent(request: _50.GetTxsEventRequest): Promise<_50.GetTxsEventResponse>;
                        getBlockWithTxs(request: _50.GetBlockWithTxsRequest): Promise<_50.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _52.QueryCurrentPlanRequest): Promise<_52.QueryCurrentPlanResponse>;
                        appliedPlan(request: _52.QueryAppliedPlanRequest): Promise<_52.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _52.QueryUpgradedConsensusStateRequest): Promise<_52.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _52.QueryModuleVersionsRequest): Promise<_52.QueryModuleVersionsResponse>;
                        authority(request?: _52.QueryAuthorityRequest): Promise<_52.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
