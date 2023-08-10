// tsrafce
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> =[
    {
        icon: <HomeModernIcon className="h-6 w-6 " />,
        title: "State of the Art Facilities",
        description: "Neque adpiscing amet amet ehum. Fueigat dolor enim fementum in a in lectus pellentesque. Ullmcorper et.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6 " />,
        title: "100's of Diverse Classes",
        description: "Eu ipsum amet amet ehum. Fueigat dolor enim fementum in a in lectus pellentesque. Ullmcorper et.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6 " />,
        title: "Expert and Pro Trainers",
        description: "Fusce vestibulum amet amet ehum. Fueigat dolor enim fementum in a in lectus pellentesque. Ullmcorper et.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section 
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
        >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
        
        {/* Header */}
        <div className="md:my-5 md:w-3/5">
           <HText>MORE THAT JUST A GYM.</HText>
           <p 
           className="my-5 text-sm"
           >We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </div>
        {/* benefits */}
        <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        >
            {benefits.map((benefit: BenefitType) => (
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}

                />
            ))}
        </motion.div>
        
    </motion.div>
    </section>
  )
}

export default Benefits