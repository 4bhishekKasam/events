import React from "react";
import Button from "@material-ui/core/Button";
import Ticket from "../../resources/images/icons/ticket.png";

export default function MyButtons(props) {
  return (
    <div>
      <Button
        size="small"
        href={props.href}
        variant="contained"
        style={{
          background: props.bck,
          color: props.color
        }}
      >
        <img src={Ticket} className="iconImage" alt="IconButton" />
        {props.text}
      </Button>
    </div>
  );
}
