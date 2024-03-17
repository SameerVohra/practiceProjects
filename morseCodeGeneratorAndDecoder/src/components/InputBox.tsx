import { useId } from "react";

interface InputBoxProps {
  label: string;
  isEnabled?: boolean;
  onTextChange: (text: string) => void;
  text: string;
}

function InputBox({
  label,
  isEnabled = false,
  onTextChange,
  text,
}: InputBoxProps) {
  const strId = useId();
  return (
    <>
      <div className="bg-black p-5 rounded-2xl flex">
        <div className="w-1/2">
          <label htmlFor={strId} className="text-white inline-block">
            {label}
          </label>
          <input
            id={strId}
            type="text"
            className="outline-none bg-yellow-50 p-2 text-black"
            placeholder="Enter text here"
            value={text}
            disabled={isEnabled}
            onChange={(e) => {
              onTextChange(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
export default InputBox;
