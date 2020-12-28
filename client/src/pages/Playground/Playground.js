import React, { useEffect } from "react";
import io from "socket.io-client";

let socket;

export const Playground = () => {
    const ENDPOINT = "http://localhost:4001";

    useEffect(() => {
        console.log("log1")
    
        socket = io(ENDPOINT);
    
        console.log(socket)
      }, []);

    return (
      <>
        <div className="play">
          Play!!!
        </div>
      </>
    );
};