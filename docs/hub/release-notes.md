---
sidebar_position: 7
---

# Release Notes

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
