import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/assets/data/service";

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[10px] lg:mt-[35px]">
      {services.map((item, index) => (
        <ServiceCard item={item} key={index} index={index} />
      ))}
    </div>
  );
};

export default ServiceList;
