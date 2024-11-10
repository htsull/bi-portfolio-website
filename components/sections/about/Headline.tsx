import CustomHeading from '@/components/customs/customHeading'
import Tags from '@/components/customs/tags'

const Headline = () => {
  return (
    <div className='container justify-center py-8 font-serif text-sm sm:text-base'>
      <CustomHeading>About me</CustomHeading>
      <p>
        I&apos;m a Data Analyst with over 6 years of experience in analyzing
        complex data sets, extracting and transforming data using{' '}
        <Tags>Python</Tags>, <Tags>SQL</Tags>, <Tags>PowerBI</Tags>, and{' '}
        <Tags>Excel</Tags>. I specialize in converting raw data into actionable
        insights to support informed decision-making. My expertise also includes
        relational database management, data modelling and visualization, and
        developing predictive models.
      </p>
    </div>
  )
}

export default Headline
