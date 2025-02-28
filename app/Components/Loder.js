import { ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-start  mt-[100px]">
       <ClockLoader color="#00b4d8" size={50}/>
    </div>
  );
};

export default Loader;
