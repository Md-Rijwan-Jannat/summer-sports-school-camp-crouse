

const Class = ({ cls }) => {

    const { className, instructorName, image, price, students, availableSeats } = cls;
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <img className="h-48 w-full object-cover rounded-t-lg" src={image} alt="Card Image" />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-5">{className}</h2>
                <h2>Instructor: {instructorName}</h2>
                <h2 className="text-sm text-gray-800">Students: <span className="text-blue-500">{students}</span></h2>
                <h2 className="text-sm text-gray-800">Available Seats: <span className="text-blue-500">{availableSeats}</span></h2>
                <p className="text-sm text-gray-800">Price: <span className="text-red-500">{price}</span></p>
            <a href="#" className="inline-block mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600">Read More</a>
        </div>
        </div >
    );
};

export default Class;