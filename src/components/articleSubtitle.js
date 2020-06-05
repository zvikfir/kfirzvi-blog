import React from "react"

export const ArticleSubtitle = ({ article }) => {
  return (
    <div className="text-black-50 d-flex align-content-center align-items-center w-100 h-100">
      {article.authors.length == 0
        ? "אנונימי"
        : article.authors.map(author => author.name).join(", ")}
      <br />

      {new Date(article.created_at).toLocaleDateString("he-IL", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </div>
  )
}
