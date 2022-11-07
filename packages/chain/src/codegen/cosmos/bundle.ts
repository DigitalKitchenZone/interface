import * as _13 from "./app/v1alpha1/config";
import * as _14 from "./app/v1alpha1/module";
import * as _15 from "./app/v1alpha1/query";
import * as _16 from "./auth/v1beta1/auth";
import * as _17 from "./auth/v1beta1/genesis";
import * as _18 from "./auth/v1beta1/query";
import * as _19 from "./authz/v1beta1/authz";
import * as _20 from "./authz/v1beta1/event";
import * as _21 from "./authz/v1beta1/genesis";
import * as _22 from "./authz/v1beta1/query";
import * as _23 from "./authz/v1beta1/tx";
import * as _24 from "./bank/v1beta1/authz";
import * as _25 from "./bank/v1beta1/bank";
import * as _26 from "./bank/v1beta1/genesis";
import * as _27 from "./bank/v1beta1/query";
import * as _28 from "./bank/v1beta1/tx";
import * as _29 from "./base/abci/v1beta1/abci";
import * as _30 from "./base/kv/v1beta1/kv";
import * as _31 from "./base/query/v1beta1/pagination";
import * as _32 from "./base/reflection/v1beta1/reflection";
import * as _33 from "./base/reflection/v2alpha1/reflection";
import * as _34 from "./base/snapshots/v1beta1/snapshot";
import * as _35 from "./base/store/v1beta1/commit_info";
import * as _36 from "./base/store/v1beta1/listening";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./capability/v1beta1/capability";
import * as _40 from "./capability/v1beta1/genesis";
import * as _41 from "./crisis/v1beta1/genesis";
import * as _42 from "./crisis/v1beta1/tx";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/hd/v1/hd";
import * as _45 from "./crypto/keyring/v1/record";
import * as _46 from "./crypto/multisig/keys";
import * as _47 from "./crypto/secp256k1/keys";
import * as _48 from "./crypto/secp256r1/keys";
import * as _49 from "./distribution/v1beta1/distribution";
import * as _50 from "./distribution/v1beta1/genesis";
import * as _51 from "./distribution/v1beta1/query";
import * as _52 from "./distribution/v1beta1/tx";
import * as _53 from "./evidence/v1beta1/evidence";
import * as _54 from "./evidence/v1beta1/genesis";
import * as _55 from "./evidence/v1beta1/query";
import * as _56 from "./evidence/v1beta1/tx";
import * as _57 from "./feegrant/v1beta1/feegrant";
import * as _58 from "./feegrant/v1beta1/genesis";
import * as _59 from "./feegrant/v1beta1/query";
import * as _60 from "./feegrant/v1beta1/tx";
import * as _61 from "./genutil/v1beta1/genesis";
import * as _62 from "./gov/v1/genesis";
import * as _63 from "./gov/v1/gov";
import * as _64 from "./gov/v1/query";
import * as _65 from "./gov/v1/tx";
import * as _66 from "./gov/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/gov";
import * as _68 from "./gov/v1beta1/query";
import * as _69 from "./gov/v1beta1/tx";
import * as _70 from "./group/v1/events";
import * as _71 from "./group/v1/genesis";
import * as _72 from "./group/v1/query";
import * as _73 from "./group/v1/tx";
import * as _74 from "./group/v1/types";
import * as _75 from "./mint/v1beta1/genesis";
import * as _76 from "./mint/v1beta1/mint";
import * as _77 from "./mint/v1beta1/query";
import * as _78 from "./msg/v1/msg";
import * as _79 from "./nft/v1beta1/event";
import * as _80 from "./nft/v1beta1/genesis";
import * as _81 from "./nft/v1beta1/nft";
import * as _82 from "./nft/v1beta1/query";
import * as _83 from "./nft/v1beta1/tx";
import * as _84 from "./orm/v1/orm";
import * as _85 from "./orm/v1alpha1/schema";
import * as _86 from "./params/v1beta1/params";
import * as _87 from "./params/v1beta1/query";
import * as _88 from "./slashing/v1beta1/genesis";
import * as _89 from "./slashing/v1beta1/query";
import * as _90 from "./slashing/v1beta1/slashing";
import * as _91 from "./slashing/v1beta1/tx";
import * as _92 from "./staking/v1beta1/authz";
import * as _93 from "./staking/v1beta1/genesis";
import * as _94 from "./staking/v1beta1/query";
import * as _95 from "./staking/v1beta1/staking";
import * as _96 from "./staking/v1beta1/tx";
import * as _97 from "./tx/signing/v1beta1/signing";
import * as _98 from "./tx/v1beta1/service";
import * as _99 from "./tx/v1beta1/tx";
import * as _100 from "./upgrade/v1beta1/query";
import * as _101 from "./upgrade/v1beta1/tx";
import * as _102 from "./upgrade/v1beta1/upgrade";
import * as _103 from "./vesting/v1beta1/tx";
import * as _104 from "./vesting/v1beta1/vesting";
import * as _133 from "./authz/v1beta1/tx.amino";
import * as _134 from "./bank/v1beta1/tx.amino";
import * as _135 from "./crisis/v1beta1/tx.amino";
import * as _136 from "./distribution/v1beta1/tx.amino";
import * as _137 from "./evidence/v1beta1/tx.amino";
import * as _138 from "./feegrant/v1beta1/tx.amino";
import * as _139 from "./gov/v1/tx.amino";
import * as _140 from "./gov/v1beta1/tx.amino";
import * as _141 from "./group/v1/tx.amino";
import * as _142 from "./nft/v1beta1/tx.amino";
import * as _143 from "./slashing/v1beta1/tx.amino";
import * as _144 from "./staking/v1beta1/tx.amino";
import * as _145 from "./upgrade/v1beta1/tx.amino";
import * as _146 from "./vesting/v1beta1/tx.amino";
import * as _147 from "./authz/v1beta1/tx.registry";
import * as _148 from "./bank/v1beta1/tx.registry";
import * as _149 from "./crisis/v1beta1/tx.registry";
import * as _150 from "./distribution/v1beta1/tx.registry";
import * as _151 from "./evidence/v1beta1/tx.registry";
import * as _152 from "./feegrant/v1beta1/tx.registry";
import * as _153 from "./gov/v1/tx.registry";
import * as _154 from "./gov/v1beta1/tx.registry";
import * as _155 from "./group/v1/tx.registry";
import * as _156 from "./nft/v1beta1/tx.registry";
import * as _157 from "./slashing/v1beta1/tx.registry";
import * as _158 from "./staking/v1beta1/tx.registry";
import * as _159 from "./upgrade/v1beta1/tx.registry";
import * as _160 from "./vesting/v1beta1/tx.registry";
import * as _161 from "./app/v1alpha1/query.rpc.Query";
import * as _162 from "./auth/v1beta1/query.rpc.Query";
import * as _163 from "./authz/v1beta1/query.rpc.Query";
import * as _164 from "./bank/v1beta1/query.rpc.Query";
import * as _165 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _166 from "./distribution/v1beta1/query.rpc.Query";
import * as _167 from "./evidence/v1beta1/query.rpc.Query";
import * as _168 from "./feegrant/v1beta1/query.rpc.Query";
import * as _169 from "./gov/v1/query.rpc.Query";
import * as _170 from "./gov/v1beta1/query.rpc.Query";
import * as _171 from "./group/v1/query.rpc.Query";
import * as _172 from "./mint/v1beta1/query.rpc.Query";
import * as _173 from "./nft/v1beta1/query.rpc.Query";
import * as _174 from "./params/v1beta1/query.rpc.Query";
import * as _175 from "./slashing/v1beta1/query.rpc.Query";
import * as _176 from "./staking/v1beta1/query.rpc.Query";
import * as _177 from "./tx/v1beta1/service.rpc.Service";
import * as _178 from "./upgrade/v1beta1/query.rpc.Query";
import * as _179 from "./authz/v1beta1/tx.rpc.msg";
import * as _180 from "./bank/v1beta1/tx.rpc.msg";
import * as _181 from "./crisis/v1beta1/tx.rpc.msg";
import * as _182 from "./distribution/v1beta1/tx.rpc.msg";
import * as _183 from "./evidence/v1beta1/tx.rpc.msg";
import * as _184 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _185 from "./gov/v1/tx.rpc.msg";
import * as _186 from "./gov/v1beta1/tx.rpc.msg";
import * as _187 from "./group/v1/tx.rpc.msg";
import * as _188 from "./nft/v1beta1/tx.rpc.msg";
import * as _189 from "./slashing/v1beta1/tx.rpc.msg";
import * as _190 from "./staking/v1beta1/tx.rpc.msg";
import * as _191 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _192 from "./vesting/v1beta1/tx.rpc.msg";
import * as _195 from "./rpc.query";
import * as _196 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._13,
      ..._14,
      ..._15,
      ..._161
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._16,
      ..._17,
      ..._18,
      ..._162
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._133,
      ..._147,
      ..._163,
      ..._179
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._134,
      ..._148,
      ..._164,
      ..._180
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._29
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._30
      };
    }
    export namespace query {
      export const v1beta1 = { ..._31
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._32
      };
      export const v2alpha1 = { ..._33
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._34
      };
    }
    export namespace store {
      export const v1beta1 = { ..._35,
        ..._36
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._37,
        ..._165
      };
    }
    export const v1beta1 = { ..._38
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._39,
      ..._40
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._41,
      ..._42,
      ..._135,
      ..._149,
      ..._181
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._43
    };
    export namespace hd {
      export const v1 = { ..._44
      };
    }
    export namespace keyring {
      export const v1 = { ..._45
      };
    }
    export const multisig = { ..._46
    };
    export const secp256k1 = { ..._47
    };
    export const secp256r1 = { ..._48
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._136,
      ..._150,
      ..._166,
      ..._182
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._137,
      ..._151,
      ..._167,
      ..._183
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._138,
      ..._152,
      ..._168,
      ..._184
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._61
    };
  }
  export namespace gov {
    export const v1 = { ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._139,
      ..._153,
      ..._169,
      ..._185
    };
    export const v1beta1 = { ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._140,
      ..._154,
      ..._170,
      ..._186
    };
  }
  export namespace group {
    export const v1 = { ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._141,
      ..._155,
      ..._171,
      ..._187
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._75,
      ..._76,
      ..._77,
      ..._172
    };
  }
  export namespace msg {
    export const v1 = { ..._78
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._142,
      ..._156,
      ..._173,
      ..._188
    };
  }
  export namespace orm {
    export const v1 = { ..._84
    };
    export const v1alpha1 = { ..._85
    };
  }
  export namespace params {
    export const v1beta1 = { ..._86,
      ..._87,
      ..._174
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._143,
      ..._157,
      ..._175,
      ..._189
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._144,
      ..._158,
      ..._176,
      ..._190
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._97
      };
    }
    export const v1beta1 = { ..._98,
      ..._99,
      ..._177
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._100,
      ..._101,
      ..._102,
      ..._145,
      ..._159,
      ..._178,
      ..._191
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._103,
      ..._104,
      ..._146,
      ..._160,
      ..._192
    };
  }
  export const ClientFactory = { ..._195,
    ..._196
  };
}