import { useEffect, useState } from "react";

function ToEnglish(morse: string) {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch(
      `https://api.funtranslations.com/translate/morse2english.json?text=${morse}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.contents.translated);
      });
  }, [morse]);

  return data;
}

export default ToEnglish;
