import { FaArrowRight } from "react-icons/fa";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/Headers/SectionTitle";
import UserReviews from "../UserReviews/UserReviews";


const UserFeedback = () => {
    return (
        <Container>
            <SectionTitle title={"User feedback"} />
            <UserReviews/>
            <div className="flex flex-col items-center mt-10">
                <h3 className="text-blue-600 font-medium text-2xl mb-5">You can share your feedback</h3>
                <div className="w-1/2 flex flex-col justify-center items-center gap-5 mb-10">
                    <textarea className="textarea textarea-bordered border-blue-500 w-full h-24 rounded-lg p-2" name="feedback" id="" cols="30" rows="10"></textarea>
                    <button className="btn horizontal bg-blue-600 hover:bg-blue-500 border-0 text-white w-1/2">Send <FaArrowRight size={15}/></button>
                </div>
            </div>
        </Container>
    );
};

export default UserFeedback;