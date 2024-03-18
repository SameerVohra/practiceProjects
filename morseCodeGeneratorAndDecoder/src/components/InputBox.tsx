import { useId } from "react";

interface InputBoxProps {
  label: string;
  isEnabled?: boolean;
  onTextChange: (text: string) => void;
  text: string;
  placeholder: string;
}

function InputBox({
  label,
  isEnabled = false,
  onTextChange,
  text,
  placeholder,
}: InputBoxProps) {
  const strId = useId();
  return (
    <>
      <div className="bg-black p-5 rounded-2xl flex flex-col ">
        <div className="bg-black p-5 rounded-2xl flex flex-col justify-center items-center">
          <label
            htmlFor={strId}
            className="text-white inline-block text-center mb-2 font-bold text-2xl"
          >
            {label}
          </label>
          <input
            id={strId}
            type="text"
            className="outline-none bg-yellow-50 p-2 text-black text-center"
            placeholder={placeholder}
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
