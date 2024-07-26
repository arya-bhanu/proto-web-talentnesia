import React from 'react';
import HeroSection from './components/HeroSection';
import ProgramDimensionSection from './components/ProgramDimension';
import SuperiorClassSection from './components/SuperiorClass';
import NewsLetterSubscriptionSection from './components/NewsLetterSubscription/NewsLetterSubscription.view';
import PartnersSection from './components/Partners';
import UserStorySection from './components/UserStory';
const LandingView = () => {
	return (
		<>
			<HeroSection />
			<main className='container'>
				<ProgramDimensionSection className='mt-24' />
				<SuperiorClassSection className='mt-24' />
				<UserStorySection className='mt-48' />
				<PartnersSection className='mt-28' />
				<NewsLetterSubscriptionSection className='mt-36' />
			</main>
		</>
	);
};

export default LandingView;
