import photo from '../assets/ph.jpg'
import resume from '../assets/Gajjala_Thejovamsi_Resume.pdf'

export const Home = () => {
    return (

/* <div className="" 
style={{
       backgroundImage: `url(${ogsvg})`,
       backgroundSize:'20rem 20rem'
    }} > */
<div className="min-h-screen p-10 mt-5">
    <div className="flex items-center justify-center">

        <img className="drop-shadow-2xl w-40 h-40 rounded-full object-cover" src={photo} alt="profile photo"/>

    </div>
    <div className="mx-auto w-full p-5">
      <p className="mt-5 text-[20px]">Hi! I'm Thejovamsi</p>
    </div>
    <div className="">
      <h1 className="font-bold text-[50px]">FrontEnd Developer </h1>
      <p className=" font-bold  text-[50px]">based in New York</p>
      <p className="mx-auto  max-w-[700px] m-3 p-2 ">Frontend Developer who loves turning designs into fast, clean and responsive web experiences. Proficient in both React and vue.js.</p>
    </div>
    <div className="mt-5 p-5 flex justify-center items-center  gap-10">
       <button  className="transform duration-300 hover:scale-110 ease-in-out cursor-pointer w-35 text-white rounded-full bg-black p-2 m-2"> 
        Contact Me 
       </button>
       <button className="transform ease-in-out hover:scale-110 transition duration-300 cursor-pointer w-35 rounded-full bg-white border  p-2 m-2">
        <a href={resume} download className="">My Resume</a>
       </button>
    </div>

</div>





    );

}

export default Home
