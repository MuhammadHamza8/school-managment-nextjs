

export default function Home() {
  return (
   <div className="w-full  mt-4" style={{ 
    backgroundImage: `url('assets/images/2.png')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh' // Set the height according to your requirement
  }} >

   <div>
   <h1 className="pt-[300px] ml-[200px] text-7xl text-white ">MORDERN <br/> LEARNING 4.0</h1>
   <p className="ml-[200px] text-white text-lg">
   Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
libero aspernatur commodi dicta, provident temporibus. <br/>
Minus consectetur ab maxime porro.
   </p>
   </div>

   <div className="flex space-x-3 ml-[200px] py-4">

    <button className="w-[147px] h-[57px] bg-white">Try now </button>
    <button className="w-[147px] h-[57px] bg-yellow-500 ">Remind me</button>


   </div>




   </div>
  );
}
