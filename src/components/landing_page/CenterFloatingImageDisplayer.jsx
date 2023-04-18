import cat from '../../assets/cat.png'
import Image from 'next/image'

const CenterFloatingImageDisplayer = () => {
    return (
        <div class="floating-image-container">
            <div class="cat-img">
                <Image src={cat} alt="cat" width={2400} height={2400} />
            </div>
        </div>
    )
}

export default CenterFloatingImageDisplayer