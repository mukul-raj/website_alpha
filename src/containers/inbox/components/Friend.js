import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";

export const Friend = (props) => {
  var active = false;
  for (let i = 0; i < props.actives.length; i++) {
    active =
      props.actives[i].user_name === props.data.to_user_name ? true : false;
    if (active) {
      break;
    }
  }

  return (
    <>
      <Link to={props.data.chat_id} className="">
        <div ref={props.scrollRef?props.scrollRef:null} className="flex cursor-pointer mt-0.5 px-2 py-2 hover:bg-background-301 text-light-101">
          <div className="h-10 w-10 flex-shrink-0 relative rounded-full bg-light-301">
            {active ? (
              <>
                <div className="h-2.5 w-2.5 rounded-full absolute bottom-0 right-1 bg-green-400"></div>
              </>
            ) : (
              <></>
            )}
          </div>
          {[props.data.lastMsg].map((val, ind) => {
            return (
              <LastMsg
                key={ind}
                to_user_name={props.data.to_user_name}
                user_name={props.user_name}
                lastMsg={val}
                isSeen={props.data.seen}
              />
            );
          })}
        </div>
      </Link>
    </>
  );
};

const LastMsg = (props) => {
  return (
    <>
      <div className="pl-2 flex-grow w-20">
        <div className="flex justify-between">
          <h4 className="font-medium text-sm truncate">{props.to_user_name}</h4>
          <p className="text-xs text-light-401 truncate">
            {props.lastMsg
              ? props.lastMsg.time
                ? format(props.lastMsg.time)
                : ""
              : ""}
          </p>
        </div>
        {props.lastMsg ? (
          <div className="text-sm flex text-light-401">
            {props.lastMsg.name === props.user_name ? (
              <>
                {props.isSeen ? (
                  <DoneAllRoundedIcon fontSize="small" className="text-blue-500" />
                ) : (
                  <DoneRoundedIcon fontSize="small" />
                )}
              </>
            ) : (
              <></>
            )}
            <p className="truncate">{props.lastMsg.message}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
