import React, { useState } from "react";
import { FaRegEye, FaDownload, FaFilePdf } from "react-icons/fa";

type Props = {
  pdf: string;
  thumbnail: string;
  title?: string;
};

const PdfModalButton: React.FC<Props> = ({ pdf, thumbnail, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center min-h-[300px]">
        <div
          className={`
            relative w-64 h-64 rounded-xl shadow-lg overflow-hidden flex flex-col justify-end
            bg-lightBg dark:bg-darkBg
          `}
          style={
            thumbnail
              ? {
                  backgroundImage: `url(${thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : {}
          }
        >
          {!thumbnail && (
            <div className="absolute inset-0 flex items-center justify-center text-7xl text-accent opacity-90">
              <FaFilePdf />
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 flex flex-col">
            <span className="text-white font-semibold text-md truncate drop-shadow">
              {title || "Documentation"}
            </span>
            <div className="flex gap-2 mt-2">
              <button
                title="Voir"
                className={`
                  bg-lightText20 dark:bg-darkText20
                  hover:bg-lightText60 dark:hover:bg-darkText60
                  text-lightText dark:text-darkText
                  rounded p-2 transition
                `}
                onClick={() => setOpen(true)}
              >
                <FaRegEye />
              </button>
              <a
                title="Télécharger"
                href={pdf}
                download
                className={`
                  bg-lightText20 dark:bg-darkText20
                  hover:bg-lightText60 dark:hover:bg-darkText60
                  text-lightText dark:text-darkText
                  rounded p-2 transition
                `}
                onClick={e => e.stopPropagation()}
              >
                <FaDownload />
              </a>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className={`
              relative rounded-lg shadow-2xl p-4 w-[90vw] max-w-4xl flex flex-col items-center
              bg-lightBg dark:bg-darkBg
              text-lightText dark:text-darkText
            `}
            onClick={e => e.stopPropagation()}
          >
            <a
              href={pdf}
              download
              className={`
                absolute top-4 left-4
                px-3 py-1 rounded font-semibold shadow transition
                bg-lightText20 dark:bg-darkText20
                text-lightText dark:text-darkText
                hover:bg-lightText60 dark:hover:bg-darkText60
              `}
            >
              Télécharger PDF
            </a>
            <button
              className={`
                absolute top-4 right-4 text-2xl font-bold transition
                text-lightText80 dark:text-darkText80
                hover:text-accent
              `}
              onClick={() => setOpen(false)}
              aria-label="Fermer"
            >
              ✖
            </button>
            <iframe
              src={pdf}
              title={`Documentation PDF ${title || ""}`}
              className="w-full h-[70vh] mt-10 rounded border-none"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PdfModalButton;