import { useRouter } from 'next/router';

const BackToMainBtn = () => {
    const router = useRouter()

    return (
        <div className="back-to-main-btn" onClick={() => router.push('/')}>
            <p>back to main</p>
        </div>
    )
}

export default BackToMainBtn