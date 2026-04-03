export const personalInfo = {
  name: "Satish Kumar P",
  title: "Senior Java Full Stack Developer",
  headline: "I build cloud-native systems that scale and perform under pressure",
  highlightedText: "scale and perform",
  subtitle: "Java  |  Spring Boot  |  Kafka  |  AWS  |  Angular  |  React",
  email: "satishs.tech@gmail.com",
  phone: "+1 (470) 866-1440",
  github: "https://github.com/COutSatish",
  linkedin: "https://www.linkedin.com/in/satishpyata/",
  location: "United States",
}

export const aboutText = {
  philosophy: `I'm a Senior Java Full Stack Developer with around 9 years of experience delivering cloud-native, high-performance enterprise applications across financial services, telecom (5G/public safety broadband), and auto insurance industries. I specialize in end-to-end software development using Java/J2EE, microservices, RESTful APIs, Spring Boot, and front-end frameworks like Angular and React.`,
  approach: `My engineering philosophy centers on scalability through thoughtful architecture, observability through comprehensive monitoring, and resilience through intelligent failure handling. From building real-time Kafka Streams pipelines for transaction monitoring and fraud detection to architecting Saga choreography across 12+ financial microservices — I build systems that don't just work, they scale, recover, and perform under pressure.`,
  focus: `Trusted technical leader with full development ownership at Morgan Stanley and BNY Mellon; I drive cross-team engineering standards, mentor junior developers, and deliver measurable business outcomes at enterprise scale. Experienced in Open Banking and fintech API development, with SOX/FINRA-compliant systems serving thousands of institutional clients.`,
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
    id: "wealth-management",
    title: "Wealth Management Digital Platform",
    tagline: "E*TRADE and Shareworks unification on Morgan Stanley infrastructure",
    impact: "28% query time reduction, sub-100ms Kafka delivery, 6+ microservices led end-to-end",
    problem:
      "Morgan Stanley needed to unify the E*TRADE and Shareworks platforms onto a single Wealth Management infrastructure, enabling seamless data sharing between advisor, self-directed, and workplace channels.",
    solution:
      "Developed Spring Boot microservices routing API traffic via Spring Cloud Gateway, connecting E*TRADE to Morgan Stanley's advisor portal. Built Kafka pipelines streaming portfolio risk signals across 15+ microservices with sub-100ms delivery. Implemented Ping Identity SSO (SAML, OIDC) for unified authentication.",
    challenges: [
      "Integrating E*TRADE, Shareworks, and Morgan Stanley platforms via REST APIs",
      "Streaming portfolio risk signals with sub-100ms Kafka event delivery",
      "Implementing unified SSO with Ping Identity across wealth platforms",
      "Building ETL pipelines with Scala/Spark on AWS EMR cutting batch time by 37%",
    ],
    architecture: [
      { label: "Angular 17 SPA", type: "source" },
      { label: "Spring Cloud Gateway", type: "gateway" },
      { label: "Spring Boot", type: "process" },
      { label: "Kafka / Kafka Streams", type: "queue" },
      { label: "Oracle / PostgreSQL", type: "storage" },
      { label: "AWS (EKS/EMR)", type: "output" },
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "Angular 17",
      "Kafka",
      "Spark",
      "Scala",
      "AWS",
      "Terraform",
      "OAuth2",
      "Ping Identity",
    ],
  },
  {
    id: "pershing-platform",
    title: "Pershing NetX360+ Clearing Platform",
    tagline: "Trade settlement and custody for millions of investor accounts",
    impact: "38% API speedup, 32% DB load reduction, 90%+ test coverage, SOX/FINRA compliant",
    problem:
      "BNY Mellon Pershing's legacy clearing and custody platform needed modernization to a cloud-native architecture while maintaining SOX/FINRA compliance for thousands of institutional clients.",
    solution:
      "Engineered a RESTful API platform for trade settlement and clearing using Spring Boot with Resilience4j circuit-breaking for 99.9% uptime. Architected Redis caching reducing DB load by 32%, Kafka Saga choreography across 12+ microservices, and Spring Batch for SOX/FINRA-compliant financial transaction processing.",
    challenges: [
      "Enforcing SOX/FINRA compliance with PII access controls and RBAC",
      "Architecting Kafka-based Saga for trade intake, eligibility, and clearing",
      "Reducing API response times by 38% with Redis distributed caching",
      "Processing real-time FIX Protocol transactions across 20+ microservices",
    ],
    architecture: [
      { label: "Angular / React UI", type: "source" },
      { label: "Spring Cloud Gateway", type: "gateway" },
      { label: "Spring Boot", type: "process" },
      { label: "Kafka / FIX Protocol", type: "queue" },
      { label: "Oracle / PostgreSQL / Redis", type: "storage" },
      { label: "AWS (EKS/Redshift)", type: "output" },
    ],
    tech: [
      "Java 11",
      "Spring Boot",
      "Spring Batch",
      "Angular",
      "React",
      "Kafka",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
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
    skills: ["Java 8/11/17", "TypeScript", "JavaScript (ES6+)", "Python", "Scala", "SQL", "PL/SQL"],
  },
  {
    name: "Java & Frameworks",
    icon: "layers",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Cloud Gateway",
      "Spring Security",
      "Spring Batch",
      "Spring WebFlux",
      "Hibernate ORM",
      "JPA",
      "Resilience4j",
    ],
  },
  {
    name: "Frontend",
    icon: "monitor",
    skills: [
      "Angular (v10-17)",
      "React.js",
      "HTML5",
      "CSS3",
      "TypeScript",
      "Redux",
      "NgRx",
      "RxJS",
      "Bootstrap",
    ],
  },
  {
    name: "Data & Messaging",
    icon: "database",
    skills: [
      "Apache Kafka",
      "Kafka Streams",
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
    ],
  },
  {
    name: "AWS & Cloud",
    icon: "cloud",
    skills: [
      "EC2, S3, RDS, Lambda",
      "EKS, ECS, EMR, API Gateway",
      "SQS, SNS, IAM, Redshift",
      "CloudFormation",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GCP",
    ],
  },
  {
    name: "DevOps & Monitoring",
    icon: "shield",
    skills: [
      "Jenkins",
      "GitLab CI/CD",
      "Azure DevOps",
      "Maven",
      "SonarQube",
      "ELK Stack",
      "Prometheus",
      "Grafana",
      "Splunk",
      "CloudWatch",
    ],
  },
]

