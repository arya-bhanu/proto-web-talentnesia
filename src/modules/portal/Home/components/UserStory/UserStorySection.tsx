import UserStoryCard from '@/modules/portal/components/UserStoryCard';
import React from 'react';

const UserStorySection = ({ className }: { className?: string }) => {
	return (
		<section className={className}>
			<UserStoryCard />
		</section>
	);
};

export default UserStorySection;
