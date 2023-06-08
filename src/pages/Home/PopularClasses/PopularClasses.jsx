
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/Headers/SectionTitle";
import useClasses from "../../../components/hooks/useClasses";
import Class from "./Class";


const PopularClasses = () => {
    const [classes] = useClasses();
    return (
        <Container>
           <SectionTitle title='Popular Classes'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    classes.map(cls => <Class
                        key={cls._id}
                        cls={cls}
                    ></Class>)
                }
            </div>
        </Container>
    );
};

export default PopularClasses;