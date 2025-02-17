import './App.css'
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';





function App() {
  return (
    <>
      <Header />
   
      <NavBar />

      <section className='p-4'>
        <div><img src="https://placehold.co/400x300" alt="" /></div>
        <div>
        <span className='bg-'>Årets största bokrea har börjat!</span>
        <a href="/">Shopa Nu</a>
        </div>
        
      </section>
    </>
  );
}

export default App;
