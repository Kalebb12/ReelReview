const Button = ({children , type}) => {
    const base = "px-5 py-2 w-48 rounded-tr-2xl font-semibold disabled:cursor-not-allowed justify-center rounded-bl-2xl flex items-center gap-1 md:gap-2"
    const style = {
        default: base + " bg-[--primary]",
        outline: base + " border border-white bg-[--transluse2]"
    }
  return (
    <button className={style[type?type:"default"]}>
      {children}
    </button>
  );
};

export default Button;
