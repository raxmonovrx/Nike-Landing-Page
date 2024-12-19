const ServiceCard = ({ imgURL, label, subtext }) => {
	return (
		<div className='flex-1  sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]  py-16  px-10 shadow-3xl'>
			<div className='w-11 h-11 bg-coral-red flex justify-center items-center rounded-full'>
				<img src={imgURL} alt={label} width={24} height={24} />
			</div>
			<h3 className='mt-5 text-3xl font-bold font-palanquin leading-normal'>
				{label}
			</h3>
			<p className='mt-3 break-words font-montserrat text-lg text-slate-gray leading-normal'>{subtext}</p>
		</div>
	)
}

export default ServiceCard
