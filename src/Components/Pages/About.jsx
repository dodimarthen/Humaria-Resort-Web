import React from "react";
import { motion } from "framer-motion";
import splitStringUsingRegex from "../../utils/splitStringUsingRegex";

const text =
  "Haumaria was established in 2024, with its name inspired by our parents and grandparents. This family-owned inn is dedicated to honoring the kindness of parents who have cared for and raised their children. As a token of our appreciation, we have built and opened this place as a tourist attraction for both foreign and domestic visitors.";

const paragraphText =
  "Within this serene wonderland, you will find an architectural masterpiece and living space designed by us, which perfectly blends design and serenity. We aspire for every moment you spend with us to evoke a deep and new connection between soul and nature.";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const About = () => {
  const heading = "About Haumaria";
  const headingChars = splitStringUsingRegex(heading);
  const textChars = splitStringUsingRegex(text);
  const paragraphChars = splitStringUsingRegex(paragraphText);

  return (
    <div
      id="about"
      className="flex flex-col items-center h-full bg-custom-white dark:bg-[#191717] p-10 text-justify font-poppins"
    >
      <div className="w-full md:w-3/4 lg:w-1/2">
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.06 }}
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6"
        >
          {headingChars.map((char, index) => (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.01 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
        >
          {textChars.map((char, index) => (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.01 }}
          className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          {paragraphChars.map((char, index) => (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
