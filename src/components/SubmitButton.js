import React, { useContext, useEffect } from "react";
import UserContext from "../contexts/users";
import ArrowRight from "@material-ui/icons/ArrowRight";

export default function Button({ label }) {
  const context = useContext(UserContext);
  return (
    <button
      type="submit"
      className="button"
      disabled={context.formDisabled}
      data-testid="submit-button"
      id="teste"
    >
      <span
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        className="button-label"
      >
        {label}
        <ArrowRight />
      </span>
    </button>
  );
}
