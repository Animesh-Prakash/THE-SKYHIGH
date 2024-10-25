import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from './Logo.png'
import close from './close.svg'

const Slidebar = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false); // Control visibility state

  // Show the sidebar with a slide-in effect from the right
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Hide the sidebar with a slide-out effect to the right
    setTimeout(() => navigate(-1), 300); // Wait for animation to finish, then navigate back
  };

  return (
    <>
      <div
        className={`bg-black w-[100vw] h-[100vh] flex justify-center items-center fixed top-0 right-0 z-50 
        transform transition-transform duration-300 ease-out ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`} // Slide-in or slide-out based on isVisible (right-to-left)
      >
        <nav className='absolute top-0 flex justify-between w-full px-3 py-2'>
          <div className='w-[300px] '>
            <img src={Logo} alt="Logo" className='' />
          </div>
          <div>
            <img
              src={close}
              alt="Close"
              className='w-[60px] cursor-pointer'
              onClick={handleClose} // Close button triggers back navigation with animation
            />
          </div>
        </nav>
        <ul className='text-white list-disc'>
          <li className='cursor-pointer my-6 text-3xl'><Link to='/'>Home</Link></li>
          <li className='cursor-pointer my-6 text-3xl'><Link to='/classes'>Classes</Link></li>
          <li className='cursor-pointer my-6 text-3xl'><Link to='/book'>Book and Solution</Link></li>
          <li className='cursor-pointer my-6 text-3xl'><Link to='/cbse'>CBSE</Link></li>
          <li className='cursor-pointer my-6 text-3xl'><Link to='/neet'>JEE and NEET</Link></li>
          <li className='cursor-pointer my-6 text-3xl'><Link to='/hinduism'>HINDUISM BOOKS</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Slidebar;
