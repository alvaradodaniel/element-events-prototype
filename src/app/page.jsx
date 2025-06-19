"use client";
import { useState } from "react";

export default function HomePage() {
  const [text, setText] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState("");
  const [lastColor, setLastColor] = useState("");
  const [background, setBackground] = useState(
    "bg-gradient-to-r from-green-400 to-lime-300"
  );

  const ColorOption = ({ color }) => (
    <div
      className={`w-16 h-16 rounded-full shadow-2xl flex flex-col border-2 ${color}`}
      onMouseEnter={() => setBackground(color)}
      onMouseLeave={() =>
        setBackground("bg-gradient-to-r from-green-400 to-lime-300")
      }
      onClick={() => setLastColor(color)}
    />
  );

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen ${background}`}
    >
      <div className="w-full max-w-4xl bg-lime-200 rounded-2xl shadow-2xl flex flex-col h-[750px]">
        <div className="my-8 w-full max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4 max-w-md mx-auto">
            <div>
              <label className="block font-semibold mb-1">Text Field</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="Type something..."
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Dropdown</label>
              <select
                value={dropdown}
                onChange={(e) => setDropdown(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="mr-2"
                />
                Checkbox
              </label>
            </div>
            <div>
              <span className="block font-semibold mb-1">Radio Buttons</span>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="radio"
                  value="A"
                  checked={radio === "A"}
                  onChange={(e) => setRadio(e.target.value)}
                  className="mr-2"
                />
                A
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="radio"
                  value="B"
                  checked={radio === "B"}
                  onChange={(e) => setRadio(e.target.value)}
                  className="mr-2"
                />
                B
              </label>
            </div>
            <div className="mt-4 ">
              <strong>Form submitted!</strong>
              <div>
                Text: <i className="text-red-500">{text}</i>
              </div>
              <div>
                Dropdown: <i className="text-red-500">{dropdown}</i>
              </div>
              <div>
                Checkbox:{" "}
                <i className="text-red-500">
                  {checked ? "Checked" : "Unchecked"}
                </i>
              </div>
              <div>
                Radio: <i className="text-red-500">{radio}</i>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 w-max mx-auto">
          <div className="font-bold mx-8 text-2xl">Set Background color:</div>

          <div className="flex space-x-4 mx-8">
            <ColorOption color="bg-gradient-to-r from-blue-400 to-indigo-300" />
            <ColorOption color="bg-gradient-to-r from-red-400 to-pink-300" />
            <ColorOption color="bg-gradient-to-r from-yellow-400 to-orange-300" />
          </div>
        </div>
        <div className="space-y-4 w-max mx-auto">
          <div className="font-bold mx-8 text-2xl">Last Color Clicked:</div>

          <div className="flex space-x-4 w-max mx-auto">
            <div
              className={`w-16 h-16 rounded-full shadow-2xl flex flex-col border-2 ${lastColor}`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
