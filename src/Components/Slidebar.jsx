import { Stack } from "@mui/material";
import { categories } from "../utils/constaints";
export default function Slidebar({ selecedCategories, setSelectedCategory }) {
  /*

 
 */
  return <>
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
          flexDirection: { md: "column" },
        }}
      >
        {categories.map((categories) => (
          <button
            className="category-btn"
            
            onClick={() => setSelectedCategory(categories.name)}
            style={{
              background: categories.name === selecedCategories && "#FC1503",
              color: "white",

            }
         }
            key={categories.name}
          >
            <span
              style={{
                color: categories.name === selecedCategories ? "white" : "red",
                marginLeft: "15px",
              }}
            >
              {categories.name}
            </span>
            <span
              style={{
                opicity: categories.name === selecedCategories ? "1" : "0.8",
              }}
            >
              {categories.icon}
            </span>
          </button>
        ))}
      </Stack>
    </>
  
}

