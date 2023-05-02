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
                    duration: 1,
                    delay: 2,
                });

            gsap.to(
                ".revealer",
                {
                    ease: "power3.inOut",
                    duration: 1,
                    delay: 2,
                    left: "100%",
                    display: "none",
                });

            gsap.to(
                ".loader-text-wrapper",
                {
                    opacity: 0,
                    display: "none",
                    ease: "power3.inOut",
                    duration: 2,
                });

            gsap.from(
                ".loader-text", 
                {
                    ease: "power3.inOut",
                    duration: 2,
                })

            gsap.from(
                ".container",
                {
                    opacity: 0,
                    width: 0,
                    ease: "power3.inOut",
                    delay: 2,
                    duration: 1,
                });

            gsap.to(
                "#scroll-arrow",
                {
                    y: "50vh",
                    duration: 2,
                    ease: "power3.out",
                    delay: 2,
                    repeat: 3,
                    display: "none",
                    opacity: 0,
                });
        })
        return () => ctx.revert();
    }, [])

    return (
        <>

            <div className="revealer"></div>
            <div className="loader-text-wrapper">
                <h1 className="loader-text">{project.title}</h1>
            </div>

            <div className="container">
                <div className="cols">
                  <div className="col-left">
                      <span id="scroll-arrow">&#62;</span>
                      {project.detailImages.map((img, idx) => {
                          return (
                            <>
                                <div className="img-wrapper">
                                    <Image key={idx} src={img.replace("/public", "")} alt="project" width={400} height={400} priority />
                                </div>
                            </>
                        )
                      })}
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
                                <Image src={github} alt="github" width={80} height={80} priority />
                            </a>
                            {project.demonstration !== "" ?
                                <a href={project.demonstration} target="_blank">
                                    <Image src={demonstration} alt="demonstration" width={80} height={80} />
                                </a> : null
                            }
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
    const res = await fetch(`http://localhost:3000/api/projects/${context.query.title}`);
    const project: ProjectData = await res.json();

    return { props: { project } };
}