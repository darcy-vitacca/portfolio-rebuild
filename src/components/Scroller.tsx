import Marquee from "react-fast-marquee";

export const AboutTextScroller = () => {
  return (
    <div className="scroll-container h-[45px]">
      <div className="h-[30px] border-b-2 border-black ">
        <Marquee
          speed={120}
          gradient={false}
          className="italic font-bold uppercase font-xl"
        >
          This is scrolling text. This is scrolling text. This is scrolling
          text. This is scrolling text. This is scrolling text. This is
          scrolling text. This is scrolling text. This is scrolling text. This
          is scrolling text. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 t. This is
          scrolling text. This is scrolling text. This is scrolling text. This
          is scrolling text. This is scrolling text. This is scrolling text.
          This is scrolling text. This is scrolling text. This is scrolling
          text. text. This is scrolling text.2 This is scrolling text. This is
          scrolling text. This is scrolling text. This is scrolling text. This
          is scrolling text. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
          2 t. This is scrolling text. This is scrolling text. This is scrolling
          text. This is scrolling text. This is scrolling text. This is
          scrolling text. This is scrolling text. This is scrolling text. This
          is scrolling text. This is scrolling text. 3 This is scrolling text.
          This is scrolling text. This is scrolling text. This is scrolling
          text. text. This is scrolling text. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
          3 3 3 3 3 3 3 3 3 3 This is scrolling text. This is scrolling text.
          This is scrolling text. This is scrolling text. This is scrolling
          text. This is scrolling text. This is scrolling text. This is
          scrolling text. This is scrolling text. This is scrolling text. This
          is scrolling text. This is scrolling text. This is scrolling text. 4
          This is scrolling text. This is scrolling text. This is scrolling
          text. This is scrolling text. This is scrolling text. This is
          scrolling text. This is scrolling text. This is scrolling text. This
          is scrolling text.
        </Marquee>
      </div>
    </div>
  );
};
