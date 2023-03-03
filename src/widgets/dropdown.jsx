import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState, createElement } from "react";
import { Typography } from "@material-tailwind/react";

export function Dropdown(props) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const { cols, itemType, options, name, showClear, showApply, title, officon, onicon, className } = props;
  let i = 0, elem, children = [];
  return (
    <div key={name} className={`p-0 shadow-[0_15px_60px_rgba(166,166,166,0.2)] ${className}`}>
      <button
        id={`dropdown${name}`}
        onClick={() => setShow(!show)}
        className={`w-full relative border text-[#4d4d4d] font-bold bg-white hover:bg-white/50 rounded text-[18px] h-[48px] text-center flex items-center justify-between px-[20px] py-4 ${show ? "z-20" : "z-0"} ${className}`}
        type="button"
        >
        <Typography className="font-bold text-[#4d4d4d] text-[18px]">{title}</Typography>&nbsp;
        { show === false
          ? officon !== undefined ?  officon  : <ChevronDownIcon className="w-4 h-4" />
          : onicon !== undefined ?  onicon  : <ChevronUpIcon className="w-4 h-4" />}
      </button>

      { show === true ?
        <div className="w-[100vw] h-full z-10 fixed inset-0" onClick={() => setShow(false)}></div>
        : "" }

      <div
        className={`border z-20 bg-white rounded-b absolute transition ${
          show === false ? "opacity-0 overflow-hidden h-[0px]" : "opacity-100"
        }`}
        >
        <div className="p-2 text-gray-700">
          <table id={`list-${name}`} className={`w-full table-auto border-spacing-0`}>
            <tbody>
              { itemType === "check" ? (() => {
                children[0] = (
                  <td key="all">
                    <div className="flex items-center rounded px-4 h-[56px] m-0 hover:bg-gray-100">
                      <input id={`check-${name}-all`} type="checkbox" value="all" name="all" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                      <label htmlFor={`check-${name}-all`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                    </div>
                  </td>
                );
                i = 1;
              })() : "" }
              { options.map((value, index) => {
                if (itemType === "radio") {
                  children[i % cols] = (
                    <td key={value} >
                      <div className="flex items-center rounded px-4 h-[56px] m-0 hover:bg-gray-100">
                        <input id={`radio-${name}-${index}`} type="radio" value={value} name={name} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label htmlFor={`radio-${name}-${index}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{value}</label>
                      </div>
                    </td>
                  );
                } else if (itemType === "check") {
                  children[i % cols] = (
                    <td key={value} >
                      <div className="flex items-center rounded px-4 h-[56px] m-0 hover:bg-gray-100">
                        <input id={`check-${name}-${index}`} type="checkbox" value={value} name={name} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label htmlFor={`check-${name}-${index}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{value}</label>
                      </div>
                    </td>
                  );
                } else {
                  children[i % cols] = (
                    <td key={value} >
                      <div className="flex items-center rounded px-4 h-[56px] m-0 hover:bg-gray-100">
                        <a href="#">
                          <Typography className="text-[16px] font-medium text-gray-900">
                            {value}
                          </Typography>
                        </a>
                      </div>
                    </td>
                  );
                }
                i ++;
                if (i % cols === 0) {
                  elem = createElement("tr", {key: "row" + i}, ...children);
                  return elem;
                }
              }) }
            </tbody>
          </table>
        </div>

        <div className="flex justify-between px-[1rem] pb-[1rem] gap-2 text-sm text-gray-700">
          { showClear === true
            ? <button className={`w-[105px] h-[44px] bg-white rounded border hover:bg-gray-100`}><Typography className="text-gray-500 font-bold">Clear all</Typography></button>
            : "" }
          { showApply === true
            ? <button className={`w-[91px] h-[44px] bg-darkred-600 rounded border hover:bg-darkred-600/80`}><Typography className="text-white font-bold">Apply</Typography></button>
            : "" }
        </div>
      </div>
    </div>
  );
}