import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
 	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})
 
 return (
	<footer id="contact">
	 <img src="/images/footer-right-coffee.png" alt="leaf-right" id="f-right-leaf" className='w-160'/>
	 <img src="/images/footer-left-coffee.png" alt="leaf-left" id="f-left-leaf" className='w-160' />
	 
	 <div className="content">
		<h2>Where to Find Me</h2>
		
		<div>
		 <h3>Visit my Linkedin</h3>
		<p>
			<a href="https://www.linkedin.com/in/mateus-gutierrez-a991aa1b9/" target="_blank" rel="noopener noreferrer" className='text-yellow'>
				Mateus Gutierrez
			</a>
		</p>
		</div>
		<div className='flex items-center justify-center'>
			<img src="https://avatars.githubusercontent.com/u/118942632?v=4" alt="profile" className='max-w-60 rounded-full'/>
		</div>
		<div>
		 <h3>Contact</h3>
		 <p>mateusgutierrez9@gmail.com</p>
		</div>
		
		<div>
		 <h3>Socials</h3>
		 
		 <div className="flex-center gap-5">
			 <a
				href='https://www.linkedin.com/in/mateus-gutierrez-a991aa1b9/'
				target="_blank"
				rel="noopener noreferrer"
				aria-label='LinkedIn'
			 >
				<Linkedin/>
			 </a>
			  <a
				href='https://github.com/MateusGutierrez'
				target="_blank"
				rel="noopener noreferrer"
				aria-label='GitHub'
			 >
				<Github/>
			 </a>
		 </div>
		</div>
	 </div>
	</footer>
 )
}

export default Contact