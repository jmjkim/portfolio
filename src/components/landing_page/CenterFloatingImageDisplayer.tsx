import cat from '../../../public/cat.png'
import Image from 'next/image'

const CenterFloatingImageDisplayer = () => {
    return (
        <div className="floating-image-container">
            <div className="cat-img">
                <Image src={cat} alt="cat" width={2400} height={2400} />
            </div>
        </div>
    )
}

export default CenterFloatingImageDisplayer