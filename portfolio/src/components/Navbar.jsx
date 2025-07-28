const Navbar =() =>{
    return(
        <nav className="sticky top-0 z-50 bg-white rounded-full shadow-md mx-8 mt-3 border-gray-200 border-1">
            <div className="grid grid-cols-3 gap-10 p-2">
                <div className="flex items-center">
                    <h1 className="text-black text-md font-bold">My Portfolio</h1>
                </div>
                <div className="flex justify-center items-center">
                    <a className="text-black mx-4" href="#home">Home</a>
                    <a className="text-black mx-4" href="#work">Work</a>
                    <a className="text-black mx-4" href="#contact">Contact</a>
                </div>
                <div className="flex justify-end items-center">
                    <div className="flex text-black rounded-2xl p-1 cursor-pointer items-center">
                        <h1 className="text-black">Login</h1>
                    </div>
                    <button className="flex items-center justify-center rounded-2xl p-1 w-20 bg-black transform hover:bg-gray-800 cursor-pointer ml-2">
                        <h1 className="text-white">Sign Up</h1>
                    </button>
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