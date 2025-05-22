import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SearchBar() {
  const [searhTerm, setsearhTerm] = useState("");
  const navigate = useNavigate();
function handleSubmit(e){
e.preventDefault()
if (searhTerm) {
  navigate(`/search/${searhTerm}`)
  setsearhTerm('')
}
}
  return (
    <>
      <Paper
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",

          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value={searhTerm}
          onChange={(e) => {
            setsearhTerm(e.target.value);
          }}
          style={{
            border: "none",
            outline: "none",
          }}
        />
        <IconButton
          type="submit"
          sx={{
            p: "10px",
            color: "red",
          }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}
