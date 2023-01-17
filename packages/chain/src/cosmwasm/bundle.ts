import * as _55 from "./wasm/v1/genesis";
import * as _56 from "./wasm/v1/ibc";
import * as _57 from "./wasm/v1/proposal";
import * as _58 from "./wasm/v1/query";
import * as _59 from "./wasm/v1/tx";
import * as _60 from "./wasm/v1/types";
import * as _135 from "./wasm/v1/tx.amino";
import * as _136 from "./wasm/v1/tx.registry";
import * as _137 from "./wasm/v1/query.rpc.Query";
import * as _138 from "./wasm/v1/tx.rpc.msg";
import * as _159 from "./rpc.query";
import * as _160 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._135,
      ..._136,
      ..._137,
      ..._138
    };
  }
  export const ClientFactory = { ..._159,
    ..._160
  };
}