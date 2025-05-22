import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Slidebar from "./Slidebar";
import { fetchFormAPI } from "./fetchFormAPI";
import Videos from "./Videos";

export default function Feed() {
  
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    setVideo([])
    fetchFormAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>// part=snippet this find in api params 
      setVideo(data.items)//&q=${selectedCategory} &means aani ,q means which string search on yt 
    );
  }, [selectedCategory]);
  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Slidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            copyright content
          </Typography>
        </Box>

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
            {selectedCategory}
            <span style={{ color: "#F31503" }}> Video</span>
          </Typography>

          
          <Videos videos={videos} />
        </Box>
      </Stack>
    </>
  );
}
