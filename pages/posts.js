import Link from 'next/link'

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

function Posts() {
  return (
    <div>
      <h3>POSTS</h3>

      {
        POSTS.map(({ id, title }) => (
          <article key={id}>
            <Link href={`/post/${id}`}>{title}</Link>
          </article>
        ))
      }
    </div>
  )
}

export default Posts
