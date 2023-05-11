import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './Components/Pages/Coffee';
import Header from './Components/Shared/Header';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <Header />
      <h2 className="text-4xl text-center mb-5">Our Popular Products</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          coffees.map(coffee => <Coffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></Coffee>)
        }
      </div>
    </div>
  )
}

export default App
