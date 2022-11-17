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
import * as _155 from "./alloc/v1beta1/tx.amino";
import * as _156 from "./catdrop/v1beta1/tx.amino";
import * as _157 from "./alloc/v1beta1/tx.registry";
import * as _158 from "./catdrop/v1beta1/tx.registry";
import * as _159 from "./alloc/v1beta1/query.rpc.Query";
import * as _160 from "./catdrop/v1beta1/query.rpc.Query";
import * as _161 from "./mint/v1beta1/query.rpc.Query";
import * as _162 from "./alloc/v1beta1/tx.rpc.msg";
import * as _163 from "./catdrop/v1beta1/tx.rpc.msg";
import * as _245 from "./rpc.query";
import * as _246 from "./rpc.tx";
export namespace coolcat {
  export namespace alloc {
    export const v1beta1 = { ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._155,
      ..._157,
      ..._159,
      ..._162
    };
  }
  export namespace catdrop {
    export const v1beta1 = { ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._156,
      ..._158,
      ..._160,
      ..._163
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._10,
      ..._11,
      ..._12,
      ..._161
    };
  }
  export const ClientFactory = { ..._245,
    ..._246
  };
}