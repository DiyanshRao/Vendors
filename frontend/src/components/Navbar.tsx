import './styles.css'
const Navbar = () => {
  return (
    <div className='nav'>
      <div>
        <span className='nav-text'>Vendors || Exploring your city </span>
      </div>
      <div className='flexing '>
        <a href='/' className='nav-text2'>
          Home
        </a>
        <a href='/explore' className='nav-text2'>
          Explore
        </a>
        <a href='/map' className='nav-text2'>
          Map
        </a>
      </div>
    </div>
  )
}
export default Navbar
