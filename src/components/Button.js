import React from "react";
import ArrowRight from "@material-ui/icons/ArrowRight";

export default function Button({ label, handleRedirectToList, testRoute }) {
  return (
    <button type="button" className="button" onClick={handleRedirectToList} data-testid={`go-to-list-${testRoute}`}>
      <span
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
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
