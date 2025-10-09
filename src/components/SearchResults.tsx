import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { SearchResult } from "../types/search";
import { BlogPost as BlogPostType } from "../types/blog";
import { blogPosts } from "../data/blogPosts";
import { useLanguage } from "../contexts/LanguageContext";
import { FileText, Home, ArrowLeft } from "lucide-react";

interface SearchResultsProps {
  query: string;
  results: SearchResult[];
  onBack: () => void;
  onPostClick?: (post: BlogPostType) => void;
}

export function SearchResults({ query, results, onBack, onPostClick }: SearchResultsProps) {
  const { t } = useLanguage();
  
  const handleResultClick = (result: SearchResult) => {
    if (result.type === 'blog' && onPostClick) {
      // Find the blog post and call onPostClick
      const post = blogPosts.find(p => `blog-${p.id}` === result.id);
      if (post) {
        onPostClick(post);
      }
    } else if (result.type === 'page') {
      // Navigate to home and scroll to section
      onBack();
      setTimeout(() => {
        const sectionMap: Record<string, string> = {
          'hero': 'top',
          'context': 'top',
          'automation': 'caracteristicas',
          'accessibility': 'caracteristicas',
          'variety': 'caracteristicas',
          'sustainability': 'caracteristicas',
          'transparency': 'caracteristicas',
          'efficiency': 'caracteristicas',
          'benefits': 'caracteristicas',
          'local-economy': 'caracteristicas'
        };
        
        const sectionId = result.id.replace('page-', '');
        const targetId = sectionMap[sectionId] || 'caracteristicas';
        
        if (targetId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const words = query.toLowerCase().split(' ').filter(word => word.length > 2);
    let highlightedText = text;
    
    words.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      highlightedText = highlightedText.replace(
        regex, 
        '<mark class="bg-primary/20 text-primary px-1 rounded">$1</mark>'
      );
    });
    
    return highlightedText;
  };

  const pageResults = results.filter(r => r.type === 'page');
  const blogResults = results.filter(r => r.type === 'blog');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.search.back}
          </Button>
          
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t.search.title}
            </h1>
            <p className="text-muted-foreground">
              {results.length} {t.search.results} "{query}"
            </p>
          </div>
        </div>

        {results.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <FileText className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{t.search.noResults}</h3>
                  <p className="text-muted-foreground">
                    {t.search.noResultsDescription}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Page Results */}
            {pageResults.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Home className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {t.search.pageContent}
                  </h2>
                  <Badge variant="secondary">{pageResults.length}</Badge>
                </div>
                
                <div className="space-y-4">
                  {pageResults.map((result) => (
                    <Card 
                      key={result.id} 
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => handleResultClick(result)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle 
                            className="text-lg"
                            dangerouslySetInnerHTML={{ 
                              __html: highlightText(result.title, query) 
                            }}
                          />
                          <Badge variant="outline" className="ml-2">
                            {t.search.page}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p 
                          className="text-muted-foreground"
                          dangerouslySetInnerHTML={{ 
                            __html: highlightText(result.excerpt, query) 
                          }}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Blog Results */}
            {blogResults.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {t.search.blogContent}
                  </h2>
                  <Badge variant="secondary">{blogResults.length}</Badge>
                </div>
                
                <div className="space-y-4">
                  {blogResults.map((result) => (
                    <Card 
                      key={result.id} 
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => handleResultClick(result)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle 
                            className="text-lg"
                            dangerouslySetInnerHTML={{ 
                              __html: highlightText(result.title, query) 
                            }}
                          />
                          <Badge variant="outline" className="ml-2">
                            {t.search.blog}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p 
                          className="text-muted-foreground"
                          dangerouslySetInnerHTML={{ 
                            __html: highlightText(result.excerpt, query) 
                          }}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}