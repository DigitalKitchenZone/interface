import * as _67 from "./applications/transfer/v1/genesis";
import * as _68 from "./applications/transfer/v1/query";
import * as _69 from "./applications/transfer/v1/transfer";
import * as _70 from "./applications/transfer/v1/tx";
import * as _71 from "./applications/transfer/v2/packet";
import * as _72 from "./core/channel/v1/channel";
import * as _73 from "./core/channel/v1/genesis";
import * as _74 from "./core/channel/v1/query";
import * as _75 from "./core/channel/v1/tx";
import * as _76 from "./core/client/v1/client";
import * as _77 from "./core/client/v1/genesis";
import * as _78 from "./core/client/v1/query";
import * as _79 from "./core/client/v1/tx";
import * as _80 from "./core/commitment/v1/commitment";
import * as _81 from "./core/connection/v1/connection";
import * as _82 from "./core/connection/v1/genesis";
import * as _83 from "./core/connection/v1/query";
import * as _84 from "./core/connection/v1/tx";
import * as _85 from "./lightclients/localhost/v1/localhost";
import * as _86 from "./lightclients/solomachine/v1/solomachine";
import * as _87 from "./lightclients/solomachine/v2/solomachine";
import * as _88 from "./lightclients/tendermint/v1/tendermint";
import * as _147 from "./applications/transfer/v1/query.rpc.Query";
import * as _148 from "./core/channel/v1/query.rpc.Query";
import * as _149 from "./core/client/v1/query.rpc.Query";
import * as _150 from "./core/connection/v1/query.rpc.Query";
import * as _151 from "./applications/transfer/v1/tx.rpc.msg";
import * as _152 from "./core/channel/v1/tx.rpc.msg";
import * as _153 from "./core/client/v1/tx.rpc.msg";
import * as _154 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _151.MsgClientImpl;
                QueryClientImpl: typeof _147.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _68.QueryDenomTraceRequest): Promise<_68.QueryDenomTraceResponse>;
                    denomTraces(request?: _68.QueryDenomTracesRequest): Promise<_68.QueryDenomTracesResponse>;
                    params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _70.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _70.MsgTransfer): {
                            typeUrl: string;
                            value: _70.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _70.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _70.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _70.MsgTransfer): {
                            typeUrl: string;
                            value: _70.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _70.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _70.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _70.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgTransfer;
                    fromJSON(object: any): _70.MsgTransfer;
                    toJSON(message: _70.MsgTransfer): unknown;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        timeoutTimestamp?: string | number | import("long");
                    }): _70.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _70.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgTransferResponse;
                    fromJSON(_: any): _70.MsgTransferResponse;
                    toJSON(_: _70.MsgTransferResponse): unknown;
                    fromPartial(_: {}): _70.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _69.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DenomTrace;
                    fromJSON(object: any): _69.DenomTrace;
                    toJSON(message: _69.DenomTrace): unknown;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _69.DenomTrace;
                };
                Params: {
                    encode(message: _69.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Params;
                    fromJSON(object: any): _69.Params;
                    toJSON(message: _69.Params): unknown;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _69.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _68.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDenomTraceRequest;
                    fromJSON(object: any): _68.QueryDenomTraceRequest;
                    toJSON(message: _68.QueryDenomTraceRequest): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _68.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _68.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDenomTraceResponse;
                    fromJSON(object: any): _68.QueryDenomTraceResponse;
                    toJSON(message: _68.QueryDenomTraceResponse): unknown;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _68.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _68.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDenomTracesRequest;
                    fromJSON(object: any): _68.QueryDenomTracesRequest;
                    toJSON(message: _68.QueryDenomTracesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _68.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _68.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryDenomTracesResponse;
                    fromJSON(object: any): _68.QueryDenomTracesResponse;
                    toJSON(message: _68.QueryDenomTracesResponse): unknown;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                    }): _68.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _68.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryParamsRequest;
                    fromJSON(_: any): _68.QueryParamsRequest;
                    toJSON(_: _68.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _68.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _68.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryParamsResponse;
                    fromJSON(object: any): _68.QueryParamsResponse;
                    toJSON(message: _68.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _68.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GenesisState;
                    fromJSON(object: any): _67.GenesisState;
                    toJSON(message: _67.GenesisState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _67.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _71.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.FungibleTokenPacketData;
                    fromJSON(object: any): _71.FungibleTokenPacketData;
                    toJSON(message: _71.FungibleTokenPacketData): unknown;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _71.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _152.MsgClientImpl;
                QueryClientImpl: typeof _148.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _74.QueryChannelRequest): Promise<_74.QueryChannelResponse>;
                    channels(request?: _74.QueryChannelsRequest): Promise<_74.QueryChannelsResponse>;
                    connectionChannels(request: _74.QueryConnectionChannelsRequest): Promise<_74.QueryConnectionChannelsResponse>;
                    channelClientState(request: _74.QueryChannelClientStateRequest): Promise<_74.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _74.QueryChannelConsensusStateRequest): Promise<_74.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _74.QueryPacketCommitmentRequest): Promise<_74.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _74.QueryPacketCommitmentsRequest): Promise<_74.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _74.QueryPacketReceiptRequest): Promise<_74.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _74.QueryPacketAcknowledgementRequest): Promise<_74.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _74.QueryPacketAcknowledgementsRequest): Promise<_74.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _74.QueryUnreceivedPacketsRequest): Promise<_74.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _74.QueryUnreceivedAcksRequest): Promise<_74.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _74.QueryNextSequenceReceiveRequest): Promise<_74.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _75.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _75.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _75.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _75.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _75.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _75.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _75.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _75.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _75.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _75.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _75.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _75.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _75.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _75.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _75.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _75.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _75.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _75.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _75.MsgRecvPacket): {
                            typeUrl: string;
                            value: _75.MsgRecvPacket;
                        };
                        timeout(value: _75.MsgTimeout): {
                            typeUrl: string;
                            value: _75.MsgTimeout;
                        };
                        timeoutOnClose(value: _75.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _75.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _75.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _75.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _75.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _75.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _75.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _75.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _75.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _75.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _75.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _75.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _75.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _75.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _75.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _75.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _75.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _75.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _75.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _75.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _75.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _75.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _75.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _75.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _75.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _75.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _75.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _75.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _75.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _75.MsgRecvPacket): {
                            typeUrl: string;
                            value: _75.MsgRecvPacket;
                        };
                        timeout(value: _75.MsgTimeout): {
                            typeUrl: string;
                            value: _75.MsgTimeout;
                        };
                        timeoutOnClose(value: _75.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _75.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _75.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _75.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _75.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _75.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _75.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _75.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _75.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _75.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _75.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _75.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _75.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _75.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _75.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _75.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _75.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _75.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _75.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _75.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _75.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _75.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _75.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _75.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _75.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelOpenInit;
                    fromJSON(object: any): _75.MsgChannelOpenInit;
                    toJSON(message: _75.MsgChannelOpenInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _72.State;
                            ordering?: _72.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _75.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _75.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _75.MsgChannelOpenInitResponse;
                    toJSON(_: _75.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: {}): _75.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _75.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelOpenTry;
                    fromJSON(object: any): _75.MsgChannelOpenTry;
                    toJSON(message: _75.MsgChannelOpenTry): unknown;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _72.State;
                            ordering?: _72.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _75.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _75.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _75.MsgChannelOpenTryResponse;
                    toJSON(_: _75.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: {}): _75.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _75.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelOpenAck;
                    fromJSON(object: any): _75.MsgChannelOpenAck;
                    toJSON(message: _75.MsgChannelOpenAck): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _75.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _75.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _75.MsgChannelOpenAckResponse;
                    toJSON(_: _75.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: {}): _75.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _75.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelOpenConfirm;
                    fromJSON(object: any): _75.MsgChannelOpenConfirm;
                    toJSON(message: _75.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _75.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _75.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _75.MsgChannelOpenConfirmResponse;
                    toJSON(_: _75.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _75.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _75.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelCloseInit;
                    fromJSON(object: any): _75.MsgChannelCloseInit;
                    toJSON(message: _75.MsgChannelCloseInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _75.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _75.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _75.MsgChannelCloseInitResponse;
                    toJSON(_: _75.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: {}): _75.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _75.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelCloseConfirm;
                    fromJSON(object: any): _75.MsgChannelCloseConfirm;
                    toJSON(message: _75.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _75.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _75.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _75.MsgChannelCloseConfirmResponse;
                    toJSON(_: _75.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: {}): _75.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _75.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgRecvPacket;
                    fromJSON(object: any): _75.MsgRecvPacket;
                    toJSON(message: _75.MsgRecvPacket): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long");
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            timeoutTimestamp?: string | number | import("long");
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _75.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _75.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgRecvPacketResponse;
                    fromJSON(_: any): _75.MsgRecvPacketResponse;
                    toJSON(_: _75.MsgRecvPacketResponse): unknown;
                    fromPartial(_: {}): _75.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _75.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgTimeout;
                    fromJSON(object: any): _75.MsgTimeout;
                    toJSON(message: _75.MsgTimeout): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long");
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            timeoutTimestamp?: string | number | import("long");
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        nextSequenceRecv?: string | number | import("long");
                        signer?: string;
                    }): _75.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _75.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgTimeoutResponse;
                    fromJSON(_: any): _75.MsgTimeoutResponse;
                    toJSON(_: _75.MsgTimeoutResponse): unknown;
                    fromPartial(_: {}): _75.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _75.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgTimeoutOnClose;
                    fromJSON(object: any): _75.MsgTimeoutOnClose;
                    toJSON(message: _75.MsgTimeoutOnClose): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long");
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            timeoutTimestamp?: string | number | import("long");
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        nextSequenceRecv?: string | number | import("long");
                        signer?: string;
                    }): _75.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _75.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _75.MsgTimeoutOnCloseResponse;
                    toJSON(_: _75.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: {}): _75.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _75.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgAcknowledgement;
                    fromJSON(object: any): _75.MsgAcknowledgement;
                    toJSON(message: _75.MsgAcknowledgement): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long");
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            timeoutTimestamp?: string | number | import("long");
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _75.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _75.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgAcknowledgementResponse;
                    fromJSON(_: any): _75.MsgAcknowledgementResponse;
                    toJSON(_: _75.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: {}): _75.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _74.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryChannelRequest;
                    fromJSON(object: any): _74.QueryChannelRequest;
                    toJSON(message: _74.QueryChannelRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _74.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _74.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryChannelResponse;
                    fromJSON(object: any): _74.QueryChannelResponse;
                    toJSON(message: _74.QueryChannelResponse): unknown;
                    fromPartial(object: {
                        channel?: {
                            state?: _72.State;
                            ordering?: _72.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _74.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryChannelsRequest;
                    fromJSON(object: any): _74.QueryChannelsRequest;
                    toJSON(message: _74.QueryChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _74.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _74.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryChannelsResponse;
                    fromJSON(object: any): _74.QueryChannelsResponse;
                    toJSON(message: _74.QueryChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _72.State;
                            ordering?: _72.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _74.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _74.QueryConnectionChannelsRequest;
                    toJSON(message: _74.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _74.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _74.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _74.QueryConnectionChannelsResponse;
                    toJSON(message: _74.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _72.State;
                            ordering?: _72.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _74.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryChannelClientStateRequest;
                    fromJSON(object: any): _74.QueryChannelClientStateRequest;
                    toJSON(message: _74.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _74.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _74.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryChannelClientStateResponse;
                    fromJSON(object: any): _74.QueryChannelClientStateResponse;
                    toJSON(message: _74.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _74.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _74.QueryChannelConsensusStateRequest;
                    toJSON(message: _74.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                    }): _74.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _74.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _74.QueryChannelConsensusStateResponse;
                    toJSON(message: _74.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _74.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _74.QueryPacketCommitmentRequest;
                    toJSON(message: _74.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _74.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _74.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _74.QueryPacketCommitmentResponse;
                    toJSON(message: _74.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _74.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _74.QueryPacketCommitmentsRequest;
                    toJSON(message: _74.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _74.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _74.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _74.QueryPacketCommitmentsResponse;
                    toJSON(message: _74.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _74.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPacketReceiptRequest;
                    fromJSON(object: any): _74.QueryPacketReceiptRequest;
                    toJSON(message: _74.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _74.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _74.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPacketReceiptResponse;
                    fromJSON(object: any): _74.QueryPacketReceiptResponse;
                    toJSON(message: _74.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _74.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _74.QueryPacketAcknowledgementRequest;
                    toJSON(message: _74.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _74.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _74.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _74.QueryPacketAcknowledgementResponse;
                    toJSON(message: _74.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _74.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _74.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _74.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: (string | number | import("long"))[];
                    }): _74.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _74.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _74.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _74.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _74.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _74.QueryUnreceivedPacketsRequest;
                    toJSON(message: _74.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: (string | number | import("long"))[];
                    }): _74.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _74.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _74.QueryUnreceivedPacketsResponse;
                    toJSON(message: _74.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: {
                        sequences?: (string | number | import("long"))[];
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _74.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _74.QueryUnreceivedAcksRequest;
                    toJSON(message: _74.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: (string | number | import("long"))[];
                    }): _74.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _74.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _74.QueryUnreceivedAcksResponse;
                    toJSON(message: _74.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: {
                        sequences?: (string | number | import("long"))[];
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _74.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _74.QueryNextSequenceReceiveRequest;
                    toJSON(message: _74.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _74.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _74.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _74.QueryNextSequenceReceiveResponse;
                    toJSON(message: _74.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: {
                        nextSequenceReceive?: string | number | import("long");
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _74.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GenesisState;
                    fromJSON(object: any): _73.GenesisState;
                    toJSON(message: _73.GenesisState): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _72.State;
                            ordering?: _72.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long");
                        }[];
                        nextChannelSequence?: string | number | import("long");
                    }): _73.GenesisState;
                };
                PacketSequence: {
                    encode(message: _73.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.PacketSequence;
                    fromJSON(object: any): _73.PacketSequence;
                    toJSON(message: _73.PacketSequence): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _73.PacketSequence;
                };
                stateFromJSON(object: any): _72.State;
                stateToJSON(object: _72.State): string;
                orderFromJSON(object: any): _72.Order;
                orderToJSON(object: _72.Order): string;
                State: typeof _72.State;
                Order: typeof _72.Order;
                Channel: {
                    encode(message: _72.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Channel;
                    fromJSON(object: any): _72.Channel;
                    toJSON(message: _72.Channel): unknown;
                    fromPartial(object: {
                        state?: _72.State;
                        ordering?: _72.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _72.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _72.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.IdentifiedChannel;
                    fromJSON(object: any): _72.IdentifiedChannel;
                    toJSON(message: _72.IdentifiedChannel): unknown;
                    fromPartial(object: {
                        state?: _72.State;
                        ordering?: _72.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _72.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _72.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Counterparty;
                    fromJSON(object: any): _72.Counterparty;
                    toJSON(message: _72.Counterparty): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _72.Counterparty;
                };
                Packet: {
                    encode(message: _72.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Packet;
                    fromJSON(object: any): _72.Packet;
                    toJSON(message: _72.Packet): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        timeoutTimestamp?: string | number | import("long");
                    }): _72.Packet;
                };
                PacketState: {
                    encode(message: _72.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.PacketState;
                    fromJSON(object: any): _72.PacketState;
                    toJSON(message: _72.PacketState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                        data?: Uint8Array;
                    }): _72.PacketState;
                };
                Acknowledgement: {
                    encode(message: _72.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Acknowledgement;
                    fromJSON(object: any): _72.Acknowledgement;
                    toJSON(message: _72.Acknowledgement): unknown;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _72.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _153.MsgClientImpl;
                QueryClientImpl: typeof _149.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _78.QueryClientStateRequest): Promise<_78.QueryClientStateResponse>;
                    clientStates(request?: _78.QueryClientStatesRequest): Promise<_78.QueryClientStatesResponse>;
                    consensusState(request: _78.QueryConsensusStateRequest): Promise<_78.QueryConsensusStateResponse>;
                    consensusStates(request: _78.QueryConsensusStatesRequest): Promise<_78.QueryConsensusStatesResponse>;
                    clientStatus(request: _78.QueryClientStatusRequest): Promise<_78.QueryClientStatusResponse>;
                    clientParams(request?: _78.QueryClientParamsRequest): Promise<_78.QueryClientParamsResponse>;
                    upgradedClientState(request?: _78.QueryUpgradedClientStateRequest): Promise<_78.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _78.QueryUpgradedConsensusStateRequest): Promise<_78.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _79.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _79.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _79.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _79.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _79.MsgCreateClient): {
                            typeUrl: string;
                            value: _79.MsgCreateClient;
                        };
                        updateClient(value: _79.MsgUpdateClient): {
                            typeUrl: string;
                            value: _79.MsgUpdateClient;
                        };
                        upgradeClient(value: _79.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _79.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _79.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _79.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _79.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _79.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _79.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _79.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _79.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _79.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _79.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _79.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _79.MsgCreateClient): {
                            typeUrl: string;
                            value: _79.MsgCreateClient;
                        };
                        updateClient(value: _79.MsgUpdateClient): {
                            typeUrl: string;
                            value: _79.MsgUpdateClient;
                        };
                        upgradeClient(value: _79.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _79.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _79.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _79.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _79.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _79.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _79.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _79.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _79.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _79.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _79.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _79.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _79.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateClient;
                    fromJSON(object: any): _79.MsgCreateClient;
                    toJSON(message: _79.MsgCreateClient): unknown;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _79.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _79.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateClientResponse;
                    fromJSON(_: any): _79.MsgCreateClientResponse;
                    toJSON(_: _79.MsgCreateClientResponse): unknown;
                    fromPartial(_: {}): _79.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _79.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateClient;
                    fromJSON(object: any): _79.MsgUpdateClient;
                    toJSON(message: _79.MsgUpdateClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _79.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _79.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateClientResponse;
                    fromJSON(_: any): _79.MsgUpdateClientResponse;
                    toJSON(_: _79.MsgUpdateClientResponse): unknown;
                    fromPartial(_: {}): _79.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _79.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpgradeClient;
                    fromJSON(object: any): _79.MsgUpgradeClient;
                    toJSON(message: _79.MsgUpgradeClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _79.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _79.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpgradeClientResponse;
                    fromJSON(_: any): _79.MsgUpgradeClientResponse;
                    toJSON(_: _79.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: {}): _79.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _79.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _79.MsgSubmitMisbehaviour;
                    toJSON(message: _79.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _79.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _79.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _79.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _79.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: {}): _79.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _78.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryClientStateRequest;
                    fromJSON(object: any): _78.QueryClientStateRequest;
                    toJSON(message: _78.QueryClientStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _78.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _78.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryClientStateResponse;
                    fromJSON(object: any): _78.QueryClientStateResponse;
                    toJSON(message: _78.QueryClientStateResponse): unknown;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _78.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _78.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryClientStatesRequest;
                    fromJSON(object: any): _78.QueryClientStatesRequest;
                    toJSON(message: _78.QueryClientStatesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _78.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _78.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryClientStatesResponse;
                    fromJSON(object: any): _78.QueryClientStatesResponse;
                    toJSON(message: _78.QueryClientStatesResponse): unknown;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                    }): _78.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _78.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConsensusStateRequest;
                    fromJSON(object: any): _78.QueryConsensusStateRequest;
                    toJSON(message: _78.QueryConsensusStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                        latestHeight?: boolean;
                    }): _78.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _78.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConsensusStateResponse;
                    fromJSON(object: any): _78.QueryConsensusStateResponse;
                    toJSON(message: _78.QueryConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _78.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _78.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConsensusStatesRequest;
                    fromJSON(object: any): _78.QueryConsensusStatesRequest;
                    toJSON(message: _78.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _78.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _78.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConsensusStatesResponse;
                    fromJSON(object: any): _78.QueryConsensusStatesResponse;
                    toJSON(message: _78.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                    }): _78.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _78.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryClientStatusRequest;
                    fromJSON(object: any): _78.QueryClientStatusRequest;
                    toJSON(message: _78.QueryClientStatusRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _78.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _78.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryClientStatusResponse;
                    fromJSON(object: any): _78.QueryClientStatusResponse;
                    toJSON(message: _78.QueryClientStatusResponse): unknown;
                    fromPartial(object: {
                        status?: string;
                    }): _78.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _78.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryClientParamsRequest;
                    fromJSON(_: any): _78.QueryClientParamsRequest;
                    toJSON(_: _78.QueryClientParamsRequest): unknown;
                    fromPartial(_: {}): _78.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _78.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryClientParamsResponse;
                    fromJSON(object: any): _78.QueryClientParamsResponse;
                    toJSON(message: _78.QueryClientParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _78.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _78.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _78.QueryUpgradedClientStateRequest;
                    toJSON(_: _78.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: {}): _78.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _78.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _78.QueryUpgradedClientStateResponse;
                    toJSON(message: _78.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _78.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _78.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _78.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _78.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: {}): _78.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _78.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _78.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _78.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _78.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.GenesisState;
                    fromJSON(object: any): _77.GenesisState;
                    toJSON(message: _77.GenesisState): unknown;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: string | number | import("long");
                                    revisionHeight?: string | number | import("long");
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: string | number | import("long");
                    }): _77.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _77.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.GenesisMetadata;
                    fromJSON(object: any): _77.GenesisMetadata;
                    toJSON(message: _77.GenesisMetadata): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _77.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _77.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _77.IdentifiedGenesisMetadata;
                    toJSON(message: _77.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _77.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _76.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.IdentifiedClientState;
                    fromJSON(object: any): _76.IdentifiedClientState;
                    toJSON(message: _76.IdentifiedClientState): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _76.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _76.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConsensusStateWithHeight;
                    fromJSON(object: any): _76.ConsensusStateWithHeight;
                    toJSON(message: _76.ConsensusStateWithHeight): unknown;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _76.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _76.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientConsensusStates;
                    fromJSON(object: any): _76.ClientConsensusStates;
                    toJSON(message: _76.ClientConsensusStates): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _76.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _76.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientUpdateProposal;
                    fromJSON(object: any): _76.ClientUpdateProposal;
                    toJSON(message: _76.ClientUpdateProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _76.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _76.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.UpgradeProposal;
                    fromJSON(object: any): _76.UpgradeProposal;
                    toJSON(message: _76.UpgradeProposal): unknown;
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
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _76.UpgradeProposal;
                };
                Height: {
                    encode(message: _76.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Height;
                    fromJSON(object: any): _76.Height;
                    toJSON(message: _76.Height): unknown;
                    fromPartial(object: {
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                    }): _76.Height;
                };
                Params: {
                    encode(message: _76.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Params;
                    fromJSON(object: any): _76.Params;
                    toJSON(message: _76.Params): unknown;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _76.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _80.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MerkleRoot;
                    fromJSON(object: any): _80.MerkleRoot;
                    toJSON(message: _80.MerkleRoot): unknown;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _80.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _80.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MerklePrefix;
                    fromJSON(object: any): _80.MerklePrefix;
                    toJSON(message: _80.MerklePrefix): unknown;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _80.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _80.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MerklePath;
                    fromJSON(object: any): _80.MerklePath;
                    toJSON(message: _80.MerklePath): unknown;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _80.MerklePath;
                };
                MerkleProof: {
                    encode(message: _80.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MerkleProof;
                    fromJSON(object: any): _80.MerkleProof;
                    toJSON(message: _80.MerkleProof): unknown;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _80.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _154.MsgClientImpl;
                QueryClientImpl: typeof _150.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _83.QueryConnectionRequest): Promise<_83.QueryConnectionResponse>;
                    connections(request?: _83.QueryConnectionsRequest): Promise<_83.QueryConnectionsResponse>;
                    clientConnections(request: _83.QueryClientConnectionsRequest): Promise<_83.QueryClientConnectionsResponse>;
                    connectionClientState(request: _83.QueryConnectionClientStateRequest): Promise<_83.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _83.QueryConnectionConsensusStateRequest): Promise<_83.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _84.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _84.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _84.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _84.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _84.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _84.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _84.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _84.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _84.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _84.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _84.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _84.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _84.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _84.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _84.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _84.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _84.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _84.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _84.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _84.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _84.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _84.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _84.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _84.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _84.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _84.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgConnectionOpenInit;
                    fromJSON(object: any): _84.MsgConnectionOpenInit;
                    toJSON(message: _84.MsgConnectionOpenInit): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: string | number | import("long");
                        signer?: string;
                    }): _84.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _84.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _84.MsgConnectionOpenInitResponse;
                    toJSON(_: _84.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: {}): _84.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _84.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgConnectionOpenTry;
                    fromJSON(object: any): _84.MsgConnectionOpenTry;
                    toJSON(message: _84.MsgConnectionOpenTry): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long");
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _84.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _84.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _84.MsgConnectionOpenTryResponse;
                    toJSON(_: _84.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: {}): _84.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _84.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgConnectionOpenAck;
                    fromJSON(object: any): _84.MsgConnectionOpenAck;
                    toJSON(message: _84.MsgConnectionOpenAck): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _84.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _84.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _84.MsgConnectionOpenAckResponse;
                    toJSON(_: _84.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: {}): _84.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _84.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _84.MsgConnectionOpenConfirm;
                    toJSON(message: _84.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _84.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _84.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _84.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _84.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _84.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _83.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryConnectionRequest;
                    fromJSON(object: any): _83.QueryConnectionRequest;
                    toJSON(message: _83.QueryConnectionRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _83.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _83.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryConnectionResponse;
                    fromJSON(object: any): _83.QueryConnectionResponse;
                    toJSON(message: _83.QueryConnectionResponse): unknown;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _81.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _83.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _83.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryConnectionsRequest;
                    fromJSON(object: any): _83.QueryConnectionsRequest;
                    toJSON(message: _83.QueryConnectionsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _83.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _83.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryConnectionsResponse;
                    fromJSON(object: any): _83.QueryConnectionsResponse;
                    toJSON(message: _83.QueryConnectionsResponse): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _81.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _83.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _83.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryClientConnectionsRequest;
                    fromJSON(object: any): _83.QueryClientConnectionsRequest;
                    toJSON(message: _83.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _83.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _83.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryClientConnectionsResponse;
                    fromJSON(object: any): _83.QueryClientConnectionsResponse;
                    toJSON(message: _83.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _83.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _83.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _83.QueryConnectionClientStateRequest;
                    toJSON(message: _83.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _83.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _83.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _83.QueryConnectionClientStateResponse;
                    toJSON(message: _83.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _83.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _83.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _83.QueryConnectionConsensusStateRequest;
                    toJSON(message: _83.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                    }): _83.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _83.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _83.QueryConnectionConsensusStateResponse;
                    toJSON(message: _83.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _83.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                    fromJSON(object: any): _82.GenesisState;
                    toJSON(message: _82.GenesisState): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _81.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: string | number | import("long");
                        params?: {
                            maxExpectedTimePerBlock?: string | number | import("long");
                        };
                    }): _82.GenesisState;
                };
                stateFromJSON(object: any): _81.State;
                stateToJSON(object: _81.State): string;
                State: typeof _81.State;
                ConnectionEnd: {
                    encode(message: _81.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ConnectionEnd;
                    fromJSON(object: any): _81.ConnectionEnd;
                    toJSON(message: _81.ConnectionEnd): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _81.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long");
                    }): _81.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _81.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.IdentifiedConnection;
                    fromJSON(object: any): _81.IdentifiedConnection;
                    toJSON(message: _81.IdentifiedConnection): unknown;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _81.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long");
                    }): _81.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _81.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Counterparty;
                    fromJSON(object: any): _81.Counterparty;
                    toJSON(message: _81.Counterparty): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _81.Counterparty;
                };
                ClientPaths: {
                    encode(message: _81.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ClientPaths;
                    fromJSON(object: any): _81.ClientPaths;
                    toJSON(message: _81.ClientPaths): unknown;
                    fromPartial(object: {
                        paths?: string[];
                    }): _81.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _81.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ConnectionPaths;
                    fromJSON(object: any): _81.ConnectionPaths;
                    toJSON(message: _81.ConnectionPaths): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _81.ConnectionPaths;
                };
                Version: {
                    encode(message: _81.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Version;
                    fromJSON(object: any): _81.Version;
                    toJSON(message: _81.Version): unknown;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _81.Version;
                };
                Params: {
                    encode(message: _81.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Params;
                    fromJSON(object: any): _81.Params;
                    toJSON(message: _81.Params): unknown;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: string | number | import("long");
                    }): _81.Params;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _85.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ClientState;
                    fromJSON(object: any): _85.ClientState;
                    toJSON(message: _85.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _85.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _86.DataType;
                dataTypeToJSON(object: _86.DataType): string;
                DataType: typeof _86.DataType;
                ClientState: {
                    encode(message: _86.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ClientState;
                    fromJSON(object: any): _86.ClientState;
                    toJSON(message: _86.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        frozenSequence?: string | number | import("long");
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long");
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _86.ClientState;
                };
                ConsensusState: {
                    encode(message: _86.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ConsensusState;
                    fromJSON(object: any): _86.ConsensusState;
                    toJSON(message: _86.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long");
                    }): _86.ConsensusState;
                };
                Header: {
                    encode(message: _86.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Header;
                    fromJSON(object: any): _86.Header;
                    toJSON(message: _86.Header): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _86.Header;
                };
                Misbehaviour: {
                    encode(message: _86.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Misbehaviour;
                    fromJSON(object: any): _86.Misbehaviour;
                    toJSON(message: _86.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long");
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _86.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _86.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                    }): _86.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _86.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignatureAndData;
                    fromJSON(object: any): _86.SignatureAndData;
                    toJSON(message: _86.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _86.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _86.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _86.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.TimestampedSignatureData;
                    fromJSON(object: any): _86.TimestampedSignatureData;
                    toJSON(message: _86.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _86.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _86.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignBytes;
                    fromJSON(object: any): _86.SignBytes;
                    toJSON(message: _86.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        diversifier?: string;
                        dataType?: _86.DataType;
                        data?: Uint8Array;
                    }): _86.SignBytes;
                };
                HeaderData: {
                    encode(message: _86.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.HeaderData;
                    fromJSON(object: any): _86.HeaderData;
                    toJSON(message: _86.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _86.HeaderData;
                };
                ClientStateData: {
                    encode(message: _86.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ClientStateData;
                    fromJSON(object: any): _86.ClientStateData;
                    toJSON(message: _86.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _86.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _86.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ConsensusStateData;
                    fromJSON(object: any): _86.ConsensusStateData;
                    toJSON(message: _86.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _86.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _86.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ConnectionStateData;
                    fromJSON(object: any): _86.ConnectionStateData;
                    toJSON(message: _86.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _81.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        };
                    }): _86.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _86.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ChannelStateData;
                    fromJSON(object: any): _86.ChannelStateData;
                    toJSON(message: _86.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _72.State;
                            ordering?: _72.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _86.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _86.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.PacketCommitmentData;
                    fromJSON(object: any): _86.PacketCommitmentData;
                    toJSON(message: _86.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _86.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _86.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.PacketAcknowledgementData;
                    fromJSON(object: any): _86.PacketAcknowledgementData;
                    toJSON(message: _86.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _86.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _86.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.PacketReceiptAbsenceData;
                    fromJSON(object: any): _86.PacketReceiptAbsenceData;
                    toJSON(message: _86.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _86.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _86.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.NextSequenceRecvData;
                    fromJSON(object: any): _86.NextSequenceRecvData;
                    toJSON(message: _86.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long");
                    }): _86.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _87.DataType;
                dataTypeToJSON(object: _87.DataType): string;
                DataType: typeof _87.DataType;
                ClientState: {
                    encode(message: _87.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ClientState;
                    fromJSON(object: any): _87.ClientState;
                    toJSON(message: _87.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long");
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _87.ClientState;
                };
                ConsensusState: {
                    encode(message: _87.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ConsensusState;
                    fromJSON(object: any): _87.ConsensusState;
                    toJSON(message: _87.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long");
                    }): _87.ConsensusState;
                };
                Header: {
                    encode(message: _87.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Header;
                    fromJSON(object: any): _87.Header;
                    toJSON(message: _87.Header): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _87.Header;
                };
                Misbehaviour: {
                    encode(message: _87.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Misbehaviour;
                    fromJSON(object: any): _87.Misbehaviour;
                    toJSON(message: _87.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long");
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _87.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _87.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                    }): _87.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _87.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureAndData;
                    fromJSON(object: any): _87.SignatureAndData;
                    toJSON(message: _87.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _87.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _87.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _87.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.TimestampedSignatureData;
                    fromJSON(object: any): _87.TimestampedSignatureData;
                    toJSON(message: _87.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _87.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _87.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignBytes;
                    fromJSON(object: any): _87.SignBytes;
                    toJSON(message: _87.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        diversifier?: string;
                        dataType?: _87.DataType;
                        data?: Uint8Array;
                    }): _87.SignBytes;
                };
                HeaderData: {
                    encode(message: _87.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.HeaderData;
                    fromJSON(object: any): _87.HeaderData;
                    toJSON(message: _87.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _87.HeaderData;
                };
                ClientStateData: {
                    encode(message: _87.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ClientStateData;
                    fromJSON(object: any): _87.ClientStateData;
                    toJSON(message: _87.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _87.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _87.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ConsensusStateData;
                    fromJSON(object: any): _87.ConsensusStateData;
                    toJSON(message: _87.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _87.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _87.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ConnectionStateData;
                    fromJSON(object: any): _87.ConnectionStateData;
                    toJSON(message: _87.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _81.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        };
                    }): _87.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _87.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ChannelStateData;
                    fromJSON(object: any): _87.ChannelStateData;
                    toJSON(message: _87.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _72.State;
                            ordering?: _72.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _87.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _87.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.PacketCommitmentData;
                    fromJSON(object: any): _87.PacketCommitmentData;
                    toJSON(message: _87.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _87.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _87.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.PacketAcknowledgementData;
                    fromJSON(object: any): _87.PacketAcknowledgementData;
                    toJSON(message: _87.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _87.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _87.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.PacketReceiptAbsenceData;
                    fromJSON(object: any): _87.PacketReceiptAbsenceData;
                    toJSON(message: _87.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _87.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _87.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.NextSequenceRecvData;
                    fromJSON(object: any): _87.NextSequenceRecvData;
                    toJSON(message: _87.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long");
                    }): _87.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _88.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ClientState;
                    fromJSON(object: any): _88.ClientState;
                    toJSON(message: _88.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: string | number | import("long");
                            denominator?: string | number | import("long");
                        };
                        trustingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        unbondingPeriod?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxClockDrift?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        frozenHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        latestHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _88.ClientState;
                };
                ConsensusState: {
                    encode(message: _88.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ConsensusState;
                    fromJSON(object: any): _88.ConsensusState;
                    toJSON(message: _88.ConsensusState): unknown;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _88.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _88.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Misbehaviour;
                    fromJSON(object: any): _88.Misbehaviour;
                    toJSON(message: _88.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header1?: {
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
                            trustedHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            trustedValidators?: {
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
                        header2?: {
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
                            trustedHeight?: {
                                revisionNumber?: string | number | import("long");
                                revisionHeight?: string | number | import("long");
                            };
                            trustedValidators?: {
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
                    }): _88.Misbehaviour;
                };
                Header: {
                    encode(message: _88.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Header;
                    fromJSON(object: any): _88.Header;
                    toJSON(message: _88.Header): unknown;
                    fromPartial(object: {
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
                        trustedHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        trustedValidators?: {
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
                    }): _88.Header;
                };
                Fraction: {
                    encode(message: _88.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Fraction;
                    fromJSON(object: any): _88.Fraction;
                    toJSON(message: _88.Fraction): unknown;
                    fromPartial(object: {
                        numerator?: string | number | import("long");
                        denominator?: string | number | import("long");
                    }): _88.Fraction;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _151.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _152.MsgClientImpl;
                    };
                    client: {
                        v1: _153.MsgClientImpl;
                    };
                    connection: {
                        v1: _154.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _68.QueryDenomTraceRequest): Promise<_68.QueryDenomTraceResponse>;
                            denomTraces(request?: _68.QueryDenomTracesRequest): Promise<_68.QueryDenomTracesResponse>;
                            params(request?: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _74.QueryChannelRequest): Promise<_74.QueryChannelResponse>;
                            channels(request?: _74.QueryChannelsRequest): Promise<_74.QueryChannelsResponse>;
                            connectionChannels(request: _74.QueryConnectionChannelsRequest): Promise<_74.QueryConnectionChannelsResponse>;
                            channelClientState(request: _74.QueryChannelClientStateRequest): Promise<_74.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _74.QueryChannelConsensusStateRequest): Promise<_74.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _74.QueryPacketCommitmentRequest): Promise<_74.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _74.QueryPacketCommitmentsRequest): Promise<_74.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _74.QueryPacketReceiptRequest): Promise<_74.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _74.QueryPacketAcknowledgementRequest): Promise<_74.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _74.QueryPacketAcknowledgementsRequest): Promise<_74.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _74.QueryUnreceivedPacketsRequest): Promise<_74.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _74.QueryUnreceivedAcksRequest): Promise<_74.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _74.QueryNextSequenceReceiveRequest): Promise<_74.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _78.QueryClientStateRequest): Promise<_78.QueryClientStateResponse>;
                            clientStates(request?: _78.QueryClientStatesRequest): Promise<_78.QueryClientStatesResponse>;
                            consensusState(request: _78.QueryConsensusStateRequest): Promise<_78.QueryConsensusStateResponse>;
                            consensusStates(request: _78.QueryConsensusStatesRequest): Promise<_78.QueryConsensusStatesResponse>;
                            clientStatus(request: _78.QueryClientStatusRequest): Promise<_78.QueryClientStatusResponse>;
                            clientParams(request?: _78.QueryClientParamsRequest): Promise<_78.QueryClientParamsResponse>;
                            upgradedClientState(request?: _78.QueryUpgradedClientStateRequest): Promise<_78.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _78.QueryUpgradedConsensusStateRequest): Promise<_78.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _83.QueryConnectionRequest): Promise<_83.QueryConnectionResponse>;
                            connections(request?: _83.QueryConnectionsRequest): Promise<_83.QueryConnectionsResponse>;
                            clientConnections(request: _83.QueryClientConnectionsRequest): Promise<_83.QueryClientConnectionsResponse>;
                            connectionClientState(request: _83.QueryConnectionClientStateRequest): Promise<_83.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _83.QueryConnectionConsensusStateRequest): Promise<_83.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
