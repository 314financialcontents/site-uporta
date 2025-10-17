import { BlogPost } from "../types/blog";
import { translations } from "./translations";

export function getBlogPosts(language: 'ES' | 'EN'): BlogPost[] {
  const t = translations[language];
  
  // Recorrer todos los posts automáticamente desde las traducciones
  return Object.entries(t.blog.posts).map(([key, post]) => {
    // Extraer el número del key (post1 -> 1, post2 -> 2, etc.)
    const postNumber = key.replace('post', '');
    
    return {
      id: postNumber,
      title: post.title,
      intro: post.intro,
      content: post.content,
      date: post.date,
      slug: post.slug
    };
  }).reverse(); // Invertir para mostrar los posts más recientes primero
}

// Mantener la exportación legacy por compatibilidad
export const blogPosts = getBlogPosts('ES');
