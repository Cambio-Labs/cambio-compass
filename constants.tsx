import React from 'react';
import { Program, Stage, Industry, Demographic, Question, ServiceNeed } from './types';
import { Lightbulb, Building2, MapPin, DollarSign, Briefcase, Zap, Scale, GraduationCap, Users, Rocket, Sprout, TrendingUp } from 'lucide-react';

export const PROGRAMS: Program[] = [
  {
    id: 'cambio-incubator',
    name: 'Cambio Labs Social Entrepreneurship Incubator',
    description: 'No previous knowledge required. Ideate, pitch, prototype, and launch your own organization driven by social and environmental missions.',
    url: 'https://www.cambiolabs.org/socialentrepreneurship',
    requirements: {
      minStage: Stage.IDEA,
      providedServices: [ServiceNeed.EDUCATION, ServiceNeed.COMMUNITY]
    }
  },
  {
    id: 'cambio-accelerator',
    name: 'Cambio Labs Startup NYCHA Accelerator',
    description: 'FREE 6-month program for those who want to start or grow a business. Includes hands-on training, expert coaching, funding, and networking.',
    url: 'https://www.cambiolabs.org/startupnycha',
    requirements: {
      minStage: Stage.IDEA,
      requiredDemographics: [Demographic.NYCHA],
      providedServices: [ServiceNeed.EDUCATION, ServiceNeed.FUNDING, ServiceNeed.COMMUNITY]
    }
  },
  {
    id: 'rees-dreamers',
    name: 'REES Dreamers',
    description: 'For NYCHA residents at the early pre-seed stage taking first steps.',
    url: 'https://opportunitynycha.org/business-development/',
    requirements: {
      minStage: Stage.PRE_SEED,
      requiredDemographics: [Demographic.NYCHA],
      providedServices: [ServiceNeed.EDUCATION]
    }
  },
  {
    id: 'rees-idealists',
    name: 'REES Idealists',
    description: 'For legally registered businesses that have not yet generated revenue.',
    url: 'https://opportunitynycha.org/business-development/',
    requirements: {
      minStage: Stage.SEED,
      requiredDemographics: [Demographic.NYCHA],
      registeredBusiness: true,
      maxRevenue: 0,
      providedServices: [ServiceNeed.COMMUNITY]
    }
  },
  {
    id: 'rees-underground',
    name: 'REES Underground Entrepreneurs',
    description: 'For businesses generating revenue that are NOT yet legally registered.',
    url: 'https://opportunitynycha.org/business-development/',
    requirements: {
      minStage: Stage.SEED,
      requiredDemographics: [Demographic.NYCHA],
      registeredBusiness: false,
      minRevenue: 1,
      providedServices: [ServiceNeed.LEGAL, ServiceNeed.EDUCATION]
    }
  },
  {
    id: 'rees-gogetters',
    name: 'REES Go-getters',
    description: 'For legally registered businesses generating less than $5,000 in revenue.',
    url: 'https://opportunitynycha.org/business-development/',
    requirements: {
      minStage: Stage.GROWTH,
      requiredDemographics: [Demographic.NYCHA],
      registeredBusiness: true,
      maxRevenue: 4999,
      minRevenue: 1,
      providedServices: [ServiceNeed.COMMUNITY]
    }
  },
  {
    id: 'rees-champions',
    name: 'REES Champions',
    description: 'For legally registered businesses generating more than $5,000 in revenue.',
    url: 'https://opportunitynycha.org/business-development/',
    requirements: {
      minStage: Stage.SCALE,
      requiredDemographics: [Demographic.NYCHA],
      registeredBusiness: true,
      minRevenue: 5000,
      providedServices: [ServiceNeed.COMMUNITY]
    }
  },
  {
    id: 'rees-home',
    name: 'REES Home-Based Business',
    description: 'For NYCHA residents operating a business from their apartment. Must be up to date with licenses.',
    url: 'https://opportunitynycha.org/business-development/home-based-business/',
    requirements: {
      minStage: Stage.GROWTH,
      requiredDemographics: [Demographic.NYCHA],
      providedServices: [ServiceNeed.LEGAL]
    }
  },
  {
    id: 'sbs-newventure',
    name: 'SBS FastTrac NewVenture',
    description: 'A general foundational track for anyone starting a business in NYC.',
    url: 'https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/fasttrac',
    requirements: {
      minStage: Stage.IDEA,
      providedServices: [ServiceNeed.EDUCATION]
    }
  },
  {
    id: 'sbs-female',
    name: 'SBS FastTrac NewVenture for Women',
    description: 'Foundational entrepreneurship track specifically for women.',
    url: 'https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/fasttrac',
    requirements: {
      minStage: Stage.PRE_SEED,
      requiredDemographics: [Demographic.FEMALE],
      providedServices: [ServiceNeed.EDUCATION, ServiceNeed.COMMUNITY]
    }
  },
  {
    id: 'sbs-female-50',
    name: 'SBS FastTrac NewVenture for Women 50+',
    description: 'Foundational track for women entrepreneurs aged 50 and older.',
    url: 'https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/fasttrac',
    requirements: {
      minStage: Stage.PRE_SEED,
      requiredDemographics: [Demographic.FEMALE, Demographic.SENIOR],
      providedServices: [ServiceNeed.EDUCATION]
    }
  },
  {
    id: 'sbs-tech',
    name: 'SBS FastTrac TechVenture',
    description: 'For technology-based business ideas.',
    url: 'https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/fasttrac',
    requirements: {
      minStage: Stage.PRE_SEED,
      specificIndustry: Industry.TECH,
      providedServices: [ServiceNeed.EDUCATION]
    }
  },
  {
    id: 'sbs-growth',
    name: 'SBS FastTrac GrowthVenture',
    description: 'For established businesses (operating 1+ year) looking to analyze models and create growth plans.',
    url: 'https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/fasttrac',
    requirements: {
      minStage: Stage.SEED,
      providedServices: [ServiceNeed.EDUCATION]
    }
  },
  {
    id: 'sbs-veterans',
    name: 'SBS FastTrac GrowthVenture for Veterans',
    description: 'For veterans with established businesses (operating 1+ year).',
    url: 'https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/fasttrac',
    requirements: {
      minStage: Stage.SEED,
      requiredDemographics: [Demographic.VETERAN],
      providedServices: [ServiceNeed.EDUCATION, ServiceNeed.COMMUNITY]
    }
  },
  {
    id: 'sbs-black',
    name: 'SBS BE NYC Startup Intensive',
    description: 'Intensive program for Black entrepreneurs starting their ventures.',
    url: 'https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/fasttrac',
    requirements: {
      minStage: Stage.PRE_SEED,
      requiredDemographics: [Demographic.BLACK],
      providedServices: [ServiceNeed.EDUCATION, ServiceNeed.COMMUNITY]
    }
  },
  {
    id: 'sbs-cannabis',
    name: 'SBS FastTrac for Cannabis Entrepreneurs',
    description: 'For those interested in launching, operating, or scaling a cannabis-focused business.',
    url: 'https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/fasttrac',
    requirements: {
      minStage: Stage.PRE_SEED,
      specificIndustry: Industry.CANNABIS,
      providedServices: [ServiceNeed.EDUCATION, ServiceNeed.LEGAL]
    }
  },
  {
    id: 'boss-up',
    name: 'NYC Boss Up NYCHA Competition',
    description: 'Pitch competition for NYCHA residents/veterans. $20k grant + mentorship. (Requires lease/rent compliance).',
    url: 'https://www.nycbossup.org/nycha-residents',
    requirements: {
      minStage: Stage.SEED,
      requiredDemographics: [Demographic.NYCHA],
      providedServices: [ServiceNeed.FUNDING, ServiceNeed.COMMUNITY]
    }
  },
  {
    id: 'we-connect',
    name: 'Women Entrepreneurs: Connect 1-on-1',
    description: 'Free, personalized one-hour virtual sessions with mentors to help women start and grow.',
    url: 'https://www.eventbrite.com/e/we-connect-1-on-1-mentoring-service-tickets-1054159612779',
    requirements: {
      minStage: Stage.PRE_SEED,
      requiredDemographics: [Demographic.FEMALE],
      providedServices: [ServiceNeed.COMMUNITY]
    }
  }
];

