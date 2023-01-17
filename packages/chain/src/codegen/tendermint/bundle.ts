import * as _89 from "./abci/types";
import * as _90 from "./crypto/keys";
import * as _91 from "./crypto/proof";
import * as _92 from "./libs/bits/types";
import * as _93 from "./p2p/types";
import * as _94 from "./types/block";
import * as _95 from "./types/evidence";
import * as _96 from "./types/params";
import * as _97 from "./types/types";
import * as _98 from "./types/validator";
import * as _99 from "./version/types";
export namespace tendermint {
  export const abci = { ..._89
  };
  export const crypto = { ..._90,
    ..._91
  };
  export namespace libs {
    export const bits = { ..._92
    };
  }
  export const p2p = { ..._93
  };
  export const types = { ..._94,
    ..._95,
    ..._96,
    ..._97,
    ..._98
  };
  export const version = { ..._99
  };
}