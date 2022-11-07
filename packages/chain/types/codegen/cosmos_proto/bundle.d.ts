import * as _12 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _12.ScalarType;
    scalarTypeToJSON(object: _12.ScalarType): string;
    ScalarType: typeof _12.ScalarType;
    ScalarTypeSDKType: typeof _12.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _12.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.InterfaceDescriptor;
        fromJSON(object: any): _12.InterfaceDescriptor;
        toJSON(message: _12.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_12.InterfaceDescriptor>): _12.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _12.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ScalarDescriptor;
        fromJSON(object: any): _12.ScalarDescriptor;
        toJSON(message: _12.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_12.ScalarDescriptor>): _12.ScalarDescriptor;
    };
};
