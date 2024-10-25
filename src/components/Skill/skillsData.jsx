
import React from "react";
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiInsomnia } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
  {
    category: 'Tech stack',
    icons: [
      { icon: <FaHtml5 />, label: 'HTML5' },
      { icon: <FaCss3 />, label: 'CSS3' },
      { icon: <IoLogoJavascript />, label: 'JavaScript' },
      { icon: <FaReact />, label: 'React' },
      { icon: <RiTailwindCssFill />, label: 'Tailwind CSS' },
      { icon: <SiMongodb />, label: 'MongoDB' },
      { icon: <FaBootstrap />, label: 'Bootstrap' },
    ],
  },
  {
    category: 'Tools',
    icons: [
      { icon: <VscVscode />, label: 'VS Code' },
      { icon: <FaGitAlt />, label: 'Git' },
      { icon: <SiInsomnia />, label: 'Insomnia' },
    ],
  },
  {
    category: 'Frameworks',
    icons: [
      { icon: <FaGithub />, label: 'GitHub' },
      { icon: <SiExpress />, label: 'Express' },
      { icon: <DiNodejs />, label: 'Node.js' },
    ],
  },
];

export default skillsData;
