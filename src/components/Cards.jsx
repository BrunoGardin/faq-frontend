import React, { useState } from "react";
import { BsCaretDownFill, BsLock } from "react-icons/bs";

export function Modulo({ props }) {
  const [ativo, setAtivo] = useState(null);

  const toggleBlock = (key) => {
    setAtivo(ativo === key ? null : key);
  };

  return (
    <>
      {props.map((card, index) => (
        <div key={index} className="w-197 mx-auto flex flex-col mt-5" id={card.tag}>
          <h2 className="text-poupa border-b-3 text-2xl/10 cond">
            <b>{card.title}</b>
          </h2>
          {card.questions.map((question, questionIndex) => {
            const key = `${index}-${questionIndex}`;
            const isAtivo = ativo === key;
            return (
              <div key={questionIndex} className="rounded-lg border-gray-200 border mt-2 shadow-[-4px_0px_0px_rgba(213,3,4,1)]">
                <div onClick={() => toggleBlock(key)} className={isAtivo ? "hover:cursor-pointer flex flex-row justify-between items-center bg-gray-100 p-4 rounded-t-lg" : "hover:cursor-pointer flex flex-row justify-between items-center p-4"}>
                  <h3>
                    <b>{question.subtitle}</b>
                  </h3>
                  <BsCaretDownFill className={isAtivo ? "text-red-600 duration-200 rotate-180" : "text-red-600 duration-200"} />
                </div>
                <div className={isAtivo ? "p-4 duration-200" : "h-0 overflow-hidden duration-200"}>
                  <p>{question.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}
