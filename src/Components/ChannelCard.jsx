import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoProfilePicture } from "../utils/constaints";
import { Link } from "react-router-dom";

export default function ChannelCard({ channelDetail, marginTop }) {

  return (
    <>
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "356px", md: "320px" },
          height: "326px",
          margin: "auto",
          marginTop:marginTop
        }}
      >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              color: "black",
            }}
          >
            <CardMedia
              image={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
              sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid black",
                bgcolor: "gray",
                
              }}
            />
            <Typography variant="h6">
              {channelDetail?.snippet?.title}
              <CheckCircleIcon
                sx={{ fontSize: "14px", color: "black", ml: "5px" }}
              />
            </Typography>
            {channelDetail?.statistics?.subscriberCount&&(
              <Typography sx={{fontSize:'15px',fontWeight:500,color:'gray'}}>
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString()}
                Subscriber
              </Typography>
            )}
            
          </CardContent>
        </Link>
      </Box>
    </>
  );
}
