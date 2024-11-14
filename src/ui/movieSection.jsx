import MovieCard from "../components/movieCard";

const MovieSection = () => {
    return (
        <div className="px-[40px] py-[51px] flex flex-col gap-8">
            <span className="font-semibold text-[37px]">Latest Releases</span>
            <div className="flex items-center gap-10 overflow-x-scroll snap-x">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </div>
    );
}
 
export default MovieSection;