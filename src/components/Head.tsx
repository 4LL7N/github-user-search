function Head(props: { theme: boolean; setTheme: (theme: boolean) => void }) {
  return (
    <>
      <header className={`flex flex-row justify-between items-center `}>
        <h1
          className={`text-[26px] font-bold leading-normal	tracking-widest ${
            props.theme ? "text-[#FFF]" : "text-[#222731]"
          }`}
        >
          devfinder
        </h1>
        <div
          className={`flex flex-row hover:opacity-50	`}
          onClick={() => props.setTheme(!props.theme)}
        >
          <p
            className={`text-[13px] font-bold	leading-normal tracking-widest	mr-[16px] ${
              props.theme ? "text-[#FFF]" : "text-[#222731]"
            } `}
          >
            {props.theme ? "LIGHT" : "DARK"}
          </p>
          <img
            src={
              props.theme
                ? "./src/images/icon-sun.svg"
                : "./src/images/icon-moon.svg"
            }
          />
        </div>
      </header>
    </>
  );
}

export default Head;
