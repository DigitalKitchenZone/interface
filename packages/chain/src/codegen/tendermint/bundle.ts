import * as _87 from "./abci/types";
import * as _88 from "./crypto/keys";
import * as _89 from "./crypto/proof";
import * as _90 from "./libs/bits/types";
import * as _91 from "./p2p/types";
import * as _92 from "./types/block";
import * as _93 from "./types/evidence";
import * as _94 from "./types/params";
import * as _95 from "./types/types";
import * as _96 from "./types/validator";
import * as _97 from "./version/types";
export namespace tendermint {
  export const abci = { ..._87
  };
  export const crypto = { ..._88,
    ..._89
  };
  export namespace libs {
    export const bits = { ..._90
    };
  }
  export const p2p = { ..._91
  };
  export const types = { ..._92,
    ..._93,
    ..._94,
    ..._95,
    ..._96
  };
  export const version = { ..._97
  };
}