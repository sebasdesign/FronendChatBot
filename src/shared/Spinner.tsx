const Spinner = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="relative">
          <div className="w-8 h-8 bg-red-800 rounded-full animate-bounce"></div>
          <div className="w-8 h-1 bg-red-800 "></div>
        </div>
      </div>
    );
  };
  
  export default Spinner;
  