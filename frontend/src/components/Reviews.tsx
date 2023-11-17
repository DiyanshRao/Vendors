import Card from './Card'
const Reviews = () => {
  return (
    <section className='sectionPadding bg-gray'>
      <div className='center flexCol'>
        <h1 className='Head my-2'>What Our Users Say</h1>
        <p className='Parah'>Hear from our satisfied users.</p>
      </div>
      <div className='flexWrap mt-10'>
        <Card />
      </div>
    </section>
  )
}
export default Reviews
