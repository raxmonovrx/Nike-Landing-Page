import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../components/Button'

const SpecialOffer = () => {
	return (
		<section className='max-container flex items-center justify-wrap max-xl:flex-col-reverse gap-10'>
			<div className='flex-1'>
				<img
					src={offer}
					alt='Offer'
					width={773}
					height={678}
					className='object-contain w-full'
				/>
			</div>
			<div className='flex flex-1 flex-col'>
				<h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold max-sm:text-[38px]'>
					<span className='text-coral-red'> Special </span> Offer
				</h2>

				<p className='mt-4 lg:max-w-lg info-text'>
					Embark on a shopping journey that redefines your experience with
					unbeatable deals. From premier selections to incredible savings, we
					offer unparalleled value that sets us apart.
				</p>
				<p className='mt-6 info-text'>
					Navigate a realm of possibilities designed to fulfill your unique
					desires, surpassing the loftiest expectations. Your journey with us is
					nothing short of exceptional.
				</p>
				<div className='mt-11 flex flex-wrap gap-4'>
					<Button label='Shop now' iconURL={arrowRight} />
					<Button
						label='Learn more'
						backgroundColor='bg-white'
						borderColor='border-slate-gray'
						textColor='text-slate-gray'
					/>
				</div>
			</div>
		</section>
	)
}

export default SpecialOffer
