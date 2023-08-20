import { Rating } from "@mui/material";


const CampingGroup = ({image, title, text}) => {
    return (
        <div className="shadow-md rounded-lg bg-[#93C5FD]">
            <img className="rounded-t-lg mb-10" src={image} alt="" />
            <div className="space-y-3 px-4 pb-4">
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <h2 className="test-2xl text-base font-semibold">{title}</h2>
                <p className="text-gray-600 text-lg">{text}</p>
            </div>
        </div>
    );
};

export default CampingGroup;