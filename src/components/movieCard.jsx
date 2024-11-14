const MovieCard = () => {
  return (
    <div className="w-[267px] min-w-[267px] flex flex-col items-start gap-5 snap-start">
      <img
        src="/img.png"
        alt=""
        className="w-full rounded-bl-3xl rounded-tr-3xl h-[318px] object-cover"
      />
      <div>
        <span className="text-[23px]">Deadpool & wolverine</span>
        <p className="font-bold text-[#A473FF]">action</p>
      </div>
    </div>
  );
};

export default MovieCard;