import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Avatar, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import TweetCard from "../HomeSection/TweetCard";





const Profile = () => {
  const [value, setValue] = useState("1");
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleOpenProfileModel = () => {
    console.log("Open Profile Model");
  };
  const handleFollowUser = () => {
    console.log("Follow User");
  };
  const handleTapChange = (event, newValue) => {
    setValue(newValue);
    if(newValue === 4){
      console.log("user likes");
    } 
    else if(newValue === 1){
      console.log("user tweets");
    }
      
  };
    

  return (
    <div className="min-h-screen px-1 pt-4 md:px-10 text-left">
      <section
        className={`z-50 flex items-center sticky top-0 bg-opacity-95 py-2 px-0`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Prateek Kumar Yadav
        </h1>
      </section>
      <section>
        <img
          className="w-full h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2025/05/21/15/34/snow-mountain-9614087_1280.jpg"
          alt=""
        />
      </section>
      <section className="pl-4">
        <div className="flex justify-between items-start mt-6 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="Prateek Yadav"
            src="https://avatars.githubusercontent.com/u/108705663?v=4"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edite Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Prateek Yadav</h1>
            {true && <VerifiedIcon className="text-blue-500 ml-2 w-5 h-5" />}
          </div>
          <h1 className="text-gray-500">@utopians</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>
            Prateek Yadav is a full stack developer with expertise in React and
            Spring Boot.
          </p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p>Education</p>
            </div>
            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p>Varanasi,India</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p>Joined jun 2021</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-1 font-semibold ">
              <span>51</span>
              <span className="text-gray-500">Following</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold ">
              <span>590</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTapChange} aria-label="lab API tabs example">
            <Tab label="Posts" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
         { [1,1,1,1,].map((item)=><TweetCard/>)}
        </TabPanel>
        <TabPanel value="2">Replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
    
      </section>
    </div>
  );
};

export default Profile;
