import { FC } from "react";
import css from "../ErrorMessage/ErrorMessage.module.css";

const ErrorMessage: FC = () => {
  return (
    <div>
      <p className={css.error}>
        Oops! Something went wrong! Please try again later.
      </p>
    </div>
  );
};

export default ErrorMessage;
