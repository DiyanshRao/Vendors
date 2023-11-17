import Card from './Card'
const Value = () => {
  return (
    <section className='sectionPadding bg-gray'>
      <div className='center flexCol'>
        <h1 className='Head my-2'>What We Offer</h1>
        <p className='Parah'>Explore the unique features of Vendors.</p>
      </div>
      <div className='flexWrap mt-10'>
        <Card />
      </div>
    </section>
  )
}
export default Value
