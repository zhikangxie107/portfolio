// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
import newLogo from "./images/logo.jpeg"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "zhikangxie107";

// Navbar Logo image
export const navLogo = newLogo;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "A little about me, I enjoy cooking, baking, and going to the gym! I love working on new projects and helping people out. Feel free to message me!";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="devicon-plain:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="hugeicons:java" className="display-4" />,
    name: "Java",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="akar-icons:typescript-fill" className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="simple-icons:flask" className="display-4" />,
    name: "Flask",
  },
  {
    id: 7,
    skill: <Icon icon="teenyicons:firebase-solid" className="display-4" />,
    name: "FireBase",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="simple-icons:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 11,
    skill: <Icon icon="uil:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 12,
    skill: <Icon icon="cib:visual-studio-code" className="display-4" />,
    name: "Visual Studio Code",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1y1uP2-spCqU_sgpS1TGkS-j5oBFdNMae/view?usp=drive_link";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["roomies", "WeatherApp", "Social-Media-Web-Application"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xrbzewqv";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
