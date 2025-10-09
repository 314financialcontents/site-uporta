import { useState } from "react";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { BlogPage } from "./components/BlogPage";
import { BlogPost } from "./components/BlogPost";
import { SearchResults } from "./components/SearchResults";
import { BlogPost as BlogPostType } from "./types/blog";
import { SearchResult } from "./types/search";
import { searchContent } from "./utils/search";

type Page = "home" | "blog" | "blogPost" | "search";

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const { language } = useLanguage();

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    if (page !== "blogPost") {
      setSelectedPost(null);
    }
    if (page !== "search") {
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const results = searchContent({ query }, language);
    setSearchResults(results);
    setCurrentPage('search');
  };

  const handlePostClick = (post: BlogPostType) => {
    setSelectedPost(post);
    setCurrentPage("blogPost");
  };

  const handleBackToBlog = () => {
    setCurrentPage("blog");
    setSelectedPost(null);
  };

  const renderContent = () => {
    switch (currentPage) {
      case "blog":
        return <BlogPage onPostClick={handlePostClick} />;
      case "blogPost":
        return selectedPost ? (
          <BlogPost
            post={selectedPost}
            onBack={handleBackToBlog}
            onPostClick={handlePostClick}
          />
        ) : null;
      case "search":
        return (
          <SearchResults
            query={searchQuery}
            results={searchResults}
            onBack={() => handleNavigation("home")}
            onPostClick={handlePostClick}
          />
        );
      default:
        return (
          <main>
            <HeroSection />
            <FeaturesSection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onNavigate={handleNavigation}
        currentPage={currentPage}
        onSearch={handleSearch}
      />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}