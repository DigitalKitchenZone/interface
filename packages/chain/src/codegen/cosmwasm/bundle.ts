import * as _106 from "./wasm/v1/genesis";
import * as _107 from "./wasm/v1/ibc";
import * as _108 from "./wasm/v1/proposal";
import * as _109 from "./wasm/v1/query";
import * as _110 from "./wasm/v1/tx";
import * as _111 from "./wasm/v1/types";
import * as _224 from "./wasm/v1/tx.amino";
import * as _225 from "./wasm/v1/tx.registry";
import * as _226 from "./wasm/v1/query.rpc.Query";
import * as _227 from "./wasm/v1/tx.rpc.msg";
import * as _249 from "./rpc.query";
import * as _250 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._224,
      ..._225,
      ..._226,
      ..._227
    };
  }
  export const ClientFactory = { ..._249,
    ..._250
  };
}