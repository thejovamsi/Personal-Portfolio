const Work =() => {
    return(
        <div className="flex gap-10">
            <div className="rounded-md bg-blue-100 ml-10 p-5 w-[400px]">
                <h1 className=" text-left">Frontend Developer</h1>
                <p className="text-gray-400 text-left">CHARITY QUEST</p>
                <ul className="text-left list-disc list-inside">
                    <li>Developed user-friendly web applications</li>
                    <li>Collaborated with designers to implement UI/UX improvements</li>
                    <li>Optimized applications for maximum speed and scalability</li>
                </ul>
            </div>
            <div className="relative ml-10 w-2 h-[400px] bg-black">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10  rounded-full flex items-center justify-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="icon" className="w-10 h-10 ml-5 mt-5"/>
                </div>
            </div>
            <div className="">
                <h1 className="text-3xl text-left ml-10 mt-10">22-03-2021</h1>

            </div>
        </div>
    )
}
export default Work;