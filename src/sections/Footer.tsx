import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Twitter",
    href: "https://x.com/iyte_blockchain",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/iyte_blockchain/",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/i%CC%87yte-blockchain-toplulu%C4%9Fu",
  },
  {
    title: "Lu.ma",
    href: "https://lu.ma/iztechblockchain",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2
      -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon />
              </a>
            ))}
          </nav>
          <div></div>
        </div>
      </div>
    </footer>
  );
};
