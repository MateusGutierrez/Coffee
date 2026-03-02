import { useGSAP } from "@gsap/react";
import { coffeeList, mockTailLists } from "../constants";
import gsap from "gsap";

const Coffees = () => {
useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
        scrollTrigger:{
            trigger: '#coffee',
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: true,
        }
    })
    parallaxTimeline
	 .from('#c-left-leaf', {
		x: -20,
	})
	 .from('#c-right-leaf', {
		x: 20,
	})
})
    return(
        <section id="coffee" className="noisy">
            <img src="/images/coffee-left.png" alt="coffee-left" className="left-leaf"  id="c-left-leaf"/>
            <img src="/images/coffee-right.png" alt="coffee-right" className="right-leaf" id="c-right-leaf"/>
            <div className="list">
                <div className="popular">
                    <h2>Most popular coffees:</h2>
                    <ul>
                        {coffeeList.map(({ name, origin, detail, price }) => (
                        <li key={name}>
                            <div className="md:me-28">
                            <h3>{name}</h3>
                            <p>{origin} | {detail}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="loved">
<h2>Most loved mocktails:</h2>
		 
		 <ul>
			{mockTailLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="me-28">
				 <h3>{name}</h3>
				 <p>{country} | {detail}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
                </div>
            </div>
        </section>
    )
}
export default Coffees;