import { BlogPost } from "../types/blog";
import { translations } from "./translations";

export function getBlogPosts(language: 'ES' | 'EN'): BlogPost[] {
  const t = translations[language];
  
  return [
    {
      id: "3",
      title: t.blog.posts.post1.title,
      intro: t.blog.posts.post1.intro,
      content: t.blog.posts.post1.content,
      date: t.blog.posts.post1.date,
      slug: t.blog.posts.post1.slug
    },
    {
      id: "2",
      title: t.blog.posts.post2.title,
      intro: t.blog.posts.post2.intro,
      content: t.blog.posts.post2.content,
      date: t.blog.posts.post2.date,
      slug: t.blog.posts.post2.slug
    },
    {
      id: "1",
      title: t.blog.posts.post3.title,
      intro: t.blog.posts.post3.intro,
      content: t.blog.posts.post3.content,
      date: t.blog.posts.post3.date,
      slug: t.blog.posts.post3.slug
    }
  ];
}

// Mantener la exportación legacy por compatibilidad
export const blogPosts = getBlogPosts('ES');
