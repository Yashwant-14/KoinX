import getStarted from "../utils/getStarted.png"

const GetStarted=()=>{
    return (
        <div className=" h-[400px] w-[340px] bg-gradient-to-br from-blue-900 to-blue-600 rounded-2xl shadow-md ml-5 p-[1vh]  ">
            
            <div className=" mt-[3vh]">
            <div className=" text-white font-bold text-lg flex justify-center  "> <span>Get Started with KoinX</span> </div>
            <div className=" text-white text-lg font-bold flex justify-center ">
            <span>for FREE</span> </div>

            </div>
            

            <div className="text-pretty text-xs text-white mt-[1vh]  ">
                <p className="text-center">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            </div>
            <div className="flex justify-center">
                <img className="h-[160px] w-[200px] " src={getStarted}/>
            </div>

            <div className="flex items-center justify-center w-[100%] mt-[3vh]">
            <button className=" bg-white  w-[14vw] h-[6vh] text-xs font-bold rounded-lg shadow-lg  p-1 flex justify-center items-center  transition-transform transform hover:scale-110 ">Get Started for FREE <span className="text-lg">→</span></button>
            </div>

            
        </div>
    )
}
export default GetStarted;