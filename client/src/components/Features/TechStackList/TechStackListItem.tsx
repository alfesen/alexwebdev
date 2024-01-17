import Heading from "@/components/Typography/Heading/Heading";
import s from "./TechStackListItem.module.scss";
import type { TTechStackListItemProps } from "@/types/features";

const TechStackListItem = ({
  icon,
  heading,
  text,
}: TTechStackListItemProps) => {
  return (
    <li className={s.item}>
      <img
        src={`${import.meta.env.VITE_SERVER_URL}/${icon}`}
        className={s.logo}
      />
      <div>
        <Heading semantic="h3">{heading}</Heading>
        <p>{text}</p>
      </div>
    </li>
  );
};

export default TechStackListItem;
