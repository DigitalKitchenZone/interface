import * as _14 from "./authz/v1beta1/authz";
import * as _15 from "./authz/v1beta1/event";
import * as _16 from "./authz/v1beta1/genesis";
import * as _17 from "./authz/v1beta1/query";
import * as _18 from "./authz/v1beta1/tx";
import * as _19 from "./bank/v1beta1/authz";
import * as _20 from "./bank/v1beta1/bank";
import * as _21 from "./bank/v1beta1/genesis";
import * as _22 from "./bank/v1beta1/query";
import * as _23 from "./bank/v1beta1/tx";
import * as _24 from "./base/abci/v1beta1/abci";
import * as _25 from "./base/query/v1beta1/pagination";
import * as _26 from "./base/reflection/v2alpha1/reflection";
import * as _27 from "./base/v1beta1/coin";
import * as _28 from "./crypto/ed25519/keys";
import * as _29 from "./crypto/hd/v1/hd";
import * as _30 from "./crypto/keyring/v1/record";
import * as _31 from "./crypto/multisig/keys";
import * as _32 from "./crypto/secp256k1/keys";
import * as _33 from "./crypto/secp256r1/keys";
import * as _34 from "./distribution/v1beta1/distribution";
import * as _35 from "./distribution/v1beta1/genesis";
import * as _36 from "./distribution/v1beta1/query";
import * as _37 from "./distribution/v1beta1/tx";
import * as _38 from "./gov/v1beta1/genesis";
import * as _39 from "./gov/v1beta1/gov";
import * as _40 from "./gov/v1beta1/query";
import * as _41 from "./gov/v1beta1/tx";
import * as _42 from "./params/v1beta1/params";
import * as _43 from "./params/v1beta1/query";
import * as _44 from "./staking/v1beta1/authz";
import * as _45 from "./staking/v1beta1/genesis";
import * as _46 from "./staking/v1beta1/query";
import * as _47 from "./staking/v1beta1/staking";
import * as _48 from "./staking/v1beta1/tx";
import * as _49 from "./tx/signing/v1beta1/signing";
import * as _50 from "./tx/v1beta1/service";
import * as _51 from "./tx/v1beta1/tx";
import * as _52 from "./upgrade/v1beta1/query";
import * as _53 from "./upgrade/v1beta1/tx";
import * as _54 from "./upgrade/v1beta1/upgrade";
import * as _109 from "./authz/v1beta1/tx.amino";
import * as _110 from "./bank/v1beta1/tx.amino";
import * as _111 from "./distribution/v1beta1/tx.amino";
import * as _112 from "./gov/v1beta1/tx.amino";
import * as _113 from "./staking/v1beta1/tx.amino";
import * as _114 from "./upgrade/v1beta1/tx.amino";
import * as _115 from "./authz/v1beta1/tx.registry";
import * as _116 from "./bank/v1beta1/tx.registry";
import * as _117 from "./distribution/v1beta1/tx.registry";
import * as _118 from "./gov/v1beta1/tx.registry";
import * as _119 from "./staking/v1beta1/tx.registry";
import * as _120 from "./upgrade/v1beta1/tx.registry";
import * as _121 from "./authz/v1beta1/query.rpc.Query";
import * as _122 from "./bank/v1beta1/query.rpc.Query";
import * as _123 from "./distribution/v1beta1/query.rpc.Query";
import * as _124 from "./gov/v1beta1/query.rpc.Query";
import * as _125 from "./params/v1beta1/query.rpc.Query";
import * as _126 from "./staking/v1beta1/query.rpc.Query";
import * as _127 from "./tx/v1beta1/service.rpc.Service";
import * as _128 from "./upgrade/v1beta1/query.rpc.Query";
import * as _129 from "./authz/v1beta1/tx.rpc.msg";
import * as _130 from "./bank/v1beta1/tx.rpc.msg";
import * as _131 from "./distribution/v1beta1/tx.rpc.msg";
import * as _132 from "./gov/v1beta1/tx.rpc.msg";
import * as _133 from "./staking/v1beta1/tx.rpc.msg";
import * as _134 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _157 from "./rpc.query";
import * as _158 from "./rpc.tx";
export namespace cosmos {
  export namespace authz {
    export const v1beta1 = { ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._109,
      ..._115,
      ..._121,
      ..._129
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._110,
      ..._116,
      ..._122,
      ..._130
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._24
      };
    }
    export namespace query {
      export const v1beta1 = { ..._25
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._26
      };
    }
    export const v1beta1 = { ..._27
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._28
    };
    export namespace hd {
      export const v1 = { ..._29
      };
    }
    export namespace keyring {
      export const v1 = { ..._30
      };
    }
    export const multisig = { ..._31
    };
    export const secp256k1 = { ..._32
    };
    export const secp256r1 = { ..._33
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._111,
      ..._117,
      ..._123,
      ..._131
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._112,
      ..._118,
      ..._124,
      ..._132
    };
  }
  export namespace params {
    export const v1beta1 = { ..._42,
      ..._43,
      ..._125
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._113,
      ..._119,
      ..._126,
      ..._133
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._49
      };
    }
    export const v1beta1 = { ..._50,
      ..._51,
      ..._127
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._52,
      ..._53,
      ..._54,
      ..._114,
      ..._120,
      ..._128,
      ..._134
    };
  }
  export const ClientFactory = { ..._157,
    ..._158
  };
}