import Header from '@/modules/portal/components/Header';
import React, { ReactNode } from 'react';

const PortalLayout = ({ children }: { children: ReactNode }) => {
	return (
		<section>
			<Header />
			<main>{children}</main>
		</section>
	);
};

export default PortalLayout;
