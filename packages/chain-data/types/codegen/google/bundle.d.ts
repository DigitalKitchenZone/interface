import * as _107 from "./api/http";
import * as _108 from "./protobuf/any";
import * as _109 from "./protobuf/descriptor";
import * as _110 from "./protobuf/duration";
import * as _111 from "./protobuf/empty";
import * as _112 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _107.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Http;
            fromJSON(object: any): _107.Http;
            toJSON(message: _107.Http): unknown;
            fromPartial(object: Partial<_107.Http>): _107.Http;
        };
        HttpRule: {
            encode(message: _107.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.HttpRule;
            fromJSON(object: any): _107.HttpRule;
            toJSON(message: _107.HttpRule): unknown;
            fromPartial(object: Partial<_107.HttpRule>): _107.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _107.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.CustomHttpPattern;
            fromJSON(object: any): _107.CustomHttpPattern;
            toJSON(message: _107.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_107.CustomHttpPattern>): _107.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _112.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Timestamp;
            fromJSON(object: any): _112.Timestamp;
            toJSON(message: _112.Timestamp): unknown;
            fromPartial(object: Partial<_112.Timestamp>): _112.Timestamp;
        };
        Empty: {
            encode(_: _111.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Empty;
            fromJSON(_: any): _111.Empty;
            toJSON(_: _111.Empty): unknown;
            fromPartial(_: Partial<_111.Empty>): _111.Empty;
        };
        Duration: {
            encode(message: _110.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Duration;
            fromJSON(object: any): _110.Duration;
            toJSON(message: _110.Duration): unknown;
            fromPartial(object: Partial<_110.Duration>): _110.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _109.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _109.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _109.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _109.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _109.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _109.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _109.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _109.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _109.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _109.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _109.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _109.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _109.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _109.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _109.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _109.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _109.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _109.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _109.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _109.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _109.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _109.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _109.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _109.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _109.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.FileDescriptorSet;
            fromJSON(object: any): _109.FileDescriptorSet;
            toJSON(message: _109.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_109.FileDescriptorSet>): _109.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _109.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.FileDescriptorProto;
            fromJSON(object: any): _109.FileDescriptorProto;
            toJSON(message: _109.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_109.FileDescriptorProto>): _109.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _109.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.DescriptorProto;
            fromJSON(object: any): _109.DescriptorProto;
            toJSON(message: _109.DescriptorProto): unknown;
            fromPartial(object: Partial<_109.DescriptorProto>): _109.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _109.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _109.DescriptorProto_ExtensionRange;
            toJSON(message: _109.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_109.DescriptorProto_ExtensionRange>): _109.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _109.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.DescriptorProto_ReservedRange;
            fromJSON(object: any): _109.DescriptorProto_ReservedRange;
            toJSON(message: _109.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_109.DescriptorProto_ReservedRange>): _109.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _109.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ExtensionRangeOptions;
            fromJSON(object: any): _109.ExtensionRangeOptions;
            toJSON(message: _109.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_109.ExtensionRangeOptions>): _109.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _109.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.FieldDescriptorProto;
            fromJSON(object: any): _109.FieldDescriptorProto;
            toJSON(message: _109.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_109.FieldDescriptorProto>): _109.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _109.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.OneofDescriptorProto;
            fromJSON(object: any): _109.OneofDescriptorProto;
            toJSON(message: _109.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_109.OneofDescriptorProto>): _109.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _109.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.EnumDescriptorProto;
            fromJSON(object: any): _109.EnumDescriptorProto;
            toJSON(message: _109.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_109.EnumDescriptorProto>): _109.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _109.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _109.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _109.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_109.EnumDescriptorProto_EnumReservedRange>): _109.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _109.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.EnumValueDescriptorProto;
            fromJSON(object: any): _109.EnumValueDescriptorProto;
            toJSON(message: _109.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_109.EnumValueDescriptorProto>): _109.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _109.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ServiceDescriptorProto;
            fromJSON(object: any): _109.ServiceDescriptorProto;
            toJSON(message: _109.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_109.ServiceDescriptorProto>): _109.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _109.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MethodDescriptorProto;
            fromJSON(object: any): _109.MethodDescriptorProto;
            toJSON(message: _109.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_109.MethodDescriptorProto>): _109.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _109.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.FileOptions;
            fromJSON(object: any): _109.FileOptions;
            toJSON(message: _109.FileOptions): unknown;
            fromPartial(object: Partial<_109.FileOptions>): _109.FileOptions;
        };
        MessageOptions: {
            encode(message: _109.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MessageOptions;
            fromJSON(object: any): _109.MessageOptions;
            toJSON(message: _109.MessageOptions): unknown;
            fromPartial(object: Partial<_109.MessageOptions>): _109.MessageOptions;
        };
        FieldOptions: {
            encode(message: _109.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.FieldOptions;
            fromJSON(object: any): _109.FieldOptions;
            toJSON(message: _109.FieldOptions): unknown;
            fromPartial(object: Partial<_109.FieldOptions>): _109.FieldOptions;
        };
        OneofOptions: {
            encode(message: _109.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.OneofOptions;
            fromJSON(object: any): _109.OneofOptions;
            toJSON(message: _109.OneofOptions): unknown;
            fromPartial(object: Partial<_109.OneofOptions>): _109.OneofOptions;
        };
        EnumOptions: {
            encode(message: _109.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.EnumOptions;
            fromJSON(object: any): _109.EnumOptions;
            toJSON(message: _109.EnumOptions): unknown;
            fromPartial(object: Partial<_109.EnumOptions>): _109.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _109.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.EnumValueOptions;
            fromJSON(object: any): _109.EnumValueOptions;
            toJSON(message: _109.EnumValueOptions): unknown;
            fromPartial(object: Partial<_109.EnumValueOptions>): _109.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _109.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ServiceOptions;
            fromJSON(object: any): _109.ServiceOptions;
            toJSON(message: _109.ServiceOptions): unknown;
            fromPartial(object: Partial<_109.ServiceOptions>): _109.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _109.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MethodOptions;
            fromJSON(object: any): _109.MethodOptions;
            toJSON(message: _109.MethodOptions): unknown;
            fromPartial(object: Partial<_109.MethodOptions>): _109.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _109.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.UninterpretedOption;
            fromJSON(object: any): _109.UninterpretedOption;
            toJSON(message: _109.UninterpretedOption): unknown;
            fromPartial(object: Partial<_109.UninterpretedOption>): _109.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _109.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.UninterpretedOption_NamePart;
            fromJSON(object: any): _109.UninterpretedOption_NamePart;
            toJSON(message: _109.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_109.UninterpretedOption_NamePart>): _109.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _109.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SourceCodeInfo;
            fromJSON(object: any): _109.SourceCodeInfo;
            toJSON(message: _109.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_109.SourceCodeInfo>): _109.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _109.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SourceCodeInfo_Location;
            fromJSON(object: any): _109.SourceCodeInfo_Location;
            toJSON(message: _109.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_109.SourceCodeInfo_Location>): _109.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _109.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GeneratedCodeInfo;
            fromJSON(object: any): _109.GeneratedCodeInfo;
            toJSON(message: _109.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_109.GeneratedCodeInfo>): _109.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _109.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _109.GeneratedCodeInfo_Annotation;
            toJSON(message: _109.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_109.GeneratedCodeInfo_Annotation>): _109.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _108.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Any;
            fromJSON(object: any): _108.Any;
            toJSON(message: _108.Any): unknown;
            fromPartial(object: Partial<_108.Any>): _108.Any;
        };
    };
}
