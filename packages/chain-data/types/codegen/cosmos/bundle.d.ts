import * as _13 from "./app/v1alpha1/config";
import * as _14 from "./app/v1alpha1/module";
import * as _15 from "./app/v1alpha1/query";
import * as _16 from "./auth/v1beta1/auth";
import * as _17 from "./auth/v1beta1/genesis";
import * as _18 from "./auth/v1beta1/query";
import * as _19 from "./authz/v1beta1/authz";
import * as _20 from "./authz/v1beta1/event";
import * as _21 from "./authz/v1beta1/genesis";
import * as _22 from "./authz/v1beta1/query";
import * as _23 from "./authz/v1beta1/tx";
import * as _24 from "./bank/v1beta1/authz";
import * as _25 from "./bank/v1beta1/bank";
import * as _26 from "./bank/v1beta1/genesis";
import * as _27 from "./bank/v1beta1/query";
import * as _28 from "./bank/v1beta1/tx";
import * as _29 from "./base/abci/v1beta1/abci";
import * as _30 from "./base/kv/v1beta1/kv";
import * as _31 from "./base/query/v1beta1/pagination";
import * as _32 from "./base/reflection/v1beta1/reflection";
import * as _33 from "./base/reflection/v2alpha1/reflection";
import * as _34 from "./base/snapshots/v1beta1/snapshot";
import * as _35 from "./base/store/v1beta1/commit_info";
import * as _36 from "./base/store/v1beta1/listening";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./capability/v1beta1/capability";
import * as _40 from "./capability/v1beta1/genesis";
import * as _41 from "./crisis/v1beta1/genesis";
import * as _42 from "./crisis/v1beta1/tx";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/hd/v1/hd";
import * as _45 from "./crypto/keyring/v1/record";
import * as _46 from "./crypto/multisig/keys";
import * as _47 from "./crypto/secp256k1/keys";
import * as _48 from "./crypto/secp256r1/keys";
import * as _49 from "./distribution/v1beta1/distribution";
import * as _50 from "./distribution/v1beta1/genesis";
import * as _51 from "./distribution/v1beta1/query";
import * as _52 from "./distribution/v1beta1/tx";
import * as _53 from "./evidence/v1beta1/evidence";
import * as _54 from "./evidence/v1beta1/genesis";
import * as _55 from "./evidence/v1beta1/query";
import * as _56 from "./evidence/v1beta1/tx";
import * as _57 from "./feegrant/v1beta1/feegrant";
import * as _58 from "./feegrant/v1beta1/genesis";
import * as _59 from "./feegrant/v1beta1/query";
import * as _60 from "./feegrant/v1beta1/tx";
import * as _61 from "./genutil/v1beta1/genesis";
import * as _62 from "./gov/v1/genesis";
import * as _63 from "./gov/v1/gov";
import * as _64 from "./gov/v1/query";
import * as _65 from "./gov/v1/tx";
import * as _66 from "./gov/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/gov";
import * as _68 from "./gov/v1beta1/query";
import * as _69 from "./gov/v1beta1/tx";
import * as _70 from "./group/v1/events";
import * as _71 from "./group/v1/genesis";
import * as _72 from "./group/v1/query";
import * as _73 from "./group/v1/tx";
import * as _74 from "./group/v1/types";
import * as _75 from "./mint/v1beta1/genesis";
import * as _76 from "./mint/v1beta1/mint";
import * as _77 from "./mint/v1beta1/query";
import * as _79 from "./nft/v1beta1/event";
import * as _80 from "./nft/v1beta1/genesis";
import * as _81 from "./nft/v1beta1/nft";
import * as _82 from "./nft/v1beta1/query";
import * as _83 from "./nft/v1beta1/tx";
import * as _84 from "./orm/v1/orm";
import * as _85 from "./orm/v1alpha1/schema";
import * as _86 from "./params/v1beta1/params";
import * as _87 from "./params/v1beta1/query";
import * as _88 from "./slashing/v1beta1/genesis";
import * as _89 from "./slashing/v1beta1/query";
import * as _90 from "./slashing/v1beta1/slashing";
import * as _91 from "./slashing/v1beta1/tx";
import * as _92 from "./staking/v1beta1/authz";
import * as _93 from "./staking/v1beta1/genesis";
import * as _94 from "./staking/v1beta1/query";
import * as _95 from "./staking/v1beta1/staking";
import * as _96 from "./staking/v1beta1/tx";
import * as _97 from "./tx/signing/v1beta1/signing";
import * as _98 from "./tx/v1beta1/service";
import * as _99 from "./tx/v1beta1/tx";
import * as _100 from "./upgrade/v1beta1/query";
import * as _101 from "./upgrade/v1beta1/tx";
import * as _102 from "./upgrade/v1beta1/upgrade";
import * as _103 from "./vesting/v1beta1/tx";
import * as _104 from "./vesting/v1beta1/vesting";
import * as _161 from "./app/v1alpha1/query.rpc.Query";
import * as _162 from "./auth/v1beta1/query.rpc.Query";
import * as _163 from "./authz/v1beta1/query.rpc.Query";
import * as _164 from "./bank/v1beta1/query.rpc.Query";
import * as _165 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _166 from "./distribution/v1beta1/query.rpc.Query";
import * as _167 from "./evidence/v1beta1/query.rpc.Query";
import * as _168 from "./feegrant/v1beta1/query.rpc.Query";
import * as _169 from "./gov/v1/query.rpc.Query";
import * as _170 from "./gov/v1beta1/query.rpc.Query";
import * as _171 from "./group/v1/query.rpc.Query";
import * as _172 from "./mint/v1beta1/query.rpc.Query";
import * as _173 from "./nft/v1beta1/query.rpc.Query";
import * as _174 from "./params/v1beta1/query.rpc.Query";
import * as _175 from "./slashing/v1beta1/query.rpc.Query";
import * as _176 from "./staking/v1beta1/query.rpc.Query";
import * as _177 from "./tx/v1beta1/service.rpc.Service";
import * as _178 from "./upgrade/v1beta1/query.rpc.Query";
import * as _179 from "./authz/v1beta1/tx.rpc.msg";
import * as _180 from "./bank/v1beta1/tx.rpc.msg";
import * as _181 from "./crisis/v1beta1/tx.rpc.msg";
import * as _182 from "./distribution/v1beta1/tx.rpc.msg";
import * as _183 from "./evidence/v1beta1/tx.rpc.msg";
import * as _184 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _185 from "./gov/v1/tx.rpc.msg";
import * as _186 from "./gov/v1beta1/tx.rpc.msg";
import * as _187 from "./group/v1/tx.rpc.msg";
import * as _188 from "./nft/v1beta1/tx.rpc.msg";
import * as _189 from "./slashing/v1beta1/tx.rpc.msg";
import * as _190 from "./staking/v1beta1/tx.rpc.msg";
import * as _191 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _192 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _15.QueryConfigRequest): Promise<_15.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _15.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryConfigRequest;
                fromJSON(_: any): _15.QueryConfigRequest;
                toJSON(_: _15.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_15.QueryConfigRequest>): _15.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _15.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryConfigResponse;
                fromJSON(object: any): _15.QueryConfigResponse;
                toJSON(message: _15.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_15.QueryConfigResponse>): _15.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _14.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ModuleDescriptor;
                fromJSON(object: any): _14.ModuleDescriptor;
                toJSON(message: _14.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_14.ModuleDescriptor>): _14.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _14.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.PackageReference;
                fromJSON(object: any): _14.PackageReference;
                toJSON(message: _14.PackageReference): unknown;
                fromPartial(object: Partial<_14.PackageReference>): _14.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _14.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MigrateFromInfo;
                fromJSON(object: any): _14.MigrateFromInfo;
                toJSON(message: _14.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_14.MigrateFromInfo>): _14.MigrateFromInfo;
            };
            Config: {
                encode(message: _13.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Config;
                fromJSON(object: any): _13.Config;
                toJSON(message: _13.Config): unknown;
                fromPartial(object: Partial<_13.Config>): _13.Config;
            };
            ModuleConfig: {
                encode(message: _13.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.ModuleConfig;
                fromJSON(object: any): _13.ModuleConfig;
                toJSON(message: _13.ModuleConfig): unknown;
                fromPartial(object: Partial<_13.ModuleConfig>): _13.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _18.QueryAccountsRequest): Promise<_18.QueryAccountsResponse>;
                account(request: _18.QueryAccountRequest): Promise<_18.QueryAccountResponse>;
                params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                moduleAccounts(request?: _18.QueryModuleAccountsRequest): Promise<_18.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _18.Bech32PrefixRequest): Promise<_18.Bech32PrefixResponse>;
                addressBytesToString(request: _18.AddressBytesToStringRequest): Promise<_18.AddressBytesToStringResponse>;
                addressStringToBytes(request: _18.AddressStringToBytesRequest): Promise<_18.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _18.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAccountsRequest;
                fromJSON(object: any): _18.QueryAccountsRequest;
                toJSON(message: _18.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_18.QueryAccountsRequest>): _18.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _18.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAccountsResponse;
                fromJSON(object: any): _18.QueryAccountsResponse;
                toJSON(message: _18.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_18.QueryAccountsResponse>): _18.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _18.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAccountRequest;
                fromJSON(object: any): _18.QueryAccountRequest;
                toJSON(message: _18.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_18.QueryAccountRequest>): _18.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _18.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryModuleAccountsRequest;
                fromJSON(_: any): _18.QueryModuleAccountsRequest;
                toJSON(_: _18.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_18.QueryModuleAccountsRequest>): _18.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _18.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsResponse;
                fromJSON(object: any): _18.QueryParamsResponse;
                toJSON(message: _18.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_18.QueryParamsResponse>): _18.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _18.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryAccountResponse;
                fromJSON(object: any): _18.QueryAccountResponse;
                toJSON(message: _18.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_18.QueryAccountResponse>): _18.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _18.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsRequest;
                fromJSON(_: any): _18.QueryParamsRequest;
                toJSON(_: _18.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_18.QueryParamsRequest>): _18.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _18.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryModuleAccountsResponse;
                fromJSON(object: any): _18.QueryModuleAccountsResponse;
                toJSON(message: _18.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_18.QueryModuleAccountsResponse>): _18.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _18.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Bech32PrefixRequest;
                fromJSON(_: any): _18.Bech32PrefixRequest;
                toJSON(_: _18.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_18.Bech32PrefixRequest>): _18.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _18.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Bech32PrefixResponse;
                fromJSON(object: any): _18.Bech32PrefixResponse;
                toJSON(message: _18.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_18.Bech32PrefixResponse>): _18.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _18.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AddressBytesToStringRequest;
                fromJSON(object: any): _18.AddressBytesToStringRequest;
                toJSON(message: _18.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_18.AddressBytesToStringRequest>): _18.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _18.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AddressBytesToStringResponse;
                fromJSON(object: any): _18.AddressBytesToStringResponse;
                toJSON(message: _18.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_18.AddressBytesToStringResponse>): _18.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _18.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AddressStringToBytesRequest;
                fromJSON(object: any): _18.AddressStringToBytesRequest;
                toJSON(message: _18.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_18.AddressStringToBytesRequest>): _18.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _18.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AddressStringToBytesResponse;
                fromJSON(object: any): _18.AddressStringToBytesResponse;
                toJSON(message: _18.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_18.AddressStringToBytesResponse>): _18.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _17.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GenesisState;
                fromJSON(object: any): _17.GenesisState;
                toJSON(message: _17.GenesisState): unknown;
                fromPartial(object: Partial<_17.GenesisState>): _17.GenesisState;
            };
            BaseAccount: {
                encode(message: _16.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.BaseAccount;
                fromJSON(object: any): _16.BaseAccount;
                toJSON(message: _16.BaseAccount): unknown;
                fromPartial(object: Partial<_16.BaseAccount>): _16.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _16.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ModuleAccount;
                fromJSON(object: any): _16.ModuleAccount;
                toJSON(message: _16.ModuleAccount): unknown;
                fromPartial(object: Partial<_16.ModuleAccount>): _16.ModuleAccount;
            };
            Params: {
                encode(message: _16.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Params;
                fromJSON(object: any): _16.Params;
                toJSON(message: _16.Params): unknown;
                fromPartial(object: Partial<_16.Params>): _16.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _22.QueryGrantsRequest): Promise<_22.QueryGrantsResponse>;
                granterGrants(request: _22.QueryGranterGrantsRequest): Promise<_22.QueryGranterGrantsResponse>;
                granteeGrants(request: _22.QueryGranteeGrantsRequest): Promise<_22.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _23.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _23.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _23.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _23.MsgGrant): {
                        typeUrl: string;
                        value: _23.MsgGrant;
                    };
                    exec(value: _23.MsgExec): {
                        typeUrl: string;
                        value: _23.MsgExec;
                    };
                    revoke(value: _23.MsgRevoke): {
                        typeUrl: string;
                        value: _23.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _23.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _23.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _23.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _23.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _23.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _23.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _23.MsgGrant): {
                        typeUrl: string;
                        value: _23.MsgGrant;
                    };
                    exec(value: _23.MsgExec): {
                        typeUrl: string;
                        value: _23.MsgExec;
                    };
                    revoke(value: _23.MsgRevoke): {
                        typeUrl: string;
                        value: _23.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _23.MsgGrant) => {
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
                    }) => _23.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _23.MsgExec) => {
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
                    }) => _23.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _23.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _23.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _23.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgGrant;
                fromJSON(object: any): _23.MsgGrant;
                toJSON(message: _23.MsgGrant): unknown;
                fromPartial(object: Partial<_23.MsgGrant>): _23.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _23.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgExecResponse;
                fromJSON(object: any): _23.MsgExecResponse;
                toJSON(message: _23.MsgExecResponse): unknown;
                fromPartial(object: Partial<_23.MsgExecResponse>): _23.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _23.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgExec;
                fromJSON(object: any): _23.MsgExec;
                toJSON(message: _23.MsgExec): unknown;
                fromPartial(object: Partial<_23.MsgExec>): _23.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _23.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgGrantResponse;
                fromJSON(_: any): _23.MsgGrantResponse;
                toJSON(_: _23.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_23.MsgGrantResponse>): _23.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _23.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgRevoke;
                fromJSON(object: any): _23.MsgRevoke;
                toJSON(message: _23.MsgRevoke): unknown;
                fromPartial(object: Partial<_23.MsgRevoke>): _23.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _23.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgRevokeResponse;
                fromJSON(_: any): _23.MsgRevokeResponse;
                toJSON(_: _23.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_23.MsgRevokeResponse>): _23.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _22.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGrantsRequest;
                fromJSON(object: any): _22.QueryGrantsRequest;
                toJSON(message: _22.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_22.QueryGrantsRequest>): _22.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _22.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGrantsResponse;
                fromJSON(object: any): _22.QueryGrantsResponse;
                toJSON(message: _22.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_22.QueryGrantsResponse>): _22.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _22.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranterGrantsRequest;
                fromJSON(object: any): _22.QueryGranterGrantsRequest;
                toJSON(message: _22.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_22.QueryGranterGrantsRequest>): _22.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _22.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranterGrantsResponse;
                fromJSON(object: any): _22.QueryGranterGrantsResponse;
                toJSON(message: _22.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_22.QueryGranterGrantsResponse>): _22.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _22.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranteeGrantsRequest;
                fromJSON(object: any): _22.QueryGranteeGrantsRequest;
                toJSON(message: _22.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_22.QueryGranteeGrantsRequest>): _22.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _22.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryGranteeGrantsResponse;
                fromJSON(object: any): _22.QueryGranteeGrantsResponse;
                toJSON(message: _22.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_22.QueryGranteeGrantsResponse>): _22.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _21.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GenesisState;
                fromJSON(object: any): _21.GenesisState;
                toJSON(message: _21.GenesisState): unknown;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
            };
            EventGrant: {
                encode(message: _20.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.EventGrant;
                fromJSON(object: any): _20.EventGrant;
                toJSON(message: _20.EventGrant): unknown;
                fromPartial(object: Partial<_20.EventGrant>): _20.EventGrant;
            };
            EventRevoke: {
                encode(message: _20.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.EventRevoke;
                fromJSON(object: any): _20.EventRevoke;
                toJSON(message: _20.EventRevoke): unknown;
                fromPartial(object: Partial<_20.EventRevoke>): _20.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _19.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GenericAuthorization;
                fromJSON(object: any): _19.GenericAuthorization;
                toJSON(message: _19.GenericAuthorization): unknown;
                fromPartial(object: Partial<_19.GenericAuthorization>): _19.GenericAuthorization;
            };
            Grant: {
                encode(message: _19.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Grant;
                fromJSON(object: any): _19.Grant;
                toJSON(message: _19.Grant): unknown;
                fromPartial(object: Partial<_19.Grant>): _19.Grant;
            };
            GrantAuthorization: {
                encode(message: _19.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GrantAuthorization;
                fromJSON(object: any): _19.GrantAuthorization;
                toJSON(message: _19.GrantAuthorization): unknown;
                fromPartial(object: Partial<_19.GrantAuthorization>): _19.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _19.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GrantQueueItem;
                fromJSON(object: any): _19.GrantQueueItem;
                toJSON(message: _19.GrantQueueItem): unknown;
                fromPartial(object: Partial<_19.GrantQueueItem>): _19.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _27.QueryBalanceRequest): Promise<_27.QueryBalanceResponse>;
                allBalances(request: _27.QueryAllBalancesRequest): Promise<_27.QueryAllBalancesResponse>;
                spendableBalances(request: _27.QuerySpendableBalancesRequest): Promise<_27.QuerySpendableBalancesResponse>;
                totalSupply(request?: _27.QueryTotalSupplyRequest): Promise<_27.QueryTotalSupplyResponse>;
                supplyOf(request: _27.QuerySupplyOfRequest): Promise<_27.QuerySupplyOfResponse>;
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                denomMetadata(request: _27.QueryDenomMetadataRequest): Promise<_27.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _27.QueryDenomsMetadataRequest): Promise<_27.QueryDenomsMetadataResponse>;
                denomOwners(request: _27.QueryDenomOwnersRequest): Promise<_27.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: _28.MsgSend;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: _28.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _28.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _28.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _28.MsgSend): {
                        typeUrl: string;
                        value: _28.MsgSend;
                    };
                    multiSend(value: _28.MsgMultiSend): {
                        typeUrl: string;
                        value: _28.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _28.MsgSend) => {
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
                    }) => _28.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _28.MsgMultiSend) => {
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
                    }) => _28.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _28.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSend;
                fromJSON(object: any): _28.MsgSend;
                toJSON(message: _28.MsgSend): unknown;
                fromPartial(object: Partial<_28.MsgSend>): _28.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _28.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSendResponse;
                fromJSON(_: any): _28.MsgSendResponse;
                toJSON(_: _28.MsgSendResponse): unknown;
                fromPartial(_: Partial<_28.MsgSendResponse>): _28.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _28.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgMultiSend;
                fromJSON(object: any): _28.MsgMultiSend;
                toJSON(message: _28.MsgMultiSend): unknown;
                fromPartial(object: Partial<_28.MsgMultiSend>): _28.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _28.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgMultiSendResponse;
                fromJSON(_: any): _28.MsgMultiSendResponse;
                toJSON(_: _28.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_28.MsgMultiSendResponse>): _28.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _27.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryBalanceRequest;
                fromJSON(object: any): _27.QueryBalanceRequest;
                toJSON(message: _27.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_27.QueryBalanceRequest>): _27.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _27.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryBalanceResponse;
                fromJSON(object: any): _27.QueryBalanceResponse;
                toJSON(message: _27.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_27.QueryBalanceResponse>): _27.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _27.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryAllBalancesRequest;
                fromJSON(object: any): _27.QueryAllBalancesRequest;
                toJSON(message: _27.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_27.QueryAllBalancesRequest>): _27.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _27.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryAllBalancesResponse;
                fromJSON(object: any): _27.QueryAllBalancesResponse;
                toJSON(message: _27.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_27.QueryAllBalancesResponse>): _27.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _27.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QuerySpendableBalancesRequest;
                fromJSON(object: any): _27.QuerySpendableBalancesRequest;
                toJSON(message: _27.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_27.QuerySpendableBalancesRequest>): _27.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _27.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QuerySpendableBalancesResponse;
                fromJSON(object: any): _27.QuerySpendableBalancesResponse;
                toJSON(message: _27.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_27.QuerySpendableBalancesResponse>): _27.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _27.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryTotalSupplyRequest;
                fromJSON(object: any): _27.QueryTotalSupplyRequest;
                toJSON(message: _27.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_27.QueryTotalSupplyRequest>): _27.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _27.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryTotalSupplyResponse;
                fromJSON(object: any): _27.QueryTotalSupplyResponse;
                toJSON(message: _27.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_27.QueryTotalSupplyResponse>): _27.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _27.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QuerySupplyOfRequest;
                fromJSON(object: any): _27.QuerySupplyOfRequest;
                toJSON(message: _27.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_27.QuerySupplyOfRequest>): _27.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _27.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QuerySupplyOfResponse;
                fromJSON(object: any): _27.QuerySupplyOfResponse;
                toJSON(message: _27.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_27.QuerySupplyOfResponse>): _27.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _27.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsRequest;
                fromJSON(_: any): _27.QueryParamsRequest;
                toJSON(_: _27.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_27.QueryParamsRequest>): _27.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _27.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsResponse;
                fromJSON(object: any): _27.QueryParamsResponse;
                toJSON(message: _27.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_27.QueryParamsResponse>): _27.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _27.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomsMetadataRequest;
                fromJSON(object: any): _27.QueryDenomsMetadataRequest;
                toJSON(message: _27.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_27.QueryDenomsMetadataRequest>): _27.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _27.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomsMetadataResponse;
                fromJSON(object: any): _27.QueryDenomsMetadataResponse;
                toJSON(message: _27.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_27.QueryDenomsMetadataResponse>): _27.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _27.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomMetadataRequest;
                fromJSON(object: any): _27.QueryDenomMetadataRequest;
                toJSON(message: _27.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_27.QueryDenomMetadataRequest>): _27.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _27.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomMetadataResponse;
                fromJSON(object: any): _27.QueryDenomMetadataResponse;
                toJSON(message: _27.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_27.QueryDenomMetadataResponse>): _27.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _27.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomOwnersRequest;
                fromJSON(object: any): _27.QueryDenomOwnersRequest;
                toJSON(message: _27.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_27.QueryDenomOwnersRequest>): _27.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _27.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DenomOwner;
                fromJSON(object: any): _27.DenomOwner;
                toJSON(message: _27.DenomOwner): unknown;
                fromPartial(object: Partial<_27.DenomOwner>): _27.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _27.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDenomOwnersResponse;
                fromJSON(object: any): _27.QueryDenomOwnersResponse;
                toJSON(message: _27.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_27.QueryDenomOwnersResponse>): _27.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisState;
                fromJSON(object: any): _26.GenesisState;
                toJSON(message: _26.GenesisState): unknown;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
            };
            Balance: {
                encode(message: _26.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Balance;
                fromJSON(object: any): _26.Balance;
                toJSON(message: _26.Balance): unknown;
                fromPartial(object: Partial<_26.Balance>): _26.Balance;
            };
            Params: {
                encode(message: _25.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Params;
                fromJSON(object: any): _25.Params;
                toJSON(message: _25.Params): unknown;
                fromPartial(object: Partial<_25.Params>): _25.Params;
            };
            SendEnabled: {
                encode(message: _25.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SendEnabled;
                fromJSON(object: any): _25.SendEnabled;
                toJSON(message: _25.SendEnabled): unknown;
                fromPartial(object: Partial<_25.SendEnabled>): _25.SendEnabled;
            };
            Input: {
                encode(message: _25.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Input;
                fromJSON(object: any): _25.Input;
                toJSON(message: _25.Input): unknown;
                fromPartial(object: Partial<_25.Input>): _25.Input;
            };
            Output: {
                encode(message: _25.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Output;
                fromJSON(object: any): _25.Output;
                toJSON(message: _25.Output): unknown;
                fromPartial(object: Partial<_25.Output>): _25.Output;
            };
            Supply: {
                encode(message: _25.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Supply;
                fromJSON(object: any): _25.Supply;
                toJSON(message: _25.Supply): unknown;
                fromPartial(object: Partial<_25.Supply>): _25.Supply;
            };
            DenomUnit: {
                encode(message: _25.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DenomUnit;
                fromJSON(object: any): _25.DenomUnit;
                toJSON(message: _25.DenomUnit): unknown;
                fromPartial(object: Partial<_25.DenomUnit>): _25.DenomUnit;
            };
            Metadata: {
                encode(message: _25.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Metadata;
                fromJSON(object: any): _25.Metadata;
                toJSON(message: _25.Metadata): unknown;
                fromPartial(object: Partial<_25.Metadata>): _25.Metadata;
            };
            SendAuthorization: {
                encode(message: _24.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SendAuthorization;
                fromJSON(object: any): _24.SendAuthorization;
                toJSON(message: _24.SendAuthorization): unknown;
                fromPartial(object: Partial<_24.SendAuthorization>): _24.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _29.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.TxResponse;
                    fromJSON(object: any): _29.TxResponse;
                    toJSON(message: _29.TxResponse): unknown;
                    fromPartial(object: Partial<_29.TxResponse>): _29.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _29.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ABCIMessageLog;
                    fromJSON(object: any): _29.ABCIMessageLog;
                    toJSON(message: _29.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_29.ABCIMessageLog>): _29.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _29.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.StringEvent;
                    fromJSON(object: any): _29.StringEvent;
                    toJSON(message: _29.StringEvent): unknown;
                    fromPartial(object: Partial<_29.StringEvent>): _29.StringEvent;
                };
                Attribute: {
                    encode(message: _29.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Attribute;
                    fromJSON(object: any): _29.Attribute;
                    toJSON(message: _29.Attribute): unknown;
                    fromPartial(object: Partial<_29.Attribute>): _29.Attribute;
                };
                GasInfo: {
                    encode(message: _29.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GasInfo;
                    fromJSON(object: any): _29.GasInfo;
                    toJSON(message: _29.GasInfo): unknown;
                    fromPartial(object: Partial<_29.GasInfo>): _29.GasInfo;
                };
                Result: {
                    encode(message: _29.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Result;
                    fromJSON(object: any): _29.Result;
                    toJSON(message: _29.Result): unknown;
                    fromPartial(object: Partial<_29.Result>): _29.Result;
                };
                SimulationResponse: {
                    encode(message: _29.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SimulationResponse;
                    fromJSON(object: any): _29.SimulationResponse;
                    toJSON(message: _29.SimulationResponse): unknown;
                    fromPartial(object: Partial<_29.SimulationResponse>): _29.SimulationResponse;
                };
                MsgData: {
                    encode(message: _29.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgData;
                    fromJSON(object: any): _29.MsgData;
                    toJSON(message: _29.MsgData): unknown;
                    fromPartial(object: Partial<_29.MsgData>): _29.MsgData;
                };
                TxMsgData: {
                    encode(message: _29.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.TxMsgData;
                    fromJSON(object: any): _29.TxMsgData;
                    toJSON(message: _29.TxMsgData): unknown;
                    fromPartial(object: Partial<_29.TxMsgData>): _29.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _29.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SearchTxsResult;
                    fromJSON(object: any): _29.SearchTxsResult;
                    toJSON(message: _29.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_29.SearchTxsResult>): _29.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _30.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Pairs;
                    fromJSON(object: any): _30.Pairs;
                    toJSON(message: _30.Pairs): unknown;
                    fromPartial(object: Partial<_30.Pairs>): _30.Pairs;
                };
                Pair: {
                    encode(message: _30.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Pair;
                    fromJSON(object: any): _30.Pair;
                    toJSON(message: _30.Pair): unknown;
                    fromPartial(object: Partial<_30.Pair>): _30.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _31.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PageRequest;
                    fromJSON(object: any): _31.PageRequest;
                    toJSON(message: _31.PageRequest): unknown;
                    fromPartial(object: Partial<_31.PageRequest>): _31.PageRequest;
                };
                PageResponse: {
                    encode(message: _31.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PageResponse;
                    fromJSON(object: any): _31.PageResponse;
                    toJSON(message: _31.PageResponse): unknown;
                    fromPartial(object: Partial<_31.PageResponse>): _31.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _32.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ListAllInterfacesRequest;
                    fromJSON(_: any): _32.ListAllInterfacesRequest;
                    toJSON(_: _32.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_32.ListAllInterfacesRequest>): _32.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _32.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ListAllInterfacesResponse;
                    fromJSON(object: any): _32.ListAllInterfacesResponse;
                    toJSON(message: _32.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_32.ListAllInterfacesResponse>): _32.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _32.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ListImplementationsRequest;
                    fromJSON(object: any): _32.ListImplementationsRequest;
                    toJSON(message: _32.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_32.ListImplementationsRequest>): _32.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _32.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ListImplementationsResponse;
                    fromJSON(object: any): _32.ListImplementationsResponse;
                    toJSON(message: _32.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_32.ListImplementationsResponse>): _32.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _33.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.AppDescriptor;
                    fromJSON(object: any): _33.AppDescriptor;
                    toJSON(message: _33.AppDescriptor): unknown;
                    fromPartial(object: Partial<_33.AppDescriptor>): _33.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _33.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.TxDescriptor;
                    fromJSON(object: any): _33.TxDescriptor;
                    toJSON(message: _33.TxDescriptor): unknown;
                    fromPartial(object: Partial<_33.TxDescriptor>): _33.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _33.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.AuthnDescriptor;
                    fromJSON(object: any): _33.AuthnDescriptor;
                    toJSON(message: _33.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_33.AuthnDescriptor>): _33.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _33.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.SigningModeDescriptor;
                    fromJSON(object: any): _33.SigningModeDescriptor;
                    toJSON(message: _33.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_33.SigningModeDescriptor>): _33.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _33.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ChainDescriptor;
                    fromJSON(object: any): _33.ChainDescriptor;
                    toJSON(message: _33.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_33.ChainDescriptor>): _33.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _33.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.CodecDescriptor;
                    fromJSON(object: any): _33.CodecDescriptor;
                    toJSON(message: _33.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_33.CodecDescriptor>): _33.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _33.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.InterfaceDescriptor;
                    fromJSON(object: any): _33.InterfaceDescriptor;
                    toJSON(message: _33.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_33.InterfaceDescriptor>): _33.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _33.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _33.InterfaceImplementerDescriptor;
                    toJSON(message: _33.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_33.InterfaceImplementerDescriptor>): _33.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _33.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _33.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _33.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_33.InterfaceAcceptingMessageDescriptor>): _33.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _33.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ConfigurationDescriptor;
                    fromJSON(object: any): _33.ConfigurationDescriptor;
                    toJSON(message: _33.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_33.ConfigurationDescriptor>): _33.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _33.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgDescriptor;
                    fromJSON(object: any): _33.MsgDescriptor;
                    toJSON(message: _33.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_33.MsgDescriptor>): _33.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _33.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _33.GetAuthnDescriptorRequest;
                    toJSON(_: _33.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_33.GetAuthnDescriptorRequest>): _33.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _33.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _33.GetAuthnDescriptorResponse;
                    toJSON(message: _33.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_33.GetAuthnDescriptorResponse>): _33.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _33.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetChainDescriptorRequest;
                    fromJSON(_: any): _33.GetChainDescriptorRequest;
                    toJSON(_: _33.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_33.GetChainDescriptorRequest>): _33.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _33.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetChainDescriptorResponse;
                    fromJSON(object: any): _33.GetChainDescriptorResponse;
                    toJSON(message: _33.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_33.GetChainDescriptorResponse>): _33.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _33.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetCodecDescriptorRequest;
                    fromJSON(_: any): _33.GetCodecDescriptorRequest;
                    toJSON(_: _33.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_33.GetCodecDescriptorRequest>): _33.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _33.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetCodecDescriptorResponse;
                    fromJSON(object: any): _33.GetCodecDescriptorResponse;
                    toJSON(message: _33.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_33.GetCodecDescriptorResponse>): _33.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _33.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _33.GetConfigurationDescriptorRequest;
                    toJSON(_: _33.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_33.GetConfigurationDescriptorRequest>): _33.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _33.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _33.GetConfigurationDescriptorResponse;
                    toJSON(message: _33.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_33.GetConfigurationDescriptorResponse>): _33.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _33.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _33.GetQueryServicesDescriptorRequest;
                    toJSON(_: _33.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_33.GetQueryServicesDescriptorRequest>): _33.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _33.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _33.GetQueryServicesDescriptorResponse;
                    toJSON(message: _33.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_33.GetQueryServicesDescriptorResponse>): _33.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _33.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetTxDescriptorRequest;
                    fromJSON(_: any): _33.GetTxDescriptorRequest;
                    toJSON(_: _33.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_33.GetTxDescriptorRequest>): _33.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _33.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GetTxDescriptorResponse;
                    fromJSON(object: any): _33.GetTxDescriptorResponse;
                    toJSON(message: _33.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_33.GetTxDescriptorResponse>): _33.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _33.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryServicesDescriptor;
                    fromJSON(object: any): _33.QueryServicesDescriptor;
                    toJSON(message: _33.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_33.QueryServicesDescriptor>): _33.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _33.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryServiceDescriptor;
                    fromJSON(object: any): _33.QueryServiceDescriptor;
                    toJSON(message: _33.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_33.QueryServiceDescriptor>): _33.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _33.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryMethodDescriptor;
                    fromJSON(object: any): _33.QueryMethodDescriptor;
                    toJSON(message: _33.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_33.QueryMethodDescriptor>): _33.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _34.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Snapshot;
                    fromJSON(object: any): _34.Snapshot;
                    toJSON(message: _34.Snapshot): unknown;
                    fromPartial(object: Partial<_34.Snapshot>): _34.Snapshot;
                };
                Metadata: {
                    encode(message: _34.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Metadata;
                    fromJSON(object: any): _34.Metadata;
                    toJSON(message: _34.Metadata): unknown;
                    fromPartial(object: Partial<_34.Metadata>): _34.Metadata;
                };
                SnapshotItem: {
                    encode(message: _34.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.SnapshotItem;
                    fromJSON(object: any): _34.SnapshotItem;
                    toJSON(message: _34.SnapshotItem): unknown;
                    fromPartial(object: Partial<_34.SnapshotItem>): _34.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _34.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.SnapshotStoreItem;
                    fromJSON(object: any): _34.SnapshotStoreItem;
                    toJSON(message: _34.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_34.SnapshotStoreItem>): _34.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _34.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.SnapshotIAVLItem;
                    fromJSON(object: any): _34.SnapshotIAVLItem;
                    toJSON(message: _34.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_34.SnapshotIAVLItem>): _34.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _34.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.SnapshotExtensionMeta;
                    fromJSON(object: any): _34.SnapshotExtensionMeta;
                    toJSON(message: _34.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_34.SnapshotExtensionMeta>): _34.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _34.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.SnapshotExtensionPayload;
                    fromJSON(object: any): _34.SnapshotExtensionPayload;
                    toJSON(message: _34.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_34.SnapshotExtensionPayload>): _34.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _34.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.SnapshotKVItem;
                    fromJSON(object: any): _34.SnapshotKVItem;
                    toJSON(message: _34.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_34.SnapshotKVItem>): _34.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _34.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.SnapshotSchema;
                    fromJSON(object: any): _34.SnapshotSchema;
                    toJSON(message: _34.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_34.SnapshotSchema>): _34.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _36.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.StoreKVPair;
                    fromJSON(object: any): _36.StoreKVPair;
                    toJSON(message: _36.StoreKVPair): unknown;
                    fromPartial(object: Partial<_36.StoreKVPair>): _36.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _35.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.CommitInfo;
                    fromJSON(object: any): _35.CommitInfo;
                    toJSON(message: _35.CommitInfo): unknown;
                    fromPartial(object: Partial<_35.CommitInfo>): _35.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _35.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.StoreInfo;
                    fromJSON(object: any): _35.StoreInfo;
                    toJSON(message: _35.StoreInfo): unknown;
                    fromPartial(object: Partial<_35.StoreInfo>): _35.StoreInfo;
                };
                CommitID: {
                    encode(message: _35.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.CommitID;
                    fromJSON(object: any): _35.CommitID;
                    toJSON(message: _35.CommitID): unknown;
                    fromPartial(object: Partial<_35.CommitID>): _35.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _165.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _37.GetNodeInfoRequest): Promise<_37.GetNodeInfoResponse>;
                    getSyncing(request?: _37.GetSyncingRequest): Promise<_37.GetSyncingResponse>;
                    getLatestBlock(request?: _37.GetLatestBlockRequest): Promise<_37.GetLatestBlockResponse>;
                    getBlockByHeight(request: _37.GetBlockByHeightRequest): Promise<_37.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _37.GetLatestValidatorSetRequest): Promise<_37.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _37.GetValidatorSetByHeightRequest): Promise<_37.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _37.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _37.GetValidatorSetByHeightRequest;
                    toJSON(message: _37.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_37.GetValidatorSetByHeightRequest>): _37.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _37.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _37.GetValidatorSetByHeightResponse;
                    toJSON(message: _37.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_37.GetValidatorSetByHeightResponse>): _37.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _37.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _37.GetLatestValidatorSetRequest;
                    toJSON(message: _37.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_37.GetLatestValidatorSetRequest>): _37.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _37.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _37.GetLatestValidatorSetResponse;
                    toJSON(message: _37.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_37.GetLatestValidatorSetResponse>): _37.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _37.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Validator;
                    fromJSON(object: any): _37.Validator;
                    toJSON(message: _37.Validator): unknown;
                    fromPartial(object: Partial<_37.Validator>): _37.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _37.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetBlockByHeightRequest;
                    fromJSON(object: any): _37.GetBlockByHeightRequest;
                    toJSON(message: _37.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_37.GetBlockByHeightRequest>): _37.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _37.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetBlockByHeightResponse;
                    fromJSON(object: any): _37.GetBlockByHeightResponse;
                    toJSON(message: _37.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_37.GetBlockByHeightResponse>): _37.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _37.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetLatestBlockRequest;
                    fromJSON(_: any): _37.GetLatestBlockRequest;
                    toJSON(_: _37.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_37.GetLatestBlockRequest>): _37.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _37.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetLatestBlockResponse;
                    fromJSON(object: any): _37.GetLatestBlockResponse;
                    toJSON(message: _37.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_37.GetLatestBlockResponse>): _37.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _37.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetSyncingRequest;
                    fromJSON(_: any): _37.GetSyncingRequest;
                    toJSON(_: _37.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_37.GetSyncingRequest>): _37.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _37.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetSyncingResponse;
                    fromJSON(object: any): _37.GetSyncingResponse;
                    toJSON(message: _37.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_37.GetSyncingResponse>): _37.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _37.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetNodeInfoRequest;
                    fromJSON(_: any): _37.GetNodeInfoRequest;
                    toJSON(_: _37.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_37.GetNodeInfoRequest>): _37.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _37.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetNodeInfoResponse;
                    fromJSON(object: any): _37.GetNodeInfoResponse;
                    toJSON(message: _37.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_37.GetNodeInfoResponse>): _37.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _37.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.VersionInfo;
                    fromJSON(object: any): _37.VersionInfo;
                    toJSON(message: _37.VersionInfo): unknown;
                    fromPartial(object: Partial<_37.VersionInfo>): _37.VersionInfo;
                };
                Module: {
                    encode(message: _37.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Module;
                    fromJSON(object: any): _37.Module;
                    toJSON(message: _37.Module): unknown;
                    fromPartial(object: Partial<_37.Module>): _37.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _38.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Coin;
                fromJSON(object: any): _38.Coin;
                toJSON(message: _38.Coin): unknown;
                fromPartial(object: Partial<_38.Coin>): _38.Coin;
            };
            DecCoin: {
                encode(message: _38.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DecCoin;
                fromJSON(object: any): _38.DecCoin;
                toJSON(message: _38.DecCoin): unknown;
                fromPartial(object: Partial<_38.DecCoin>): _38.DecCoin;
            };
            IntProto: {
                encode(message: _38.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.IntProto;
                fromJSON(object: any): _38.IntProto;
                toJSON(message: _38.IntProto): unknown;
                fromPartial(object: Partial<_38.IntProto>): _38.IntProto;
            };
            DecProto: {
                encode(message: _38.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DecProto;
                fromJSON(object: any): _38.DecProto;
                toJSON(message: _38.DecProto): unknown;
                fromPartial(object: Partial<_38.DecProto>): _38.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _40.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GenesisOwners;
                fromJSON(object: any): _40.GenesisOwners;
                toJSON(message: _40.GenesisOwners): unknown;
                fromPartial(object: Partial<_40.GenesisOwners>): _40.GenesisOwners;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GenesisState;
                fromJSON(object: any): _40.GenesisState;
                toJSON(message: _40.GenesisState): unknown;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
            };
            Capability: {
                encode(message: _39.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Capability;
                fromJSON(object: any): _39.Capability;
                toJSON(message: _39.Capability): unknown;
                fromPartial(object: Partial<_39.Capability>): _39.Capability;
            };
            Owner: {
                encode(message: _39.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Owner;
                fromJSON(object: any): _39.Owner;
                toJSON(message: _39.Owner): unknown;
                fromPartial(object: Partial<_39.Owner>): _39.Owner;
            };
            CapabilityOwners: {
                encode(message: _39.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.CapabilityOwners;
                fromJSON(object: any): _39.CapabilityOwners;
                toJSON(message: _39.CapabilityOwners): unknown;
                fromPartial(object: Partial<_39.CapabilityOwners>): _39.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _42.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _42.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _42.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgVerifyInvariant;
                fromJSON(object: any): _42.MsgVerifyInvariant;
                toJSON(message: _42.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_42.MsgVerifyInvariant>): _42.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _42.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgVerifyInvariantResponse;
                fromJSON(_: any): _42.MsgVerifyInvariantResponse;
                toJSON(_: _42.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_42.MsgVerifyInvariantResponse>): _42.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _41.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GenesisState;
                fromJSON(object: any): _41.GenesisState;
                toJSON(message: _41.GenesisState): unknown;
                fromPartial(object: Partial<_41.GenesisState>): _41.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _43.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.PubKey;
                fromJSON(object: any): _43.PubKey;
                toJSON(message: _43.PubKey): unknown;
                fromPartial(object: Partial<_43.PubKey>): _43.PubKey;
            };
            PrivKey: {
                encode(message: _43.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.PrivKey;
                fromJSON(object: any): _43.PrivKey;
                toJSON(message: _43.PrivKey): unknown;
                fromPartial(object: Partial<_43.PrivKey>): _43.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _44.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.BIP44Params;
                    fromJSON(object: any): _44.BIP44Params;
                    toJSON(message: _44.BIP44Params): unknown;
                    fromPartial(object: Partial<_44.BIP44Params>): _44.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _45.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Record;
                    fromJSON(object: any): _45.Record;
                    toJSON(message: _45.Record): unknown;
                    fromPartial(object: Partial<_45.Record>): _45.Record;
                };
                Record_Local: {
                    encode(message: _45.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Record_Local;
                    fromJSON(object: any): _45.Record_Local;
                    toJSON(message: _45.Record_Local): unknown;
                    fromPartial(object: Partial<_45.Record_Local>): _45.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _45.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Record_Ledger;
                    fromJSON(object: any): _45.Record_Ledger;
                    toJSON(message: _45.Record_Ledger): unknown;
                    fromPartial(object: Partial<_45.Record_Ledger>): _45.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _45.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Record_Multi;
                    fromJSON(_: any): _45.Record_Multi;
                    toJSON(_: _45.Record_Multi): unknown;
                    fromPartial(_: Partial<_45.Record_Multi>): _45.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _45.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Record_Offline;
                    fromJSON(_: any): _45.Record_Offline;
                    toJSON(_: _45.Record_Offline): unknown;
                    fromPartial(_: Partial<_45.Record_Offline>): _45.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _46.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.LegacyAminoPubKey;
                fromJSON(object: any): _46.LegacyAminoPubKey;
                toJSON(message: _46.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_46.LegacyAminoPubKey>): _46.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _47.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.PubKey;
                fromJSON(object: any): _47.PubKey;
                toJSON(message: _47.PubKey): unknown;
                fromPartial(object: Partial<_47.PubKey>): _47.PubKey;
            };
            PrivKey: {
                encode(message: _47.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.PrivKey;
                fromJSON(object: any): _47.PrivKey;
                toJSON(message: _47.PrivKey): unknown;
                fromPartial(object: Partial<_47.PrivKey>): _47.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _48.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.PubKey;
                fromJSON(object: any): _48.PubKey;
                toJSON(message: _48.PubKey): unknown;
                fromPartial(object: Partial<_48.PubKey>): _48.PubKey;
            };
            PrivKey: {
                encode(message: _48.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.PrivKey;
                fromJSON(object: any): _48.PrivKey;
                toJSON(message: _48.PrivKey): unknown;
                fromPartial(object: Partial<_48.PrivKey>): _48.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                validatorOutstandingRewards(request: _51.QueryValidatorOutstandingRewardsRequest): Promise<_51.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _51.QueryValidatorCommissionRequest): Promise<_51.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _51.QueryValidatorSlashesRequest): Promise<_51.QueryValidatorSlashesResponse>;
                delegationRewards(request: _51.QueryDelegationRewardsRequest): Promise<_51.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _51.QueryDelegationTotalRewardsRequest): Promise<_51.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _51.QueryDelegatorValidatorsRequest): Promise<_51.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _51.QueryDelegatorWithdrawAddressRequest): Promise<_51.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _51.QueryCommunityPoolRequest): Promise<_51.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _52.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _52.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _52.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _52.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _52.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _52.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _52.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _52.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _52.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _52.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _52.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _52.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _52.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _52.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _52.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _52.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _52.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _52.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _52.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _52.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _52.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _52.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _52.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _52.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _52.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _52.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _52.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _52.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _52.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _52.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _52.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _52.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _52.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _52.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _52.MsgFundCommunityPool) => {
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
                    }) => _52.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _52.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgSetWithdrawAddress;
                fromJSON(object: any): _52.MsgSetWithdrawAddress;
                toJSON(message: _52.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_52.MsgSetWithdrawAddress>): _52.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _52.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _52.MsgSetWithdrawAddressResponse;
                toJSON(_: _52.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_52.MsgSetWithdrawAddressResponse>): _52.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _52.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _52.MsgWithdrawDelegatorReward;
                toJSON(message: _52.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_52.MsgWithdrawDelegatorReward>): _52.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _52.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _52.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _52.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_52.MsgWithdrawDelegatorRewardResponse>): _52.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _52.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _52.MsgWithdrawValidatorCommission;
                toJSON(message: _52.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_52.MsgWithdrawValidatorCommission>): _52.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _52.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _52.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _52.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_52.MsgWithdrawValidatorCommissionResponse>): _52.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _52.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgFundCommunityPool;
                fromJSON(object: any): _52.MsgFundCommunityPool;
                toJSON(message: _52.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_52.MsgFundCommunityPool>): _52.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _52.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _52.MsgFundCommunityPoolResponse;
                toJSON(_: _52.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_52.MsgFundCommunityPoolResponse>): _52.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _51.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryParamsRequest;
                fromJSON(_: any): _51.QueryParamsRequest;
                toJSON(_: _51.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_51.QueryParamsRequest>): _51.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _51.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryParamsResponse;
                fromJSON(object: any): _51.QueryParamsResponse;
                toJSON(message: _51.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_51.QueryParamsResponse>): _51.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _51.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _51.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _51.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_51.QueryValidatorOutstandingRewardsRequest>): _51.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _51.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _51.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _51.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_51.QueryValidatorOutstandingRewardsResponse>): _51.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _51.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryValidatorCommissionRequest;
                fromJSON(object: any): _51.QueryValidatorCommissionRequest;
                toJSON(message: _51.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_51.QueryValidatorCommissionRequest>): _51.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _51.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryValidatorCommissionResponse;
                fromJSON(object: any): _51.QueryValidatorCommissionResponse;
                toJSON(message: _51.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_51.QueryValidatorCommissionResponse>): _51.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _51.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryValidatorSlashesRequest;
                fromJSON(object: any): _51.QueryValidatorSlashesRequest;
                toJSON(message: _51.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_51.QueryValidatorSlashesRequest>): _51.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _51.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryValidatorSlashesResponse;
                fromJSON(object: any): _51.QueryValidatorSlashesResponse;
                toJSON(message: _51.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_51.QueryValidatorSlashesResponse>): _51.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _51.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryDelegationRewardsRequest;
                fromJSON(object: any): _51.QueryDelegationRewardsRequest;
                toJSON(message: _51.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_51.QueryDelegationRewardsRequest>): _51.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _51.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryDelegationRewardsResponse;
                fromJSON(object: any): _51.QueryDelegationRewardsResponse;
                toJSON(message: _51.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_51.QueryDelegationRewardsResponse>): _51.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _51.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _51.QueryDelegationTotalRewardsRequest;
                toJSON(message: _51.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_51.QueryDelegationTotalRewardsRequest>): _51.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _51.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _51.QueryDelegationTotalRewardsResponse;
                toJSON(message: _51.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_51.QueryDelegationTotalRewardsResponse>): _51.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _51.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _51.QueryDelegatorValidatorsRequest;
                toJSON(message: _51.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_51.QueryDelegatorValidatorsRequest>): _51.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _51.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _51.QueryDelegatorValidatorsResponse;
                toJSON(message: _51.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_51.QueryDelegatorValidatorsResponse>): _51.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _51.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _51.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _51.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_51.QueryDelegatorWithdrawAddressRequest>): _51.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _51.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _51.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _51.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_51.QueryDelegatorWithdrawAddressResponse>): _51.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _51.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryCommunityPoolRequest;
                fromJSON(_: any): _51.QueryCommunityPoolRequest;
                toJSON(_: _51.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_51.QueryCommunityPoolRequest>): _51.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _51.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryCommunityPoolResponse;
                fromJSON(object: any): _51.QueryCommunityPoolResponse;
                toJSON(message: _51.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_51.QueryCommunityPoolResponse>): _51.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _50.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.DelegatorWithdrawInfo;
                fromJSON(object: any): _50.DelegatorWithdrawInfo;
                toJSON(message: _50.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_50.DelegatorWithdrawInfo>): _50.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _50.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _50.ValidatorOutstandingRewardsRecord;
                toJSON(message: _50.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_50.ValidatorOutstandingRewardsRecord>): _50.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _50.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _50.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _50.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_50.ValidatorAccumulatedCommissionRecord>): _50.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _50.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _50.ValidatorHistoricalRewardsRecord;
                toJSON(message: _50.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_50.ValidatorHistoricalRewardsRecord>): _50.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _50.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _50.ValidatorCurrentRewardsRecord;
                toJSON(message: _50.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_50.ValidatorCurrentRewardsRecord>): _50.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _50.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.DelegatorStartingInfoRecord;
                fromJSON(object: any): _50.DelegatorStartingInfoRecord;
                toJSON(message: _50.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_50.DelegatorStartingInfoRecord>): _50.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _50.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValidatorSlashEventRecord;
                fromJSON(object: any): _50.ValidatorSlashEventRecord;
                toJSON(message: _50.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_50.ValidatorSlashEventRecord>): _50.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
            };
            Params: {
                encode(message: _49.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Params;
                fromJSON(object: any): _49.Params;
                toJSON(message: _49.Params): unknown;
                fromPartial(object: Partial<_49.Params>): _49.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _49.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ValidatorHistoricalRewards;
                fromJSON(object: any): _49.ValidatorHistoricalRewards;
                toJSON(message: _49.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_49.ValidatorHistoricalRewards>): _49.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _49.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ValidatorCurrentRewards;
                fromJSON(object: any): _49.ValidatorCurrentRewards;
                toJSON(message: _49.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_49.ValidatorCurrentRewards>): _49.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _49.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ValidatorAccumulatedCommission;
                fromJSON(object: any): _49.ValidatorAccumulatedCommission;
                toJSON(message: _49.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_49.ValidatorAccumulatedCommission>): _49.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _49.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ValidatorOutstandingRewards;
                fromJSON(object: any): _49.ValidatorOutstandingRewards;
                toJSON(message: _49.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_49.ValidatorOutstandingRewards>): _49.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _49.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ValidatorSlashEvent;
                fromJSON(object: any): _49.ValidatorSlashEvent;
                toJSON(message: _49.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_49.ValidatorSlashEvent>): _49.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _49.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ValidatorSlashEvents;
                fromJSON(object: any): _49.ValidatorSlashEvents;
                toJSON(message: _49.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_49.ValidatorSlashEvents>): _49.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _49.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.FeePool;
                fromJSON(object: any): _49.FeePool;
                toJSON(message: _49.FeePool): unknown;
                fromPartial(object: Partial<_49.FeePool>): _49.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _49.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CommunityPoolSpendProposal;
                fromJSON(object: any): _49.CommunityPoolSpendProposal;
                toJSON(message: _49.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_49.CommunityPoolSpendProposal>): _49.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _49.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.DelegatorStartingInfo;
                fromJSON(object: any): _49.DelegatorStartingInfo;
                toJSON(message: _49.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_49.DelegatorStartingInfo>): _49.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _49.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.DelegationDelegatorReward;
                fromJSON(object: any): _49.DelegationDelegatorReward;
                toJSON(message: _49.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_49.DelegationDelegatorReward>): _49.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _49.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _49.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _49.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_49.CommunityPoolSpendProposalWithDeposit>): _49.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _55.QueryEvidenceRequest): Promise<_55.QueryEvidenceResponse>;
                allEvidence(request?: _55.QueryAllEvidenceRequest): Promise<_55.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _56.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _56.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _56.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _56.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _56.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _56.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _56.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _56.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _56.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _56.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSubmitEvidence;
                fromJSON(object: any): _56.MsgSubmitEvidence;
                toJSON(message: _56.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_56.MsgSubmitEvidence>): _56.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _56.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _56.MsgSubmitEvidenceResponse;
                toJSON(message: _56.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_56.MsgSubmitEvidenceResponse>): _56.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _55.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryEvidenceRequest;
                fromJSON(object: any): _55.QueryEvidenceRequest;
                toJSON(message: _55.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_55.QueryEvidenceRequest>): _55.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _55.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryEvidenceResponse;
                fromJSON(object: any): _55.QueryEvidenceResponse;
                toJSON(message: _55.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_55.QueryEvidenceResponse>): _55.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _55.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAllEvidenceRequest;
                fromJSON(object: any): _55.QueryAllEvidenceRequest;
                toJSON(message: _55.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_55.QueryAllEvidenceRequest>): _55.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _55.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAllEvidenceResponse;
                fromJSON(object: any): _55.QueryAllEvidenceResponse;
                toJSON(message: _55.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_55.QueryAllEvidenceResponse>): _55.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
            };
            Equivocation: {
                encode(message: _53.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Equivocation;
                fromJSON(object: any): _53.Equivocation;
                toJSON(message: _53.Equivocation): unknown;
                fromPartial(object: Partial<_53.Equivocation>): _53.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _59.QueryAllowanceRequest): Promise<_59.QueryAllowanceResponse>;
                allowances(request: _59.QueryAllowancesRequest): Promise<_59.QueryAllowancesResponse>;
                allowancesByGranter(request: _59.QueryAllowancesByGranterRequest): Promise<_59.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _60.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _60.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _60.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _60.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _60.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _60.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _60.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _60.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _60.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _60.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _60.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _60.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _60.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _60.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _60.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _60.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _60.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _60.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _60.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgGrantAllowance;
                fromJSON(object: any): _60.MsgGrantAllowance;
                toJSON(message: _60.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_60.MsgGrantAllowance>): _60.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _60.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgGrantAllowanceResponse;
                fromJSON(_: any): _60.MsgGrantAllowanceResponse;
                toJSON(_: _60.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_60.MsgGrantAllowanceResponse>): _60.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _60.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgRevokeAllowance;
                fromJSON(object: any): _60.MsgRevokeAllowance;
                toJSON(message: _60.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_60.MsgRevokeAllowance>): _60.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _60.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _60.MsgRevokeAllowanceResponse;
                toJSON(_: _60.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_60.MsgRevokeAllowanceResponse>): _60.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _59.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryAllowanceRequest;
                fromJSON(object: any): _59.QueryAllowanceRequest;
                toJSON(message: _59.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_59.QueryAllowanceRequest>): _59.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _59.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryAllowanceResponse;
                fromJSON(object: any): _59.QueryAllowanceResponse;
                toJSON(message: _59.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_59.QueryAllowanceResponse>): _59.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _59.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryAllowancesRequest;
                fromJSON(object: any): _59.QueryAllowancesRequest;
                toJSON(message: _59.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_59.QueryAllowancesRequest>): _59.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _59.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryAllowancesResponse;
                fromJSON(object: any): _59.QueryAllowancesResponse;
                toJSON(message: _59.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_59.QueryAllowancesResponse>): _59.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _59.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _59.QueryAllowancesByGranterRequest;
                toJSON(message: _59.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_59.QueryAllowancesByGranterRequest>): _59.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _59.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _59.QueryAllowancesByGranterResponse;
                toJSON(message: _59.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_59.QueryAllowancesByGranterResponse>): _59.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GenesisState;
                fromJSON(object: any): _58.GenesisState;
                toJSON(message: _58.GenesisState): unknown;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
            };
            BasicAllowance: {
                encode(message: _57.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.BasicAllowance;
                fromJSON(object: any): _57.BasicAllowance;
                toJSON(message: _57.BasicAllowance): unknown;
                fromPartial(object: Partial<_57.BasicAllowance>): _57.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _57.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.PeriodicAllowance;
                fromJSON(object: any): _57.PeriodicAllowance;
                toJSON(message: _57.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_57.PeriodicAllowance>): _57.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _57.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.AllowedMsgAllowance;
                fromJSON(object: any): _57.AllowedMsgAllowance;
                toJSON(message: _57.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_57.AllowedMsgAllowance>): _57.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _57.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Grant;
                fromJSON(object: any): _57.Grant;
                toJSON(message: _57.Grant): unknown;
                fromPartial(object: Partial<_57.Grant>): _57.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState;
                fromJSON(object: any): _61.GenesisState;
                toJSON(message: _61.GenesisState): unknown;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                proposals(request: _64.QueryProposalsRequest): Promise<_64.QueryProposalsResponse>;
                vote(request: _64.QueryVoteRequest): Promise<_64.QueryVoteResponse>;
                votes(request: _64.QueryVotesRequest): Promise<_64.QueryVotesResponse>;
                params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                deposit(request: _64.QueryDepositRequest): Promise<_64.QueryDepositResponse>;
                deposits(request: _64.QueryDepositsRequest): Promise<_64.QueryDepositsResponse>;
                tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _65.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _65.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _65.MsgExecLegacyContent;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _65.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _65.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _65.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _65.MsgExecLegacyContent;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _65.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _65.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _65.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _65.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _65.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _65.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _65.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _65.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _65.MsgDeposit) => {
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
                    }) => _65.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _65.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSubmitProposal;
                fromJSON(object: any): _65.MsgSubmitProposal;
                toJSON(message: _65.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_65.MsgSubmitProposal>): _65.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _65.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSubmitProposalResponse;
                fromJSON(object: any): _65.MsgSubmitProposalResponse;
                toJSON(message: _65.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_65.MsgSubmitProposalResponse>): _65.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _65.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgExecLegacyContent;
                fromJSON(object: any): _65.MsgExecLegacyContent;
                toJSON(message: _65.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_65.MsgExecLegacyContent>): _65.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _65.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgExecLegacyContentResponse;
                fromJSON(_: any): _65.MsgExecLegacyContentResponse;
                toJSON(_: _65.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_65.MsgExecLegacyContentResponse>): _65.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _65.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgVote;
                fromJSON(object: any): _65.MsgVote;
                toJSON(message: _65.MsgVote): unknown;
                fromPartial(object: Partial<_65.MsgVote>): _65.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _65.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgVoteResponse;
                fromJSON(_: any): _65.MsgVoteResponse;
                toJSON(_: _65.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_65.MsgVoteResponse>): _65.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _65.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgVoteWeighted;
                fromJSON(object: any): _65.MsgVoteWeighted;
                toJSON(message: _65.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_65.MsgVoteWeighted>): _65.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _65.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgVoteWeightedResponse;
                fromJSON(_: any): _65.MsgVoteWeightedResponse;
                toJSON(_: _65.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_65.MsgVoteWeightedResponse>): _65.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _65.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgDeposit;
                fromJSON(object: any): _65.MsgDeposit;
                toJSON(message: _65.MsgDeposit): unknown;
                fromPartial(object: Partial<_65.MsgDeposit>): _65.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _65.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgDepositResponse;
                fromJSON(_: any): _65.MsgDepositResponse;
                toJSON(_: _65.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_65.MsgDepositResponse>): _65.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _64.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalRequest;
                fromJSON(object: any): _64.QueryProposalRequest;
                toJSON(message: _64.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_64.QueryProposalRequest>): _64.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _64.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalResponse;
                fromJSON(object: any): _64.QueryProposalResponse;
                toJSON(message: _64.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_64.QueryProposalResponse>): _64.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _64.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalsRequest;
                fromJSON(object: any): _64.QueryProposalsRequest;
                toJSON(message: _64.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_64.QueryProposalsRequest>): _64.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _64.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalsResponse;
                fromJSON(object: any): _64.QueryProposalsResponse;
                toJSON(message: _64.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_64.QueryProposalsResponse>): _64.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _64.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVoteRequest;
                fromJSON(object: any): _64.QueryVoteRequest;
                toJSON(message: _64.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_64.QueryVoteRequest>): _64.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _64.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVoteResponse;
                fromJSON(object: any): _64.QueryVoteResponse;
                toJSON(message: _64.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_64.QueryVoteResponse>): _64.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _64.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVotesRequest;
                fromJSON(object: any): _64.QueryVotesRequest;
                toJSON(message: _64.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_64.QueryVotesRequest>): _64.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _64.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVotesResponse;
                fromJSON(object: any): _64.QueryVotesResponse;
                toJSON(message: _64.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_64.QueryVotesResponse>): _64.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _64.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsRequest;
                fromJSON(object: any): _64.QueryParamsRequest;
                toJSON(message: _64.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_64.QueryParamsRequest>): _64.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _64.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsResponse;
                fromJSON(object: any): _64.QueryParamsResponse;
                toJSON(message: _64.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_64.QueryParamsResponse>): _64.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _64.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDepositRequest;
                fromJSON(object: any): _64.QueryDepositRequest;
                toJSON(message: _64.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_64.QueryDepositRequest>): _64.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _64.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDepositResponse;
                fromJSON(object: any): _64.QueryDepositResponse;
                toJSON(message: _64.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_64.QueryDepositResponse>): _64.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _64.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDepositsRequest;
                fromJSON(object: any): _64.QueryDepositsRequest;
                toJSON(message: _64.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_64.QueryDepositsRequest>): _64.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _64.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDepositsResponse;
                fromJSON(object: any): _64.QueryDepositsResponse;
                toJSON(message: _64.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_64.QueryDepositsResponse>): _64.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _64.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryTallyResultRequest;
                fromJSON(object: any): _64.QueryTallyResultRequest;
                toJSON(message: _64.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_64.QueryTallyResultRequest>): _64.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _64.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryTallyResultResponse;
                fromJSON(object: any): _64.QueryTallyResultResponse;
                toJSON(message: _64.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_64.QueryTallyResultResponse>): _64.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _63.VoteOption;
            voteOptionToJSON(object: _63.VoteOption): string;
            proposalStatusFromJSON(object: any): _63.ProposalStatus;
            proposalStatusToJSON(object: _63.ProposalStatus): string;
            VoteOption: typeof _63.VoteOption;
            VoteOptionSDKType: typeof _63.VoteOptionSDKType;
            ProposalStatus: typeof _63.ProposalStatus;
            ProposalStatusSDKType: typeof _63.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _63.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.WeightedVoteOption;
                fromJSON(object: any): _63.WeightedVoteOption;
                toJSON(message: _63.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_63.WeightedVoteOption>): _63.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _63.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Deposit;
                fromJSON(object: any): _63.Deposit;
                toJSON(message: _63.Deposit): unknown;
                fromPartial(object: Partial<_63.Deposit>): _63.Deposit;
            };
            Proposal: {
                encode(message: _63.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Proposal;
                fromJSON(object: any): _63.Proposal;
                toJSON(message: _63.Proposal): unknown;
                fromPartial(object: Partial<_63.Proposal>): _63.Proposal;
            };
            TallyResult: {
                encode(message: _63.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.TallyResult;
                fromJSON(object: any): _63.TallyResult;
                toJSON(message: _63.TallyResult): unknown;
                fromPartial(object: Partial<_63.TallyResult>): _63.TallyResult;
            };
            Vote: {
                encode(message: _63.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Vote;
                fromJSON(object: any): _63.Vote;
                toJSON(message: _63.Vote): unknown;
                fromPartial(object: Partial<_63.Vote>): _63.Vote;
            };
            DepositParams: {
                encode(message: _63.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DepositParams;
                fromJSON(object: any): _63.DepositParams;
                toJSON(message: _63.DepositParams): unknown;
                fromPartial(object: Partial<_63.DepositParams>): _63.DepositParams;
            };
            VotingParams: {
                encode(message: _63.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.VotingParams;
                fromJSON(object: any): _63.VotingParams;
                toJSON(message: _63.VotingParams): unknown;
                fromPartial(object: Partial<_63.VotingParams>): _63.VotingParams;
            };
            TallyParams: {
                encode(message: _63.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.TallyParams;
                fromJSON(object: any): _63.TallyParams;
                toJSON(message: _63.TallyParams): unknown;
                fromPartial(object: Partial<_63.TallyParams>): _63.TallyParams;
            };
            GenesisState: {
                encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GenesisState;
                fromJSON(object: any): _62.GenesisState;
                toJSON(message: _62.GenesisState): unknown;
                fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                proposals(request: _68.QueryProposalsRequest): Promise<_68.QueryProposalsResponse>;
                vote(request: _68.QueryVoteRequest): Promise<_68.QueryVoteResponse>;
                votes(request: _68.QueryVotesRequest): Promise<_68.QueryVotesResponse>;
                params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                deposit(request: _68.QueryDepositRequest): Promise<_68.QueryDepositResponse>;
                deposits(request: _68.QueryDepositsRequest): Promise<_68.QueryDepositsResponse>;
                tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _69.MsgSubmitProposal) => {
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
                    }) => _69.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _69.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _69.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _69.MsgVoteWeighted) => {
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
                    }) => _69.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _69.MsgDeposit) => {
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
                    }) => _69.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _69.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgSubmitProposal;
                fromJSON(object: any): _69.MsgSubmitProposal;
                toJSON(message: _69.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_69.MsgSubmitProposal>): _69.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _69.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgSubmitProposalResponse;
                fromJSON(object: any): _69.MsgSubmitProposalResponse;
                toJSON(message: _69.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_69.MsgSubmitProposalResponse>): _69.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _69.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgVote;
                fromJSON(object: any): _69.MsgVote;
                toJSON(message: _69.MsgVote): unknown;
                fromPartial(object: Partial<_69.MsgVote>): _69.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _69.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgVoteResponse;
                fromJSON(_: any): _69.MsgVoteResponse;
                toJSON(_: _69.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_69.MsgVoteResponse>): _69.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _69.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgVoteWeighted;
                fromJSON(object: any): _69.MsgVoteWeighted;
                toJSON(message: _69.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_69.MsgVoteWeighted>): _69.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _69.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgVoteWeightedResponse;
                fromJSON(_: any): _69.MsgVoteWeightedResponse;
                toJSON(_: _69.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_69.MsgVoteWeightedResponse>): _69.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _69.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgDeposit;
                fromJSON(object: any): _69.MsgDeposit;
                toJSON(message: _69.MsgDeposit): unknown;
                fromPartial(object: Partial<_69.MsgDeposit>): _69.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _69.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgDepositResponse;
                fromJSON(_: any): _69.MsgDepositResponse;
                toJSON(_: _69.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_69.MsgDepositResponse>): _69.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _68.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryProposalRequest;
                fromJSON(object: any): _68.QueryProposalRequest;
                toJSON(message: _68.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_68.QueryProposalRequest>): _68.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _68.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryProposalResponse;
                fromJSON(object: any): _68.QueryProposalResponse;
                toJSON(message: _68.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_68.QueryProposalResponse>): _68.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _68.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryProposalsRequest;
                fromJSON(object: any): _68.QueryProposalsRequest;
                toJSON(message: _68.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_68.QueryProposalsRequest>): _68.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _68.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryProposalsResponse;
                fromJSON(object: any): _68.QueryProposalsResponse;
                toJSON(message: _68.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_68.QueryProposalsResponse>): _68.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _68.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryVoteRequest;
                fromJSON(object: any): _68.QueryVoteRequest;
                toJSON(message: _68.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_68.QueryVoteRequest>): _68.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _68.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryVoteResponse;
                fromJSON(object: any): _68.QueryVoteResponse;
                toJSON(message: _68.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_68.QueryVoteResponse>): _68.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _68.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryVotesRequest;
                fromJSON(object: any): _68.QueryVotesRequest;
                toJSON(message: _68.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_68.QueryVotesRequest>): _68.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _68.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryVotesResponse;
                fromJSON(object: any): _68.QueryVotesResponse;
                toJSON(message: _68.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_68.QueryVotesResponse>): _68.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _68.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryParamsRequest;
                fromJSON(object: any): _68.QueryParamsRequest;
                toJSON(message: _68.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_68.QueryParamsRequest>): _68.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _68.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryParamsResponse;
                fromJSON(object: any): _68.QueryParamsResponse;
                toJSON(message: _68.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_68.QueryParamsResponse>): _68.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _68.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDepositRequest;
                fromJSON(object: any): _68.QueryDepositRequest;
                toJSON(message: _68.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_68.QueryDepositRequest>): _68.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _68.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDepositResponse;
                fromJSON(object: any): _68.QueryDepositResponse;
                toJSON(message: _68.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_68.QueryDepositResponse>): _68.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _68.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDepositsRequest;
                fromJSON(object: any): _68.QueryDepositsRequest;
                toJSON(message: _68.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_68.QueryDepositsRequest>): _68.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _68.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDepositsResponse;
                fromJSON(object: any): _68.QueryDepositsResponse;
                toJSON(message: _68.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_68.QueryDepositsResponse>): _68.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _68.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryTallyResultRequest;
                fromJSON(object: any): _68.QueryTallyResultRequest;
                toJSON(message: _68.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_68.QueryTallyResultRequest>): _68.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _68.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryTallyResultResponse;
                fromJSON(object: any): _68.QueryTallyResultResponse;
                toJSON(message: _68.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_68.QueryTallyResultResponse>): _68.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _67.VoteOption;
            voteOptionToJSON(object: _67.VoteOption): string;
            proposalStatusFromJSON(object: any): _67.ProposalStatus;
            proposalStatusToJSON(object: _67.ProposalStatus): string;
            VoteOption: typeof _67.VoteOption;
            VoteOptionSDKType: typeof _67.VoteOptionSDKType;
            ProposalStatus: typeof _67.ProposalStatus;
            ProposalStatusSDKType: typeof _67.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _67.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.WeightedVoteOption;
                fromJSON(object: any): _67.WeightedVoteOption;
                toJSON(message: _67.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_67.WeightedVoteOption>): _67.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _67.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.TextProposal;
                fromJSON(object: any): _67.TextProposal;
                toJSON(message: _67.TextProposal): unknown;
                fromPartial(object: Partial<_67.TextProposal>): _67.TextProposal;
            };
            Deposit: {
                encode(message: _67.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Deposit;
                fromJSON(object: any): _67.Deposit;
                toJSON(message: _67.Deposit): unknown;
                fromPartial(object: Partial<_67.Deposit>): _67.Deposit;
            };
            Proposal: {
                encode(message: _67.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Proposal;
                fromJSON(object: any): _67.Proposal;
                toJSON(message: _67.Proposal): unknown;
                fromPartial(object: Partial<_67.Proposal>): _67.Proposal;
            };
            TallyResult: {
                encode(message: _67.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.TallyResult;
                fromJSON(object: any): _67.TallyResult;
                toJSON(message: _67.TallyResult): unknown;
                fromPartial(object: Partial<_67.TallyResult>): _67.TallyResult;
            };
            Vote: {
                encode(message: _67.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Vote;
                fromJSON(object: any): _67.Vote;
                toJSON(message: _67.Vote): unknown;
                fromPartial(object: Partial<_67.Vote>): _67.Vote;
            };
            DepositParams: {
                encode(message: _67.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.DepositParams;
                fromJSON(object: any): _67.DepositParams;
                toJSON(message: _67.DepositParams): unknown;
                fromPartial(object: Partial<_67.DepositParams>): _67.DepositParams;
            };
            VotingParams: {
                encode(message: _67.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.VotingParams;
                fromJSON(object: any): _67.VotingParams;
                toJSON(message: _67.VotingParams): unknown;
                fromPartial(object: Partial<_67.VotingParams>): _67.VotingParams;
            };
            TallyParams: {
                encode(message: _67.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.TallyParams;
                fromJSON(object: any): _67.TallyParams;
                toJSON(message: _67.TallyParams): unknown;
                fromPartial(object: Partial<_67.TallyParams>): _67.TallyParams;
            };
            GenesisState: {
                encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GenesisState;
                fromJSON(object: any): _66.GenesisState;
                toJSON(message: _66.GenesisState): unknown;
                fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _187.MsgClientImpl;
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _72.QueryGroupInfoRequest): Promise<_72.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _72.QueryGroupPolicyInfoRequest): Promise<_72.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _72.QueryGroupMembersRequest): Promise<_72.QueryGroupMembersResponse>;
                groupsByAdmin(request: _72.QueryGroupsByAdminRequest): Promise<_72.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _72.QueryGroupPoliciesByGroupRequest): Promise<_72.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _72.QueryGroupPoliciesByAdminRequest): Promise<_72.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _72.QueryProposalRequest): Promise<_72.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _72.QueryProposalsByGroupPolicyRequest): Promise<_72.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _72.QueryVoteByProposalVoterRequest): Promise<_72.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _72.QueryVotesByProposalRequest): Promise<_72.QueryVotesByProposalResponse>;
                votesByVoter(request: _72.QueryVotesByVoterRequest): Promise<_72.QueryVotesByVoterResponse>;
                groupsByMember(request: _72.QueryGroupsByMemberRequest): Promise<_72.QueryGroupsByMemberResponse>;
                tallyResult(request: _72.QueryTallyResultRequest): Promise<_72.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _73.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _73.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _73.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _73.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _73.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _73.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _73.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _73.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _73.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _73.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _73.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _73.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _73.MsgCreateGroup): {
                        typeUrl: string;
                        value: _73.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _73.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _73.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _73.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _73.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _73.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _73.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _73.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _73.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _73.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _73.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _73.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _73.MsgWithdrawProposal;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    exec(value: _73.MsgExec): {
                        typeUrl: string;
                        value: _73.MsgExec;
                    };
                    leaveGroup(value: _73.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _73.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _73.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _73.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _73.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _73.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _73.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _73.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _73.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _73.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _73.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _73.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _73.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _73.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _73.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _73.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _73.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _73.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _73.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _73.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _73.MsgCreateGroup): {
                        typeUrl: string;
                        value: _73.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _73.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _73.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _73.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _73.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _73.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _73.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _73.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _73.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _73.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _73.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _73.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _73.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _73.MsgWithdrawProposal;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    exec(value: _73.MsgExec): {
                        typeUrl: string;
                        value: _73.MsgExec;
                    };
                    leaveGroup(value: _73.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _73.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _73.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _73.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _73.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _73.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _73.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _73.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _73.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _73.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _73.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _73.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _73.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _73.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _73.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _73.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _73.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _73.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _73.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _73.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _73.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _73.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _73.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _73.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _73.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _73.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _73.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _73.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _73.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _73.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _74.VoteOption;
            voteOptionToJSON(object: _74.VoteOption): string;
            proposalStatusFromJSON(object: any): _74.ProposalStatus;
            proposalStatusToJSON(object: _74.ProposalStatus): string;
            proposalResultFromJSON(object: any): _74.ProposalResult;
            proposalResultToJSON(object: _74.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _74.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _74.ProposalExecutorResult): string;
            VoteOption: typeof _74.VoteOption;
            VoteOptionSDKType: typeof _74.VoteOptionSDKType;
            ProposalStatus: typeof _74.ProposalStatus;
            ProposalStatusSDKType: typeof _74.ProposalStatusSDKType;
            ProposalResult: typeof _74.ProposalResult;
            ProposalResultSDKType: typeof _74.ProposalResultSDKType;
            ProposalExecutorResult: typeof _74.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _74.ProposalExecutorResultSDKType;
            Member: {
                encode(message: _74.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Member;
                fromJSON(object: any): _74.Member;
                toJSON(message: _74.Member): unknown;
                fromPartial(object: Partial<_74.Member>): _74.Member;
            };
            Members: {
                encode(message: _74.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Members;
                fromJSON(object: any): _74.Members;
                toJSON(message: _74.Members): unknown;
                fromPartial(object: Partial<_74.Members>): _74.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _74.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ThresholdDecisionPolicy;
                fromJSON(object: any): _74.ThresholdDecisionPolicy;
                toJSON(message: _74.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_74.ThresholdDecisionPolicy>): _74.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _74.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.PercentageDecisionPolicy;
                fromJSON(object: any): _74.PercentageDecisionPolicy;
                toJSON(message: _74.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_74.PercentageDecisionPolicy>): _74.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _74.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.DecisionPolicyWindows;
                fromJSON(object: any): _74.DecisionPolicyWindows;
                toJSON(message: _74.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_74.DecisionPolicyWindows>): _74.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _74.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.GroupInfo;
                fromJSON(object: any): _74.GroupInfo;
                toJSON(message: _74.GroupInfo): unknown;
                fromPartial(object: Partial<_74.GroupInfo>): _74.GroupInfo;
            };
            GroupMember: {
                encode(message: _74.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.GroupMember;
                fromJSON(object: any): _74.GroupMember;
                toJSON(message: _74.GroupMember): unknown;
                fromPartial(object: Partial<_74.GroupMember>): _74.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _74.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.GroupPolicyInfo;
                fromJSON(object: any): _74.GroupPolicyInfo;
                toJSON(message: _74.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_74.GroupPolicyInfo>): _74.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _74.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Proposal;
                fromJSON(object: any): _74.Proposal;
                toJSON(message: _74.Proposal): unknown;
                fromPartial(object: Partial<_74.Proposal>): _74.Proposal;
            };
            TallyResult: {
                encode(message: _74.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.TallyResult;
                fromJSON(object: any): _74.TallyResult;
                toJSON(message: _74.TallyResult): unknown;
                fromPartial(object: Partial<_74.TallyResult>): _74.TallyResult;
            };
            Vote: {
                encode(message: _74.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Vote;
                fromJSON(object: any): _74.Vote;
                toJSON(message: _74.Vote): unknown;
                fromPartial(object: Partial<_74.Vote>): _74.Vote;
            };
            execFromJSON(object: any): _73.Exec;
            execToJSON(object: _73.Exec): string;
            Exec: typeof _73.Exec;
            ExecSDKType: typeof _73.ExecSDKType;
            MsgCreateGroup: {
                encode(message: _73.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgCreateGroup;
                fromJSON(object: any): _73.MsgCreateGroup;
                toJSON(message: _73.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_73.MsgCreateGroup>): _73.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _73.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgCreateGroupResponse;
                fromJSON(object: any): _73.MsgCreateGroupResponse;
                toJSON(message: _73.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_73.MsgCreateGroupResponse>): _73.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _73.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupMembers;
                fromJSON(object: any): _73.MsgUpdateGroupMembers;
                toJSON(message: _73.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_73.MsgUpdateGroupMembers>): _73.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _73.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _73.MsgUpdateGroupMembersResponse;
                toJSON(_: _73.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_73.MsgUpdateGroupMembersResponse>): _73.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _73.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupAdmin;
                fromJSON(object: any): _73.MsgUpdateGroupAdmin;
                toJSON(message: _73.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_73.MsgUpdateGroupAdmin>): _73.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _73.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _73.MsgUpdateGroupAdminResponse;
                toJSON(_: _73.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_73.MsgUpdateGroupAdminResponse>): _73.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _73.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupMetadata;
                fromJSON(object: any): _73.MsgUpdateGroupMetadata;
                toJSON(message: _73.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_73.MsgUpdateGroupMetadata>): _73.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _73.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _73.MsgUpdateGroupMetadataResponse;
                toJSON(_: _73.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_73.MsgUpdateGroupMetadataResponse>): _73.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _73.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgCreateGroupPolicy;
                fromJSON(object: any): _73.MsgCreateGroupPolicy;
                toJSON(message: _73.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_73.MsgCreateGroupPolicy>): _73.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _73.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _73.MsgCreateGroupPolicyResponse;
                toJSON(message: _73.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_73.MsgCreateGroupPolicyResponse>): _73.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _73.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _73.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _73.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_73.MsgUpdateGroupPolicyAdmin>): _73.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _73.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _73.MsgCreateGroupWithPolicy;
                toJSON(message: _73.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_73.MsgCreateGroupWithPolicy>): _73.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _73.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _73.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _73.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_73.MsgCreateGroupWithPolicyResponse>): _73.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _73.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _73.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _73.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_73.MsgUpdateGroupPolicyAdminResponse>): _73.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _73.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _73.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _73.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_73.MsgUpdateGroupPolicyDecisionPolicy>): _73.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _73.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _73.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _73.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_73.MsgUpdateGroupPolicyDecisionPolicyResponse>): _73.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _73.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _73.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _73.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_73.MsgUpdateGroupPolicyMetadata>): _73.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _73.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _73.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _73.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_73.MsgUpdateGroupPolicyMetadataResponse>): _73.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _73.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgSubmitProposal;
                fromJSON(object: any): _73.MsgSubmitProposal;
                toJSON(message: _73.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_73.MsgSubmitProposal>): _73.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _73.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgSubmitProposalResponse;
                fromJSON(object: any): _73.MsgSubmitProposalResponse;
                toJSON(message: _73.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_73.MsgSubmitProposalResponse>): _73.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _73.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgWithdrawProposal;
                fromJSON(object: any): _73.MsgWithdrawProposal;
                toJSON(message: _73.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_73.MsgWithdrawProposal>): _73.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _73.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgWithdrawProposalResponse;
                fromJSON(_: any): _73.MsgWithdrawProposalResponse;
                toJSON(_: _73.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_73.MsgWithdrawProposalResponse>): _73.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _73.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgVote;
                fromJSON(object: any): _73.MsgVote;
                toJSON(message: _73.MsgVote): unknown;
                fromPartial(object: Partial<_73.MsgVote>): _73.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _73.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgVoteResponse;
                fromJSON(_: any): _73.MsgVoteResponse;
                toJSON(_: _73.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_73.MsgVoteResponse>): _73.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _73.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgExec;
                fromJSON(object: any): _73.MsgExec;
                toJSON(message: _73.MsgExec): unknown;
                fromPartial(object: Partial<_73.MsgExec>): _73.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _73.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgExecResponse;
                fromJSON(_: any): _73.MsgExecResponse;
                toJSON(_: _73.MsgExecResponse): unknown;
                fromPartial(_: Partial<_73.MsgExecResponse>): _73.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _73.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgLeaveGroup;
                fromJSON(object: any): _73.MsgLeaveGroup;
                toJSON(message: _73.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_73.MsgLeaveGroup>): _73.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _73.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgLeaveGroupResponse;
                fromJSON(_: any): _73.MsgLeaveGroupResponse;
                toJSON(_: _73.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_73.MsgLeaveGroupResponse>): _73.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _72.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupInfoRequest;
                fromJSON(object: any): _72.QueryGroupInfoRequest;
                toJSON(message: _72.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_72.QueryGroupInfoRequest>): _72.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _72.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupInfoResponse;
                fromJSON(object: any): _72.QueryGroupInfoResponse;
                toJSON(message: _72.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_72.QueryGroupInfoResponse>): _72.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _72.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _72.QueryGroupPolicyInfoRequest;
                toJSON(message: _72.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_72.QueryGroupPolicyInfoRequest>): _72.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _72.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _72.QueryGroupPolicyInfoResponse;
                toJSON(message: _72.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_72.QueryGroupPolicyInfoResponse>): _72.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _72.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupMembersRequest;
                fromJSON(object: any): _72.QueryGroupMembersRequest;
                toJSON(message: _72.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_72.QueryGroupMembersRequest>): _72.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _72.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupMembersResponse;
                fromJSON(object: any): _72.QueryGroupMembersResponse;
                toJSON(message: _72.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_72.QueryGroupMembersResponse>): _72.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _72.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupsByAdminRequest;
                fromJSON(object: any): _72.QueryGroupsByAdminRequest;
                toJSON(message: _72.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_72.QueryGroupsByAdminRequest>): _72.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _72.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupsByAdminResponse;
                fromJSON(object: any): _72.QueryGroupsByAdminResponse;
                toJSON(message: _72.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_72.QueryGroupsByAdminResponse>): _72.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _72.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _72.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _72.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_72.QueryGroupPoliciesByGroupRequest>): _72.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _72.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _72.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _72.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_72.QueryGroupPoliciesByGroupResponse>): _72.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _72.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _72.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _72.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_72.QueryGroupPoliciesByAdminRequest>): _72.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _72.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _72.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _72.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_72.QueryGroupPoliciesByAdminResponse>): _72.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _72.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryProposalRequest;
                fromJSON(object: any): _72.QueryProposalRequest;
                toJSON(message: _72.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_72.QueryProposalRequest>): _72.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _72.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryProposalResponse;
                fromJSON(object: any): _72.QueryProposalResponse;
                toJSON(message: _72.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_72.QueryProposalResponse>): _72.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _72.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _72.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _72.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_72.QueryProposalsByGroupPolicyRequest>): _72.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _72.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _72.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _72.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_72.QueryProposalsByGroupPolicyResponse>): _72.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _72.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _72.QueryVoteByProposalVoterRequest;
                toJSON(message: _72.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_72.QueryVoteByProposalVoterRequest>): _72.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _72.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _72.QueryVoteByProposalVoterResponse;
                toJSON(message: _72.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_72.QueryVoteByProposalVoterResponse>): _72.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _72.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryVotesByProposalRequest;
                fromJSON(object: any): _72.QueryVotesByProposalRequest;
                toJSON(message: _72.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_72.QueryVotesByProposalRequest>): _72.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _72.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryVotesByProposalResponse;
                fromJSON(object: any): _72.QueryVotesByProposalResponse;
                toJSON(message: _72.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_72.QueryVotesByProposalResponse>): _72.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _72.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryVotesByVoterRequest;
                fromJSON(object: any): _72.QueryVotesByVoterRequest;
                toJSON(message: _72.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_72.QueryVotesByVoterRequest>): _72.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _72.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryVotesByVoterResponse;
                fromJSON(object: any): _72.QueryVotesByVoterResponse;
                toJSON(message: _72.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_72.QueryVotesByVoterResponse>): _72.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _72.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupsByMemberRequest;
                fromJSON(object: any): _72.QueryGroupsByMemberRequest;
                toJSON(message: _72.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_72.QueryGroupsByMemberRequest>): _72.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _72.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryGroupsByMemberResponse;
                fromJSON(object: any): _72.QueryGroupsByMemberResponse;
                toJSON(message: _72.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_72.QueryGroupsByMemberResponse>): _72.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _72.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryTallyResultRequest;
                fromJSON(object: any): _72.QueryTallyResultRequest;
                toJSON(message: _72.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_72.QueryTallyResultRequest>): _72.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _72.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryTallyResultResponse;
                fromJSON(object: any): _72.QueryTallyResultResponse;
                toJSON(message: _72.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_72.QueryTallyResultResponse>): _72.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisState;
                fromJSON(object: any): _71.GenesisState;
                toJSON(message: _71.GenesisState): unknown;
                fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _70.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventCreateGroup;
                fromJSON(object: any): _70.EventCreateGroup;
                toJSON(message: _70.EventCreateGroup): unknown;
                fromPartial(object: Partial<_70.EventCreateGroup>): _70.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _70.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventUpdateGroup;
                fromJSON(object: any): _70.EventUpdateGroup;
                toJSON(message: _70.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_70.EventUpdateGroup>): _70.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _70.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventCreateGroupPolicy;
                fromJSON(object: any): _70.EventCreateGroupPolicy;
                toJSON(message: _70.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_70.EventCreateGroupPolicy>): _70.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _70.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventUpdateGroupPolicy;
                fromJSON(object: any): _70.EventUpdateGroupPolicy;
                toJSON(message: _70.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_70.EventUpdateGroupPolicy>): _70.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _70.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventSubmitProposal;
                fromJSON(object: any): _70.EventSubmitProposal;
                toJSON(message: _70.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_70.EventSubmitProposal>): _70.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _70.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventWithdrawProposal;
                fromJSON(object: any): _70.EventWithdrawProposal;
                toJSON(message: _70.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_70.EventWithdrawProposal>): _70.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _70.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventVote;
                fromJSON(object: any): _70.EventVote;
                toJSON(message: _70.EventVote): unknown;
                fromPartial(object: Partial<_70.EventVote>): _70.EventVote;
            };
            EventExec: {
                encode(message: _70.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventExec;
                fromJSON(object: any): _70.EventExec;
                toJSON(message: _70.EventExec): unknown;
                fromPartial(object: Partial<_70.EventExec>): _70.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _70.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.EventLeaveGroup;
                fromJSON(object: any): _70.EventLeaveGroup;
                toJSON(message: _70.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_70.EventLeaveGroup>): _70.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _172.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                inflation(request?: _77.QueryInflationRequest): Promise<_77.QueryInflationResponse>;
                annualProvisions(request?: _77.QueryAnnualProvisionsRequest): Promise<_77.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _77.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsRequest;
                fromJSON(_: any): _77.QueryParamsRequest;
                toJSON(_: _77.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_77.QueryParamsRequest>): _77.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _77.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsResponse;
                fromJSON(object: any): _77.QueryParamsResponse;
                toJSON(message: _77.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_77.QueryParamsResponse>): _77.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _77.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryInflationRequest;
                fromJSON(_: any): _77.QueryInflationRequest;
                toJSON(_: _77.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_77.QueryInflationRequest>): _77.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _77.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryInflationResponse;
                fromJSON(object: any): _77.QueryInflationResponse;
                toJSON(message: _77.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_77.QueryInflationResponse>): _77.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _77.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _77.QueryAnnualProvisionsRequest;
                toJSON(_: _77.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_77.QueryAnnualProvisionsRequest>): _77.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _77.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _77.QueryAnnualProvisionsResponse;
                toJSON(message: _77.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_77.QueryAnnualProvisionsResponse>): _77.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _76.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Minter;
                fromJSON(object: any): _76.Minter;
                toJSON(message: _76.Minter): unknown;
                fromPartial(object: Partial<_76.Minter>): _76.Minter;
            };
            Params: {
                encode(message: _76.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Params;
                fromJSON(object: any): _76.Params;
                toJSON(message: _76.Params): unknown;
                fromPartial(object: Partial<_76.Params>): _76.Params;
            };
            GenesisState: {
                encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GenesisState;
                fromJSON(object: any): _75.GenesisState;
                toJSON(message: _75.GenesisState): unknown;
                fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _82.QueryBalanceRequest): Promise<_82.QueryBalanceResponse>;
                owner(request: _82.QueryOwnerRequest): Promise<_82.QueryOwnerResponse>;
                supply(request: _82.QuerySupplyRequest): Promise<_82.QuerySupplyResponse>;
                nFTs(request: _82.QueryNFTsRequest): Promise<_82.QueryNFTsResponse>;
                nFT(request: _82.QueryNFTRequest): Promise<_82.QueryNFTResponse>;
                class(request: _82.QueryClassRequest): Promise<_82.QueryClassResponse>;
                classes(request?: _82.QueryClassesRequest): Promise<_82.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _83.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _83.MsgSend): {
                        typeUrl: string;
                        value: _83.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _83.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _83.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _83.MsgSend): {
                        typeUrl: string;
                        value: _83.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _83.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _83.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _83.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgSend;
                fromJSON(object: any): _83.MsgSend;
                toJSON(message: _83.MsgSend): unknown;
                fromPartial(object: Partial<_83.MsgSend>): _83.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _83.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgSendResponse;
                fromJSON(_: any): _83.MsgSendResponse;
                toJSON(_: _83.MsgSendResponse): unknown;
                fromPartial(_: Partial<_83.MsgSendResponse>): _83.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _82.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryBalanceRequest;
                fromJSON(object: any): _82.QueryBalanceRequest;
                toJSON(message: _82.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_82.QueryBalanceRequest>): _82.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _82.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryBalanceResponse;
                fromJSON(object: any): _82.QueryBalanceResponse;
                toJSON(message: _82.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_82.QueryBalanceResponse>): _82.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _82.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryOwnerRequest;
                fromJSON(object: any): _82.QueryOwnerRequest;
                toJSON(message: _82.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_82.QueryOwnerRequest>): _82.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _82.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryOwnerResponse;
                fromJSON(object: any): _82.QueryOwnerResponse;
                toJSON(message: _82.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_82.QueryOwnerResponse>): _82.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _82.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QuerySupplyRequest;
                fromJSON(object: any): _82.QuerySupplyRequest;
                toJSON(message: _82.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_82.QuerySupplyRequest>): _82.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _82.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QuerySupplyResponse;
                fromJSON(object: any): _82.QuerySupplyResponse;
                toJSON(message: _82.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_82.QuerySupplyResponse>): _82.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _82.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryNFTsRequest;
                fromJSON(object: any): _82.QueryNFTsRequest;
                toJSON(message: _82.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_82.QueryNFTsRequest>): _82.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _82.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryNFTsResponse;
                fromJSON(object: any): _82.QueryNFTsResponse;
                toJSON(message: _82.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_82.QueryNFTsResponse>): _82.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _82.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryNFTRequest;
                fromJSON(object: any): _82.QueryNFTRequest;
                toJSON(message: _82.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_82.QueryNFTRequest>): _82.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _82.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryNFTResponse;
                fromJSON(object: any): _82.QueryNFTResponse;
                toJSON(message: _82.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_82.QueryNFTResponse>): _82.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _82.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryClassRequest;
                fromJSON(object: any): _82.QueryClassRequest;
                toJSON(message: _82.QueryClassRequest): unknown;
                fromPartial(object: Partial<_82.QueryClassRequest>): _82.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _82.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryClassResponse;
                fromJSON(object: any): _82.QueryClassResponse;
                toJSON(message: _82.QueryClassResponse): unknown;
                fromPartial(object: Partial<_82.QueryClassResponse>): _82.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _82.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryClassesRequest;
                fromJSON(object: any): _82.QueryClassesRequest;
                toJSON(message: _82.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_82.QueryClassesRequest>): _82.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _82.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryClassesResponse;
                fromJSON(object: any): _82.QueryClassesResponse;
                toJSON(message: _82.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_82.QueryClassesResponse>): _82.QueryClassesResponse;
            };
            Class: {
                encode(message: _81.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Class;
                fromJSON(object: any): _81.Class;
                toJSON(message: _81.Class): unknown;
                fromPartial(object: Partial<_81.Class>): _81.Class;
            };
            NFT: {
                encode(message: _81.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.NFT;
                fromJSON(object: any): _81.NFT;
                toJSON(message: _81.NFT): unknown;
                fromPartial(object: Partial<_81.NFT>): _81.NFT;
            };
            GenesisState: {
                encode(message: _80.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GenesisState;
                fromJSON(object: any): _80.GenesisState;
                toJSON(message: _80.GenesisState): unknown;
                fromPartial(object: Partial<_80.GenesisState>): _80.GenesisState;
            };
            Entry: {
                encode(message: _80.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Entry;
                fromJSON(object: any): _80.Entry;
                toJSON(message: _80.Entry): unknown;
                fromPartial(object: Partial<_80.Entry>): _80.Entry;
            };
            EventSend: {
                encode(message: _79.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.EventSend;
                fromJSON(object: any): _79.EventSend;
                toJSON(message: _79.EventSend): unknown;
                fromPartial(object: Partial<_79.EventSend>): _79.EventSend;
            };
            EventMint: {
                encode(message: _79.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.EventMint;
                fromJSON(object: any): _79.EventMint;
                toJSON(message: _79.EventMint): unknown;
                fromPartial(object: Partial<_79.EventMint>): _79.EventMint;
            };
            EventBurn: {
                encode(message: _79.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.EventBurn;
                fromJSON(object: any): _79.EventBurn;
                toJSON(message: _79.EventBurn): unknown;
                fromPartial(object: Partial<_79.EventBurn>): _79.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _84.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.TableDescriptor;
                fromJSON(object: any): _84.TableDescriptor;
                toJSON(message: _84.TableDescriptor): unknown;
                fromPartial(object: Partial<_84.TableDescriptor>): _84.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _84.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PrimaryKeyDescriptor;
                fromJSON(object: any): _84.PrimaryKeyDescriptor;
                toJSON(message: _84.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_84.PrimaryKeyDescriptor>): _84.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _84.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.SecondaryIndexDescriptor;
                fromJSON(object: any): _84.SecondaryIndexDescriptor;
                toJSON(message: _84.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_84.SecondaryIndexDescriptor>): _84.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _84.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.SingletonDescriptor;
                fromJSON(object: any): _84.SingletonDescriptor;
                toJSON(message: _84.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_84.SingletonDescriptor>): _84.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _85.StorageType;
            storageTypeToJSON(object: _85.StorageType): string;
            StorageType: typeof _85.StorageType;
            StorageTypeSDKType: typeof _85.StorageTypeSDKType;
            ModuleSchemaDescriptor: {
                encode(message: _85.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ModuleSchemaDescriptor;
                fromJSON(object: any): _85.ModuleSchemaDescriptor;
                toJSON(message: _85.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_85.ModuleSchemaDescriptor>): _85.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _85.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _85.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _85.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_85.ModuleSchemaDescriptor_FileEntry>): _85.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                subspaces(request?: _87.QuerySubspacesRequest): Promise<_87.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsRequest;
                fromJSON(object: any): _87.QueryParamsRequest;
                toJSON(message: _87.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsResponse;
                fromJSON(object: any): _87.QueryParamsResponse;
                toJSON(message: _87.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _87.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySubspacesRequest;
                fromJSON(_: any): _87.QuerySubspacesRequest;
                toJSON(_: _87.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_87.QuerySubspacesRequest>): _87.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _87.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySubspacesResponse;
                fromJSON(object: any): _87.QuerySubspacesResponse;
                toJSON(message: _87.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_87.QuerySubspacesResponse>): _87.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _87.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Subspace;
                fromJSON(object: any): _87.Subspace;
                toJSON(message: _87.Subspace): unknown;
                fromPartial(object: Partial<_87.Subspace>): _87.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _86.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ParameterChangeProposal;
                fromJSON(object: any): _86.ParameterChangeProposal;
                toJSON(message: _86.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_86.ParameterChangeProposal>): _86.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _86.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ParamChange;
                fromJSON(object: any): _86.ParamChange;
                toJSON(message: _86.ParamChange): unknown;
                fromPartial(object: Partial<_86.ParamChange>): _86.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _89.QueryParamsRequest): Promise<_89.QueryParamsResponse>;
                signingInfo(request: _89.QuerySigningInfoRequest): Promise<_89.QuerySigningInfoResponse>;
                signingInfos(request?: _89.QuerySigningInfosRequest): Promise<_89.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _91.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _91.MsgUnjail): {
                        typeUrl: string;
                        value: _91.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _91.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _91.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _91.MsgUnjail): {
                        typeUrl: string;
                        value: _91.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _91.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _91.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _91.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUnjail;
                fromJSON(object: any): _91.MsgUnjail;
                toJSON(message: _91.MsgUnjail): unknown;
                fromPartial(object: Partial<_91.MsgUnjail>): _91.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _91.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUnjailResponse;
                fromJSON(_: any): _91.MsgUnjailResponse;
                toJSON(_: _91.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_91.MsgUnjailResponse>): _91.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _90.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ValidatorSigningInfo;
                fromJSON(object: any): _90.ValidatorSigningInfo;
                toJSON(message: _90.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_90.ValidatorSigningInfo>): _90.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _90.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Params;
                fromJSON(object: any): _90.Params;
                toJSON(message: _90.Params): unknown;
                fromPartial(object: Partial<_90.Params>): _90.Params;
            };
            QueryParamsRequest: {
                encode(_: _89.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryParamsRequest;
                fromJSON(_: any): _89.QueryParamsRequest;
                toJSON(_: _89.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_89.QueryParamsRequest>): _89.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _89.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryParamsResponse;
                fromJSON(object: any): _89.QueryParamsResponse;
                toJSON(message: _89.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_89.QueryParamsResponse>): _89.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _89.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QuerySigningInfoRequest;
                fromJSON(object: any): _89.QuerySigningInfoRequest;
                toJSON(message: _89.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_89.QuerySigningInfoRequest>): _89.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _89.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QuerySigningInfoResponse;
                fromJSON(object: any): _89.QuerySigningInfoResponse;
                toJSON(message: _89.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_89.QuerySigningInfoResponse>): _89.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _89.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QuerySigningInfosRequest;
                fromJSON(object: any): _89.QuerySigningInfosRequest;
                toJSON(message: _89.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_89.QuerySigningInfosRequest>): _89.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _89.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QuerySigningInfosResponse;
                fromJSON(object: any): _89.QuerySigningInfosResponse;
                toJSON(message: _89.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_89.QuerySigningInfosResponse>): _89.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _88.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GenesisState;
                fromJSON(object: any): _88.GenesisState;
                toJSON(message: _88.GenesisState): unknown;
                fromPartial(object: Partial<_88.GenesisState>): _88.GenesisState;
            };
            SigningInfo: {
                encode(message: _88.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SigningInfo;
                fromJSON(object: any): _88.SigningInfo;
                toJSON(message: _88.SigningInfo): unknown;
                fromPartial(object: Partial<_88.SigningInfo>): _88.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _88.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValidatorMissedBlocks;
                fromJSON(object: any): _88.ValidatorMissedBlocks;
                toJSON(message: _88.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_88.ValidatorMissedBlocks>): _88.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _88.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MissedBlock;
                fromJSON(object: any): _88.MissedBlock;
                toJSON(message: _88.MissedBlock): unknown;
                fromPartial(object: Partial<_88.MissedBlock>): _88.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _94.QueryValidatorsRequest): Promise<_94.QueryValidatorsResponse>;
                validator(request: _94.QueryValidatorRequest): Promise<_94.QueryValidatorResponse>;
                validatorDelegations(request: _94.QueryValidatorDelegationsRequest): Promise<_94.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _94.QueryValidatorUnbondingDelegationsRequest): Promise<_94.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _94.QueryDelegationRequest): Promise<_94.QueryDelegationResponse>;
                unbondingDelegation(request: _94.QueryUnbondingDelegationRequest): Promise<_94.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _94.QueryDelegatorDelegationsRequest): Promise<_94.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _94.QueryDelegatorUnbondingDelegationsRequest): Promise<_94.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _94.QueryRedelegationsRequest): Promise<_94.QueryRedelegationsResponse>;
                delegatorValidators(request: _94.QueryDelegatorValidatorsRequest): Promise<_94.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _94.QueryDelegatorValidatorRequest): Promise<_94.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _94.QueryHistoricalInfoRequest): Promise<_94.QueryHistoricalInfoResponse>;
                pool(request?: _94.QueryPoolRequest): Promise<_94.QueryPoolResponse>;
                params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _96.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _96.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _96.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _96.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _96.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _96.MsgCreateValidator): {
                        typeUrl: string;
                        value: _96.MsgCreateValidator;
                    };
                    editValidator(value: _96.MsgEditValidator): {
                        typeUrl: string;
                        value: _96.MsgEditValidator;
                    };
                    delegate(value: _96.MsgDelegate): {
                        typeUrl: string;
                        value: _96.MsgDelegate;
                    };
                    beginRedelegate(value: _96.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _96.MsgBeginRedelegate;
                    };
                    undelegate(value: _96.MsgUndelegate): {
                        typeUrl: string;
                        value: _96.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _96.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _96.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _96.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _96.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _96.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _96.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _96.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _96.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _96.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _96.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _96.MsgCreateValidator): {
                        typeUrl: string;
                        value: _96.MsgCreateValidator;
                    };
                    editValidator(value: _96.MsgEditValidator): {
                        typeUrl: string;
                        value: _96.MsgEditValidator;
                    };
                    delegate(value: _96.MsgDelegate): {
                        typeUrl: string;
                        value: _96.MsgDelegate;
                    };
                    beginRedelegate(value: _96.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _96.MsgBeginRedelegate;
                    };
                    undelegate(value: _96.MsgUndelegate): {
                        typeUrl: string;
                        value: _96.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _96.MsgCreateValidator) => {
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
                    }) => _96.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _96.MsgEditValidator) => {
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
                    }) => _96.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _96.MsgDelegate) => {
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
                    }) => _96.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _96.MsgBeginRedelegate) => {
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
                    }) => _96.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _96.MsgUndelegate) => {
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
                    }) => _96.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _96.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreateValidator;
                fromJSON(object: any): _96.MsgCreateValidator;
                toJSON(message: _96.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_96.MsgCreateValidator>): _96.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _96.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCreateValidatorResponse;
                fromJSON(_: any): _96.MsgCreateValidatorResponse;
                toJSON(_: _96.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_96.MsgCreateValidatorResponse>): _96.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _96.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgEditValidator;
                fromJSON(object: any): _96.MsgEditValidator;
                toJSON(message: _96.MsgEditValidator): unknown;
                fromPartial(object: Partial<_96.MsgEditValidator>): _96.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _96.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgEditValidatorResponse;
                fromJSON(_: any): _96.MsgEditValidatorResponse;
                toJSON(_: _96.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_96.MsgEditValidatorResponse>): _96.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _96.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgDelegate;
                fromJSON(object: any): _96.MsgDelegate;
                toJSON(message: _96.MsgDelegate): unknown;
                fromPartial(object: Partial<_96.MsgDelegate>): _96.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _96.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgDelegateResponse;
                fromJSON(_: any): _96.MsgDelegateResponse;
                toJSON(_: _96.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_96.MsgDelegateResponse>): _96.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _96.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgBeginRedelegate;
                fromJSON(object: any): _96.MsgBeginRedelegate;
                toJSON(message: _96.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_96.MsgBeginRedelegate>): _96.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _96.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgBeginRedelegateResponse;
                fromJSON(object: any): _96.MsgBeginRedelegateResponse;
                toJSON(message: _96.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_96.MsgBeginRedelegateResponse>): _96.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _96.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUndelegate;
                fromJSON(object: any): _96.MsgUndelegate;
                toJSON(message: _96.MsgUndelegate): unknown;
                fromPartial(object: Partial<_96.MsgUndelegate>): _96.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _96.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUndelegateResponse;
                fromJSON(object: any): _96.MsgUndelegateResponse;
                toJSON(message: _96.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_96.MsgUndelegateResponse>): _96.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _95.BondStatus;
            bondStatusToJSON(object: _95.BondStatus): string;
            BondStatus: typeof _95.BondStatus;
            BondStatusSDKType: typeof _95.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _95.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.HistoricalInfo;
                fromJSON(object: any): _95.HistoricalInfo;
                toJSON(message: _95.HistoricalInfo): unknown;
                fromPartial(object: Partial<_95.HistoricalInfo>): _95.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _95.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.CommissionRates;
                fromJSON(object: any): _95.CommissionRates;
                toJSON(message: _95.CommissionRates): unknown;
                fromPartial(object: Partial<_95.CommissionRates>): _95.CommissionRates;
            };
            Commission: {
                encode(message: _95.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Commission;
                fromJSON(object: any): _95.Commission;
                toJSON(message: _95.Commission): unknown;
                fromPartial(object: Partial<_95.Commission>): _95.Commission;
            };
            Description: {
                encode(message: _95.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Description;
                fromJSON(object: any): _95.Description;
                toJSON(message: _95.Description): unknown;
                fromPartial(object: Partial<_95.Description>): _95.Description;
            };
            Validator: {
                encode(message: _95.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Validator;
                fromJSON(object: any): _95.Validator;
                toJSON(message: _95.Validator): unknown;
                fromPartial(object: Partial<_95.Validator>): _95.Validator;
            };
            ValAddresses: {
                encode(message: _95.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ValAddresses;
                fromJSON(object: any): _95.ValAddresses;
                toJSON(message: _95.ValAddresses): unknown;
                fromPartial(object: Partial<_95.ValAddresses>): _95.ValAddresses;
            };
            DVPair: {
                encode(message: _95.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DVPair;
                fromJSON(object: any): _95.DVPair;
                toJSON(message: _95.DVPair): unknown;
                fromPartial(object: Partial<_95.DVPair>): _95.DVPair;
            };
            DVPairs: {
                encode(message: _95.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DVPairs;
                fromJSON(object: any): _95.DVPairs;
                toJSON(message: _95.DVPairs): unknown;
                fromPartial(object: Partial<_95.DVPairs>): _95.DVPairs;
            };
            DVVTriplet: {
                encode(message: _95.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DVVTriplet;
                fromJSON(object: any): _95.DVVTriplet;
                toJSON(message: _95.DVVTriplet): unknown;
                fromPartial(object: Partial<_95.DVVTriplet>): _95.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _95.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DVVTriplets;
                fromJSON(object: any): _95.DVVTriplets;
                toJSON(message: _95.DVVTriplets): unknown;
                fromPartial(object: Partial<_95.DVVTriplets>): _95.DVVTriplets;
            };
            Delegation: {
                encode(message: _95.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Delegation;
                fromJSON(object: any): _95.Delegation;
                toJSON(message: _95.Delegation): unknown;
                fromPartial(object: Partial<_95.Delegation>): _95.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _95.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.UnbondingDelegation;
                fromJSON(object: any): _95.UnbondingDelegation;
                toJSON(message: _95.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_95.UnbondingDelegation>): _95.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _95.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.UnbondingDelegationEntry;
                fromJSON(object: any): _95.UnbondingDelegationEntry;
                toJSON(message: _95.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_95.UnbondingDelegationEntry>): _95.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _95.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RedelegationEntry;
                fromJSON(object: any): _95.RedelegationEntry;
                toJSON(message: _95.RedelegationEntry): unknown;
                fromPartial(object: Partial<_95.RedelegationEntry>): _95.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _95.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Redelegation;
                fromJSON(object: any): _95.Redelegation;
                toJSON(message: _95.Redelegation): unknown;
                fromPartial(object: Partial<_95.Redelegation>): _95.Redelegation;
            };
            Params: {
                encode(message: _95.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Params;
                fromJSON(object: any): _95.Params;
                toJSON(message: _95.Params): unknown;
                fromPartial(object: Partial<_95.Params>): _95.Params;
            };
            DelegationResponse: {
                encode(message: _95.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DelegationResponse;
                fromJSON(object: any): _95.DelegationResponse;
                toJSON(message: _95.DelegationResponse): unknown;
                fromPartial(object: Partial<_95.DelegationResponse>): _95.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _95.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RedelegationEntryResponse;
                fromJSON(object: any): _95.RedelegationEntryResponse;
                toJSON(message: _95.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_95.RedelegationEntryResponse>): _95.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _95.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RedelegationResponse;
                fromJSON(object: any): _95.RedelegationResponse;
                toJSON(message: _95.RedelegationResponse): unknown;
                fromPartial(object: Partial<_95.RedelegationResponse>): _95.RedelegationResponse;
            };
            Pool: {
                encode(message: _95.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Pool;
                fromJSON(object: any): _95.Pool;
                toJSON(message: _95.Pool): unknown;
                fromPartial(object: Partial<_95.Pool>): _95.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _94.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryValidatorsRequest;
                fromJSON(object: any): _94.QueryValidatorsRequest;
                toJSON(message: _94.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_94.QueryValidatorsRequest>): _94.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _94.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryValidatorsResponse;
                fromJSON(object: any): _94.QueryValidatorsResponse;
                toJSON(message: _94.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_94.QueryValidatorsResponse>): _94.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _94.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryValidatorRequest;
                fromJSON(object: any): _94.QueryValidatorRequest;
                toJSON(message: _94.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_94.QueryValidatorRequest>): _94.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _94.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryValidatorResponse;
                fromJSON(object: any): _94.QueryValidatorResponse;
                toJSON(message: _94.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_94.QueryValidatorResponse>): _94.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _94.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _94.QueryValidatorDelegationsRequest;
                toJSON(message: _94.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_94.QueryValidatorDelegationsRequest>): _94.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _94.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _94.QueryValidatorDelegationsResponse;
                toJSON(message: _94.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_94.QueryValidatorDelegationsResponse>): _94.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _94.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _94.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _94.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_94.QueryValidatorUnbondingDelegationsRequest>): _94.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _94.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _94.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _94.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_94.QueryValidatorUnbondingDelegationsResponse>): _94.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _94.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryDelegationRequest;
                fromJSON(object: any): _94.QueryDelegationRequest;
                toJSON(message: _94.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_94.QueryDelegationRequest>): _94.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _94.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryDelegationResponse;
                fromJSON(object: any): _94.QueryDelegationResponse;
                toJSON(message: _94.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_94.QueryDelegationResponse>): _94.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _94.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _94.QueryUnbondingDelegationRequest;
                toJSON(message: _94.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_94.QueryUnbondingDelegationRequest>): _94.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _94.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _94.QueryUnbondingDelegationResponse;
                toJSON(message: _94.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_94.QueryUnbondingDelegationResponse>): _94.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _94.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _94.QueryDelegatorDelegationsRequest;
                toJSON(message: _94.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_94.QueryDelegatorDelegationsRequest>): _94.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _94.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _94.QueryDelegatorDelegationsResponse;
                toJSON(message: _94.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_94.QueryDelegatorDelegationsResponse>): _94.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _94.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _94.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _94.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_94.QueryDelegatorUnbondingDelegationsRequest>): _94.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _94.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _94.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _94.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_94.QueryDelegatorUnbondingDelegationsResponse>): _94.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _94.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryRedelegationsRequest;
                fromJSON(object: any): _94.QueryRedelegationsRequest;
                toJSON(message: _94.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_94.QueryRedelegationsRequest>): _94.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _94.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryRedelegationsResponse;
                fromJSON(object: any): _94.QueryRedelegationsResponse;
                toJSON(message: _94.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_94.QueryRedelegationsResponse>): _94.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _94.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _94.QueryDelegatorValidatorsRequest;
                toJSON(message: _94.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_94.QueryDelegatorValidatorsRequest>): _94.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _94.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _94.QueryDelegatorValidatorsResponse;
                toJSON(message: _94.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_94.QueryDelegatorValidatorsResponse>): _94.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _94.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _94.QueryDelegatorValidatorRequest;
                toJSON(message: _94.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_94.QueryDelegatorValidatorRequest>): _94.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _94.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _94.QueryDelegatorValidatorResponse;
                toJSON(message: _94.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_94.QueryDelegatorValidatorResponse>): _94.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _94.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryHistoricalInfoRequest;
                fromJSON(object: any): _94.QueryHistoricalInfoRequest;
                toJSON(message: _94.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_94.QueryHistoricalInfoRequest>): _94.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _94.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryHistoricalInfoResponse;
                fromJSON(object: any): _94.QueryHistoricalInfoResponse;
                toJSON(message: _94.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_94.QueryHistoricalInfoResponse>): _94.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _94.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolRequest;
                fromJSON(_: any): _94.QueryPoolRequest;
                toJSON(_: _94.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_94.QueryPoolRequest>): _94.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _94.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryPoolResponse;
                fromJSON(object: any): _94.QueryPoolResponse;
                toJSON(message: _94.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_94.QueryPoolResponse>): _94.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _94.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryParamsRequest;
                fromJSON(_: any): _94.QueryParamsRequest;
                toJSON(_: _94.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_94.QueryParamsRequest>): _94.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _94.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryParamsResponse;
                fromJSON(object: any): _94.QueryParamsResponse;
                toJSON(message: _94.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_94.QueryParamsResponse>): _94.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GenesisState;
                fromJSON(object: any): _93.GenesisState;
                toJSON(message: _93.GenesisState): unknown;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _93.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.LastValidatorPower;
                fromJSON(object: any): _93.LastValidatorPower;
                toJSON(message: _93.LastValidatorPower): unknown;
                fromPartial(object: Partial<_93.LastValidatorPower>): _93.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _92.AuthorizationType;
            authorizationTypeToJSON(object: _92.AuthorizationType): string;
            AuthorizationType: typeof _92.AuthorizationType;
            AuthorizationTypeSDKType: typeof _92.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _92.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.StakeAuthorization;
                fromJSON(object: any): _92.StakeAuthorization;
                toJSON(message: _92.StakeAuthorization): unknown;
                fromPartial(object: Partial<_92.StakeAuthorization>): _92.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _92.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.StakeAuthorization_Validators;
                fromJSON(object: any): _92.StakeAuthorization_Validators;
                toJSON(message: _92.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_92.StakeAuthorization_Validators>): _92.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _97.SignMode;
                signModeToJSON(object: _97.SignMode): string;
                SignMode: typeof _97.SignMode;
                SignModeSDKType: typeof _97.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _97.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SignatureDescriptors;
                    fromJSON(object: any): _97.SignatureDescriptors;
                    toJSON(message: _97.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_97.SignatureDescriptors>): _97.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _97.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SignatureDescriptor;
                    fromJSON(object: any): _97.SignatureDescriptor;
                    toJSON(message: _97.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_97.SignatureDescriptor>): _97.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _97.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SignatureDescriptor_Data;
                    fromJSON(object: any): _97.SignatureDescriptor_Data;
                    toJSON(message: _97.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_97.SignatureDescriptor_Data>): _97.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _97.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _97.SignatureDescriptor_Data_Single;
                    toJSON(message: _97.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_97.SignatureDescriptor_Data_Single>): _97.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _97.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _97.SignatureDescriptor_Data_Multi;
                    toJSON(message: _97.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_97.SignatureDescriptor_Data_Multi>): _97.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _177.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _98.SimulateRequest): Promise<_98.SimulateResponse>;
                getTx(request: _98.GetTxRequest): Promise<_98.GetTxResponse>;
                broadcastTx(request: _98.BroadcastTxRequest): Promise<_98.BroadcastTxResponse>;
                getTxsEvent(request: _98.GetTxsEventRequest): Promise<_98.GetTxsEventResponse>;
                getBlockWithTxs(request: _98.GetBlockWithTxsRequest): Promise<_98.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _99.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Tx;
                fromJSON(object: any): _99.Tx;
                toJSON(message: _99.Tx): unknown;
                fromPartial(object: Partial<_99.Tx>): _99.Tx;
            };
            TxRaw: {
                encode(message: _99.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.TxRaw;
                fromJSON(object: any): _99.TxRaw;
                toJSON(message: _99.TxRaw): unknown;
                fromPartial(object: Partial<_99.TxRaw>): _99.TxRaw;
            };
            SignDoc: {
                encode(message: _99.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.SignDoc;
                fromJSON(object: any): _99.SignDoc;
                toJSON(message: _99.SignDoc): unknown;
                fromPartial(object: Partial<_99.SignDoc>): _99.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _99.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.SignDocDirectAux;
                fromJSON(object: any): _99.SignDocDirectAux;
                toJSON(message: _99.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_99.SignDocDirectAux>): _99.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _99.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.TxBody;
                fromJSON(object: any): _99.TxBody;
                toJSON(message: _99.TxBody): unknown;
                fromPartial(object: Partial<_99.TxBody>): _99.TxBody;
            };
            AuthInfo: {
                encode(message: _99.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AuthInfo;
                fromJSON(object: any): _99.AuthInfo;
                toJSON(message: _99.AuthInfo): unknown;
                fromPartial(object: Partial<_99.AuthInfo>): _99.AuthInfo;
            };
            SignerInfo: {
                encode(message: _99.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.SignerInfo;
                fromJSON(object: any): _99.SignerInfo;
                toJSON(message: _99.SignerInfo): unknown;
                fromPartial(object: Partial<_99.SignerInfo>): _99.SignerInfo;
            };
            ModeInfo: {
                encode(message: _99.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ModeInfo;
                fromJSON(object: any): _99.ModeInfo;
                toJSON(message: _99.ModeInfo): unknown;
                fromPartial(object: Partial<_99.ModeInfo>): _99.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _99.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ModeInfo_Single;
                fromJSON(object: any): _99.ModeInfo_Single;
                toJSON(message: _99.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_99.ModeInfo_Single>): _99.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _99.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ModeInfo_Multi;
                fromJSON(object: any): _99.ModeInfo_Multi;
                toJSON(message: _99.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_99.ModeInfo_Multi>): _99.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _99.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Fee;
                fromJSON(object: any): _99.Fee;
                toJSON(message: _99.Fee): unknown;
                fromPartial(object: Partial<_99.Fee>): _99.Fee;
            };
            Tip: {
                encode(message: _99.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Tip;
                fromJSON(object: any): _99.Tip;
                toJSON(message: _99.Tip): unknown;
                fromPartial(object: Partial<_99.Tip>): _99.Tip;
            };
            AuxSignerData: {
                encode(message: _99.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AuxSignerData;
                fromJSON(object: any): _99.AuxSignerData;
                toJSON(message: _99.AuxSignerData): unknown;
                fromPartial(object: Partial<_99.AuxSignerData>): _99.AuxSignerData;
            };
            orderByFromJSON(object: any): _98.OrderBy;
            orderByToJSON(object: _98.OrderBy): string;
            broadcastModeFromJSON(object: any): _98.BroadcastMode;
            broadcastModeToJSON(object: _98.BroadcastMode): string;
            OrderBy: typeof _98.OrderBy;
            OrderBySDKType: typeof _98.OrderBySDKType;
            BroadcastMode: typeof _98.BroadcastMode;
            BroadcastModeSDKType: typeof _98.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _98.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GetTxsEventRequest;
                fromJSON(object: any): _98.GetTxsEventRequest;
                toJSON(message: _98.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_98.GetTxsEventRequest>): _98.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _98.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GetTxsEventResponse;
                fromJSON(object: any): _98.GetTxsEventResponse;
                toJSON(message: _98.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_98.GetTxsEventResponse>): _98.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _98.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.BroadcastTxRequest;
                fromJSON(object: any): _98.BroadcastTxRequest;
                toJSON(message: _98.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_98.BroadcastTxRequest>): _98.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _98.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.BroadcastTxResponse;
                fromJSON(object: any): _98.BroadcastTxResponse;
                toJSON(message: _98.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_98.BroadcastTxResponse>): _98.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _98.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SimulateRequest;
                fromJSON(object: any): _98.SimulateRequest;
                toJSON(message: _98.SimulateRequest): unknown;
                fromPartial(object: Partial<_98.SimulateRequest>): _98.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _98.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SimulateResponse;
                fromJSON(object: any): _98.SimulateResponse;
                toJSON(message: _98.SimulateResponse): unknown;
                fromPartial(object: Partial<_98.SimulateResponse>): _98.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _98.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GetTxRequest;
                fromJSON(object: any): _98.GetTxRequest;
                toJSON(message: _98.GetTxRequest): unknown;
                fromPartial(object: Partial<_98.GetTxRequest>): _98.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _98.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GetTxResponse;
                fromJSON(object: any): _98.GetTxResponse;
                toJSON(message: _98.GetTxResponse): unknown;
                fromPartial(object: Partial<_98.GetTxResponse>): _98.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _98.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GetBlockWithTxsRequest;
                fromJSON(object: any): _98.GetBlockWithTxsRequest;
                toJSON(message: _98.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_98.GetBlockWithTxsRequest>): _98.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _98.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GetBlockWithTxsResponse;
                fromJSON(object: any): _98.GetBlockWithTxsResponse;
                toJSON(message: _98.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_98.GetBlockWithTxsResponse>): _98.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _191.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _100.QueryCurrentPlanRequest): Promise<_100.QueryCurrentPlanResponse>;
                appliedPlan(request: _100.QueryAppliedPlanRequest): Promise<_100.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _100.QueryUpgradedConsensusStateRequest): Promise<_100.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _100.QueryModuleVersionsRequest): Promise<_100.QueryModuleVersionsResponse>;
                authority(request?: _100.QueryAuthorityRequest): Promise<_100.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _101.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _101.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _101.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _101.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _101.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _101.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _101.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _101.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _101.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _101.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _101.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _101.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _101.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _101.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _101.MsgSoftwareUpgrade) => {
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
                    }) => _101.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _101.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _101.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _102.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Plan;
                fromJSON(object: any): _102.Plan;
                toJSON(message: _102.Plan): unknown;
                fromPartial(object: Partial<_102.Plan>): _102.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _102.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SoftwareUpgradeProposal;
                fromJSON(object: any): _102.SoftwareUpgradeProposal;
                toJSON(message: _102.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_102.SoftwareUpgradeProposal>): _102.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _102.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _102.CancelSoftwareUpgradeProposal;
                toJSON(message: _102.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_102.CancelSoftwareUpgradeProposal>): _102.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _102.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ModuleVersion;
                fromJSON(object: any): _102.ModuleVersion;
                toJSON(message: _102.ModuleVersion): unknown;
                fromPartial(object: Partial<_102.ModuleVersion>): _102.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _101.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgSoftwareUpgrade;
                fromJSON(object: any): _101.MsgSoftwareUpgrade;
                toJSON(message: _101.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_101.MsgSoftwareUpgrade>): _101.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _101.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _101.MsgSoftwareUpgradeResponse;
                toJSON(_: _101.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_101.MsgSoftwareUpgradeResponse>): _101.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _101.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgCancelUpgrade;
                fromJSON(object: any): _101.MsgCancelUpgrade;
                toJSON(message: _101.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_101.MsgCancelUpgrade>): _101.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _101.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgCancelUpgradeResponse;
                fromJSON(_: any): _101.MsgCancelUpgradeResponse;
                toJSON(_: _101.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_101.MsgCancelUpgradeResponse>): _101.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _100.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryCurrentPlanRequest;
                fromJSON(_: any): _100.QueryCurrentPlanRequest;
                toJSON(_: _100.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_100.QueryCurrentPlanRequest>): _100.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _100.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryCurrentPlanResponse;
                fromJSON(object: any): _100.QueryCurrentPlanResponse;
                toJSON(message: _100.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_100.QueryCurrentPlanResponse>): _100.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _100.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryAppliedPlanRequest;
                fromJSON(object: any): _100.QueryAppliedPlanRequest;
                toJSON(message: _100.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_100.QueryAppliedPlanRequest>): _100.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _100.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryAppliedPlanResponse;
                fromJSON(object: any): _100.QueryAppliedPlanResponse;
                toJSON(message: _100.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_100.QueryAppliedPlanResponse>): _100.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _100.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _100.QueryUpgradedConsensusStateRequest;
                toJSON(message: _100.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_100.QueryUpgradedConsensusStateRequest>): _100.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _100.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _100.QueryUpgradedConsensusStateResponse;
                toJSON(message: _100.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_100.QueryUpgradedConsensusStateResponse>): _100.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _100.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryModuleVersionsRequest;
                fromJSON(object: any): _100.QueryModuleVersionsRequest;
                toJSON(message: _100.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_100.QueryModuleVersionsRequest>): _100.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _100.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryModuleVersionsResponse;
                fromJSON(object: any): _100.QueryModuleVersionsResponse;
                toJSON(message: _100.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_100.QueryModuleVersionsResponse>): _100.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _100.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryAuthorityRequest;
                fromJSON(_: any): _100.QueryAuthorityRequest;
                toJSON(_: _100.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_100.QueryAuthorityRequest>): _100.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _100.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryAuthorityResponse;
                fromJSON(object: any): _100.QueryAuthorityResponse;
                toJSON(message: _100.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_100.QueryAuthorityResponse>): _100.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _192.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _103.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _103.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _103.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _103.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _103.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _103.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _103.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _103.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _103.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _103.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _103.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _103.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _103.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _103.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _103.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _103.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _103.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _103.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _103.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _103.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _103.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _103.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _103.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _103.MsgCreatePermanentLockedAccount) => {
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
                    }) => _103.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _103.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _103.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _104.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BaseVestingAccount;
                fromJSON(object: any): _104.BaseVestingAccount;
                toJSON(message: _104.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_104.BaseVestingAccount>): _104.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _104.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ContinuousVestingAccount;
                fromJSON(object: any): _104.ContinuousVestingAccount;
                toJSON(message: _104.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_104.ContinuousVestingAccount>): _104.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _104.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DelayedVestingAccount;
                fromJSON(object: any): _104.DelayedVestingAccount;
                toJSON(message: _104.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_104.DelayedVestingAccount>): _104.DelayedVestingAccount;
            };
            Period: {
                encode(message: _104.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Period;
                fromJSON(object: any): _104.Period;
                toJSON(message: _104.Period): unknown;
                fromPartial(object: Partial<_104.Period>): _104.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _104.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.PeriodicVestingAccount;
                fromJSON(object: any): _104.PeriodicVestingAccount;
                toJSON(message: _104.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_104.PeriodicVestingAccount>): _104.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _104.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.PermanentLockedAccount;
                fromJSON(object: any): _104.PermanentLockedAccount;
                toJSON(message: _104.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_104.PermanentLockedAccount>): _104.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _103.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgCreateVestingAccount;
                fromJSON(object: any): _103.MsgCreateVestingAccount;
                toJSON(message: _103.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_103.MsgCreateVestingAccount>): _103.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _103.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _103.MsgCreateVestingAccountResponse;
                toJSON(_: _103.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_103.MsgCreateVestingAccountResponse>): _103.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _103.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _103.MsgCreatePermanentLockedAccount;
                toJSON(message: _103.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_103.MsgCreatePermanentLockedAccount>): _103.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _103.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _103.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _103.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_103.MsgCreatePermanentLockedAccountResponse>): _103.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _103.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _103.MsgCreatePeriodicVestingAccount;
                toJSON(message: _103.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_103.MsgCreatePeriodicVestingAccount>): _103.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _103.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _103.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _103.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_103.MsgCreatePeriodicVestingAccountResponse>): _103.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _179.MsgClientImpl;
                };
                bank: {
                    v1beta1: _180.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _181.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _182.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _183.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _184.MsgClientImpl;
                };
                gov: {
                    v1: _185.MsgClientImpl;
                    v1beta1: _186.MsgClientImpl;
                };
                group: {
                    v1: _187.MsgClientImpl;
                };
                nft: {
                    v1beta1: _188.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _189.MsgClientImpl;
                };
                staking: {
                    v1beta1: _190.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _191.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _192.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _15.QueryConfigRequest): Promise<_15.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _18.QueryAccountsRequest): Promise<_18.QueryAccountsResponse>;
                        account(request: _18.QueryAccountRequest): Promise<_18.QueryAccountResponse>;
                        params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                        moduleAccounts(request?: _18.QueryModuleAccountsRequest): Promise<_18.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _18.Bech32PrefixRequest): Promise<_18.Bech32PrefixResponse>;
                        addressBytesToString(request: _18.AddressBytesToStringRequest): Promise<_18.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _18.AddressStringToBytesRequest): Promise<_18.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _22.QueryGrantsRequest): Promise<_22.QueryGrantsResponse>;
                        granterGrants(request: _22.QueryGranterGrantsRequest): Promise<_22.QueryGranterGrantsResponse>;
                        granteeGrants(request: _22.QueryGranteeGrantsRequest): Promise<_22.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _27.QueryBalanceRequest): Promise<_27.QueryBalanceResponse>;
                        allBalances(request: _27.QueryAllBalancesRequest): Promise<_27.QueryAllBalancesResponse>;
                        spendableBalances(request: _27.QuerySpendableBalancesRequest): Promise<_27.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _27.QueryTotalSupplyRequest): Promise<_27.QueryTotalSupplyResponse>;
                        supplyOf(request: _27.QuerySupplyOfRequest): Promise<_27.QuerySupplyOfResponse>;
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                        denomMetadata(request: _27.QueryDenomMetadataRequest): Promise<_27.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _27.QueryDenomsMetadataRequest): Promise<_27.QueryDenomsMetadataResponse>;
                        denomOwners(request: _27.QueryDenomOwnersRequest): Promise<_27.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _37.GetNodeInfoRequest): Promise<_37.GetNodeInfoResponse>;
                            getSyncing(request?: _37.GetSyncingRequest): Promise<_37.GetSyncingResponse>;
                            getLatestBlock(request?: _37.GetLatestBlockRequest): Promise<_37.GetLatestBlockResponse>;
                            getBlockByHeight(request: _37.GetBlockByHeightRequest): Promise<_37.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _37.GetLatestValidatorSetRequest): Promise<_37.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _37.GetValidatorSetByHeightRequest): Promise<_37.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _51.QueryValidatorOutstandingRewardsRequest): Promise<_51.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _51.QueryValidatorCommissionRequest): Promise<_51.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _51.QueryValidatorSlashesRequest): Promise<_51.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _51.QueryDelegationRewardsRequest): Promise<_51.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _51.QueryDelegationTotalRewardsRequest): Promise<_51.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _51.QueryDelegatorValidatorsRequest): Promise<_51.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _51.QueryDelegatorWithdrawAddressRequest): Promise<_51.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _51.QueryCommunityPoolRequest): Promise<_51.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _55.QueryEvidenceRequest): Promise<_55.QueryEvidenceResponse>;
                        allEvidence(request?: _55.QueryAllEvidenceRequest): Promise<_55.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _59.QueryAllowanceRequest): Promise<_59.QueryAllowanceResponse>;
                        allowances(request: _59.QueryAllowancesRequest): Promise<_59.QueryAllowancesResponse>;
                        allowancesByGranter(request: _59.QueryAllowancesByGranterRequest): Promise<_59.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                        proposals(request: _64.QueryProposalsRequest): Promise<_64.QueryProposalsResponse>;
                        vote(request: _64.QueryVoteRequest): Promise<_64.QueryVoteResponse>;
                        votes(request: _64.QueryVotesRequest): Promise<_64.QueryVotesResponse>;
                        params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        deposit(request: _64.QueryDepositRequest): Promise<_64.QueryDepositResponse>;
                        deposits(request: _64.QueryDepositsRequest): Promise<_64.QueryDepositsResponse>;
                        tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                        proposals(request: _68.QueryProposalsRequest): Promise<_68.QueryProposalsResponse>;
                        vote(request: _68.QueryVoteRequest): Promise<_68.QueryVoteResponse>;
                        votes(request: _68.QueryVotesRequest): Promise<_68.QueryVotesResponse>;
                        params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                        deposit(request: _68.QueryDepositRequest): Promise<_68.QueryDepositResponse>;
                        deposits(request: _68.QueryDepositsRequest): Promise<_68.QueryDepositsResponse>;
                        tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _72.QueryGroupInfoRequest): Promise<_72.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _72.QueryGroupPolicyInfoRequest): Promise<_72.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _72.QueryGroupMembersRequest): Promise<_72.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _72.QueryGroupsByAdminRequest): Promise<_72.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _72.QueryGroupPoliciesByGroupRequest): Promise<_72.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _72.QueryGroupPoliciesByAdminRequest): Promise<_72.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _72.QueryProposalRequest): Promise<_72.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _72.QueryProposalsByGroupPolicyRequest): Promise<_72.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _72.QueryVoteByProposalVoterRequest): Promise<_72.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _72.QueryVotesByProposalRequest): Promise<_72.QueryVotesByProposalResponse>;
                        votesByVoter(request: _72.QueryVotesByVoterRequest): Promise<_72.QueryVotesByVoterResponse>;
                        groupsByMember(request: _72.QueryGroupsByMemberRequest): Promise<_72.QueryGroupsByMemberResponse>;
                        tallyResult(request: _72.QueryTallyResultRequest): Promise<_72.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        inflation(request?: _77.QueryInflationRequest): Promise<_77.QueryInflationResponse>;
                        annualProvisions(request?: _77.QueryAnnualProvisionsRequest): Promise<_77.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _82.QueryBalanceRequest): Promise<_82.QueryBalanceResponse>;
                        owner(request: _82.QueryOwnerRequest): Promise<_82.QueryOwnerResponse>;
                        supply(request: _82.QuerySupplyRequest): Promise<_82.QuerySupplyResponse>;
                        nFTs(request: _82.QueryNFTsRequest): Promise<_82.QueryNFTsResponse>;
                        nFT(request: _82.QueryNFTRequest): Promise<_82.QueryNFTResponse>;
                        class(request: _82.QueryClassRequest): Promise<_82.QueryClassResponse>;
                        classes(request?: _82.QueryClassesRequest): Promise<_82.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        subspaces(request?: _87.QuerySubspacesRequest): Promise<_87.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _89.QueryParamsRequest): Promise<_89.QueryParamsResponse>;
                        signingInfo(request: _89.QuerySigningInfoRequest): Promise<_89.QuerySigningInfoResponse>;
                        signingInfos(request?: _89.QuerySigningInfosRequest): Promise<_89.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _94.QueryValidatorsRequest): Promise<_94.QueryValidatorsResponse>;
                        validator(request: _94.QueryValidatorRequest): Promise<_94.QueryValidatorResponse>;
                        validatorDelegations(request: _94.QueryValidatorDelegationsRequest): Promise<_94.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _94.QueryValidatorUnbondingDelegationsRequest): Promise<_94.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _94.QueryDelegationRequest): Promise<_94.QueryDelegationResponse>;
                        unbondingDelegation(request: _94.QueryUnbondingDelegationRequest): Promise<_94.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _94.QueryDelegatorDelegationsRequest): Promise<_94.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _94.QueryDelegatorUnbondingDelegationsRequest): Promise<_94.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _94.QueryRedelegationsRequest): Promise<_94.QueryRedelegationsResponse>;
                        delegatorValidators(request: _94.QueryDelegatorValidatorsRequest): Promise<_94.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _94.QueryDelegatorValidatorRequest): Promise<_94.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _94.QueryHistoricalInfoRequest): Promise<_94.QueryHistoricalInfoResponse>;
                        pool(request?: _94.QueryPoolRequest): Promise<_94.QueryPoolResponse>;
                        params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _98.SimulateRequest): Promise<_98.SimulateResponse>;
                        getTx(request: _98.GetTxRequest): Promise<_98.GetTxResponse>;
                        broadcastTx(request: _98.BroadcastTxRequest): Promise<_98.BroadcastTxResponse>;
                        getTxsEvent(request: _98.GetTxsEventRequest): Promise<_98.GetTxsEventResponse>;
                        getBlockWithTxs(request: _98.GetBlockWithTxsRequest): Promise<_98.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _100.QueryCurrentPlanRequest): Promise<_100.QueryCurrentPlanResponse>;
                        appliedPlan(request: _100.QueryAppliedPlanRequest): Promise<_100.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _100.QueryUpgradedConsensusStateRequest): Promise<_100.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _100.QueryModuleVersionsRequest): Promise<_100.QueryModuleVersionsResponse>;
                        authority(request?: _100.QueryAuthorityRequest): Promise<_100.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
