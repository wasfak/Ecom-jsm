"use client";
import { useState } from "react";

import { shoes, statistics } from "../constants";

import { palanquin, montserrat, lusitana } from "@/app/fonts";

import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Image from "next/image";
import Button from "./Button";
import ShoeCard from "./ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p
          className={`text-2xl font-montserrat text-coral-red ${palanquin.className} antialiased`}
          /*   className={`text-2xl  text-coral-red  antialiased font-montserrat`} */
        >
          Our Summer collections
        </p>

        <h1
          className={`mt-10 ${palanquin.className} text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold`}
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p
                className={`leading-7 ${montserrat.className} text-slate-gray`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          src={bigShoeImg}
          alt="shoe collection"
          width={510}
          height={450}
          priority
          className="object-contain relative z-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
