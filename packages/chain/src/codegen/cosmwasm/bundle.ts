import * as _53 from "./wasm/v1/genesis";
import * as _54 from "./wasm/v1/ibc";
import * as _55 from "./wasm/v1/proposal";
import * as _56 from "./wasm/v1/query";
import * as _57 from "./wasm/v1/tx";
import * as _58 from "./wasm/v1/types";
import * as _132 from "./wasm/v1/tx.amino";
import * as _133 from "./wasm/v1/tx.registry";
import * as _134 from "./wasm/v1/query.rpc.Query";
import * as _135 from "./wasm/v1/tx.rpc.msg";
import * as _156 from "./rpc.query";
import * as _157 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._132,
      ..._133,
      ..._134,
      ..._135
    };
  }
  export const ClientFactory = { ..._156,
    ..._157
  };
}