import "./styles.css";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Hi, Welcome</h1>
      <h4 style={{ color: "pink" }}>
        Lottie is a versatile animation file format that allows for smooth and
        interactive animations on the web and in mobile applications.
      </h4>
      <Lottie animationData={groovyWalkAnimation} />
    </div>
  );
}
