import { useState } from 'react'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { shoes, statistics } from '../constants'

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
	return (
		<section
			id='home'
			className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
		>
			<div className='relative xl:w-2/5 flex justify-center items-start flex-col w-full max-xl:padding-x pt-28'>
				<p className='text-xl font-montserrat text-coral-red'>
					Our summer collection
				</p>
				<h1 className='mt-10 font-palanquin text-8xl max-sm:text-[58px] max-sm:leading-[72px] font-bold'>
					<span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
						The New Arrival
					</span>
					<br />
					<span className='text-coral-red mt-3 inline-block'>Nike</span> Shoes
				</h1>
				<p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-16 sm:max-w-sm'>
					Discover stylish Nike arrivals, quality comfort, and innovation for
					your active life.
				</p>
				<Button label='Show Now' iconURL={arrowRight} />

				<div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 max-sm:gap-10  max-sm:mt-10'>
					{statistics.map(stat => (
						<div key={stat.label}>
							<p className='text-4xl font-palanquin font-bold max-sm:text-[32px]'>
								{stat.value}
							</p>
							<p className='leading-7 font-montserrat text-slate-gray'>
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
			{/* Shoes */}
			<div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
				<img
					src={bigShoeImg}
					alt='shoe image'
					width={610}
					height={500}
					className='object-contain relative z-10'
				/>

				<div className='flex sm:gap-6 gap-4  absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
					{shoes.map(shoe => (
						<div key={shoe}>
							<ShoeCard
								imgURL={shoe}
								changeBigShoeImage={shoe => setBigShoeImg(shoe)}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Hero
