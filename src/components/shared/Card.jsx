// import React from "react";

// const Card = () => {
//   return (
//     <div className="relative w-72 h-32 bg-zinc-900 rounded-xl overflow-hidden font-sans text-base group isolate">
//       <div className="absolute inset-0.5 bg-zinc-800 rounded-[0.9375rem] z-20" />
//       <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-[calc(100%-1.3rem)] rounded-sm bg-gradient-to-b from-[#2eadff] via-[#3d83ff] to-[#7e61ff] z-40 transition-transform duration-300 group-hover:translate-x-0.5" />
//       <div className="relative z-50 text-[#32a6ff] px-5 pt-2.5 pb-1.5 font-medium text-[1.1rem] transition-transform duration-300 group-hover:translate-x-0.5">Welcome To Uiverse</div>
//       <div className="relative z-50 text-zinc-400 px-5 transition-transform duration-300 group-hover:translate-x-1">Contribute to Open Source UI Elements</div>
//       <div className="absolute left-1/2 top-1/2 w-[20rem] h-[20rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_closest-side,white,transparent)] opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-30" />
//       <div className="absolute left-1/2 top-1/2 w-[20rem] h-[20rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_closest-side,white,transparent)] opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10" />
//     </div>
//   );
// };

// export default Card;

// import React from "react";
// import styled from "styled-components";
// import Img from "../../assets/card.jpg";
// const Card = () => {
//   return (
//     <StyledWrapper>
//       <div className="notification">
//         <div className="notiglow" />
//         <div className="notiborderglow" />
//         <div className="notititle">Welcome To Uiverse</div>
//         <img src={Img} alt="" className="w-80 h-80" />
//         <div className="notibody">Contribute to Open Source UI Elements</div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .notification {
//     display: flex;
//     flex-direction: column;
//     isolation: isolate;
//     position: relative;
//     width: 18rem;
//     height: 8rem;
//     background: #29292c;
//     border-radius: 1rem;
//     overflow: hidden;
//     font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
//     font-size: 16px;
//     --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
//     --color: #32a6ff;
//   }

//   .notification:before {
//     position: absolute;
//     content: "";
//     inset: 0.0625rem;
//     border-radius: 0.9375rem;
//     background: #18181b;
//     z-index: 2;
//   }

//   .notification:after {
//     position: absolute;
//     content: "";
//     width: 0.25rem;
//     inset: 0.65rem auto 0.65rem 0.5rem;
//     border-radius: 0.125rem;
//     background: var(--gradient);
//     transition: transform 300ms ease;
//     z-index: 4;
//   }

//   .notification:hover:after {
//     transform: translateX(0.15rem);
//   }

//   .notititle {
//     color: var(--color);
//     padding: 0.65rem 0.25rem 0.4rem 1.25rem;
//     font-weight: 500;
//     font-size: 1.1rem;
//     transition: transform 300ms ease;
//     z-index: 5;
//   }

//   .notification:hover .notititle {
//     transform: translateX(0.15rem);
//   }

//   .notibody {
//     color: #99999d;
//     padding: 0 1.25rem;
//     transition: transform 300ms ease;
//     z-index: 5;
//   }

//   .notification:hover .notibody {
//     transform: translateX(0.25rem);
//   }

//   .notiglow,
//   .notiborderglow {
//     position: absolute;
//     width: 20rem;
//     height: 20rem;
//     transform: translate(-50%, -50%);
//     background: radial-gradient(circle closest-side at center, white, transparent);
//     opacity: 0;
//     transition: opacity 300ms ease;
//   }

//   .notiglow {
//     z-index: 3;
//   }

//   .notiborderglow {
//     z-index: 1;
//   }

//   .notification:hover .notiglow {
//     opacity: 0.1;
//   }

//   .notification:hover .notiborderglow {
//     opacity: 0.1;
//   }

//   .note {
//     color: var(--color);
//     position: fixed;
//     top: 80%;
//     left: 50%;
//     transform: translateX(-50%);
//     text-align: center;
//     font-size: 0.9rem;
//     width: 75%;
//   }
// `;

// export default Card;

import React from "react";

const Card = ({ children }) => {
  return (
    <aside className="bg-white text-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl font-mono border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <p className="text-sm text-gray-500">bash</p>
      </div>
      <div className="mt-4 whitespace-pre-wrap">{children}</div>
    </aside>
  );
};

export default Card;
