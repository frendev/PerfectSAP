import Image from "next/image";
import React from "react";
import error from "../public/assets/error.png";

function Modal(props: any) {
  let { showModal, closeModalHandler } = props;

  const okayHandler = (e: any) => {
    console.log(e.isPropagationStopped());
    e.stopPropagation();
    closeModalHandler();
  };

  return (
    <div
      onClick={closeModalHandler}
      className={
        showModal
          ? "text-xl top-0 left-0 bottom-0 right-0 fixed px-4 flex items-center justify-center z-50 transition ease-in-out duration-300 0translate-y-full"
          : "text-xl top-0 left-0 bottom-0 right-0 fixed px-4 flex items-center justify-center z-50 transition duration-300 -translate-y-full"
      }
    >
      <div>
        <div className="text-xl top-0 left-0 bottom-0 right-0 fixed px-4 flex items-center justify-center">
          <div className="bg-black opacity-50 w-full h-full absolute inset-0"></div>

          <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 z-50">
            <div className="flex flex-col items-center space-y-5">
              <Image src={error} width="100" height="100" />
              <div className="mt-4 md:mt-0 md:ml-6 text-center">
                <p className="font-bold">Something Went Wrong!</p>
                <p className="text-gray-700 mt-1">
                  Sorry, the email could not be sent! Please try again later.
                </p>
              </div>
            </div>
            <div className="text-center flex justify-center mt-4">
              <button
                type="button"
                onClick={(e) => okayHandler(e)}
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-lg mt-4
          md:mt-0 md:order-1"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
