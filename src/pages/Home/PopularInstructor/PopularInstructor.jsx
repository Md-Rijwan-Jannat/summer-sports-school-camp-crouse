import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";
import useClasses from "../../../components/hooks/useClasses";
import { MdArrowOutward } from "react-icons/md";


const PopularInstructor = ({ instr }) => {
    const [flow, setFlow] = useState(false)
    const { name, email, image } = instr;
    const [classes] = useClasses();
    const totalClass = classes?.filter(cls => cls?.instructorEmail === email)
    const total = classes?.find(cls => cls?.instructorEmail === email)

    const flowingHandler = () => {
        setFlow(!flow)
    }
    return (
        <div className="bg-blue-300 w-full h-full rounded-xl shadow-lg pb-5 p-5">
            <div className="px-3 py-4 pb-[60px] flex flex-col">
                <div className="flex gap-4">
                    <img className="w-20 h-20 rounded-full border-[#8A63AC] border-2" src={image} alt={image} />
                    <div className="flex flex-col items-start ">
                        <div className="font-bold text-base mb-2 flex flex-wrap items-center gap-2">{name} <span className="text-blue-600"><FaCheckCircle /></span></div>
                        <div className="flex flex-row gap-3 items-center mb-3">
                            <p className="text-xs text-blue-600">flowers- 1k</p>
                            <p className="text-xs text-blue-600">Connection- 500+</p>
                        </div>
                        <button onClick={flowingHandler} className="bg-[#1b92c4] hover:bg-blue-600 text-white text-[10px] mb-5 px-2 rounded">{flow ? 'Flowing' : 'Flow'} </button>
                    </div>
                </div>
                <div className="text-start">
                    <div className=" mb-5">
                        <p className="text-[#8A63AC] text-2xl ml-1">i<span className="text-[#1b92c4] text-lg"> nstructor</span></p>
                        <hr className="border-[2px] border-[#8A63AC] w-[30px]" />
                    </div>
                    <p className="text-blue-600 ">
                        <span className="text-sm font-semibold text-gray-500"> Class:</span> {totalClass.length}
                    </p>
                    <p className="text-blue-600 ">
                        <span className="text-sm font-semibold text-gray-500"> Students:</span> {total?.students ? total?.students : 0}
                    </p>
                    <div className=" text-green-600 flex gap-2 items-center">
                        <span className="text-sm font-semibold text-gray-500"> Email:</span>
                        <span>{email}</span>
                    </div>
                </div>
                <div className="mt-5 w-20">
                    <PrimaryButton text={'More'} icon={<MdArrowOutward></MdArrowOutward>} to={'allInstructor'}></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructor;