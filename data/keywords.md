# PCA keyword quick reference

> Find the keyword in the question, then read across to the answer. Keywords are in `backticks`. Answers are in **bold**. Built from mock exam misses and study sessions. Add a row every time a miss teaches a new keyword.

## Habits that find the answer

- **Rule out each option by the requirement it breaks**, then check the letter matches your reasoning.
- **`manually` loses** to a managed or automatic option, especially with `quickly`. Solve only what the question needs **now**. The PCA (Professional Cloud Architect) exam rewards the stated priority, not best practice.
- **`must not change the data` / `preserve accuracy`** means the answer controls access *around* the data, not the data itself.
- **Name the first hop** on every hybrid question (Interconnect or VPN (virtual private network)). For any networking question, ask whether the traffic is inside or outside the VPC (Virtual Private Cloud), and which direction it flows.
- **Ask "who is asking?"** A person points to IAP (Identity-Aware Proxy); code points to Workload Identity Federation.
- **No compliance word, no compliance requirement.** Pick one option per need on select-two questions. AWS (Amazon Web Services) terms in options (`security groups`) are always wrong on a GCP (Google Cloud Platform) exam.

## Network glossary

| Term | What it is |
|---|---|
| `VPC` (Virtual Private Cloud) | Your own private network in Google Cloud, split into regional subnets. |
| `subnet` | An IP (Internet Protocol) address range inside a VPC, one per region. |
| `private IP` address | Internal only; the public internet cannot route to it. |
| `firewall rules` | Allow or deny VM (virtual machine) traffic, targeted by tag or service account. |
| `Cloud Router` | Exchanges routes with on-premises via BGP (Border Gateway Protocol). |
| `Cloud NAT` (Network Address Translation) | Lets VMs with no external IP reach the internet, outbound only. |
| `Direct VPC egress` | Cloud Run's newer path **out** to private IPs in your subnet. |
| `Serverless VPC Access connector` | The older path for Cloud Run to reach your VPC. |
| `private services access` | **Peering** to Cloud SQL, AlloyDB, Memorystore for Redis (Valkey and Redis Cluster use PSC); allocate a /16-/24 range. |
| `Private Service Connect` (PSC) | An **endpoint** IP in your VPC pointing at one service, one way. |
| `Private Google Access` | Lets VMs with no external IP reach Google APIs, not general internet. |
| `VPC peering` | Connects two VPCs over private IPs; not transitive. |
| `Shared VPC` | One VPC, owned by a host project; other projects use it. |
| `Cloud Interconnect` | A private physical cable from your data center to Google. |
| `HA VPN` (high-availability VPN) | An encrypted internet tunnel; two tunnels reach a 99.99% SLA (service-level agreement). |
| `Cloud Load Balancing` | A single address that spreads traffic across backend servers. |
| `Cloud Armor` | WAF (web application firewall) and DDoS (distributed denial-of-service) protection for your load balancer. |
| `Cloud CDN` (content delivery network) | Caches content at Google's edge, closer to users. |
| `Cloud DNS` (Domain Name System) | Google-managed zones, public or private (private resolves inside your VPC only). |
| `IAP` (Identity-Aware Proxy) | Confirms identity before an app or SSH (Secure Shell); needs firewall range `35.235.240.0/20`. |
| `AlloyDB` | Postgres-compatible, faster; for mixed transactional and analytical work. |
| `Memorystore` | Managed in-memory cache: Valkey or Redis (Memcached is deprecated, shut down January 2029). |

## Databases and storage

