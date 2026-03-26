export const personalInfo = {
  name: "Satish Kumar Pyata",
  title: "Senior Java Full Stack Developer",
  headline: "I build cloud-native systems that scale and perform under pressure",
  highlightedText: "scale and perform",
  subtitle: "Java  |  Spring Boot  |  Kafka  |  AWS  |  Angular  |  React",
  email: "satishs.work@gmail.com",
  phone: "+1 (313) 283-8679",
  github: "https://github.com/COutSatish",
  linkedin: "https://www.linkedin.com/in/satishpyata/",
  location: "United States",
}

export const aboutText = {
  philosophy: `I'm a Senior Java Full Stack Developer with 9+ years of experience delivering cloud-native, high-performance enterprise applications across telecom, financial services, healthcare, and auto insurance industries. I specialize in end-to-end software development using Java/J2EE, microservices, RESTful APIs, Spring Boot, and front-end frameworks like Angular and React.`,
  approach: `My engineering philosophy centers on scalability through thoughtful architecture, observability through comprehensive monitoring, and resilience through intelligent failure handling. From designing Kafka event-driven pipelines processing real-time data across 15+ microservices to implementing the Saga pattern for distributed payment workflows — I build systems that don't just work, they scale, recover, and perform under pressure.`,
  focus: `Trusted technical leader with full development ownership at Verizon and Bank of America; I drive cross-team engineering standards, mentor junior developers, and deliver measurable business outcomes at enterprise scale.`,
}

