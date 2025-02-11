import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"
import { COMMUNITY_INVOLVEMENT } from "../constants"

const Experience = () => {
  return (
    <div className="pb-20 pt-20 ">
        <motion.h2
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 2}}
            className="my-20 text-center text-5xl text-extralight ">
            Work Experience
        </motion.h2>

        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-20 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: -100}} 
                        transition={{ duration: 1}}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-gray-500"> {experience.year}</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: 100}}
                        transition={{ duration: 1}} 
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-0 text-3xl">
                            {experience.role}
                        </h6>
                        <p className="text-lg text-medium text-gray-500 mb-2">
                            @ {experience.company}
                        </p>
                        <p className="mb-4 ">
                            {experience.description}
                        </p>
                        {experience.technologies.map((tech, index)=>(<span key={index} className="mr-2 mt-4 rounded border-1 border-neutral-450 bg-gray-100 bg-opacity-10 px-2 py-1 tex-sm  text-white-500">{tech}</span>))}
                    </motion.div>
                </div>
            ))} 
        </div>

        <motion.h2
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 2}}
            className="my-20 text-center text-5xl text-extralight mt-40">
            Volunteer Experience
        </motion.h2>

        <div>
            {COMMUNITY_INVOLVEMENT.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: -100}} 
                        transition={{ duration: 1}}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-gray-500"> {experience.year}</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: 100}}
                        transition={{ duration: 1}} 
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-0 text-3xl">
                            {experience.role}
                        </h6>
                        <p className="text-lg text-medium text-gray-500 mb-2">
                            @ {experience.company}
                        </p>
                        <p className="mb-10 ">
                            {experience.description}
                        </p>
                        {experience.technologies.map((tech, index)=>(<span key={index} className="mr-2 mt-4 rounded border-1 border-neutral-450 bg-gray-100 bg-opacity-10 px-2 py-1 tex-sm  text-white-500">{tech}</span>))}
                    </motion.div>
                </div>
            ))} 
        </div>
    </div>
  )
}

export default Experience
