import Container from "../Container/Container";
import { FaFacebook, FaPhone, FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <Container>
            <>
                <footer className="footer p-10 bg-cyan-500 text-base-content bg-opacity-50">
                    <div>
                        <img className="w-28 rounded-2xl shadow-cyan-50" src="https://t3.ftcdn.net/jpg/01/48/33/22/360_F_148332274_gev1hgVEk1uOyiEMAvaNH31oJy6FSyYz.jpg" alt="" />
                        <p className="text-sm font-sans">Thrilling Upsets and <br /> Record-Breaking  Performances <br /> Dominate the Sports World</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">New crouse</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Address</span>
                        <a className="link link-hover">123/A, Fake Street, Dhaka</a>
                        <a className="link link-hover">Block 456, Imaginary Road, Chittagong</a>
                        <a className="link link-hover">789, Fictitious Lane, Sylhet</a>
                        <a className="link link-hover">House 10, Made-up Avenue, Rajshahi</a>
                    </div>
                    <div>
                        <span className="footer-title">Contact</span>
                        <a className="link link-hover flex items-center gap-3"><FaPhone/> +123-456-7890</a>
                        <a className="link link-hover flex items-center gap-3"><FaTelegramPlane/> +555-555-5555</a>
                        <a className="link link-hover">+ Our official page</a>
                    </div>
                    <div>
                        <span className="footer-title">Social Links</span>
                        <a className="link link-hover flex items-center gap-3">Facebook <FaFacebook/> </a>
                        <a className="link link-hover flex items-center gap-3">Twitter <FaTwitter/></a>
                        <a className="link link-hover flex items-center gap-3">Youtube <FaYoutube/></a>
                    </div>

                </footer>
                <footer className="footer footer-center p-4 bg-cyan-600 text-base-content bg-opacity-50">
                    <div>
                        <p>Copyright © 2023 - All right reserved by Sports complete summer crouse Pd.</p>
                    </div>
                </footer>
            </>
        </Container>
    );
};

export default Footer;