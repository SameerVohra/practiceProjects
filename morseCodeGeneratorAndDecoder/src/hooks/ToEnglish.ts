import { useEffect, useState } from "react";

interface EnglishData {
  contents: {
    translated: string;
  };
}

function ToEnglish(morse: string) {
  const [data, setData] = useState<EnglishData | null>(null);
  useEffect(() => {
    fetch(
      `https://api.funtranslations.com/translate/morse2english.json?text=${morse}`,
    )
      .then((res) => res.json())
      .then((res: EnglishData) => {
        setData(res);
      });
  }, [morse]);

  return data;
}

export default ToEnglish;
