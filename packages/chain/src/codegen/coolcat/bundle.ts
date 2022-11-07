import * as _0 from "./alloc/v1beta1/genesis";
import * as _1 from "./alloc/v1beta1/params";
import * as _2 from "./alloc/v1beta1/query";
import * as _3 from "./alloc/v1beta1/tx";
import * as _4 from "./catdrop/v1beta1/claim_record";
import * as _5 from "./catdrop/v1beta1/genesis";
import * as _6 from "./catdrop/v1beta1/params";
import * as _7 from "./catdrop/v1beta1/query";
import * as _8 from "./catdrop/v1beta1/tx";
import * as _9 from "./mint/v1beta1/genesis";
import * as _10 from "./mint/v1beta1/mint";
import * as _11 from "./mint/v1beta1/query";
import * as _124 from "./alloc/v1beta1/tx.amino";
import * as _125 from "./catdrop/v1beta1/tx.amino";
import * as _126 from "./alloc/v1beta1/tx.registry";
import * as _127 from "./catdrop/v1beta1/tx.registry";
import * as _128 from "./alloc/v1beta1/query.rpc.Query";
import * as _129 from "./catdrop/v1beta1/query.rpc.Query";
import * as _130 from "./mint/v1beta1/query.rpc.Query";
import * as _131 from "./alloc/v1beta1/tx.rpc.msg";
import * as _132 from "./catdrop/v1beta1/tx.rpc.msg";
import * as _193 from "./rpc.query";
import * as _194 from "./rpc.tx";
export namespace coolcat {
  export namespace alloc {
    export const v1beta1 = { ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._124,
      ..._126,
      ..._128,
      ..._131
    };
  }
  export namespace catdrop {
    export const v1beta1 = { ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._125,
      ..._127,
      ..._129,
      ..._132
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._9,
      ..._10,
      ..._11,
      ..._130
    };
  }
  export const ClientFactory = { ..._193,
    ..._194
  };
}