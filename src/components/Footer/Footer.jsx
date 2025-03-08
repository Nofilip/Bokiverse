import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faFaceSmileBeam, } from "@fortawesome/free-regular-svg-icons";
import { faEarthAmerica, faJetFighter, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


  const Footer = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleSection = (index) => {
      setOpenIndex(openIndex === index ? null : index);

    };



  return (
    <>
      <section className="grid gap-4 mx-6 font-bold sm:grid-cols-2 lg:grid-cols-4 sm:my-8">
        <div className="p-2 gap-4 flex items-center lg:justify-center lg:text-center">
            <span className="text-3xl"><FontAwesomeIcon icon={faEarthAmerica} /></span>
            <span>Gratis frakt & returer</span>
        </div>
        <div className="p-2 gap-4 flex items-center lg:justify-center lg:text-center">
            <span className="text-3xl"><FontAwesomeIcon icon={faJetFighter} /></span>
            <span>Expressfrakt</span>
        </div>
        <div className="p-2 gap-4 flex items-center lg:justify-center lg:text-center">
            <span className="text-3xl"><FontAwesomeIcon icon={faShieldHalved} /></span>
            <span>Säkra betalningar</span>
        </div>
        <div className="p-2 gap-4 flex items-center lg:justify-center lg:text-center">
            <span className="text-3xl"><FontAwesomeIcon icon={faFaceSmileBeam} /></span>
            <span>Nyheter varje dag</span>
        </div>
      </section>

        <section>
        <div className="w-full mx-auto mt-4 sm:hidden">
        {["Om oss", "Kontakt", "Mina sidor",].map((title, index) => (
          <div key={index} className="border-b border-gray-200">
            <button 
              className="w-full text-left py-2 px-4 flex justify-between items-center bg-gray-300 hover:bg-gray-200"
              onClick={() => toggleSection(index)}
            >
              {title}
              <span className={`text-lg transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 bg-gray-400">
                  <ul className="list-disc pl-5">
                  {title === "Om oss" && (
                    <>
                      <li><a href="#">Vår historia</a></li>
                      <li><a href="#">Vår vision</a></li>
                      <li><a href="#">Teamet</a></li>
                    </>
                  )}
                  {title === "Kontakt" && (
                    <>
                      <li><a href="#">Kundtjänst</a></li>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">Hitta oss</a></li>
                    </>
                  )}
                  {title === "Mina sidor" && (
                    <>
                      <li><a href="#">Orderhistorik</a></li>
                      <li><a href="#">Inställningar</a></li>
                      <li><a href="#">Logga ut</a></li>
                    </>
                  )}
                </ul> 
              </div>
            </div>
          </div>
        ))}
          </div>
              <div className="hidden sm:grid grid-cols-3 bg-gray-300 p-4 rounded-lg">
                <div className="grid">
                    <h1 className="font-bold mb-2">Om oss</h1>
                    <span>Vår historia</span>
                    <span>Vår vision</span>
                    <span>Teamet</span>
                </div>
                <div className="grid">
                    <h1 className="font-bold mb-2">Kontakt</h1>
                    <span>Kundtjänst</span>
                    <span>Support</span>
                    <span>Hitta oss</span>
                </div>
                <div className="grid">
                    <h1 className="font-bold mb-2">Mina sidor</h1>
                    <span>Orderhistorik</span>
                    <span>Inställningar</span>
                    <span>Logga ut</span>
                </div>
              </div>


        </section>


      <div className="flex justify-center items-center p-4 gap-2">
          <span><FontAwesomeIcon icon={faCopyright} /></span>
          <span className="text-sm">2025 Bokiverse - Alla rättigheter reserverade</span>
      </div>

    </>
  )
}

export default Footer;