| Keyword | Answer |
|---|---|
| `global`, `strong consistency`, `multi-region writes` | **Spanner**: only relational DB that scales globally |
| `IoT`, `time-series`, `sensor`, `high write throughput` | **Bigtable**: wide-column DB for huge write volume |
| `row key`, `hotspot`, writes concentrated on few nodes | **Bigtable**: lead key with high-cardinality ID, not timestamp |
| `Postgres` + `high performance`/`analytics` | **AlloyDB**: Postgres-compatible, faster than Cloud SQL |
| `MySQL`/`Postgres`/`SQL Server`, standard app | **Cloud SQL**: managed relational DB, one region |
| `HA`, standby takes over automatically | **Cloud SQL HA (high availability)** (regional instance): automatic failover |
| `read-heavy`, consistency across readers | **Cloud SQL read replicas**: scale reads only |
| `document`, `mobile app`, `offline sync` | **Firestore**: NoSQL document database |
| `shared file system`, `NFS` (Network File System), mount on many VMs | **Filestore**: mountable file storage, not Firestore |
| `objects`, `images`, `backups`, `data lake` | **Cloud Storage**: object storage, no filesystem |
| `VM disk` | **Persistent Disk / Hyperdisk**: block storage for a VM |
| `analytics`, `SQL over large data`, `data warehouse` | **BigQuery**: analytics DB, not for transactions |
| `latest first`, `row key`, time-series reads | **Bigtable**: lead the key with a high-cardinality ID, then a reversed timestamp so the newest rows sort first |
| `shared files`, many VMs (virtual machines) read and write | **Filestore**: the Regional tier suits general shared storage. Cloud Storage FUSE (Filesystem in Userspace) only mounts a bucket as a folder; it is still object storage |
| `delete after N days`, Cloud Storage | **Object Lifecycle rule** with a Delete action. A colder storage class deletes nothing |
| `delete after N days`, BigQuery | **Partition expiration**: removes old partitions only. Table expiration deletes the whole table |
| `unpredictable access`, no retrieval fees | **Autoclass**: moves objects between classes by use and charges no retrieval fees |
| `occasional` reads vs `less than once a year` | **Coldline**: read less often than once a quarter. **Archive**: read less than once a year |
| `flaky link`, a large upload restarts from zero | **Resumable upload** over HTTPS: continues after an interruption; a session stays active up to a week |

**Trap:** read replicas scale reads; HA auto-fails over in-region; cross-region DR needs manual promotion (see Disaster recovery).

## Disaster recovery (DR)

| Keyword | Answer |
|---|---|
| `RTO` (recovery time objective) | Max acceptable downtime after a disruption |
| `RPO` (recovery point objective) | Max acceptable data loss window |
| `cold` pattern, `backup and restore`, cheapest | **Backup and restore (cold)**: cheapest, slowest recovery |
| `warm standby`, smaller env kept running | **Warm standby**: scaled-down env, sized up on failover |
| `hot standby`, near-zero RTO/RPO | **Hot standby**: full-scale env already running |
| Cloud SQL, `promote` after regional outage | **Cloud SQL cross-region read replica**: promoted manually |
| near-zero RPO, globally consistent relational DR (disaster recovery) | **Spanner dual/multi-region**: automatic failover, zero RPO |
| object storage DR, cross-region redundancy | **Cloud Storage dual/multi-region bucket**: automated failover |
| `centralized`, policy-based backup, many workload types | **Backup and DR Service** |
| VM disk DR, snapshot schedule sets RPO | **Persistent Disk scheduled snapshots**: RPO = snapshot frequency |
| restore Cloud SQL to a `precise moment` | **Point-in-time recovery (PITR)**: needs automated backups plus transaction logs (binary logs on Cloud SQL for MySQL, write-ahead logs on Cloud SQL for PostgreSQL). High availability handles failover; it cannot undo a write |

## Hybrid connectivity

| Keyword | Answer |
|---|---|
| `10 Gbps or more`, `low latency`, `not over the internet` | **Dedicated Interconnect** |
| `cannot reach a colocation facility`, often `under 10 Gbps` | **Partner Interconnect** (VLAN attachments from 50 Mbps to 50 Gbps) |
| `quick`, `cheap`, `encrypted over the internet` | **HA VPN (high-availability virtual private network)**: 99.99% SLA (service-level agreement), also encrypts over Interconnect |
| `encrypted` private link, Interconnect is `unencrypted` by default | **MACsec for Cloud Interconnect**, or **HA VPN over Interconnect** |
| `single point of failure` on one Interconnect | **Add a second Interconnect**: bandwidth alone won't fix it |
| `VMware Engine` from on-prem | **Interconnect/VPN to VPC, then peering** to VMware Engine |
| Interconnect `uptime` tiers | **99.9%**: two Dedicated Interconnect connections in one metro. **99.99%**: four connections across two metros |
| `VMware Engine` joins your VPC (Virtual Private Cloud) | **VPC Network Peering** to the VMware Engine network. Private Service Connect is for single-service endpoints |

