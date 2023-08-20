

const SectionTitle = ({ title }) => {
    return (
        <div className="my-16">
            <div className="flex flex-col justify-start mb-2">
                <h2 className="text-2xl md:text-4xl text-[#8A63AC]">{title}</h2>
            </div>
                <hr className="w-24 border-[3px] border-[#1b92c4]" />
        </div>
    );
};

export default SectionTitle;