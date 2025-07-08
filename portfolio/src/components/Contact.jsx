// import {FontAwesomeIcon} from '@fontawesome'


const Contact = () =>
{
return(
  <div class="min-h-screen p-10 ">
    <div class="flex justify-evenly">
      <div class="">
          Phone
      </div>
      <form >
        <div className="m-5 flex gap-10 ">
            {/* <label className="block">Your Name</label> */}
              <input placeholder="Name" className="p-2  rounded-sm border-b-4 border" type="text"/>
              <input placeholder="Email" className="p-2  rounded-sm border-b-4 border" type="text"/>
        </div> 
        <div className="flex m-5">
          <input placeholder="Subject" className="p-2 w-full h-14  rounded-sm border-b-4 border" type="text"/>
        </div>
        <div className="flex m-5 ">
        <textarea placeholder="Message" className="p-2 w-full h-30  rounded-sm border-b-4 border resize-none overflow-y-auto" type="text"/>
        </div>

        <button class="flex m-5 border bg-black transform ease-in-out hover:scale-105 duration-300">
          <a href="" className="mx-auto w-30 text-white rounded-sm ">Submit</a>
        </button>
      </form>

    </div>
   
  </div>
);
}

export default Contact;