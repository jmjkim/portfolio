import absoluteUrl from "next-absolute-url";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { ProjectData } from "../api/projects";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import github from "../../../public/github.svg";
import { useRouter } from "next/router";
import demonstration from "../../../public/demonstration.png";

const ProjectDisplayer = ({ project }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter()

    useEffect(() => {
        const ctx = gsap.context(() => {   
            gsap.from(
                ".revealer", 
                {
                    ease: "power3.inOut",
                    duration: 2,
                    delay: 2,
                });

            gsap.to(
                ".revealer",
                {
                    ease: "power3.inOut",
                    duration: 2,
                    backgroundColor: "#000",
                    delay: 2,
                    width: 0,
                    display: "none",
                });

            gsap.to(
                ".loader-text-wrapper",
                {
                    opacity: 0,
                    display: "none",
                    ease: "power3.inOut",
                    duration: 3,
                });

            gsap.from(
                ".loader-text", 
                {
                    ease: "power3.inOut",
                    duration: 3,
                });

            gsap.from(
                ".container",
                {
                    opacity: 0,
                    ease: "power3.inOut",
                    delay: 2.5,
                    duration: 2,
                });

            gsap.from(
                ".img-wrapper", 
                {
                    y: 50,
                    opacity: 0,
                    delay: 3,
                    stagger: .4,
                    duration: 2,
                    ease: "power3.inOut",
                });
        })
        return () => ctx.revert();
    }, [])

    return (
        <>
            <div className="revealer"></div>
            <div className="loader-text-wrapper">
                <p className="loader-text">{project.title}</p>
            </div>

            <div className="container">
                <div className="cols">
                  <div className="col-left">
                      {project.detailImages.map((img, idx) => {
                        return (
                            <div key={idx} className="img-wrapper">
                                <Image src={img.replace("/public", "")} alt="project" width={400} height={400} priority />
                            </div>
                        )})}
                  </div>
                  <div className="col-right">
                    <h1>{project.title}</h1>
                    <br />
                    <div className="link-stack-wrapper">
                        <div className="stack-wrapper">
                            {project.stacks.map(stack => {
                                return <li key={stack}>{stack}</li>
                            })}
                        </div>
                        <div className="link-wrapper">
                            <a href={`https://github.com/jmjkim/${project.title}`} target="_blank">
                                <Image src={github} alt="github" width={100} height={100} priority />
                            </a>
                            {project.demonstration !== "" ?
                                <a href={project.demonstration} target="_blank">
                                    <Image src={demonstration} alt="demonstration" width={100} height={100} priority />
                                </a> : null}
                        </div>
                    </div>
                    <br />
                    <p>{project.description}</p>
                  </div>
                  <div className="back-to-main-btn" onClick={() => router.push("/projects")}>
                    <p>back to projects</p>
                  </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDisplayer

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const res = await fetch(`${absoluteUrl(context.req).origin}/api/projects/${context.query.title}`);
    const project: ProjectData = await res.json();

    return { props: { project } };
}