/* eslint-disable no-unused-vars */
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import personImage from '../assets/hammad.jpg';

const ProfileSection = () => {
  // Animation for the profile section box
  const boxSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 800 },
  });

  return (
    <section className="py-16 bg-coolGray-800 text-white" id="profile">
      <div className="max-w-screen-lg mx-auto text-center mb-8">
        <h3 className="text-4xl md:text-5xl font-bold text-teal-500">Experienced Staff</h3>
      </div>
      <animated.div style={boxSpring} className="p-6 bg-gray-900 rounded-lg shadow-md max-w-lg mx-auto flex flex-col items-center text-center md:text-left">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4">
          <img src={personImage} alt="Person" className="object-cover w-full h-full" />
        </div>
        
        {/* Profile Information */}
        <h4 className="text-xl font-semibold text-teal-400 mb-2">Hammad Imran</h4>
        <p className="text-lg text-gray-300 mb-4">
          A passionate developer with over 5 years of experience in various companies.
        </p>
        <div className="space-y-2">
          <p className="text-sm text-gray-300">🔹 Previous Job: Senior Software Developer at XYZ Corp</p>
          <p className="text-sm text-gray-300">🔹 Worked on web and mobile applications, improving performance and user experience.</p>
          <p className="text-sm text-gray-300">🔹 Skilled in React, Node.js, and modern web technologies.</p>
        </div>
      </animated.div>
    </section>
  );
};

export default ProfileSection;