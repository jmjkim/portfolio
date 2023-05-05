// @ts-nocheck

import React, { useEffect } from "react";
import { gsap } from "gsap";
import linkedin from "../../../public/linkedin.svg";
import Image from "next/image";
import BackToMainBtn from "@/components/BackToMainBtn";

const ContactLandingPage = () => {
	useEffect(() => {
		var d = document,
			w = "https://tally.so/widgets/embed.js",
			v = function () {
				"undefined" != typeof Tally
					? Tally.loadEmbeds()
					: d
							.querySelectorAll("iframe[data-tally-src]:not([src])")
							.forEach(function (e) {
								e.src = e.dataset.tallySrc;
							});
			};

		if ("undefined" != typeof Tally) v();

		else if (d.querySelector('script[src="' + w + '"]') == null) {
			var s = d.createElement("script");
			(s.src = w), (s.onload = v), (s.onerror = v), d.body.appendChild(s);
		}

		const ctx = gsap.context(() => {
			let t1 = gsap.timeline({ repeat: -1 })

			gsap.to(".contact-page-revealer", {
				display: "none",
				top: "100%",
				duration: 1,
				ease: "power3.inOut",
			})

			gsap.from(".contact-page-wrapper", {
				duration: 1.5,
				filter: "blur(20px)",
				ease: "power3.inOut",
			});

			t1.fromTo(".contact-page-wrapper", {
				duration: 3,
				backgroundImage: "linear-gradient(to right bottom, #000, 100%, #FFF)",
			},
			{
				duration: 3,
				backgroundImage: "linear-gradient(to left bottom, #FFF, 0%, #000)",
			})

			t1.fromTo(".contact-page-wrapper", {
				duration: 3,
				backgroundImage: "linear-gradient(to left top, #000, 100%, #FFF)",
			},
			{
				duration: 3,
				backgroundImage: "linear-gradient(to right top, #FFF, 0%, #000)",
			})

			gsap.to(".self-introduction-wrapper a img", {
				rotate: 360,
				duration: 2,
				repeat: -1,
				ease: "linear",
			});

			t1.repeatDelay(.5);
		});

		return () => ctx.revert();
	}, []);

	return (
		<>
			<div className="contact-page-revealer"></div>
			<div className='contact-page-wrapper'>
				<div className="contact-page-subwrapper">
					<div className='self-introduction-wrapper'>
						<p>
							hi, my name is jack. i&apos;m looking for a junior frontend developer
							position in bay area, CA.
						</p>
						<br />
						<a
							href='https://www.linkedin.com/in/jmjkim/'
							target='_blank'
						>
							<Image
								src={linkedin}
								alt='linkedin'
								width={200}
								height={200}
							/>
						</a>
					</div>
					<div className='tally-form-wrapper'>
						<iframe
							width='100%'
							height='353'
							frameborder='0'
							marginheight='0'
							marginwidth='0'
							title='null'
							src='https://tally.so/embed/w5bR2E?alignLeft=1&hideTitle=1&dynamicHeight=1'
						></iframe>
					</div>
				</div>
				<BackToMainBtn />
			</div>
		</>
	);
};

export default ContactLandingPage;
