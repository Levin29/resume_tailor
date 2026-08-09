export const portfolio = {
  name: "Levin Sekhar",
  title: "Data Engineer",
  location: "Chennai, Tamil Nadu",
  tagline: "Cloud data platforms & pipeline engineering for healthcare and pharmacy benefit management.",
  bio:
    "Data Engineer with 3+ years architecting and optimizing scalable ETL/ELT pipelines, cloud data platforms, and enterprise data validation frameworks within the healthcare and pharmacy benefit management (PBM) domain. AWS Certified Cloud Practitioner and Databricks Certified Associate Developer for Apache Spark 3.0, with hands-on expertise across Databricks, Snowflake, Delta Lake, and lakehouse architecture processing 70M+ records annually. Proficient in Python, Scala, SQL, and PySpark for distributed data processing, delivered through CI/CD pipelines (Jenkins, Terraform, Git) that cut average job runtime by ~25%. Track record of leading regression-suite overhauls, load/performance testing, and data validation frameworks across Dev, QA, and pre-production environments. Experienced in observability (Splunk), secrets/credential security, Agile/Scrum delivery, and cross-functional stakeholder coordination.",
  avatar: "/profile.jpg",

  links: {
    email: "connectlevin485@gmail.com",
    phone: "+91 7395991082",
    linkedin: "https://linkedin.com/in/levin-sekhar-7533671a5",
    resume: "/Levin_Sekhar_Resume.docx",
  },

  education: [
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      school: "SRM Institute of Science and Technology, Chennai, Tamil Nadu",
      year: "2022",
    },
  ],

  certifications: [
    "AWS Certified Cloud Practitioner (2023)",
    "Databricks Certified Associate Developer for Apache Spark 3.0 (2024)",
  ],

  skills: [
    { category: "Languages", items: ["Python", "Scala", "SQL", "PySpark"] },
    {
      category: "Big Data & Distributed Processing",
      items: ["Apache Spark", "Databricks", "Hadoop", "Delta Lake", "Hive"],
    },
    {
      category: "Cloud & Data Platforms",
      items: [
        "AWS (S3, IAM/federated auth)",
        "Snowflake",
        "DB2",
        "RDBMS",
        "Lakehouse Architecture",
        "Unity Catalog",
      ],
    },
    {
      category: "CI/CD & DevOps",
      items: [
        "Jenkins",
        "GitHub",
        "Terraform (IaC)",
        "SAML2AWS",
        "Git",
        "packaging & versioning",
        "code refactoring",
      ],
    },
    {
      category: "Data Engineering Practices",
      items: [
        "ETL/ELT pipeline design",
        "Medallion architecture (Bronze/Silver/Gold)",
        "schema design & enhancement",
        "data ingestion",
        "materialized/published views",
        "stored procedures",
        "data modeling",
      ],
    },
    {
      category: "Quality, Testing & Observability",
      items: [
        "Regression & unit testing",
        "load/performance testing",
        "data validation frameworks",
        "Splunk logging & monitoring",
      ],
    },
    {
      category: "Security & Governance",
      items: [
        "Data governance",
        "Unity Catalog (access control & metadata management)",
        "managed secrets & credential security",
        "PEP 8 code-quality standards",
        "downstream impact analysis",
      ],
    },
    {
      category: "Methodologies & Collaboration",
      items: [
        "Agile/Scrum",
        "Scrum facilitation",
        "cross-functional stakeholder coordination",
        "SOP/runbook authoring",
      ],
    },
    {
      category: "Additional Tools",
      items: ["Postman", "PowerApps", "SharePoint", "Power Automate"],
    },
  ],

  experience: [
    {
      role: "Data Engineer — Clinical Data Mart (CDM) CRR/HIP",
      company: "Concentrix Catalyst",
      period: "Aug 2025 – Present",
      description: "Healthcare & Pharmacy Benefit Management",
      highlights: [
        "Cut average job runtime by ~25% through cluster configuration tuning, driver/worker utilization monitoring, and load testing across national drug code (NDC) processing workflows.",
        "Led a full overhaul of the regression test suite — migrating execution from local to cloud-based Spark compute and refactoring it into a distributable, versioned Python library — cutting manual validation effort across 15+ downstream benefit and clinical-rules workflows.",
        "Established a unified Jenkins CI/CD pipeline across all branches and introduced serverless DDL automation, reducing manual operational overhead and standardizing deployments.",
        "Built an ASCII-based data ingestion pipeline processing 70M+ records annually (200K+ daily), landing raw pharmacy/clinical data through Bronze-to-Silver medallion layers within the Databricks lakehouse architecture.",
        "Extended RDBMS-to-cloud lakehouse hydration (ETL/ELT) jobs and enhanced reference-data schemas — updating column mappings, classification attributes, and materialized/published views to keep consumption layers in sync with source changes.",
        "Applied data governance practices using Unity Catalog for centralized metadata management and access control across lakehouse tables, improving data discoverability and audit readiness.",
        "Strengthened security posture by replacing file-based credential storage with managed secrets and scoped access controls.",
        "Automated data refresh jobs across 3 non-production environments (Dev/Test/UAT) and authored the operational runbook (SOP) for refresh execution and troubleshooting, cutting manual refresh time per cycle.",
        "Delivered a proof-of-concept for automated Python style enforcement and initiated org-wide PEP 8 compliance in source control.",
        "Facilitated daily Agile stand-ups as Scrum facilitator, tracking blockers across ingestion, validation, and database change workstreams.",
      ],
    },
    {
      role: "Data Engineer — Clinical Data Mart (CDM) Drug Coverage Rules Engineering",
      company: "Concentrix Catalyst",
      period: "Jan 2025 – Jul 2025",
      description: "Healthcare & Pharmacy Benefit Management",
      highlights: [
        "Built proof-of-concept implementations for 5+ new data requirements and reporting use cases, accelerating requirement-to-delivery turnaround for drug coverage and formulary processing.",
        "Enhanced legacy pipelines to support updated business rules and introduced pre-processing validation checkpoints, enforcing data freshness before downstream workflow execution.",
        "Refactored pipeline code to align with current business and compliance standards while preserving cross-environment reliability.",
        "Integrated structured, Splunk-compatible logging that improved real-time monitoring and cut incident troubleshooting time.",
        "Designed and executed unit tests to verify pipeline functionality and data accuracy, and developed warehouse tables/views to support new analytics requirements.",
      ],
    },
    {
      role: "Data Engineer — Consolidated Appropriations Act (CAA) Health Services Reporting",
      company: "Concentrix Catalyst",
      period: "Jan 2024 – Jul 2024",
      description: "Healthcare & Pharmacy Benefit Management",
      highlights: [
        "Migrated data processing workflows from on-premises Hadoop to a cloud-based Spark platform, validating functional parity across 6+ pipelines post-migration with zero accuracy regression.",
        "Built comprehensive test suites with 15+ unit tests covering core functions, improving pre-release defect detection.",
        "Implemented data transformation and standardization scripts across on-prem and cloud Spark platforms to meet federal healthcare transparency reporting requirements, delivering submission-ready outputs for government portals.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Archiot Digital Solutions Private Limited",
      period: "Jun 2022 – Jul 2023",
      description: "Business Applications & Microsoft 365",
      highlights: [
        "Developed and customized business applications using Microsoft PowerApps, SharePoint, and Power Automate, streamlining internal workflows across teams.",
        "Administered the Microsoft 365 environment (Exchange, Intune, Azure AD) and built both canvas and model-driven PowerApps, including enhancements to existing applications.",
        "Reviewed application designs, coordinated task progress with stakeholders and team leads, and tested/debugged applications prior to release.",
        "Delivered ongoing production support and maintenance for deployed business solutions, translating business requirements into technical implementations.",
      ],
    },
  ],
} as const;
