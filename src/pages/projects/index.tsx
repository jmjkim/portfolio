import { ProjectData } from '../api/projects';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';


const LandingPageForProjects = ({ projects }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter()

    const handleLinkClick = (title: string) => {
        router.push(`/projects/${title}`)
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".project-container",
                { 
                    scale: 2,
                },

                { 
                    scale: 1, 
                    opacity: "100%",
                    duration: 2,
                },
            );
        });

        return () => ctx.revert();
    }, [])

    return (
        <>
            <div className="projects-navbar">
                {projects.map(project => {
                    const projectMainImg = project.mainImage.replace("/public", "")

                    return (
                        <>
                            <div className="project-container">
                                <a key={project.title} onClick={() => handleLinkClick(project.title)}>
                                    <span>{project.title}</span>
                                    <div className="img-container">
                                        <Image src={projectMainImg} alt={project.title} width={500} height={500} priority />
                                    </div>
                                </a>
                            </div>
                        </>
                    )}
                )}
            </div>
            <div className="back-to-main-btn" onClick={() => router.push('/')}>Back to Main</div>
        </>
    )
}

export default LandingPageForProjects

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/projects`);
    const projects: ProjectData[] = await res.json();
    
    return { props: { projects } };
}