import * as _13 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _13.ScalarType;
    scalarTypeToJSON(object: _13.ScalarType): string;
    ScalarType: typeof _13.ScalarType;
    ScalarTypeSDKType: typeof _13.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _13.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.InterfaceDescriptor;
        fromJSON(object: any): _13.InterfaceDescriptor;
        toJSON(message: _13.InterfaceDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _13.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _13.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.ScalarDescriptor;
        fromJSON(object: any): _13.ScalarDescriptor;
        toJSON(message: _13.ScalarDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _13.ScalarType[];
        }): _13.ScalarDescriptor;
    };
};
