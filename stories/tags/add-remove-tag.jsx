import React, { useState } from "react";

const ActionButton = ({ display, colorClass, icon, onClick }) => {
  const opacityClass = display ? `o-100` : `o-0`;

  return (
    <button
      className={`ma4 pa2 f-5 bg-transparent b--transparent fw9 opacity-animate ${colorClass} ${opacityClass}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default ({ name }) => {
  const READY = "READY";
  const ADDED = "ADDED";
  const REMOVED = "REMOVED";

  const [expanded, setExpanded] = useState(false);
  const [tagState, setTagState] = useState(READY);

  const doExpand = () => setExpanded(true);
  const doContract = () => setExpanded(false);

  const doAdd = () => setTagState(ADDED);
  const doRemove = () => setTagState(REMOVED);

  const containerBgClass = tagState === ADDED ? "bg-light-green" : "bg-white";
  const nameClass = tagState === REMOVED ? "strike" : "";

  return (
    <div
      className="flex flex-column h-100vh w-100 justify-center items-center"
      onMouseEnter={doExpand}
      onMouseLeave={doContract}
    >
      <div
        className={`pointer background-color-animate flex flex-row justify-between items-center shadow-3 br4 ${containerBgClass}`}
      >
        {
          <ActionButton
            icon="+"
            colorClass="green"
            display={expanded}
            onClick={doAdd}
          />
        }
        <p className={`ma4 pa4 f2 ${nameClass}`}>{name}</p>
        {
          <ActionButton
            icon="-"
            colorClass="light-silver"
            display={expanded}
            onClick={doRemove}
          />
        }
      </div>
    </div>
  );
};
