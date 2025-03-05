'use client'
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from 'next/image';

import { IoLogoJavascript } from "react-icons/io";
import { BsFiletypeScss } from "react-icons/bs";
import {
  FaAws,
  FaDocker,
  FaFlask,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaCss3Alt,
  FaReact
} from "react-icons/fa";
import {
  SiElasticsearch,
  SiMobx,
  SiMongodb,
  SiMysql,
  SiTypescript
} from "react-icons/si";

import mapImage from "@/assets/images/map-kfar-yona.png";
import smileEmoji from '@/assets/images/memoji-smile.png';
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolBoxItems";

import { motion } from "framer-motion";
import { useRef } from "react";
import MyMap from "@/components/MyMap";

const toolBoxItems = [
  { title: "React", iconType: FaReact },
  { title: "HTML", iconType: FaHtml5 },
  { title: "CSS3", iconType: FaCss3Alt },
  { title: "SCSS", iconType: BsFiletypeScss },
  { title: "JavaScript", iconType: IoLogoJavascript },
  { title: "TypeScript", iconType: SiTypescript },
  { title: "Python", iconType: FaPython },
  { title: "Flask", iconType: FaFlask },
  { title: "MySQL", iconType: SiMysql },
  { title: "Elasticsearch", iconType: SiElasticsearch },
  { title: "Docker", iconType: FaDocker },
  { title: "MobX", iconType: SiMobx },
  { title: "MongoDB", iconType: SiMongodb },
  { title: "Node.js", iconType: FaNodeJs },
  { title: "AWS", iconType: FaAws },
  { title: "Git", iconType: FaGithub }
];

const hobbies = [
  {
    title: "Gaming",
    emoji: '🎮',
    left: '8%',
    top: '2%'
  },
  {
    title: "Music",
    emoji: '🎶',
    left: '50%',
    top: '8%'
  },
  {
    title: "Chess",
    emoji: '♟️',
    left: '15%',
    top: '30%'
  },
  {
    title: "Boxing",
    emoji: '🥊',
    left: '55%',
    top: '45%'
  },
  {
    title: "Reading",
    emoji: '📚',
    left: '40%',
    top: '70%'
  },
  {
    title: "Guitar",
    emoji: '🎸',
    left: '12%',
    top: '60%'
  },
]

const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section id="about-section" className="pb-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

            <Card className="h-[320px] md:col-span-1 lg:col-span-3">
              <CardHeader
                title="My Tool Box"
                description="Explore the technologies and tools use to craft exceptional digital experiences."
                className=""
              />
              <ToolboxItems items={toolBoxItems} itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolBoxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:35s]" />
            </Card>

            <Card className="h-[320px] flex flex-col md:col-span-1 lg:col-span-2">
              <CardHeader
                title="Beyond The Code"
                description="Explore My Interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div ref={constraintRef} className="relative flex-1">
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 
                                  bg-gradient-to-r from-emerald-300 to-sky-400 
                                  rounded-full py-1.5 absolute cursor-pointer"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                    dragElastic={0.1}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] relative md:col-span-2 lg:col-span-5">
              <MyMap />
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
