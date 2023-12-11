import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import './App.css'
import Trending from './components/Trending'
import FilmCard from './components/FilmCard'

const baseUrl = 'http://localhost:3000';
interface Product {
  source : string,
  name : string,
  location : string,
  yearBorn : number,
  categories : string
}

function App() {
  const [filmList, setFilmList] = useState<Product[]>([])

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/product`);

      console.log(res);
      

      setFilmList(res.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Trending />
      {filmList.map(film => {
        <FilmCard 
          source={film.source}
          name={film.name}
          location={film.location}
          yearBorn={film.yearBorn}
          categories={film.categories}
        />
      })}
    </>
  )
}

export default App
