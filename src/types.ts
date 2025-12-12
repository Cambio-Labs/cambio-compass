import React from 'react';

export enum Stage {
  IDEA = 'Idea Stage',
  PRE_SEED = 'Pre-seed Stage',
  SEED = 'Seed Stage',
  GROWTH = 'Growth Stage',
  SCALE = 'Scale Stage'
}

export enum Industry {
  GENERAL = 'General',
  TECH = 'Tech',
  FOOD = 'Food',
  CANNABIS = 'Cannabis',
  CRAFTS = 'Crafts'
}

export enum Demographic {
  ANY = 'Any',
  FEMALE = 'Female',
  VETERAN = 'Veteran',
  SENIOR = 'Senior', // 50+
  BLACK = 'Black',
  NYCHA = 'NYCHA', // Resident
  BROOKLYN = 'Brooklyn', // Resident
  OTHER = 'Other'
}

export enum ServiceNeed {
  LEGAL = 'Legal',
  FUNDING = 'Funding',
  EDUCATION = 'Education',
  COMMUNITY = 'Community'
}

export interface ProgramRequirements {
  minStage?: Stage;
  maxStage?: Stage;
  registeredBusiness?: boolean; // true = required, false = must NOT be registered, undefined = doesn't matter
  minRevenue?: number;
  maxRevenue?: number;
  requiredDemographics?: Demographic[]; // User MUST have ALL of these
  optionalDemographics?: Demographic[]; // User matching ONE of these gets a score boost
  specificIndustry?: Industry; // If set, user must match or be general
  providedServices?: ServiceNeed[]; // What the program excels at
}

export interface Program {
  id: string;
  name: string;
  description: string;
  url: string;
  requirements: ProgramRequirements;
}

export interface QuestionOption {
  label: string;
  description?: string; // New field for detailed explanations
  value: any;
  icon?: React.ReactNode;
}

export interface Question {
  id: string;
  text: string;
  subText?: string;
  type: 'single' | 'multi' | 'boolean';
  options?: QuestionOption[];
  conditional?: (currentAnswers: Record<string, any>) => boolean;
}

export interface MatchResult {
  program: Program;
  score: number;
  reasons: string[];
  isEligible: boolean;
}