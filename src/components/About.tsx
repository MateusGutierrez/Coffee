import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import abt1 from '/images/abt1.jpg';
import abt2 from '/images/abt2.jpg';
import abt3 from '/images/abt3.jpg';
import abt4 from '/images/abt4.jpg';
import abt5 from '/images/abt5.jpeg';

const About = () => {
     useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#about',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })
    return (
<div id="about">
	 <div className="mb-16 md:px-0 px-5">
		<div className="content">
		 <div className="md:col-span-8">
			<p className="badge">Premium Coffees</p>
			<h2>
			 Where every detail matters <span className="text-white">-</span>
				from bean to cup
			</h2>
		 </div>

		 <div className="sub-content">
			<p>
			 Every cup we serve is a reflection of our obsession with detail — from the first roast to the final pour. That care is what turns a simple coffee into something truly memorable.
			</p>
			
			<div>
			 <p className="md:text-3xl text-xl font-bold">
				<span>4.5</span>/5
			 </p>
			 <p className="text-sm text-white-100">
				More than +12000 customers
			 </p>
			</div>
		 </div>
		</div>
	 </div>
	 
	 <div className="top-grid">
		<div className="md:col-span-3">
		 {/* <div  className="noisy" /> */}
		 <img src={abt1} alt="grid-img-1" />
		</div>
		
		<div className="md:col-span-6">
		 {/* <div  className="noisy" /> */}
		 <img src={abt2} alt="grid-img-2" />
		</div>
		
		<div className="md:col-span-3">
		 {/* <div  className="noisy" /> */}
		 <img src={abt5} alt="grid-img-5" />
		</div>
	 </div>
	 
	 <div className="bottom-grid">
		<div className="md:col-span-8">
		 {/* <div  className="noisy" /> */}
		 <img src={abt3} alt="grid-img-3" />
		</div>
		
		<div className="md:col-span-4">
		 {/* <div  className="noisy" /> */}
		 <img src={abt4} alt="grid-img-4" />
		</div>
	 </div>
	 
	</div>
    )
}
export default About;