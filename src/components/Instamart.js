import { useState } from "react";

const Section = ({ title, discription, isVisible, onShow, hide }) => {
  return (
    <div className="border border-black">
      <h3 className="text-3xl">{title}</h3>
      {isVisible ? (
        <>
          <button onClick={hide} className="underline cursor-pointer">
            Hidden
          </button>
          <p>{discription}</p>
        </>
      ) : (
        <button onClick={onShow} className="underline cursor-pointer">
          Show
        </button>
      )}

      {/* {isVisible && } */}
    </div>
  );
};

const Instamart = () => {
  const [isHidden, setisHidden] = useState("about");
  return (
    <>
      <h1>this is instamart load by lazy loading and suspence </h1>
      <Section
        title={"about"}
        discription={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rational"
        }
        isVisible={isHidden === "about"}
        onShow={() => {
          setisHidden("about");
        }}
        hide={() => {
          setisHidden("");
        }}
      />
      <Section
        title={"careers"}
        discription={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rational"
        }
        isVisible={isHidden === "careers"}
        onShow={() => {
          setisHidden("careers");
        }}
        hide={() => {
          setisHidden("");
        }}
      />
      <Section
        title={"information"}
        discription={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rational"
        }
        isVisible={isHidden === "information"}
        onShow={() => {
          setisHidden("information");
        }}
        hide={() => {
          setisHidden("");
        }}
      />
    </>
  );
};

export default Instamart;
