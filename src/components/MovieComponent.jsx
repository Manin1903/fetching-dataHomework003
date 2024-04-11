import * as React from "react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getAllMovieService } from "@/service/movie.service";

const MovieComponent = async () => {
  const movie = await getAllMovieService();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[95%] m-auto"
    >
      <CarouselContent>
      {movie.payload.map((item) => (
          <CarouselItem className="basis-1/4">
            <div className="p-5">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                    <Link
                      href={`/view-movie-detail/${item.movie_id}`}
                      className="h-68  rounded-lg  bg-white mt-5 items-center ">
                      <figure>
                        <img
                          src={
                            item.image
                              ? item.image
                              : "https://dramaslot.com/wp-content/uploads/2023/08/When-I-Fly-Towards-You.webp"
                          }
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title text-xl font-bold text-gray-900 mt-4 line-clamp-1">
                          {item.movie_title}
                        </h2>
                        <h4 className="line-clamp-3">{item.description}</h4>
                      </div>
                    </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
           ))}
      </CarouselContent>
    </Carousel>
  );
};
export default MovieComponent;
