import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    return (
        <div class="navbar">
            <div class="site-menu">
                <div class="menu-item" onClick={() => router.push('/projects')}>projects</div>
                <div class="menu-item">about</div>
                <div class="menu-item">contact</div>
            </div>
        </div>
    )
}

export default Navbar