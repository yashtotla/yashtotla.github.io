# Experience — source archive

Personal, git-ignored reference. Every dump/draft I've collected about my roles,
verbatim, plus the clarified facts. Use this when updating the résumé or site so
I don't have to hunt for it each time.

---

## Clarified facts (as of 2026)

- **TruFin data volume:** systems process ~3 TB/day → 500 TB+/yr (approaching ~1 PB/yr).
- **TruFin TVL:** peaked at $300M+; ~$100M+ in Jan 2026; now under $5M.
- **TruFin chains indexed:** Solana, Near, Aptos, Injective, Ethereum.
- **TruFin infra:** all in-house — EC2 instances + load balancers (no Kubernetes). Write-heavy PostgreSQL (high writes, very few reads). Not at Livspace's user scale.
- **TruFin institutions:** Nomura, Brevan Howard.
- **TruFin note:** early frontend + API work (options products) was deprecated/binned when the options line was stopped.
- **Consulting:** revenue figures no longer relevant; at peak, products built reached 300k+ MAU.
- **Company name:** real name is TruFin (Labs); "FieldLabs" appears as an anonymized alias in some drafts.

---

## TruFin Labs — London, UK (remote)

Roles: Software Engineer, founding team (Sep 2022 – Nov 2024) → Senior Software Engineer, Backend (Nov 2024 – Present).

### Dump — LinkedIn (two roles)

Senior Software Engineer · Nov 2024 – Present
Everything off-chain at TruFin – Indexers, APIs, bots, dapps, integrations
Python, TypeScript, Rust, PostgreSQL, AWS

Software Engineer · Sep 2022 – Nov 2024
Building Derivatives, Liquid staking solutions for TruFin Protocol
Blockchain: Polygon, Ethereum, Aptos, Near
Frontend: Nextjs, Typescript, Redux, GraphQL, Ethers.js, Viem
Backend: FastAPI, Python, AWS, Graph Protocol (Subgraph)
Database: Postgres

### Draft — MS résumé (Senior Software Engineer – Backend, Sep 2022 – Present)

Investment products for digital assets; attracting $100M+ from leading institutions like Nomura, Brevan Howard
- Built a unified multi-chain backend API that abstracts five heterogeneous blockchains with concurrency-optimized routing, encrypted user state, and chain-agnostic domain models
- Led a team of 3 engineers to design the Points Program that reconstructs daily user activity and computes time-weighted loyalty points with configurable multipliers and "exactly-once", reindexable ETL runs
- Designed multithreaded, concurrent indexer services for Solana, Aptos, Near, and Injective blockchains, processing 500TB+ annually using gRPC data streams and producer-consumer architecture
- Developed high-throughput real-time ingestion pipelines for PostgreSQL sink with batch processing, backpressure controls, per-transaction atomicity, health metrics, and schema-level reindexing
- Implemented a cron-driven maintenance system automating APY calculation, compounding, treasury fees management, validator lifecycle management, AML screening, and API health checks
- Created tf_utils, an internal Python library standardizing RPC calls, smart contract execution, financial math helpers, database, logging, and several reusable utilities powering company-wide backend services

### Draft — Senior Software Engineer – Backend (systems framing)

- Designed blockchain indexing systems across Solana, Aptos, Near processing 300TB+ annually using gRPC, multithreading, and a producer-consumer model
- Developed high-throughput real-time ingestion pipelines with atomic PostgreSQL writes, schema optimization, and multi-threaded concurrency
- Built cross-chain staking engine managing $300M+ TVL with validator lifecycle, delegation, and rewards logic
- Maintained backend APIs using FastAPI for staking, reporting, and smart contract interactions
- Created tf_utils Python library for logging, metrics, and database utilities; reduced code duplication significantly
- Led deployment infra (AWS, GitHub Actions), observability (Prometheus, Slack), and CI/CD with >99.9% uptime
- Mentored junior engineers and helped scale the team from 3 to 10, introducing reviews and testing pipelines

### Draft — Software Engineer, Founding Team (on-chain framing)

Liquid staking products for digital assets; attracting $100M+ from leading institutions like Nomura, Brevan Howard
Next.js, Typescript, Ethers.js, Viem, Redux, GraphQL, Python, FastAPI, Postgres, AWS, Ethereum, Aptos
- Led product development and deployments for the frontend, subgraph, indexer and backend services for the MATIC and APTOS Liquid Staking products.
- Developed bots for auto-compounding and maintenance for liquid-staking vaults using OpenZeppelin Relayer.
- Integrations with Quadrata, an on-chain KYC solution, and TRM, a risk management and compliance solution, for managing whitelisted users.
- Led end-to-end development of frontend, subgraph and blockchain integrations for TruFin Option Vaults; Integration with Gnosis Auctions to allow market makers to participate in real-time auctions for minting and pricing ETH, BTC and MATIC options. (now deprecated)

### Draft — Technical Consultant, Engineering Team (product framing)

