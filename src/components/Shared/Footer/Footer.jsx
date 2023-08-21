import Container from "../../Container/Container";
import { FaFacebook, FaPhone, FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import summer_camp from '../../../assets/summer-camp-removebg-preview.png'
import moment from 'moment/moment';

const Footer = () => {
    const currentYear = moment().format('Y');
    return (
        <>
            <div className="footer1 px-10 pt-20 pb-10 bg-[#5ea1ee] text-base-content bg-opacity-50">
                <Container>
                    <footer className="footer ">
                        <div className="ml-16 md:ml-0">
                            <img className="w-28 rounded-2xl shadow-cyan-50" src={summer_camp} alt="" />
                            <p className="text-sm text-[#7E3D97] font-bold">Thrilling Upsets and <br /> Record-Breaking  Performances <br /> Dominate the Sports World</p>
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
                            <a className="link link-hover flex items-center gap-3"><FaPhone /> +123-456-7890</a>
                            <a className="link link-hover flex items-center gap-3"><FaTelegramPlane /> +555-555-5555</a>
                            <a className="link link-hover">+ Our official page</a>
                        </div>
                        <div>
                            <span className="footer-title">Social Links</span>
                            <a className="link link-hover flex items-center gap-3">Facebook <FaFacebook /> </a>
                            <a className="link link-hover flex items-center gap-3">Twitter <FaTwitter /></a>
                            <a className="link link-hover flex items-center gap-3">Youtube <FaYoutube /></a>
                        </div>

                    </footer>
                    <footer className="footer footer-center p-4 text-base-content bg-opacity-50">
                        <div className="mt-10">
                            <p>Copyright © {currentYear} - All right reserved by Sports complete summer crouse Pd.</p>
                        </div>
                    </footer>
                </Container>
            </div>
        </>
    );
};

export default Footer;