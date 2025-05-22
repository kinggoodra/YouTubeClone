import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utils/constaints";
export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  

  return <>
<Card sx={{width:{sm:"358",xs:"100%",md:"320px",boxShadow:'none',borderRadius:0}}}>
        <Link to={videoId ? `/video/${videoId}` : demoChannelUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet.title}
            sx={{ width: { xs: "100%", sm: "358px",md:'320px' }, height: 180 }}
          />
        </Link>

        <CardContent sx={{ backgroundColor:"#1E1E1E",height:'106px'}} >
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant="subtitle2"  color="gray">
              {snippet?.channelTitle||demoChannelTitle}
              <CheckCircleIcon sx={{fontSize:"12px",color:"gray",ml:"5px"}}/>
            </Typography>
          </Link>   
        </CardContent>
      </Card>  </>;
}
