import React, { useEffect, useRef, useState } from "react";
import  {CodeEditor}  from "../Components/CodeEditor";
import { SideBar } from "../Components/SideBar";
import { EdiNav } from "../Components/EdiNav";
import useDisableZoom from "../Components/useDisableZoom";
import { initSocket } from "../connection/socket";
import ACTIONS from "../Actions";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import toast from "react-hot-toast";



const EditorPage = () => {

  useDisableZoom();

  const reactNavigate = useNavigate();
  const location = useLocation();
  const socketRef = useRef(null);
  const codeRef = useRef(null);
  const roomId = useParams();

  const [user, setUser] = useState([]);
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();

      console.log(location.state?.userName);

      socketRef.current.on("connect_error", (err) => {
        handleErrors(err);
      });

      socketRef.current.on("connect_failed", (err) => {
        handleErrors(err);
      });

      function handleErrors(err) {
        console.log("socket error", e);
        toast.error("Socket connection failed please try again later..");
        reactNavigate("/");
      }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId: roomId.roomId,
        username: location.state?.userName,
      });

      // when user jet Joined this function get triggered
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username, socketId }) => {
          // we are notifying client that new client Added...
          // we checking don't show new client . [new client add]

          
          if (username !== location.state?.userName) {
          
            toast.success(`${username} is joined room ..`);
            console.log(`${username} is joined room ..`);
          }
          
          setUser(clients);

          socketRef.current.emit(ACTIONS.SYNC_CODE,{
            code : codeRef.current,
            socketId,
          });
        }
      );

      // listening for disconnected

      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        toast.success(`${username} left the room.`);
        setUser((prev) => {
          return prev.filter((clients) => {
            clients.socketId != socketId;
          });
        });
      });
    };

    init();

    //cleaning function
    // important to clear listeners . because of memory leak
    return()=>{
       socketRef.current.disconnected();
       socketRef.current.off(ACTIONS.JOINED);
       socketRef.current.off(ACTIONS.DISCONNECTED);
    }

  }, []);


  if (!location.state) {
    return <Navigate to="/" />;
  }
  const [code, setCode] = useState("");

  const [language, setLanguage] = useState("cpp17");

  const [output, setOutput] = useState("click run to code");

  const [input, setInput] = useState("");
  


  return (
    <div className=" flex">
      <SideBar user={user} />

      <div className="w-full h-[100vh] ">
        <EdiNav
          language={language}
          setLanguage={setLanguage}
          code={code}
          setOutput={setOutput}
          input={input}
        />
        <CodeEditor
          language={language}
          code={code}
          setCode={setCode}
          output={output}
          input={input}
          setInput={setInput}
          socketRef={socketRef}
          roomId={roomId.roomId}
          onCodeChange={(code)=>{
            codeRef.current = code;
          }}
        />
      </div>
    </div>
  );
};

export default EditorPage;
