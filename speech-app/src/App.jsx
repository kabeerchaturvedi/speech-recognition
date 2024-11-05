import "./App.css";
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const App = () => {
  const [textCopy, setTextCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textCopy);
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening = () => SpeechRecognition.stopListening();
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div>
      <h2>Speech to Text Converter</h2>
      <br />
      <p>Hook that is converting speech from audio to microphone</p>
      <div className="main-content" onClick={() => setTextCopy(transcript)}>
        {transcript}
      </div>
      <div className="btn-style">
        <button onClick={setCopied}>{isCopied ? "Yes! 👍" : "Nope! 👎"}</button>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={stopListening}>Stop Listening</button>
      </div>
    </div>
  );
};

export default App;
