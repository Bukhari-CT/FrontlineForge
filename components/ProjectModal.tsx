import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  technologies?: string[];
  features?: string[];
  longDescription?: string;
  challenges?: string[];
  results?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-darkGray rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-700">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTimes className="text-2xl" />
              </button>

              <div className="pr-12">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-mint-400 text-lg">{project.category}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Project Overview
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.longDescription ||
                    project.description ||
                    "No description available."}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-mint-400/20 text-mint-400 rounded-full text-sm border border-mint-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {(project.features || []).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-mint-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Challenges & Solutions
                </h3>
                <ul className="space-y-2">
                  {(project.challenges || []).map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Results & Impact
                </h3>
                <ul className="space-y-2">
                  {(project.results || []).map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
