import React, { useState } from "react";

function Car({ information }) {
  const [renderDetail, setRenderDetail] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const next = (page) => {
    setCurrentPage(currentPage === page - 1 ? 0 : currentPage + 1);
  };

  const prev = (page) => {
    setCurrentPage(currentPage === page - 1 ? 0 : currentPage - 1);
  };
  const length = information.images.length;
  return (
    <div>
      <div>
        <div
          className="hover:p-[15%] bg-neutral-900 hover:duration-500 mx-5 my-5 rounded-sm text-white"
          onMouseOver={() => {
            setRenderDetail(true);
          }}
          onMouseOut={() => {
            setRenderDetail(false);
          }}
        >
          <div
            class="w-[5%]"
            onClick={() => {
              prev(length);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </div>

          {information.images.map((item, index) => {
            return (
              <div key={index} className="mx-[7%]">
                {index === currentPage && (
                  <img
                    src={item}
                    alt={"Image Api not working"}
                    className="w-30 h-30"
                  />
                )}
              </div>
            );
          })}
          <div
            className="flex justify-end"
            onClick={() => {
              next(length);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
          {renderDetail ? (
            <div className="bg-neutral-100 mx-[25%] my-2 text-black">
            <div className="mx-8"> 
              <div className="">Car information</div>
              <div>ID: {information.id}</div>
              <div className="flex">Car Name: {information.carName}</div>
              <div>Price: {information.carPrice}</div>
            </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Car;
