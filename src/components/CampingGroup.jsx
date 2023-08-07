import { Rating } from "@mui/material";


const CampingGroup = ({image, title, text}) => {
    return (
        <div className="hover:bg-blue-400 hover:bg-opacity-10 shadow-md rounded-lg">
            <img className="rounded-t-lg mb-10" src={image} alt="" />
            <div className="space-y-3 px-4 pb-4">
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <h2 className="test-2xl ">{title}</h2>
                <p className="text-gray-500 text-lg">{text}</p>
            </div>
        </div>
    );
};

export default CampingGroup;