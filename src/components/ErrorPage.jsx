
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

const NotFoundPage = () => {
    const buttonAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(0px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={buttonAnimation}>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-cyan-400">
                <div className="container mx-auto flex flex-col items-center text-center">
                    <img
                        src="https://st.depositphotos.com/1006899/2650/i/600/depositphotos_26505551-stock-photo-error-metaphor.jpg"
                        alt="Error"
                        className="w-64 h-64 md:w-1/3 rounded-2xl shadow-xl mx-auto mb-8"
                    />
                    <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                    <p className="text-lg text-red-500 mb-8 bg-white p-2 rounded-lg w-1/3 shadow-2xl">
                        The page you are looking for does not exist.
                    </p>

                    <Link
                        to="/"
                        className="bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:shadow-outline shadow-2xl"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        </animated.div>
    );
};

export default NotFoundPage;
