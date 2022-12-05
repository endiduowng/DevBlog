export function discussionGQL(discussionCategoryId: string | undefined) {
  return `{
    repository(name: "DevBlog", owner: "endiduowng") {
      discussions(first: 100, categoryId: "${discussionCategoryId}") {
        nodes {
          title
          url
          number
          bodyHTML
          bodyText
          createdAt
          lastEditedAt
          author {
            login
            url
            avatarUrl
          }
          labels(first: 100) {
            nodes {
              name
            }
          }
        }
      }
    }
  }`
}

// single post

export function discussionDetailGql(postId: number | undefined) {
  return `{
    repository(name: "DevBlog", owner: "endiduowng") {
      discussion(number: ${postId}) {
        title
        bodyHTML
        createdAt
        author {
          login
          url
          avatarUrl
        }
      }
    }
  }`
}
