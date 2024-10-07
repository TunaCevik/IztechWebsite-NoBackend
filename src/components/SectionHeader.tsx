export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className=" font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent lg:text-xl">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 ">
        {title}
      </h2>
      <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
