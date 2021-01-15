import gsap from "gsap";

// Hover on the link
export const handleHover = (e) => {
	gsap.to(e.target, {
		duration: 0.3,
		y: 3,
		skewX: 3,
		ease: "power1.inOut",
	});
};

// Hover off the link
export const handleHoverExit = (e) => {
	gsap.to(e.target, {
		duration: 0.3,
		y: -3,
		skewX: 0,
		ease: "power1.inOut",
	});
};
