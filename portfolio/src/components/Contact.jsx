// import {FontAwesomeIcon} from '@fontawesome'
import iii from '../assets/iii.png';
const Contact = () =>
{
return(
  <div class="min-h-screen p-10">
    <h1 className="text-[45px] text-bold mb-5">Get in Touch</h1>
    <div class="bg-gray-100 p-5 rounded-lg shadow-lg">
      <div class=" flex justify-center items-center gap-20">
        <div class="hidden md:flex flex-col gap-5">
          <div class="rounded-sm border-2 border-gray-300 p-5">
            <i class="fa-solid fa-phone hover:text-blue-500 transform hover:scale-110 cursor-pointer"></i>
            <h1 class="text-sm ">+1 2014238100</h1>
      </div>

      <div class="rounded-sm border-2 border-gray-300 p-5">
          <i class="fa-solid fa-envelope hover:text-blue-500 transform hover:scale-110 cursor-pointer"></i>
          <h1 class="text-sm ">thejovamsigajjala@gmail.com</h1>  
      </div>
      </div>
      <form className="w-full md:w-2/3">
        <div className="m-5 flex gap-5">
            {/* <label className="block">Your Name</label> */}
              <input placeholder="Name" className="w-full p-2 rounded-sm bg-white" type="text"/>
              <input placeholder="Email" className="w-full p-2 rounded-sm bg-white" type="text"/>
        </div> 
        <div className="flex m-5">
          <input placeholder="Subject" className="w-full p-2 h-14 rounded-sm bg-white" type="text"/>
        </div>
        <div className="flex m-5 ">
        <textarea placeholder="Message" className="p-2 w-full h-30 rounded-sm bg-white resize-none overflow-y-auto" type="text"/>
        </div>

        <button class="rounded-sm h-7 my-auto shadow-lg flex items-center justify-center m-5 bg-black transform ease-in-out hover:bg-green-700 hover:text-gray-600  hover:scale-105 duration-300">
          <a href="" className="mx-auto w-30 text-white ">Submit</a>
        </button>
      </form>

    </div>
    <div className="flex gap-5 p-10 justify-center items-center">
        <i className="fa-github fa-brands fa-2xl hover:text-blue-500 transform hover:scale-110 duration-300 cursor-pointer m-2"></i>
        <i className="fa-linkedin fa-brands fa-2xl hover:text-blue-500 transform hover:scale-110 duration-300 cursor-pointer m-2"></i>
        <i className="fa-twitter fa-brands fa-2xl hover:text-blue-500 transform hover:scale-110 duration-300 cursor-pointer m-2"></i>
        <i className="fa-instagram fa-brands fa-2xl hover:text-blue-500 transform hover:scale-110 duration-300 cursor-pointer m-2"></i>

      </div>
   </div>
  </div>
);
}

export default Contact;