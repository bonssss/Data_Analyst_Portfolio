export interface Project {
  id: string;
  title: string;
  slug: string;
  badge: {
    text: string;
    variant: 'cyan' | 'blue' | 'purple' | 'amber' | 'emerald';
  };
  tools: string[];
  shortDescription: string;
  image: string;
  date: string;
  metrics: {
    label: string;
    value: string;
    trend?: string;
  }[];
  overview: string;
  problemStatement: string;
  methodology: string[];
  keyFindings: string[];
  businessImpact: string[];
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  category: 'core' | 'libraries' | 'bi' | 'database' | 'devops';
  icon: string;
  proficiencyLevel: 'Expert' | 'Proficient' | 'Advanced' | 'Working Knowledge';
  description: string;
  useCase: string;
  accentColor: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  iconName: 'github' | 'linkedin' | 'mail' | 'mapPin' | 'grad';
}
