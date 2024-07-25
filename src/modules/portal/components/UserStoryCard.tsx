import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const UserStoryCard = ({ className }: { className?: string }) => {
	return (
		<div className={clsx(className, 'relative')}>
			{/* <Image alt='user story photo' /> */}
			<div className='font-inter'>
				<span>
					<strong className='text-[#0097A7] flex items-center gap-x-4'>
						<span>
							<div className='w-6 border-b-2 border-[#0097A7]' />
						</span>
						<span>Cerita Inspiratif Peserta Program Kami</span>
					</strong>
				</span>
				<p>
					“Mengandalkan kuliah saja, tidak cukup. Dengan Talentnesia, saya
					mantap tinggalkan dunia gaming lantas belajar dunia Animasi yang
					ternyata menyenangkan. Yang nomor satu, Talentnesia mengajarkan ilmu
					berorientasi kerja. Kini saya sangat terbantu dalam karir saya.”
				</p>
			</div>
		</div>
	);
};

export default UserStoryCard;
