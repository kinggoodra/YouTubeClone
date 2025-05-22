import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { fetchFormAPI } from "./fetchFormAPI";
import { useState, useEffect } from "react";
export default function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
fetchFormAPI(`channels?part=snippet&id=${id}`).then((data)=>{setChannelDetail(data?.items[0])})
    fetchFormAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              zIndex: 10,
              height: "300px",
              background:
                "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)"
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop='-93px'/>
        </Box>
        <Box display='flex' p='2'>
  <Box sx={{mr:{sm:'108px'}}}/>
    <Videos videos={videos}/>
    
  </Box>
      </Box>

    </>
  );
}
