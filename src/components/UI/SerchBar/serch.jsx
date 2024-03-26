import React from "react";
import { IconButton, Input, SerchBarWrapper } from "./styles";
import { IconContext } from "react-icons";
import { CiSearch } from "react-icons/ci";

const SerchBar = ({ serch }) => {
  const [text, setText] = React.useState("");
  const handleChange = e => setText(e.target.value);

     return (
    <SerchBarWrapper>
      <Input value={text} onChange={handleChange}  type="text" placeholder="What are you looking for?" />
      <IconButton onClick={() => console.log(text) }>
        <IconContext.Provider value={{ size: "100%" }}>
          <CiSearch />
        </IconContext.Provider>
      </IconButton>
    </SerchBarWrapper>
  );
};

export default SerchBar;
