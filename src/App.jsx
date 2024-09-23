import { useState } from 'react';
import { puppyList } from './data'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
      <h1>Puppy Pals!</h1>
      <menu>
        {puppies.map((puppy) => {
          return <li onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</li>
        })}
      </menu>
      {featPupId ? (
        <article>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </article>
      ) : <p className='empty-message'>Select a puppy above to view more details.</p>}
    </>
  )
}

export default App
