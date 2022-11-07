import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimFor } from "./tx";
export interface AminoMsgClaimFor extends AminoMsg {
    type: "/coolcat.catdrop.v1beta1.MsgClaimFor";
    value: {
        sender: string;
        address: string;
        action: number;
    };
}
export declare const AminoConverter: {
    "/coolcat.catdrop.v1beta1.MsgClaimFor": {
        aminoType: string;
        toAmino: ({ sender, address, action }: MsgClaimFor) => AminoMsgClaimFor["value"];
        fromAmino: ({ sender, address, action }: AminoMsgClaimFor["value"]) => MsgClaimFor;
    };
};
