import React from "react";
import '../Styles/aboutme.css';
import myEditPhoto from '../Elements/edited-photo.jpg';

const Aboutme = () => {
  return (
    <div className="aboutme">
      <div className="editphoto">
        <img src={myEditPhoto} alt="My edited" />
      </div>
      <div className="aboutDesc">
        <h1>About me</h1>
        <p>
          I am a Mechatronics engineer who is passionate about computer science and building robust software. I am a passionate and driven individual with a curious mind and a love for continuous learning. Throughout my life, I have embraced challenges and sought opportunities to grow both personally and professionally. As an avid problem solver, I enjoy exploring new technologies and using my creativity to develop innovative solutions. Outside of work, I cherish spending time with loved ones, pursuing hobbies, and engaging in community activities. I believe in making a positive impact on the world and aspire to leave a lasting legacy.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
