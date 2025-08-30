import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaCloud,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFastapi,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiGooglecloud,
  SiFramer,
} from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
    { name: "React", icon: FaReact, level: 95 },
    { name: "Next.js", icon: SiNextdotjs, level: 90 },
    { name: "TypeScript", icon: SiTypescript, level: 88 },
    { name: "JavaScript", icon: FaJs, level: 92 },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
    { name: "HTML5", icon: FaHtml5, level: 95 },
    { name: "CSS3", icon: FaCss3Alt, level: 90 },
    { name: "Framer Motion", icon: SiFramer, level: 85 },
  ];

  const backendSkills = [
    { name: "Python", icon: FaPython, level: 90 },
    { name: "FastAPI", icon: SiFastapi, level: 88 },
    { name: "Node.js", icon: FaNodeJs, level: 85 },
    { name: "NestJS", icon: SiNestjs, level: 82 },
    { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
    { name: "MongoDB", icon: SiMongodb, level: 80 },
    { name: "Redis", icon: SiRedis, level: 75 },
    { name: "Prisma", icon: SiPrisma, level: 80 },
  ];

  const toolsSkills = [
    { name: "Docker", icon: FaDocker, level: 85 },
    { name: "Git", icon: FaGitAlt, level: 90 },
    { name: "Supabase", icon: SiSupabase, level: 80 },
    { name: "Google Cloud", icon: SiGooglecloud, level: 75 },
    { name: "AWS", icon: FaAws, level: 70 },
    { name: "Database Design", icon: FaDatabase, level: 85 },
    { name: "API Development", icon: FaCode, level: 90 },
    { name: "Cloud Storage", icon: FaCloud, level: 80 },
  ];

  const SkillCategory = ({ title, skills, delay = 0 }) => (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            className="card text-center group cursor-pointer"
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-col items-center p-4">
              <motion.div
                className="text-3xl text-yellow mb-3"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                }}
                transition={{ duration: 0.3 }}
              >
                <skill.icon />
              </motion.div>
              <h4 className="text-white font-semibold mb-2 text-sm">
                {skill.name}
              </h4>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-yellow h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: delay + index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
              <span className="text-gray-400 text-xs mt-1">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MY • SKILLS
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across frontend,
            backend, and development tools
          </p>
        </motion.div>

        <SkillCategory
          title="Frontend Technologies"
          skills={frontendSkills}
          delay={0.2}
        />

        <SkillCategory
          title="Backend Technologies"
          skills={backendSkills}
          delay={0.4}
        />

        <SkillCategory
          title="Tools & Technologies"
          skills={toolsSkills}
          delay={0.6}
        />
      </div>
    </section>
  );
};

export default Skills;
