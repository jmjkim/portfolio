import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    
    return (
        <div className="navbar">
            <div className="site-menu">
                <div onClick={() => router.push("/projects")}>
                    <p>projects</p>
                </div>
                <div onClick={() => router.push('/contact')}>
                    <p>contact</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar