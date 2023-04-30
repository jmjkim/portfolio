import React, { useEffect } from "react";
import { gsap } from "gsap";
import linkedin from "../../../public/linkedin.svg";
import Image from "next/image";
import BackToMainBtn from "@/components/BackToMainBtn";

const ContactLandingPage = () => {
	const tallyEmbedCode = `<iframe data-tally-src="https://tally.so/embed/w5bR2E?alignLeft=1&hideTitle=1&dynamicHeight=1" loading="lazy" width="100%" height="353" frameborder="0" marginheight="0" marginwidth="0" title="null"></iframe><script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>`;

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
					width: "0%",
				});

			gsap.to(
				".contact-page-wrapper",
				{
					duration: 2,
					ease: "power3.out",
					width: "100%",
					opacity: "100%",
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
			</div>
			<div className="self-introduction-wrapper">
				<p>hi, my name is jack. i&apos;m looking for a junior frontend developer position in bay area, CA.</p>
				<br />
				<a href="https://www.linkedin.com/in/jmjkim/" target="_blank">
					<Image id="linkedin" src={linkedin} alt="linkedin" width={80} height={80} />
				</a>
			</div>
			<BackToMainBtn />
		</div>
	);
};

export default ContactLandingPage;
