import { FaCheckCircle, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../../components/hooks/useAuth";
import Container from "../../../../components/Container/Container";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const InstructorHome = () => {
    const { user } = useAuth();
    const [flow, setFlow] = useState(false)
    const flowingHandler = () => {
        setFlow(!flow)
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container>
            <Helmet><title>Summer Sports Camp | Instructor Home</title></Helmet>
            <div className="lg:flex flex-col lg:flex-row gap-10 w-full bg-[#77b6fd] allClass2 pb-10">
                <div className="w-full lg:w-1/3  mb-5">
                    <img className="w-48 h-48 mb-2 rounded-full border-4 border-green-400  " src={user?.photoURL} alt="" />
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="About" {...a11yProps(0)} />
                                <Tab label="Education" {...a11yProps(1)} />
                                <Tab label="Address" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <div className="text-gray-800 text-start">
                                <p className="text-sm font-medium flex items-start justify-start">
                                    Hello everyone,<br />

                                    I am delighted to welcome you to our Summer Sports Camp as the camp administrator. Over the next few weeks, we will embark on a journey of athleticism, camaraderie, and personal growth.

                                    Our dedicated coaches are here to nurture your skills, whether you are a seasoned player or new to the game. Beyond the sports, we will create lasting memories, foster teamwork, and build character.

                                    Parents, thank you for entrusting us with your child is summer experience. We are committed to providing a safe and inspiring environment.

                                    Let is embrace the challenges, celebrate the victories, and make this summer unforgettable. Here is to an action-packed, fun-filled Summer Sports Camp!

                                    Thank you.
                                </p>
                                <div className="flex my-10 justify-center gap-5">
                                    <FaYoutube size={25} />
                                    <FaFacebook size={25} />
                                    <FaTwitter size={25} />
                                    <FaInstagram size={25} />
                                </div>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <div className="text-gray-800 text-start">
                                <h1 className="tex text-2xl font-semibold">Academic qualification</h1>
                                <div className="ml-6">
                                    <p className="text-lg font-semibold">Bachelor of Science in Educational Leadership</p>
                                    <span className="text-sm">The Bachelor of Science in Educational Leadership is an academic degree program designed to prepare individuals for leadership roles in educational settings. Here are some academic short details about this degree program:</span>

                                </div>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <div className="text-gray-800 text-start">
                                <span className="text-sm">The Bachelor of Science in Educational Leadership is an academic degree program designed to prepare individuals for leadership roles in educational settings. Here are some academic short details about this degree program:</span>
                            </div>
                        </CustomTabPanel>
                    </Box>
                </div>
                <div className="flex flex-col justify-start w-full ">
                    <div className="text-5xl text-green-500 font-medium flex justify-start items-center">I<span className="text-3xl text-blue-500">nstructor</span></div>
                    <div className="divider border-4 border-gray-500"></div>
                    <div className="font-bold text-[25px] mb-2 flex items-center gap-2">{user?.displayName} <span className="text-blue-600"><FaCheckCircle /></span></div>
                    <div className="flex items-center flex-row gap-5 mb-3">
                        <span className="text-sm text-blue-600 font-semibold">1k flowers</span>
                        <span className="text-sm text-blue-600 font-semibold">500+ connections</span>
                    </div>
                    <button onClick={flowingHandler} className="bg-blue-500  w-[100px] hover:bg-blue-600 text-white font-bold text-[13] mb-5 py-2 px-4 rounded-2xl">{flow ? 'Flowing' : 'Flow'} </button>

                    <div>
                        <h3 className="text-3xl text-gray-500 mt-10 mb-4">Our Summer sports video</h3>
                        <div className="divider border-4 border-gray-500 mb-5"></div>
                        <div className="flex flex-col justify-center items-center gap-10 space-y-5 ld:space-y-0">
                            <iframe src="https://www.youtube.com/embed/2vIuqpisUDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-2xl md:w-[560px] md:h-[360px]"></iframe>
                            <iframe src="https://www.youtube.com/embed/QaaXjHDOjuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-2xl md:w-[560px] md:h-[360px]"></iframe>
                        </div>
                    </div>
                </div>
            </div>


        </Container>
    );
};

export default InstructorHome;
