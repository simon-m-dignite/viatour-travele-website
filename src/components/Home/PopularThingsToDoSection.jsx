import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { popularthings } from "../../constants/whychoosetours";
import {
  PopularThing1,
  PopularThing2,
  PopularThing3,
  PopularThing4,
  PopularThing5,
  PopularThing6,
} from "../../assets/export";

const PopularThingsToDoSection = () => {
  return (
    <div className={`py-16 ${styles.horizontalPadding} flex flex-col gap-y-12`}>
      <div className="w-full flex items-center justify-between">
        <h2 className={`${styles.headingSize}`}>Popular things to do</h2>
        <Link to="/" className="text-sm font-normal">
          See All
        </Link>
      </div>
      <div className="w-full py-4 row grid-cols-1 md:grid-cols-7 lg:grid-cols-7 xl:gird-cols-7 grid-rows-2">
        {/* <div className="col-span-1 row-span-1">
          <img src={PopularThing1} alt="" />
        </div>
        <div className="col-span-1 row-span-1">
          <img src={PopularThing2} alt="" />
        </div>
        <div className="col-span-3">
          <img src={PopularThing3} alt="" />
        </div>
        <div>
          <img src={PopularThing4} alt="" />
        </div>
        <div>
          <img src={PopularThing5} alt="" />
        </div>
        <div>
          <img src={PopularThing6} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default PopularThingsToDoSection;
