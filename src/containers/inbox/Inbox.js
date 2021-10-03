import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { io } from "socket.io-client";
import { Friend } from "./components/Friend";
import { ChatWindow } from "./components/ChatWindow";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const URL = process.env.REACT_APP_SERVER;
const GET_URL = process.env.REACT_APP_SERVER + "/add/chats";

export const Inbox = (props) => {
  const [addFrndInp, setAddFrndInp] = useState("");
  const [actives, setActives] = useState([]);
  const socket = useRef();

  useEffect(() => {
    socket.current = io(URL);
    socket.current.emit("addUser", {
      user_name: props.user.user_name,
      user_id: props.user._id,
    });
    socket.current.on("getUsers", (users) => {
      setActives(users);
    });
  }, [props.user]);

  const path = window.location.pathname.split("/").slice(2, 4);

  const [chat_window, setChat_windoe] = useState("hidden");
  const [chat_list, setChat_list] = useState("flex");
  useEffect(() => {
    if (path[0] === "inbox" && path[1]) {
      setChat_windoe("flex");
      setChat_list("hidden");
    } else {
      setChat_windoe("hidden");
      setChat_list("flex");
    }
  }, [path]);

  const addFriend = async (e) => {
    e.preventDefault();
    if (addFrndInp) {
      console.log(addFrndInp);
      const chat = await addChat(addFrndInp);
      if (chat) {
        window.location.reload();
      }
    }
  };

  const logout = () => {
    Cookies.remove("token");
  };

  return (
    <>
      <section className="flex sm:pt-16 h-screen sm:pb-2 justify-center">
        <div className="flex h-full w-auto sm:border-2">
          <div
            className={
              chat_list +
              " chat_list z-50 sm:z-0 h-screen sm:h-auto w-screen sm:w-auto bg-background-701 sm:border-r-2 sm:flex flex-col"
            }
          >
            <div className="fixed z-50 w-full font-semibold sm:relative flex justify-between bg-background-801 text-light-101 px-3 py-3">
              <Link to={process.env.PUBLIC_URL + "/profile/"}>
                <div className="h-6 w-6 relative rounded-full bg-white"></div>
              </Link>
              <h3>{props.user.user_name}</h3>
              <Link to={process.env.PUBLIC_URL + "/"}>
                <LogoutIcon
                  className="cursor-pointer"
                  onClick={() => logout()}
                />
              </Link>
            </div>

            <div className="overflow-y-auto pt-12 sm:pt-0">
              {props.user.chats_id.map((val, ind) => {
                return <Friend key={ind} data={val} actives={actives} />;
              })}
              <div className="flex flex-col m-1">
                <input
                  className="rounded-sm"
                  type="text"
                  placeholder="Enter friend's user name"
                  value={addFrndInp}
                  onChange={(e) => setAddFrndInp(e.currentTarget.value)}
                />
                <button
                  className="mt-1 bg-background-301 text-light-101"
                  onClick={(e) => {
                    addFriend(e);
                  }}
                >
                  Add friend
                </button>
              </div>
            </div>
          </div>
          <div
            className={
              chat_window +
              " sm:flex h-screen sm:h-auto z-50 sm:z-0 flex-col w-screen sm:w-96 bg-background-701"
            }
          >
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/inbox/"}
                render={() => {
                  return (
                    <>
                      <span className="flex justify-center text-6xl mt-16 text-primary-101 p-3 opacity-50 cursor-default">
                        open a chat
                      </span>
                    </>
                  );
                }}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/inbox/:id"}
                render={(props) => {
                  return (
                    <>
                      <ChatWindow chat_id={props.match.params.id} />
                    </>
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </section>
    </>
  );
};

const addChat = async (chat_id) => {
  const token = Cookies.get("token");
  try {
    const res = await fetch(GET_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        user_name: chat_id,
      }),
    });
    const messages = await res.json();
    return messages;
  } catch (err) {
    console.log(err);
    alert("user not found");
  }
};