export const featuredProjects = [
  {
    id: "fleet-monitoring",
    title: "Fleet Monitoring & Predictive Maintenance",
    tagline: "AI-powered vehicle failure prediction in real-time",
    impact: "Cloud-native system processing live telemetry for predictive fleet analytics",
    problem:
      "Fleet operators lacked real-time visibility into vehicle health, leading to unexpected breakdowns and costly downtime.",
    solution:
      "Built an end-to-end cloud-native pipeline that ingests vehicle telemetry via Pub/Sub, predicts failures using Vertex AI AutoML, stores results in BigQuery, and visualizes fleet health on Looker dashboards - all orchestrated by Kubernetes.",
    challenges: [
      "Designing a low-latency ingestion pipeline for streaming sensor data",
      "Training and deploying an AutoML model for real-time failure prediction",
      "Orchestrating continuous data flow with Kubernetes pods",
      "Cost optimization across GCP serverless and compute services",
    ],
    architecture: [
      { label: "Telemetry Sim", type: "source" },
      { label: "Cloud Pub/Sub", type: "queue" },
      { label: "Cloud Functions", type: "process" },
      { label: "Vertex AI", type: "ml" },
      { label: "BigQuery", type: "storage" },
      { label: "Looker Studio", type: "output" },
    ],
    tech: ["Python", "GCP", "Pub/Sub", "Vertex AI", "BigQuery", "Kubernetes", "Docker", "Flask"],
    github: "https://github.com/COutSatish/fleet-monitoring-system",
  },
  {
    id: "telecom-platform",
    title: "Cloud-Native Telecom Platform",
    tagline: "AWS-powered microservices serving millions of subscribers",
    impact: "~28% query time reduction, zero-downtime deployments, 15+ microservices",
    problem:
      "Verizon's subscriber management platform needed modernization to handle peak loads, enable real-time event processing, and achieve infrastructure-as-code standardization.",
    solution:
      "Architected and delivered cloud-native full-stack telecom platforms on AWS with Spring Boot microservices, high-throughput Kafka pipelines, JWT/OAuth2 security, and Terraform-based IaC — achieving measurable impact across API performance, release velocity, and system reliability.",
    challenges: [
      "Building high-throughput Kafka pipelines across 15+ distributed microservices",
      "Implementing stateless JWT security with Keycloak SSO (SAML, OIDC)",
      "Refactoring high-volume telecom billing SQL queries for ~28% speed improvement",
      "Establishing infrastructure-as-code with Terraform and CloudFormation",
    ],
    architecture: [
      { label: "Angular SPA", type: "source" },
      { label: "API Gateway", type: "gateway" },
      { label: "Spring Boot", type: "process" },
      { label: "Kafka", type: "queue" },
      { label: "Oracle / MySQL", type: "storage" },
      { label: "AWS (EC2/EKS)", type: "output" },
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Angular",
      "Kafka",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "OAuth2",
      "JWT",
    ],
  },
  {
    id: "payment-workflows",
    title: "Distributed Payment Workflows",
    tagline: "Saga pattern implementation for financial microservices",
    impact: "~35% reduction in integration breakages, 12+ microservices orchestrated",
    problem:
      "Bank of America's distributed payment workflows relied on two-phase commits that couldn't scale, causing transaction failures and tight coupling across services.",
    solution:
      "Designed and implemented the Saga pattern with Spring State Machine for distributed payment workflows across 12+ microservices — the first team to eliminate two-phase commit overhead at this transaction volume. Introduced consumer-driven contract testing with Spring REST Docs.",
    challenges: [
      "Eliminating two-phase commit overhead in distributed transactions",
      "Implementing Saga orchestration with Spring State Machine",
      "Introducing consumer-driven contract testing as a new practice",
      "Multi-region deployment with AWS S3, RDS, and EKS",
    ],
    architecture: [
      { label: "React UI", type: "source" },
      { label: "API Gateway", type: "gateway" },
      { label: "Spring Boot", type: "process" },
      { label: "State Machine", type: "process" },
      { label: "Kafka / IBM MQ", type: "queue" },
      { label: "PostgreSQL", type: "storage" },
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring State Machine",
      "React",
      "Kafka",
      "IBM MQ",
      "AWS",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: "cnn-classification",
    title: "CNN Image Classification System",
    tagline: "Deep learning model for automated image recognition",
    impact: "Built a complete ML pipeline from data preprocessing to model evaluation",
    problem:
      "Manual image classification is time-intensive and error-prone, requiring an automated, scalable approach using deep learning.",
    solution:
      "Developed a Convolutional Neural Network using TensorFlow/Keras with comprehensive data preprocessing, model training, and evaluation - complete with research documentation and presentation.",
    challenges: [
      "Designing an optimal CNN architecture for classification accuracy",
      "Handling data augmentation and preprocessing for training robustness",
      "Tuning hyperparameters for model performance optimization",
      "Documenting research methodology per IEEE standards",
    ],
    architecture: [
      { label: "Raw Images", type: "source" },
      { label: "Preprocessing", type: "process" },
      { label: "CNN Model", type: "ml" },
      { label: "TensorFlow", type: "process" },
      { label: "Evaluation", type: "output" },
      { label: "Predictions", type: "output" },
    ],
    tech: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib", "Scikit-learn"],
    github: "https://github.com/COutSatish/CNN-Image-Classification",
  },
  {
    id: "ai-image-gen",
    title: "AI Image Generator with DALL-E 3",
    tagline: "Streamlit app powered by OpenAI's image generation API",
    impact: "Interactive web app for on-demand AI image creation",
    problem:
      "Accessing AI image generation required API knowledge and command-line usage, limiting accessibility for non-technical users.",
    solution:
      "Built a user-friendly Streamlit web application that wraps OpenAI's DALL-E 3 API, allowing users to input prompts, select image size/quality, and generate images instantly - with a mock API mode for testing.",
    challenges: [
      "Designing an intuitive UI for prompt-based image generation",
      "Handling API rate limiting and error states gracefully",
      "Implementing a mock API mode for development and testing",
      "Managing image size and quality configuration options",
    ],
    architecture: [
      { label: "User Prompt", type: "source" },
      { label: "Streamlit UI", type: "process" },
      { label: "OpenAI API", type: "ml" },
      { label: "DALL-E 3", type: "ml" },
      { label: "Generated Image", type: "output" },
    ],
    tech: ["Python", "Streamlit", "OpenAI API", "DALL-E 3"],
    github: "https://github.com/COutSatish/AI-Image-Generator-with-OpenAI-s-DALL-E-3-Model",
  },
  {
    id: "indoor-positioning",
    title: "Indoor Positioning System",
    tagline: "BLE-based real-time location detection engine",
    impact: "Precision coordinate detection from Bluetooth Low Energy signals",
    problem:
      "GPS doesn't work indoors. Enterprises needed a reliable way to track assets and people within buildings using existing Bluetooth infrastructure.",
    solution:
      "Implemented indoor positioning algorithms including Proximity, Trilateration, and Levenberg-Marquardt optimization to calculate precise coordinates from BLE beacon signals, with RESTful APIs for data ingestion and a dynamic UI for visualization.",
    challenges: [
      "Signal noise and interference in indoor BLE environments",
      "Implementing Levenberg-Marquardt optimization for coordinate accuracy",
      "Real-time processing of sensor data from multiple beacons and routers",
      "Building a scalable REST API for cross-system integration",
    ],
    architecture: [
      { label: "BLE Beacons", type: "source" },
      { label: "Signal Collector", type: "process" },
      { label: "ICS/IPS Engine", type: "ml" },
      { label: "REST APIs", type: "gateway" },
      { label: "PostgreSQL", type: "storage" },
      { label: "Live Dashboard", type: "output" },
    ],
    tech: [
      "Java",
      "Spring Boot",
      "AngularJS",
      "BLE",
      "PostgreSQL",
      "Hibernate",
      "REST APIs",
    ],
  },
]

export const skillCategories = [
  {
    name: "Languages",
    icon: "code",
    skills: ["Java 8/11/17", "TypeScript", "JavaScript (ES6+)", "Python", "Scala", "SQL", "PL/SQL", "GraphQL", "Shell Script"],
  },
  {
    name: "Java & Frameworks",
    icon: "layers",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Cloud",
      "Spring Security",
      "Spring Batch",
      "Hibernate ORM",
      "JPA",
    ],
  },
  {
    name: "Frontend",
    icon: "monitor",
    skills: [
      "Angular (v6-17)",
      "React.js",
      "HTML5",
      "CSS3",
      "TypeScript",
      "Redux",
      "NgRx",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    name: "Data & Messaging",
    icon: "database",
    skills: [
      "Apache Kafka",
      "Kafka Streams",
      "IBM MQ",
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "Cassandra",
    ],
  },
  {
    name: "AWS & Cloud",
    icon: "cloud",
    skills: [
      "EC2, S3, RDS, Lambda",
      "EKS, EMR, API Gateway",
      "SQS, SNS, IAM",
      "CloudFormation",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure",
      "GCP",
    ],
  },
  {
    name: "DevOps & Monitoring",
    icon: "shield",
    skills: [
      "Jenkins",
      "GitLab CI/CD",
      "Maven",
      "Gradle",
      "SonarQube",
      "ELK Stack",
      "Prometheus",
      "Splunk",
      "CloudWatch",
    ],
  },
]

export const timeline = [
  {
    year: "2012 - 2016",
    title: "B.Tech Computer Science & Engineering",
    org: "JNTUH, Hyderabad, India",
    description:
      "Built strong foundations in programming, data structures, algorithms, and systems design.",
    type: "education" as const,
  },
  {
    year: "Jul 2016 - Jul 2018",
    title: "Junior Java Developer",
    org: "Value Momentum, Hyderabad (Client: GEICO)",
    description:
      "Built and enhanced enterprise insurance web applications for GEICO using Guidewire PolicyCenter and ClaimCenter. Delivered full-stack Java solutions with microservices architecture, RESTful & SOAP APIs, and scalable data layers supporting millions of policyholders.",
    type: "work" as const,
  },
  {
    year: "Aug 2018 - Dec 2019",
    title: "M.S. Computer Science",
    org: "Lawrence Technological University, MI",
    description:
      "Specialized in Distributed Systems, Big Data, and AI Integration. Concurrent internship at Henry Ford Health.",
    type: "education" as const,
  },
  {
    year: "May 2019 - Dec 2019",
    title: "Software Engineer Intern",
    org: "Henry Ford Health, Detroit, MI",
    description:
      "Contributed to backend Java development and RESTful API integration on patient engagement platform. Developed API endpoints for appointment scheduling and medication reminders using Spring Boot. Quality of work led directly to a contract offer before degree completion.",
    type: "work" as const,
  },
  {
    year: "Jan 2020 - May 2024",
    title: "Java Full Stack Developer",
    org: "Henry Ford Health, Detroit, MI",
    description:
      "Designed and built healthcare microservices using Spring Boot on AWS. Architected event-driven systems with Kafka, optimized SQL schemas reducing query time by ~22%, and maintained 80%+ code coverage. Built responsive Angular and React.js UIs for patient-facing portals.",
    type: "work" as const,
  },
  {
    year: "Jun 2024 - Present",
    title: "Senior Java Full Stack Developer",
    org: "Verizon, Southfield, MI",
    description:
      "Architecting cloud-native telecom platforms on AWS serving millions of subscribers. Built high-throughput Kafka pipelines across 15+ microservices, implemented Terraform IaC standardization, and reduced SQL query execution time by ~28%. Leading cross-team engineering standards.",
    type: "work" as const,
  },
]

export const certifications = [
  {
    name: "Google Professional Data Engineer",
    issuer: "Google",
    date: "Jan 2025",
    expires: "Jan 2027",
    badge: "professional",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    date: "Sep 2025",
    badge: "google",
  },
  {
    name: "Verizon Cloud Platform Job Simulation",
    issuer: "Forage",
    date: "May 2025",
    badge: "cloud",
  },
  {
    name: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "Mar 2025",
    badge: "data",
  },
  {
    name: "JPMC Advanced Software Engineering",
    issuer: "Forage (J.P. Morgan)",
    date: "Aug 2024",
    badge: "engineering",
  },
  {
    name: "Guidewire InsuranceSuite 10.0 Developer",
    issuer: "Guidewire Software",
    date: "Associate Certification",
    badge: "professional",
  },
  {
    name: "Python Data Structures",
    issuer: "Coursera",
    date: "Jun 2020",
    badge: "data",
  },
  {
    name: "Programming for Everybody (Python)",
    issuer: "Coursera",
    date: "Jun 2020",
    badge: "data",
  },
]

export const keyAchievements = [
  {
    title: "Kafka Architecture Ownership",
    company: "Verizon",
    description:
      "Sole architect for topic design, partition strategy, consumer group configuration, and offset management across 15+ telecom microservices — ensuring fault-tolerant, ordered delivery under peak subscriber load.",
    metric: "15+",
    metricLabel: "Microservices",
  },
  {
    title: "IaC Standardization",
    company: "Verizon",
    description:
      "Established Terraform and CloudFormation as the team's infrastructure standard — all AWS resources provisioned via code, eliminating manual console changes and enabling repeatable environment creation across dev, staging, and production.",
    metric: "100%",
    metricLabel: "IaC Coverage",
  },
  {
    title: "Saga Pattern Implementation",
    company: "Bank of America",
    description:
      "Designed and implemented the Saga pattern with Spring State Machine for distributed payment workflows across 12+ microservices — the first team to eliminate two-phase commit overhead at this transaction volume.",
    metric: "12+",
    metricLabel: "Services Orchestrated",
  },
  {
    title: "Contract Testing Introduction",
    company: "Bank of America",
    description:
      "Introduced consumer-driven contract testing with Spring REST Docs, a practice new to the team — directly contributed to the ~35% reduction in integration breakages across iterative payment service upgrades.",
    metric: "~35%",
    metricLabel: "Fewer Breakages",
  },
  {
    title: "Student-to-Engineer",
    company: "Henry Ford Health",
    description:
      "As a student intern, independently owned and delivered full RESTful API modules — quality and reliability of work led directly to a contract offer before degree completion, one of fewer than 3 interns retained that cycle.",
    metric: "Top 3",
    metricLabel: "Interns Retained",
  },
  {
    title: "On-Time Guidewire Delivery",
    company: "GEICO",
    description:
      "One of two developers on a small consulting team responsible for end-to-end Guidewire PolicyCenter and ClaimCenter customization — delivered on schedule with no post-deployment defects logged in the first 60 days.",
    metric: "0",
    metricLabel: "Defects in 60 Days",
  },
]

export const coreCompetencies = [
  "Java Full Stack Development",
  "AWS Cloud-Native Architecture",
  "Microservices Architecture",
  "Event-Driven Systems (Kafka / IBM MQ)",
  "Angular / React.js / TypeScript",
  "Application Security (OAuth 2.0 / JWT)",
  "RESTful API Design and Optimization",
  "DevOps and CI/CD Pipelines",
  "Big Data: Spark, EMR, Kafka Streams",
  "Docker and Kubernetes",
  "Performance Optimization and Tuning",
  "Agile / Scrum Methodology",
]

