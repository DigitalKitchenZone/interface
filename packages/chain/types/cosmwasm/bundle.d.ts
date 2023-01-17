import * as _55 from "./wasm/v1/genesis";
import * as _56 from "./wasm/v1/ibc";
import * as _57 from "./wasm/v1/proposal";
import * as _58 from "./wasm/v1/query";
import * as _59 from "./wasm/v1/tx";
import * as _60 from "./wasm/v1/types";
import * as _137 from "./wasm/v1/query.rpc.Query";
import * as _138 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _138.MsgClientImpl;
            QueryClientImpl: typeof _137.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _58.QueryContractInfoRequest): Promise<_58.QueryContractInfoResponse>;
                contractHistory(request: _58.QueryContractHistoryRequest): Promise<_58.QueryContractHistoryResponse>;
                contractsByCode(request: _58.QueryContractsByCodeRequest): Promise<_58.QueryContractsByCodeResponse>;
                allContractState(request: _58.QueryAllContractStateRequest): Promise<_58.QueryAllContractStateResponse>;
                rawContractState(request: _58.QueryRawContractStateRequest): Promise<_58.QueryRawContractStateResponse>;
                smartContractState(request: _58.QuerySmartContractStateRequest): Promise<_58.QuerySmartContractStateResponse>;
                code(request: _58.QueryCodeRequest): Promise<_58.QueryCodeResponse>;
                codes(request?: _58.QueryCodesRequest): Promise<_58.QueryCodesResponse>;
                pinnedCodes(request?: _58.QueryPinnedCodesRequest): Promise<_58.QueryPinnedCodesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _59.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _59.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _59.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _59.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _59.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _59.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _59.MsgStoreCode): {
                        typeUrl: string;
                        value: _59.MsgStoreCode;
                    };
                    instantiateContract(value: _59.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _59.MsgInstantiateContract;
                    };
                    executeContract(value: _59.MsgExecuteContract): {
                        typeUrl: string;
                        value: _59.MsgExecuteContract;
                    };
                    migrateContract(value: _59.MsgMigrateContract): {
                        typeUrl: string;
                        value: _59.MsgMigrateContract;
                    };
                    updateAdmin(value: _59.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _59.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _59.MsgClearAdmin): {
                        typeUrl: string;
                        value: _59.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _59.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _59.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _59.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _59.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _59.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _59.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _59.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _59.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _59.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _59.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _59.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _59.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _59.MsgStoreCode): {
                        typeUrl: string;
                        value: _59.MsgStoreCode;
                    };
                    instantiateContract(value: _59.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _59.MsgInstantiateContract;
                    };
                    executeContract(value: _59.MsgExecuteContract): {
                        typeUrl: string;
                        value: _59.MsgExecuteContract;
                    };
                    migrateContract(value: _59.MsgMigrateContract): {
                        typeUrl: string;
                        value: _59.MsgMigrateContract;
                    };
                    updateAdmin(value: _59.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _59.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _59.MsgClearAdmin): {
                        typeUrl: string;
                        value: _59.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _59.MsgStoreCode) => {
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
                    }) => _59.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _59.MsgInstantiateContract) => {
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
                    }) => _59.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _59.MsgExecuteContract) => {
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
                    }) => _59.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _59.MsgMigrateContract) => {
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
                    }) => _59.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _59.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _59.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _59.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _59.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _60.AccessType;
            accessTypeToJSON(object: _60.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _60.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _60.ContractCodeHistoryOperationType): string;
            AccessType: typeof _60.AccessType;
            ContractCodeHistoryOperationType: typeof _60.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _60.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.AccessTypeParam;
                fromJSON(object: any): _60.AccessTypeParam;
                toJSON(message: _60.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _60.AccessType;
                }): _60.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _60.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.AccessConfig;
                fromJSON(object: any): _60.AccessConfig;
                toJSON(message: _60.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _60.AccessType;
                    address?: string;
                }): _60.AccessConfig;
            };
            Params: {
                encode(message: _60.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Params;
                fromJSON(object: any): _60.Params;
                toJSON(message: _60.Params): unknown;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _60.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _60.AccessType;
                    maxWasmCodeSize?: string | number | import("long");
                }): _60.Params;
            };
            CodeInfo: {
                encode(message: _60.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.CodeInfo;
                fromJSON(object: any): _60.CodeInfo;
                toJSON(message: _60.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _60.AccessType;
                        address?: string;
                    };
                }): _60.CodeInfo;
            };
            ContractInfo: {
                encode(message: _60.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ContractInfo;
                fromJSON(object: any): _60.ContractInfo;
                toJSON(message: _60.ContractInfo): unknown;
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
                }): _60.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _60.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ContractCodeHistoryEntry;
                fromJSON(object: any): _60.ContractCodeHistoryEntry;
                toJSON(message: _60.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _60.ContractCodeHistoryOperationType;
                    codeId?: string | number | import("long");
                    updated?: {
                        blockHeight?: string | number | import("long");
                        txIndex?: string | number | import("long");
                    };
                    msg?: Uint8Array;
                }): _60.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _60.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.AbsoluteTxPosition;
                fromJSON(object: any): _60.AbsoluteTxPosition;
                toJSON(message: _60.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: string | number | import("long");
                    txIndex?: string | number | import("long");
                }): _60.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _60.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Model;
                fromJSON(object: any): _60.Model;
                toJSON(message: _60.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _60.Model;
            };
            MsgStoreCode: {
                encode(message: _59.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgStoreCode;
                fromJSON(object: any): _59.MsgStoreCode;
                toJSON(message: _59.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _60.AccessType;
                        address?: string;
                    };
                }): _59.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _59.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgStoreCodeResponse;
                fromJSON(object: any): _59.MsgStoreCodeResponse;
                toJSON(message: _59.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                }): _59.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _59.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgInstantiateContract;
                fromJSON(object: any): _59.MsgInstantiateContract;
                toJSON(message: _59.MsgInstantiateContract): unknown;
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
                }): _59.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _59.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgInstantiateContractResponse;
                fromJSON(object: any): _59.MsgInstantiateContractResponse;
                toJSON(message: _59.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _59.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _59.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgExecuteContract;
                fromJSON(object: any): _59.MsgExecuteContract;
                toJSON(message: _59.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _59.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _59.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgExecuteContractResponse;
                fromJSON(object: any): _59.MsgExecuteContractResponse;
                toJSON(message: _59.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _59.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _59.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgMigrateContract;
                fromJSON(object: any): _59.MsgMigrateContract;
                toJSON(message: _59.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: string | number | import("long");
                    msg?: Uint8Array;
                }): _59.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _59.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgMigrateContractResponse;
                fromJSON(object: any): _59.MsgMigrateContractResponse;
                toJSON(message: _59.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _59.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _59.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgUpdateAdmin;
                fromJSON(object: any): _59.MsgUpdateAdmin;
                toJSON(message: _59.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _59.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _59.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgUpdateAdminResponse;
                fromJSON(_: any): _59.MsgUpdateAdminResponse;
                toJSON(_: _59.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _59.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _59.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgClearAdmin;
                fromJSON(object: any): _59.MsgClearAdmin;
                toJSON(message: _59.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _59.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _59.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgClearAdminResponse;
                fromJSON(_: any): _59.MsgClearAdminResponse;
                toJSON(_: _59.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _59.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _58.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryContractInfoRequest;
                fromJSON(object: any): _58.QueryContractInfoRequest;
                toJSON(message: _58.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _58.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _58.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryContractInfoResponse;
                fromJSON(object: any): _58.QueryContractInfoResponse;
                toJSON(message: _58.QueryContractInfoResponse): unknown;
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
                }): _58.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _58.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryContractHistoryRequest;
                fromJSON(object: any): _58.QueryContractHistoryRequest;
                toJSON(message: _58.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _58.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryContractHistoryResponse;
                fromJSON(object: any): _58.QueryContractHistoryResponse;
                toJSON(message: _58.QueryContractHistoryResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        operation?: _60.ContractCodeHistoryOperationType;
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
                }): _58.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _58.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryContractsByCodeRequest;
                fromJSON(object: any): _58.QueryContractsByCodeRequest;
                toJSON(message: _58.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _58.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryContractsByCodeResponse;
                fromJSON(object: any): _58.QueryContractsByCodeResponse;
                toJSON(message: _58.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _58.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _58.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryAllContractStateRequest;
                fromJSON(object: any): _58.QueryAllContractStateRequest;
                toJSON(message: _58.QueryAllContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _58.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryAllContractStateResponse;
                fromJSON(object: any): _58.QueryAllContractStateResponse;
                toJSON(message: _58.QueryAllContractStateResponse): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _58.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _58.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryRawContractStateRequest;
                fromJSON(object: any): _58.QueryRawContractStateRequest;
                toJSON(message: _58.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _58.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _58.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryRawContractStateResponse;
                fromJSON(object: any): _58.QueryRawContractStateResponse;
                toJSON(message: _58.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _58.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _58.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QuerySmartContractStateRequest;
                fromJSON(object: any): _58.QuerySmartContractStateRequest;
                toJSON(message: _58.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _58.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _58.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QuerySmartContractStateResponse;
                fromJSON(object: any): _58.QuerySmartContractStateResponse;
                toJSON(message: _58.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _58.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _58.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryCodeRequest;
                fromJSON(object: any): _58.QueryCodeRequest;
                toJSON(message: _58.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                }): _58.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _58.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.CodeInfoResponse;
                fromJSON(object: any): _58.CodeInfoResponse;
                toJSON(message: _58.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    creator?: string;
                    dataHash?: Uint8Array;
                }): _58.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _58.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryCodeResponse;
                fromJSON(object: any): _58.QueryCodeResponse;
                toJSON(message: _58.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: string | number | import("long");
                        creator?: string;
                        dataHash?: Uint8Array;
                    };
                    data?: Uint8Array;
                }): _58.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _58.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryCodesRequest;
                fromJSON(object: any): _58.QueryCodesRequest;
                toJSON(message: _58.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _58.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryCodesResponse;
                fromJSON(object: any): _58.QueryCodesResponse;
                toJSON(message: _58.QueryCodesResponse): unknown;
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
                }): _58.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _58.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryPinnedCodesRequest;
                fromJSON(object: any): _58.QueryPinnedCodesRequest;
                toJSON(message: _58.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _58.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryPinnedCodesResponse;
                fromJSON(object: any): _58.QueryPinnedCodesResponse;
                toJSON(message: _58.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    codeIds?: (string | number | import("long"))[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _58.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _57.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.StoreCodeProposal;
                fromJSON(object: any): _57.StoreCodeProposal;
                toJSON(message: _57.StoreCodeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _60.AccessType;
                        address?: string;
                    };
                }): _57.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _57.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.InstantiateContractProposal;
                fromJSON(object: any): _57.InstantiateContractProposal;
                toJSON(message: _57.InstantiateContractProposal): unknown;
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
                }): _57.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _57.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MigrateContractProposal;
                fromJSON(object: any): _57.MigrateContractProposal;
                toJSON(message: _57.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: string | number | import("long");
                    msg?: Uint8Array;
                }): _57.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _57.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.SudoContractProposal;
                fromJSON(object: any): _57.SudoContractProposal;
                toJSON(message: _57.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _57.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _57.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ExecuteContractProposal;
                fromJSON(object: any): _57.ExecuteContractProposal;
                toJSON(message: _57.ExecuteContractProposal): unknown;
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
                }): _57.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _57.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.UpdateAdminProposal;
                fromJSON(object: any): _57.UpdateAdminProposal;
                toJSON(message: _57.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _57.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _57.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ClearAdminProposal;
                fromJSON(object: any): _57.ClearAdminProposal;
                toJSON(message: _57.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _57.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _57.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.PinCodesProposal;
                fromJSON(object: any): _57.PinCodesProposal;
                toJSON(message: _57.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: (string | number | import("long"))[];
                }): _57.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _57.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.UnpinCodesProposal;
                fromJSON(object: any): _57.UnpinCodesProposal;
                toJSON(message: _57.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: (string | number | import("long"))[];
                }): _57.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _56.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgIBCSend;
                fromJSON(object: any): _56.MsgIBCSend;
                toJSON(message: _56.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: string | number | import("long");
                    timeoutTimestamp?: string | number | import("long");
                    data?: Uint8Array;
                }): _56.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _56.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgIBCCloseChannel;
                fromJSON(object: any): _56.MsgIBCCloseChannel;
                toJSON(message: _56.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _56.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState;
                fromJSON(object: any): _55.GenesisState;
                toJSON(message: _55.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _60.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _60.AccessType;
                        maxWasmCodeSize?: string | number | import("long");
                    };
                    codes?: {
                        codeId?: string | number | import("long");
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _60.AccessType;
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
                                permission?: _60.AccessType;
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
                }): _55.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _55.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState_GenMsgs;
                fromJSON(object: any): _55.GenesisState_GenMsgs;
                toJSON(message: _55.GenesisState_GenMsgs): unknown;
                fromPartial(object: {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _60.AccessType;
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
                }): _55.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _55.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Code;
                fromJSON(object: any): _55.Code;
                toJSON(message: _55.Code): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _60.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _55.Code;
            };
            Contract: {
                encode(message: _55.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Contract;
                fromJSON(object: any): _55.Contract;
                toJSON(message: _55.Contract): unknown;
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
                }): _55.Contract;
            };
            Sequence: {
                encode(message: _55.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Sequence;
                fromJSON(object: any): _55.Sequence;
                toJSON(message: _55.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: string | number | import("long");
                }): _55.Sequence;
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
                    v1: _138.MsgClientImpl;
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
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
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
                        contractInfo(request: _58.QueryContractInfoRequest): Promise<_58.QueryContractInfoResponse>;
                        contractHistory(request: _58.QueryContractHistoryRequest): Promise<_58.QueryContractHistoryResponse>;
                        contractsByCode(request: _58.QueryContractsByCodeRequest): Promise<_58.QueryContractsByCodeResponse>;
                        allContractState(request: _58.QueryAllContractStateRequest): Promise<_58.QueryAllContractStateResponse>;
                        rawContractState(request: _58.QueryRawContractStateRequest): Promise<_58.QueryRawContractStateResponse>;
                        smartContractState(request: _58.QuerySmartContractStateRequest): Promise<_58.QuerySmartContractStateResponse>;
                        code(request: _58.QueryCodeRequest): Promise<_58.QueryCodeResponse>;
                        codes(request?: _58.QueryCodesRequest): Promise<_58.QueryCodesResponse>;
                        pinnedCodes(request?: _58.QueryPinnedCodesRequest): Promise<_58.QueryPinnedCodesResponse>;
                    };
                };
            };
        }>;
    };
}
