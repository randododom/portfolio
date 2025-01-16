import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

type Source = {
    site: string;
    url: string;
    technologies: string[];
    selected: boolean;
  };

type Article = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
};
type NewsFeedProps = {
    sources: Source[];
  }

  export default function NewsFeed({ sources }: NewsFeedProps) {
  const [articles, setArticles] = useState<Article[]>([]);
 
  useEffect(() => {
    const fetchNews = async () => {
      const parser = new Parser();
      const activeSources = sources.filter((source) => source.selected);
      const allArticles: Article[] = [];

      for (const source of activeSources) {
        try {
          const feed = await parser.parseURL(source.url);
          feed.items.forEach((item) => {
            allArticles.push({
              title: item.title || "",
              link: item.link || "",
              pubDate: item.pubDate || "",
              contentSnippet: item.contentSnippet || "",
            });
          });
        } catch (error) {
          console.error(`Erreur pour ${source.site}:`, error);
        }
      }

      // Trier par date
      allArticles.sort(
        (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
      );

      setArticles(allArticles);
    };

    fetchNews();
  }, [sources]);

  return (
    <div className="scrollbar scrollLight dark:scrollDark max-h-[60vh] overflow-y-scroll">
      {articles.map((article, index) => (
        <div key={index} className="mb-4 p-2 border-b-[1px]">
          <h3 className="text-lg font-semibold">{article.title}</h3>
          <p className="text-sm text-gray-500">
            {new Date(article.pubDate).toLocaleDateString("fr-FR")}
          </p>
          <p className="text-sm">{article.contentSnippet}</p>
          <a href={article.link} target="_blank" className="text-blue-500">
            Lire l&apos;article
          </a>
        </div>
      ))}
    </div>
  );
}