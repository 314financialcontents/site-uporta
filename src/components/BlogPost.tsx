import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, Calendar } from "lucide-react";
import { BlogPost as BlogPostType } from "../types/blog";
import { getBlogPosts } from "../data/blogPosts";
import { useLanguage } from "../contexts/LanguageContext";

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
  onPostClick: (post: BlogPostType) => void;
}

export function BlogPost({ post, onBack, onPostClick }: BlogPostProps) {
  const { t, language } = useLanguage();
  const blogPosts = getBlogPosts(language);
  
  // Get the current post in the active language by matching the ID
  const currentPost = blogPosts.find(p => p.id === post.id) || post;
  
  // Convert markdown-style content to JSX
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-2xl mt-8 mb-6 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('- **')) {
        const boldText = line.match(/\*\*(.*?)\*\*/)?.[1] || '';
        const remainingText = line.replace(/- \*\*(.*?)\*\*/, '').trim();
        elements.push(
          <li key={i} className="mb-4 flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <div>
              <strong className="font-semibold block mb-1">
                {boldText}
              </strong>
              {remainingText && <span className="text-muted-foreground leading-relaxed">{remainingText}</span>}
            </div>
          </li>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={i} className="mb-3 flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
            <span className="leading-relaxed">{line.replace('- ', '')}</span>
          </li>
        );
      } else if (line.trim() && !line.startsWith('#')) {
        elements.push(
          <p key={i} className="mb-4 leading-relaxed">
            {line}
          </p>
        );
      }
    }
    
    return elements;
  };

  // Get other posts (excluding current one)
  const otherPosts = blogPosts.filter(p => p.id !== currentPost.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-8 gap-2 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.blog.backToBlog}
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main content */}
            <div className="lg:col-span-3">
              <article className="space-y-8">
                <header className="space-y-4">
                  <h1 className="text-3xl md:text-4xl leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {currentPost.title}
                  </h1>
                  <div className="flex items-center gap-2 text-sm text-primary/70">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {currentPost.date}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 py-2">
                    {currentPost.intro}
                  </p>
                </header>

                {/* Article content */}
                <div className="prose prose-lg max-w-none">
                  <ul className="space-y-1 list-none">
                    {formatContent(currentPost.content)}
                  </ul>
                </div>
              </article>
            </div>

            {/* Sidebar with other posts */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t.blog.relatedPosts}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {otherPosts.map((otherPost) => (
                      <div 
                        key={otherPost.id}
                        className="cursor-pointer group"
                        onClick={() => onPostClick(otherPost)}
                      >
                        <h3 className="text-sm leading-tight group-hover:text-primary transition-colors">
                          {otherPost.title}
                        </h3>
                        <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {otherPost.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}