import React, { useState } from 'react'

const salaries = [
  { city: 'Paris', minValue: 45000, currency: '€' },
  { city: 'London', minValue: 50000, currency: '£' },
  { city: 'Berlin', minValue: 50000, currency: '€' },
  { city: 'any city', minValue: 40000, currency: '€' }
]

export default function Home(props) {
  const [city, setCity] = useState(salaries[0].city);

  function getSalary() {
    let salary = salaries.find(salary => salary.city === city)
    return `${Math.floor(salary.minValue/1000)}.000${salary.currency}`
  }
  function handleCityChange(e) {
    setCity(e.target.value)
  }
  return (
    <div>
      <h1 className="text-center my-5">Be prepared for your new Dev job!</h1>

      Dev++ is here to help you going to the next level as a web developer and find a job that fits you!
      <br /> <br />

      <h2 className="text-center my-5">Salary</h2>
      In <select value={city} onChange={handleCityChange}>
        {salaries.map(salary => 
          <option key={salary.city} value={salary.city}>
            {salary.city}
          </option>)}
        
      </select>
      , we guarantee you a salary of {getSalary()}!
      {/* 45k€ guarateed in Paris. London, Germany, others */}


      <h2 className="text-center my-5">Our Methodology</h2>

      <h3 className="mt-5">1. Selection</h3>
      <p>
        We have a quick talk and we give you a technical challenge to check your potential.
      </p>
      <p>
        If you fail, we give some tips to get better 💪
      </p>
      <p>
        If you succeed, you go to the next step 🚀
      </p>

      <h3 className="mt-5">2. Defining a Custom Program</h3>
      <p>
        We spend time with you to understand your wishes, your current knowledge and we define a custom plan for you. <br />
      </p>
      <p>
        Let's say you want to find a job as a front-end developer, but your CSS is average and you only know Angular.js. Then we will give you a program to improve your CSS and learn React.
      </p>

      <h3 className="mt-5">3. Learning and Coaching</h3>
      <p>
        You have to learn and practise with the help of the courses and exercises we give you. Your coach will spend up to 5 hours with you to help you and give feedback on your exercises.
      </p>

      <h3 className="mt-5">4. Job Hunting</h3>
      <p>
        We connect you with Europe's top tech companies based on your preferences. It could be fast growing startups, using Python and TypeScript, with ping pong tables and unicorns 🏓🦄  
      </p>

      <h2 className="text-center my-5">Price</h2>
      <p className="text-center">42€</p>




      {/* TODO: ask people to teachers */}
    </div>
  )
}
