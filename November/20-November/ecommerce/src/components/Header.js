// // Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header(){
//   return (
//     <header>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact Us</Link>
//         <Link to="/login">Login</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;




