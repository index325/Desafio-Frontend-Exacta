import React, { useContext } from "react";
import UserContext from "../contexts/users";
import ArrowRight from "@material-ui/icons/ArrowRight";

export default function Button({ label }) {
  const context = useContext(UserContext);
  return (
    <button type="submit" className="button" disabled={context.formDisabled}>
      <span
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        className="button-label"
      >
        {label}
        {/* <span className="button-icon">&gt;</span> */}
        <ArrowRight />
      </span>
    </button>
  );
}
