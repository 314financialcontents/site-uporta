export interface SearchResult {
  id: string;
  type: 'page' | 'blog';
  title: string;
  content: string;
  excerpt: string;
  url?: string;
  score: number;
}

export interface SearchOptions {
  query: string;
  maxResults?: number;
}