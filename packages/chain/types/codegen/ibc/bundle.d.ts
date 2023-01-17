import * as _65 from "./applications/transfer/v1/genesis";
import * as _66 from "./applications/transfer/v1/query";
import * as _67 from "./applications/transfer/v1/transfer";
import * as _68 from "./applications/transfer/v1/tx";
import * as _69 from "./applications/transfer/v2/packet";
import * as _70 from "./core/channel/v1/channel";
import * as _71 from "./core/channel/v1/genesis";
import * as _72 from "./core/channel/v1/query";
import * as _73 from "./core/channel/v1/tx";
import * as _74 from "./core/client/v1/client";
import * as _75 from "./core/client/v1/genesis";
import * as _76 from "./core/client/v1/query";
import * as _77 from "./core/client/v1/tx";
import * as _78 from "./core/commitment/v1/commitment";
import * as _79 from "./core/connection/v1/connection";
import * as _80 from "./core/connection/v1/genesis";
import * as _81 from "./core/connection/v1/query";
import * as _82 from "./core/connection/v1/tx";
import * as _83 from "./lightclients/localhost/v1/localhost";
import * as _84 from "./lightclients/solomachine/v1/solomachine";
import * as _85 from "./lightclients/solomachine/v2/solomachine";
import * as _86 from "./lightclients/tendermint/v1/tendermint";
import * as _144 from "./applications/transfer/v1/query.rpc.Query";
import * as _145 from "./core/channel/v1/query.rpc.Query";
import * as _146 from "./core/client/v1/query.rpc.Query";
import * as _147 from "./core/connection/v1/query.rpc.Query";
import * as _148 from "./applications/transfer/v1/tx.rpc.msg";
import * as _149 from "./core/channel/v1/tx.rpc.msg";
import * as _150 from "./core/client/v1/tx.rpc.msg";
import * as _151 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _148.MsgClientImpl;
                QueryClientImpl: typeof _144.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _66.QueryDenomTraceRequest): Promise<_66.QueryDenomTraceResponse>;
                    denomTraces(request?: _66.QueryDenomTracesRequest): Promise<_66.QueryDenomTracesResponse>;
                    params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _68.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _68.MsgTransfer): {
                            typeUrl: string;
                            value: _68.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _68.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _68.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _68.MsgTransfer): {
                            typeUrl: string;
                            value: _68.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _68.MsgTransfer) => {
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
                        }) => _68.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _68.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgTransfer;
                    fromJSON(object: any): _68.MsgTransfer;
                    toJSON(message: _68.MsgTransfer): unknown;
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
                    }): _68.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _68.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgTransferResponse;
                    fromJSON(_: any): _68.MsgTransferResponse;
                    toJSON(_: _68.MsgTransferResponse): unknown;
                    fromPartial(_: {}): _68.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _67.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.DenomTrace;
                    fromJSON(object: any): _67.DenomTrace;
                    toJSON(message: _67.DenomTrace): unknown;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _67.DenomTrace;
                };
                Params: {
                    encode(message: _67.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Params;
                    fromJSON(object: any): _67.Params;
                    toJSON(message: _67.Params): unknown;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _67.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _66.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryDenomTraceRequest;
                    fromJSON(object: any): _66.QueryDenomTraceRequest;
                    toJSON(message: _66.QueryDenomTraceRequest): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _66.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _66.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryDenomTraceResponse;
                    fromJSON(object: any): _66.QueryDenomTraceResponse;
                    toJSON(message: _66.QueryDenomTraceResponse): unknown;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _66.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _66.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryDenomTracesRequest;
                    fromJSON(object: any): _66.QueryDenomTracesRequest;
                    toJSON(message: _66.QueryDenomTracesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _66.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _66.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryDenomTracesResponse;
                    fromJSON(object: any): _66.QueryDenomTracesResponse;
                    toJSON(message: _66.QueryDenomTracesResponse): unknown;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long");
                        };
                    }): _66.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _66.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsRequest;
                    fromJSON(_: any): _66.QueryParamsRequest;
                    toJSON(_: _66.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _66.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _66.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsResponse;
                    fromJSON(object: any): _66.QueryParamsResponse;
                    toJSON(message: _66.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _66.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GenesisState;
                    fromJSON(object: any): _65.GenesisState;
                    toJSON(message: _65.GenesisState): unknown;
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
                    }): _65.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _69.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.FungibleTokenPacketData;
                    fromJSON(object: any): _69.FungibleTokenPacketData;
                    toJSON(message: _69.FungibleTokenPacketData): unknown;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _69.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _149.MsgClientImpl;
                QueryClientImpl: typeof _145.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _72.QueryChannelRequest): Promise<_72.QueryChannelResponse>;
                    channels(request?: _72.QueryChannelsRequest): Promise<_72.QueryChannelsResponse>;
                    connectionChannels(request: _72.QueryConnectionChannelsRequest): Promise<_72.QueryConnectionChannelsResponse>;
                    channelClientState(request: _72.QueryChannelClientStateRequest): Promise<_72.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _72.QueryChannelConsensusStateRequest): Promise<_72.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _72.QueryPacketCommitmentRequest): Promise<_72.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _72.QueryPacketCommitmentsRequest): Promise<_72.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _72.QueryPacketReceiptRequest): Promise<_72.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _72.QueryPacketAcknowledgementRequest): Promise<_72.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _72.QueryPacketAcknowledgementsRequest): Promise<_72.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _72.QueryUnreceivedPacketsRequest): Promise<_72.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _72.QueryUnreceivedAcksRequest): Promise<_72.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _72.QueryNextSequenceReceiveRequest): Promise<_72.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _73.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _73.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _73.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _73.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _73.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _73.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _73.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _73.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _73.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _73.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _73.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _73.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _73.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _73.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _73.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _73.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _73.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _73.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _73.MsgRecvPacket): {
                            typeUrl: string;
                            value: _73.MsgRecvPacket;
                        };
                        timeout(value: _73.MsgTimeout): {
                            typeUrl: string;
                            value: _73.MsgTimeout;
                        };
                        timeoutOnClose(value: _73.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _73.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _73.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _73.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _73.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _73.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _73.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _73.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _73.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _73.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _73.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _73.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _73.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _73.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _73.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _73.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _73.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _73.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _73.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _73.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _73.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _73.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _73.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _73.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _73.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _73.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _73.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _73.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _73.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _73.MsgRecvPacket): {
                            typeUrl: string;
                            value: _73.MsgRecvPacket;
                        };
                        timeout(value: _73.MsgTimeout): {
                            typeUrl: string;
                            value: _73.MsgTimeout;
                        };
                        timeoutOnClose(value: _73.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _73.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _73.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _73.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _73.MsgChannelOpenInit) => {
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
                        }) => _73.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _73.MsgChannelOpenTry) => {
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
                        }) => _73.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _73.MsgChannelOpenAck) => {
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
                        }) => _73.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _73.MsgChannelOpenConfirm) => {
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
                        }) => _73.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _73.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _73.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _73.MsgChannelCloseConfirm) => {
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
                        }) => _73.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _73.MsgRecvPacket) => {
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
                        }) => _73.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _73.MsgTimeout) => {
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
                        }) => _73.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _73.MsgTimeoutOnClose) => {
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
                        }) => _73.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _73.MsgAcknowledgement) => {
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
                        }) => _73.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _73.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelOpenInit;
                    fromJSON(object: any): _73.MsgChannelOpenInit;
                    toJSON(message: _73.MsgChannelOpenInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _70.State;
                            ordering?: _70.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _73.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _73.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _73.MsgChannelOpenInitResponse;
                    toJSON(_: _73.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: {}): _73.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _73.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelOpenTry;
                    fromJSON(object: any): _73.MsgChannelOpenTry;
                    toJSON(message: _73.MsgChannelOpenTry): unknown;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _70.State;
                            ordering?: _70.Order;
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
                    }): _73.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _73.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _73.MsgChannelOpenTryResponse;
                    toJSON(_: _73.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: {}): _73.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _73.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelOpenAck;
                    fromJSON(object: any): _73.MsgChannelOpenAck;
                    toJSON(message: _73.MsgChannelOpenAck): unknown;
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
                    }): _73.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _73.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _73.MsgChannelOpenAckResponse;
                    toJSON(_: _73.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: {}): _73.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _73.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelOpenConfirm;
                    fromJSON(object: any): _73.MsgChannelOpenConfirm;
                    toJSON(message: _73.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _73.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _73.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _73.MsgChannelOpenConfirmResponse;
                    toJSON(_: _73.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _73.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _73.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelCloseInit;
                    fromJSON(object: any): _73.MsgChannelCloseInit;
                    toJSON(message: _73.MsgChannelCloseInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _73.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _73.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _73.MsgChannelCloseInitResponse;
                    toJSON(_: _73.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: {}): _73.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _73.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelCloseConfirm;
                    fromJSON(object: any): _73.MsgChannelCloseConfirm;
                    toJSON(message: _73.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _73.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _73.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _73.MsgChannelCloseConfirmResponse;
                    toJSON(_: _73.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: {}): _73.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _73.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgRecvPacket;
                    fromJSON(object: any): _73.MsgRecvPacket;
                    toJSON(message: _73.MsgRecvPacket): unknown;
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
                    }): _73.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _73.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgRecvPacketResponse;
                    fromJSON(_: any): _73.MsgRecvPacketResponse;
                    toJSON(_: _73.MsgRecvPacketResponse): unknown;
                    fromPartial(_: {}): _73.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _73.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgTimeout;
                    fromJSON(object: any): _73.MsgTimeout;
                    toJSON(message: _73.MsgTimeout): unknown;
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
                    }): _73.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _73.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgTimeoutResponse;
                    fromJSON(_: any): _73.MsgTimeoutResponse;
                    toJSON(_: _73.MsgTimeoutResponse): unknown;
                    fromPartial(_: {}): _73.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _73.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgTimeoutOnClose;
                    fromJSON(object: any): _73.MsgTimeoutOnClose;
                    toJSON(message: _73.MsgTimeoutOnClose): unknown;
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
                    }): _73.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _73.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _73.MsgTimeoutOnCloseResponse;
                    toJSON(_: _73.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: {}): _73.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _73.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgAcknowledgement;
                    fromJSON(object: any): _73.MsgAcknowledgement;
                    toJSON(message: _73.MsgAcknowledgement): unknown;
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
                    }): _73.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _73.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgAcknowledgementResponse;
                    fromJSON(_: any): _73.MsgAcknowledgementResponse;
                    toJSON(_: _73.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: {}): _73.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _72.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryChannelRequest;
                    fromJSON(object: any): _72.QueryChannelRequest;
                    toJSON(message: _72.QueryChannelRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _72.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _72.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryChannelResponse;
                    fromJSON(object: any): _72.QueryChannelResponse;
                    toJSON(message: _72.QueryChannelResponse): unknown;
                    fromPartial(object: {
                        channel?: {
                            state?: _70.State;
                            ordering?: _70.Order;
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
                    }): _72.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _72.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryChannelsRequest;
                    fromJSON(object: any): _72.QueryChannelsRequest;
                    toJSON(message: _72.QueryChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _72.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _72.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryChannelsResponse;
                    fromJSON(object: any): _72.QueryChannelsResponse;
                    toJSON(message: _72.QueryChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _70.State;
                            ordering?: _70.Order;
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
                    }): _72.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _72.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _72.QueryConnectionChannelsRequest;
                    toJSON(message: _72.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _72.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _72.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _72.QueryConnectionChannelsResponse;
                    toJSON(message: _72.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _70.State;
                            ordering?: _70.Order;
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
                    }): _72.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _72.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryChannelClientStateRequest;
                    fromJSON(object: any): _72.QueryChannelClientStateRequest;
                    toJSON(message: _72.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _72.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _72.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryChannelClientStateResponse;
                    fromJSON(object: any): _72.QueryChannelClientStateResponse;
                    toJSON(message: _72.QueryChannelClientStateResponse): unknown;
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
                    }): _72.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _72.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _72.QueryChannelConsensusStateRequest;
                    toJSON(message: _72.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                    }): _72.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _72.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _72.QueryChannelConsensusStateResponse;
                    toJSON(message: _72.QueryChannelConsensusStateResponse): unknown;
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
                    }): _72.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _72.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _72.QueryPacketCommitmentRequest;
                    toJSON(message: _72.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _72.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _72.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _72.QueryPacketCommitmentResponse;
                    toJSON(message: _72.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _72.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _72.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _72.QueryPacketCommitmentsRequest;
                    toJSON(message: _72.QueryPacketCommitmentsRequest): unknown;
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
                    }): _72.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _72.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _72.QueryPacketCommitmentsResponse;
                    toJSON(message: _72.QueryPacketCommitmentsResponse): unknown;
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
                    }): _72.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _72.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryPacketReceiptRequest;
                    fromJSON(object: any): _72.QueryPacketReceiptRequest;
                    toJSON(message: _72.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _72.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _72.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryPacketReceiptResponse;
                    fromJSON(object: any): _72.QueryPacketReceiptResponse;
                    toJSON(message: _72.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _72.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _72.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _72.QueryPacketAcknowledgementRequest;
                    toJSON(message: _72.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _72.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _72.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _72.QueryPacketAcknowledgementResponse;
                    toJSON(message: _72.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _72.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _72.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _72.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _72.QueryPacketAcknowledgementsRequest): unknown;
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
                    }): _72.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _72.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _72.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _72.QueryPacketAcknowledgementsResponse): unknown;
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
                    }): _72.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _72.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _72.QueryUnreceivedPacketsRequest;
                    toJSON(message: _72.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: (string | number | import("long"))[];
                    }): _72.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _72.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _72.QueryUnreceivedPacketsResponse;
                    toJSON(message: _72.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: {
                        sequences?: (string | number | import("long"))[];
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _72.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _72.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _72.QueryUnreceivedAcksRequest;
                    toJSON(message: _72.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: (string | number | import("long"))[];
                    }): _72.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _72.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _72.QueryUnreceivedAcksResponse;
                    toJSON(message: _72.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: {
                        sequences?: (string | number | import("long"))[];
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _72.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _72.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _72.QueryNextSequenceReceiveRequest;
                    toJSON(message: _72.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _72.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _72.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _72.QueryNextSequenceReceiveResponse;
                    toJSON(message: _72.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: {
                        nextSequenceReceive?: string | number | import("long");
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _72.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisState;
                    fromJSON(object: any): _71.GenesisState;
                    toJSON(message: _71.GenesisState): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _70.State;
                            ordering?: _70.Order;
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
                    }): _71.GenesisState;
                };
                PacketSequence: {
                    encode(message: _71.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.PacketSequence;
                    fromJSON(object: any): _71.PacketSequence;
                    toJSON(message: _71.PacketSequence): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                    }): _71.PacketSequence;
                };
                stateFromJSON(object: any): _70.State;
                stateToJSON(object: _70.State): string;
                orderFromJSON(object: any): _70.Order;
                orderToJSON(object: _70.Order): string;
                State: typeof _70.State;
                Order: typeof _70.Order;
                Channel: {
                    encode(message: _70.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Channel;
                    fromJSON(object: any): _70.Channel;
                    toJSON(message: _70.Channel): unknown;
                    fromPartial(object: {
                        state?: _70.State;
                        ordering?: _70.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _70.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _70.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.IdentifiedChannel;
                    fromJSON(object: any): _70.IdentifiedChannel;
                    toJSON(message: _70.IdentifiedChannel): unknown;
                    fromPartial(object: {
                        state?: _70.State;
                        ordering?: _70.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _70.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _70.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Counterparty;
                    fromJSON(object: any): _70.Counterparty;
                    toJSON(message: _70.Counterparty): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _70.Counterparty;
                };
                Packet: {
                    encode(message: _70.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Packet;
                    fromJSON(object: any): _70.Packet;
                    toJSON(message: _70.Packet): unknown;
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
                    }): _70.Packet;
                };
                PacketState: {
                    encode(message: _70.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.PacketState;
                    fromJSON(object: any): _70.PacketState;
                    toJSON(message: _70.PacketState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long");
                        data?: Uint8Array;
                    }): _70.PacketState;
                };
                Acknowledgement: {
                    encode(message: _70.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Acknowledgement;
                    fromJSON(object: any): _70.Acknowledgement;
                    toJSON(message: _70.Acknowledgement): unknown;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _70.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _150.MsgClientImpl;
                QueryClientImpl: typeof _146.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _76.QueryClientStateRequest): Promise<_76.QueryClientStateResponse>;
                    clientStates(request?: _76.QueryClientStatesRequest): Promise<_76.QueryClientStatesResponse>;
                    consensusState(request: _76.QueryConsensusStateRequest): Promise<_76.QueryConsensusStateResponse>;
                    consensusStates(request: _76.QueryConsensusStatesRequest): Promise<_76.QueryConsensusStatesResponse>;
                    clientStatus(request: _76.QueryClientStatusRequest): Promise<_76.QueryClientStatusResponse>;
                    clientParams(request?: _76.QueryClientParamsRequest): Promise<_76.QueryClientParamsResponse>;
                    upgradedClientState(request?: _76.QueryUpgradedClientStateRequest): Promise<_76.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _76.QueryUpgradedConsensusStateRequest): Promise<_76.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _77.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _77.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _77.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _77.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _77.MsgCreateClient): {
                            typeUrl: string;
                            value: _77.MsgCreateClient;
                        };
                        updateClient(value: _77.MsgUpdateClient): {
                            typeUrl: string;
                            value: _77.MsgUpdateClient;
                        };
                        upgradeClient(value: _77.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _77.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _77.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _77.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _77.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _77.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _77.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _77.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _77.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _77.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _77.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _77.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _77.MsgCreateClient): {
                            typeUrl: string;
                            value: _77.MsgCreateClient;
                        };
                        updateClient(value: _77.MsgUpdateClient): {
                            typeUrl: string;
                            value: _77.MsgUpdateClient;
                        };
                        upgradeClient(value: _77.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _77.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _77.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _77.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _77.MsgCreateClient) => {
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
                        }) => _77.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _77.MsgUpdateClient) => {
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
                        }) => _77.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _77.MsgUpgradeClient) => {
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
                        }) => _77.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _77.MsgSubmitMisbehaviour) => {
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
                        }) => _77.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _77.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgCreateClient;
                    fromJSON(object: any): _77.MsgCreateClient;
                    toJSON(message: _77.MsgCreateClient): unknown;
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
                    }): _77.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _77.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgCreateClientResponse;
                    fromJSON(_: any): _77.MsgCreateClientResponse;
                    toJSON(_: _77.MsgCreateClientResponse): unknown;
                    fromPartial(_: {}): _77.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _77.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgUpdateClient;
                    fromJSON(object: any): _77.MsgUpdateClient;
                    toJSON(message: _77.MsgUpdateClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _77.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _77.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgUpdateClientResponse;
                    fromJSON(_: any): _77.MsgUpdateClientResponse;
                    toJSON(_: _77.MsgUpdateClientResponse): unknown;
                    fromPartial(_: {}): _77.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _77.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgUpgradeClient;
                    fromJSON(object: any): _77.MsgUpgradeClient;
                    toJSON(message: _77.MsgUpgradeClient): unknown;
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
                    }): _77.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _77.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgUpgradeClientResponse;
                    fromJSON(_: any): _77.MsgUpgradeClientResponse;
                    toJSON(_: _77.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: {}): _77.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _77.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _77.MsgSubmitMisbehaviour;
                    toJSON(message: _77.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _77.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _77.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _77.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _77.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: {}): _77.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _76.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryClientStateRequest;
                    fromJSON(object: any): _76.QueryClientStateRequest;
                    toJSON(message: _76.QueryClientStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _76.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _76.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryClientStateResponse;
                    fromJSON(object: any): _76.QueryClientStateResponse;
                    toJSON(message: _76.QueryClientStateResponse): unknown;
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
                    }): _76.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _76.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryClientStatesRequest;
                    fromJSON(object: any): _76.QueryClientStatesRequest;
                    toJSON(message: _76.QueryClientStatesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _76.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _76.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryClientStatesResponse;
                    fromJSON(object: any): _76.QueryClientStatesResponse;
                    toJSON(message: _76.QueryClientStatesResponse): unknown;
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
                    }): _76.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _76.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConsensusStateRequest;
                    fromJSON(object: any): _76.QueryConsensusStateRequest;
                    toJSON(message: _76.QueryConsensusStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                        latestHeight?: boolean;
                    }): _76.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _76.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConsensusStateResponse;
                    fromJSON(object: any): _76.QueryConsensusStateResponse;
                    toJSON(message: _76.QueryConsensusStateResponse): unknown;
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
                    }): _76.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _76.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConsensusStatesRequest;
                    fromJSON(object: any): _76.QueryConsensusStatesRequest;
                    toJSON(message: _76.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _76.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _76.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConsensusStatesResponse;
                    fromJSON(object: any): _76.QueryConsensusStatesResponse;
                    toJSON(message: _76.QueryConsensusStatesResponse): unknown;
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
                    }): _76.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _76.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryClientStatusRequest;
                    fromJSON(object: any): _76.QueryClientStatusRequest;
                    toJSON(message: _76.QueryClientStatusRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _76.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _76.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryClientStatusResponse;
                    fromJSON(object: any): _76.QueryClientStatusResponse;
                    toJSON(message: _76.QueryClientStatusResponse): unknown;
                    fromPartial(object: {
                        status?: string;
                    }): _76.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _76.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryClientParamsRequest;
                    fromJSON(_: any): _76.QueryClientParamsRequest;
                    toJSON(_: _76.QueryClientParamsRequest): unknown;
                    fromPartial(_: {}): _76.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _76.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryClientParamsResponse;
                    fromJSON(object: any): _76.QueryClientParamsResponse;
                    toJSON(message: _76.QueryClientParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _76.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _76.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _76.QueryUpgradedClientStateRequest;
                    toJSON(_: _76.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: {}): _76.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _76.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _76.QueryUpgradedClientStateResponse;
                    toJSON(message: _76.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _76.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _76.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _76.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _76.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: {}): _76.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _76.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _76.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _76.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _76.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GenesisState;
                    fromJSON(object: any): _75.GenesisState;
                    toJSON(message: _75.GenesisState): unknown;
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
                    }): _75.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _75.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GenesisMetadata;
                    fromJSON(object: any): _75.GenesisMetadata;
                    toJSON(message: _75.GenesisMetadata): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _75.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _75.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _75.IdentifiedGenesisMetadata;
                    toJSON(message: _75.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _75.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _74.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.IdentifiedClientState;
                    fromJSON(object: any): _74.IdentifiedClientState;
                    toJSON(message: _74.IdentifiedClientState): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _74.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _74.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ConsensusStateWithHeight;
                    fromJSON(object: any): _74.ConsensusStateWithHeight;
                    toJSON(message: _74.ConsensusStateWithHeight): unknown;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _74.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _74.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ClientConsensusStates;
                    fromJSON(object: any): _74.ClientConsensusStates;
                    toJSON(message: _74.ClientConsensusStates): unknown;
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
                    }): _74.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _74.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ClientUpdateProposal;
                    fromJSON(object: any): _74.ClientUpdateProposal;
                    toJSON(message: _74.ClientUpdateProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _74.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _74.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.UpgradeProposal;
                    fromJSON(object: any): _74.UpgradeProposal;
                    toJSON(message: _74.UpgradeProposal): unknown;
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
                    }): _74.UpgradeProposal;
                };
                Height: {
                    encode(message: _74.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Height;
                    fromJSON(object: any): _74.Height;
                    toJSON(message: _74.Height): unknown;
                    fromPartial(object: {
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                    }): _74.Height;
                };
                Params: {
                    encode(message: _74.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Params;
                    fromJSON(object: any): _74.Params;
                    toJSON(message: _74.Params): unknown;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _74.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _78.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MerkleRoot;
                    fromJSON(object: any): _78.MerkleRoot;
                    toJSON(message: _78.MerkleRoot): unknown;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _78.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _78.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MerklePrefix;
                    fromJSON(object: any): _78.MerklePrefix;
                    toJSON(message: _78.MerklePrefix): unknown;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _78.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _78.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MerklePath;
                    fromJSON(object: any): _78.MerklePath;
                    toJSON(message: _78.MerklePath): unknown;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _78.MerklePath;
                };
                MerkleProof: {
                    encode(message: _78.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MerkleProof;
                    fromJSON(object: any): _78.MerkleProof;
                    toJSON(message: _78.MerkleProof): unknown;
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
                    }): _78.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _151.MsgClientImpl;
                QueryClientImpl: typeof _147.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _81.QueryConnectionRequest): Promise<_81.QueryConnectionResponse>;
                    connections(request?: _81.QueryConnectionsRequest): Promise<_81.QueryConnectionsResponse>;
                    clientConnections(request: _81.QueryClientConnectionsRequest): Promise<_81.QueryClientConnectionsResponse>;
                    connectionClientState(request: _81.QueryConnectionClientStateRequest): Promise<_81.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _81.QueryConnectionConsensusStateRequest): Promise<_81.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _82.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _82.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _82.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _82.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _82.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _82.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _82.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _82.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _82.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _82.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _82.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _82.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _82.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _82.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _82.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _82.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _82.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _82.MsgConnectionOpenInit) => {
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
                        }) => _82.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _82.MsgConnectionOpenTry) => {
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
                        }) => _82.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _82.MsgConnectionOpenAck) => {
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
                        }) => _82.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _82.MsgConnectionOpenConfirm) => {
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
                        }) => _82.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _82.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgConnectionOpenInit;
                    fromJSON(object: any): _82.MsgConnectionOpenInit;
                    toJSON(message: _82.MsgConnectionOpenInit): unknown;
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
                    }): _82.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _82.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _82.MsgConnectionOpenInitResponse;
                    toJSON(_: _82.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: {}): _82.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _82.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgConnectionOpenTry;
                    fromJSON(object: any): _82.MsgConnectionOpenTry;
                    toJSON(message: _82.MsgConnectionOpenTry): unknown;
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
                    }): _82.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _82.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _82.MsgConnectionOpenTryResponse;
                    toJSON(_: _82.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: {}): _82.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _82.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgConnectionOpenAck;
                    fromJSON(object: any): _82.MsgConnectionOpenAck;
                    toJSON(message: _82.MsgConnectionOpenAck): unknown;
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
                    }): _82.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _82.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _82.MsgConnectionOpenAckResponse;
                    toJSON(_: _82.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: {}): _82.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _82.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _82.MsgConnectionOpenConfirm;
                    toJSON(message: _82.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                        signer?: string;
                    }): _82.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _82.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _82.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _82.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _82.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _81.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConnectionRequest;
                    fromJSON(object: any): _81.QueryConnectionRequest;
                    toJSON(message: _81.QueryConnectionRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _81.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _81.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConnectionResponse;
                    fromJSON(object: any): _81.QueryConnectionResponse;
                    toJSON(message: _81.QueryConnectionResponse): unknown;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _79.State;
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
                    }): _81.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _81.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConnectionsRequest;
                    fromJSON(object: any): _81.QueryConnectionsRequest;
                    toJSON(message: _81.QueryConnectionsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long");
                            limit?: string | number | import("long");
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _81.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _81.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConnectionsResponse;
                    fromJSON(object: any): _81.QueryConnectionsResponse;
                    toJSON(message: _81.QueryConnectionsResponse): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _79.State;
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
                    }): _81.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _81.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClientConnectionsRequest;
                    fromJSON(object: any): _81.QueryClientConnectionsRequest;
                    toJSON(message: _81.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _81.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _81.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClientConnectionsResponse;
                    fromJSON(object: any): _81.QueryClientConnectionsResponse;
                    toJSON(message: _81.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _81.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _81.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _81.QueryConnectionClientStateRequest;
                    toJSON(message: _81.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _81.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _81.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _81.QueryConnectionClientStateResponse;
                    toJSON(message: _81.QueryConnectionClientStateResponse): unknown;
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
                    }): _81.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _81.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _81.QueryConnectionConsensusStateRequest;
                    toJSON(message: _81.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: string | number | import("long");
                        revisionHeight?: string | number | import("long");
                    }): _81.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _81.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _81.QueryConnectionConsensusStateResponse;
                    toJSON(message: _81.QueryConnectionConsensusStateResponse): unknown;
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
                    }): _81.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _80.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GenesisState;
                    fromJSON(object: any): _80.GenesisState;
                    toJSON(message: _80.GenesisState): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _79.State;
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
                    }): _80.GenesisState;
                };
                stateFromJSON(object: any): _79.State;
                stateToJSON(object: _79.State): string;
                State: typeof _79.State;
                ConnectionEnd: {
                    encode(message: _79.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ConnectionEnd;
                    fromJSON(object: any): _79.ConnectionEnd;
                    toJSON(message: _79.ConnectionEnd): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _79.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long");
                    }): _79.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _79.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.IdentifiedConnection;
                    fromJSON(object: any): _79.IdentifiedConnection;
                    toJSON(message: _79.IdentifiedConnection): unknown;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _79.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long");
                    }): _79.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _79.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Counterparty;
                    fromJSON(object: any): _79.Counterparty;
                    toJSON(message: _79.Counterparty): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _79.Counterparty;
                };
                ClientPaths: {
                    encode(message: _79.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ClientPaths;
                    fromJSON(object: any): _79.ClientPaths;
                    toJSON(message: _79.ClientPaths): unknown;
                    fromPartial(object: {
                        paths?: string[];
                    }): _79.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _79.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ConnectionPaths;
                    fromJSON(object: any): _79.ConnectionPaths;
                    toJSON(message: _79.ConnectionPaths): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _79.ConnectionPaths;
                };
                Version: {
                    encode(message: _79.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Version;
                    fromJSON(object: any): _79.Version;
                    toJSON(message: _79.Version): unknown;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _79.Version;
                };
                Params: {
                    encode(message: _79.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Params;
                    fromJSON(object: any): _79.Params;
                    toJSON(message: _79.Params): unknown;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: string | number | import("long");
                    }): _79.Params;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _83.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ClientState;
                    fromJSON(object: any): _83.ClientState;
                    toJSON(message: _83.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: string | number | import("long");
                            revisionHeight?: string | number | import("long");
                        };
                    }): _83.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _84.DataType;
                dataTypeToJSON(object: _84.DataType): string;
                DataType: typeof _84.DataType;
                ClientState: {
                    encode(message: _84.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ClientState;
                    fromJSON(object: any): _84.ClientState;
                    toJSON(message: _84.ClientState): unknown;
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
                    }): _84.ClientState;
                };
                ConsensusState: {
                    encode(message: _84.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ConsensusState;
                    fromJSON(object: any): _84.ConsensusState;
                    toJSON(message: _84.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long");
                    }): _84.ConsensusState;
                };
                Header: {
                    encode(message: _84.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Header;
                    fromJSON(object: any): _84.Header;
                    toJSON(message: _84.Header): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _84.Header;
                };
                Misbehaviour: {
                    encode(message: _84.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Misbehaviour;
                    fromJSON(object: any): _84.Misbehaviour;
                    toJSON(message: _84.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long");
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _84.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _84.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                    }): _84.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _84.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.SignatureAndData;
                    fromJSON(object: any): _84.SignatureAndData;
                    toJSON(message: _84.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _84.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _84.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _84.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.TimestampedSignatureData;
                    fromJSON(object: any): _84.TimestampedSignatureData;
                    toJSON(message: _84.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _84.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _84.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.SignBytes;
                    fromJSON(object: any): _84.SignBytes;
                    toJSON(message: _84.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        diversifier?: string;
                        dataType?: _84.DataType;
                        data?: Uint8Array;
                    }): _84.SignBytes;
                };
                HeaderData: {
                    encode(message: _84.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.HeaderData;
                    fromJSON(object: any): _84.HeaderData;
                    toJSON(message: _84.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _84.HeaderData;
                };
                ClientStateData: {
                    encode(message: _84.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ClientStateData;
                    fromJSON(object: any): _84.ClientStateData;
                    toJSON(message: _84.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _84.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _84.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ConsensusStateData;
                    fromJSON(object: any): _84.ConsensusStateData;
                    toJSON(message: _84.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _84.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _84.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ConnectionStateData;
                    fromJSON(object: any): _84.ConnectionStateData;
                    toJSON(message: _84.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _79.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        };
                    }): _84.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _84.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ChannelStateData;
                    fromJSON(object: any): _84.ChannelStateData;
                    toJSON(message: _84.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _70.State;
                            ordering?: _70.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _84.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _84.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PacketCommitmentData;
                    fromJSON(object: any): _84.PacketCommitmentData;
                    toJSON(message: _84.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _84.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _84.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PacketAcknowledgementData;
                    fromJSON(object: any): _84.PacketAcknowledgementData;
                    toJSON(message: _84.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _84.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _84.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PacketReceiptAbsenceData;
                    fromJSON(object: any): _84.PacketReceiptAbsenceData;
                    toJSON(message: _84.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _84.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _84.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.NextSequenceRecvData;
                    fromJSON(object: any): _84.NextSequenceRecvData;
                    toJSON(message: _84.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long");
                    }): _84.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _85.DataType;
                dataTypeToJSON(object: _85.DataType): string;
                DataType: typeof _85.DataType;
                ClientState: {
                    encode(message: _85.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ClientState;
                    fromJSON(object: any): _85.ClientState;
                    toJSON(message: _85.ClientState): unknown;
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
                    }): _85.ClientState;
                };
                ConsensusState: {
                    encode(message: _85.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ConsensusState;
                    fromJSON(object: any): _85.ConsensusState;
                    toJSON(message: _85.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long");
                    }): _85.ConsensusState;
                };
                Header: {
                    encode(message: _85.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Header;
                    fromJSON(object: any): _85.Header;
                    toJSON(message: _85.Header): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _85.Header;
                };
                Misbehaviour: {
                    encode(message: _85.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Misbehaviour;
                    fromJSON(object: any): _85.Misbehaviour;
                    toJSON(message: _85.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long");
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _85.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _85.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long");
                        };
                    }): _85.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _85.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignatureAndData;
                    fromJSON(object: any): _85.SignatureAndData;
                    toJSON(message: _85.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _85.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _85.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _85.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.TimestampedSignatureData;
                    fromJSON(object: any): _85.TimestampedSignatureData;
                    toJSON(message: _85.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long");
                    }): _85.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _85.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.SignBytes;
                    fromJSON(object: any): _85.SignBytes;
                    toJSON(message: _85.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long");
                        timestamp?: string | number | import("long");
                        diversifier?: string;
                        dataType?: _85.DataType;
                        data?: Uint8Array;
                    }): _85.SignBytes;
                };
                HeaderData: {
                    encode(message: _85.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.HeaderData;
                    fromJSON(object: any): _85.HeaderData;
                    toJSON(message: _85.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _85.HeaderData;
                };
                ClientStateData: {
                    encode(message: _85.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ClientStateData;
                    fromJSON(object: any): _85.ClientStateData;
                    toJSON(message: _85.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _85.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _85.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ConsensusStateData;
                    fromJSON(object: any): _85.ConsensusStateData;
                    toJSON(message: _85.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _85.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _85.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ConnectionStateData;
                    fromJSON(object: any): _85.ConnectionStateData;
                    toJSON(message: _85.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _79.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long");
                        };
                    }): _85.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _85.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ChannelStateData;
                    fromJSON(object: any): _85.ChannelStateData;
                    toJSON(message: _85.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _70.State;
                            ordering?: _70.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _85.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _85.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.PacketCommitmentData;
                    fromJSON(object: any): _85.PacketCommitmentData;
                    toJSON(message: _85.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _85.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _85.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.PacketAcknowledgementData;
                    fromJSON(object: any): _85.PacketAcknowledgementData;
                    toJSON(message: _85.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _85.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _85.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.PacketReceiptAbsenceData;
                    fromJSON(object: any): _85.PacketReceiptAbsenceData;
                    toJSON(message: _85.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _85.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _85.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.NextSequenceRecvData;
                    fromJSON(object: any): _85.NextSequenceRecvData;
                    toJSON(message: _85.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long");
                    }): _85.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _86.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ClientState;
                    fromJSON(object: any): _86.ClientState;
                    toJSON(message: _86.ClientState): unknown;
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
                    }): _86.ClientState;
                };
                ConsensusState: {
                    encode(message: _86.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ConsensusState;
                    fromJSON(object: any): _86.ConsensusState;
                    toJSON(message: _86.ConsensusState): unknown;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _86.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _86.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Misbehaviour;
                    fromJSON(object: any): _86.Misbehaviour;
                    toJSON(message: _86.Misbehaviour): unknown;
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
                    }): _86.Misbehaviour;
                };
                Header: {
                    encode(message: _86.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Header;
                    fromJSON(object: any): _86.Header;
                    toJSON(message: _86.Header): unknown;
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
                    }): _86.Header;
                };
                Fraction: {
                    encode(message: _86.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Fraction;
                    fromJSON(object: any): _86.Fraction;
                    toJSON(message: _86.Fraction): unknown;
                    fromPartial(object: {
                        numerator?: string | number | import("long");
                        denominator?: string | number | import("long");
                    }): _86.Fraction;
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
                        v1: _148.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _149.MsgClientImpl;
                    };
                    client: {
                        v1: _150.MsgClientImpl;
                    };
                    connection: {
                        v1: _151.MsgClientImpl;
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
                            denomTrace(request: _66.QueryDenomTraceRequest): Promise<_66.QueryDenomTraceResponse>;
                            denomTraces(request?: _66.QueryDenomTracesRequest): Promise<_66.QueryDenomTracesResponse>;
                            params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _72.QueryChannelRequest): Promise<_72.QueryChannelResponse>;
                            channels(request?: _72.QueryChannelsRequest): Promise<_72.QueryChannelsResponse>;
                            connectionChannels(request: _72.QueryConnectionChannelsRequest): Promise<_72.QueryConnectionChannelsResponse>;
                            channelClientState(request: _72.QueryChannelClientStateRequest): Promise<_72.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _72.QueryChannelConsensusStateRequest): Promise<_72.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _72.QueryPacketCommitmentRequest): Promise<_72.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _72.QueryPacketCommitmentsRequest): Promise<_72.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _72.QueryPacketReceiptRequest): Promise<_72.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _72.QueryPacketAcknowledgementRequest): Promise<_72.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _72.QueryPacketAcknowledgementsRequest): Promise<_72.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _72.QueryUnreceivedPacketsRequest): Promise<_72.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _72.QueryUnreceivedAcksRequest): Promise<_72.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _72.QueryNextSequenceReceiveRequest): Promise<_72.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _76.QueryClientStateRequest): Promise<_76.QueryClientStateResponse>;
                            clientStates(request?: _76.QueryClientStatesRequest): Promise<_76.QueryClientStatesResponse>;
                            consensusState(request: _76.QueryConsensusStateRequest): Promise<_76.QueryConsensusStateResponse>;
                            consensusStates(request: _76.QueryConsensusStatesRequest): Promise<_76.QueryConsensusStatesResponse>;
                            clientStatus(request: _76.QueryClientStatusRequest): Promise<_76.QueryClientStatusResponse>;
                            clientParams(request?: _76.QueryClientParamsRequest): Promise<_76.QueryClientParamsResponse>;
                            upgradedClientState(request?: _76.QueryUpgradedClientStateRequest): Promise<_76.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _76.QueryUpgradedConsensusStateRequest): Promise<_76.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _81.QueryConnectionRequest): Promise<_81.QueryConnectionResponse>;
                            connections(request?: _81.QueryConnectionsRequest): Promise<_81.QueryConnectionsResponse>;
                            clientConnections(request: _81.QueryClientConnectionsRequest): Promise<_81.QueryClientConnectionsResponse>;
                            connectionClientState(request: _81.QueryConnectionClientStateRequest): Promise<_81.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _81.QueryConnectionConsensusStateRequest): Promise<_81.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
