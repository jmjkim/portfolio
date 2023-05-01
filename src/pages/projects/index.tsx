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
            gsap.to(
                ".project-container",
                { 
                    scale: 1, 
                    width: "100%",
                    opacity: "100%",
                    ease: "power3.inOut",
                    duration: 2,
                });

            gsap.from(
                ".img-container img",
                {
                    scale: .5,
                    opacity: 0,
                    ease: "power3.inOut",
                    delay: 1,
                    duration: 1,
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
                                    <div className="img-container">
                                        <Image src={projectMainImg} alt={project.title} width={500} height={500} priority />
                                    </div>
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