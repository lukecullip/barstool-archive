import React from "react";

function ArticleCard({ article }) {
  const title = article.title;
  const articleUrl = article.url;


  let thumbnailUrl = "";
  if (
    article.thumbnail &&
    article.thumbnail.location &&
    article.thumbnail.images &&
    article.thumbnail.images.small
  ) {
    thumbnailUrl =
      article.thumbnail.location + article.thumbnail.images.small;
  } else if (article.thumbnail && article.thumbnail.desktop) {
    thumbnailUrl = article.thumbnail.desktop;
  }

  const authorName = article.author?.name || "Unknown author";
  const authorAvatar = article.author?.avatar || "";

  const numComments =
    typeof article.comment_count === "number" ? article.comment_count : 0;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginBottom: "1rem",
        padding: "0.75rem",
        display: "flex",
        gap: "0.75rem",
        alignItems: "flex-start",
      }}
    >
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt={title}
          style={{ width: "150px", height: "auto", objectFit: "cover" }}
        />
      )}

      <div style={{ flex: 1 }}>
        {/* Title */}
        <h2 style={{ margin: "0 0 0.5rem 0", fontSize: "1.25rem" }}>
          <a
            href={articleUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            {title}
          </a>
        </h2>

        {/* Author */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          {authorAvatar && (
            <img
              src={authorAvatar}
              alt={authorName}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "0.5rem",
                objectFit: "cover",
              }}
            />
          )}
          <span>{authorName}</span>
        </div>

        {/* Comments */}
        <p style={{ margin: 0 }}>Comments: {numComments}</p>
      </div>
    </div>
  );
}

export default ArticleCard;