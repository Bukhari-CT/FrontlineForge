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
    <a href={link} target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#dfd9de] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textDarkBlue" />
          <RxOpenInNewWindow className="text-2xl hover:text-textDarkBlue" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textDarkBlue">
            {title}
          </h2>
          <p className="text-sm mt-3 group-hover:text-textDarkBlue">{des}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
