import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const socials = [
    {
        path: "https://github.com/robynroby",
        icon: <FaGithub />,
    },
    {
        path: "https://www.linkedin.com/in/robinson-mwaura-9412bb201",
        icon: <FaLinkedin />,
    },
    {
        path: "https://twitter.com/___Mwaura",
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
