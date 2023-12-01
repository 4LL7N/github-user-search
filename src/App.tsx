import { useEffect, useState } from "react";
import axios from "axios";
import Head from "./components/Head";
import Input from "./components/Input";
import Profile from "./components/Profile";

export interface userObj {
    avatar_url: string;
    name: string;
    login: string;
    join: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    loaction: string;
    blog: string;
    twitter: string;
    company: string;
  }
function App() {
  const [user, setUser] = useState<string>("octocat");
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<userObj | undefined>();
  
  useEffect(() => {
    requestedUser(user);
  }, []);
  async function requestedUser(user: string) {
    try {
      const request = await axios(`https://api.github.com/users/${user}`);
      const userData = request.data;
      setUserInfo(userData);
      setError(false)
    } catch (error) {
      setError(true);
    }
  }
  if (userInfo) {
    console.log(userInfo.loaction);
  } else {
    console.log("not yet");
  }
  return (
    <>
      <div
        className={`min-h-screen overflow-hidden w-[100%]	px-[24px] pt-[31px] pb-[79px] ${
          theme ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
        } overflow-x-hidden md:px-[97px] md:pt-[140px] md:pb-[236px] lg:px-[355px] lg:pt-[144px] lg:pb-[145px]`}
      >
        <Head theme={theme} setTheme={setTheme} />
        <Input theme={theme} error={error} user={user} setUser={setUser} requestedUser={requestedUser} />
        <Profile theme={theme} userInfo={userInfo} />
      </div>
    </>
  );
}

export default App;
