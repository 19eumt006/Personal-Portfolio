// import React from "react";
// import myphoto from "../Elements/my-passport-photo (1).jpg";
// import '../Styles/home.css';

// const Home = () => {
//   return (
//     <div className="home">
//       <div id="home" className="homeAbout">
//         <p>Hello! Iam Ajay!</p>
//         <h1>I create SOFTWARES!</h1>
//         <p>Iam a trained Appian Developer</p>
//         <button>Get In touch</button>
//       </div>
//       <div className="myphoto">
//         <img src={myphoto}></img>
//       </div>
//     </div>
//   );
// };
// export default Home;

import React from "react";
import myphoto from "../Elements/my-passport-photo (1).jpg";
import '../Styles/home.css';

const Home = () => {
  const handleGetInTouch = () => {
    alert("Thank you for getting in touch!");
  };

  return (
    <div className="home">
      <div id="home" className="homeAbout">
        <p>Hello! I am Ajay!</p>
        <h1>I create SOFTWARES!</h1>
        <p>I am a trained Appian Developer</p>
        <button onClick={handleGetInTouch}>Get In touch</button>
      </div>
      <div className="myphoto">
        <img src={myphoto} alt="Ajay's passport"></img>
      </div>
    </div>
  );
};

export default Home;

