import {BsDot} from "react-icons/bs"
const Loading = () => {
    return (
        <div className="flex justify-center backdrop-blur-3xl absolute z-50 items-center h-[100vh] w-full ">
            <div className=" text-3xl font-bold">Loading</div>
            <div className=" animate-bounce-slow pt-5 text-xl">
                <BsDot/>
            </div>
            <div className=" animate-bounce-medium pt-5 text-xl">
                <BsDot/>
            </div>
            <div className=" animate-bounce-fast pt-5 text-xl">
                <BsDot/>
            </div>
        </div>
    )
}

export default Loading;