import { useRouter } from 'next/router'

function ProductId() {
    const router = useRouter()
    const productId = router.query.productid
    return <h1>Product ID {productId}</h1>
}

export default ProductId;