import * as _1 from "./alloc/v1beta1/genesis";
import * as _2 from "./alloc/v1beta1/params";
import * as _3 from "./alloc/v1beta1/query";
import * as _4 from "./alloc/v1beta1/tx";
import * as _5 from "./catdrop/v1beta1/claim_record";
import * as _6 from "./catdrop/v1beta1/genesis";
import * as _7 from "./catdrop/v1beta1/params";
import * as _8 from "./catdrop/v1beta1/query";
import * as _9 from "./catdrop/v1beta1/tx";
import * as _10 from "./mint/v1beta1/genesis";
import * as _11 from "./mint/v1beta1/mint";
import * as _12 from "./mint/v1beta1/query";
import * as _100 from "./alloc/v1beta1/tx.amino";
import * as _101 from "./catdrop/v1beta1/tx.amino";
import * as _102 from "./alloc/v1beta1/tx.registry";
import * as _103 from "./catdrop/v1beta1/tx.registry";
import * as _104 from "./alloc/v1beta1/query.rpc.Query";
import * as _105 from "./catdrop/v1beta1/query.rpc.Query";
import * as _106 from "./mint/v1beta1/query.rpc.Query";
import * as _107 from "./alloc/v1beta1/tx.rpc.msg";
import * as _108 from "./catdrop/v1beta1/tx.rpc.msg";
import * as _155 from "./rpc.query";
import * as _156 from "./rpc.tx";
export namespace coolcat {
  export namespace alloc {
    export const v1beta1 = { ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._100,
      ..._102,
      ..._104,
      ..._107
    };
  }
  export namespace catdrop {
    export const v1beta1 = { ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._101,
      ..._103,
      ..._105,
      ..._108
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._10,
      ..._11,
      ..._12,
      ..._106
    };
  }
  export const ClientFactory = { ..._155,
    ..._156
  };
}