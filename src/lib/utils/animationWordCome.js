import { gsap } from "gsap";
import { SplitText } from "@/plugins";

const animationWordCome = (wordAnim, staggerTime = 0.05) => {
  if (typeof window !== "undefined") {
    let tHero = gsap.context(() => {
      let word_come = wordAnim;
    try{
      var split_word_come = new SplitText(word_come, {
        type: "chars words",
        position: "absolute",
      });
    } catch(error) {
      console.warn("Failed to split text using GSAP's SplitText. Displaying text normally.", error);
      var split_word_come = ""
    }
      gsap.from(split_word_come.words, {
        duration: 1,
        x: 50,
        autoAlpha: 0,
        stagger: staggerTime,
      });
    });
    return () => tHero.revert();
  }
};

export default animationWordCome;
