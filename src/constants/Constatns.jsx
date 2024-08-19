import { MessageCircleHeart, ChartLine, Handshake, Trophy, ChartBarBig, Lightbulb, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
];

export const features = [
    {
      icon: <MessageCircleHeart />,
      text: "Sentiment Analysis",
      description:
        "We analyze the sentiment behind AI-generated responses to gauge consumer perception and emotional engagement.",
    },
    {
      icon: <ChartLine />,
      text: "Predictive Brand Health",
      description:
        "Our predictive analytics provide insights into future brand health and potential market shifts.",
    },
    {
      icon: <Handshake />,
      text: "Alignment: Brand Promise",
      description:
        "We ensure your brand's messaging aligns with its promise, enhancing consistency and trust.",
    },
    {
      icon: <Trophy />,
      text: "Rank in Search",
      description:
        "Optimize your brand's visibility in AI Answer Engines to stay ahead of the competition.",
    },
    {
      icon: <ChartBarBig />,
      text: "Competitive Analysis",
      description:
        "Gain a competitive edge by understanding how your brand compares to others in the market."
    },
    {
      icon: <Lightbulb />,
      text: "Innovation Insights",
      description:
        "Identify emerging trends and opportunities to keep your brand at the forefront of AI-driven markets.",
    },
  ];

export const pricingOptions = [
  {
    title: "Essential",
    statement: "Core Insights for Growing Brands",
    features: [
      "Brand Vulnerability",
      "Product Performance",
      "Concierge Readiness",
      "Green Promise Audit",
      "Adversarial AI Report",
      "Brand Archetypes",
      "GenAI Monitoring",
    ],
  },
  {
    title: "Pro",
    statement: "Advanced Tools for Competitive Edge",
    features: [
      "Essential Features",
      "Brand Health Management",
      "Trend Analysis",
      "Custom Competitor Analysis",
      "100 Custom Prompts",
      "Tutorials & Training",
    ],
  },
  {
    title: "Enterprise",
    statement:"Comprehensive Solutions for Industry Leaders",
    features: [
      "Essential Features",
      "Pro Features",
      "Multi-Brand Support",
      "Supply Chain Green Audit",
      "Data Access",
      "Crisis Management & Forecasting",
    ],
  },
];

export const socials = [
    {
      icon: <Linkedin/>,
      href: "https://www.linkedin.com/company/brandrank-ai/"
    },
    {
      icon: <Youtube/>,
      href: "https://www.youtube.com/@brandrank-ai"
    },
    {
      icon: <Instagram/>,
      href: "https://www.instagram.com/brandrank.ai/"
    },
    {
      icon: <Twitter/>,
      href: "https://x.com/brandrankai"
    }
]
