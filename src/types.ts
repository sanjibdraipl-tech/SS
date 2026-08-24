export interface ProjectItem {
  id: string;
  name: string;
  clientIndustry: string;
  category: 'All' | 'Road' | 'Metro' | 'Bridge' | 'Plant' | 'Digitalization' | 'Design & Video';
  role: string;
  equipmentPlant: string;
  scope: string;
  toolsTech: string[];
  deliverable: string;
  verifiedResult: string;
  location?: string;
  duration?: string;
  highlights?: string[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  steps: {
    phase: string;
    description: string;
    actionPoint: string;
  }[];
  kpis: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  summary: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  scopePoints: string[];
  targetAudience: string;
  iconName: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  points: string[];
  icon: string;
  badge: string;
}

export interface ToolCategory {
  category: string;
  description: string;
  tools: {
    name: string;
    role: string;
    level: string;
  }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
