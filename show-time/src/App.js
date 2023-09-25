import './App.css';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Slider from './components/Slider';
import Cities from './components/Cities';
import Model from './components/Model';
import MenuBar from './components/MenuBar';
import RecommendedMovies from './components/RecommendedMovies';
import EventsNearYou from './components/EventsNearYou';
import LatestPlays from './components/LatestPlays';
import FunActivities from './components/FunActivities';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviesPage from './components/MoviesPage';
import EventsPage from './components/EventsPage';
import PlaysPage from './components/PlaysPage';
import ActivitiesPage from './components/ActivitiesPage';
import ParticularMovie from './components/ParticularMovie';
import ParticularEvent from './components/ParticularEvent';
import ParticularPlay from './components/ParticularPlay';
import ParticularActivity from './components/ParticularActivity';



function App() {
  const [city, setcity] = useState('none');
  const [modelvisible, setmodelvisible] = useState(false);
  const [cityvisible, setcityvisible] = useState(false);
  const [movies, setmovies] = useState([]);
  const [events, setevents] = useState([]);
  const [plays, setplays] = useState([]);
  const [activities, setactivities] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Header1 city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} />
        <Header2 />
        <Slider />
        {(modelvisible) ? <Model city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        {(cityvisible) ? <Cities city={city} settingcity={settingcity} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        <MenuBar />
        <RecommendedMovies movies={movies} />
        <EventsNearYou events={events} />
        <LatestPlays plays={plays} />
        <FunActivities activities={activities} />
        <Footer />
      </>,
    },
    {
      path: 'movies',
      element: <>
        <Header1 city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} />
        <Header2 />
        <Slider />
        {(modelvisible) ? <Model city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        {(cityvisible) ? <Cities city={city} settingcity={settingcity} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        <MenuBar />
        <MoviesPage movies={movies} city={city} />
        <Footer />
      </>
    },
    {
      path: 'events',
      element: <>
        <Header1 city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} />
        <Header2 />
        <Slider />
        {(modelvisible) ? <Model city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        {(cityvisible) ? <Cities city={city} settingcity={settingcity} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        <MenuBar />
        <EventsPage events={events} city={city} />
        <Footer />
      </>
    },
    {
      path: 'plays',
      element: <>
        <Header1 city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} />
        <Header2 />
        <Slider />
        {(modelvisible) ? <Model city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        {(cityvisible) ? <Cities city={city} settingcity={settingcity} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        <MenuBar />
        <PlaysPage plays={plays} city={city} />
        <Footer />
      </>
    },
    {
      path: 'activities',
      element: <>
        <Header1 city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} />
        <Header2 />
        <Slider />
        {(modelvisible) ? <Model city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        {(cityvisible) ? <Cities city={city} settingcity={settingcity} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        <MenuBar />
        <ActivitiesPage activities={activities} city={city} />
        <Footer />
      </>
    },
    {
      path: 'movies/:movieslug',
      element: <>
        <Header1 city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} />
        <Header2 />
        {(modelvisible) ? <Model city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        {(cityvisible) ? <Cities city={city} settingcity={settingcity} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        <MenuBar />
        <ParticularMovie movies={movies} />
        <Footer />
      </>
    },
    {
      path: 'events/:eventslug',
      element: <>
        <Header1 city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} />
        <Header2 />
        {(modelvisible) ? <Model city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        {(cityvisible) ? <Cities city={city} settingcity={settingcity} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        <MenuBar />
        <ParticularEvent events={events} />
        <Footer />
      </>
    },
    {
      path: 'plays/:playslug',
      element: <>
        <Header1 city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} />
        <Header2 />
        {(modelvisible) ? <Model city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        {(cityvisible) ? <Cities city={city} settingcity={settingcity} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        <MenuBar />
        <ParticularPlay plays={plays} />
        <Footer />
      </>
    },
    {
      path: 'activities/:activityslug',
      element: <>
        <Header1 city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} />
        <Header2 />
        {(modelvisible) ? <Model city={city} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        {(cityvisible) ? <Cities city={city} settingcity={settingcity} setmodelvisible={setmodelvisible} setcityvisible={setcityvisible} /> : ''}
        <MenuBar />
        <ParticularActivity activities={activities} />
        <Footer />
      </>
    }
  ]);

  async function moviesdata() {
    try {
      const result = await fetch('http://localhost:5000/api/movies');
      setmovies(await result.json());
    }
    catch (err) {
      console.log('Failed to load data');
    }
  }
  async function eventsdata() {
    try {
      const result = await fetch('http://localhost:5000/api/events');
      setevents(await result.json());
    }
    catch (err) {
      console.log('Failed to load data');
    }
  }
  async function playsdata() {
    try {
      const result = await fetch('http://localhost:5000/api/plays');
      setplays(await result.json());
    }
    catch (err) {
      console.log('Failed to load data');
    }
  }
  async function activitydata() {
    try {
      const result = await fetch('http://localhost:5000/api/activities');
      setactivities(await result.json());
    }
    catch (err) {
      console.log('Failed to load data');
    }
  }

  useEffect(() => {
    moviesdata();
    eventsdata();
    playsdata();
    activitydata();
  }, []);

  function settingcity(val) {
    setcity(val);
  }

  return (
    <RouterProvider router={router} />
  );
}

export default App;
