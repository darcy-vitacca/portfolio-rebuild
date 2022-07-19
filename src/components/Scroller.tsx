// import styled, { keyframes } from "styled-components";
// import { devices } from "../../../styles/device";

// export const Scroller = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

// const TextMovement = keyframes`
//   0% {
//     transform: translate3d(0, 0, 0);
//   }
//   100% {
//     transform: translate3d(-50%, 0, 0);
//   }
// `;
// export const ScrollerContainer = styled.div`
//   margin: 30px 0;
//   background-color: ${({ theme }) => theme.colors.green};
//   * {
//     background-color: ${({ theme }) => theme.colors.green};
//   }
//   height: 80px;
//   width: 100%;
//   white-space: nowrap;
//   overflow: hidden;
//   display: inline-block;
//   @media ${devices.tabletL} {
//     width: 100%;
//   }
// `;

// export const ScrollerText = styled.h2`
//   text-transform: uppercase;
//   font-style: italic;
//   border-bottom: 2px solid black;
//   padding: 25px 2px 0 2px;
//   display: inline-block;
//   font-size: ${({ theme }) => theme.font.size.medium};
//   animation: ${TextMovement} 15s linear infinite;
// `;

//TODO add live git feed?
export const AboutTextScroller = () => {
  return (
    <div className="inline-block w-full whitespace-nowrap">
      <div className=" my-2 bg-[#A8FEB6] h-[40px] inline-block w-full whitespace-nowrap ">
        <h2 className="inline-block w-full italic uppercase border border-b-2 border-black font-2xl whitespace-nowrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, orci
          purus aliquet arcu facilisi., orci purus aliquet arcu facilisi. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Tortor, orci purus
          aliquet arcu facilisi.
        </h2>
      </div>
    </div>
  );
};
