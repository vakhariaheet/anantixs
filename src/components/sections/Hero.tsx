import Container from '../ui/Container';

const Hero = () => {
	return (
		<section
			id='home'
			className='pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-50 to-gray-100'
		>
			<Container>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<div
						className='max-w-xl mx-auto lg:mx-0 text-center lg:text-left'
						data-aos='fade-right'
						data-aos-duration='1000'
					>
						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6'>
							<span className='block'>Where Precision</span>
							<span className='block'>
								Meets
								<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500'>
									{' '}
									Possibilities
								</span>
							</span>
						</h1>
						<p className='text-lg text-gray-600 mb-8'>
							Expert accounting solutions tailored to help your business thrive.
							We transform complex financial data into strategic insights.
						</p>
						<div className='flex flex-wrap gap-4 justify-center lg:justify-start'>
							<a
								href='#contact'
								className='bg-primary-600 flex items-center  text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors text-base font-medium'
							>
								Get Started
							</a>
							<a
								href='#about-us'
								className='border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-primary-500 px-6 py-3 text-lg'
							>
								Learn More
							</a>
						</div>
					</div>

					<div
						className='hidden lg:block'
						data-aos='fade-left'
						data-aos-duration='1000'
						data-aos-delay='300'
					>
						<img
							src='https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
							alt='Financial professional analyzing data'
							className='rounded-lg shadow-xl w-full h-auto object-cover'
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
