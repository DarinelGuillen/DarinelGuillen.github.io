// Path: C:\Users\darin\Documents\react-vite-shadcn-ui-template\src\pages\Home\AboutMe.tsx
import React from "react";
import data from "@data/data.json";

const AboutMe: React.FC = () => {
  const { summary, note } = data.resume.professional_summary;

  return (
    <section className="flex items-center justify-center w-screen h-screen bg-5dar text-whi">
      <div className="text-center max-w-screen-md">
        <p className="text-[3rem] leading-relaxed font-cor">
          {summary}
          {note}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
