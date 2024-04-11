import { getMovieById } from "@/service/movie.service";
import React from "react";

const MovieDetail = async ({ params }) => {
  const movieDatil = await getMovieById(params.movieId);
  console.log("movie detail ", movieDatil);
  return ( 
    <div>
        <section className="absolute inset-0 z-[-1]" >
                <div class= "  bg-gray-900 h-screen  ">
                  <div class="max-w-6xl mx-auto px-4 py-36">
                    <div class="flex flex-col md:flex-row -mx-4">
                      <div class="md:flex-1 px-4">
                        <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                          <img
                            class="w-full h-full object-cover"
                            src={movieDatil.payload.image? movieDatil.payload.image : "https://dramaslot.com/wp-content/uploads/2023/08/When-I-Fly-Towards-You.webp"}
                            alt="Product Image"
                          />
                        </div>
                      </div>
                      <div class="md:flex-1 px-4">
                        <h2 class="text-2xl font-bold  text-white dark:text-white mb-2">
                          {movieDatil.payload.movie_title}
                        </h2>
                        <p class=" dark:text-gray-300 text-sm mb-1  text-white">
                          {movieDatil.payload.runtime} <span>minutes</span>
                        </p>
                        <div class="flex mb-1">
                          <div class="mr-4">
                            <span class="  text-white">
                              {movieDatil.payload.genre}
                            </span>
                          </div>
                        </div>
                        <div class="mb-4">
                          <span class="font-bold text-gray-700 dark:text-gray-300">
                          <div className="flex items-center mt-2">
                          {Array.from({ length: movieDatil.payload.rating }, (_, i) => (
                            <span key={i} className=" py-1 px-1 rounded-md text-yellow-400">
                              ★
                            </span>
                          ))}
                        </div>
                          </span>
                        </div>
                        <div class="mb-4">
                          <span class="font-bold text-2xl  text-white">
                            {movieDatil.payload. movie_title} <span>({movieDatil.payload.released_year})</span>
                          </span>
                          
                        </div>
                        <div>
                          <p class=" text-white text-sm mt-2">
                            {movieDatil.payload.description}
                          </p>
                          <p class=" text-white text-sm mt-[50px]">
                                 {new Date(movieDatil.payload.posted_at).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </section>
    </div>
  );
};

export default MovieDetail;
