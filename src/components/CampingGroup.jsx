import { Rating } from "@mui/material";


const CampingGroup = ({ image, title, text }) => {
    return (
        <div className="shadow-lg radious bg-blue-300 shadow-blue-400">
            <img className="rounded-tr-[150px] rounded-tl-[15px] mb-10 h-10/12" src={image} alt="" />
            <div className="space-y-3 px-6 pb-4">
                <Rating className="text-sm md:text-xl lg:text-2xl" name="half-rating" defaultValue={2.5} precision={0.5} />
                <h2 className="text-[16px] md:text-2xl font-semibold">{title}</h2>
                <p className="text-gray-600 text-[7px] pl-5 lg:text-sm pb-10">{text}</p>
            </div>
        </div>
    );
};

export default CampingGroup;