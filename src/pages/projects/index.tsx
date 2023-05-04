import { ProjectData } from '../api/projects';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BackToMainBtn from '@/components/BackToMainBtn';

const ProjectsLandingPage = ({ projects }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter()

    const handleLinkClick = (title: string) => {
        router.push(`/projects/${title}`)
    }

    
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(
                ".project-list-wrapper .project-container",
                { 
                    x: "-10%",
                    ease: "power3.in",
                    duration: 1,
                    stagger: .4,
                });

            gsap.from(
                ".project-container a img",
                {
                    ease: "power3.in",
                    duration: 1,
                    rotate: 90,
                    stagger: .4,
                });
            });
        return () => ctx.revert();
    }, [])

    return (
        <>
            <div className="project-list-wrapper">
                {projects.map(project => {
                    const projectMainImg = project.mainImage.replace("/public", "")
                    
                    return (
                        <>
                            <div className="project-container" onClick={() => handleLinkClick(project.title)}>
                                <a key={project.title}>
                                    <p>{project.title}</p>
                                    <Image src={projectMainImg} alt={project.title} width={600} height={600} priority />
                                </a>
                            </div>
                        </>
                    )}
                )}
            </div>
            <BackToMainBtn />
        </>
    )
}

export default ProjectsLandingPage

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/projects`);
    const projects: ProjectData[] = await res.json();
    
    return { props: { projects } };
}