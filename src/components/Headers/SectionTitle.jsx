

const SectionTitle = ({ title }) => {
    return (
        <div className="flex flex-col items-center justify-center md:py-10 ">
            <h2 className="text-xl md:text-4xl text-center my-5 text-gray-600 bg-blue-50 border rounded-xl shadow-xl p-3 w-1/2">{title}</h2>
            
        </div>
    );
};

export default SectionTitle;