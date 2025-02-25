import { useState, useEffect } from "react";

function Hero () {

  const message = [
    "Utforska nya världar genom böcker!",
    "Stort urval av klassiker och nyheter!",
    "Böcker för alla smaker och åldrar!",
    "Fri frakt över 500 kr!"
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval (() => {
      setMessageIndex ((prevIndex) => (prevIndex + 1) % message.length)
    }, 5000);

    return () => clearInterval(interval);
  }, []);



  return (
    <section className='p-4 sm:flex bg-gray-200 text-center'>
    <div><img className="w-full" src="https://placehold.co/600x400" alt="" /></div>
    <div className="p-4 sm:w-1/2 flex flex-col justify-center items-center text-center">

    <h1 className="text-3xl font-bold">{message[messageIndex]}</h1>

      <div className="py-2 px-6 mt-4 font-bold bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
      <a href="/">Upptäck mer</a>
      </div>
    </div>
    
  </section>
  )
}
export default Hero;