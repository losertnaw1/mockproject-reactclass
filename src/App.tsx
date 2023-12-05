import { useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import './App.css'
import Trending from './components/Trending'
import FilmCard from './components/FilmCard'

const baseUrl = 'http://localhost:3000';
let filmList;

function App() {

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/product`);

      return res.data;
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    filmList = fetchData();
  })

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
