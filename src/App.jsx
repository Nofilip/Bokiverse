import './App.css'
import Header from './components/header/header';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <>
      <Header />

      <NavBar />

      <section>
        <div className='p-4'><img src="https://placehold.co/400x300" alt="" /></div>
        <span></span>
      </section>
    </>
  );
}

export default App;
