import { useEffect, useState } from "react";

function ToMorse(text: string) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`https://api.funtranslations.com/translate/morse.json?text=${text}`)
      .then((res) => res.json())
      .then((res) => setData(res.contents.text))
      .catch((error) => {
        console.error("Error fetching Morse data:", error);
      });
  }, [text]);

  return data;
}

export default ToMorse;
