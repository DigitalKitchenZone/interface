import * as _65 from "./protobuf/any";
import * as _66 from "./protobuf/descriptor";
import * as _67 from "./protobuf/duration";
import * as _68 from "./protobuf/empty";
import * as _69 from "./protobuf/timestamp";
export declare namespace google {
    const protobuf: {
        Timestamp: {
            encode(message: _69.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Timestamp;
            fromJSON(object: any): _69.Timestamp;
            toJSON(message: _69.Timestamp): unknown;
            fromPartial(object: {
                seconds?: string | number | import("long");
                nanos?: number;
            }): _69.Timestamp;
        };
        Empty: {
            encode(_: _68.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Empty;
            fromJSON(_: any): _68.Empty;
            toJSON(_: _68.Empty): unknown;
            fromPartial(_: {}): _68.Empty;
        };
        Duration: {
            encode(message: _67.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Duration;
            fromJSON(object: any): _67.Duration;
            toJSON(message: _67.Duration): unknown;
            fromPartial(object: {
                seconds?: string | number | import("long");
                nanos?: number;
            }): _67.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _66.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _66.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _66.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _66.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _66.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _66.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _66.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _66.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _66.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _66.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _66.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _66.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _66.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _66.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _66.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _66.FieldOptions_CType;
        FieldOptions_JSType: typeof _66.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _66.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _66.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.FileDescriptorSet;
            fromJSON(object: any): _66.FileDescriptorSet;
            toJSON(message: _66.FileDescriptorSet): unknown;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    publicDependency?: number[];
                    weakDependency?: number[];
                    messageType?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _66.FieldDescriptorProto_Label;
                            type?: _66.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _66.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _66.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _66.FieldDescriptorProto_Label;
                            type?: _66.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _66.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _66.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        nestedType?: any[];
                        enumType?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: string | number | import("long");
                                        negativeIntValue?: string | number | import("long");
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allowAlias?: boolean;
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            reservedRange?: {
                                start?: number;
                                end?: number;
                            }[];
                            reservedName?: string[];
                        }[];
                        extensionRange?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        oneofDecl?: {
                            name?: string;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            messageSetWireFormat?: boolean;
                            noStandardDescriptorAccessor?: boolean;
                            deprecated?: boolean;
                            mapEntry?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            inputType?: string;
                            outputType?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotencyLevel?: _66.MethodOptions_IdempotencyLevel;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            clientStreaming?: boolean;
                            serverStreaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _66.FieldDescriptorProto_Label;
                        type?: _66.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _66.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _66.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        javaPackage?: string;
                        javaOuterClassname?: string;
                        javaMultipleFiles?: boolean;
                        javaGenerateEqualsAndHash?: boolean;
                        javaStringCheckUtf8?: boolean;
                        optimizeFor?: _66.FileOptions_OptimizeMode;
                        goPackage?: string;
                        ccGenericServices?: boolean;
                        javaGenericServices?: boolean;
                        pyGenericServices?: boolean;
                        phpGenericServices?: boolean;
                        deprecated?: boolean;
                        ccEnableArenas?: boolean;
                        objcClassPrefix?: string;
                        csharpNamespace?: string;
                        swiftPrefix?: string;
                        phpClassPrefix?: string;
                        phpNamespace?: string;
                        phpMetadataNamespace?: string;
                        rubyPackage?: string;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    sourceCodeInfo?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leadingComments?: string;
                            trailingComments?: string;
                            leadingDetachedComments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _66.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _66.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.FileDescriptorProto;
            fromJSON(object: any): _66.FileDescriptorProto;
            toJSON(message: _66.FileDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                publicDependency?: number[];
                weakDependency?: number[];
                messageType?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _66.FieldDescriptorProto_Label;
                        type?: _66.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _66.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _66.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _66.FieldDescriptorProto_Label;
                        type?: _66.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _66.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _66.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    nestedType?: any[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    extensionRange?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    oneofDecl?: {
                        name?: string;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        messageSetWireFormat?: boolean;
                        noStandardDescriptorAccessor?: boolean;
                        deprecated?: boolean;
                        mapEntry?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        inputType?: string;
                        outputType?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotencyLevel?: _66.MethodOptions_IdempotencyLevel;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        clientStreaming?: boolean;
                        serverStreaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _66.FieldDescriptorProto_Label;
                    type?: _66.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _66.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _66.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    javaPackage?: string;
                    javaOuterClassname?: string;
                    javaMultipleFiles?: boolean;
                    javaGenerateEqualsAndHash?: boolean;
                    javaStringCheckUtf8?: boolean;
                    optimizeFor?: _66.FileOptions_OptimizeMode;
                    goPackage?: string;
                    ccGenericServices?: boolean;
                    javaGenericServices?: boolean;
                    pyGenericServices?: boolean;
                    phpGenericServices?: boolean;
                    deprecated?: boolean;
                    ccEnableArenas?: boolean;
                    objcClassPrefix?: string;
                    csharpNamespace?: string;
                    swiftPrefix?: string;
                    phpClassPrefix?: string;
                    phpNamespace?: string;
                    phpMetadataNamespace?: string;
                    rubyPackage?: string;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                sourceCodeInfo?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leadingComments?: string;
                        trailingComments?: string;
                        leadingDetachedComments?: string[];
                    }[];
                };
                syntax?: string;
            }): _66.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _66.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.DescriptorProto;
            fromJSON(object: any): _66.DescriptorProto;
            toJSON(message: _66.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _66.FieldDescriptorProto_Label;
                    type?: _66.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _66.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _66.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _66.FieldDescriptorProto_Label;
                    type?: _66.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _66.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _66.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                nestedType?: any[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                extensionRange?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                oneofDecl?: {
                    name?: string;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    messageSetWireFormat?: boolean;
                    noStandardDescriptorAccessor?: boolean;
                    deprecated?: boolean;
                    mapEntry?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _66.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _66.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _66.DescriptorProto_ExtensionRange;
            toJSON(message: _66.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _66.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _66.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.DescriptorProto_ReservedRange;
            fromJSON(object: any): _66.DescriptorProto_ReservedRange;
            toJSON(message: _66.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _66.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _66.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ExtensionRangeOptions;
            fromJSON(object: any): _66.ExtensionRangeOptions;
            toJSON(message: _66.ExtensionRangeOptions): unknown;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _66.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _66.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.FieldDescriptorProto;
            fromJSON(object: any): _66.FieldDescriptorProto;
            toJSON(message: _66.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _66.FieldDescriptorProto_Label;
                type?: _66.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _66.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _66.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _66.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _66.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.OneofDescriptorProto;
            fromJSON(object: any): _66.OneofDescriptorProto;
            toJSON(message: _66.OneofDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _66.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _66.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EnumDescriptorProto;
            fromJSON(object: any): _66.EnumDescriptorProto;
            toJSON(message: _66.EnumDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    allowAlias?: boolean;
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _66.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _66.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _66.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _66.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _66.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _66.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EnumValueDescriptorProto;
            fromJSON(object: any): _66.EnumValueDescriptorProto;
            toJSON(message: _66.EnumValueDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _66.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _66.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ServiceDescriptorProto;
            fromJSON(object: any): _66.ServiceDescriptorProto;
            toJSON(message: _66.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _66.MethodOptions_IdempotencyLevel;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    clientStreaming?: boolean;
                    serverStreaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _66.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _66.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MethodDescriptorProto;
            fromJSON(object: any): _66.MethodDescriptorProto;
            toJSON(message: _66.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _66.MethodOptions_IdempotencyLevel;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                clientStreaming?: boolean;
                serverStreaming?: boolean;
            }): _66.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _66.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.FileOptions;
            fromJSON(object: any): _66.FileOptions;
            toJSON(message: _66.FileOptions): unknown;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _66.FileOptions_OptimizeMode;
                goPackage?: string;
                ccGenericServices?: boolean;
                javaGenericServices?: boolean;
                pyGenericServices?: boolean;
                phpGenericServices?: boolean;
                deprecated?: boolean;
                ccEnableArenas?: boolean;
                objcClassPrefix?: string;
                csharpNamespace?: string;
                swiftPrefix?: string;
                phpClassPrefix?: string;
                phpNamespace?: string;
                phpMetadataNamespace?: string;
                rubyPackage?: string;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _66.FileOptions;
        };
        MessageOptions: {
            encode(message: _66.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MessageOptions;
            fromJSON(object: any): _66.MessageOptions;
            toJSON(message: _66.MessageOptions): unknown;
            fromPartial(object: {
                messageSetWireFormat?: boolean;
                noStandardDescriptorAccessor?: boolean;
                deprecated?: boolean;
                mapEntry?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _66.MessageOptions;
        };
        FieldOptions: {
            encode(message: _66.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.FieldOptions;
            fromJSON(object: any): _66.FieldOptions;
            toJSON(message: _66.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _66.FieldOptions_CType;
                packed?: boolean;
                jstype?: _66.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _66.FieldOptions;
        };
        OneofOptions: {
            encode(message: _66.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.OneofOptions;
            fromJSON(object: any): _66.OneofOptions;
            toJSON(message: _66.OneofOptions): unknown;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _66.OneofOptions;
        };
        EnumOptions: {
            encode(message: _66.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EnumOptions;
            fromJSON(object: any): _66.EnumOptions;
            toJSON(message: _66.EnumOptions): unknown;
            fromPartial(object: {
                allowAlias?: boolean;
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _66.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _66.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EnumValueOptions;
            fromJSON(object: any): _66.EnumValueOptions;
            toJSON(message: _66.EnumValueOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _66.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _66.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ServiceOptions;
            fromJSON(object: any): _66.ServiceOptions;
            toJSON(message: _66.ServiceOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _66.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _66.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MethodOptions;
            fromJSON(object: any): _66.MethodOptions;
            toJSON(message: _66.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _66.MethodOptions_IdempotencyLevel;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _66.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _66.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.UninterpretedOption;
            fromJSON(object: any): _66.UninterpretedOption;
            toJSON(message: _66.UninterpretedOption): unknown;
            fromPartial(object: {
                name?: {
                    namePart?: string;
                    isExtension?: boolean;
                }[];
                identifierValue?: string;
                positiveIntValue?: string | number | import("long");
                negativeIntValue?: string | number | import("long");
                doubleValue?: number;
                stringValue?: Uint8Array;
                aggregateValue?: string;
            }): _66.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _66.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.UninterpretedOption_NamePart;
            fromJSON(object: any): _66.UninterpretedOption_NamePart;
            toJSON(message: _66.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _66.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _66.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SourceCodeInfo;
            fromJSON(object: any): _66.SourceCodeInfo;
            toJSON(message: _66.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _66.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _66.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SourceCodeInfo_Location;
            fromJSON(object: any): _66.SourceCodeInfo_Location;
            toJSON(message: _66.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _66.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _66.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GeneratedCodeInfo;
            fromJSON(object: any): _66.GeneratedCodeInfo;
            toJSON(message: _66.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _66.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _66.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _66.GeneratedCodeInfo_Annotation;
            toJSON(message: _66.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _66.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _65.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Any;
            fromJSON(object: any): _65.Any;
            toJSON(message: _65.Any): unknown;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _65.Any;
        };
    };
}
