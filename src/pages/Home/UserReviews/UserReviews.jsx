
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Container from '../../../components/Container/Container';

const userFeedback = [
    {
        id: 1,
        name: 'Jackson Martinez',
        feedback: 'My experience at the Sports School Camp was amazing! I learned new skills, made new friends, and had a blast playing various sports. The coaches were knowledgeable and supportive, and the facilities were top-notch. I highly recommend the camp to any sports enthusiasts!',
        image: 'https://media.istockphoto.com/id/1420486889/photo/candid-portrait-of-young-middle-eastern-digital-native.webp?s=1024x1024&w=is&k=20&c=5q1NiElGDfT8IxbxhEWKTSufxyn3oFVHNnPNPyDe6as=',
        description: 'Football player and proud attendee of the Sports School Camp',
    },
    {
        id: 2,
        name: 'Ava Anderson',
        feedback: 'My experience at the Sports School Camp was amazing! I learned new skills, made new friends, and had a blast playing various sports. The coaches were knowledgeable and supportive, and the facilities were top-notch. I highly recommend the camp to any sports enthusiasts!',
        image: 'https://media.istockphoto.com/id/1440149713/photo/black-man-tablet-and-smile-for-social-media-post-shopping-online-or-browsing-internet.webp?b=1&s=170667a&w=0&k=20&c=Fqxt3d4V6mNZEwXdf_4MJg5V6AisS1ASjQgOCPTgE30=',
        description: 'Football player and proud attendee of the Sports School Camp',
    },
    {
        id: 3,
        name: 'Isabella Garcia',
        feedback: 'My experience at the Sports School Camp was amazing! I learned new skills, made new friends, and had a blast playing various sports. The coaches were knowledgeable and supportive, and the facilities were top-notch. I highly recommend the camp to any sports enthusiasts!',
        image: 'https://media.istockphoto.com/id/1444291518/photo/black-woman-working-from-home-office.webp?b=1&s=170667a&w=0&k=20&c=W80d5TxErOfCAzn34x3njs0qFWfRoPV9JQlhHkePAcU=',
        description: 'Football player and proud attendee of the Sports School Camp',
    },
    {
        id: 4,
        name: 'Emma Davis',
        feedback: 'My experience at the Sports School Camp was amazing! I learned new skills, made new friends, and had a blast playing various sports. The coaches were knowledgeable and supportive, and the facilities were top-notch. I highly recommend the camp to any sports enthusiasts!',
        image: 'https://media.istockphoto.com/id/1443876461/photo/software-designer-speaking-to-his-client-on-the-phone-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=vxlQSh5KRomfIvIGw_hF1d3MLC4XMcKgkaoTNL-otZY=',
        description: 'Football player and proud attendee of the Sports School Camp',
    },
    {
        id: 5,
        name: 'Liam Jones',
        feedback: 'My experience at the Sports School Camp was amazing! I learned new skills, made new friends, and had a blast playing various sports. The coaches were knowledgeable and supportive, and the facilities were top-notch. I highly recommend the camp to any sports enthusiasts!',
        image: 'https://media.istockphoto.com/id/1442792969/photo/business-woman-using-laptop-outdoors.webp?b=1&s=170667a&w=0&k=20&c=9Zc3Zyguv4z5TemsCpsaDB4bcu1DgsplR0bKKFnzpNM=',
        description: 'Football player and proud attendee of the Sports School Camp',
    },
    {
        id: 6,
        name: 'Olivia Brown',
        feedback: 'My experience at the Sports School Camp was amazing! I learned new skills, made new friends, and had a blast playing various sports. The coaches were knowledgeable and supportive, and the facilities were top-notch. I highly recommend the camp to any sports enthusiasts!',
        image: 'https://media.istockphoto.com/id/1358132456/photo/happy-business-woman-working-from-home.webp?b=1&s=170667a&w=0&k=20&c=AwTp8iBddJ_AzOJWUhhcVA2nVoZC5TfiRJAGwF-IG4M=',
        description: 'Football player and proud attendee of the Sports School Camp',
    },
    {
        id: 7,
        name: 'Noah Williams ',
        feedback: 'My experience at the Sports School Camp was amazing! I learned new skills, made new friends, and had a blast playing various sports. The coaches were knowledgeable and supportive, and the facilities were top-notch. I highly recommend the camp to any sports enthusiasts!',
        image: 'https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.webp?b=1&s=170667a&w=0&k=20&c=XCzSqjgn02etddi527fy6Q9Dz_MtPYKKc-MMbhS3kK0=',
        description: 'Football player and proud attendee of the Sports School Camp',
    },
    {
        id: 8,
        name: 'Sophia Johnson',
        feedback: 'My experience at the Sports School Camp was amazing! I learned new skills, made new friends, and had a blast playing various sports. The coaches were knowledgeable and supportive, and the facilities were top-notch. I highly recommend the camp to any sports enthusiasts!',
        image: 'https://media.istockphoto.com/id/1433145639/photo/american-teenage-woman-sitting-in-white-office-with-laptop-she-is-a-student-studying-online.webp?b=1&s=170667a&w=0&k=20&c=yLvOFawLfSvf2QctYxZckovHAQvVmpy6bBDj_hBJ4f4=',
        description: 'Cricket player and proud attendee of the Sports School Camp',
    },
    // Add more user feedback data here...
];

const UserReviews = () => {
    return (
        <Container>

            <div className="max-w-3xl mx-auto">
                <Swiper spaceBetween={16} slidesPerView={1} navigation pagination>
                    {userFeedback.map((feedback) => (
                        <SwiperSlide key={feedback.id}>
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={feedback.image}
                                        alt={feedback.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <h3 className="text-xl font-semibold">{feedback.name}</h3>
                                </div>
                                <p className="text-gray-700 mb-4">{feedback.feedback}</p>
                                <p className="text-gray-500 text-sm">{feedback.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
};

export default UserReviews;
