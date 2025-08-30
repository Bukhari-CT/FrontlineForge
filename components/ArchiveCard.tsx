import { motion } from "framer-motion";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  des: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, des, listItem, link }: Props) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="card group cursor-pointer h-80 p-7 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaRegFolder className="text-4xl text-yellow" />
          </motion.div>
          <motion.div
            whileHover={{ rotate: 45, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <RxOpenInNewWindow className="text-2xl text-gray-400 group-hover:text-yellow transition-colors duration-300" />
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.h2
            className="text-xl font-bold text-white mb-3 group-hover:text-yellow transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-300 text-sm leading-relaxed"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {des}
          </motion.p>
        </div>

        <motion.ul
          className="flex items-center gap-2 justify-start flex-wrap mt-4"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {listItem.map((item, i) => (
            <motion.li
              key={i}
              className="text-xs text-gray-400 bg-darkGray px-2 py-1 rounded border border-gray-600 group-hover:border-yellow group-hover:text-yellow transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.a>
  );
};

export default ArchiveCard;
