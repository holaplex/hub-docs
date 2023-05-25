---
sidebar_position: 1
sidebar_label: Hub NFTs
---

# Service Description

Hub-NFTs is a comprehensive service designed to facilitate the creation, minting, updating, transferring, and retrying of drops in the Non-Fungible Token (NFT) ecosystem across various blockchains. The service is blockchain-agnostic, meaning it is designed to support multiple blockchains. Initially implemented with Solana, it can be extended to other blockchains like Ethereum, Binance Smart Chain, or Polygon with relative ease, thanks to its modular and extensible design. The core of this service is built around the Edition trait, which abstracts the blockchain-specific actions for NFTs, and is designed to be implemented for each supported blockchain. This ensures that the main API handlers remain consistent and independent of the underlying blockchain, thereby providing a unified interface for NFT operations.

# Edition Trait Overview

The `solana.rs` file is a Rust source code file that provides the implementation for interacting with the Solana blockchain. This file is part of a multi-chain NFT minting API and is responsible for Solana-specific actions.

The struct `Solana` encapsulates the Solana RPC client, database connection, and payer keypair. This struct is central to interacting with the Solana blockchain and executing transactions. The primary responsibilities of this struct are creating drops, minting tokens, updating editions, and transferring assets.

The `Solana` struct implements the `Edition` trait, which represents a common set of operations across different blockchains. The trait includes five types of requests:
- `CreateDropRequest`: Used to create a new drop on the Solana blockchain.
- `CreateEditionRequest`: Used to create a new edition of an existing NFT.
- `UpdateEditionRequest`: Used to update the details of an existing edition.
- `TransferAssetRequest`: Used to transfer an asset from one account to another.
- `RetryDropRequest`: Used to retry a previously failed drop.

Each of these requests is handled by a corresponding method in the `Solana` struct.

Here's a brief description of each method:

1. `create`: This method is used to create a new NFT drop. It takes a `CreateDropRequest` and returns a `Result` with a `Pubkey` (the public key of the mint) and a `TransactionResponse`. The method constructs a `create_drop_transaction` and inserts a new record into the `solana_collections` table in the database. If the transaction is successful, it returns the mint's public key and transaction details.

2. `mint`: This method mints a new edition of an NFT. It takes a `CreateEditionRequest` and returns a `Result` with a `Pubkey` (the public key of the new mint) and a `TransactionResponse`. The method finds the corresponding Solana collection, constructs a new mint and associated token account, and adds a `mint_new_edition_from_master_edition_via_token` instruction to the transaction.

3. `update`: This method updates an existing edition's details. It takes an `UpdateEditionRequest` and returns a `Result` with a `Pubkey` (the public key of the mint) and a `TransactionResponse`. It finds the corresponding Solana collection, constructs an `update_metadata_accounts_v2` instruction, and adds it to the transaction.

4. `transfer`: This method transfers an asset from one account to another. It takes a `TransferAssetRequest` and returns a `Result` with a `Uuid` (the transfer ID) and a `TransactionResponse`. It constructs a `transfer` instruction and adds it to the transaction.

When adding support for a new blockchain, one should create a similar `.rs` file for the new blockchain and implement the `Edition` trait. The methods should be similar, but with details specific to the new blockchain. For example, the `create` method should construct a transaction specific to the new blockchain, and the `mint` method should mint a token based on the rules of the new blockchain. Similarly, the `update` and `transfer` methods should update and transfer assets using the new blockchain's APIs. Finally, all the blockchain-specific details, like the RPC client, database connection, and payer keypair, would be encapsulated in a struct similar to the `Solana` struct.

# Setting Up a New Blockchain

## Step 1: Creating the Polygon Struct

First, create a new `Polygon` struct in the `blockchains` module that will contain the necessary components for connecting to the Polygon network. The struct should implement the `Edition` trait as in the Solana implementation.

```rust
// api/src/blockchains/polygon.rs

pub struct Polygon {
    rpc_client: Arc,  // RPC client to interact with Polygon network
    db: Connection,   // Database connection
    payer_keypair: Vec,  // Keypair of the payer account
}
```

Remember to define all the necessary request structs similar to `CreateDropRequest`, `CreateEditionRequest`, `UpdateEditionRequest`, `TransferAssetRequest`, `RetryDropRequest` in the Solana implementation based on the Polygon's requirements.

## Step 2: Implementing the Edition Trait for Polygon

For each method in the `Edition` trait (`create`, `mint`, `update`, `transfer`, `retry_drop`), provide an implementation that interacts with the Polygon network. You will need to use the Polygon SDK or RPC client in these methods to send transactions to the Polygon network.

```rust
#[async_trait::async_trait]
impl Edition<...> for Polygon {
    // Implement each method here.
}
```

## Step 3: Adding Polygon Support in the Mutations

Next, extend the `drop.rs` and `mint.rs` mutation modules to handle the Polygon blockchain. This includes updating the `CreateDrop` and `MintEdition` struct to accept Polygon blockchain, and providing the necessary logic in the `execute` method to handle Polygon blockchain.

## Step 4: Configuring the API to Support Polygon

Finally, instantiate the `Polygon` struct in the API configuration and setup the necessary environment variables for connecting to the Polygon network. This should be done in the `main.rs` and `lib.rs` files.

```rust
// Instantiate Polygon struct
let polygon = Polygon {
    rpc_client: ...,
    db: ...,
    payer_keypair: ...,
};
```

Remember to add the necessary logic to route requests to the Polygon struct when the Polygon blockchain is specified in the request.

For a complete reference, please refer to the [Solana implementation](https://github.com/holaplex/hub-nfts/blob/main/api/src/blockchains/solana.rs) and other mutation files in the [hub-nfts repository](https://github.com/holaplex/hub-nfts/tree/main/api/src/mutations). Note that the exact implementation details will depend on the specifics of the Polygon network and its Rust SDK or RPC client.

This guide is based on the assumption that you are comfortable with Rust programming and have a basic understanding of blockchain and the Polygon network.