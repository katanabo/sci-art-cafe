
export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  EVENT = 'EVENT',
  EVENT_DETAIL = 'EVENT_DETAIL',
  CONTACT = 'CONTACT',
}

export interface NavItem {
  page: Page;
  label: string;
}

export interface EventInfo {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  longDescription?: string;
  category: '科学' | '音楽' | '融合';
  imageUrl?: {
    url: string;
    height: number;
    width: number;
  };
}
