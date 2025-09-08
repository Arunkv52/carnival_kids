"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "motion/react";
import { useRef } from "react";
import Footer from "./Footer";
import Img1 from '../assets/4.webp'
import Img2 from '../assets/6.webp'
import Img3 from '../assets/DSC00222.webp'
import Img4 from '../assets/9.webp'
const projects = [
    {
        title: "Practical Life",
        description:
            "Children are naturally interested in activities that are done in the day to day living like sweeping, mopping or washing clothes etc. The activities of Practical Life are to help the child gain control and coordination of his movement, help the child to gain independence and thereby adapt to his society. The Practical Life Area has materials that help children to acquire these skills. For example, the various “dressing frames” help toddlers learn to button, zip, and even tie a shoe lace. There are activities like washing hands, washing clothes which are activities of our daily life. Children are offered grace and courtesy activities in groups which help them adapt to the society.",
        src: "rock.jpg",
        link: Img1,
        color: "#00D4FF",
    },
    {
        title: "Sensorial",
        description:
            "Senses play a vital role in gathering information to function in the environment. The young child collects all information that he needs, through his senses. The child must refine his senses in his first six years of life. For this the child must have opportunity for refinement. The Montessori environment has materials that help children refine their visual, auditory, tactile, taste, hearing sense etc.",
        src: "tree.jpg",
        link: Img2,
        color: "#8f89ff",
    },
    {
        title: "Language",
        description: "The environment is filled with opportunities to build language. There's a variety of books in the reading corner, and children are exposed to different word sounds and a rich vocabulary. Young children first spontaneously develop speech. Later, between the ages of 2.5 and 4.5, if they are in the right environment, writing will also emerge naturally, followed by reading. Beyond language, the Montessori method is designed to help children build self-esteem, solve problems with confidence, and develop self-control. It supports the child's overall development, helping them believe in themselves and become independent, well-adjusted individuals.",
        src: "water.jpg",
        link: Img3,
        color: "#13006c",
    },
    {
        title: "Mathematics",
        description:
            "Our daily life is filled with calculation, precision and exactness. We prepare the children through sensorial and practical life activities before introducing them to math concepts. In the Montessori environment starting right from the recognition of numbers, counting they go beyond like the arithmetic operations addition, subtraction, multiplication and division.",
        src: "house.jpg",
        link: Img4,
        color: "#ed649e",
    },
    
];
export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });
    return (
        <ReactLenis root>
            <main className="" ref={container}>
                <section className="text-white pt-3 pb-25  w-full ">
                    {projects.map((project, i) => {
                        const targetScale = 1 - (projects.length - i) * 0.05;
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                url={project?.link}
                                src={project?.src}
                                title={project?.title}
                                color={project?.color}
                                description={project?.description}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </section>

                <Footer />
            </main>
        </ReactLenis>
    );
}
export const Card = ({
    i,
    title,
    description,
    src,
    url,
    color,
    progress,
    range,
    targetScale,
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);
    return (
        <div
            ref={container}
            className="h-screen flex items-center justify-center sticky top-0"
        >
            <motion.div
                style={{
                    backgroundColor: color,
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className={`flex flex-col relative -top-[25%] md:h-[500px] h-dvh md:w-[80%] w-full rounded-md p-5 origin-top`}
            >
                <h2 className="md:text-6xl text-4xl md:text-center text-left font-semibold ">{title}</h2>
                <div className={`md:flex h-full mt-5 gap-10`}>
                    <div className={`md:w-[60%] w-full relative`}>
                        <p className="md:text-2xl text-[20px]">{description}</p>
                    </div>

                    <div
                        className={`relative md:w-[40%] w-full h-full rounded-lg overflow-hidden `}
                    >
                        <motion.div
                            className={`w-full h-full`}
                            style={{ scale: imageScale }}
                        >
                            <img src={url} alt="" className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
