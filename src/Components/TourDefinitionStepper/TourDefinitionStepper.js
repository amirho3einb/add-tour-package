import { useState } from "react";
import TourDefinitionFormFirstStep from "./TourDefinitionFormFirstStep";

const TourDefinitionStepper = () => {
  const [stepTab, setStepTab] = useState(0);

  const formRenderHandler = () => {
    switch (stepTab) {
      case 0: {
        return <TourDefinitionFormFirstStep />;
      }
      case 1: {
        return <div>step 2</div>;
      }
      case 2: {
        return <div>step 3</div>;
      }
      case 3: {
        return <div>step 4</div>;
      }
      case 4: {
        return <div>step 5</div>;
      }
      default: {
        return;
      }
    }
  };
  return (
    <div className="p-5">
      <div className="mx-4 p-4">
        <div className="flex items-center">
          <div
            className={`flex items-center relative cursor-pointer ${
              stepTab === 0
                ? "text-white"
                : stepTab > 0
                ? "text-teal-600"
                : "text-gray-500"
            }`}
            onClick={() => setStepTab(0)}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                stepTab === 0
                  ? "border-teal-600 bg-teal-600"
                  : stepTab > 0
                  ? "border-teal-600 bg-white"
                  : "border-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepTab === 0 ? "text-teal-600" : "text-gray-500"
              }`}
            >
              Personal
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepTab > 0 ? "border-teal-600" : "border-gray-300"
            }`}
          ></div>
          <div
            className={`flex items-center relative cursor-pointer ${
              stepTab === 1
                ? "text-white"
                : stepTab > 1
                ? "text-teal-600"
                : "text-gray-500"
            }`}
            onClick={() => setStepTab(1)}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                stepTab === 1
                  ? "border-teal-600 bg-teal-600"
                  : stepTab > 1
                  ? "border-teal-600 bg-white"
                  : "border-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepTab === 1 ? "text-teal-600" : "text-gray-500"
              }`}
            >
              Personal 1
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepTab > 1 ? "border-teal-600" : "border-gray-300"
            }`}
          ></div>
          <div
            className={`flex items-center relative cursor-pointer ${
              stepTab === 2
                ? "text-white"
                : stepTab > 2
                ? "text-teal-600"
                : "text-gray-500"
            }`}
            onClick={() => setStepTab(2)}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                stepTab === 2
                  ? "border-teal-600 bg-teal-600"
                  : stepTab > 2
                  ? "border-teal-600 bg-white"
                  : "border-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepTab === 2 ? "text-teal-600" : "text-gray-500"
              }`}
            >
              Personal 2
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepTab > 2 ? "border-teal-600" : "border-gray-300"
            }`}
          ></div>
          <div
            className={`flex items-center relative cursor-pointer ${
              stepTab === 3
                ? "text-white"
                : stepTab > 3
                ? "text-teal-600"
                : "text-gray-500"
            }`}
            onClick={() => setStepTab(3)}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                stepTab === 3
                  ? "border-teal-600 bg-teal-600"
                  : stepTab > 3
                  ? "border-teal-600 bg-white"
                  : "border-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepTab === 3 ? "text-teal-600" : "text-gray-500"
              }`}
            >
              Personal 3
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepTab > 3 ? "border-teal-600" : "border-gray-300"
            }`}
          ></div>
          <div
            className={`flex items-center relative cursor-pointer ${
              stepTab === 4
                ? "text-white"
                : stepTab > 4
                ? "text-teal-600"
                : "text-gray-500"
            }`}
            onClick={() => setStepTab(4)}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                stepTab === 4
                  ? "border-teal-600 bg-teal-600"
                  : stepTab > 4
                  ? "border-teal-600 bg-white"
                  : "border-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepTab === 4 ? "text-teal-600" : "text-gray-500"
              }`}
            >
              Personal 4
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4">{formRenderHandler()}</div>
    </div>
  );
};

export default TourDefinitionStepper;
