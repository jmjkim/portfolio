import React, { useEffect } from "react"
import { gsap } from "gsap"
import TallyForm from "@/components/TallyForm"
import { useRouter } from "next/router"

const ContactLandingPage = () => {
    const router = useRouter()

    useEffect(() => {
        const ctx = gsap.context(() => {  
            gsap.from(
                ".tally-form-wrapper",
                {
                    duration: 2,
                    ease: "power1.out",
                    width: 0,
                });
            })
        return () => ctx.revert();
    }, [])

    return (
        <div className="tally-form-wrapper">
            <TallyForm />
            <div className="back-to-main-btn" onClick={() => router.push("/")}>
                back to main
            </div>
        </div>
    )
}

export default ContactLandingPage