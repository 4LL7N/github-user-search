function Input(props: {
  theme: boolean;
  error: boolean;
  user: string;
  setUser: (event: string) => void;
  requestedUser: (user: string) => void;
}) {
  return (
    <>
      <div
        className={`w-[100%] h-[60px] ${
          props.theme ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"
        } flex flex-row items-center rounded-[15px] py-[7px] pr-[7px] pl-[16px] mt-[35px] md:py-[9.5px] md:pr-[10px] md:pl-[32px] md:h-[69px] `}
      >
        <img
          className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
          src="./src/images/icon-search.svg"
        />
        <input
          className={`appearance-none	h-[25px] ${
            props.error ? "w-[100px] md:w-[254px] lg:w-[418px]" : "w-[180px] md:w-[370px] lg:w-[534px]"
          } text-[13px] md:text-[18px] font-normal	outline-none bg-transparent ml-[9px] md:ml-[24px] ${
            props.theme ? "text-[#FFF]" : "text-[#222731]"
          }`}
          type="text"
          placeholder="Search GitHub username…"
          value={props.user}
          onChange={(event) => {
            props.setUser(event.target.value);
          }}
        />
        {props.error ? (
          <p className="text-[#F74646] text-[13px] font-bold">No results</p>
        ) : undefined}
        <button
          className="outline-none	bg-[#0079FF] text-[14px] text-[#FFF] font-bold ml-[7px] h-[46px] w-[84px] md:h-[50px] md:w-[106px] flex items-center justify-center rounded-[10px] hover:bg-[#60ABFF] "
          onClick={() => props.requestedUser(props.user)}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default Input;
