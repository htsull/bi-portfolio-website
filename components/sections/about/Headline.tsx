import CustomHeading from '@/components/customs/customHeading'

const Headline = () => {
  return (
    <div className='container justify-center py-8 font-serif text-xs sm:text-base'>
      <CustomHeading>About me</CustomHeading>
      <p>
        I&apos;m a Data Analyst with over 6 years of experience in analyzing
        complex data sets, extracting and transforming data using{' '}
        <span className='text-custom-primary font-bold'>SQL</span>,{' '}
        <span className='text-custom-primary font-bold'>Power BI</span>, and{' '}
        <span className='text-custom-primary font-bold'>Excel</span>. I
        specialize in converting raw data into actionable insights to support
        informed decision-making. My expertise also includes relational database
        management, data modelling and visualization, and developing predictive
        models.
      </p>
    </div>
  )
}

export default Headline
