import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Hello & Welcome to LPL-Autonomous!🤖",
        2500,
        "I'm here to assist you with your banking & financial queries.",
        4000,
      ]}
      speed={50}
      style={{
        fontSize: "50px",
        color: "#07407b",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
