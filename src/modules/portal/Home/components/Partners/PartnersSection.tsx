import React from 'react';
import PartnersCarousel from '@/modules/portal/components/PartnersCarousel';
const PartnersSection = ({ className }: { className?: string }) => {
	return (
		<div className={className}>
			<PartnersCarousel />
		</div>
	);
};

export default PartnersSection;
