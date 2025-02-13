const NavBar = () => {
      return (
        <nav className='grid grid-cols-4 gap-4 md:flex md:gap-8 bg-slate-600 text-white font-bold p-4 w-auto'>

        <div className='hover:underline'>
          <a href="http://">Nyheter</a>
        </div>
        <div className='hover:underline'>
          <a href="http://">Böcker</a>
        </div>
        <div className='hover:underline'>
          <a href="http://">Pussel</a>
        </div>
        <div className='hover:underline'>
          <a href="http://">Ljudböcker</a>
        </div>
        <div className='hover:underline'>
          <a href="http://">Spel</a>
        </div>
        <div className='hover:underline'>
          <a href="http://">Rea</a>
        </div>
        <div className='hover:underline'>
          <a href="http://">Student</a>
        </div>
        <div className='hover:underline'>
          <a href="http://">Bästsäljare</a>
        </div>
      </nav>
      )

}

export default NavBar;