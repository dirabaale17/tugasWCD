import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Experience = () => {
  const data = [
    {
      id: 1,
      title: "Amaranthy",
      path: "",
      skill: ["Nail Art", "Manicures", "customer service"],
    },
    {
      id: 2,
      title: "Luxcia Studio",
      path: "",
      skill: ["Nail Art", "Editing", "Media Trends"],
    },
    {
      id: 3,
      title: "Inspirator Kebaikan by Mizan Amanah-Internship",
      path: "",
      skill: ["Design", "Content Editor", "Social Media"],
    },
  ];

  return (
    <section className="card-contet" id="work">
      <div className="row-content-left">
        <h1 className="title">Recent Work</h1>
      </div>
      <div className="row-content-right experience">
        {data.map((items, index) => {
          return (
            <figure key={index} className="card-experience">
              <section>
                <h1>{items.title}</h1>
                <div>
                  {items.skill.map((item, idx) => (
                    <p key={idx}>
                      {item}
                      <span>-</span>
                    </p>
                  ))}
                </div>
              </section>
              <section>
                <button>
                  <MdArrowOutward />
                </button>
              </section>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
