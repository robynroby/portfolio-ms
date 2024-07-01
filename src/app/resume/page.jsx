"use client"

import { FaCss3, FaFigma, FaGlobeAfrica, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const about = {
    title: "About Me",
    description: "I am a full-stack web developer with experience in building websites and web applications using modern technologies.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Robinson Mwaura"
        },
        {
            fieldName: "Phone",
            fieldValue: " +254 790 772 286"
        },
        
        {
            fieldName: "Location",
            fieldValue: "Nairobi, Kenya"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Swahili"
        },
        
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Email",
            fieldValue: "robinsonmwaura254@gmail.com"
        },
    ]
}

const experience = {
    icon: '/resume/badge.svg',
    title: "My Experience",
    description: "I have experience in building websites and web applications using modern technologies.",
    items: [
        {
            position: "Web Developer",
            company: "Company",
            duration: "2021 - Present",
            description: "I build websites and web applications that are fast, secure, and easy to manage."
        },
        {
            position: "Mobile Developer",
            company: "Company",
            duration: "2020 - 2021",
            description: "I build mobile applications that are fast, secure, and easy to manage."
        },
        {
            position: "UI/UX Designer",
            company: "Company",
            duration: "2019 - 2020",
            description: "I design user interfaces that are easy to use and visually appealing."
        }

    ]
}

const education = {
    icon: '/resume/cap.svg',
    title: "My Education",
    description: "I have a degree in Computer Science and have taken courses in web development and design.",
    items: [
        {
            degree: "Computer Science",
            institution: "University",
            duration: "2016 - 2020",
            description: "I studied computer science and took courses in web development and design."
        },
        {
            degree: "Web Development",
            institution: "Online",
            duration: "2020 - 2021",
            description: "I took courses in web development to learn modern technologies."
        },
        {
            degree: "UI/UX Design",
            institution: "Online",
            duration: "2021 - 2022",
            description: "I took courses in UI/UX design to learn how to design user interfaces."
        },

    ]
}

const skills = {
    title: "My Skills",
    description: "I have experience in building websites and web applications using modern technologies.",
    skillsList: [
        {
            name: "HTML",
            icon: <FaHtml5 />
        },
        {
            name: "CSS",
            icon: <FaCss3 />
        },
        {
            name: "JavaScript",
            icon: <FaJs />
        },
        {
            name: "React",
            icon: <FaReact />
        },
        {
            name: "Node.js",
            icon: <FaNodeJs />
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs />
        },
        {
            name: "Figma",
            icon: <FaFigma />
        },
        {
            name: "Go",
            icon: <FaGlobeAfrica />
        },
        {
            name: "Python",
            icon: <FaPython />
        },
    ]
}


const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    delay: 2.4,
                    ease: 'easeIn'
                }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}:</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillsList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                            <p className="text-white/60 group-hover:text-accent transition-all duration-300">{skill.name}</p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <h3 className="capitalize">{skill.name}</h3>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume