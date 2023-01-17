import * as _92 from "./abci/types";
import * as _93 from "./crypto/keys";
import * as _94 from "./crypto/proof";
import * as _95 from "./libs/bits/types";
import * as _96 from "./p2p/types";
import * as _97 from "./types/block";
import * as _98 from "./types/evidence";
import * as _99 from "./types/params";
import * as _100 from "./types/types";
import * as _101 from "./types/validator";
import * as _102 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _92.CheckTxType;
        checkTxTypeToJSON(object: _92.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _92.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _92.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _92.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _92.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _92.EvidenceType;
        evidenceTypeToJSON(object: _92.EvidenceType): string;
        CheckTxType: typeof _92.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _92.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _92.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _92.EvidenceType;
        Request: {
            encode(message: _92.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Request;
            fromJSON(object: any): _92.Request;
            toJSON(message: _92.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: string | number | import("long");
                    p2pVersion?: string | number | import("long");
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long");
                            maxGas?: string | number | import("long");
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long");
                            maxAgeDuration?: {
                                seconds?: string | number | import("long");
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long");
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long");
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long");
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: string | number | import("long");
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: string | number | import("long");
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
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
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string | number | import("long");
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _92.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long");
                        };
                        height?: string | number | import("long");
                        time?: Date;
                        totalVotingPower?: string | number | import("long");
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _92.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: string | number | import("long");
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: string | number | import("long");
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: string | number | import("long");
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _92.Request;
        };
        RequestEcho: {
            encode(message: _92.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestEcho;
            fromJSON(object: any): _92.RequestEcho;
            toJSON(message: _92.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _92.RequestEcho;
        };
        RequestFlush: {
            encode(_: _92.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestFlush;
            fromJSON(_: any): _92.RequestFlush;
            toJSON(_: _92.RequestFlush): unknown;
            fromPartial(_: {}): _92.RequestFlush;
        };
        RequestInfo: {
            encode(message: _92.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestInfo;
            fromJSON(object: any): _92.RequestInfo;
            toJSON(message: _92.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: string | number | import("long");
                p2pVersion?: string | number | import("long");
            }): _92.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _92.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestSetOption;
            fromJSON(object: any): _92.RequestSetOption;
            toJSON(message: _92.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _92.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _92.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestInitChain;
            fromJSON(object: any): _92.RequestInitChain;
            toJSON(message: _92.RequestInitChain): unknown;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long");
                        maxGas?: string | number | import("long");
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long");
                        maxAgeDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long");
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long");
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long");
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: string | number | import("long");
            }): _92.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _92.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestQuery;
            fromJSON(object: any): _92.RequestQuery;
            toJSON(message: _92.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long");
                prove?: boolean;
            }): _92.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _92.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestBeginBlock;
            fromJSON(object: any): _92.RequestBeginBlock;
            toJSON(message: _92.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
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
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long");
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _92.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long");
                    };
                    height?: string | number | import("long");
                    time?: Date;
                    totalVotingPower?: string | number | import("long");
                }[];
            }): _92.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _92.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestCheckTx;
            fromJSON(object: any): _92.RequestCheckTx;
            toJSON(message: _92.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _92.CheckTxType;
            }): _92.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _92.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestDeliverTx;
            fromJSON(object: any): _92.RequestDeliverTx;
            toJSON(message: _92.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _92.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _92.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestEndBlock;
            fromJSON(object: any): _92.RequestEndBlock;
            toJSON(message: _92.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: string | number | import("long");
            }): _92.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _92.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestCommit;
            fromJSON(_: any): _92.RequestCommit;
            toJSON(_: _92.RequestCommit): unknown;
            fromPartial(_: {}): _92.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _92.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestListSnapshots;
            fromJSON(_: any): _92.RequestListSnapshots;
            toJSON(_: _92.RequestListSnapshots): unknown;
            fromPartial(_: {}): _92.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _92.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestOfferSnapshot;
            fromJSON(object: any): _92.RequestOfferSnapshot;
            toJSON(message: _92.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long");
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _92.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _92.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestLoadSnapshotChunk;
            fromJSON(object: any): _92.RequestLoadSnapshotChunk;
            toJSON(message: _92.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: string | number | import("long");
                format?: number;
                chunk?: number;
            }): _92.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _92.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.RequestApplySnapshotChunk;
            fromJSON(object: any): _92.RequestApplySnapshotChunk;
            toJSON(message: _92.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _92.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _92.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Response;
            fromJSON(object: any): _92.Response;
            toJSON(message: _92.Response): unknown;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: string | number | import("long");
                    lastBlockHeight?: string | number | import("long");
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long");
                            maxGas?: string | number | import("long");
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long");
                            maxAgeDuration?: {
                                seconds?: string | number | import("long");
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long");
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long");
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long");
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: string | number | import("long");
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string | number | import("long");
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long");
                    gasUsed?: string | number | import("long");
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long");
                    gasUsed?: string | number | import("long");
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long");
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: string | number | import("long");
                            maxGas?: string | number | import("long");
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long");
                            maxAgeDuration?: {
                                seconds?: string | number | import("long");
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long");
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long");
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: string | number | import("long");
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: string | number | import("long");
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _92.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _92.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _92.Response;
        };
        ResponseException: {
            encode(message: _92.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseException;
            fromJSON(object: any): _92.ResponseException;
            toJSON(message: _92.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _92.ResponseException;
        };
        ResponseEcho: {
            encode(message: _92.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseEcho;
            fromJSON(object: any): _92.ResponseEcho;
            toJSON(message: _92.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _92.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _92.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseFlush;
            fromJSON(_: any): _92.ResponseFlush;
            toJSON(_: _92.ResponseFlush): unknown;
            fromPartial(_: {}): _92.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _92.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseInfo;
            fromJSON(object: any): _92.ResponseInfo;
            toJSON(message: _92.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: string | number | import("long");
                lastBlockHeight?: string | number | import("long");
                lastBlockAppHash?: Uint8Array;
            }): _92.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _92.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseSetOption;
            fromJSON(object: any): _92.ResponseSetOption;
            toJSON(message: _92.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _92.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _92.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseInitChain;
            fromJSON(object: any): _92.ResponseInitChain;
            toJSON(message: _92.ResponseInitChain): unknown;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long");
                        maxGas?: string | number | import("long");
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long");
                        maxAgeDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long");
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long");
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long");
                }[];
                appHash?: Uint8Array;
            }): _92.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _92.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseQuery;
            fromJSON(object: any): _92.ResponseQuery;
            toJSON(message: _92.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: string | number | import("long");
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: string | number | import("long");
                codespace?: string;
            }): _92.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _92.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseBeginBlock;
            fromJSON(object: any): _92.ResponseBeginBlock;
            toJSON(message: _92.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _92.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _92.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseCheckTx;
            fromJSON(object: any): _92.ResponseCheckTx;
            toJSON(message: _92.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long");
                gasUsed?: string | number | import("long");
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _92.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _92.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseDeliverTx;
            fromJSON(object: any): _92.ResponseDeliverTx;
            toJSON(message: _92.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long");
                gasUsed?: string | number | import("long");
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _92.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _92.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseEndBlock;
            fromJSON(object: any): _92.ResponseEndBlock;
            toJSON(message: _92.ResponseEndBlock): unknown;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long");
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: string | number | import("long");
                        maxGas?: string | number | import("long");
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long");
                        maxAgeDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long");
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long");
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _92.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _92.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseCommit;
            fromJSON(object: any): _92.ResponseCommit;
            toJSON(message: _92.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: string | number | import("long");
            }): _92.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _92.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseListSnapshots;
            fromJSON(object: any): _92.ResponseListSnapshots;
            toJSON(message: _92.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long");
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _92.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _92.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseOfferSnapshot;
            fromJSON(object: any): _92.ResponseOfferSnapshot;
            toJSON(message: _92.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _92.ResponseOfferSnapshot_Result;
            }): _92.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _92.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _92.ResponseLoadSnapshotChunk;
            toJSON(message: _92.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _92.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _92.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ResponseApplySnapshotChunk;
            fromJSON(object: any): _92.ResponseApplySnapshotChunk;
            toJSON(message: _92.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _92.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _92.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _92.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ConsensusParams;
            fromJSON(object: any): _92.ConsensusParams;
            toJSON(message: _92.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long");
                    maxGas?: string | number | import("long");
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long");
                    maxAgeDuration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long");
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long");
                };
            }): _92.ConsensusParams;
        };
        BlockParams: {
            encode(message: _92.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.BlockParams;
            fromJSON(object: any): _92.BlockParams;
            toJSON(message: _92.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: string | number | import("long");
                maxGas?: string | number | import("long");
            }): _92.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _92.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.LastCommitInfo;
            fromJSON(object: any): _92.LastCommitInfo;
            toJSON(message: _92.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long");
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _92.LastCommitInfo;
        };
        Event: {
            encode(message: _92.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Event;
            fromJSON(object: any): _92.Event;
            toJSON(message: _92.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _92.Event;
        };
        EventAttribute: {
            encode(message: _92.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.EventAttribute;
            fromJSON(object: any): _92.EventAttribute;
            toJSON(message: _92.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _92.EventAttribute;
        };
        TxResult: {
            encode(message: _92.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.TxResult;
            fromJSON(object: any): _92.TxResult;
            toJSON(message: _92.TxResult): unknown;
            fromPartial(object: {
                height?: string | number | import("long");
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long");
                    gasUsed?: string | number | import("long");
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _92.TxResult;
        };
        Validator: {
            encode(message: _92.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Validator;
            fromJSON(object: any): _92.Validator;
            toJSON(message: _92.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long");
            }): _92.Validator;
        };
        ValidatorUpdate: {
            encode(message: _92.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ValidatorUpdate;
            fromJSON(object: any): _92.ValidatorUpdate;
            toJSON(message: _92.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long");
            }): _92.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _92.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.VoteInfo;
            fromJSON(object: any): _92.VoteInfo;
            toJSON(message: _92.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long");
                };
                signedLastBlock?: boolean;
            }): _92.VoteInfo;
        };
        Evidence: {
            encode(message: _92.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Evidence;
            fromJSON(object: any): _92.Evidence;
            toJSON(message: _92.Evidence): unknown;
            fromPartial(object: {
                type?: _92.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long");
                };
                height?: string | number | import("long");
                time?: Date;
                totalVotingPower?: string | number | import("long");
            }): _92.Evidence;
        };
        Snapshot: {
            encode(message: _92.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Snapshot;
            fromJSON(object: any): _92.Snapshot;
            toJSON(message: _92.Snapshot): unknown;
            fromPartial(object: {
                height?: string | number | import("long");
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _92.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _94.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Proof;
            fromJSON(object: any): _94.Proof;
            toJSON(message: _94.Proof): unknown;
            fromPartial(object: {
                total?: string | number | import("long");
                index?: string | number | import("long");
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _94.Proof;
        };
        ValueOp: {
            encode(message: _94.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ValueOp;
            fromJSON(object: any): _94.ValueOp;
            toJSON(message: _94.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _94.ValueOp;
        };
        DominoOp: {
            encode(message: _94.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.DominoOp;
            fromJSON(object: any): _94.DominoOp;
            toJSON(message: _94.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _94.DominoOp;
        };
        ProofOp: {
            encode(message: _94.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ProofOp;
            fromJSON(object: any): _94.ProofOp;
            toJSON(message: _94.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _94.ProofOp;
        };
        ProofOps: {
            encode(message: _94.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ProofOps;
            fromJSON(object: any): _94.ProofOps;
            toJSON(message: _94.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _94.ProofOps;
        };
        PublicKey: {
            encode(message: _93.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PublicKey;
            fromJSON(object: any): _93.PublicKey;
            toJSON(message: _93.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _93.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _95.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.BitArray;
                fromJSON(object: any): _95.BitArray;
                toJSON(message: _95.BitArray): unknown;
                fromPartial(object: {
                    bits?: string | number | import("long");
                    elems?: (string | number | import("long"))[];
                }): _95.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _96.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ProtocolVersion;
            fromJSON(object: any): _96.ProtocolVersion;
            toJSON(message: _96.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: string | number | import("long");
                block?: string | number | import("long");
                app?: string | number | import("long");
            }): _96.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _96.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.NodeInfo;
            fromJSON(object: any): _96.NodeInfo;
            toJSON(message: _96.NodeInfo): unknown;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: string | number | import("long");
                    block?: string | number | import("long");
                    app?: string | number | import("long");
                };
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _96.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _96.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.NodeInfoOther;
            fromJSON(object: any): _96.NodeInfoOther;
            toJSON(message: _96.NodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _96.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _96.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.PeerInfo;
            fromJSON(object: any): _96.PeerInfo;
            toJSON(message: _96.PeerInfo): unknown;
            fromPartial(object: {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            }): _96.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _96.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.PeerAddressInfo;
            fromJSON(object: any): _96.PeerAddressInfo;
            toJSON(message: _96.PeerAddressInfo): unknown;
            fromPartial(object: {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            }): _96.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _101.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ValidatorSet;
            fromJSON(object: any): _101.ValidatorSet;
            toJSON(message: _101.ValidatorSet): unknown;
            fromPartial(object: {
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
            }): _101.ValidatorSet;
        };
        Validator: {
            encode(message: _101.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Validator;
            fromJSON(object: any): _101.Validator;
            toJSON(message: _101.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long");
                proposerPriority?: string | number | import("long");
            }): _101.Validator;
        };
        SimpleValidator: {
            encode(message: _101.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.SimpleValidator;
            fromJSON(object: any): _101.SimpleValidator;
            toJSON(message: _101.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long");
            }): _101.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _100.BlockIDFlag;
        blockIDFlagToJSON(object: _100.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _100.SignedMsgType;
        signedMsgTypeToJSON(object: _100.SignedMsgType): string;
        BlockIDFlag: typeof _100.BlockIDFlag;
        SignedMsgType: typeof _100.SignedMsgType;
        PartSetHeader: {
            encode(message: _100.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.PartSetHeader;
            fromJSON(object: any): _100.PartSetHeader;
            toJSON(message: _100.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _100.PartSetHeader;
        };
        Part: {
            encode(message: _100.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Part;
            fromJSON(object: any): _100.Part;
            toJSON(message: _100.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _100.Part;
        };
        BlockID: {
            encode(message: _100.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.BlockID;
            fromJSON(object: any): _100.BlockID;
            toJSON(message: _100.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _100.BlockID;
        };
        Header: {
            encode(message: _100.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Header;
            fromJSON(object: any): _100.Header;
            toJSON(message: _100.Header): unknown;
            fromPartial(object: {
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
            }): _100.Header;
        };
        Data: {
            encode(message: _100.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Data;
            fromJSON(object: any): _100.Data;
            toJSON(message: _100.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _100.Data;
        };
        Vote: {
            encode(message: _100.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Vote;
            fromJSON(object: any): _100.Vote;
            toJSON(message: _100.Vote): unknown;
            fromPartial(object: {
                type?: _100.SignedMsgType;
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
            }): _100.Vote;
        };
        Commit: {
            encode(message: _100.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Commit;
            fromJSON(object: any): _100.Commit;
            toJSON(message: _100.Commit): unknown;
            fromPartial(object: {
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
                    blockIdFlag?: _100.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _100.Commit;
        };
        CommitSig: {
            encode(message: _100.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.CommitSig;
            fromJSON(object: any): _100.CommitSig;
            toJSON(message: _100.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _100.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _100.CommitSig;
        };
        Proposal: {
            encode(message: _100.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Proposal;
            fromJSON(object: any): _100.Proposal;
            toJSON(message: _100.Proposal): unknown;
            fromPartial(object: {
                type?: _100.SignedMsgType;
                height?: string | number | import("long");
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _100.Proposal;
        };
        SignedHeader: {
            encode(message: _100.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.SignedHeader;
            fromJSON(object: any): _100.SignedHeader;
            toJSON(message: _100.SignedHeader): unknown;
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
                        blockIdFlag?: _100.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _100.SignedHeader;
        };
        LightBlock: {
            encode(message: _100.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.LightBlock;
            fromJSON(object: any): _100.LightBlock;
            toJSON(message: _100.LightBlock): unknown;
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
                            blockIdFlag?: _100.BlockIDFlag;
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
            }): _100.LightBlock;
        };
        BlockMeta: {
            encode(message: _100.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.BlockMeta;
            fromJSON(object: any): _100.BlockMeta;
            toJSON(message: _100.BlockMeta): unknown;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: string | number | import("long");
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
                numTxs?: string | number | import("long");
            }): _100.BlockMeta;
        };
        TxProof: {
            encode(message: _100.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.TxProof;
            fromJSON(object: any): _100.TxProof;
            toJSON(message: _100.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _100.TxProof;
        };
        ConsensusParams: {
            encode(message: _99.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ConsensusParams;
            fromJSON(object: any): _99.ConsensusParams;
            toJSON(message: _99.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long");
                    maxGas?: string | number | import("long");
                    timeIotaMs?: string | number | import("long");
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long");
                    maxAgeDuration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long");
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long");
                };
            }): _99.ConsensusParams;
        };
        BlockParams: {
            encode(message: _99.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.BlockParams;
            fromJSON(object: any): _99.BlockParams;
            toJSON(message: _99.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: string | number | import("long");
                maxGas?: string | number | import("long");
                timeIotaMs?: string | number | import("long");
            }): _99.BlockParams;
        };
        EvidenceParams: {
            encode(message: _99.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EvidenceParams;
            fromJSON(object: any): _99.EvidenceParams;
            toJSON(message: _99.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long");
                maxAgeDuration?: {
                    seconds?: string | number | import("long");
                    nanos?: number;
                };
                maxBytes?: string | number | import("long");
            }): _99.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _99.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ValidatorParams;
            fromJSON(object: any): _99.ValidatorParams;
            toJSON(message: _99.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _99.ValidatorParams;
        };
        VersionParams: {
            encode(message: _99.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.VersionParams;
            fromJSON(object: any): _99.VersionParams;
            toJSON(message: _99.VersionParams): unknown;
            fromPartial(object: {
                appVersion?: string | number | import("long");
            }): _99.VersionParams;
        };
        HashedParams: {
            encode(message: _99.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.HashedParams;
            fromJSON(object: any): _99.HashedParams;
            toJSON(message: _99.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long");
                blockMaxGas?: string | number | import("long");
            }): _99.HashedParams;
        };
        Evidence: {
            encode(message: _98.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Evidence;
            fromJSON(object: any): _98.Evidence;
            toJSON(message: _98.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _100.SignedMsgType;
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
                        type?: _100.SignedMsgType;
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
                                    blockIdFlag?: _100.BlockIDFlag;
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
            }): _98.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _98.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.DuplicateVoteEvidence;
            fromJSON(object: any): _98.DuplicateVoteEvidence;
            toJSON(message: _98.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _100.SignedMsgType;
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
                    type?: _100.SignedMsgType;
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
            }): _98.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _98.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.LightClientAttackEvidence;
            fromJSON(object: any): _98.LightClientAttackEvidence;
            toJSON(message: _98.LightClientAttackEvidence): unknown;
            fromPartial(object: {
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
                                blockIdFlag?: _100.BlockIDFlag;
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
            }): _98.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _98.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.EvidenceList;
            fromJSON(object: any): _98.EvidenceList;
            toJSON(message: _98.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _100.SignedMsgType;
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
                            type?: _100.SignedMsgType;
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
                                        blockIdFlag?: _100.BlockIDFlag;
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
            }): _98.EvidenceList;
        };
        Block: {
            encode(message: _97.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Block;
            fromJSON(object: any): _97.Block;
            toJSON(message: _97.Block): unknown;
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
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _100.SignedMsgType;
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
                                type?: _100.SignedMsgType;
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
                                            blockIdFlag?: _100.BlockIDFlag;
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
                        blockIdFlag?: _100.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _97.Block;
        };
    };
    const version: {
        App: {
            encode(message: _102.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.App;
            fromJSON(object: any): _102.App;
            toJSON(message: _102.App): unknown;
            fromPartial(object: {
                protocol?: string | number | import("long");
                software?: string;
            }): _102.App;
        };
        Consensus: {
            encode(message: _102.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Consensus;
            fromJSON(object: any): _102.Consensus;
            toJSON(message: _102.Consensus): unknown;
            fromPartial(object: {
                block?: string | number | import("long");
                app?: string | number | import("long");
            }): _102.Consensus;
        };
    };
}
