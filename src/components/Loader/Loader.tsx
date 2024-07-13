import { ThreeDots } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
