// Generated file. Keyword reference for the PCA study app.
window.PCA_KEYWORDS = [
  {
    "section": "Network glossary",
    "keyword": "`VPC` (Virtual Private Cloud)",
    "answer": "Your own private network in Google Cloud, split into regional subnets.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`subnet`",
    "answer": "An IP (Internet Protocol) address range inside a VPC, one per region.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`private IP` address",
    "answer": "Internal only; the public internet cannot route to it.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`firewall rules`",
    "answer": "Allow or deny VM (virtual machine) traffic, targeted by tag or service account.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Cloud Router`",
    "answer": "Exchanges routes with on-premises via BGP (Border Gateway Protocol).",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Cloud NAT` (Network Address Translation)",
    "answer": "Lets VMs with no external IP reach the internet, outbound only.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Direct VPC egress`",
    "answer": "Cloud Run's newer path **out** to private IPs in your subnet.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Serverless VPC Access connector`",
    "answer": "The older path for Cloud Run to reach your VPC.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`private services access`",
    "answer": "**Peering** to Cloud SQL, AlloyDB, Memorystore for Redis (Valkey and Redis Cluster use PSC); allocate a /16-/24 range.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Private Service Connect` (PSC)",
    "answer": "An **endpoint** IP in your VPC pointing at one service, one way.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Private Google Access`",
    "answer": "Lets VMs with no external IP reach Google APIs, not general internet.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`VPC peering`",
    "answer": "Connects two VPCs over private IPs; not transitive.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Shared VPC`",
    "answer": "One VPC, owned by a host project; other projects use it.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Cloud Interconnect`",
    "answer": "A private physical cable from your data center to Google.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`HA VPN` (high-availability VPN)",
    "answer": "An encrypted internet tunnel; two tunnels reach a 99.99% SLA (service-level agreement).",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Cloud Load Balancing`",
    "answer": "A single address that spreads traffic across backend servers.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Cloud Armor`",
    "answer": "WAF (web application firewall) and DDoS (distributed denial-of-service) protection for your load balancer.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Cloud CDN` (content delivery network)",
    "answer": "Caches content at Google's edge, closer to users.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Cloud DNS` (Domain Name System)",
    "answer": "Google-managed zones, public or private (private resolves inside your VPC only).",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`IAP` (Identity-Aware Proxy)",
    "answer": "Confirms identity before an app or SSH (Secure Shell); needs firewall range `35.235.240.0/20`.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`AlloyDB`",
    "answer": "Postgres-compatible, faster; for mixed transactional and analytical work.",
    "why": ""
  },
  {
    "section": "Network glossary",
    "keyword": "`Memorystore`",
    "answer": "Managed in-memory cache: Valkey or Redis (Memcached is deprecated, shut down January 2029).",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`global`, `strong consistency`, `multi-region writes`",
    "answer": "**Spanner**: only relational DB that scales globally",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`IoT`, `time-series`, `sensor`, `high write throughput`",
    "answer": "**Bigtable**: wide-column DB for huge write volume",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`row key`, `hotspot`, writes concentrated on few nodes",
    "answer": "**Bigtable**: lead key with high-cardinality ID, not timestamp",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`Postgres` + `high performance`/`analytics`",
    "answer": "**AlloyDB**: Postgres-compatible, faster than Cloud SQL",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`MySQL`/`Postgres`/`SQL Server`, standard app",
    "answer": "**Cloud SQL**: managed relational DB, one region",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`HA`, standby takes over automatically",
    "answer": "**Cloud SQL HA (high availability)** (regional instance): automatic failover",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`read-heavy`, consistency across readers",
    "answer": "**Cloud SQL read replicas**: scale reads only",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`document`, `mobile app`, `offline sync`",
    "answer": "**Firestore**: NoSQL document database",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`shared file system`, `NFS` (Network File System), mount on many VMs",
    "answer": "**Filestore**: mountable file storage, not Firestore",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`objects`, `images`, `backups`, `data lake`",
    "answer": "**Cloud Storage**: object storage, no filesystem",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`VM disk`",
    "answer": "**Persistent Disk / Hyperdisk**: block storage for a VM",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`analytics`, `SQL over large data`, `data warehouse`",
    "answer": "**BigQuery**: analytics DB, not for transactions",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`latest first`, `row key`, time-series reads",
    "answer": "**Bigtable**: lead the key with a high-cardinality ID, then a reversed timestamp so the newest rows sort first",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`shared files`, many VMs (virtual machines) read and write",
    "answer": "**Filestore**: the Regional tier suits general shared storage. Cloud Storage FUSE (Filesystem in Userspace) only mounts a bucket as a folder; it is still object storage",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`delete after N days`, Cloud Storage",
    "answer": "**Object Lifecycle rule** with a Delete action. A colder storage class deletes nothing",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`delete after N days`, BigQuery",
    "answer": "**Partition expiration**: removes old partitions only. Table expiration deletes the whole table",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`unpredictable access`, no retrieval fees",
    "answer": "**Autoclass**: moves objects between classes by use and charges no retrieval fees",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`occasional` reads vs `less than once a year`",
    "answer": "**Coldline**: read less often than once a quarter. **Archive**: read less than once a year",
    "why": ""
  },
  {
    "section": "Databases and storage",
    "keyword": "`flaky link`, a large upload restarts from zero",
    "answer": "**Resumable upload** over HTTPS: continues after an interruption; a session stays active up to a week",
    "why": ""
  },
  {
    "section": "Disaster recovery (DR)",
    "keyword": "`RTO` (recovery time objective)",
    "answer": "Max acceptable downtime after a disruption",
    "why": ""
  },
  {
    "section": "Disaster recovery (DR)",
    "keyword": "`RPO` (recovery point objective)",
    "answer": "Max acceptable data loss window",
    "why": ""
  },
  {
    "section": "Disaster recovery (DR)",
    "keyword": "`cold` pattern, `backup and restore`, cheapest",
    "answer": "**Backup and restore (cold)**: cheapest, slowest recovery",
    "why": ""
  },
  {
    "section": "Disaster recovery (DR)",
    "keyword": "`warm standby`, smaller env kept running",
    "answer": "**Warm standby**: scaled-down env, sized up on failover",
    "why": ""
  },
  {
    "section": "Disaster recovery (DR)",
    "keyword": "`hot standby`, near-zero RTO/RPO",
    "answer": "**Hot standby**: full-scale env already running",
    "why": ""
  },
  {
    "section": "Disaster recovery (DR)",
    "keyword": "Cloud SQL, `promote` after regional outage",
    "answer": "**Cloud SQL cross-region read replica**: promoted manually",
    "why": ""
  },
  {
    "section": "Disaster recovery (DR)",
    "keyword": "near-zero RPO, globally consistent relational DR (disaster recovery)",
    "answer": "**Spanner dual/multi-region**: automatic failover, zero RPO",
    "why": ""
  },
  {
    "section": "Disaster recovery (DR)",
    "keyword": "object storage DR, cross-region redundancy",
    "answer": "**Cloud Storage dual/multi-region bucket**: automated failover",
    "why": ""
  },
  {
    "section": "Disaster recovery (DR)",
    "keyword": "`centralized`, policy-based backup, many workload types",
    "answer": "**Backup and DR Service**",
    "why": ""
  },
  {
    "section": "Disaster recovery (DR)",
    "keyword": "VM disk DR, snapshot schedule sets RPO",
    "answer": "**Persistent Disk scheduled snapshots**: RPO = snapshot frequency",
    "why": ""
  },
  {
    "section": "Disaster recovery (DR)",
    "keyword": "restore Cloud SQL to a `precise moment`",
    "answer": "**Point-in-time recovery (PITR)**: needs automated backups plus transaction logs (binary logs on Cloud SQL for MySQL, write-ahead logs on Cloud SQL for PostgreSQL). High availability handles failover; it cannot undo a write",
    "why": ""
  },
  {
    "section": "Hybrid connectivity",
    "keyword": "`10 Gbps or more`, `low latency`, `not over the internet`",
    "answer": "**Dedicated Interconnect**",
    "why": ""
  },
  {
    "section": "Hybrid connectivity",
    "keyword": "`cannot reach a colocation facility`, often `under 10 Gbps`",
    "answer": "**Partner Interconnect** (VLAN attachments from 50 Mbps to 50 Gbps)",
    "why": ""
  },
  {
    "section": "Hybrid connectivity",
    "keyword": "`quick`, `cheap`, `encrypted over the internet`",
    "answer": "**HA VPN (high-availability virtual private network)**: 99.99% SLA (service-level agreement), also encrypts over Interconnect",
    "why": ""
  },
  {
    "section": "Hybrid connectivity",
    "keyword": "`encrypted` private link, Interconnect is `unencrypted` by default",
    "answer": "**MACsec for Cloud Interconnect**, or **HA VPN over Interconnect**",
    "why": ""
  },
  {
    "section": "Hybrid connectivity",
    "keyword": "`single point of failure` on one Interconnect",
    "answer": "**Add a second Interconnect**: bandwidth alone won't fix it",
    "why": ""
  },
  {
    "section": "Hybrid connectivity",
    "keyword": "`VMware Engine` from on-prem",
    "answer": "**Interconnect/VPN to VPC, then peering** to VMware Engine",
    "why": ""
  },
  {
    "section": "Hybrid connectivity",
    "keyword": "Interconnect `uptime` tiers",
    "answer": "**99.9%**: two Dedicated Interconnect connections in one metro. **99.99%**: four connections across two metros",
    "why": ""
  },
  {
    "section": "Hybrid connectivity",
    "keyword": "`VMware Engine` joins your VPC (Virtual Private Cloud)",
    "answer": "**VPC Network Peering** to the VMware Engine network. Private Service Connect is for single-service endpoints",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "`global latency`, `static content`, `video`",
    "answer": "**Cloud CDN**",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "`global latency`, `API` (application programming interface)",
    "answer": "**Global Application Load Balancer**",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "`isolate tiers`, `web tier cannot reach DB`",
    "answer": "**Firewall rules** on tags or service accounts",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "`one network shared by many projects`",
    "answer": "**Shared VPC (Virtual Private Cloud)**",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "`connect two separate VPCs`",
    "answer": "**VPC peering**",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "`private access to one managed service` across orgs",
    "answer": "**Private Service Connect (PSC)**",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "managed service on private IP, default settings",
    "answer": "**Private services access** (PSC only if enabled at creation)",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "`Cloud Run` to a private IP (Cloud SQL, AlloyDB)",
    "answer": "**Direct VPC egress** (newer than the Serverless VPC Access connector)",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "no external IP, needs Google APIs",
    "answer": "**Private Google Access**",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "route by URL path, one hostname",
    "answer": "**Load balancer URL map**",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "rate limit per client, `WAF` (web application firewall), `DDoS` (distributed denial-of-service)",
    "answer": "**Cloud Armor** (not Model Armor: screens AI (artificial intelligence) prompts)",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "private VMs need internet, no external IP",
    "answer": "**Cloud NAT (network address translation)** (outbound only)",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "MIG (managed instance group) VMs `recreated repeatedly`, app works by hand",
    "answer": "**Firewall allow rule** for the health-check ranges `130.211.0.0/22` and `35.191.0.0/16`. Failed probes trigger autohealing",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "`Cloud Run` behind a load balancer, no bypass",
    "answer": "Ingress **internal and Cloud Load Balancing** plus a serverless NEG (network endpoint group). **Cloud Armor** attaches to the load balancer, not to Cloud Run",
    "why": ""
  },
  {
    "section": "Networking and load balancing",
    "keyword": "`video`, large downloads at the edge",
    "answer": "**Media CDN** (content delivery network): streaming video and large files. Cloud CDN is general web acceleration",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "`employees`, `laptops`, `device posture`, `zero trust`, no VPN (virtual private network)",
    "answer": "**Chrome Enterprise Premium** + **IAP (Identity-Aware Proxy)**",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "`SSH`/`RDP` (Secure Shell / Remote Desktop Protocol) to VMs, no public IP",
    "answer": "**IAP TCP (Transmission Control Protocol) forwarding**",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "`CI/CD` (continuous integration / continuous delivery), `AWS`, `Azure`, on-prem workloads, no keys",
    "answer": "**Workload Identity Federation**",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "`GKE pods` calling Google Cloud APIs",
    "answer": "**Workload Identity Federation for GKE (Google Kubernetes Engine)**",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "employee sign-in with existing IdP (Okta, Microsoft Entra ID)",
    "answer": "**Workforce Identity Federation** (not Workload: that's for code)",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "`customers` sign up/log in to your app",
    "answer": "**Identity Platform** (not Cloud Identity: that's for staff)",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "`stop data leaving`, even with valid credentials",
    "answer": "**VPC (Virtual Private Cloud) Service Controls**",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "`time-limited` access, expires on a date",
    "answer": "**IAM Condition** using `request.time`",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "grant only what a role needs",
    "answer": "**Predefined IAM role**, not basic (Owner/Editor/Viewer)",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "manage access for a team",
    "answer": "**Grant the IAM role to a group**",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "`who changed a resource's config`",
    "answer": "**Admin Activity audit log** (always on)",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "`who read the data`, BigQuery",
    "answer": "**Data Access audit log** (off by default except BigQuery)",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "code runs on Google Cloud, needs credentials",
    "answer": "**Attached service account**: no key to store or rotate",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "code outside Google Cloud, `no identity provider`",
    "answer": "**Service account key**, as a last resort. With an identity provider (AWS (Amazon Web Services), Azure, GitHub, GitLab) use Workload Identity Federation",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "one Cloud Run service calls another",
    "answer": "**Dedicated caller service account** with `roles/run.invoker` on the callee, plus an OIDC (OpenID Connect) ID token",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "separate permissions for `dev`, `staging`, `prod`",
    "answer": "**One project per app per environment**. The project is the IAM (Identity and Access Management) boundary; networks only isolate traffic",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "block a setting for everyone, such as `external IPs`",
    "answer": "**Organization policy** constraint (`compute.vmExternalIpAccess`). IAM decides who may act; organization policy decides what is allowed",
    "why": ""
  },
  {
    "section": "Identity and access",
    "keyword": "block SSH (Secure Shell) for one folder",
    "answer": "**Hierarchical firewall policy** attached to that folder. The organization level is too broad",
    "why": ""
  },
  {
    "section": "Data protection and PII (personally identifiable information)",
    "keyword": "`restrict a column`, data must stay unchanged",
    "answer": "**BigQuery column-level security** (policy tags)",
    "why": ""
  },
  {
    "section": "Data protection and PII (personally identifiable information)",
    "keyword": "`restrict which rows` a user sees",
    "answer": "**Row-level security**",
    "why": ""
  },
  {
    "section": "Data protection and PII (personally identifiable information)",
    "keyword": "`show masked values` to some users",
    "answer": "**Dynamic data masking**",
    "why": ""
  },
  {
    "section": "Data protection and PII (personally identifiable information)",
    "keyword": "`discover`, `classify`, `find PII`",
    "answer": "**Sensitive Data Protection** (formerly Cloud DLP (data loss prevention))",
    "why": ""
  },
  {
    "section": "Data protection and PII (personally identifiable information)",
    "keyword": "`de-identify` but keep joins working",
    "answer": "**SDP tokenization / format-preserving encryption**",
    "why": ""
  },
  {
    "section": "Data protection and PII (personally identifiable information)",
    "keyword": "`redact PII` in prompts/responses, jailbreak",
    "answer": "**Model Armor** + SDP integration",
    "why": ""
  },
  {
    "section": "Data protection and PII (personally identifiable information)",
    "keyword": "`unalterable`, `even admins` cannot delete, retain N years",
    "answer": "**Retention policy locked with Bucket Lock** (Cloud Storage)",
    "why": ""
  },
  {
    "section": "Data protection and PII (personally identifiable information)",
    "keyword": "`card numbers`, less `PCI` (Payment Card Industry) exposure",
    "answer": "**Tokenize** the card data so systems hold placeholders, not real numbers",
    "why": ""
  },
  {
    "section": "Data protection and PII (personally identifiable information)",
    "keyword": "tokens must still `detect duplicates`",
    "answer": "**SDP (Sensitive Data Protection) deterministic encryption**: equal inputs give equal tokens",
    "why": ""
  },
  {
    "section": "Data protection and PII (personally identifiable information)",
    "keyword": "`HIPAA` (Health Insurance Portability and Accountability Act), health data",
    "answer": "**Sign the BAA (Business Associate Agreement)** and use only covered products",
    "why": ""
  },
  {
    "section": "Encryption keys",
    "keyword": "no key requirement, `least effort`",
    "answer": "**Google-managed keys** (default)",
    "why": ""
  },
  {
    "section": "Encryption keys",
    "keyword": "`control rotation`, key lifecycle",
    "answer": "**CMEK** in Cloud KMS (Key Management Service)",
    "why": ""
  },
  {
    "section": "Encryption keys",
    "keyword": "`hardware-backed`, `HSM`, `FIPS 140-2 Level 3` (Federal Information Processing Standards)",
    "answer": "**CMEK with Cloud HSM (hardware security module)**",
    "why": ""
  },
  {
    "section": "Encryption keys",
    "keyword": "keys must never touch Google",
    "answer": "**Cloud EKM** (External Key Manager)",
    "why": ""
  },
  {
    "section": "Encryption keys",
    "keyword": "supply your own key with each request",
    "answer": "**CSEK** (customer-supplied encryption keys): a Cloud Storage feature. CSEK for Compute Engine is deprecated, so it is rarely the answer",
    "why": ""
  },
  {
    "section": "VPC (Virtual Private Cloud) Service Controls",
    "keyword": "`exfiltration`, valid permissions, stolen credentials",
    "answer": "**Perimeter**",
    "why": ""
  },
  {
    "section": "VPC (Virtual Private Cloud) Service Controls",
    "keyword": "corporate devices, IP (Internet Protocol) ranges, specific users",
    "answer": "**Access level**",
    "why": ""
  },
  {
    "section": "VPC (Virtual Private Cloud) Service Controls",
    "keyword": "one account crossing, least privilege",
    "answer": "**Ingress or egress rule**",
    "why": ""
  },
  {
    "section": "VPC (Virtual Private Cloud) Service Controls",
    "keyword": "two perimeters sharing broadly",
    "answer": "**Perimeter bridge**",
    "why": ""
  },
  {
    "section": "VPC (Virtual Private Cloud) Service Controls",
    "keyword": "roll out without breaking workloads",
    "answer": "**Dry-run mode**",
    "why": ""
  },
  {
    "section": "VPC (Virtual Private Cloud) Service Controls",
    "keyword": "`where resources may be created`",
    "answer": "Not VPC (Virtual Private Cloud) SC: **org policy** `gcp.resourceLocations`",
    "why": ""
  },
  {
    "section": "VPC (Virtual Private Cloud) Service Controls",
    "keyword": "`who may act`",
    "answer": "Not VPC SC: **IAM (Identity and Access Management)**",
    "why": ""
  },
  {
    "section": "VPC (Virtual Private Cloud) Service Controls",
    "keyword": "data must stay in one country",
    "answer": "**Org policy** `gcp.resourceLocations` limits where resources live. Add VPC SC only if the question is about data exfiltration",
    "why": ""
  },
  {
    "section": "Compute Engine",
    "keyword": "`MIG`, autoscaling/autohealing behind a load balancer",
    "answer": "**MIG (managed instance group)**: recreates a failed VM, scales with load",
    "why": ""
  },
  {
    "section": "Compute Engine",
    "keyword": "`regional MIG`, spread zones, `zonal failure`",
    "answer": "**Regional MIG**: 99.99% SLA (vs 99.9% single VM)",
    "why": ""
  },
  {
    "section": "Compute Engine",
    "keyword": "identical VM config reused across a MIG",
    "answer": "**Instance template**: immutable, roll out a new version",
    "why": ""
  },
  {
    "section": "Compute Engine",
    "keyword": "`fault-tolerant`, `batch`, interruptible, lowest cost",
    "answer": "**Spot VMs**: Google can preempt them at any time, with a best-effort shutdown of up to 30s (optional 120s notice)",
    "why": ""
  },
  {
    "section": "Compute Engine",
    "keyword": "per-core licensing, physical isolation, compliance",
    "answer": "**Sole-tenant nodes**",
    "why": ""
  },
  {
    "section": "Compute Engine",
    "keyword": "`canary`, partial rollout to a MIG",
    "answer": "**Rolling update with canary**: two template versions",
    "why": ""
  },
  {
    "section": "Compute Engine",
    "keyword": "new template, `leave running VMs alone`",
    "answer": "MIG update type **Opportunistic**: applies only to new VMs or ones you pick. Proactive updates running VMs",
    "why": ""
  },
  {
    "section": "Picking a compute platform",
    "keyword": "full OS control, `lift and shift`",
    "answer": "**Compute Engine**",
    "why": ""
  },
  {
    "section": "Picking a compute platform",
    "keyword": "Kubernetes features, portability, fine control",
    "answer": "**GKE (Google Kubernetes Engine)**",
    "why": ""
  },
  {
    "section": "Picking a compute platform",
    "keyword": "Kubernetes without managing nodes",
    "answer": "**GKE Autopilot**",
    "why": ""
  },
  {
    "section": "Picking a compute platform",
    "keyword": "stateless container, HTTP/event, scale to zero",
    "answer": "**Cloud Run**",
    "why": ""
  },
  {
    "section": "Picking a compute platform",
    "keyword": "single-purpose code, one event",
    "answer": "**Cloud Run functions**",
    "why": ""
  },
  {
    "section": "Picking a compute platform",
    "keyword": "existing App Engine app",
    "answer": "**App Engine** (Google points new apps to Cloud Run)",
    "why": ""
  },
  {
    "section": "Picking a compute platform",
    "keyword": "`run to completion`, parallel batch tasks",
    "answer": "**Cloud Run jobs**",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "pods use a small % of requests, `over-provisioned`",
    "answer": "**Vertical Pod Autoscaler (VPA)** (recreates the pod; in place on GKE 1.34+)",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "more load, need more pods",
    "answer": "**Horizontal Pod Autoscaler**",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "pods `Pending`, idle nodes",
    "answer": "**Cluster autoscaler**",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "`Google manages the nodes`",
    "answer": "**GKE (Google Kubernetes Engine) Autopilot**",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "create node pools of the right shape",
    "answer": "**Node auto-provisioning**",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "`many clusters`, `consistent config`",
    "answer": "**GKE fleet** + **Config Sync**",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "`enforce policy` on clusters",
    "answer": "**Policy Controller**",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "unified IaC (infrastructure as code) for GKE and Google Cloud",
    "answer": "**Config Connector**",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "Cloud Run `canary`, `10% to new version`",
    "answer": "**Traffic split between revisions**",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "`private cluster`, Cloud Build `cannot reach` it",
    "answer": "**Cloud Build private pool**",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "`authorized networks`",
    "answer": "Restricts which IP (Internet Protocol) ranges can reach the control-plane endpoints: the external endpoint, and the internal one through allowlisted internal IPs",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "`OOMKilled`, flat traffic, wrong requests",
    "answer": "**VPA (Vertical Pod Autoscaler)**. More traffic needs HPA (Horizontal Pod Autoscaler). `Pending` with `Insufficient cpu` needs the cluster autoscaler",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "`control plane` must survive a zone outage",
    "answer": "**Regional cluster**: control plane replicas in several zones. A zonal cluster has one control plane, even with nodes in several zones",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "config `identical at all times`, `drift`",
    "answer": "**Config Sync**: syncs continuously. A pipeline applies changes only when it runs",
    "why": ""
  },
  {
    "section": "GKE (Google Kubernetes Engine) and Cloud Run",
    "keyword": "`clients must not change` during a rewrite",
    "answer": "**Apigee** as an API (application programming interface) layer in front of old and new backends. Service Directory only finds addresses",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "standard/`open model` (Llama, Gemma), `quickly`",
    "answer": "**Model Garden** one-click deploy",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "`custom preprocessing`, `custom prediction routine`",
    "answer": "**Custom container** to a Vertex AI (now Agent Platform) endpoint",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "`real-time`, `fraud detection`, `agile`",
    "answer": "**Online prediction** (batch runs on a schedule, too late)",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "`score a large dataset nightly`",
    "answer": "**Batch prediction**",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "`SQL analysts` (Structured Query Language), data already in BigQuery",
    "answer": "**BigQuery ML (machine learning)**",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "serving vs training data (skew), vs earlier serving (drift)",
    "answer": "**Vertex AI Model Monitoring**: catches both",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "`streaming and batch`, one pipeline, `new build`",
    "answer": "**Dataflow**",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "existing `Hadoop`/`Spark` jobs",
    "answer": "**Dataproc** (Managed Service for Apache Spark)",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "answer questions from company documents",
    "answer": "**RAG** (retrieval-augmented generation)",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "`analyze`, `summarize`, grounded in your documents",
    "answer": "**NotebookLM** (Gemini Notebook Enterprise)",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "`automatically create`, `route`, multi-step actions",
    "answer": "**Gemini Enterprise AI Agents**",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "ready-made `OCR` (optical character recognition), `image labels`, `speech-to-text`",
    "answer": "**Prebuilt AI API (application programming interface)** (Vision, Speech-to-Text)",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "`skew` or `drift`",
    "answer": "**Skew**: production data vs training data. **Drift**: production data vs earlier production data, for when training data is unavailable",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "`explain` predictions, `traceability`",
    "answer": "**Vertex Explainable AI** (feature attributions) plus **Model Registry** (versions and lineage)",
    "why": ""
  },
  {
    "section": "AI and ML",
    "keyword": "`explicit content` in videos",
    "answer": "**Video Intelligence API** explicit content detection (deprecated September 14, 2026, shutdown September 14, 2027; the exam may still name it). Sensitive Data Protection inspects sensitive data, not explicit content",
    "why": ""
  },
  {
    "section": "Migration tools",
    "keyword": "`discover on-prem`, `estimate cost/TCO` (total cost of ownership), `plan waves`",
    "answer": "**Migration Center**",
    "why": ""
  },
  {
    "section": "Migration tools",
    "keyword": "`lift and shift`, `minimal downtime` VMs",
    "answer": "**Migrate to Virtual Machines**",
    "why": ""
  },
  {
    "section": "Migration tools",
    "keyword": "databases `to Cloud SQL/AlloyDB` (Structured Query Language), minimal downtime",
    "answer": "**Database Migration Service**",
    "why": ""
  },
  {
    "section": "Migration tools",
    "keyword": "files online, `on-prem or S3 to Cloud Storage`",
    "answer": "**Storage Transfer Service**",
    "why": ""
  },
  {
    "section": "Migration tools",
    "keyword": "files offline, `petabytes`, `slow link`",
    "answer": "**Transfer Appliance**",
    "why": ""
  },
  {
    "section": "Migration tools",
    "keyword": "VMware as-is, `keep vSphere tooling`",
    "answer": "**Google Cloud VMware Engine**",
    "why": ""
  },
  {
    "section": "Migration tools",
    "keyword": "large on-premises archive, existing Partner Interconnect",
    "answer": "**Storage Transfer Service agents** on-premises. Transfer Appliance is for offline moves over a slow link",
    "why": ""
  },
  {
    "section": "Operations, SRE (Site Reliability Engineering) and DevOps",
    "keyword": "AI (artificial intelligence) help to `design`, `troubleshoot`, `optimize cost`",
    "answer": "**Gemini Cloud Assist**",
    "why": ""
  },
  {
    "section": "Operations, SRE (Site Reliability Engineering) and DevOps",
    "keyword": "`alert` on reliability",
    "answer": "**Alert on the SLI ratio or burn rate**",
    "why": ""
  },
  {
    "section": "Operations, SRE (Site Reliability Engineering) and DevOps",
    "keyword": "`logs from every project` in the org",
    "answer": "**Aggregated sink** at org or folder level",
    "why": ""
  },
  {
    "section": "Operations, SRE (Site Reliability Engineering) and DevOps",
    "keyword": "`OS patching` for a VM fleet",
    "answer": "**VM Manager Patch**",
    "why": ""
  },
  {
    "section": "Operations, SRE (Site Reliability Engineering) and DevOps",
    "keyword": "catch bugs early, fast iteration",
    "answer": "**Unit tests in CI (continuous integration)**; local dev uses emulators",
    "why": ""
  },
  {
    "section": "Operations, SRE (Site Reliability Engineering) and DevOps",
    "keyword": "`GKE` logs or metrics `missing`",
    "answer": "**Enable Cloud Logging and Monitoring** on the cluster",
    "why": ""
  },
  {
    "section": "Operations, SRE (Site Reliability Engineering) and DevOps",
    "keyword": "`Prometheus`, `PromQL`, no infra to manage (GKE)",
    "answer": "**Managed Service for Prometheus** (Ops Agent: VMs only)",
    "why": ""
  },
  {
    "section": "Operations, SRE (Site Reliability Engineering) and DevOps",
    "keyword": "full API (application programming interface) management, monetization, analytics",
    "answer": "**Apigee**",
    "why": ""
  },
  {
    "section": "Operations, SRE (Site Reliability Engineering) and DevOps",
    "keyword": "lightweight API gateway for serverless",
    "answer": "**API Gateway**",
    "why": ""
  },
  {
    "section": "Operations, SRE (Site Reliability Engineering) and DevOps",
    "keyword": "`SLI`/`SLO`/`SLA`, `error budget`",
    "answer": "SLI (service level indicator) = measured, SLO (service level objective) = target, SLA (service level agreement) = penalty, error budget = 100% - SLO",
    "why": ""
  },
  {
    "section": "Operations, SRE (Site Reliability Engineering) and DevOps",
    "keyword": "lower Pub/Sub `publish latency`",
    "answer": "**Turn batching off** in the client library (`max_messages` of 1)",
    "why": ""
  },
  {
    "section": "CI/CD (continuous integration / continuous delivery)",
    "keyword": "build on `push`/`pull request` (GitHub/GitLab/Bitbucket)",
    "answer": "**Cloud Build trigger** via a repository connection",
    "why": ""
  },
  {
    "section": "CI/CD (continuous integration / continuous delivery)",
    "keyword": "build steps as `cloudbuild.yaml`",
    "answer": "**Cloud Build config file**",
    "why": ""
  },
  {
    "section": "CI/CD (continuous integration / continuous delivery)",
    "keyword": "store built container images",
    "answer": "**Artifact Registry**",
    "why": ""
  },
  {
    "section": "CI/CD (continuous integration / continuous delivery)",
    "keyword": "promote dev → staging → prod, with approvals",
    "answer": "**Cloud Deploy**: approvals + rollback",
    "why": ""
  },
  {
    "section": "CI/CD (continuous integration / continuous delivery)",
    "keyword": "only allow `signed`/`attested` images (GKE (Google Kubernetes Engine), Cloud Run)",
    "answer": "**Binary Authorization**",
    "why": ""
  },
  {
    "section": "CI/CD (continuous integration / continuous delivery)",
    "keyword": "Cloud Build workers need private IP (Internet Protocol) to a private cluster",
    "answer": "**Cloud Build private pool**",
    "why": ""
  },
  {
    "section": "Cost",
    "keyword": "steady workload for 1 or 3 years",
    "answer": "**Committed use discount (CUD)**",
    "why": ""
  },
  {
    "section": "Cost",
    "keyword": "steady baseline + interruptible batch, one question",
    "answer": "**CUD for the baseline + Spot VMs for the batch**",
    "why": ""
  },
  {
    "section": "Cost",
    "keyword": "`permissions for a team` across many projects",
    "answer": "**Grant IAM (Identity and Access Management) at the folder level**",
    "why": ""
  }
];
window.PCA_HABITS = [
  "**Rule out each option by the requirement it breaks**, then check the letter matches your reasoning.",
  "**`manually` loses** to a managed or automatic option, especially with `quickly`. Solve only what the question needs **now**. The PCA (Professional Cloud Architect) exam rewards the stated priority, not best practice.",
  "**`must not change the data` / `preserve accuracy`** means the answer controls access *around* the data, not the data itself.",
  "**Name the first hop** on every hybrid question (Interconnect or VPN (virtual private network)). For any networking question, ask whether the traffic is inside or outside the VPC (Virtual Private Cloud), and which direction it flows.",
  "**Ask \"who is asking?\"** A person points to IAP (Identity-Aware Proxy); code points to Workload Identity Federation.",
  "**No compliance word, no compliance requirement.** Pick one option per need on select-two questions. AWS (Amazon Web Services) terms in options (`security groups`) are always wrong on a GCP (Google Cloud Platform) exam."
];
