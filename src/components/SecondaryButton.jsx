import { useTheme } from "@emotion/react";


const SecondaryButton = ({ title }) => {
    const theme = useTheme();
    return (
        <div className="absolute top-0 group flex justify-center items-center h-full w-10/12">
            <button
                className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-black py-3 px-2 w-36 bg-blue-500 bg-opacity-50"
                style={{ color: theme.palette.font.secondary }}
            >
                {title}
            </button>
            <div
                className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36  bg-opacity-50"
                style={{ background: theme.palette.customColor.buttonBg }}
            ></div>
        </div>
    );
};

export default SecondaryButton;
