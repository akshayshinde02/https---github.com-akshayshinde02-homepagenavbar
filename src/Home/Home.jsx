import React from 'react'
import banglore from "../img/banglore2.jpg"
import './Home.css'
import homeimg from '../img/vacation_img.jpg'

const Home = () => {
  return (
    <>
    
    <div className='homebody'>
      <div className='homebody1'>
      <h2>Welcome To Rahi Tours And Tourisum</h2>
      <span> Make Your Trip Happy And JoyFul</span>
      </div>

      <div className='homebody2'>
      <img className='homeimg'  src={homeimg}/>
      </div>
    </div>
    
    </>
  )
}

function Card({ imgSrc, title, description }) {
    return (
      <article className="card col">
        <img className="card-img" src={imgSrc} alt="" height="65%" />
        <h4 align="center">{title}</h4>
        <p>{description}</p>
        <a href="signup.php" className="ctn">View Details</a>
      </article>
    );
  }

export default Home




{/* <div className="container">
    <h1 className="text">Choose Your Trip</h1>
    <h2>India</h2>
    <div className="row">
      <Card
        imgSrc={banglore}
        title="Banglore"
        description="Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India."
      />
      <Card
        imgSrc="img/delhi.jpg"
        title="Delhi"
        description="Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union territory the capital of India."
      />
      <Card
        imgSrc="img/nepal1.jpg"
        title="Nepal"
        description="Nepal officially the Federal Democratic Republic of Nepal is a landlocked country in South Asia."
      />
    </div>
    <br />
    <h2>Europe</h2>
    <div className="row">
      <Card
        imgSrc="img/usa1.jpg"
        title="USA"
        description="The United States of America, commonly known as the United States or America, is a country in North America."
      />
      <Card
        imgSrc="img/everest1.jpg"
        title="Everest"
        description="Everest base camp track is without a doubt, one of the most renowned travel destinations in the world."
      />
      <Card
        imgSrc="img/russia.jpg"
        title="Rassia"
        description="Russia or the Russian Federation, is a transcontinental country Eastern Europe.It is the largest country"
      />
    </div>
  </div> */}