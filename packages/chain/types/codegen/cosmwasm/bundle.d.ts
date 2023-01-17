import * as _53 from "./wasm/v1/genesis";
import * as _54 from "./wasm/v1/ibc";
import * as _55 from "./wasm/v1/proposal";
import * as _56 from "./wasm/v1/query";
import * as _57 from "./wasm/v1/tx";
import * as _58 from "./wasm/v1/types";
import * as _134 from "./wasm/v1/query.rpc.Query";
import * as _135 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _135.MsgClientImpl;
            QueryClientImpl: typeof _134.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _56.QueryContractInfoRequest): Promise<_56.QueryContractInfoResponse>;
                contractHistory(request: _56.QueryContractHistoryRequest): Promise<_56.QueryContractHistoryResponse>;
                contractsByCode(request: _56.QueryContractsByCodeRequest): Promise<_56.QueryContractsByCodeResponse>;
                allContractState(request: _56.QueryAllContractStateRequest): Promise<_56.QueryAllContractStateResponse>;
                rawContractState(request: _56.QueryRawContractStateRequest): Promise<_56.QueryRawContractStateResponse>;
                smartContractState(request: _56.QuerySmartContractStateRequest): Promise<_56.QuerySmartContractStateResponse>;
                code(request: _56.QueryCodeRequest): Promise<_56.QueryCodeResponse>;
                codes(request?: _56.QueryCodesRequest): Promise<_56.QueryCodesResponse>;
                pinnedCodes(request?: _56.QueryPinnedCodesRequest): Promise<_56.QueryPinnedCodesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _57.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _57.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _57.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _57.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _57.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _57.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _57.MsgStoreCode): {
                        typeUrl: string;
                        value: _57.MsgStoreCode;
                    };
                    instantiateContract(value: _57.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _57.MsgInstantiateContract;
                    };
                    executeContract(value: _57.MsgExecuteContract): {
                        typeUrl: string;
                        value: _57.MsgExecuteContract;
                    };
                    migrateContract(value: _57.MsgMigrateContract): {
                        typeUrl: string;
                        value: _57.MsgMigrateContract;
                    };
                    updateAdmin(value: _57.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _57.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _57.MsgClearAdmin): {
                        typeUrl: string;
                        value: _57.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _57.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _57.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _57.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _57.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _57.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _57.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _57.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _57.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _57.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _57.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _57.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _57.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _57.MsgStoreCode): {
                        typeUrl: string;
                        value: _57.MsgStoreCode;
                    };
                    instantiateContract(value: _57.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _57.MsgInstantiateContract;
                    };
                    executeContract(value: _57.MsgExecuteContract): {
                        typeUrl: string;
                        value: _57.MsgExecuteContract;
                    };
                    migrateContract(value: _57.MsgMigrateContract): {
                        typeUrl: string;
                        value: _57.MsgMigrateContract;
                    };
                    updateAdmin(value: _57.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _57.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _57.MsgClearAdmin): {
                        typeUrl: string;
                        value: _57.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _57.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    }) => _57.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _57.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _57.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _57.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _57.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _57.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _57.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _57.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _57.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _57.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _57.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _58.AccessType;
            accessTypeToJSON(object: _58.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _58.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _58.ContractCodeHistoryOperationType): string;
            AccessType: typeof _58.AccessType;
            ContractCodeHistoryOperationType: typeof _58.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _58.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.AccessTypeParam;
                fromJSON(object: any): _58.AccessTypeParam;
                toJSON(message: _58.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _58.AccessType;
                }): _58.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _58.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.AccessConfig;
                fromJSON(object: any): _58.AccessConfig;
                toJSON(message: _58.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _58.AccessType;
                    address?: string;
                }): _58.AccessConfig;
            };
            Params: {
                encode(message: _58.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Params;
                fromJSON(object: any): _58.Params;
                toJSON(message: _58.Params): unknown;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _58.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _58.AccessType;
                    maxWasmCodeSize?: string | number | import("long");
                }): _58.Params;
            };
            CodeInfo: {
                encode(message: _58.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.CodeInfo;
                fromJSON(object: any): _58.CodeInfo;
                toJSON(message: _58.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _58.AccessType;
                        address?: string;
                    };
                }): _58.CodeInfo;
            };
            ContractInfo: {
                encode(message: _58.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ContractInfo;
                fromJSON(object: any): _58.ContractInfo;
                toJSON(message: _58.ContractInfo): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: string | number | import("long");
                        txIndex?: string | number | import("long");
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _58.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _58.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ContractCodeHistoryEntry;
                fromJSON(object: any): _58.ContractCodeHistoryEntry;
                toJSON(message: _58.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _58.ContractCodeHistoryOperationType;
                    codeId?: string | number | import("long");
                    updated?: {
                        blockHeight?: string | number | import("long");
                        txIndex?: string | number | import("long");
                    };
                    msg?: Uint8Array;
                }): _58.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _58.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.AbsoluteTxPosition;
                fromJSON(object: any): _58.AbsoluteTxPosition;
                toJSON(message: _58.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: string | number | import("long");
                    txIndex?: string | number | import("long");
                }): _58.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _58.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Model;
                fromJSON(object: any): _58.Model;
                toJSON(message: _58.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _58.Model;
            };
            MsgStoreCode: {
                encode(message: _57.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgStoreCode;
                fromJSON(object: any): _57.MsgStoreCode;
                toJSON(message: _57.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _58.AccessType;
                        address?: string;
                    };
                }): _57.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _57.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgStoreCodeResponse;
                fromJSON(object: any): _57.MsgStoreCodeResponse;
                toJSON(message: _57.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                }): _57.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _57.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgInstantiateContract;
                fromJSON(object: any): _57.MsgInstantiateContract;
                toJSON(message: _57.MsgInstantiateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: string | number | import("long");
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _57.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _57.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgInstantiateContractResponse;
                fromJSON(object: any): _57.MsgInstantiateContractResponse;
                toJSON(message: _57.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _57.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _57.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgExecuteContract;
                fromJSON(object: any): _57.MsgExecuteContract;
                toJSON(message: _57.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _57.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _57.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgExecuteContractResponse;
                fromJSON(object: any): _57.MsgExecuteContractResponse;
                toJSON(message: _57.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _57.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _57.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgMigrateContract;
                fromJSON(object: any): _57.MsgMigrateContract;
                toJSON(message: _57.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: string | number | import("long");
                    msg?: Uint8Array;
                }): _57.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _57.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgMigrateContractResponse;
                fromJSON(object: any): _57.MsgMigrateContractResponse;
                toJSON(message: _57.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _57.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _57.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgUpdateAdmin;
                fromJSON(object: any): _57.MsgUpdateAdmin;
                toJSON(message: _57.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _57.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _57.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgUpdateAdminResponse;
                fromJSON(_: any): _57.MsgUpdateAdminResponse;
                toJSON(_: _57.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _57.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _57.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgClearAdmin;
                fromJSON(object: any): _57.MsgClearAdmin;
                toJSON(message: _57.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _57.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _57.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgClearAdminResponse;
                fromJSON(_: any): _57.MsgClearAdminResponse;
                toJSON(_: _57.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _57.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _56.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryContractInfoRequest;
                fromJSON(object: any): _56.QueryContractInfoRequest;
                toJSON(message: _56.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _56.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _56.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryContractInfoResponse;
                fromJSON(object: any): _56.QueryContractInfoResponse;
                toJSON(message: _56.QueryContractInfoResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    contractInfo?: {
                        codeId?: string | number | import("long");
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string | number | import("long");
                            txIndex?: string | number | import("long");
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _56.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _56.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryContractHistoryRequest;
                fromJSON(object: any): _56.QueryContractHistoryRequest;
                toJSON(message: _56.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _56.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _56.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryContractHistoryResponse;
                fromJSON(object: any): _56.QueryContractHistoryResponse;
                toJSON(message: _56.QueryContractHistoryResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        operation?: _58.ContractCodeHistoryOperationType;
                        codeId?: string | number | import("long");
                        updated?: {
                            blockHeight?: string | number | import("long");
                            txIndex?: string | number | import("long");
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _56.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _56.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryContractsByCodeRequest;
                fromJSON(object: any): _56.QueryContractsByCodeRequest;
                toJSON(message: _56.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _56.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _56.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryContractsByCodeResponse;
                fromJSON(object: any): _56.QueryContractsByCodeResponse;
                toJSON(message: _56.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _56.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _56.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllContractStateRequest;
                fromJSON(object: any): _56.QueryAllContractStateRequest;
                toJSON(message: _56.QueryAllContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _56.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _56.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllContractStateResponse;
                fromJSON(object: any): _56.QueryAllContractStateResponse;
                toJSON(message: _56.QueryAllContractStateResponse): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _56.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _56.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryRawContractStateRequest;
                fromJSON(object: any): _56.QueryRawContractStateRequest;
                toJSON(message: _56.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _56.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _56.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryRawContractStateResponse;
                fromJSON(object: any): _56.QueryRawContractStateResponse;
                toJSON(message: _56.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _56.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _56.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QuerySmartContractStateRequest;
                fromJSON(object: any): _56.QuerySmartContractStateRequest;
                toJSON(message: _56.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _56.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _56.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QuerySmartContractStateResponse;
                fromJSON(object: any): _56.QuerySmartContractStateResponse;
                toJSON(message: _56.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _56.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _56.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryCodeRequest;
                fromJSON(object: any): _56.QueryCodeRequest;
                toJSON(message: _56.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                }): _56.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _56.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.CodeInfoResponse;
                fromJSON(object: any): _56.CodeInfoResponse;
                toJSON(message: _56.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    creator?: string;
                    dataHash?: Uint8Array;
                }): _56.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _56.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryCodeResponse;
                fromJSON(object: any): _56.QueryCodeResponse;
                toJSON(message: _56.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: string | number | import("long");
                        creator?: string;
                        dataHash?: Uint8Array;
                    };
                    data?: Uint8Array;
                }): _56.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _56.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryCodesRequest;
                fromJSON(object: any): _56.QueryCodesRequest;
                toJSON(message: _56.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _56.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _56.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryCodesResponse;
                fromJSON(object: any): _56.QueryCodesResponse;
                toJSON(message: _56.QueryCodesResponse): unknown;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: string | number | import("long");
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _56.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _56.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryPinnedCodesRequest;
                fromJSON(object: any): _56.QueryPinnedCodesRequest;
                toJSON(message: _56.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _56.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _56.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryPinnedCodesResponse;
                fromJSON(object: any): _56.QueryPinnedCodesResponse;
                toJSON(message: _56.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    codeIds?: (string | number | import("long"))[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _56.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _55.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.StoreCodeProposal;
                fromJSON(object: any): _55.StoreCodeProposal;
                toJSON(message: _55.StoreCodeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _58.AccessType;
                        address?: string;
                    };
                }): _55.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _55.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.InstantiateContractProposal;
                fromJSON(object: any): _55.InstantiateContractProposal;
                toJSON(message: _55.InstantiateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: string | number | import("long");
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _55.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _55.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MigrateContractProposal;
                fromJSON(object: any): _55.MigrateContractProposal;
                toJSON(message: _55.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: string | number | import("long");
                    msg?: Uint8Array;
                }): _55.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _55.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.SudoContractProposal;
                fromJSON(object: any): _55.SudoContractProposal;
                toJSON(message: _55.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _55.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _55.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ExecuteContractProposal;
                fromJSON(object: any): _55.ExecuteContractProposal;
                toJSON(message: _55.ExecuteContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _55.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _55.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.UpdateAdminProposal;
                fromJSON(object: any): _55.UpdateAdminProposal;
                toJSON(message: _55.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _55.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _55.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ClearAdminProposal;
                fromJSON(object: any): _55.ClearAdminProposal;
                toJSON(message: _55.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _55.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _55.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.PinCodesProposal;
                fromJSON(object: any): _55.PinCodesProposal;
                toJSON(message: _55.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: (string | number | import("long"))[];
                }): _55.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _55.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.UnpinCodesProposal;
                fromJSON(object: any): _55.UnpinCodesProposal;
                toJSON(message: _55.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: (string | number | import("long"))[];
                }): _55.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _54.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgIBCSend;
                fromJSON(object: any): _54.MsgIBCSend;
                toJSON(message: _54.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: string | number | import("long");
                    timeoutTimestamp?: string | number | import("long");
                    data?: Uint8Array;
                }): _54.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _54.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgIBCCloseChannel;
                fromJSON(object: any): _54.MsgIBCCloseChannel;
                toJSON(message: _54.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _54.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GenesisState;
                fromJSON(object: any): _53.GenesisState;
                toJSON(message: _53.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _58.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _58.AccessType;
                        maxWasmCodeSize?: string | number | import("long");
                    };
                    codes?: {
                        codeId?: string | number | import("long");
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _58.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: string | number | import("long");
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: string | number | import("long");
                                txIndex?: string | number | import("long");
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: string | number | import("long");
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _58.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: string | number | import("long");
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                }): _53.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _53.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GenesisState_GenMsgs;
                fromJSON(object: any): _53.GenesisState_GenMsgs;
                toJSON(message: _53.GenesisState_GenMsgs): unknown;
                fromPartial(object: {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _58.AccessType;
                            address?: string;
                        };
                    };
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: string | number | import("long");
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _53.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _53.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Code;
                fromJSON(object: any): _53.Code;
                toJSON(message: _53.Code): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _58.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _53.Code;
            };
            Contract: {
                encode(message: _53.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Contract;
                fromJSON(object: any): _53.Contract;
                toJSON(message: _53.Contract): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: string | number | import("long");
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string | number | import("long");
                            txIndex?: string | number | import("long");
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _53.Contract;
            };
            Sequence: {
                encode(message: _53.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Sequence;
                fromJSON(object: any): _53.Sequence;
                toJSON(message: _53.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: string | number | import("long");
                }): _53.Sequence;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _135.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _56.QueryContractInfoRequest): Promise<_56.QueryContractInfoResponse>;
                        contractHistory(request: _56.QueryContractHistoryRequest): Promise<_56.QueryContractHistoryResponse>;
                        contractsByCode(request: _56.QueryContractsByCodeRequest): Promise<_56.QueryContractsByCodeResponse>;
                        allContractState(request: _56.QueryAllContractStateRequest): Promise<_56.QueryAllContractStateResponse>;
                        rawContractState(request: _56.QueryRawContractStateRequest): Promise<_56.QueryRawContractStateResponse>;
                        smartContractState(request: _56.QuerySmartContractStateRequest): Promise<_56.QuerySmartContractStateResponse>;
                        code(request: _56.QueryCodeRequest): Promise<_56.QueryCodeResponse>;
                        codes(request?: _56.QueryCodesRequest): Promise<_56.QueryCodesResponse>;
                        pinnedCodes(request?: _56.QueryPinnedCodesRequest): Promise<_56.QueryPinnedCodesResponse>;
                    };
                };
            };
        }>;
    };
}
