import React from "react";

import ArticleItem from "@/components/article-item";
import articleData from "@/data/article-data";
function ArticleSection() {
  return (
    <section id="articles" className="p-6" style={{ backgroundColor: "var(--very-light-gray)" }}>
      <h2 className="text-2xl text-heading text-center md:text-left mb-6 ">
        Latest Article
      </h2>
      <div className="w-full md:flex flex-row feature-wrap flex-wrap md:justify-between">
        {articleData.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
}

export default ArticleSection;