Investment products for digital assets; attracting $40M+ from leading institutions like Nomura, Brevan Howard
- Led user research and interviews to identify investor needs; managed product roadmap and led a transformation team to develop an industry-leading investment solution for digital assets with $40M+ invested.
- Developed tailored client experiences and proactively addressed issues to strengthen relations, ultimately securing an additional $5M in deposits.
- Led product lifecycle from ideation to launch of the user-facing platform using Agile development with cross-functional stakeholders (design/engineering/marketing); reduced time-to-market by 15% and improved customer satisfaction by 30%.
- Designed comprehensive training materials and led mentoring sessions to facilitate the smooth onboarding of new employees across all levels of engineering and product.

---

## Livspace — Bengaluru, India · Software Development Engineer, Community Team · Mar 2022 – Aug 2022

Valued at $1.2B; cutting-edge tech for home interior transformation; operating in 50+ cities across 4 countries.
Stack: Vue.js, Node, MongoDB, Redis, Kubernetes, Grafana, AWS, Webpack, Express, Mocha

### Dump — full bullet list

1. Developed the schema-driven design and experience for Margin Calculator and Payouts, reducing payments timelines from 15 days to 3 days
2. Refactored services to support authentication and authorization via Keto and Hydra
3. Designed and developed feature toggle and gradual rollout systems within frontend systems using Unleash
4. Improved lighthouse score from 56 to 98 for landing page and average scores of 86 across routes using practices like lazy loading, http2, gzip compression, tree shaking for dependencies, preload and prefetch, and router optimization
5. Refactored old code bases to micro frontend architecture for reusability
6. Sonarqube integration for frontend and backend microservices to improve and automate code quality and security, reducing comments by over 50% during code review
7. Developed file upload and download pipelines from frontend to AWS S3 buckets
8. Bugfixes and maintenance for community onboarding experience for Malaysia and Singapore launch

### Draft — MS résumé

- Led a team of 3 engineers and collaborated with cross-functional teams (design/marketing/product) to develop a margin calculator and payout experience for vendors, reducing payment timelines from 15 to 3 days.
- Collaborated with product and business teams to develop and maintain the vendor onboarding experience for Malaysia and Singapore launches, decreasing onboarding costs by 60%.
- Improved and automated services handling 5M+ SKUs, reducing deployment time by over 50% and revamped the services to work virtually error-free with 0 downtime.

### Draft — condensed

- Led development of feature flag and rollout systems using Unleash for frontend/backend services
- Boosted landing page Lighthouse score from 56 to 98 via HTTP2, gzip compression, tree shaking, lazy loading
- Spearheaded margin calculator and cross-border vendor payout flows, reducing settlement time 15 to 3 days
- Optimized micro-frontend architecture and automated services managing 5M+ SKUs with zero-downtime deployments

---

## Oracle — Bengaluru, India · Member of Technical Staff, Oracle Content Management · Sep 2020 – Feb 2022

Fortune 100; enterprise cloud, software, and hardware solutions with 430,000 customers across 175 countries.
Stack: JavaScript, JQuery, Knockout, Mustache, Bootstrap, Java, Groovy, OCI, Oracle Content Management, Oracle Digital Assistant

### Dump — full bullet list

1. Developed chatbot solutions with Oracle Digital Assistant and Content Management (Headless and No Code)
2. Assessed alternative design models and provided technical leadership to improve the Developer Experience, increasing web traffic by 30% for the Content Management developer portal.
3. Prepared project specifications and implemented Blog Portal and Management solutions, resulting in company-wide adoption.
4. Developed APIs and custom components for Hybrid Employee Web App with WebCenter Portal and Content Management to enable customer migration from on-premises to the cloud.
5. Fixed bugs and revised old code bases to modern development standards for Content Management site templates, thus improving functionality and accessibility

### Draft — MS résumé

- Developed an Enterprise Blogging solution, resulting in adoption by 20+ Oracle teams and numerous clients
- Increased API throughput 10x with concurrency-safe request handling and distributed locks in Java
- Built chatbots on Oracle Digital Assistant by designing intent models, entity extraction pipelines, and multi-turn dialog flows, integrated with a headless CMS for content retrieval
- Built hybrid web applications and migration tooling for cloud transition of on-prem enterprise customers

### Draft — impact framing

- Successfully led the business proposal, end-to-end development and marketing efforts for an enterprise blogging solution, resulting in widespread product adoption by 21+ Oracle teams and numerous clients.
- Led a team of 4 engineers and achieved annual cost savings of $172k by developing a scalable solution and completely removing third-party dependencies across the entire codebase.
- Crafted an innovative solution for improving the accessibility of applications for people with physical disabilities, gaining buy-in from senior management to implement across 7 applications.
- Led end-to-end product lifecycle for multiple integration samples, gained 50+ signups from enterprise clients and increased retention by 30%, improving the product's customer satisfaction rank by 4 places in Gartner's report.
- Increased the load-handling capacity of the APIs by 10 times by handling concurrency issues during multiple API requests by implementing Distributed Locking.

---

## Consulting / Freelance

