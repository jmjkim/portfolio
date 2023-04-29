import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import linkedin from "../../../public/linkedin.svg";
import Image from "next/image";

const ContactLandingPage = () => {
	const router = useRouter();
	const tallyEmbedCode = `<iframe data-tally-src="https://tally.so/embed/w5bR2E?hideTitle=0&dynamicHeight=1" width="100%" height="400" frameborder="0" marginheight="0" marginwidth="0" title="Feedback & Question? "></iframe><script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>`;

	useEffect(() => {
		const ctx = gsap.context(() => {
			const linkedIn = document.getElementById("linkedin")

			let animation = gsap.to(
				linkedIn,
				{
					paused: true,
					rotate: 360,
					duration: 4,
					repeat: -1,
					ease: "linear",
				});

			gsap.from(
				".contact-page-wrapper",
				{
					delay: 1,
					duration: 1.5,
					ease: "power1.inOut",
					width: 0,
				});

			linkedIn?.addEventListener("mouseover", () => animation.play())
			linkedIn?.addEventListener("mouseleave", () => animation.reverse());
		});
		return () => ctx.revert()
	}, []);
		
	return (
		<div className="contact-page-wrapper">
			<div className='tally-form-wrapper'>
				<div dangerouslySetInnerHTML={{ __html: tallyEmbedCode }} />
				<div className="self-introduction-wrapper">
					<p>hi there, i am looking for a jr frontend developer position in bay area, ca.</p>
					<br />
					<a href="https://www.linkedin.com/in/jmjkim/" target="_blank">
						<Image id="linkedin" src={linkedin} alt="linkedin" width={80} height={80} />
					</a>
				</div>
			</div>
			<div className='back-to-main-btn' onClick={() => router.push("/")}>
				back to main
			</div>
		</div>
	);
};

export default ContactLandingPage;
