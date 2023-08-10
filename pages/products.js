import Link from 'next/link'

function Products({ products }) {
  return (
    <div>
      <h2>Products</h2>

      {
        products.map(({ id, name }) => (
          <article key={id}>
            <Link href={`/product/${id}`}>{name}</Link>
          </article>
        ))
      }
    </div>
  )
}

export function getServerSideProps() {
  return {
    props: {
      products: [
        {
          id: 1,
          name: 'Macbook'
        },
        {
          id: 2,
          name: 'Surface'
        }
      ]
    }
  }
}

export default Products
