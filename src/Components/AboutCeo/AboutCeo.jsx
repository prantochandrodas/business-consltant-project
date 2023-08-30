import React from 'react';
import photo from '../../assets/Ajay Agarwal.jpg'
import './AboutCeo.css'
const AboutCeo = () => {
    return (
        <div id='sty'>
            <div className="circle image-wrap small">
              <img src={photo}  />
            </div>

        </div>
    );
};

export default AboutCeo;