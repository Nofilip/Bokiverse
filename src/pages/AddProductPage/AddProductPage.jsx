import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddProductPage () {

  const [formData, setFormData] = useState({
    title: "",
    author:"",
    isbn: "",
    price: "",
    description: "",
    image: ""
  });

  const navigate = useNavigate(); 

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Misslyckades med att lägga till produkt");
      }

      alert("Produkten har lagts till!");
      navigate("/admin/products"); 

    } catch (error) {
      console.error("Fel:", error);
    }
  };



  return(
    <div className="min-h-screen">
      <h1 className="bg-zinc-950 text-white p-6 text-3xl">Administration</h1>
      <div>
          <div className="grid grid-cols-5 gap-4 min-h-screen">

            <h2 className="bg-gray-400 p-4 font-bold text-xl">Produkter</h2>
          
          <div className="col-span-4 p-6">
            <div className="flex justify-between pb-4">
              <h2 className="font-bold text-2xl">Ny produkt</h2>
              </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-6">
              <label className="block font-semibold mb-1" htmlFor="title">Titel</label>
                <input 
                className="border-2 border-gray-500 rounded w-1/4 p-2" 
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                 />
              </div>
              <div className="mt-6">
                <label className="block font-semibold mb-1" htmlFor="description">Beskrivning</label>
                <textarea 
                className="w-1/2 border-2 border-gray-500 rounded p-2" 
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}>

                </textarea>
              </div>
              <div className="mt-6">
                <label className="block font-semibold mb-1" htmlFor="image">Bild-URL</label>
                <input
                className="border-2 border-gray-500 rounded w-1/2 p-2"  
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <label className="block font-semibold mb-1" htmlFor="author">Författare</label>
                <input
                className="border-2 border-gray-500 rounded w-1/2 p-2"  
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <label className="block font-semibold mb-1" htmlFor="isbn">ISBN</label>
                <input
                className="border-2 border-gray-500 rounded p-2"
                type="text"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <label className="block font-semibold mb-1" htmlFor="price">Pris</label>
                <input
                className="border-2 border-gray-500 rounded p-2"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                />
              </div>
              <button
                type="submit" 
                className="mt-10 border px-6 py-2 rounded-lg font-semibold 
                           border-solid border-black shadow-lg hover:bg-gray-200 transition-all"
                           >
                Lägg till
              </button>
    
            </form>
            </div>
          </div>
      </div>
    </div>
  )
}
export default AddProductPage;