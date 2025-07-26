const Navbar =() =>{
    return(
        <nav className="bg-black ">
            <div className="flex w-full mx-auto px-8 ">
                <div className="flex justify-bewtween items-center gap-50 h-16 ">
                    <div className="flex gap-40"> 
                        <h1 className="items-center-center mx-auto text-white text-2xl font-bold">My Portfolio</h1>
                        <div className="flex ml-20 justify-center gap-10 items-center">
                            <a className="text-white" href="#home">Home</a>
                            <a className="text-white" href="#work">Work</a>
                            <a className="text-white" href="#contact">Contact</a>
                        </div>
                    </div>
                    <div className="justify-center items-center w-full">
                            <button className=" mx-auto text-black p-2 h-10 bg-white transform hover:bg-green-600 cursor-pointer hover:scale-110 rounded-sm">
                               Login
                            </button>
                    </div>
                </div>
            </div>
        </nav>






























        // <nav className="bg-blue-500 border-gray-200">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //         <div className="flex justify-between h-16">
        //             <div className="flex">
        //                 <div className="flex-shrink-0">
        //                     <h1 className="text-2xl font-bold">My Portfolio</h1>
        //                 </div>
        //                 <div className="hidden md:block">
        //                     <div className="ml-10 flex items-baseline space-x-4">
        //                         <a href="#home" className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
        //                         <a href="#work" className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Work</a>
        //                         <a href="#contact" className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex items-center">
        //                 <div className="hidden md:block">
        //                     <button className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Login</button>
        //                 </div>
        //                 <div className="-mr-2 flex md:hidden">
        //                     <button className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
        //                         <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </nav>
    )
}

export default Navbar