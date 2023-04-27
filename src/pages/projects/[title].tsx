import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { ProjectData } from "../api/projects";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import github from "../../../public/github.svg";
import demonstration from "../../../public/demonstration.png";
import { useRouter } from "next/router";

const ProjectDisplayer = ({ project }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter()

    useEffect(() => {
        const ctx = gsap.context(() => {         
            gsap.to(
                ".loader-text-wrapper",
                {
                    opacity: 0,
                    display: "none",
                    ease: "power3.inOut",
                    duration: 3,
                });

            gsap.to(
                "#scroll-arrow",
                {
                    y: 600,
                    duration: 1.5,
                    ease: "power3.inOut",
                    delay: 3,
                    repeat: 2,
                    display: "none",
                    opacity: 0,
                });
        })
        return () => ctx.revert();
    }, [])

    return (
        <>
            <div className="container">
                <div className="cols">
                  <div className="col col-left">
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
                  <div className="col col-right">
                    <h1>{project.title}</h1>
                    <br />
                    {project.stacks.map(stack => { return <li key={stack}>{stack}</li> })}
                    <br />
                    <br />
                    <p>{project.description}</p>

                    <div className="link-wrapper">
                        <a href={`https://github.com/jmjkim/${project.title}`} target="_blank">
                            <Image src={github} alt="github" width={80} height={80} />
                        </a>
                        <a href={project.demonstration} target="_blank">
                            <Image src={demonstration} alt="demonstration" width={80} height={80} />
                        </a>
                    </div>
                  </div>
                </div>
            </div>

            <div className="back-to-main-btn" onClick={() => router.push("/projects")}>back to projects</div>

            <div className="loader-text-wrapper block">
                <h1 className="loader-text">{project.title}</h1>
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