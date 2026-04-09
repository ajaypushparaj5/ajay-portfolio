export const portfolioData = {
  hero: {
    name: "AJAY SHYAM SUNDAR P",
    title: "AI Systems Engineer",
    subtitle: "Building intelligent, production-grade AI systems",
    image: "/hero.png",
  },
  metrics: [
    { label: "Micro-expression detection", value: "92% accuracy" },
    { label: "RAG latency reduction", value: "65%" },
    { label: "Query optimization in RL", value: "25–30%" },
    { label: "CV processing latency", value: "Sub-60ms" },
  ],
  profile: {
    title: "Profile",
    description1: "3rd-year B.Tech IT student specializing in AI Systems (RAG, NLP, CV)",
    description2: "Built real-world AI pipelines and systems through research and projects",
  },
  projects: [
    {
      id: "dataoncallenv",
      title: "DataOnCallEnv",
      description: "RL environment for debugging data pipelines",
      tags: ["Python", "FastAPI", "Hugging Face Spaces", "Reinforcement Learning Benchmark"],
      highlights: [
        "Partial observability environment with simulated Airflow/dbt logs",
        "FastAPI backend (100+ SQL executions/session)",
        "Multi-metric reward system (4 signals)",
        "Reduced unnecessary queries by 25–30%",
        "Accepted by Meta Pytorch hackathon"
      ],
      links: {
        github: "https://github.com/ajaypushparaj5/dataoncallenv",
        demo: "https://huggingface.co/spaces/training-monkey/dataoncallenv",
      },
      images: [
        "/projects/dataon.png"
      ],
    },
    {
      id: "rag-engine",
      title: "RAG Knowledge Engine",
      description: "AI-powered semantic search system for documents",
      tags: ["Python", "FAISS", "Transformers"],
      highlights: [
        "FAISS-based vector search for high-accuracy semantic retrieval",
        "End-to-end RAG pipeline with PDF parsing & persistent vector storage",
        "Sub-second retrieval with local LLM integration",
        "65% performance improvement via optimized vector indexing",
      ],
      links: {
        github: "https://github.com/ajaypushparaj5/AI-knowledge-engine",
      },
      images: [
        "/projects/knowl.png",
        "/projects/knowl2.png",
        "/projects/knowl3.png",
      ],
    },
    {
      id: "closer-ai",
      title: "Closer AI",
      description: "AI sales calling agent with real-time analytics",
      tags: ["Next.js", "Bolna AI", "FastAPI", "Node.js"],
      highlights: [
        "Voice AI integration (Bolna) & custom telephony via Twilio",
        "Real-time call tracking (Queued, Ringing, In Progress, Completed)",
        "Dashboard analytics showing Total Calls, Deals Closed, Follow-ups",
        "Webhook-based system with in-memory storage for persistent tracking",
      ],
      links: {
        github: "https://github.com/ajaypushparaj5/closerAI",
      },
      images: [
        "/projects/closer1.png",
        "/projects/closer2.png"
      ],
    },
    {
      id: "ai-interview-trainer",
      title: "AI Interview Trainer",
      description: "Computer vision-based behavioral analysis system",
      tags: ["Python", "MediaPipe", "OpenCV", "Tkinter"],
      highlights: [
        "25+ FPS real-time processing resolving 3000+ frames per session",
        "Sub-60 ms latency",
        "Eye contact, posture, gesture detection",
        "AI-generated feedback system packaged as a .exe file",
      ],
      links: {
        github: "https://github.com/ajaypushparaj5/AI-Interviewtrainer",
        demo: "https://drive.google.com/drive/folders/1yP8P61BRTwBFGFitgb2ez6Ji2rJXj16a"
      },
      images: [
        "/projects/interview trainer.jpeg",
        "/projects/interv2.jpeg",
        "/projects/interv3.jpeg",
      ],
    },
  ],
  research: [
    {
      id: "cusat",
      institution: "CUSAT",
      title: "Optical flow apex detection",
      highlights: [
        "92% accuracy",
        "Farneback + TV-L1"
      ]
    },
    {
      id: "rgniyd",
      institution: "RGNIYD",
      title: "AI behavioral analysis system",
      highlights: [
        "Real-time feedback pipelines",
        "Developed research into production software"
      ]
    }
  ],
  blog: [
    {
      id: "rl-rewards",
      title: "Designing RL reward systems",
      date: "March, 2026",
      readTime: "5 min read",
    },
    {
      id: "rag-pipeline",
      title: "Building a RAG pipeline from scratch",
      date: "October, 2025",
      readTime: "8 min read",
    },
    {
      id: "cv-optimization",
      title: "Optimizing real-time CV systems",
      date: "March, 2025",
      readTime: "6 min read",
    }
  ],
  contact: {
    email: "ajay7pushparaj@gmail.com",
    github: "https://github.com/ajaypushparaj5",
    linkedin: "https://www.linkedin.com/in/ajay-pushparaj-261768229/",
  }
};
