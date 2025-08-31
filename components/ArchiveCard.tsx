import { motion } from "framer-motion";
import { FaRegFolder } from "react-icons/fa";

interface Props {
  title: string;
  des: string;
  listItem: string[];
  link: string;
  onClick?: () => void;
}

const ArchiveCard = ({ title, des, listItem, link, onClick }: Props) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
    >
      <div className="card group cursor-pointer h-80 p-7 flex flex-col justify-between">
        <div className="flex justify-start items-start mb-6">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaRegFolder className="text-4xl text-mint-400" />
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.h2
            className="text-xl font-bold text-white mb-3 group-hover:text-mint-400 transition-colors duration-300"
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
              className="text-xs text-gray-400 bg-darkGray px-2 py-1 rounded border border-gray-600 group-hover:border-mint-400 group-hover:text-mint-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default ArchiveCard;
