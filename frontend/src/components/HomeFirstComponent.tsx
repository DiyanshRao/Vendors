const HomeFirstComponent = () => {
  return (
    <section className='flexRow bg sectionPadding'>
      <div className='flexCol w-50'>
        <p className='Head my-2'>Discover Amazing Places in Your City</p>
        <p className='Parah my-2'>
          Join Vendors, a platform where you can explore, shop, blog, and chat
          all in one place.
        </p>
        <a className='firstA my-2'>Get Started</a>
        <p className='secondParah my-2'>
          Integrated with Google Maps API for a seamless experience.
        </p>
      </div>
      <div className='rounded'>
        <img
          className='rounded'
          src='/photo.jpg'
          alt='Logo img'
          height={350}
          width={500}
        />
      </div>
    </section>
  )
}
export default HomeFirstComponent
