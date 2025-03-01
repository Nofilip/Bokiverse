
const HiddenSection = () => {
  return (
    <section className="p-4">
    <div className="hidden lg:grid lg:grid-cols-3 gap-4">
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww" alt="" className="w-full h-auto" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-red-500 text-white text-3xl font-bold p-2">
               REA BÖCKER %
            </div>
          </div>  
      </div>
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1494059980473-813e73ee784b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHV6emxlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-full h-auto" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-red-500 text-white text-3xl font-bold p-2">
                REA PUSSEL %
            </div>
          </div>  
      </div>
      <div className="relative">
        <img src="https://plus.unsplash.com/premium_photo-1718879381673-32a65784d27c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9hcmQlMjBnYW1lc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-full h-full" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-red-500 text-white text-3xl font-bold p-2">
                REA SPEL %
            </div>
          </div>  
      </div>
      
      
    </div>
  </section>
  )
}
export default HiddenSection;