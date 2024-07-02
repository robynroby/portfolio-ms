"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
    {
        num: "01",
        title: "Project 1",
        category: "Web Development",
        description: "Description of project 1",
        image: "/work/thumb1.png",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
        live: "",
        github: "",
    },
    {
        num: "02",
        title: "Project 2",
        category: "Web Development",
        description: "Description of project 2",
        image: "/work/thumb2.png",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
        live: "",
        github: "",
    },
    {
        num: "03",
        title: "Project 3",
        category: "Web Development",
        description: "Description of project 3",
        image: "/work/thumb3.png",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
        live: "",
        github: "",
    },
    {
        num: "04",
        title: "Project 4",
        category: "Web Development",
        description: "Description of project 4",
        image: "/work/thumb1.png",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
        live: "",
        github: "",
    },
    {
        num: "05",
        title: "Project 5",
        category: "Web Development",
        description: "Description of project 5",
        image: "/work/thumb2.png",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
        live: "",
        github: "",
    },
    {
        num: "06",
        title: "Project 6",
        category: "Web Development",
        description: "Description of project 6",
        image: "/work/thumb3.png",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
        live: "",
        github: "",
    },
    {
        num: "07",
        title: "Project 7",
        category: "Web Development",
        description: "Description of project 7",
        image: "/work/thumb1.png",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
        live: "",
        github: "",
    },
    {
        num: "08",
        title: "Project 8",
        category: "Web Development",
        description: "Description of project 8",
        image: "/work/thumb2.png",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
        live: "",
        github: "",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    delay: 2.4,
                    ease: "easeIn"
                },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* category */}
                            <h2 className="text-[42px] text-white font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* description */}
                            <p className="text-white/60">
                                {project.description}
                            </p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length - 1 && <span className="text-white/60">,</span>}
                                    </li>
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overaly */}
                                            <div className="top-0 absolute bottom-0 w-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work