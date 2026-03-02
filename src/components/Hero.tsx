import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words'})
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines'})
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        });
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
            delay: 1
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        }).to('.right-leaf', { y: 200}, 0).to('.left-leaf', { y: -200}, 0).to(".arrow", { y: 100 }, 0);
        const startValue =  isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        })
        const video = videoRef.current;
        if (video) {
            video.onloadedmetadata = () => {
                tl.to(video, {
                    currentTime: video.duration
                })
            }
        }
    }, [])
    return (
        <>
        <section id="hero" className="noisy">
            <h1 className="title">Coffee</h1>
            <img src="/images/coffee-left.png" alt="coffee-left" className="left-leaf" />
            <img src="/images/coffee-right.png" alt="coffee-right" className="right-leaf" />
            <div className="body">
                {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">Sip the Spirit<br/>of Summer</p>
                    </div>
                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is a blend of premium ingredients - designed to delight your senses.
                        </p>
                        <a href="#cocktails">
                            View Cocktails
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className="video absolute inset-0 rounded-sm">
            <video src="/videos/output.mp4" muted playsInline preload="auto" ref={videoRef} className="rounded-sm"/>
        </div>
        </>
    )
}
export default Hero;