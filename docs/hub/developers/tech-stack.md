---
sidebar_position: 3
---

Tech Stack
==========

Holaplex's engineering tech stack comprises a range of languages and tools designed to provide robust, scalable, and efficient solutions. Our stack includes Typescript, Rust, Next.js, GraphQL, Ory Kratos, Ory Keto, Redpanda, Apollo, Postgres, and SeaORM.

## Web Client

The web client is written in Typescript using Next.js as the web framework. Next.js is a React framework used by some of the world's largest companies, enabling the creation of full-stack Web applications by extending the latest React features and integrating powerful Rust-based JavaScript tooling for the fastest builds.

## Identity Management

Holaplex utilizes Ory Kratos for identity management. Ory Kratos is a next-gen identity server providing hardened authentication, MFA, FIDO2, TOTP, WebAuthn, profile management, identity schemas, social sign in, registration, account recovery, and passwordless authentication. It operates in a headless, API-only mode, offering a robust solution without the complications of templating or theming.

## API Gateway

Holaplex uses Apache APISIX as the API gateway and entry point for all API requests. Apache APISIX is a dynamic, real-time, high-performance API gateway that provides rich traffic management features such as load balancing, dynamic upstream, grayscale publishing, service meltdown, authentication, observability, and more. 

## API and Authorization

We use GraphQL for our API, which is authenticated using either a session cookie or an Oauth2 token. Request authorization is performed at the API gateway using OPA as the policy engine. This engine parses incoming GraphQL queries and checks the requesting user's access to the desired object via Ory Keto. Ory Keto is an Open Source (Go) implementation of "Zanzibar: Google's Consistent, Global Authorization System", supporting ACL, RBAC, and other access models. The relational graph of objects is modified by a consumer hub-permissions, which listens for object creation events and updates relationships in Ory Keto using its admin API.

## Inter-Service Communication

Holaplex leverages Redpanda for horizontal communication between services. Redpanda is a Kafka API compatible streaming data platform written in Rust, offering speed and efficiency without the need for ZooKeeper or JVM.

## Product Microservices

Product-specific microservices are written in Rust. These services expose an Apollo Federated compliant API and subscribe to relevant Redpanda topics for processing events emitted by other services in the system.

## GraphQL Endpoint and Schema Management

The independent GraphQL APIs are stitched together into a single GraphQL endpoint using Apollo Router, a configurable, high-performance routing runtime for Apollo Federation. Apollo Studio is used as the GraphQL schema manager, providing useful features for creating, viewing, and managing graphs.

## Data Persistence

Services requiring persistence write records to a dedicated Postgres instance and utilize SeaORM as its ORM. Postgres is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, robustness, and performance. SeaORM is an async & dynamic ORM for Rust that supports macros and runtime reflection, allowing for both compile-time checked and dynamic database queries.