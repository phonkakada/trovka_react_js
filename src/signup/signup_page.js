import React, { useState } from "react";
import Logo from '../images/Car.jpeg';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from "react-slideshow-image";
import { TypeAnimation } from "react-type-animation";
import FirstPage from "./signup_1";
import SecondPage from "./signup_2";

const SignUp = () => {

  document.title = "Sign up"
  const [Page, setPage] = useState(1);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Name, setName] = useState({
    first_name: FirstName,
    last_name: LastName
  })
  return (
    <>
      <div className="flex">
        <div className="hidden w-[70%] bg-blue-200 h-[100vh] items-center lg:block">
          <center>
            <div className="w-full h-[100vh]">
              <img className="max-w-full max-h-full h-[100vh] w-full m-auto object-cover" src={Logo}></img>
              <div className="mt-[-200px] text-white"> <TextAnima /></div>
            </div>
          </center>
        </div>
        <div className="h-full w-[100%] ml-10 mr-10 lg:w-[30%]">
          <center><div className="bg-blue-300 relative mt-5 w-[95px] pb-[95px] rounded-full overflow-auto lg:hidden">
            <div className=" absolute inset-0">
            <img className=" object-cover w-max-full h-max-full w-full h-full m-0" src="http://localhost:3000/static/media/Car.8d9aa121599634834c8d.jpeg"></img>
            </div>
            </div></center>
          <div className="mt-[10%]">
            {Page === 1 && <FirstPage setPage={setPage} setfirstName={setFirstName} setlastName={setLastName} last_name={LastName} first_name={FirstName} />}
            {Page === 2 && <SecondPage setPage={setPage} last_name={LastName} first_name={FirstName} />}
          </div>
        </div>

      </div>
      <div className="pb-20"></div>

    </>
  )
}

const TextAnima = () => {
  return (
    <TypeAnimation
      sequence={[
        'Find your dream',
        1000,
        'Good quality for you',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold', fontFamily: 'Gill Sans' }}
      repeat={Infinity}
    />
  );
}

const SlideImage = () => {

  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }

  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];


  return (
    <div className="slide-container">
      <Slide duration={500} prevArrow={false}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}


export default SignUp