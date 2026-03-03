import { useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { sliderLists } from '../constants/index.js'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 type CarouselApi,
} from '@/components/ui/carousel'

const totalSlides = sliderLists.length;

const Menu = () => {
 const [api, setApi] = useState<CarouselApi>();
 const [currentIndex, setCurrentIndex] = useState(0);

 const nameRef = useRef<HTMLParagraphElement>(null);
 const detailsHeadingRef = useRef<HTMLHeadingElement>(null);
 const detailsParagraphRef = useRef<HTMLParagraphElement>(null);

 const animateDetailsIn = useCallback(() => {
	const tl = gsap.timeline();
	tl.fromTo(nameRef.current,
	 { opacity: 0, yPercent: 20 },
	 { opacity: 1, yPercent: 0, duration: 0.5, ease: 'power2.out' }
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
 }, []);

 useEffect(() => {
	if (!api) return;

	const onSelect = () => {
	 const newIndex = api.selectedScrollSnap();
	 setCurrentIndex(newIndex);
	 animateDetailsIn();
	};

	api.on('select', onSelect);
	return () => { api.off('select', onSelect); };
 }, [api, animateDetailsIn]);

 const goToSlide = useCallback((index: number) => {
	if (!api) return;
	const newIndex = (index + totalSlides) % totalSlides;
	api.scrollTo(newIndex);
 }, [api]);

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

	 <div className="content">
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

		<Carousel
		 setApi={setApi}
		 opts={{ loop: true, duration: 25 }}
		 className="cocktail"
		>
		 <CarouselContent>
			{sliderLists.map((cocktail) => (
			 <CarouselItem key={cocktail.id} className="flex-center">
				<img
				 src={cocktail.image}
				 alt={`${cocktail.name} — ${cocktail.title}`}
				 width={400}
				 height={600}
				 loading="lazy"
				 className="object-contain h-[60vh]"
				/>
			 </CarouselItem>
			))}
		 </CarouselContent>
		</Carousel>

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
