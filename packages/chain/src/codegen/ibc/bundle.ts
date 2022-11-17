import * as _120 from "./applications/transfer/v1/genesis";
import * as _121 from "./applications/transfer/v1/query";
import * as _122 from "./applications/transfer/v1/transfer";
import * as _123 from "./applications/transfer/v1/tx";
import * as _124 from "./applications/transfer/v2/packet";
import * as _125 from "./core/channel/v1/channel";
import * as _126 from "./core/channel/v1/genesis";
import * as _127 from "./core/channel/v1/query";
import * as _128 from "./core/channel/v1/tx";
import * as _129 from "./core/client/v1/client";
import * as _130 from "./core/client/v1/genesis";
import * as _131 from "./core/client/v1/query";
import * as _132 from "./core/client/v1/tx";
import * as _133 from "./core/commitment/v1/commitment";
import * as _134 from "./core/connection/v1/connection";
import * as _135 from "./core/connection/v1/genesis";
import * as _136 from "./core/connection/v1/query";
import * as _137 from "./core/connection/v1/tx";
import * as _138 from "./core/port/v1/query";
import * as _139 from "./core/types/v1/genesis";
import * as _140 from "./lightclients/localhost/v1/localhost";
import * as _141 from "./lightclients/solomachine/v1/solomachine";
import * as _142 from "./lightclients/solomachine/v2/solomachine";
import * as _143 from "./lightclients/tendermint/v1/tendermint";
import * as _228 from "./applications/transfer/v1/tx.amino";
import * as _229 from "./core/channel/v1/tx.amino";
import * as _230 from "./core/client/v1/tx.amino";
import * as _231 from "./core/connection/v1/tx.amino";
import * as _232 from "./applications/transfer/v1/tx.registry";
import * as _233 from "./core/channel/v1/tx.registry";
import * as _234 from "./core/client/v1/tx.registry";
import * as _235 from "./core/connection/v1/tx.registry";
import * as _236 from "./applications/transfer/v1/query.rpc.Query";
import * as _237 from "./core/channel/v1/query.rpc.Query";
import * as _238 from "./core/client/v1/query.rpc.Query";
import * as _239 from "./core/connection/v1/query.rpc.Query";
import * as _240 from "./core/port/v1/query.rpc.Query";
import * as _241 from "./applications/transfer/v1/tx.rpc.msg";
import * as _242 from "./core/channel/v1/tx.rpc.msg";
import * as _243 from "./core/client/v1/tx.rpc.msg";
import * as _244 from "./core/connection/v1/tx.rpc.msg";
import * as _251 from "./rpc.query";
import * as _252 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._228,
        ..._232,
        ..._236,
        ..._241
      };
      export const v2 = { ..._124
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._229,
        ..._233,
        ..._237,
        ..._242
      };
    }
    export namespace client {
      export const v1 = { ..._129,
        ..._130,
        ..._131,
        ..._132,
        ..._230,
        ..._234,
        ..._238,
        ..._243
      };
    }
    export namespace commitment {
      export const v1 = { ..._133
      };
    }
    export namespace connection {
      export const v1 = { ..._134,
        ..._135,
        ..._136,
        ..._137,
        ..._231,
        ..._235,
        ..._239,
        ..._244
      };
    }
    export namespace port {
      export const v1 = { ..._138,
        ..._240
      };
    }
    export namespace types {
      export const v1 = { ..._139
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._140
      };
    }
    export namespace solomachine {
      export const v1 = { ..._141
      };
      export const v2 = { ..._142
      };
    }
    export namespace tendermint {
      export const v1 = { ..._143
      };
    }
  }
  export const ClientFactory = { ..._251,
    ..._252
  };
}