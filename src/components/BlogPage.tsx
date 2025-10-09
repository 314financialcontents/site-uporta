import { BlogCard } from "./BlogCard";
import { getBlogPosts } from "../data/blogPosts";
import { BlogPost } from "../types/blog";
import { useLanguage } from "../contexts/LanguageContext";

interface BlogPageProps {
  onPostClick: (post: BlogPost) => void;
}

export function BlogPage({ onPostClick }: BlogPageProps) {
  const { t, language } = useLanguage();
  const blogPosts = getBlogPosts(language);
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t.blog.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => onPostClick(post)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}