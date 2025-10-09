import { SearchResult, SearchOptions } from '../types/search';
import { BlogPost } from '../types/blog';
import { searchablePageContent } from '../data/searchableContent';
import { blogPosts } from '../data/blogPosts';
import { Language } from '../types/language';

function normalizeText(text: string): string {
  return text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function calculateScore(text: string, query: string): number {
  const normalizedText = normalizeText(text);
  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(' ').filter(word => word.length > 1);
  
  if (queryWords.length === 0) return 0;
  
  let score = 0;
  const textWords = normalizedText.split(' ');
  
  queryWords.forEach(queryWord => {
    // Exact word match
    if (textWords.includes(queryWord)) {
      score += 10;
    }
    // Partial word match
    else if (textWords.some(word => word.includes(queryWord))) {
      score += 5;
    }
    // Text contains query word as substring
    else if (normalizedText.includes(queryWord)) {
      score += 2;
    }
  });
  
  // Bonus for title matches
  if (normalizedText.includes(normalizedQuery)) {
    score += 15;
  }
  
  return score;
}

function createExcerpt(content: string, query: string, maxLength: number = 200): string {
  const normalizedContent = content.toLowerCase();
  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(' ').filter(word => word.length > 1);
  
  if (queryWords.length === 0) {
    return content.length > maxLength 
      ? content.substring(0, maxLength) + '...'
      : content;
  }
  
  // Find the first occurrence of any query word
  let firstIndex = -1;
  for (const word of queryWords) {
    const index = normalizedContent.indexOf(word);
    if (index !== -1 && (firstIndex === -1 || index < firstIndex)) {
      firstIndex = index;
    }
  }
  
  if (firstIndex === -1) {
    return content.length > maxLength 
      ? content.substring(0, maxLength) + '...'
      : content;
  }
  
  // Create excerpt around the found word
  const start = Math.max(0, firstIndex - 50);
  const end = Math.min(content.length, start + maxLength);
  let excerpt = content.substring(start, end);
  
  if (start > 0) excerpt = '...' + excerpt;
  if (end < content.length) excerpt = excerpt + '...';
  
  return excerpt;
}

export function searchContent(options: SearchOptions, language: Language): SearchResult[] {
  const { query, maxResults = 20 } = options;
  
  if (!query.trim()) {
    return [];
  }
  
  const results: SearchResult[] = [];
  const processedIds = new Set<string>();
  
  // Search in page content first (higher priority)
  const pageContent = searchablePageContent[language] || searchablePageContent.ES;
  pageContent.forEach(item => {
    const titleScore = calculateScore(item.title, query);
    const contentScore = calculateScore(item.content, query);
    const totalScore = titleScore * 2 + contentScore; // Title matches have double weight
    
    if (totalScore > 0) {
      results.push({
        id: `page-${item.id}`,
        type: 'page',
        title: item.title,
        content: item.content,
        excerpt: createExcerpt(item.content, query),
        score: totalScore + 100 // Bonus for page content
      });
      processedIds.add(`page-${item.id}`);
    }
  });
  
  // Search in blog posts
  blogPosts.forEach(post => {
    if (processedIds.has(`blog-${post.id}`)) return;
    
    const titleScore = calculateScore(post.title, query);
    const excerptScore = calculateScore(post.excerpt, query);
    const contentScore = calculateScore(post.content, query);
    const tagsScore = post.tags.reduce((acc, tag) => acc + calculateScore(tag, query), 0);
    
    const totalScore = titleScore * 3 + excerptScore * 2 + contentScore + tagsScore;
    
    if (totalScore > 0) {
      results.push({
        id: `blog-${post.id}`,
        type: 'blog',
        title: post.title,
        content: post.content,
        excerpt: createExcerpt(post.excerpt, query),
        url: `/blog/${post.id}`,
        score: totalScore
      });
      processedIds.add(`blog-${post.id}`);
    }
  });
  
  // Sort by score (highest first) and limit results
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);
}