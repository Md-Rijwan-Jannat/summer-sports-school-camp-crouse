

const NotFoundMessage = ({message}) => {
    return (
        <div className="flex items-center justify-center">
            <p className="bg-red-100 text-blue-600 p-5 text-sm font-sans rounded-xl ">{message}</p>
        </div>
    );
};

export default NotFoundMessage;