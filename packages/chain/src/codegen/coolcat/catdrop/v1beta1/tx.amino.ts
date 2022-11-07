//@ts-nocheck
import { actionFromJSON } from "./claim_record";
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
export const AminoConverter = {
  "/coolcat.catdrop.v1beta1.MsgClaimFor": {
    aminoType: "/coolcat.catdrop.v1beta1.MsgClaimFor",
    toAmino: ({
      sender,
      address,
      action
    }: MsgClaimFor): AminoMsgClaimFor["value"] => {
      return {
        sender,
        address,
        action
      };
    },
    fromAmino: ({
      sender,
      address,
      action
    }: AminoMsgClaimFor["value"]): MsgClaimFor => {
      return {
        sender,
        address,
        action: actionFromJSON(action)
      };
    }
  }
};