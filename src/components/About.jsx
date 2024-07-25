import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';


const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>INTRODUCTION</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Akash Pandya, a 2023 graduate🎓 with a passion for Creating Front End websites and Games useing Unity.As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/akash-pandya-08857a213/' without rel="noreferrer" target='_blank'>Software developer</a> HTML, CSS, JavaScript, React JS, MySQL, and Unity🚀. My expertise lies in building responsive, user-friendly interfaces and creating engaging, interactive experiences.</p>
              <br />
              ✍️ Beyond the code, I enjoy sharing my knowledge and insights through engaging blogs📚. My articles delve into various aspects of software development, emerging technology trends, and practical coding tips. I aim to provide valuable information and inspire others in the tech community. <br />
              <p>⚽️ Outside of work, I’m passionate about football. It's more than just a sport for me—it's a way to stay active, relieve stress, and connect with others. Football teaches valuable lessons in teamwork, strategy, and perseverance, which I find applicable both on and off the field.</p> <br />
              <p>🌟 I believe in continuous learning and growth. I’m always eager to explore new technologies, tackle challenging projects, and contribute to innovative solutions. Let's connect and explore how we can collaborate to create something amazing!</p> <br />
              <p>Feel free to reach out to me on LinkedIn or via email at akash117pandya@gmail.com.</p> <br /> <br />
            
            <ButtonLink
              url='https://drive.google.com/drive/folders/1gXX8lMLN4cU-WSAoYycAzsHqypTTmctC?usp=drive_link'
              text='View Resume →'
              style={{ margin: '40px' }}
              padding={`p-3`}
              class="button-link"
           />
          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
