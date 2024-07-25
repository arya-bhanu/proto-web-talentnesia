import React from 'react';
import HeroSection from './components/HeroSection';
import ProgramDimensionSection from './components/ProgramDimension';
import SuperiorClassSection from './components/SuperiorClass';
import UserStoryCard from '../components/UserStoryCard';
import PartnersCarousel from '../components/PartnersCarousel';
import NewsLetterSubscriptionCard from '../components/NewsLetterSubscriptionCard';
import NewsLetterSubscriptionSection from './components/NewsLetterSubscription/NewsLetterSubscription.view';
const LandingView = () => {
	return (
		<>
			<HeroSection />
			<div className='container'>
				<ProgramDimensionSection className='mt-24' />
				<SuperiorClassSection className='mt-24' />
				{/* <section>
					<UserStoryCard />
				</section> */}
				<section className='mt-24'>
					<PartnersCarousel />
				</section>
				<NewsLetterSubscriptionSection className='mt-24' />
			</div>
		</>
	);
};

export default LandingView;
