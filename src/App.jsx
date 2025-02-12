import './App.css'

function App() {
  return (
    <>
      <header className="flex sm:flex-row flex-col items-center justify-between p-4 bg-gray-800 text-white">

          <div className="w-full mb-4 sm:mb-0">
            <img src="https://placehold.co/200x100" alt="Logo" className='w-full' />
          </div>

          <div className="flex flex-row w-full sm:w-auto items-center justify-between sm:ml-6">

            <div className="w-full  sm:w-auto">
              <input
                className="w-full p-2 rounded bg-gray-700 text-white"
                type="search"
                placeholder="Sök här"
              />
            </div>

            <div className="flex space-x-4 w-full sm:w-auto justify-center sm:justify-start mb-4 sm:mb-0">
              <div><a href="http://">Logga</a></div>
              <div><a href="http://">Logga</a></div>
            </div>


          </div>
</header>
    </>
  );
}

export default App;
