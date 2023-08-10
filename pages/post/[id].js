const POSTS = [
  {
    id: 1,
    title: 'My Post #1'
  },
  {
    id: 2,
    title: 'My Post #2'
  },
  {
    id: 3,
    title: 'My Post #3'
  }
]

function Post() {
  return (
    <div>
      <h3>POST</h3>
    </div>
  )
}

export function getStaticProps(context) {
  return {
    props: { id: context.params.id }
  }
}

export function getStaticPaths() {
  return {
    paths: POSTS.map((post) => ({
      params: {
        id: Number(post.id).toString()
      }
    })),
    fallback: true
  }
}

export default Post
