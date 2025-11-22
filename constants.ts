import { Lead, Contact, Deal, Task, LeadStatus, DealStage, Priority, ActivityLog, Company, Document } from './types';

export const MOCK_CONTACTS: Contact[] = [
  { id: 'c1', name: 'Alice Freeman', email: 'alice@designco.com', phone: '+1 (555) 123-4567', company: 'DesignCo', role: 'Creative Director', avatar: 'https://picsum.photos/100/100?random=1' },
  { id: 'c2', name: 'Bob Smith', email: 'bob@techstart.io', phone: '+1 (555) 987-6543', company: 'TechStart', role: 'CTO', avatar: 'https://picsum.photos/100/100?random=2' },
  { id: 'c3', name: 'Charlie Davis', email: 'charlie@marketinggurus.net', phone: '+1 (555) 456-7890', company: 'MarketingGurus', role: 'VP of Sales', avatar: 'https://picsum.photos/100/100?random=3' },
  { id: 'c4', name: 'Diana Prince', email: 'diana@amazonia.com', phone: '+1 (555) 222-3333', company: 'Amazonia', role: 'Procurement Manager', avatar: 'https://picsum.photos/100/100?random=4' },
  { id: 'c5', name: 'Evan Wright', email: 'evan@buildit.com', phone: '+1 (555) 111-2222', company: 'BuildIt Inc.', role: 'CEO', avatar: 'https://picsum.photos/100/100?random=5' },
];

export const MOCK_COMPANIES: Company[] = [
  { id: 'cp1', name: 'DesignCo', industry: 'Creative Agency', location: 'New York, NY', employees: '10-50', logo: 'https://picsum.photos/100/100?random=10', website: 'designco.com' },
  { id: 'cp2', name: 'TechStart', industry: 'Software', location: 'San Francisco, CA', employees: '50-200', logo: 'https://picsum.photos/100/100?random=11', website: 'techstart.io' },
  { id: 'cp3', name: 'MarketingGurus', industry: 'Marketing', location: 'Austin, TX', employees: '1-10', logo: 'https://picsum.photos/100/100?random=12', website: 'marketinggurus.net' },
  { id: 'cp4', name: 'Amazonia', industry: 'E-commerce', location: 'Seattle, WA', employees: '1000+', logo: 'https://picsum.photos/100/100?random=13', website: 'amazonia.com' },
];

export const MOCK_DOCUMENTS: Document[] = [
  { id: 'd1', name: 'Q4 Marketing Strategy.pdf', type: 'PDF', size: '2.4 MB', date: 'Oct 24, 2023', uploadedBy: 'Matthew Parker' },
  { id: 'd2', name: 'Service Agreement v2.docx', type: 'DOC', size: '1.1 MB', date: 'Oct 22, 2023', uploadedBy: 'Alice Freeman' },
  { id: 'd3', name: 'Project Timeline_Final.xlsx', type: 'XLS', size: '850 KB', date: 'Oct 20, 2023', uploadedBy: 'Bob Smith' },
  { id: 'd4', name: 'Site Mockups.png', type: 'IMG', size: '4.2 MB', date: 'Oct 18, 2023', uploadedBy: 'Matthew Parker' },
];

export const MOCK_LEADS: Lead[] = [
  { id: 'l1', contact: MOCK_CONTACTS[0], status: LeadStatus.New, source: 'Website', createdAt: '2023-10-25', tags: ['High Value', 'Urgent'] },
  { id: 'l2', contact: MOCK_CONTACTS[2], status: LeadStatus.Contacted, source: 'Referral', createdAt: '2023-10-28', tags: ['Long Term'] },
  { id: 'l3', contact: MOCK_CONTACTS[4], status: LeadStatus.Qualified, source: 'LinkedIn', createdAt: '2023-10-29', tags: ['Enterprise'] },
];

export const MOCK_DEALS: Deal[] = [
  { id: 'd1', title: 'Website Redesign', value: 5000, stage: DealStage.Discovery, contactId: 'c1', expectedCloseDate: '2023-11-15', probability: 20 },
  { id: 'd2', title: 'SEO Audit', value: 1200, stage: DealStage.Proposal, contactId: 'c2', expectedCloseDate: '2023-11-10', probability: 60 },
  { id: 'd3', title: 'Q4 Marketing Campaign', value: 15000, stage: DealStage.Negotiation, contactId: 'c3', expectedCloseDate: '2023-12-01', probability: 80 },
  { id: 'd4', title: 'App Development MVP', value: 25000, stage: DealStage.ClosedWon, contactId: 'c4', expectedCloseDate: '2023-10-20', probability: 100 },
  { id: 'd5', title: 'Cloud Migration', value: 8500, stage: DealStage.Discovery, contactId: 'c5', expectedCloseDate: '2023-12-15', probability: 30 },
];

export const MOCK_TASKS: Task[] = [
  { id: 't1', title: 'Follow up with Alice regarding proposal', dueDate: 'Today', completed: false, priority: Priority.High, relatedTo: 'Website Redesign' },
  { id: 't2', title: 'Send contract to Bob', dueDate: 'Tomorrow', completed: false, priority: Priority.Medium, relatedTo: 'SEO Audit' },
  { id: 't3', title: 'Prepare Q4 presentation deck', dueDate: 'Nov 5', completed: true, priority: Priority.High, relatedTo: 'Q4 Marketing Campaign' },
  { id: 't4', title: 'Review roadmap with engineering team', dueDate: 'Nov 7', completed: false, priority: Priority.Medium },
  { id: 't5', title: 'Schedule lunch with Evan', dueDate: 'Nov 10', completed: false, priority: Priority.Low, relatedTo: 'Cloud Migration' },
];

export const RECENT_ACTIVITIES: ActivityLog[] = [
  { id: 'a1', type: 'email', description: 'Sent initial outreach to Alice Freeman', date: '2 Hours ago' },
  { id: 'a2', type: 'call', description: 'Discovery call with Bob Smith', date: '5 Hours ago' },
  { id: 'a3', type: 'note', description: 'Internal strategy meeting for Q4 Campaign', date: 'Yesterday' },
  { id: 'a4', type: 'meeting', description: 'Demo presentation with Amazonia Team', date: '2 Days ago' },
];