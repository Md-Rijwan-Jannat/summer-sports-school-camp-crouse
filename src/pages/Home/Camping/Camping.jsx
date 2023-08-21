import CampingGroup from "../../../components/CampingGroup";
import SectionTitle from "../../../components/Headers/SectionTitle";


const Camping = () => {
    return (
        <div>
            <SectionTitle title={'Camping'}></SectionTitle>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <CampingGroup
                    image={'https://demo.ovatheme.com/vedhak/wp-content/uploads/2023/04/product-07.jpg'}
                    title={'Classic Tent'}
                    text={'We denounce with righteous indignation and dislike mens beguiled...'}
                ></CampingGroup>
                <CampingGroup
                    image={'https://demo.ovatheme.com/vedhak/wp-content/uploads/2023/04/product-06.jpg'}
                    title={'Camper'}
                    text={'We fervently condemn the deceptive allure that has ensnared the minds of individuals...'}
                ></CampingGroup>
                <CampingGroup
                    image={'https://demo.ovatheme.com/vedhak/wp-content/uploads/2023/04/product-05.jpg'}
                    title={'Tent Camping'}
                    text={'Our voice rises in vehement opposition to the beguiling tactics that have led astray the discerning minds of men...'}
                ></CampingGroup>
            </div>
        </div>
    );
};

export default Camping;