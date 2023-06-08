import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const googleHandler = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                    // const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
                    // fetch(`https://bistro-boss-server-rose.vercel.app/users`, {
                    //     method: "POST",
                    //     headers: {
                    //         "content-type": "application/json"
                    //     },
                    //     body: JSON.stringify(saveUser)
                    // })
                    .then(res => res.json())
                    .then(() => {
                        // navigate(from, { replace: true });
                        toast.success('login Successfully!')
                        navigate('/')
                    })
            })
            .catch(error => console.log(error))
    }
    return (
        <button onClick={googleHandler} className=" btn border-cyan-400 rounded-lg px-8 w-full bg-slate-200 mt-5 hover:bg-cyan-500 hover:text-white flex items-center justify-center gap-3 py-3">
            <FaGoogle size={26} /> continue with google
        </button>
    );
};

export default SocialLogin;