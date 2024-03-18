import { useRef, useState, useEffect } from "react";
import { InputBox } from "./components";

function App() {
  const [text, setText] = useState("");
  const [from, setFrom] = useState("English");
  const [to, setTo] = useState("Morse");
  const [convertedText, setConvertedText] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const passRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const copyToClipboard = () => {
      if (copied) {
        passRef.current?.select();
        window.navigator.clipboard.writeText(convertedText);
      }
      setCopied(false);
    };

    copyToClipboard();
  }, [convertedText]);

  const ToMorse = (text: string) => {
    fetch(`https://api.funtranslations.com/translate/morse.json?text=${text}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.contents.translated === "") setError("INVALID TEXT");
        else setConvertedText(res.contents.translated);
      })
      .catch((error) => setError(error));
  };

  const ToEnglish = (text: string) => {
    fetch(
      `https://api.funtranslations.com/translate/morse2english.json?text=${text}`,
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.contents.translated === "") setError("INVALID MORSE CODE");
        else setConvertedText(res.contents.translated);
      })
      .catch((error) => setError(error));
  };

  const convert = (text: string) => {
    if (from === "English" && to === "Morse") {
      console.log("from english to morse");
      ToMorse(text);
    } else {
      console.log("from morse to english");
      ToEnglish(text);
    }
  };

  return (
    <>
      <div
        className="h-screen w-full text-white flex justify-center items-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="w-full flex justify-center align-middle">
          <div className="w-full max-w-md bg-gray-500 rounded-2xl ">
            <form
              className="p-8 items-center"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <InputBox
                label={from}
                text={text}
                onTextChange={(e) => {
                  setText(e);
                  console.log(text);
                }}
                placeholder="Enter text"
              />
              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={() => {
                    setFrom(to);
                    setTo(from);
                    setText("");
                    setConvertedText("");
                    setError("");
                  }}
                >
                  SWAP
                </button>
              </div>{" "}
              <InputBox
                label={to}
                text={convertedText}
                onTextChange={(e) => {
                  console.log(e);
                }}
                isEnabled
                placeholder=""
                ref={passRef}
              />
              <div className="relative flex justify-between items-center w-full"></div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-3"
                onClick={() => {
                  convert(text);
                  setCopied(true);
                }}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()} and COPY
              </button>
              <div className="text-red-700 text-center text-2xl font-bold mt-2">
                {error}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
