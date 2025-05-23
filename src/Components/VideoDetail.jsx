import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";

import { fetchFormAPI } from "./fetchFormAPI";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
export default function VideoDetail() {
  const [videoDetail, setvideoDetail] = useState([]);
  const [videos, setvideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFormAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setvideoDetail(data.items[0])
    );
    fetchFormAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setvideos(data.items)
    );
  }, [id]);
  if (!videoDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`} //v query represent uniq like  id
                className="react-player"
                controls
                playing
              />
              <Typography color="black" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                sx={{ color: "black" }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="black"
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems={"center"}>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
          px={2}
          py={{ xs: 5, md: 1 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Videos videos={videos} direction="column" />
        </Box>
        </Stack>

      </Box>
    </>
  );
}
