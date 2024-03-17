import { useEffect, useState } from "react";

interface MorseData {
  contents: {
    translated: string;
  };
}

function ToMorse(text: string): MorseData | null {
  const [data, setData] = useState<MorseData | null>(null);

  useEffect(() => {
    fetch(`https://api.funtranslations.com/translate/morse.json?text=${text}`)
      .then((res) => res.json())
      .then((res: MorseData) => setData(res))
      .catch((error) => {
        console.error("Error fetching Morse data:", error);
      });
  }, [text]);

  return data;
}

export default ToMorse;
