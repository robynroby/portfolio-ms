"use client"

import { FaCss3, FaFigma, FaGlobeAfrica, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact, FaAccusoft } from "react-icons/fa"
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
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
            position: "FRONT-END DEVELOPER",
            company: "Portable Car Engineering Environment(PCEE)",
            duration: "APR 2023-DEC 2023",
            description: "Translated designs and wire frames into high quality code and writing application interface with ReactJs.Troubleshot interface and debugged applications codes to improve functionality and performance by 50%. Tested and optimized react components for best performance across every device and browser."
        },
        {
            position: "FRONT-END DEVELOPER",
            company: "Abeona",
            duration: "OCT 2023-JAN 2024",
            description: "Developed and maintained the front end of the company's website using ReactJS. Worked closely with the design team to implement new features and improve the user experience. Optimized the website for performance and SEO."
        },
        {
            position: "FRONT-END DEVELOPER",
            company: "HNG INTERNSHIP PROGRAM",
            duration: "Nov 2022 - Jan 2023",
            description: "I used my extensive experience with front end development to define the structure and components for the project, making sure they are reusable.Keep the code quality high reviewing code from other developers and suggesting improvements. Interact with the designer to suggest changes and to make sure the view he has about the design is translated into actual functionality."
        }

    ]
}

const education = {
    "icon": "/resume/cap.svg",
    "title": "My Education",
    "description": "I hold a degree in Computer Science, with specialized coursework in web development and UI/UX design.",
    "items": [
        {
            "degree": "Kenya Certificate of Secondary Education",
            "institution": "Kihara Secondary School",
            "duration": "2015 - 2018",
            "description": "Gained comprehensive knowledge in computer science, with a focus on web development and UI/UX design."
        },
        {
            "degree": "Bachelor of Computer Science",
            "institution": "Dedan Kimathi University of Technology",
            "duration": "2019 - 2024",
            "description": "Gained comprehensive knowledge in computer science, with a focus on web development and UI/UX design."
        },
        {
            "degree": "Web Development Certification",
            "institution": "Various Online Platforms",
            "duration": "2020 - 2023",
            "description": "Completed in-depth courses on modern web development technologies and frameworks."
        },
        {
            "degree": "UI/UX Design Certification",
            "institution": "Various Online Platforms",
            "duration": "2021 - 2023",
            "description": "Studied the principles and practices of user interface and user experience design."
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
        {
            name: "PostgreSQL",
            icon: <FaAccusoft />
        }
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