---
sidebar_position: 7
---

# Release Notes

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
