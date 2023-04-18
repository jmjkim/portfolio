import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { ProjectData } from '../api/projects';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LandingPageForProjects = ({ projects }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter()
    return (
        <>
            <div className="projects-navbar">
                {projects.map(project => <Link key={project.title} href={`/${project.title}`}>{project.title}</Link>)}
            </div>
            <button className="button" onClick={() => router.push('/')}>go back</button>
        </>
        )

        // <Link href="/lamborghinian">lamborghinian</Link>
        // <Link href="/eventeller">eventeller</Link>
        // <Link href="/kartrade">kartrade</Link>
}

export default LandingPageForProjects

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/projects`);
    const projects: ProjectData = await res.json();

    return { props: { projects } };
}