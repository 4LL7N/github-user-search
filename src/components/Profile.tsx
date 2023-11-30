import { userObj } from "../App";

function Profile(props: { theme: boolean; userInfo: userObj | undefined }) {
  return (
    <>
      <section
        className={`${
          props.theme ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"
        } px-[24px] pt-[32px] pb-[48px] rounded-[15px] mt-[16px] md:p-[40px] md:mt-[24px]`}
      >
        <header className="flex">
          <img
            className="w-[70px] md:w-[117px] h-[70px] md:h-[117px] rounded-[50%]"
            src={props.userInfo?.avatar_url}
          />
          <div className="ml-[20px] md:ml-[41px] lg:flex">
            <div>
              <h1
                className={`text-[16px] md:text-[26px] font-bold ${
                  props.theme ? "text-[#FFF]" : "text-[#4B6A9B]"
                }`}
              >
                {props.userInfo?.name}
              </h1>
              <h2 className="text-[#0079FF] text-[13px] md:text-[16px]">
                @{props.userInfo?.login}
              </h2>
            </div>
            <p
              className={` text-[13px] md:text-[15px] mt-[6px] ${
                props.theme ? "text-[#FFF]" : "text-[#697C9A]"
              } lg:ml-[138px]`}
            >
              Joined {props.userInfo?.join}
            </p>
          </div>
        </header>
        <p
          className={`text-[13px] md:text-[15px] mt-[33px] ${
            props.theme ? "text-[#FFF]" : "text-[#4B6A9B]"
          } lg:ml-[158px]`}
        >
          {props.userInfo?.bio}
        </p>
        <div
          className={`${
            props.theme ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
          } pl-[15px] md:pl-[32px] pt-[18px] md:pt-[15px] pr-[14px] md:pr-[96px] pb-[19px] md:pb-[17px] flex justify-around md:justify-between rounded-[10px] mt-[23px] md:mt-[32px] lg:ml-[158px]`}
        >
          <div className="flex flex-col items-center md:items-start gap-[8px] ">
            <h1
              className={`text-[11px] md:text-[13px] ${
                props.theme ? "text-[#FFF]" : "text-[#4B6A9B]"
              }`}
            >
              Repos
            </h1>
            <p
              className={`text-[16px] md:text-[22px] font-bold ${
                props.theme ? "text-[#FFF]" : "text-[#2B3442]"
              } `}
            >
              {props.userInfo?.public_repos}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[8px]">
            <h1
              className={`text-[11px] md:text-[13px] ${
                props.theme ? "text-[#FFF]" : "text-[#4B6A9B]"
              }`}
            >
              Followers
            </h1>
            <p
              className={`text-[16px] md:text-[22px] font-bold ${
                props.theme ? "text-[#FFF]" : "text-[#2B3442]"
              } `}
            >
              {props.userInfo?.followers}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[8px]">
            <h1
              className={`text-[11px] md:text-[13px] ${
                props.theme ? "text-[#FFF]" : "text-[#4B6A9B]"
              }`}
            >
              Following
            </h1>
            <p
              className={`text-[16px] md:text-[22px] font-bold ${
                props.theme ? "text-[#FFF]" : "text-[#2B3442]"
              }  `}
            >
              {props.userInfo?.following}
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col mt-[24px] gap-[16px] md:flex-row md:gap-[65px] lg:ml-[158px]`}
        >
          <div className={`flex flex-col gap-[16px] md:w-[208px]`}>
            <div className="flex gap-[20px]">
              <img
                className="w-[14px] h-[20px]"
                src={
                  props.userInfo?.loaction
                    ? props.theme
                      ? "./images/location-dark.svg"
                      : "./images/icon-location.svg"
                    : "./images/location-unavailable.svg"
                }
              />
              <p
                className={`${
                  props.userInfo?.loaction
                    ? props.theme
                      ? "text-[#FFF]"
                      : "text-[#4B6A9B]"
                    : "text-[#697C9A]"
                } text-[13px] md:text-[15px]`}
              >
                {props.userInfo?.loaction
                  ? props.userInfo?.loaction
                  : "Not Availabe"}
              </p>
            </div>
            <div className="flex gap-[13px]">
              <img
                className="w-[20px] h-[20px] "
                src={
                  props.userInfo?.blog
                    ? props.theme
                      ? "./images/website-dark.svg"
                      : "./images/icon-website.svg"
                    : "./images/website-unavailable.svg"
                }
              />
              <p
                className={`${
                  props.userInfo?.blog
                    ? props.theme
                      ? "text-[#FFF]"
                      : "text-[#4B6A9B]"
                    : "text-[#697C9A]"
                } w-[160px] overflow-hidden hover:underline text-[13px] md:text-[15px]`}
              >
                {props.userInfo?.blog ? props.userInfo?.blog : "Not Available"}
              </p>
            </div>
          </div>
          <div className={`flex flex-col gap-[16px] md:w-[208px] `}>
            <div className="flex gap-[13px] ">
              <img
                className="w-[20px] h-[20px]  "
                src={
                  props.userInfo?.twitter
                    ? props.theme
                      ? "./images/twitter-dark.svg"
                      : "./images/twitter-light.svg"
                    : "./images/twitter-unavailable.svg"
                }
              />
              <p
                className={`${
                  props.userInfo?.twitter
                    ? props.theme
                      ? "text-[#FFF]"
                      : "text-[#4B6A9B]"
                    : "text-[#697C9A]"
                } text-[13px] md:text-[15px]`}
              >
                {props.userInfo?.twitter
                  ? props.userInfo?.twitter
                  : "Not Available"}
              </p>
            </div>
            <div className="flex gap-[13px]">
              <img
                className="w-[20px] h-[20px]"
                src={
                  props.userInfo?.company
                    ? props.theme
                      ? "./images/company-dark.svg"
                      : "./images/icon-company.svg"
                    : "./images/company-unavailale.svg"
                }
              />
              <p
                className={`${
                  props.userInfo?.company
                    ? props.theme
                      ? "text-[#FFF]"
                      : "text-[#4B6A9B]"
                    : "text-[#697C9A]"
                } text-[13px] md:text-[15px]`}
              >
                {props.userInfo?.company
                  ? props.userInfo?.company
                  : "Not Available"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
