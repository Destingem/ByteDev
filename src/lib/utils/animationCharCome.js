import { gsap } from "gsap";
import { SplitText } from "@/plugins";

const animationCharCome = (charAnim, staggerTime = 0.05) => {
  if (typeof window !== "undefined") {
    let tHero = gsap.context(() => {
      let char_come = charAnim;

     try{
      var split_char = new SplitText(char_come, { type: "chars, words" });
     } catch(error){
      console.warn("Failed to split text using GSAP's SplitText. Displaying text normally.", error);
      var split_char = ""
     }
      gsap.from(split_char.chars, {
        duration: 1,
        x: 70,
        autoAlpha: 0,
        stagger: staggerTime,
      });
    });
    return () => tHero.revert();
  }
};

export default animationCharCome;