## Networking and load balancing

| Keyword | Answer |
|---|---|
| `global latency`, `static content`, `video` | **Cloud CDN** |
| `global latency`, `API` (application programming interface) | **Global Application Load Balancer** |
| `isolate tiers`, `web tier cannot reach DB` | **Firewall rules** on tags or service accounts |
| `one network shared by many projects` | **Shared VPC (Virtual Private Cloud)** |
| `connect two separate VPCs` | **VPC peering** |
| `private access to one managed service` across orgs | **Private Service Connect (PSC)** |
| managed service on private IP, default settings | **Private services access** (PSC only if enabled at creation) |
| `Cloud Run` to a private IP (Cloud SQL, AlloyDB) | **Direct VPC egress** (newer than the Serverless VPC Access connector) |
| no external IP, needs Google APIs | **Private Google Access** |
| route by URL path, one hostname | **Load balancer URL map** |
| rate limit per client, `WAF` (web application firewall), `DDoS` (distributed denial-of-service) | **Cloud Armor** (not Model Armor: screens AI (artificial intelligence) prompts) |
| private VMs need internet, no external IP | **Cloud NAT (network address translation)** (outbound only) |
| MIG (managed instance group) VMs `recreated repeatedly`, app works by hand | **Firewall allow rule** for the health-check ranges `130.211.0.0/22` and `35.191.0.0/16`. Failed probes trigger autohealing |
| `Cloud Run` behind a load balancer, no bypass | Ingress **internal and Cloud Load Balancing** plus a serverless NEG (network endpoint group). **Cloud Armor** attaches to the load balancer, not to Cloud Run |
| `video`, large downloads at the edge | **Media CDN** (content delivery network): streaming video and large files. Cloud CDN is general web acceleration |

## Identity and access

