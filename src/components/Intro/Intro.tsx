import { useEffect, useState } from "react";
import "../Intro/Intro.scss";

export default function Intro() {
  const [typedWord, setTypedWord] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0)
  useEffect(() => {
    const outputText = [
      "Jean Le Roux  ",
      "a Full Stack Developer  ",
      "a Cloud Guru  ",
    ];
    const timeout = setTimeout(() => {
      if(typedWord.length === outputText[selectedIndex].length){
        setTypedWord("")
        if(selectedIndex<2){
          let newIndex = selectedIndex +1
          setSelectedIndex(newIndex)
        }
        else{
          setSelectedIndex(0);
        }
        
      }
      else{
        setTypedWord(outputText[selectedIndex].slice(0, typedWord.length + 1));
      }
      
    }, 250);
    return () => clearTimeout(timeout);
  }, [typedWord, selectedIndex]);

  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Welcome</h1>
        <h2 className="description">
          I am <span className="text-to-type">{typedWord}</span>
        </h2>
      </div>
    </div>
  );
}
