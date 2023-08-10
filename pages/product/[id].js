import { useRouter } from 'next/router'

function Product() {
  const router = useRouter()

  return (
    <div>
      PRODUCT: {router.query.id}
    </div>
  )
}

export default Product
