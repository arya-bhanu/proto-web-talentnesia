import React from 'react';
import HeroSection from './components/HeroSection';
import ProgramDimensionSection from './components/ProgramDimension';
import SuperiorClassSection from './components/SuperiorClassSection';
const LandingView = () => {
	return (
		<>
			<HeroSection />
			<div className='container'>
				<ProgramDimensionSection />
				<SuperiorClassSection />
			</div>
		</>
	);
};

export default LandingView;
