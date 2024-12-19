const Button = ({ label, iconURL }) => {
	return (
		<button className='flex items-center justify-center gap-2 px-7 py-4 border leading-none font-montserrat text-lg bg-coral-red rounded-full text-white border-coral-red active:scale-[0.98]'>
			{label}
			{iconURL && (
				<img
					src={iconURL}
					alt='arrow right icon'
					className='ml-2 w-5 h-5 rounded-full'
				/>
			)}
		</button>
	)
}

export default Button
