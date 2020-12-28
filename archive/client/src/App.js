import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

function App() {
  // eslint-disable-next-line
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    console.log(socket)
    // socket.on("FromAPI", data => {
    //   console.log("log1")
    //   setResponse(data);
    //   console.log("log2")
    // });
  }, []);

  console.log("log")

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}

export default App;