import Star from './assets/icon-star.svg?react';
import Question from './components/Question';

const DUMMY_DATA = [
	{
		id: 1,
		question: 'What is Frontend Mentor, and how will it help me?',
		answer:
			"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
	},
	{
		id: 2,
		question: 'Is Frontend Mentor free?',
		answer:
			' Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
	},
	{
		id: 3,
		question: 'Can I use Frontend Mentor projects in my portfolio?',
		answer:
			"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
	},
	{
		id: 4,
		question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
		answer:
			"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
	},
];

const App: React.FC = () => {
	return (
		<>
			<section className='opacity-0 lg:p-10 p-6 bg-White rounded-lg w-full max-w-[327px] lg:max-w-[600px] lg:rounded-2xl overflow-hidden animate-show'>
				<h1 className='flex items-center gap-6 text-[32px] text-DarkPurple lg:text-[56px] font-bold mb-6 lg:mb-8 '>
					<Star className='h-6 w-6 lg:h-10 lg:w-10' />
					FAQs
				</h1>
				<div>
					{DUMMY_DATA.map((item) => (
						<Question
							key={item.id}
							item={item}
						/>
					))}
				</div>
			</section>
			<div className='fixed top-0 left-0 right-0 bottom-0 bg-DarkPurple animate-slide' />
		</>
	);
};

export default App;
