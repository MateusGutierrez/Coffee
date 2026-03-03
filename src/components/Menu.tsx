import { useCallback, useRef, useState } from 'react'
import gsap from 'gsap';
import { sliderLists } from '../constants/index.js';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const totalSlides = sliderLists.length;

const Menu = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const isAnimating = useRef(false);

 const imageRef = useRef<HTMLImageElement>(null);
 const detailsHeadingRef = useRef<HTMLHeadingElement>(null);
 const detailsParagraphRef = useRef<HTMLParagraphElement>(null);
 const nameRef = useRef<HTMLParagraphElement>(null);

 const animateIn = useCallback(() => {
	const tl = gsap.timeline({
	 onComplete: () => { isAnimating.current = false; }
	});

	tl.fromTo(imageRef.current,
	 { opacity: 0, xPercent: -30 },
	 { opacity: 1, xPercent: 0, duration: 0.6, ease: 'power2.out' }
	);
	tl.fromTo(nameRef.current,
	 { opacity: 0 },
	 { opacity: 1, duration: 0.5 },
	 '<0.1'
	);
	tl.fromTo(detailsHeadingRef.current,
	 { yPercent: 40, opacity: 0 },
	 { yPercent: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
	 '<0.1'
	);
	tl.fromTo(detailsParagraphRef.current,
	 { yPercent: 40, opacity: 0 },
	 { yPercent: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
	 '<0.15'
	);

	return tl;
 }, []);

 const goToSlide = useCallback((index: number) => {
	if (isAnimating.current) return;

	const newIndex = (index + totalSlides) % totalSlides;
	if (newIndex === currentIndex) return;

	isAnimating.current = true;

	const tl = gsap.timeline();

	tl.to(imageRef.current, {
	 opacity: 0, xPercent: 30, duration: 0.3, ease: 'power2.in'
	});
	tl.to([nameRef.current, detailsHeadingRef.current, detailsParagraphRef.current], {
	 opacity: 0, yPercent: -20, duration: 0.25, ease: 'power2.in'
	}, '<');

	tl.call(() => {
	 setCurrentIndex(newIndex);
	 requestAnimationFrame(() => {
		animateIn();
	 });
	});
 }, [currentIndex, animateIn]);

 const getCocktailAt = (indexOffset: number) => {
	return sliderLists[(currentIndex + indexOffset + totalSlides) % totalSlides];
 }

 const currentCocktail = getCocktailAt(0);
 const prevCocktail = getCocktailAt(-1);
 const nextCocktail = getCocktailAt(1);

 return (
	<section id="menu" aria-labelledby="menu-heading" role="region">
	 <h2 id="menu-heading" className="sr-only">
		Coffee Menu
	 </h2>

	 <nav className="cocktail-tabs" aria-label="Menu navigation">
		{sliderLists.map((cocktail, index) => {
		 const isActive = index === currentIndex;

		 return (
			<button
			 key={cocktail.id}
			 className={isActive
				? 'text-white border-white'
				: 'text-white/50 border-white/50'}
			 onClick={() => goToSlide(index)}
			 aria-current={isActive ? 'true' : undefined}
			 aria-label={`View ${cocktail.name}`}
			>
			 {cocktail.name}
			</button>
		 )
		})}
	 </nav>

	 <div className="content" role="group" aria-roledescription="carousel" aria-label="Coffee drinks">
		<div className="arrows">
		 <button
			className="text-left"
			onClick={() => goToSlide(currentIndex - 1)}
			aria-label={`Previous: ${prevCocktail.name}`}
		 >
			<span>{prevCocktail.name}</span>
			<ArrowLeft aria-hidden="true" />
		 </button>

		 <button
			className="text-left"
			onClick={() => goToSlide(currentIndex + 1)}
			aria-label={`Next: ${nextCocktail.name}`}
		 >
			<span>{nextCocktail.name}</span>
			<ArrowRight aria-hidden="true" />
		 </button>
		</div>

		<div className="cocktail" role="group" aria-roledescription="slide" aria-label={`${currentIndex + 1} of ${totalSlides}`}>
		 <img
			ref={imageRef}
			src={currentCocktail.image}
			alt={`${currentCocktail.name} — ${currentCocktail.title}`}
			width={400}
			height={600}
			loading="lazy"
			className="object-contain"
		 />
		</div>

		<div className="recipe">
		 <div className="info">
			<p>Recipe for:</p>
			<p ref={nameRef} id="title">{currentCocktail.name}</p>
		 </div>

		 <div className="details">
			<h3 ref={detailsHeadingRef}>{currentCocktail.title}</h3>
			<p ref={detailsParagraphRef}>{currentCocktail.description}</p>
		 </div>
		</div>
	 </div>
	</section>
 )
}
export default Menu
