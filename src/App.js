import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import React from "react";
import {Feed,
  Navebar,
  SearchFeed,
  VideoDetail,
  ChannelDetail}from "./Components/index"

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ background: "#ffff" }}>
          <Navebar />
          <Routes>
            <Route path="/YouTubeClone" element={<Feed/>}/>
            <Route path="/video/:id" element={<VideoDetail/>}/>
            <Route path="/channel/:id" element={<ChannelDetail/>}/>
            <Route path="/search/:searhTerm" element={<SearchFeed/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
