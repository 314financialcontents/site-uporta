import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar } from "lucide-react";
import { BlogPost } from "../types/blog";

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group">
      <CardHeader className="pb-1">
        <CardTitle 
          className="text-xl hover:text-primary transition-colors cursor-pointer" 
          style={{ fontFamily: 'Poppins, sans-serif' }}
          onClick={onClick}
        >
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground leading-relaxed mb-4">
          {post.intro}
        </p>
        <div className="flex items-center gap-2 text-xs text-primary/70">
          <Calendar className="w-3 h-3" />
          <span>
            {post.date}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}