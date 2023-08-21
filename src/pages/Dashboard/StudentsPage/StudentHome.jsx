import { FaCheckCircle, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useAuth from "../../../components/hooks/useAuth";
import Container from "../../../components/Container/Container";



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

const StudentHome = () => {
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
            <Helmet><title>Summer Sports Camp | Student Home</title></Helmet>
            <div className="lg:flex flex-col lg:flex-row gap-10 w-full">
                <div className="w-full lg:w-1/3  mb-5">
                    <img className="w-48 h-48 mb-2 rounded-full border-4 border-blue-500" src={user?.photoURL} alt="" />
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
                                    Participating in the summer camp has been an incredible journey filled with fun, learning, and unforgettable memories. From exciting outdoor adventures to engaging workshops and team activities, every day brought a new opportunity to explore, grow, and make friends. Whether it was conquering new challenges, discovering hidden talents, or simply enjoying the beauty of nature, the summer camp experience has left a lasting impact on me. I am grateful for the friendships formed, the skills gained, and the sense of achievement that I will carry with me long after the camp has ended. Thank you for an amazing summer filled with laughter, learning, and endless possibilities
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
                                <h1 className="tex text-2xl font-semibold">Summer Sports School Camp</h1>

                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <div className="text-gray-800 text-start">
                                   Bangladesh
                            </div>
                        </CustomTabPanel>
                    </Box>
                </div>
                <div className="flex flex-col justify-start w-full ">
                    <div className="text-5xl text-green-500 font-medium flex justify-start items-center">S<span className="text-3xl text-blue-500">tudent</span></div>
                    <div className="divider border-4 border-gray-500"></div>
                    <div className="font-bold text-[25px] mb-2 flex items-center gap-2">{user?.displayName} <span className="text-blue-600"><FaCheckCircle /></span></div>
                    <div className="flex items-center flex-row gap-5 mb-3">
                        <span className="text-sm text-blue-600 font-semibold">30 flowers</span>
                        <span className="text-sm text-blue-600 font-semibold">25 connections</span>
                    </div>
                    <button onClick={flowingHandler} className="bg-blue-500  w-[100px] hover:bg-blue-600 text-white font-bold text-[13] mb-5 py-2 px-4 rounded-2xl">{flow ? 'Flowing' : 'Flow'} </button>

                </div>

            </div>
            <div>
                <h2 className="text-3xl text-gray-500 font-semibold mt-10 mb-5 text-left">Summer Camp Crouse Videos</h2>
                <div className="divider border-4 border-gray-500"></div>
                <div className="flex flex-col justify-center items-center gap-10 space-y-5 ld:space-y-0">
                    <iframe className="rounded-2xl md:w-[560px] md:h-[360px]" src="https://www.youtube.com/embed/cycQCK8w1-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className="rounded-2xl md:w-[560px] md:h-[360px]" src="https://www.youtube.com/embed/WkhbInv1MeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className="rounded-2xl md:w-[560px] md:h-[360px]" src="https://www.youtube.com/embed/NIk1-ck4c6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className="rounded-2xl md:w-[560px] md:h-[360px]" src="https://www.youtube.com/embed/3yc5Nr2X4uI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div>
                        <h3 className="text-3xl text-gray-500 mt-10 mb-4">Our Summer sports video</h3>
                        <div className="divider border-4 border-gray-500 mb-5"></div>
                        <div className="flex flex-col justify-center items-center gap-10 space-y-5 ld:space-y-0">
                            <iframe src="https://www.youtube.com/embed/2vIuqpisUDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-2xl md:w-[560px] md:h-[360px]"></iframe>
                            <iframe src="https://www.youtube.com/embed/QaaXjHDOjuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-2xl md:w-[560px] md:h-[360px]"></iframe>
                        </div>
                    </div>
        </Container>
    );
};

export default StudentHome;