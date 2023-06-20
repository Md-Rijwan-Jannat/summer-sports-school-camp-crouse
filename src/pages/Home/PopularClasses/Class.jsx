import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaUsers } from "react-icons/fa";


const Class = ({ cls }) => {
    const { className, instructorName, image, price, students, availableSeats } = cls;
    return (
        <motion.div
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="bg-white rounded-lg shadow-lg py-5">
                <img className="h-48 w-full object-cover rounded-t-lg" src={image} alt="Card Image" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-5">{className}</h2>
                    <h2>Instructor: {instructorName}</h2>
                    <p className="text-sm text-gray-800">Price: <span className="text-blue-500">{"$" + price}</span></p>
                    <div className="flex justify-between gap-4 items-center mt-4">
                        <Link to={'/allClasses'} className="inline-block text-[16px] px-2 py-1 bg-blue-400 text-white rounded-lg shadow-md hover:bg-blue-500">Read More</Link>
                        <div className="flex items-center">
                            <h2 className="text-sm pr-2 text-gray-800">Available Seats: <span className="text-red-500 font-bold">{availableSeats}</span></h2>
                            <h2 className="text-sm border-l-2 border-gray-600 pl-2 text-gray-800 flex items-center gap-1"><FaUsers color="gray" size={26}/>: <span className="text-green-500 font-bold">{students}</span></h2>
                        </div>
                    </div>
                </div>
            </div >
        </motion.div>
    );
};

export default Class;