export const timeline = [
  {
    year: "Aug 2018 - Dec 2019",
    title: "M.S. Computer Science",
    org: "Lawrence Technological University, Southfield, MI",
    description:
      "Specialized in Distributed Systems, Big Data, and AI Integration. Concurrent internship at Verizon.",
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
    year: "May 2019 - Dec 2019",
    title: "Software Engineer Intern",
    org: "Verizon, Detroit, MI",
    description:
      "Part-time internship concurrent with Master's studies. Contributed to backend Java development and RESTful API integration on the subscriber management platform. Developed API endpoints for subscriber account management and service notifications using Spring Boot.",
    type: "work" as const,
  },
  {
    year: "Jan 2020 - Dec 2021",
    title: "Java Full Stack Developer",
    org: "Verizon, Detroit, MI",
    description:
      "Converted from intern to full-time. Contributed to Verizon's 5G network services platform and Verizon Frontline for public safety agencies. Built REST and Kafka-based microservices for subscriber management, 5G plan upgrades, and billing. Reduced query time by 22% and maintained 80%+ code coverage.",
    type: "work" as const,
  },
  {
    year: "Jan 2022 - May 2024",
    title: "Senior Java Full Stack Developer",
    org: "BNY Mellon, Pittsburgh, PA",
    description:
      "Worked on Pershing NetX360+ clearing and custody platform serving millions of investor accounts. Reduced API response times by 38% with Redis caching, deployed Kafka pipelines across 20+ microservices, and architected Saga choreography for SOX/FINRA-compliant trade settlement. Maintained 90%+ test coverage.",
    type: "work" as const,
  },
  {
    year: "Jun 2024 - Present",
    title: "Senior Java Full Stack Developer",
    org: "Morgan Stanley, Farmington Hills, MI",
    description:
      "Leading development on the Wealth Management digital platform (E*TRADE and Shareworks unification) and Morgan Stanley at Work equity compensation platform. Built Kafka pipelines with sub-100ms delivery across 15+ microservices, implemented Ping Identity SSO, and cut batch processing time by 37% with Spark/EMR ETL pipelines.",
    type: "work" as const,
  },
]

export const certifications = [
  {
    name: "Google Cloud Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2025",
    badge: "professional",
  },
  {
    name: "Guidewire ClaimCenter Associate",
    issuer: "Guidewire Software",
    date: "Associate Certification",
    badge: "professional",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    date: "Sep 2025",
    badge: "google",
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
    name: "Python Data Structures",
    issuer: "Coursera",
    date: "Jun 2020",
    badge: "data",
  },
]

export const keyAchievements = [
  {
    title: "Wealth Management Platform Unification",
    company: "Morgan Stanley",
    description:
      "Led end-to-end delivery of 6+ Java microservices integrating E*TRADE and Shareworks onto Morgan Stanley's unified Wealth Management infrastructure, enabling seamless data sharing across advisor, self-directed, and workplace channels.",
    metric: "6+",
    metricLabel: "Microservices Led",
  },
  {
    title: "Real-Time Kafka Pipeline Architecture",
    company: "Morgan Stanley",
    description:
      "Built Kafka pipelines streaming portfolio risk signals and ACH status updates across 15+ microservices with tuned topic partitioning sustaining sub-100ms event delivery during peak volumes.",
    metric: "<100ms",
    metricLabel: "Event Delivery",
  },
  {
    title: "API Performance Optimization",
    company: "BNY Mellon",
    description:
      "Reduced API response times by 38% and database load by 32% by architecting a Redis distributed caching layer on top of Oracle/PostgreSQL and MongoDB, eliminating redundant queries across high-traffic endpoints.",
    metric: "38%",
    metricLabel: "Faster APIs",
  },
  {
    title: "Saga Choreography for Trade Settlement",
    company: "BNY Mellon",
    description:
      "Architected Kafka-based Saga choreography to coordinate transaction workflows across 12+ microservices, covering trade intake validation, account eligibility, and clearing determination with SOX/FINRA compliance.",
    metric: "12+",
    metricLabel: "Services Orchestrated",
  },
  {
    title: "ETL Pipeline Optimization",
    company: "Morgan Stanley",
    description:
      "Built ETL pipelines with Scala and Spark on AWS EMR to consolidate investment data into a unified analytics layer, cutting overnight batch processing time by 37%.",
    metric: "37%",
    metricLabel: "Faster Batch Processing",
  },
  {
    title: "Intern to Full-Time Conversion",
    company: "Verizon",
    description:
      "Converted from intern to full-time engineer upon graduating, contributing to Verizon's 5G network services platform and Verizon Frontline, reducing downstream integration errors by 27%.",
    metric: "27%",
    metricLabel: "Fewer Integration Errors",
  },
]

export const coreCompetencies = [
  "Java Full Stack Development",
  "AWS Cloud-Native Architecture",
  "Microservices Architecture",
  "Event-Driven Systems (Kafka / Kafka Streams)",
  "Angular / React.js / TypeScript",
  "Application Security (OAuth 2.0 / JWT / OIDC)",
  "RESTful API Design and Optimization",
  "DevOps and CI/CD Pipelines",
  "Big Data: Spark, EMR, Kafka Streams",
  "Docker and Kubernetes",
  "SOX/FINRA Compliance",
  "Open Banking & Fintech APIs",
]
