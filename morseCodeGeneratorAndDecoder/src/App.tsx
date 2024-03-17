import { useState } from "react";
import { InputBox } from "./components";
import ToEnglish from "./hooks/ToEnglish";
import ToMorse from "./hooks/ToMorse";
function App() {
  const [text, setText] = useState("");
  const [from, setFrom] = useState("morse");
  const [to, setTo] = useState("english");
  const [convertedText, setConvertedText] = useState("");

  const convert = (text) => {
    if (from === "english" && to === "morse") {
      console.log("from english to morse");
      const val = ToMorse(text)?.contents?.translated;
      setConvertedText(val | null);
    } else {
      console.log("from morse to english");
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-black text-white flex justify-center flex-wrap">
        <div className="w-full flex justify-center align-middle">
          <div className="w-full max-w-md bg-gray-500 rounded-2xl flex justify-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <InputBox
                label={from}
                text={text}
                onTextChange={(e) => {
                  setText(e);
                  console.log(text);
                }}
              />

              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={() => {
                    setFrom(to);
                    setTo(from);
                    setText("");
                    setConvertedText("");
                  }}
                >
                  SWAP
                </button>
              </div>

              <InputBox
                label={to}
                text={convertedText}
                onTextChange={(e) => {}}
                isEnabled
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={(e) => {
                  console.log("hello");
                }}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
