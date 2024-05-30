import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

    <Oval
      visible={true}
      height={80}
      width={80}
      color="#000000" 
      strokeColor="#000000" 
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    </div>
  );
};

export default Loader;
