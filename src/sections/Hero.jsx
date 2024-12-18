import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import { statistics } from '../constants'

const Hero = () => {
	return (
		<section
			id='home'
			className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
		>
			<div className='relative xl:w-2/5 flex justify-center items-start flex-col w-full max-xl:padding-x pt-28'>
				<p>Our summer collection</p>
				<h1>
					<span>The New Arrival</span>
					<br />
					<span>Nike</span>
					Shoes
				</h1>
				<p>
					Discover stylish Nike arrivals, quality comfort, and innovation for
					your active life.
				</p>
				<Button label='Show Now' iconURL={arrowRight} />

				<div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
					{statistics.map(stat => (
						<div key={stat.label}>
							<p>{stat.value}</p>
							<p>{stat.label}</p>
							{/* 1:28:37 */}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Hero
