# @coolcatchain/chain

## TS library for interacting with the CoolCat blockchain

```sh
npm install @coolcatchain/chain
```

### Basic Usage

```js
import { coolcat } from "@coolcatchain/chain";

const main = async () => {
  const { createLCDClient } = coolcat.ClientFactory;
  const client = await createLCDClient({ restEndpoint: REST_ENDPOINT });

  // now you can query the modules
  const balance = await client.cosmos.bank.v1beta1.allBalances({
    address: "ccat18kzy6ckql3e68uzlmzenakd56tr2fzr5s8vf9s",
  });
};
```

### Cosmos Messages

```js
import { cosmos } from "@coolcatchain/chain";

const {
  fundCommunityPool,
  setWithdrawAddress,
  withdrawDelegatorReward,
  withdrawValidatorCommission,
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const { multiSend, send } = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
  beginRedelegate,
  createValidator,
  delegate,
  editValidator,
  undelegate,
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const { deposit, submitProposal, vote, voteWeighted } =
  cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

### IBC Messages

```js
import { ibc } from "@coolcatchain/chain";

const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl;
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

### Initializing the Stargate Client

Use `getSigningCoolcatClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded.

```js
import { getSigningCoolcatClient } from "@coolcatchain/chain";

const stargateClient = await getSigningCoolcatClient({
  rpcEndpoint,
  signer, // OfflineSigner
});
```

## Creating Signers

To broadcast messages, you can create signers with a variety of options:

- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
- [keplr](https://docs.keplr.app/api/cosmjs.html)
- [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

### Cosmos Kit

We recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) for creating signers that work with Keplr and other wallets.

### Amino Signer

```js
import { getOfflineSignerAmino as getOfflineSigner } from "cosmjs-utils";
```

### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from "cosmjs-utils";
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS.
Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from "chain-registry";

const mnemonic =
  "unfold client turtle either pilot stock floor glow toward bullet car science";
const chain = chains.find(({ chain_name }) => chain_name === "coolcat");
const signer = await getOfflineSigner({
  mnemonic,
  chain,
});
```

### Broadcasting messages

Now that you have your `stargateClient`, you can broadcast messages:

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
  amount: [
    {
      denom: "uccat",
      amount: "1000",
    },
  ],
  toAddress: address,
  fromAddress: address,
});

const fee: StdFee = {
  amount: [
    {
      denom: "uccat",
      amount: "864",
    },
  ],
  gas: "86364",
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

### Advanced Usage

If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import {
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    publicawesomeAminoConverters,
    publicawesomeProtoRegistry
} from '@coolcatchain/chain';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = 'https://rpc.coolcat.space/'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...coolcatProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...coolcatAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

## Credits

🛠 Built by [Digital Kitchen](https://digitalkitchen.zone/stake), based on [Cosmology ⚛️](https://cosmology.tech/validator) goodness!

Code built with the help of these related projects:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
- [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️
