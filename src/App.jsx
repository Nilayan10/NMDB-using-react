import './css/App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

// function App() {
//   return (
//     <> {/*fragment - empty html tag. This is used to solve the problem with using multiple html divs or other tags. This acts as a parent tag*/}
//       <Text displayValue={"Hello!!!"}/>
//       <Text displayValue={"How are you doing?"}> {/*This is how a component is used in React*/}</Text>{/* Another method of closing tag instead of inline tag */}
//     </>
//   )
// }

// function Text({displayValue}) {
//   return (
//     <div>
//       <p>{displayValue}</p>
//     </div>
//   )
// } {/*This is a component. This can be used inside other functions or components*/} {/*displayValue is a prop (short for Property). This prop could be used for dynamic rendering.*/}

function App() {
  /*const movieNumber = 1;
  return (
    <>
      {(movieNumber === 1) ? (<MovieCard movie={{ title: "Baby John", release_date: "2024" }} />) :
        (<MovieCard movie={{ title: "Sikandar", release_date: "2025" }} />)}
    </>
  );*/
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