Clients: Sublime Finance, Leap Wallet, Kriya Finance, Stratzy AI. At peak, products reached 300k+ MAU.
(MS résumé extracurricular line: "Technical consultant and advisor for 5 fintech startups; drove strategy and led delivery of products and features trusted by 300k+ users, generating $20M+ revenue annually." — revenue no longer relevant.)

### Draft — Freelance Web3 Consultant (Mar 2022 – Aug 2022) · Cosmos, Ethereum

- Leap Wallet: Stargaze NFT integration and Export Wallet features in Leap Cosmos Wallet Chrome extension; project setup and Overview, NFTs, Governance, Activity integrations for Leap Cosmos Dashboard.
- Sublime Finance: Smart Contract integration for borrow pool; frontend bundle size and performance optimisation.

### Draft — Sublime Finance, Dubai · Frontend Developer (part-time) · Reactjs, Craco, Web3js, Tailwind

- Implemented a combination of caching and asynchronous updates for a seamless user experience.
- Developed the UI and integration with smart contracts on the frontend for borrow pool flows.

---

## Internships (during BITS, 2016–2020)

### MathWorks — Bengaluru · Intern, Engineering Development Group · May 2019 – Jul 2019

C++ Design Patterns, Modern Compiler Design, Compiler Optimizations, Large-Scale Software Development.
1. MATLAB Coder report expressions that were constant folded through the MATLAB Coder workflow.
2. Generate Polymorphic MEX function that supports multiple signatures.

### Vuclip — Pune · Intern, Advanced Analytics · Jan 2020 – Jun 2020

Multiple projects across Data Science:
1. Knowledge graphs for user journey modelling and analysis using graph databases.
2. Video intelligence using AutoML and sentiment analysis based on the valence-arousal model.
3. Data mining for metadata enrichment.
4. Predictive modelling for subscription propensity using sequence embeddings and machine learning techniques.
5. Web app for visualizing taste communities and connected content titles.
(Endsem report — advised by Dr. Chetana Gavankar.)

### Quixote

Software Filters for IMU Data · Embedded C Programming and Machine Learning.
Worked on dead reckoning using software filters in C and Python3 for IMU to interpret noisy sensor data. Used the Extended Kalman Filtering algorithm.

### iCreate

Project on Industrial Internet of Things — Analysis and Design.
Process analyses of metal-die casting and food processing industries. Suggested qualitative methods to optimize ongoing processes.

### Coderlens — Python Developer

Developed question banks for Python, NumPy, Pandas, and Data Science concepts.
Repo: https://github.com/yashtotla/coderlens

---

## Education

### Georgia Tech — M.S. Computer Science · Incoming 2026

Focus: systems for AI — LLM inference, multimodal inference, model serving.

### BITS Pilani, K.K. Birla Goa Campus — B.E. Electrical & Electronics · Aug 2016 – Aug 2020

- First Division, CGPA 8.56/10
- Relevant courses: Machine Learning, Neural Networks, Probability & Statistics, Optimization, Non-linear Optimization, Digital Image Processing, Computer Programming, Operating Systems
- Teaching Assistant: Microprocessor Programming & Interfacing; Analog & Digital VLSI Design
- Positions: Vice Chair, IEEE Chapter; Finance Head, Quark (tech fest)
- Scholarships: Merit-cum-Need (University); INSPIRE (Government of India)

### Academic artifacts

- Wavelets in Image Processing (report) — advised by Prof. Amit Setia
  https://drive.google.com/file/d/1LkFeZoPy7LQTo6PEZ4eRi6RZdsgl18k_/view
- Advanced Analytics at Vuclip (endsem report) — advised by Dr. Chetana Gavankar
  https://docs.google.com/document/d/1vKLqk1ZA3eUNnTlnkQuLV5dw3ALOGWE6/preview

---

## Projects

- **llm-serving-lab** — https://github.com/yashtotla/llm-serving-lab
  Benchmarking LLM inference optimizations across GPU and Apple Silicon (memory-bandwidth bottleneck in token generation): baseline TTFT/TPS on CUDA (RTX 4090/vLLM) and MPS (Mac/MLX); prefix caching (−51% TTFT on CUDA); quantization (BF16, INT8/AWQ, INT4/GPTQ — INT4 37% faster, negligible quality loss); speculative decoding exploration. Stack: Python, vLLM, MLX, Hugging Face, OpenAI-compatible API.
- **gpt-2** — https://github.com/yashtotla/gpt-2
  GPT-2 from scratch in PyTorch: full transformer at GPT-2-small config (12 layers/heads, 768 dim, vocab 50257, block 1024), tiktoken BPE, training loop over a text corpus (src/gpt.py, data_loader, main).

---

## Skills (from résumé)

Distributed systems, Data pipelines, API design, SDK design, Database management, Multithreading, CI/CD.
Python, Rust, JavaScript/TypeScript, SQL, Java.
PostgreSQL, MongoDB, Redis, AWS, OCI, Kubernetes, GitHub, Prometheus, FastAPI, React, Vue, Redux.

## Links

- Email: yashtotla98@gmail.com
- GitHub: https://github.com/yashtotla
- LinkedIn: https://www.linkedin.com/in/yashtotla/
- X: https://x.com/yashtotla_
