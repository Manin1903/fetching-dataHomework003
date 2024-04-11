import GenMovieComponent from "@/components/GenMovieComponent";
import MovieComponent from "@/components/MovieComponent";
import { getAllMovieService } from "@/service/movie.service";

export default async function Home() {
  async function getGen() {
    let arrayGen = [];
    const originalArray = await getAllMovieService();

    originalArray.payload.map((gen) => {
      if (!arrayGen.includes(gen.genre)) {
        arrayGen.push(gen.genre);
      }
    });
    return arrayGen;
  }
  const allGen = await getGen();

  return (
    <>
      <div>
        <div className="absolute inset-0 z-[-1]">
          <img
            src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUrXNmyRqhYA0bTQL9c1QEq-dHExK9afMY6VnqW7Esdo1t_pdGV7apwrTc1l_cZWYpY2V81WPxmq_u8_vnBFLT6LRCCT8QnVLFp2.jpg?r=ec8"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      <div className="bg-gray-900">
        <div className="text-2xl font-bold text-white px-16 py-10">
          <h1>
            All Movie<span> &gt; </span>
          </h1>
        </div>
        <MovieComponent />
        <GenMovieComponent getGen={allGen} />
      </div>
    </>
  );
}
