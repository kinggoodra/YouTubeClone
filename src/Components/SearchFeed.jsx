import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { fetchFormAPI } from "./fetchFormAPI";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

export default function SearchFeed() {
  const [videos, setVideo] = useState([]);
  const {searhTerm}=useParams()
  useEffect(() => {
    setVideo([])
    fetchFormAPI(`search?part=snippet&q=${searhTerm}`).then((data) =>// part=snippet this find in api params 
      setVideo(data.items)//&q=${selectedCategory} &means aani ,q means which string search on yt 
    );
  }, [searhTerm]);
    return<>
     <Box p={2} sx={{ height: "90vh", overflowY: "auto", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{
              color: "white",
              ml: 2,
            }}
          >
            Search Result for : 
            <span style={{ color: "#F31503" }}>{searhTerm}  </span>Video
          </Typography>

          
          <Videos videos={videos} />
        </Box>
    </>
}
