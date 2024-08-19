import { CheckCircle2 } from "lucide-react";

const ListItem = ({ text }) => {
    return (
      <li className="flex text-base text-body-color dark:text-dark-6">
        <span className="mr-2.5 mt-0.5 text-primary">
          <CheckCircle2/>
        </span>
        {text}
      </li>
    );
  };

  export default ListItem;