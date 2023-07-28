---
sidebar_position: 7
---

# Release Notes

## July 27, 2023

Features:

- [Create collections](./developers/create-collection-api.md) (MCC on Solana) - `createCollection` mutation
- [Mint 1:1's to collections](./developers/mint-to-collection-api.md) - `mintToCollection` mutation
- Import collection (MCC on Solana) - `ImportSolanaCollection` mutation
- [Mint compressed NFTs](./developers/mint-to-collection-api.md) (set `"compressed": true` in `mintToCollection` mutation)

Fixes:

- Mutations `retryDrop` and `retryMint` now reset the drop/mint status
- Email verification

## July 6, 2023

Features:

- [Transfer tokens out of Hub-created wallets](./Guides/transfer-out-of-hub-wallet.md)
    - Hub verifies before charging that the NFT to be transferred was created by Hub
    - When someone transfer a token, we charge credits immediately
    - Hub will show a token as transferred once the on-chain transaction is complete

## June 27, 2023

*Polygon support is here*

Features:

- Create drops on Polygon
- Mint tokens on Polygon
- Point starter apps to Polygon drops

## June 23, 2023

Features:

- Organization name is no longer unique

## June 5, 2023

Features:

- Invite team members via email
- Deactivate/reactivate team members (organization owner only)
- Password recovery
- Retry a failed or pending mint via API (see docs for `retryMint` mutation [here](https://docs.holaplex.com/api/mutations/retry-mint))
- Edit user profile

Fixes:

- API supports use of input arguments in graphql mutations (in addition to using variables)
- Drop end-time validation

Misc:

- Additional documentation on [Hub API Playground](https://api.holaplex.com/)
- New open source repo for handling messages: [hub-messages](https://github.com/holaplex/hub-messages) is a Redpanda consumer that listens for events emitted by different HUB services and sends related emails to users


## May 25, 2023

Features:

- Owners can deactivate or reactivate members
- Update user profile

Fixes:

- Drop API validations, incl. end time is in the future, external and animation urls are urls, creator address are valid for the blockchain
- Convert UTC timestamps to user’s local time
- Display error messages when accepting an invite
- Down-case emails before saving invites and when comparing

## May 18, 2023

Features:

- Credit purchasing completely automated
- Charge for creating wallets
- Image assets served from our asset proxy CDN
- Set animation URL on drops (ie video NFTs)
- Set profile image when creating an account (editing profile in review)
- Hub status page https://status.holaplex.com
- Hub API explorer https://api.holaplex.com
- Updated UX for creating drops

Fixes:

- API timestamps include the timezone (UTC)
- Error message when trying to create wallet for customer that already exists
- Get access to webhook action buttons by adding compact pill list
- More API validations on drop mutations
