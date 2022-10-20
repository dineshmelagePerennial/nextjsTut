import { useRouter } from 'next/router'

function ReviewId() {
    const router = useRouter()
    const reviewId = router.query.reviewid
    return <h1>review ID {reviewId}</h1>
}

export default ReviewId;