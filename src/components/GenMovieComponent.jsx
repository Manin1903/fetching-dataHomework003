import * as React from "react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getAllMovieService } from "@/service/movie.service";
import MovieCardComponent from "./MovieCardComponent";

const GenMovieComponent = ({ getGen }) => {
  getGen.map((i) => console.log(i));
  return (
    <>
      <div>
        {getGen.map((i) => (
          <div>
            <div className="text-2xl font-bold text-white px-16 py-10">
            <h1>
              {i} Movie
              <span> &gt; </span>
            </h1>
          </div>
          <MovieCardComponent genre={i}/>
          </div>
        ))}
      </div>
    </>
  );
};
export default GenMovieComponent;
