import { useRouter } from 'next/router'

function Review() {
    const router = useRouter()
    const {productid, reviewid} = router.query
    return <h1>ProductID {productid} review ID {reviewid}</h1>
}

export default Review;