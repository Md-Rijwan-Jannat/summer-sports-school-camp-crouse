import data_not from '../../src/assets/Cloud uploading.gif'

const DataNotFount = ({message}) => {
    return (
        <div className=" w-full items-center flex flex-col justify-center pb-5">
            <img className="w-[600px] md:relative" src={data_not} alt="" />
            <h4 className="text-3xl "></h4>
            <div className="alert md:w-1/3 alert-error md:absolute md:bottom-36">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default DataNotFount;