export type Language = "ES" | "EN";

export interface Translations {
  header: {
    blog: string;
    search: string;
  };
  hero: {
    title: string;
    subtitle: string;
    viewFeatures: string;
    badge: string;
    fullTitle: string;
    fullTitleSuffix: string;
    context: {
      title: string;
      description: string;
      sidebarText: string;
    };
  };
  features: {
    title: string;
    intro: {
      title: string;
      titleHighlight: string;
      description: string;
    };
    mainFeatures: {
      title: string;
      multiproduct: {
        title: string;
        description: string;
        badge: string;
      };
      automation: {
        title: string;
        description: string;
        badge: string;
      };
      userCentered: {
        title: string;
        description: string;
        badge: string;
      };
      security: {
        title: string;
        description: string;
        badge: string;
      };
      sustainability: {
        title: string;
        description: string;
        badge: string;
      };
      management: {
        title: string;
        description: string;
        badge: string;
      };
    };
    benefits: {
      badge: string;
      title: string;
      list: string[];
    };
    sustainability: {
      badge: string;
      title: string;
      description: string;
    };
  };
  footer: {
    copyright: string;
    supportText: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    backToBlog: string;
    relatedPosts: string;
    posts: {
      post1: {
        title: string;
        intro: string;
        content: string;
        date: string;
        slug: string;
      };
      post2: {
        title: string;
        intro: string;
        content: string;
        date: string;
        slug: string;
      };
      post3: {
        title: string;
        intro: string;
        content: string;
        date: string;
        slug: string;
      };
    };
  };
  search: {
    title: string;
    results: string;
    noResults: string;
    noResultsDescription: string;
    pageContent: string;
    blogContent: string;
    back: string;
    page: string;
    blog: string;
  };
}