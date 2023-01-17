import * as _87 from "./abci/types";
import * as _88 from "./crypto/keys";
import * as _89 from "./crypto/proof";
import * as _90 from "./libs/bits/types";
import * as _91 from "./p2p/types";
import * as _92 from "./types/block";
import * as _93 from "./types/evidence";
import * as _94 from "./types/params";
import * as _95 from "./types/types";
import * as _96 from "./types/validator";
import * as _97 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _87.CheckTxType;
        checkTxTypeToJSON(object: _87.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _87.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _87.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _87.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _87.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _87.EvidenceType;
        evidenceTypeToJSON(object: _87.EvidenceType): string;
        CheckTxType: typeof _87.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _87.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _87.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _87.EvidenceType;
        Request: {
            encode(message: _87.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Request;
            fromJSON(object: any): _87.Request;
            toJSON(message: _87.Request): unknown;
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
                        type?: _87.EvidenceType;
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
                    type?: _87.CheckTxType;
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
            }): _87.Request;
        };
        RequestEcho: {
            encode(message: _87.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestEcho;
            fromJSON(object: any): _87.RequestEcho;
            toJSON(message: _87.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _87.RequestEcho;
        };
        RequestFlush: {
            encode(_: _87.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestFlush;
            fromJSON(_: any): _87.RequestFlush;
            toJSON(_: _87.RequestFlush): unknown;
            fromPartial(_: {}): _87.RequestFlush;
        };
        RequestInfo: {
            encode(message: _87.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestInfo;
            fromJSON(object: any): _87.RequestInfo;
            toJSON(message: _87.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: string | number | import("long");
                p2pVersion?: string | number | import("long");
            }): _87.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _87.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestSetOption;
            fromJSON(object: any): _87.RequestSetOption;
            toJSON(message: _87.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _87.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _87.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestInitChain;
            fromJSON(object: any): _87.RequestInitChain;
            toJSON(message: _87.RequestInitChain): unknown;
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
            }): _87.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _87.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestQuery;
            fromJSON(object: any): _87.RequestQuery;
            toJSON(message: _87.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long");
                prove?: boolean;
            }): _87.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _87.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestBeginBlock;
            fromJSON(object: any): _87.RequestBeginBlock;
            toJSON(message: _87.RequestBeginBlock): unknown;
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
                    type?: _87.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long");
                    };
                    height?: string | number | import("long");
                    time?: Date;
                    totalVotingPower?: string | number | import("long");
                }[];
            }): _87.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _87.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestCheckTx;
            fromJSON(object: any): _87.RequestCheckTx;
            toJSON(message: _87.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _87.CheckTxType;
            }): _87.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _87.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestDeliverTx;
            fromJSON(object: any): _87.RequestDeliverTx;
            toJSON(message: _87.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _87.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _87.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestEndBlock;
            fromJSON(object: any): _87.RequestEndBlock;
            toJSON(message: _87.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: string | number | import("long");
            }): _87.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _87.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestCommit;
            fromJSON(_: any): _87.RequestCommit;
            toJSON(_: _87.RequestCommit): unknown;
            fromPartial(_: {}): _87.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _87.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestListSnapshots;
            fromJSON(_: any): _87.RequestListSnapshots;
            toJSON(_: _87.RequestListSnapshots): unknown;
            fromPartial(_: {}): _87.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _87.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestOfferSnapshot;
            fromJSON(object: any): _87.RequestOfferSnapshot;
            toJSON(message: _87.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long");
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _87.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _87.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestLoadSnapshotChunk;
            fromJSON(object: any): _87.RequestLoadSnapshotChunk;
            toJSON(message: _87.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: string | number | import("long");
                format?: number;
                chunk?: number;
            }): _87.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _87.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.RequestApplySnapshotChunk;
            fromJSON(object: any): _87.RequestApplySnapshotChunk;
            toJSON(message: _87.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _87.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _87.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Response;
            fromJSON(object: any): _87.Response;
            toJSON(message: _87.Response): unknown;
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
                    result?: _87.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _87.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _87.Response;
        };
        ResponseException: {
            encode(message: _87.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseException;
            fromJSON(object: any): _87.ResponseException;
            toJSON(message: _87.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _87.ResponseException;
        };
        ResponseEcho: {
            encode(message: _87.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseEcho;
            fromJSON(object: any): _87.ResponseEcho;
            toJSON(message: _87.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _87.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _87.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseFlush;
            fromJSON(_: any): _87.ResponseFlush;
            toJSON(_: _87.ResponseFlush): unknown;
            fromPartial(_: {}): _87.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _87.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseInfo;
            fromJSON(object: any): _87.ResponseInfo;
            toJSON(message: _87.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: string | number | import("long");
                lastBlockHeight?: string | number | import("long");
                lastBlockAppHash?: Uint8Array;
            }): _87.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _87.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseSetOption;
            fromJSON(object: any): _87.ResponseSetOption;
            toJSON(message: _87.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _87.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _87.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseInitChain;
            fromJSON(object: any): _87.ResponseInitChain;
            toJSON(message: _87.ResponseInitChain): unknown;
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
            }): _87.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _87.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseQuery;
            fromJSON(object: any): _87.ResponseQuery;
            toJSON(message: _87.ResponseQuery): unknown;
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
            }): _87.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _87.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseBeginBlock;
            fromJSON(object: any): _87.ResponseBeginBlock;
            toJSON(message: _87.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _87.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _87.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseCheckTx;
            fromJSON(object: any): _87.ResponseCheckTx;
            toJSON(message: _87.ResponseCheckTx): unknown;
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
            }): _87.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _87.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseDeliverTx;
            fromJSON(object: any): _87.ResponseDeliverTx;
            toJSON(message: _87.ResponseDeliverTx): unknown;
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
            }): _87.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _87.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseEndBlock;
            fromJSON(object: any): _87.ResponseEndBlock;
            toJSON(message: _87.ResponseEndBlock): unknown;
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
            }): _87.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _87.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseCommit;
            fromJSON(object: any): _87.ResponseCommit;
            toJSON(message: _87.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: string | number | import("long");
            }): _87.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _87.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseListSnapshots;
            fromJSON(object: any): _87.ResponseListSnapshots;
            toJSON(message: _87.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long");
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _87.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _87.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseOfferSnapshot;
            fromJSON(object: any): _87.ResponseOfferSnapshot;
            toJSON(message: _87.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _87.ResponseOfferSnapshot_Result;
            }): _87.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _87.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _87.ResponseLoadSnapshotChunk;
            toJSON(message: _87.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _87.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _87.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ResponseApplySnapshotChunk;
            fromJSON(object: any): _87.ResponseApplySnapshotChunk;
            toJSON(message: _87.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _87.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _87.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _87.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ConsensusParams;
            fromJSON(object: any): _87.ConsensusParams;
            toJSON(message: _87.ConsensusParams): unknown;
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
            }): _87.ConsensusParams;
        };
        BlockParams: {
            encode(message: _87.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.BlockParams;
            fromJSON(object: any): _87.BlockParams;
            toJSON(message: _87.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: string | number | import("long");
                maxGas?: string | number | import("long");
            }): _87.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _87.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.LastCommitInfo;
            fromJSON(object: any): _87.LastCommitInfo;
            toJSON(message: _87.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long");
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _87.LastCommitInfo;
        };
        Event: {
            encode(message: _87.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Event;
            fromJSON(object: any): _87.Event;
            toJSON(message: _87.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _87.Event;
        };
        EventAttribute: {
            encode(message: _87.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.EventAttribute;
            fromJSON(object: any): _87.EventAttribute;
            toJSON(message: _87.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _87.EventAttribute;
        };
        TxResult: {
            encode(message: _87.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.TxResult;
            fromJSON(object: any): _87.TxResult;
            toJSON(message: _87.TxResult): unknown;
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
            }): _87.TxResult;
        };
        Validator: {
            encode(message: _87.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Validator;
            fromJSON(object: any): _87.Validator;
            toJSON(message: _87.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long");
            }): _87.Validator;
        };
        ValidatorUpdate: {
            encode(message: _87.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ValidatorUpdate;
            fromJSON(object: any): _87.ValidatorUpdate;
            toJSON(message: _87.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long");
            }): _87.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _87.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.VoteInfo;
            fromJSON(object: any): _87.VoteInfo;
            toJSON(message: _87.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long");
                };
                signedLastBlock?: boolean;
            }): _87.VoteInfo;
        };
        Evidence: {
            encode(message: _87.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Evidence;
            fromJSON(object: any): _87.Evidence;
            toJSON(message: _87.Evidence): unknown;
            fromPartial(object: {
                type?: _87.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long");
                };
                height?: string | number | import("long");
                time?: Date;
                totalVotingPower?: string | number | import("long");
            }): _87.Evidence;
        };
        Snapshot: {
            encode(message: _87.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Snapshot;
            fromJSON(object: any): _87.Snapshot;
            toJSON(message: _87.Snapshot): unknown;
            fromPartial(object: {
                height?: string | number | import("long");
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _87.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _89.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Proof;
            fromJSON(object: any): _89.Proof;
            toJSON(message: _89.Proof): unknown;
            fromPartial(object: {
                total?: string | number | import("long");
                index?: string | number | import("long");
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _89.Proof;
        };
        ValueOp: {
            encode(message: _89.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ValueOp;
            fromJSON(object: any): _89.ValueOp;
            toJSON(message: _89.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _89.ValueOp;
        };
        DominoOp: {
            encode(message: _89.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.DominoOp;
            fromJSON(object: any): _89.DominoOp;
            toJSON(message: _89.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _89.DominoOp;
        };
        ProofOp: {
            encode(message: _89.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ProofOp;
            fromJSON(object: any): _89.ProofOp;
            toJSON(message: _89.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _89.ProofOp;
        };
        ProofOps: {
            encode(message: _89.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ProofOps;
            fromJSON(object: any): _89.ProofOps;
            toJSON(message: _89.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _89.ProofOps;
        };
        PublicKey: {
            encode(message: _88.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.PublicKey;
            fromJSON(object: any): _88.PublicKey;
            toJSON(message: _88.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _88.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _90.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.BitArray;
                fromJSON(object: any): _90.BitArray;
                toJSON(message: _90.BitArray): unknown;
                fromPartial(object: {
                    bits?: string | number | import("long");
                    elems?: (string | number | import("long"))[];
                }): _90.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _91.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ProtocolVersion;
            fromJSON(object: any): _91.ProtocolVersion;
            toJSON(message: _91.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: string | number | import("long");
                block?: string | number | import("long");
                app?: string | number | import("long");
            }): _91.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _91.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.NodeInfo;
            fromJSON(object: any): _91.NodeInfo;
            toJSON(message: _91.NodeInfo): unknown;
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
            }): _91.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _91.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.NodeInfoOther;
            fromJSON(object: any): _91.NodeInfoOther;
            toJSON(message: _91.NodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _91.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _91.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.PeerInfo;
            fromJSON(object: any): _91.PeerInfo;
            toJSON(message: _91.PeerInfo): unknown;
            fromPartial(object: {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            }): _91.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _91.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.PeerAddressInfo;
            fromJSON(object: any): _91.PeerAddressInfo;
            toJSON(message: _91.PeerAddressInfo): unknown;
            fromPartial(object: {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            }): _91.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _96.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorSet;
            fromJSON(object: any): _96.ValidatorSet;
            toJSON(message: _96.ValidatorSet): unknown;
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
            }): _96.ValidatorSet;
        };
        Validator: {
            encode(message: _96.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Validator;
            fromJSON(object: any): _96.Validator;
            toJSON(message: _96.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long");
                proposerPriority?: string | number | import("long");
            }): _96.Validator;
        };
        SimpleValidator: {
            encode(message: _96.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SimpleValidator;
            fromJSON(object: any): _96.SimpleValidator;
            toJSON(message: _96.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long");
            }): _96.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _95.BlockIDFlag;
        blockIDFlagToJSON(object: _95.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _95.SignedMsgType;
        signedMsgTypeToJSON(object: _95.SignedMsgType): string;
        BlockIDFlag: typeof _95.BlockIDFlag;
        SignedMsgType: typeof _95.SignedMsgType;
        PartSetHeader: {
            encode(message: _95.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.PartSetHeader;
            fromJSON(object: any): _95.PartSetHeader;
            toJSON(message: _95.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _95.PartSetHeader;
        };
        Part: {
            encode(message: _95.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Part;
            fromJSON(object: any): _95.Part;
            toJSON(message: _95.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _95.Part;
        };
        BlockID: {
            encode(message: _95.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.BlockID;
            fromJSON(object: any): _95.BlockID;
            toJSON(message: _95.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _95.BlockID;
        };
        Header: {
            encode(message: _95.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Header;
            fromJSON(object: any): _95.Header;
            toJSON(message: _95.Header): unknown;
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
            }): _95.Header;
        };
        Data: {
            encode(message: _95.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Data;
            fromJSON(object: any): _95.Data;
            toJSON(message: _95.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _95.Data;
        };
        Vote: {
            encode(message: _95.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Vote;
            fromJSON(object: any): _95.Vote;
            toJSON(message: _95.Vote): unknown;
            fromPartial(object: {
                type?: _95.SignedMsgType;
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
            }): _95.Vote;
        };
        Commit: {
            encode(message: _95.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Commit;
            fromJSON(object: any): _95.Commit;
            toJSON(message: _95.Commit): unknown;
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
                    blockIdFlag?: _95.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _95.Commit;
        };
        CommitSig: {
            encode(message: _95.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.CommitSig;
            fromJSON(object: any): _95.CommitSig;
            toJSON(message: _95.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _95.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _95.CommitSig;
        };
        Proposal: {
            encode(message: _95.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Proposal;
            fromJSON(object: any): _95.Proposal;
            toJSON(message: _95.Proposal): unknown;
            fromPartial(object: {
                type?: _95.SignedMsgType;
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
            }): _95.Proposal;
        };
        SignedHeader: {
            encode(message: _95.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignedHeader;
            fromJSON(object: any): _95.SignedHeader;
            toJSON(message: _95.SignedHeader): unknown;
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
                        blockIdFlag?: _95.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _95.SignedHeader;
        };
        LightBlock: {
            encode(message: _95.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.LightBlock;
            fromJSON(object: any): _95.LightBlock;
            toJSON(message: _95.LightBlock): unknown;
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
                            blockIdFlag?: _95.BlockIDFlag;
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
            }): _95.LightBlock;
        };
        BlockMeta: {
            encode(message: _95.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.BlockMeta;
            fromJSON(object: any): _95.BlockMeta;
            toJSON(message: _95.BlockMeta): unknown;
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
            }): _95.BlockMeta;
        };
        TxProof: {
            encode(message: _95.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.TxProof;
            fromJSON(object: any): _95.TxProof;
            toJSON(message: _95.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _95.TxProof;
        };
        ConsensusParams: {
            encode(message: _94.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ConsensusParams;
            fromJSON(object: any): _94.ConsensusParams;
            toJSON(message: _94.ConsensusParams): unknown;
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
            }): _94.ConsensusParams;
        };
        BlockParams: {
            encode(message: _94.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.BlockParams;
            fromJSON(object: any): _94.BlockParams;
            toJSON(message: _94.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: string | number | import("long");
                maxGas?: string | number | import("long");
                timeIotaMs?: string | number | import("long");
            }): _94.BlockParams;
        };
        EvidenceParams: {
            encode(message: _94.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.EvidenceParams;
            fromJSON(object: any): _94.EvidenceParams;
            toJSON(message: _94.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long");
                maxAgeDuration?: {
                    seconds?: string | number | import("long");
                    nanos?: number;
                };
                maxBytes?: string | number | import("long");
            }): _94.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _94.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ValidatorParams;
            fromJSON(object: any): _94.ValidatorParams;
            toJSON(message: _94.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _94.ValidatorParams;
        };
        VersionParams: {
            encode(message: _94.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.VersionParams;
            fromJSON(object: any): _94.VersionParams;
            toJSON(message: _94.VersionParams): unknown;
            fromPartial(object: {
                appVersion?: string | number | import("long");
            }): _94.VersionParams;
        };
        HashedParams: {
            encode(message: _94.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.HashedParams;
            fromJSON(object: any): _94.HashedParams;
            toJSON(message: _94.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long");
                blockMaxGas?: string | number | import("long");
            }): _94.HashedParams;
        };
        Evidence: {
            encode(message: _93.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Evidence;
            fromJSON(object: any): _93.Evidence;
            toJSON(message: _93.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _95.SignedMsgType;
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
                        type?: _95.SignedMsgType;
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
                                    blockIdFlag?: _95.BlockIDFlag;
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
            }): _93.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _93.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DuplicateVoteEvidence;
            fromJSON(object: any): _93.DuplicateVoteEvidence;
            toJSON(message: _93.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _95.SignedMsgType;
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
                    type?: _95.SignedMsgType;
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
            }): _93.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _93.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.LightClientAttackEvidence;
            fromJSON(object: any): _93.LightClientAttackEvidence;
            toJSON(message: _93.LightClientAttackEvidence): unknown;
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
                                blockIdFlag?: _95.BlockIDFlag;
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
            }): _93.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _93.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.EvidenceList;
            fromJSON(object: any): _93.EvidenceList;
            toJSON(message: _93.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _95.SignedMsgType;
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
                            type?: _95.SignedMsgType;
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
                                        blockIdFlag?: _95.BlockIDFlag;
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
            }): _93.EvidenceList;
        };
        Block: {
            encode(message: _92.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Block;
            fromJSON(object: any): _92.Block;
            toJSON(message: _92.Block): unknown;
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
                                type?: _95.SignedMsgType;
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
                                type?: _95.SignedMsgType;
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
                                            blockIdFlag?: _95.BlockIDFlag;
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
                        blockIdFlag?: _95.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _92.Block;
        };
    };
    const version: {
        App: {
            encode(message: _97.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.App;
            fromJSON(object: any): _97.App;
            toJSON(message: _97.App): unknown;
            fromPartial(object: {
                protocol?: string | number | import("long");
                software?: string;
            }): _97.App;
        };
        Consensus: {
            encode(message: _97.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Consensus;
            fromJSON(object: any): _97.Consensus;
            toJSON(message: _97.Consensus): unknown;
            fromPartial(object: {
                block?: string | number | import("long");
                app?: string | number | import("long");
            }): _97.Consensus;
        };
    };
}
