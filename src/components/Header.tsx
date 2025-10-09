import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLanguage } from "../contexts/LanguageContext";

interface HeaderProps {
  onNavigate: (page: 'home' | 'blog' | 'search') => void;
  currentPage: string;
  onSearch?: (query: string) => void;
}

export function Header({ onNavigate, currentPage, onSearch }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">u</span>
            </div>
            <span className="text-xl font-semibold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>uPorta</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('blog')}
              className={`transition-colors ${
                currentPage === 'blog' || currentPage === 'blogPost'
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {t.header.blog}
            </button>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('ES')}>
                  <span className={language === 'ES' ? 'text-primary font-medium' : ''}>
                    Español
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('EN')}>
                  <span className={language === 'EN' ? 'text-primary font-medium' : ''}>
                    English
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}