| Keyword | Answer |
|---|---|
| `employees`, `laptops`, `device posture`, `zero trust`, no VPN (virtual private network) | **Chrome Enterprise Premium** + **IAP (Identity-Aware Proxy)** |
| `SSH`/`RDP` (Secure Shell / Remote Desktop Protocol) to VMs, no public IP | **IAP TCP (Transmission Control Protocol) forwarding** |
| `CI/CD` (continuous integration / continuous delivery), `AWS`, `Azure`, on-prem workloads, no keys | **Workload Identity Federation** |
| `GKE pods` calling Google Cloud APIs | **Workload Identity Federation for GKE (Google Kubernetes Engine)** |
| employee sign-in with existing IdP (Okta, Microsoft Entra ID) | **Workforce Identity Federation** (not Workload: that's for code) |
| `customers` sign up/log in to your app | **Identity Platform** (not Cloud Identity: that's for staff) |
| `stop data leaving`, even with valid credentials | **VPC (Virtual Private Cloud) Service Controls** |
| `time-limited` access, expires on a date | **IAM Condition** using `request.time` |
| grant only what a role needs | **Predefined IAM role**, not basic (Owner/Editor/Viewer) |
| manage access for a team | **Grant the IAM role to a group** |
| `who changed a resource's config` | **Admin Activity audit log** (always on) |
| `who read the data`, BigQuery | **Data Access audit log** (off by default except BigQuery) |
| code runs on Google Cloud, needs credentials | **Attached service account**: no key to store or rotate |
| code outside Google Cloud, `no identity provider` | **Service account key**, as a last resort. With an identity provider (AWS (Amazon Web Services), Azure, GitHub, GitLab) use Workload Identity Federation |
| one Cloud Run service calls another | **Dedicated caller service account** with `roles/run.invoker` on the callee, plus an OIDC (OpenID Connect) ID token |
| separate permissions for `dev`, `staging`, `prod` | **One project per app per environment**. The project is the IAM (Identity and Access Management) boundary; networks only isolate traffic |
| block a setting for everyone, such as `external IPs` | **Organization policy** constraint (`compute.vmExternalIpAccess`). IAM decides who may act; organization policy decides what is allowed |
| block SSH (Secure Shell) for one folder | **Hierarchical firewall policy** attached to that folder. The organization level is too broad |

## Data protection and PII (personally identifiable information)

| Keyword | Answer |
|---|---|
| `restrict a column`, data must stay unchanged | **BigQuery column-level security** (policy tags) |
| `restrict which rows` a user sees | **Row-level security** |
| `show masked values` to some users | **Dynamic data masking** |
| `discover`, `classify`, `find PII` | **Sensitive Data Protection** (formerly Cloud DLP (data loss prevention)) |
| `de-identify` but keep joins working | **SDP tokenization / format-preserving encryption** |
| `redact PII` in prompts/responses, jailbreak | **Model Armor** + SDP integration |
| `unalterable`, `even admins` cannot delete, retain N years | **Retention policy locked with Bucket Lock** (Cloud Storage) |
| `card numbers`, less `PCI` (Payment Card Industry) exposure | **Tokenize** the card data so systems hold placeholders, not real numbers |
| tokens must still `detect duplicates` | **SDP (Sensitive Data Protection) deterministic encryption**: equal inputs give equal tokens |
| `HIPAA` (Health Insurance Portability and Accountability Act), health data | **Sign the BAA (Business Associate Agreement)** and use only covered products |

## Encryption keys

| Keyword | Answer |
|---|---|
| no key requirement, `least effort` | **Google-managed keys** (default) |
| `control rotation`, key lifecycle | **CMEK** in Cloud KMS (Key Management Service) |
| `hardware-backed`, `HSM`, `FIPS 140-2 Level 3` (Federal Information Processing Standards) | **CMEK with Cloud HSM (hardware security module)** |
| keys must never touch Google | **Cloud EKM** (External Key Manager) |
| supply your own key with each request | **CSEK** (customer-supplied encryption keys): a Cloud Storage feature. CSEK for Compute Engine is deprecated, so it is rarely the answer |

**Trap:** CMEK (customer-managed encryption keys) controls keys, **not** copying.

## VPC (Virtual Private Cloud) Service Controls

| Keyword | Answer |
|---|---|
| `exfiltration`, valid permissions, stolen credentials | **Perimeter** |
| corporate devices, IP (Internet Protocol) ranges, specific users | **Access level** |
| one account crossing, least privilege | **Ingress or egress rule** |
| two perimeters sharing broadly | **Perimeter bridge** |
| roll out without breaking workloads | **Dry-run mode** |
| `where resources may be created` | Not VPC (Virtual Private Cloud) SC: **org policy** `gcp.resourceLocations` |
| `who may act` | Not VPC SC: **IAM (Identity and Access Management)** |
| data must stay in one country | **Org policy** `gcp.resourceLocations` limits where resources live. Add VPC SC only if the question is about data exfiltration |

## Compute Engine

| Keyword | Answer |
|---|---|
| `MIG`, autoscaling/autohealing behind a load balancer | **MIG (managed instance group)**: recreates a failed VM, scales with load |
| `regional MIG`, spread zones, `zonal failure` | **Regional MIG**: 99.99% SLA (vs 99.9% single VM) |
| identical VM config reused across a MIG | **Instance template**: immutable, roll out a new version |
| `fault-tolerant`, `batch`, interruptible, lowest cost | **Spot VMs**: Google can preempt them at any time, with a best-effort shutdown of up to 30s (optional 120s notice) |
| per-core licensing, physical isolation, compliance | **Sole-tenant nodes** |
| `canary`, partial rollout to a MIG | **Rolling update with canary**: two template versions |
| new template, `leave running VMs alone` | MIG update type **Opportunistic**: applies only to new VMs or ones you pick. Proactive updates running VMs |

## Picking a compute platform

| Keyword | Answer |
|---|---|
| full OS control, `lift and shift` | **Compute Engine** |
| Kubernetes features, portability, fine control | **GKE (Google Kubernetes Engine)** |
| Kubernetes without managing nodes | **GKE Autopilot** |
| stateless container, HTTP/event, scale to zero | **Cloud Run** |
| single-purpose code, one event | **Cloud Run functions** |
| existing App Engine app | **App Engine** (Google points new apps to Cloud Run) |
| `run to completion`, parallel batch tasks | **Cloud Run jobs** |

## GKE (Google Kubernetes Engine) and Cloud Run

| Keyword | Answer |
|---|---|
| pods use a small % of requests, `over-provisioned` | **Vertical Pod Autoscaler (VPA)** (recreates the pod; in place on GKE 1.34+) |
| more load, need more pods | **Horizontal Pod Autoscaler** |
| pods `Pending`, idle nodes | **Cluster autoscaler** |
| `Google manages the nodes` | **GKE (Google Kubernetes Engine) Autopilot** |
| create node pools of the right shape | **Node auto-provisioning** |
| `many clusters`, `consistent config` | **GKE fleet** + **Config Sync** |
| `enforce policy` on clusters | **Policy Controller** |
| unified IaC (infrastructure as code) for GKE and Google Cloud | **Config Connector** |
| Cloud Run `canary`, `10% to new version` | **Traffic split between revisions** |
| `private cluster`, Cloud Build `cannot reach` it | **Cloud Build private pool** |
| `authorized networks` | Restricts which IP (Internet Protocol) ranges can reach the control-plane endpoints: the external endpoint, and the internal one through allowlisted internal IPs |
| `OOMKilled`, flat traffic, wrong requests | **VPA (Vertical Pod Autoscaler)**. More traffic needs HPA (Horizontal Pod Autoscaler). `Pending` with `Insufficient cpu` needs the cluster autoscaler |
| `control plane` must survive a zone outage | **Regional cluster**: control plane replicas in several zones. A zonal cluster has one control plane, even with nodes in several zones |
| config `identical at all times`, `drift` | **Config Sync**: syncs continuously. A pipeline applies changes only when it runs |
| `clients must not change` during a rewrite | **Apigee** as an API (application programming interface) layer in front of old and new backends. Service Directory only finds addresses |

## AI and ML

2026 renames: Vertex AI → **Gemini Enterprise Agent Platform**; Vertex AI Search → **Agent Search**; Agentspace → **Gemini Enterprise**; NotebookLM → **Gemini Notebook**.

| Keyword | Answer |
|---|---|
| standard/`open model` (Llama, Gemma), `quickly` | **Model Garden** one-click deploy |
| `custom preprocessing`, `custom prediction routine` | **Custom container** to a Vertex AI (now Agent Platform) endpoint |
| `real-time`, `fraud detection`, `agile` | **Online prediction** (batch runs on a schedule, too late) |
| `score a large dataset nightly` | **Batch prediction** |
| `SQL analysts` (Structured Query Language), data already in BigQuery | **BigQuery ML (machine learning)** |
| serving vs training data (skew), vs earlier serving (drift) | **Vertex AI Model Monitoring**: catches both |
| `streaming and batch`, one pipeline, `new build` | **Dataflow** |
| existing `Hadoop`/`Spark` jobs | **Dataproc** (Managed Service for Apache Spark) |
| answer questions from company documents | **RAG** (retrieval-augmented generation) |
| `analyze`, `summarize`, grounded in your documents | **NotebookLM** (Gemini Notebook Enterprise) |
| `automatically create`, `route`, multi-step actions | **Gemini Enterprise AI Agents** |
| ready-made `OCR` (optical character recognition), `image labels`, `speech-to-text` | **Prebuilt AI API (application programming interface)** (Vision, Speech-to-Text) |
| `skew` or `drift` | **Skew**: production data vs training data. **Drift**: production data vs earlier production data, for when training data is unavailable |
| `explain` predictions, `traceability` | **Vertex Explainable AI** (feature attributions) plus **Model Registry** (versions and lineage) |
| `explicit content` in videos | **Video Intelligence API** explicit content detection (deprecated September 14, 2026, shutdown September 14, 2027; the exam may still name it). Sensitive Data Protection inspects sensitive data, not explicit content |

## Migration tools

| Keyword | Answer |
|---|---|
| `discover on-prem`, `estimate cost/TCO` (total cost of ownership), `plan waves` | **Migration Center** |
| `lift and shift`, `minimal downtime` VMs | **Migrate to Virtual Machines** |
| databases `to Cloud SQL/AlloyDB` (Structured Query Language), minimal downtime | **Database Migration Service** |
| files online, `on-prem or S3 to Cloud Storage` | **Storage Transfer Service** |
| files offline, `petabytes`, `slow link` | **Transfer Appliance** |
| VMware as-is, `keep vSphere tooling` | **Google Cloud VMware Engine** |
| large on-premises archive, existing Partner Interconnect | **Storage Transfer Service agents** on-premises. Transfer Appliance is for offline moves over a slow link |

## Operations, SRE (Site Reliability Engineering) and DevOps

| Keyword | Answer |
|---|---|
| AI (artificial intelligence) help to `design`, `troubleshoot`, `optimize cost` | **Gemini Cloud Assist** |
| `alert` on reliability | **Alert on the SLI ratio or burn rate** |
| `logs from every project` in the org | **Aggregated sink** at org or folder level |
| `OS patching` for a VM fleet | **VM Manager Patch** |
| catch bugs early, fast iteration | **Unit tests in CI (continuous integration)**; local dev uses emulators |
| `GKE` logs or metrics `missing` | **Enable Cloud Logging and Monitoring** on the cluster |
| `Prometheus`, `PromQL`, no infra to manage (GKE) | **Managed Service for Prometheus** (Ops Agent: VMs only) |
| full API (application programming interface) management, monetization, analytics | **Apigee** |
| lightweight API gateway for serverless | **API Gateway** |
| `SLI`/`SLO`/`SLA`, `error budget` | SLI (service level indicator) = measured, SLO (service level objective) = target, SLA (service level agreement) = penalty, error budget = 100% - SLO |
| lower Pub/Sub `publish latency` | **Turn batching off** in the client library (`max_messages` of 1) |

## CI/CD (continuous integration / continuous delivery)

| Keyword | Answer |
|---|---|
| build on `push`/`pull request` (GitHub/GitLab/Bitbucket) | **Cloud Build trigger** via a repository connection |
| build steps as `cloudbuild.yaml` | **Cloud Build config file** |
| store built container images | **Artifact Registry** |
| promote dev → staging → prod, with approvals | **Cloud Deploy**: approvals + rollback |
| only allow `signed`/`attested` images (GKE (Google Kubernetes Engine), Cloud Run) | **Binary Authorization** |
| Cloud Build workers need private IP (Internet Protocol) to a private cluster | **Cloud Build private pool** |

## Cost

| Keyword | Answer |
|---|---|
| steady workload for 1 or 3 years | **Committed use discount (CUD)** |
| steady baseline + interruptible batch, one question | **CUD for the baseline + Spot VMs for the batch** |
| `permissions for a team` across many projects | **Grant IAM (Identity and Access Management) at the folder level** |


## History

### 2026-10-10 (fact check against Google Cloud docs)

Rows as they stood before the correction:

- `private services access`: Peering to Cloud SQL, AlloyDB, Memorystore; allocate a /16-/24 range. (Only Memorystore for Redis uses PSA; [Valkey networking](https://cloud.google.com/memorystore/docs/valkey/networking).)
- `Memorystore`: Managed in-memory cache: Redis or Memcached. ([Memcached deprecation](https://cloud.google.com/memorystore/docs/memcached).)
- Partner Interconnect keywords included `under 10 Gbps` as if it were a limit. ([Interconnect overview](https://cloud.google.com/network-connectivity/docs/interconnect/concepts/overview): 50 Mbps to 50 Gbps attachments.)
- Workforce Identity Federation example IdP: Azure AD (Active Directory).
- Spot VMs: Google can preempt them with up to 30s notice. ([Spot VMs](https://cloud.google.com/compute/docs/instances/spot).)
- VPA: (Auto / Recreate mode). ([VPA concepts](https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler): InPlaceOrRecreate on 1.34+.)
- Custom container to a Vertex AI endpoint.
