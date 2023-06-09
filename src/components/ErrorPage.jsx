
import { Link } from 'react-router-dom';
import { BsHouseDoorFill } from 'react-icons/bs';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="text-white text-5xl font-bold mb-4">
                <span className="text-red-400">4</span>
                <span className="text-yellow-400">0</span>
                <span className="text-green-400">4</span>
            </div>
            <div className="text-white text-lg mb-8">Oops! Page not found</div>
            <div className="text-white text-9xl mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-24 w-24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
            </div>
            <Link to="/" className="flex items-center justify-center bg-white text-gray-800 rounded-md py-2 px-4 text-lg shadow">
                <BsHouseDoorFill className="mr-2" />
                Go back to home
            </Link>
        </div>
    );
};

export default ErrorPage;
