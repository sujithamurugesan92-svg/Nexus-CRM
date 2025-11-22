export enum LeadStatus {
  New = 'New',
  Contacted = 'Contacted',
  Qualified = 'Qualified',
  Lost = 'Lost'
}

export enum DealStage {
  Discovery = 'Discovery',
  Proposal = 'Proposal',
  Negotiation = 'Negotiation',
  ClosedWon = 'Closed Won',
  ClosedLost = 'Closed Lost'
}

export enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  avatar: string;
  role: string;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  employees: string;
  logo: string;
  website: string;
}

export interface Document {
  id: string;
  name: string;
  type: 'PDF' | 'DOC' | 'IMG' | 'XLS';
  size: string;
  date: string;
  uploadedBy: string;
}

export interface Lead {
  id: string;
  contact: Contact;
  status: LeadStatus;
  source: string;
  createdAt: string;
  tags: string[];
}

export interface Deal {
  id: string;
  title: string;
  value: number;
  stage: DealStage;
  contactId: string; // Relates to Contact
  expectedCloseDate: string;
  probability: number;
}

export interface Task {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
  priority: Priority;
  relatedTo?: string; // e.g., Deal ID or Lead ID
}

export interface ActivityLog {
  id: string;
  type: 'call' | 'email' | 'meeting' | 'note';
  description: string;
  date: string;
}