export const QUESTIONS: Question[] = [
  {
    id: 'stage',
    text: "Where are you now?",
    subText: "Select the statement that most accurately describes your business right now",
    type: 'single',
    options: [
      {
        label: 'You\'ve been running your business for more than 18 months. This is your full time job. You have a clear market, business model, evidence of success, and financial records. You may need growth capital',
        value: Stage.GROWTH
      },
      {
        label: 'You have a business idea, or a general interest in learning more about becoming an entrepreneur and starting your own business',
        value: Stage.IDEA
      },
      {
        label: 'Your venture has potential for mass adoption, disrupting industries, and high growth and scalability. You\'ve succeeded in started and growing impressively. You need big money to scale',
        value: Stage.SCALE
      },
      {
        label: 'You\'ve decided to start a venture. You may have taken first steps in establishing it. You may have an early version of your product, but not a clear business plan or consistent income model',
        value: Stage.PRE_SEED
      },
      {
        label: 'You have a business model, traction, and customers. You have a pitch deck and tested income strategy. You\'ve piloted, and are ready to turn your business idea into a real organization',
        value: Stage.SEED
      }
    ]
  },
  {
    id: 'needs',
    text: "What do you need?",
    subText: "Select the areas where you are seeking support",
    type: 'multi',
    options: [
      { label: 'Funding & Grants', value: ServiceNeed.FUNDING, icon: <DollarSign className="w-6 h-6" /> },
      { label: 'Legal & Contracts', value: ServiceNeed.LEGAL, icon: <Scale className="w-6 h-6" /> },
      { label: 'Education & Training', value: ServiceNeed.EDUCATION, icon: <GraduationCap className="w-6 h-6" /> },
      { label: 'Community & Mentors', value: ServiceNeed.COMMUNITY, icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'nycha',
    text: "Housing Status",
    subText: "Are you currently a NYCHA resident?",
    type: 'boolean',
    options: [
      { label: 'Yes', value: true, icon: <Building2 className="w-6 h-6" /> },
      { label: 'No', value: false, icon: <MapPin className="w-6 h-6" /> }
    ]
  },
  {
    id: 'registered',
    text: "Business Registration",
    subText: "Is your business legally registered (LLC, Sole Prop, etc.)?",
    type: 'boolean',
    // Only ask if they are past the idea/pre-seed stage where registration becomes relevant for matching
    conditional: (answers) => [Stage.SEED, Stage.GROWTH, Stage.SCALE].includes(answers['stage']),
    options: [
      { label: 'Yes, I am registered', value: true },
      { label: 'No, not yet', value: false }
    ]
  },
  {
    id: 'revenue',
    text: "Revenue",
    subText: "What is your approximate total revenue to date?",
    type: 'single',
    // Only ask if not in very early stages
    conditional: (answers) => [Stage.SEED, Stage.GROWTH, Stage.SCALE].includes(answers['stage']),
    options: [
      { label: '$0 (Pre-revenue)', value: 0 },
      { label: '$1 - $500', value: 250 },
      { label: '$500 - $5,000', value: 2500 },
      { label: '$5,000+', value: 6000 }
    ]
  },
  {
    id: 'industry',
    text: "Industry Focus",
    subText: "Which best describes your business area?",
    type: 'single',
    options: [
      { label: 'Technology / Digital', value: Industry.TECH },
      { label: 'Food & Beverage', value: Industry.FOOD },
      { label: 'Cannabis', value: Industry.CANNABIS },
      { label: 'Arts / Crafts', value: Industry.CRAFTS },
      { label: 'Other / Service', value: Industry.GENERAL }
    ]
  },
  {
    id: 'demographics',
    text: "About You",
    subText: "Select all that apply",
    type: 'multi',
    options: [
      { label: 'Female', value: Demographic.FEMALE },
      { label: 'Veteran', value: Demographic.VETERAN },
      { label: 'Age 50+', value: Demographic.SENIOR },
      { label: 'Black / African American', value: Demographic.BLACK }
    ]
  }
];