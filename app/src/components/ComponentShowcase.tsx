import React, { useState } from "react";
import { CodeHighlight } from "./CodeHighlight";
import toast from "react-hot-toast";
import ComponentPreview from "./ComponentPreview";

type ComponentShowcaseProps = {
  code: string;
  name: string;
  description: string;
};

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  code,
  name,
  description,
}) => {
  const [userView, setUserView] = useState<string | undefined>();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    const toastLoader = toast.loading("Copying...");
    setIsCopied(true);
    setTimeout(() => {
      toast.dismiss(toastLoader);
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className=" w-full lg:w-full ml-0 bg-slate-900 lg:p-4">
        <div className="text-white text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold underline py-3 animate-text text-orange-300">
            {name}
          </h2>
          <p className=" text-2xl sm:text-2xl lg:text-3xl md:text-md mb-6 bg-clip-text animate-text text-purple-400 font-bold text-transparent lg:bg-gradient-to-r lg:from-purple-400 lg:via-pink-500 lg:to-red-500 lg:animate-move">
            {description}
          </p>
        </div>

        <div className="text-white rounded-lg">
          <div className="">
            <div className="flex flex-col   md:flex-row gap-4 mb-4">
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center hover:bg-blue-700 transition"
                  onClick={() => setUserView("Code")}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M12 4h.01M4 12h.01M20 12h.01M4.93 4.93h.01M19.07 4.93h.01M4.93 19.07h.01M19.07 19.07h.01"
                    />
                  </svg>
                  Code
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center hover:bg-green-700 transition"
                  onClick={() => setUserView("Preview")}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553 4.553a1 1 0 01-1.414 1.414L15 12.828l-3.293 3.293a1 1 0 01-1.414-1.414L13 10H9a1 1 0 010-2h6a1 1 0 010 2z"
                    />
                  </svg>
                  Preview
                </button>

                <button
                  className="px-4 py-2  bg-yellow-500 text-white rounded-md flex items-center justify-end hover:bg-yellow-700 transition"
                  onClick={handleCopy}
                >
                  {isCopied ? (
                    <span className="inline-flex items-center">
                      <svg
                        className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                      <span className="ml-2">Copied!</span>
                    </span>
                  ) : (
                    <span className="flex justify-end items-center">
                      <svg
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                      </svg>
                      <span className="ml-2">Copy</span>
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="w-full lg:w-full overflow-hidden hover:overflow-auto rounded h-[420px] text-white">
              {userView === "Preview" ? (
                <>
                  <ComponentPreview componentName={name} />
                </>
              ) : (
                <div>
                  <CodeHighlight code={code} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentShowcase;
