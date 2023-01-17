import * as _67 from "./applications/transfer/v1/genesis";
import * as _68 from "./applications/transfer/v1/query";
import * as _69 from "./applications/transfer/v1/transfer";
import * as _70 from "./applications/transfer/v1/tx";
import * as _71 from "./applications/transfer/v2/packet";
import * as _72 from "./core/channel/v1/channel";
import * as _73 from "./core/channel/v1/genesis";
import * as _74 from "./core/channel/v1/query";
import * as _75 from "./core/channel/v1/tx";
import * as _76 from "./core/client/v1/client";
import * as _77 from "./core/client/v1/genesis";
import * as _78 from "./core/client/v1/query";
import * as _79 from "./core/client/v1/tx";
import * as _80 from "./core/commitment/v1/commitment";
import * as _81 from "./core/connection/v1/connection";
import * as _82 from "./core/connection/v1/genesis";
import * as _83 from "./core/connection/v1/query";
import * as _84 from "./core/connection/v1/tx";
import * as _85 from "./lightclients/localhost/v1/localhost";
import * as _86 from "./lightclients/solomachine/v1/solomachine";
import * as _87 from "./lightclients/solomachine/v2/solomachine";
import * as _88 from "./lightclients/tendermint/v1/tendermint";
import * as _139 from "./applications/transfer/v1/tx.amino";
import * as _140 from "./core/channel/v1/tx.amino";
import * as _141 from "./core/client/v1/tx.amino";
import * as _142 from "./core/connection/v1/tx.amino";
import * as _143 from "./applications/transfer/v1/tx.registry";
import * as _144 from "./core/channel/v1/tx.registry";
import * as _145 from "./core/client/v1/tx.registry";
import * as _146 from "./core/connection/v1/tx.registry";
import * as _147 from "./applications/transfer/v1/query.rpc.Query";
import * as _148 from "./core/channel/v1/query.rpc.Query";
import * as _149 from "./core/client/v1/query.rpc.Query";
import * as _150 from "./core/connection/v1/query.rpc.Query";
import * as _151 from "./applications/transfer/v1/tx.rpc.msg";
import * as _152 from "./core/channel/v1/tx.rpc.msg";
import * as _153 from "./core/client/v1/tx.rpc.msg";
import * as _154 from "./core/connection/v1/tx.rpc.msg";
import * as _161 from "./rpc.query";
import * as _162 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._67,
        ..._68,
        ..._69,
        ..._70,
        ..._139,
        ..._143,
        ..._147,
        ..._151
      };
      export const v2 = { ..._71
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._72,
        ..._73,
        ..._74,
        ..._75,
        ..._140,
        ..._144,
        ..._148,
        ..._152
      };
    }
    export namespace client {
      export const v1 = { ..._76,
        ..._77,
        ..._78,
        ..._79,
        ..._141,
        ..._145,
        ..._149,
        ..._153
      };
    }
    export namespace commitment {
      export const v1 = { ..._80
      };
    }
    export namespace connection {
      export const v1 = { ..._81,
        ..._82,
        ..._83,
        ..._84,
        ..._142,
        ..._146,
        ..._150,
        ..._154
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._85
      };
    }
    export namespace solomachine {
      export const v1 = { ..._86
      };
      export const v2 = { ..._87
      };
    }
    export namespace tendermint {
      export const v1 = { ..._88
      };
    }
  }
  export const ClientFactory = { ..._161,
    ..._162
  };
}