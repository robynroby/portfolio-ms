import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const socials = [
    {
        path: "github.com/robynroby",
        icon: <FaGithub />,
    },
    {
        path: "linkedin.com/in/robinsonmwaura",
        icon: <FaLinkedin />,
    },
    {
        path: "twitter.com/__Mwaura",
        icon: <FaTwitter />,
    },
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials