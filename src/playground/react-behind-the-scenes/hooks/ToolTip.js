import { useState, Fragment, useEffect } from "react";
import { Tooltip } from "reactstrap";

const TooltipItem = ({ innerText, tooltipText }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const toolTipOpenTipHandler = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  useEffect(() => {
    console.log(isTooltipOpen);

    console.log("TOOLTIP");
  }, [isTooltipOpen]);

  return (
    <Fragment>
      <span
        style={{ textDecoration: "underline", color: "cyan" }}
        id="tooltip-id"
      >
        {innerText}
      </span>
      <Tooltip
        placement="right"
        target="tooltip-id"
        isOpen={isTooltipOpen}
        toggle={toolTipOpenTipHandler}
      >
        {tooltipText}
      </Tooltip>
    </Fragment>
  );
};

export default TooltipItem;
