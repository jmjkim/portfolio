import { useRouter } from 'next/router';

const BackToMainBtn = () => {
    const router = useRouter()

    return (
        <div className="back-to-main-btn" onClick={() => router.push('/')}>
            Back to Main
        </div>
    )
}

export default BackToMainBtn