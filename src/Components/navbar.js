// import React from "react";
// import '../Styles/navbar.css';

// const Navbar=()=> {
//     return (
//         <div className="navbarContainer">
//             <nav>
//                 <div className="logo">
//                     <h1>AJAY'S PORTFOLIO</h1>
//                 </div>
//                 <div className="items">
//                     <ul>
//                         <li><a href='#home'>Home</a></li>
//                         <li><a href='#skills'>Skills</a></li>
//                         <li><a href='#about'>About</a></li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     )
// }
// export default Navbar;
import React from "react";
import '../Styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <nav>
        {/* Logo */}
        <div className="logo">
          <h1>AJAY'S PORTFOLIO</h1>
        </div>
        {/* Navigation items */}
        <div className="items">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
