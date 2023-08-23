import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();

    const googleHandler = () => {
        toast.loading('Loading...')
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                const insertUser = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL, role: 'student' };
                axiosSecure.post('/users', insertUser)
                    .then(() => {
                        toast.dismiss();
                        toast.success('login Successfully!')
                        navigate('/')
                    })
            })
            .catch(error => {
                console.log(error)
                toast.dismiss()
            })
    }
    return (
      <div>
          <button onClick={googleHandler} className=" btn border-0 rounded-lg px-8 w-full bg-[#7E3E97] mt-5 hover:bg-[#A373B5] text-blue-500 hover:text-white flex items-center justify-center gap-3 py-3">
            <FaGoogle  size={26} /> continue with google
        </button>
      </div>
    );
};

export default SocialLogin;