import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import SocialMediaView from './SocialMedia.view';
import LogoCompany from '../../../../../public/logo-company.svg';

const FooterView = ({ className }: { className?: string }) => {
	return (
		<footer className={clsx(className, 'py-12')}>
			<div className='container'>
				<div>
					<Link href={'/'}>
						<LogoCompany />
					</Link>
					<SocialMediaView className='mt-7' />
          <p className='mt-4 font-inter text-[#999999] text-sm'>Copyright 2023 Talentnesia - All Right Reserved</p>
				</div>
				<div></div>
			</div>
		</footer>
	);
};

export default FooterView;
