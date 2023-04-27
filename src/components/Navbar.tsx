import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    
    return (
        <div className="navbar">
            <div className="site-menu">
                <div className="menu-item" onClick={() => router.push("/projects")}>projects</div>
                <div className="menu-item" onClick={() => router.push('/contact')}>contact</div>
            </div>
        </div>
    )
}

export default Navbar