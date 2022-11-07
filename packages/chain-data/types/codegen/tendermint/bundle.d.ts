import * as _113 from "./abci/types";
import * as _114 from "./crypto/keys";
import * as _115 from "./crypto/proof";
import * as _116 from "./libs/bits/types";
import * as _117 from "./p2p/types";
import * as _118 from "./types/block";
import * as _119 from "./types/evidence";
import * as _120 from "./types/params";
import * as _121 from "./types/types";
import * as _122 from "./types/validator";
import * as _123 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _113.CheckTxType;
        checkTxTypeToJSON(object: _113.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _113.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _113.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _113.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _113.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _113.EvidenceType;
        evidenceTypeToJSON(object: _113.EvidenceType): string;
        CheckTxType: typeof _113.CheckTxType;
        CheckTxTypeSDKType: typeof _113.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _113.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _113.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _113.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _113.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _113.EvidenceType;
        EvidenceTypeSDKType: typeof _113.EvidenceTypeSDKType;
        Request: {
            encode(message: _113.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Request;
            fromJSON(object: any): _113.Request;
            toJSON(message: _113.Request): unknown;
            fromPartial(object: Partial<_113.Request>): _113.Request;
        };
        RequestEcho: {
            encode(message: _113.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestEcho;
            fromJSON(object: any): _113.RequestEcho;
            toJSON(message: _113.RequestEcho): unknown;
            fromPartial(object: Partial<_113.RequestEcho>): _113.RequestEcho;
        };
        RequestFlush: {
            encode(_: _113.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestFlush;
            fromJSON(_: any): _113.RequestFlush;
            toJSON(_: _113.RequestFlush): unknown;
            fromPartial(_: Partial<_113.RequestFlush>): _113.RequestFlush;
        };
        RequestInfo: {
            encode(message: _113.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestInfo;
            fromJSON(object: any): _113.RequestInfo;
            toJSON(message: _113.RequestInfo): unknown;
            fromPartial(object: Partial<_113.RequestInfo>): _113.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _113.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestSetOption;
            fromJSON(object: any): _113.RequestSetOption;
            toJSON(message: _113.RequestSetOption): unknown;
            fromPartial(object: Partial<_113.RequestSetOption>): _113.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _113.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestInitChain;
            fromJSON(object: any): _113.RequestInitChain;
            toJSON(message: _113.RequestInitChain): unknown;
            fromPartial(object: Partial<_113.RequestInitChain>): _113.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _113.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestQuery;
            fromJSON(object: any): _113.RequestQuery;
            toJSON(message: _113.RequestQuery): unknown;
            fromPartial(object: Partial<_113.RequestQuery>): _113.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _113.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestBeginBlock;
            fromJSON(object: any): _113.RequestBeginBlock;
            toJSON(message: _113.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_113.RequestBeginBlock>): _113.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _113.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestCheckTx;
            fromJSON(object: any): _113.RequestCheckTx;
            toJSON(message: _113.RequestCheckTx): unknown;
            fromPartial(object: Partial<_113.RequestCheckTx>): _113.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _113.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestDeliverTx;
            fromJSON(object: any): _113.RequestDeliverTx;
            toJSON(message: _113.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_113.RequestDeliverTx>): _113.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _113.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestEndBlock;
            fromJSON(object: any): _113.RequestEndBlock;
            toJSON(message: _113.RequestEndBlock): unknown;
            fromPartial(object: Partial<_113.RequestEndBlock>): _113.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _113.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestCommit;
            fromJSON(_: any): _113.RequestCommit;
            toJSON(_: _113.RequestCommit): unknown;
            fromPartial(_: Partial<_113.RequestCommit>): _113.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _113.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestListSnapshots;
            fromJSON(_: any): _113.RequestListSnapshots;
            toJSON(_: _113.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_113.RequestListSnapshots>): _113.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _113.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestOfferSnapshot;
            fromJSON(object: any): _113.RequestOfferSnapshot;
            toJSON(message: _113.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_113.RequestOfferSnapshot>): _113.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _113.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestLoadSnapshotChunk;
            fromJSON(object: any): _113.RequestLoadSnapshotChunk;
            toJSON(message: _113.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_113.RequestLoadSnapshotChunk>): _113.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _113.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.RequestApplySnapshotChunk;
            fromJSON(object: any): _113.RequestApplySnapshotChunk;
            toJSON(message: _113.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_113.RequestApplySnapshotChunk>): _113.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _113.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Response;
            fromJSON(object: any): _113.Response;
            toJSON(message: _113.Response): unknown;
            fromPartial(object: Partial<_113.Response>): _113.Response;
        };
        ResponseException: {
            encode(message: _113.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseException;
            fromJSON(object: any): _113.ResponseException;
            toJSON(message: _113.ResponseException): unknown;
            fromPartial(object: Partial<_113.ResponseException>): _113.ResponseException;
        };
        ResponseEcho: {
            encode(message: _113.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseEcho;
            fromJSON(object: any): _113.ResponseEcho;
            toJSON(message: _113.ResponseEcho): unknown;
            fromPartial(object: Partial<_113.ResponseEcho>): _113.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _113.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseFlush;
            fromJSON(_: any): _113.ResponseFlush;
            toJSON(_: _113.ResponseFlush): unknown;
            fromPartial(_: Partial<_113.ResponseFlush>): _113.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _113.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseInfo;
            fromJSON(object: any): _113.ResponseInfo;
            toJSON(message: _113.ResponseInfo): unknown;
            fromPartial(object: Partial<_113.ResponseInfo>): _113.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _113.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseSetOption;
            fromJSON(object: any): _113.ResponseSetOption;
            toJSON(message: _113.ResponseSetOption): unknown;
            fromPartial(object: Partial<_113.ResponseSetOption>): _113.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _113.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseInitChain;
            fromJSON(object: any): _113.ResponseInitChain;
            toJSON(message: _113.ResponseInitChain): unknown;
            fromPartial(object: Partial<_113.ResponseInitChain>): _113.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _113.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseQuery;
            fromJSON(object: any): _113.ResponseQuery;
            toJSON(message: _113.ResponseQuery): unknown;
            fromPartial(object: Partial<_113.ResponseQuery>): _113.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _113.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseBeginBlock;
            fromJSON(object: any): _113.ResponseBeginBlock;
            toJSON(message: _113.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_113.ResponseBeginBlock>): _113.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _113.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseCheckTx;
            fromJSON(object: any): _113.ResponseCheckTx;
            toJSON(message: _113.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_113.ResponseCheckTx>): _113.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _113.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseDeliverTx;
            fromJSON(object: any): _113.ResponseDeliverTx;
            toJSON(message: _113.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_113.ResponseDeliverTx>): _113.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _113.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseEndBlock;
            fromJSON(object: any): _113.ResponseEndBlock;
            toJSON(message: _113.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_113.ResponseEndBlock>): _113.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _113.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseCommit;
            fromJSON(object: any): _113.ResponseCommit;
            toJSON(message: _113.ResponseCommit): unknown;
            fromPartial(object: Partial<_113.ResponseCommit>): _113.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _113.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseListSnapshots;
            fromJSON(object: any): _113.ResponseListSnapshots;
            toJSON(message: _113.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_113.ResponseListSnapshots>): _113.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _113.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseOfferSnapshot;
            fromJSON(object: any): _113.ResponseOfferSnapshot;
            toJSON(message: _113.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_113.ResponseOfferSnapshot>): _113.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _113.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _113.ResponseLoadSnapshotChunk;
            toJSON(message: _113.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_113.ResponseLoadSnapshotChunk>): _113.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _113.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ResponseApplySnapshotChunk;
            fromJSON(object: any): _113.ResponseApplySnapshotChunk;
            toJSON(message: _113.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_113.ResponseApplySnapshotChunk>): _113.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _113.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ConsensusParams;
            fromJSON(object: any): _113.ConsensusParams;
            toJSON(message: _113.ConsensusParams): unknown;
            fromPartial(object: Partial<_113.ConsensusParams>): _113.ConsensusParams;
        };
        BlockParams: {
            encode(message: _113.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.BlockParams;
            fromJSON(object: any): _113.BlockParams;
            toJSON(message: _113.BlockParams): unknown;
            fromPartial(object: Partial<_113.BlockParams>): _113.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _113.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.LastCommitInfo;
            fromJSON(object: any): _113.LastCommitInfo;
            toJSON(message: _113.LastCommitInfo): unknown;
            fromPartial(object: Partial<_113.LastCommitInfo>): _113.LastCommitInfo;
        };
        Event: {
            encode(message: _113.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Event;
            fromJSON(object: any): _113.Event;
            toJSON(message: _113.Event): unknown;
            fromPartial(object: Partial<_113.Event>): _113.Event;
        };
        EventAttribute: {
            encode(message: _113.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.EventAttribute;
            fromJSON(object: any): _113.EventAttribute;
            toJSON(message: _113.EventAttribute): unknown;
            fromPartial(object: Partial<_113.EventAttribute>): _113.EventAttribute;
        };
        TxResult: {
            encode(message: _113.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.TxResult;
            fromJSON(object: any): _113.TxResult;
            toJSON(message: _113.TxResult): unknown;
            fromPartial(object: Partial<_113.TxResult>): _113.TxResult;
        };
        Validator: {
            encode(message: _113.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Validator;
            fromJSON(object: any): _113.Validator;
            toJSON(message: _113.Validator): unknown;
            fromPartial(object: Partial<_113.Validator>): _113.Validator;
        };
        ValidatorUpdate: {
            encode(message: _113.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ValidatorUpdate;
            fromJSON(object: any): _113.ValidatorUpdate;
            toJSON(message: _113.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_113.ValidatorUpdate>): _113.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _113.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.VoteInfo;
            fromJSON(object: any): _113.VoteInfo;
            toJSON(message: _113.VoteInfo): unknown;
            fromPartial(object: Partial<_113.VoteInfo>): _113.VoteInfo;
        };
        Evidence: {
            encode(message: _113.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Evidence;
            fromJSON(object: any): _113.Evidence;
            toJSON(message: _113.Evidence): unknown;
            fromPartial(object: Partial<_113.Evidence>): _113.Evidence;
        };
        Snapshot: {
            encode(message: _113.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Snapshot;
            fromJSON(object: any): _113.Snapshot;
            toJSON(message: _113.Snapshot): unknown;
            fromPartial(object: Partial<_113.Snapshot>): _113.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _115.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Proof;
            fromJSON(object: any): _115.Proof;
            toJSON(message: _115.Proof): unknown;
            fromPartial(object: Partial<_115.Proof>): _115.Proof;
        };
        ValueOp: {
            encode(message: _115.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ValueOp;
            fromJSON(object: any): _115.ValueOp;
            toJSON(message: _115.ValueOp): unknown;
            fromPartial(object: Partial<_115.ValueOp>): _115.ValueOp;
        };
        DominoOp: {
            encode(message: _115.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.DominoOp;
            fromJSON(object: any): _115.DominoOp;
            toJSON(message: _115.DominoOp): unknown;
            fromPartial(object: Partial<_115.DominoOp>): _115.DominoOp;
        };
        ProofOp: {
            encode(message: _115.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ProofOp;
            fromJSON(object: any): _115.ProofOp;
            toJSON(message: _115.ProofOp): unknown;
            fromPartial(object: Partial<_115.ProofOp>): _115.ProofOp;
        };
        ProofOps: {
            encode(message: _115.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ProofOps;
            fromJSON(object: any): _115.ProofOps;
            toJSON(message: _115.ProofOps): unknown;
            fromPartial(object: Partial<_115.ProofOps>): _115.ProofOps;
        };
        PublicKey: {
            encode(message: _114.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PublicKey;
            fromJSON(object: any): _114.PublicKey;
            toJSON(message: _114.PublicKey): unknown;
            fromPartial(object: Partial<_114.PublicKey>): _114.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _116.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.BitArray;
                fromJSON(object: any): _116.BitArray;
                toJSON(message: _116.BitArray): unknown;
                fromPartial(object: Partial<_116.BitArray>): _116.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _117.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ProtocolVersion;
            fromJSON(object: any): _117.ProtocolVersion;
            toJSON(message: _117.ProtocolVersion): unknown;
            fromPartial(object: Partial<_117.ProtocolVersion>): _117.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _117.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.NodeInfo;
            fromJSON(object: any): _117.NodeInfo;
            toJSON(message: _117.NodeInfo): unknown;
            fromPartial(object: Partial<_117.NodeInfo>): _117.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _117.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.NodeInfoOther;
            fromJSON(object: any): _117.NodeInfoOther;
            toJSON(message: _117.NodeInfoOther): unknown;
            fromPartial(object: Partial<_117.NodeInfoOther>): _117.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _117.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.PeerInfo;
            fromJSON(object: any): _117.PeerInfo;
            toJSON(message: _117.PeerInfo): unknown;
            fromPartial(object: Partial<_117.PeerInfo>): _117.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _117.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.PeerAddressInfo;
            fromJSON(object: any): _117.PeerAddressInfo;
            toJSON(message: _117.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_117.PeerAddressInfo>): _117.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _122.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ValidatorSet;
            fromJSON(object: any): _122.ValidatorSet;
            toJSON(message: _122.ValidatorSet): unknown;
            fromPartial(object: Partial<_122.ValidatorSet>): _122.ValidatorSet;
        };
        Validator: {
            encode(message: _122.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Validator;
            fromJSON(object: any): _122.Validator;
            toJSON(message: _122.Validator): unknown;
            fromPartial(object: Partial<_122.Validator>): _122.Validator;
        };
        SimpleValidator: {
            encode(message: _122.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SimpleValidator;
            fromJSON(object: any): _122.SimpleValidator;
            toJSON(message: _122.SimpleValidator): unknown;
            fromPartial(object: Partial<_122.SimpleValidator>): _122.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _121.BlockIDFlag;
        blockIDFlagToJSON(object: _121.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _121.SignedMsgType;
        signedMsgTypeToJSON(object: _121.SignedMsgType): string;
        BlockIDFlag: typeof _121.BlockIDFlag;
        BlockIDFlagSDKType: typeof _121.BlockIDFlagSDKType;
        SignedMsgType: typeof _121.SignedMsgType;
        SignedMsgTypeSDKType: typeof _121.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _121.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.PartSetHeader;
            fromJSON(object: any): _121.PartSetHeader;
            toJSON(message: _121.PartSetHeader): unknown;
            fromPartial(object: Partial<_121.PartSetHeader>): _121.PartSetHeader;
        };
        Part: {
            encode(message: _121.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Part;
            fromJSON(object: any): _121.Part;
            toJSON(message: _121.Part): unknown;
            fromPartial(object: Partial<_121.Part>): _121.Part;
        };
        BlockID: {
            encode(message: _121.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.BlockID;
            fromJSON(object: any): _121.BlockID;
            toJSON(message: _121.BlockID): unknown;
            fromPartial(object: Partial<_121.BlockID>): _121.BlockID;
        };
        Header: {
            encode(message: _121.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Header;
            fromJSON(object: any): _121.Header;
            toJSON(message: _121.Header): unknown;
            fromPartial(object: Partial<_121.Header>): _121.Header;
        };
        Data: {
            encode(message: _121.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Data;
            fromJSON(object: any): _121.Data;
            toJSON(message: _121.Data): unknown;
            fromPartial(object: Partial<_121.Data>): _121.Data;
        };
        Vote: {
            encode(message: _121.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Vote;
            fromJSON(object: any): _121.Vote;
            toJSON(message: _121.Vote): unknown;
            fromPartial(object: Partial<_121.Vote>): _121.Vote;
        };
        Commit: {
            encode(message: _121.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Commit;
            fromJSON(object: any): _121.Commit;
            toJSON(message: _121.Commit): unknown;
            fromPartial(object: Partial<_121.Commit>): _121.Commit;
        };
        CommitSig: {
            encode(message: _121.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.CommitSig;
            fromJSON(object: any): _121.CommitSig;
            toJSON(message: _121.CommitSig): unknown;
            fromPartial(object: Partial<_121.CommitSig>): _121.CommitSig;
        };
        Proposal: {
            encode(message: _121.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Proposal;
            fromJSON(object: any): _121.Proposal;
            toJSON(message: _121.Proposal): unknown;
            fromPartial(object: Partial<_121.Proposal>): _121.Proposal;
        };
        SignedHeader: {
            encode(message: _121.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.SignedHeader;
            fromJSON(object: any): _121.SignedHeader;
            toJSON(message: _121.SignedHeader): unknown;
            fromPartial(object: Partial<_121.SignedHeader>): _121.SignedHeader;
        };
        LightBlock: {
            encode(message: _121.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.LightBlock;
            fromJSON(object: any): _121.LightBlock;
            toJSON(message: _121.LightBlock): unknown;
            fromPartial(object: Partial<_121.LightBlock>): _121.LightBlock;
        };
        BlockMeta: {
            encode(message: _121.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.BlockMeta;
            fromJSON(object: any): _121.BlockMeta;
            toJSON(message: _121.BlockMeta): unknown;
            fromPartial(object: Partial<_121.BlockMeta>): _121.BlockMeta;
        };
        TxProof: {
            encode(message: _121.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.TxProof;
            fromJSON(object: any): _121.TxProof;
            toJSON(message: _121.TxProof): unknown;
            fromPartial(object: Partial<_121.TxProof>): _121.TxProof;
        };
        ConsensusParams: {
            encode(message: _120.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ConsensusParams;
            fromJSON(object: any): _120.ConsensusParams;
            toJSON(message: _120.ConsensusParams): unknown;
            fromPartial(object: Partial<_120.ConsensusParams>): _120.ConsensusParams;
        };
        BlockParams: {
            encode(message: _120.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.BlockParams;
            fromJSON(object: any): _120.BlockParams;
            toJSON(message: _120.BlockParams): unknown;
            fromPartial(object: Partial<_120.BlockParams>): _120.BlockParams;
        };
        EvidenceParams: {
            encode(message: _120.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.EvidenceParams;
            fromJSON(object: any): _120.EvidenceParams;
            toJSON(message: _120.EvidenceParams): unknown;
            fromPartial(object: Partial<_120.EvidenceParams>): _120.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _120.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ValidatorParams;
            fromJSON(object: any): _120.ValidatorParams;
            toJSON(message: _120.ValidatorParams): unknown;
            fromPartial(object: Partial<_120.ValidatorParams>): _120.ValidatorParams;
        };
        VersionParams: {
            encode(message: _120.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.VersionParams;
            fromJSON(object: any): _120.VersionParams;
            toJSON(message: _120.VersionParams): unknown;
            fromPartial(object: Partial<_120.VersionParams>): _120.VersionParams;
        };
        HashedParams: {
            encode(message: _120.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.HashedParams;
            fromJSON(object: any): _120.HashedParams;
            toJSON(message: _120.HashedParams): unknown;
            fromPartial(object: Partial<_120.HashedParams>): _120.HashedParams;
        };
        Evidence: {
            encode(message: _119.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Evidence;
            fromJSON(object: any): _119.Evidence;
            toJSON(message: _119.Evidence): unknown;
            fromPartial(object: Partial<_119.Evidence>): _119.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _119.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.DuplicateVoteEvidence;
            fromJSON(object: any): _119.DuplicateVoteEvidence;
            toJSON(message: _119.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_119.DuplicateVoteEvidence>): _119.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _119.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.LightClientAttackEvidence;
            fromJSON(object: any): _119.LightClientAttackEvidence;
            toJSON(message: _119.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_119.LightClientAttackEvidence>): _119.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _119.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.EvidenceList;
            fromJSON(object: any): _119.EvidenceList;
            toJSON(message: _119.EvidenceList): unknown;
            fromPartial(object: Partial<_119.EvidenceList>): _119.EvidenceList;
        };
        Block: {
            encode(message: _118.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Block;
            fromJSON(object: any): _118.Block;
            toJSON(message: _118.Block): unknown;
            fromPartial(object: Partial<_118.Block>): _118.Block;
        };
    };
    const version: {
        App: {
            encode(message: _123.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.App;
            fromJSON(object: any): _123.App;
            toJSON(message: _123.App): unknown;
            fromPartial(object: Partial<_123.App>): _123.App;
        };
        Consensus: {
            encode(message: _123.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Consensus;
            fromJSON(object: any): _123.Consensus;
            toJSON(message: _123.Consensus): unknown;
            fromPartial(object: Partial<_123.Consensus>): _123.Consensus;
        };
    };
}
