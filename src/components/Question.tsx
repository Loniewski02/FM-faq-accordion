import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
	item: {
		question: string;
		answer: string;
	};
};

const Question: React.FC<Props> = ({ item }) => {
	const [isShown, setIsShown] = useState(false);

	return (
		<div className='py-6 last:pb-0 first:pt-0 border-y border-LightPink last:border-b-0 first:border-t-0 '>
			<button
				onClick={() => {
					setIsShown((prevState) => !prevState);
				}}
				className='group w-full font-bold text-base lg:text-lg border-none text-left flex items-center  justify-between '>
				<span className=' text-DarkPurple group-hover:text-Pink block max-w-[225px] w-full lg:max-w-[460px]'>
					{item.question}
				</span>
				<span className={`block relative w-6 h-6 bg-Pink rounded-full ${isShown && 'bg-DarkPurple'} transition-colors`}>
					<span className='absolute x-center top-2/4 left-2/4 w-3 h-[2px] bg-White rounded-sm' />
					<AnimatePresence>
						{!isShown && (
							<motion.span
								initial={{ height: 0 }}
								animate={{ height: '12px' }}
								exit={{ height: 0 }}
								className='absolute x-center top-2/4 left-2/4 w-[2px]  bg-White rounded-sm'
							/>
						)}
					</AnimatePresence>
				</span>
			</button>

			<AnimatePresence>
				{isShown && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className='overflow-hidden'>
						<p className='text-GrayishPurple text-sm pt-6 lg:text-base'>{item.answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Question;
