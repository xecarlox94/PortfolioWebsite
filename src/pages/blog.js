import React from "react"

import Page from "../components/page"

import Contact from "../components/fragments/contact"

const articles = [
  {
    title: "article title",
  },
  {
    title: "article title",
  },
  {
    title: "article title",
  },
  {
    title: "article title",
  },
  {
    title: "article title",
  },
]

const ArticleCard = ({ article }) => <p>{article.title}</p>

const Blog = () => (
  <Page
    seoAttr={{ title: "Blog" }}
    headerChild={<header classes="h-screen">Welcome to the Blog Page</header>}
  >
    start
    {articles.map((art, i) => (
      <ArticleCard key={i} article={art} />
    ))}
    end
    <Contact />
  </Page>
)

export default Blog
