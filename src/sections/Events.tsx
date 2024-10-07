import tumBlockchainImage from "@/assets/images/Iztech/PastEvents/tumBlockchain/1.jpeg";
import aycaTopalliTalkImage from "@/assets/images/Iztech/PastEvents/aycaTopalliTalk/1.jpeg";
import solanaCrossroadsImage from "@/assets/images/Iztech/PastEvents/solanaCrossroad/2.jpeg";
import digitalFinanceImage from "@/assets/images/Iztech/PastEvents/digitalFinance/1.jpeg";
import blockchainSeminarImage from "@/assets/images/Iztech/PastEvents/blockchainSeminar/1.jpeg";
import odtuBlockchainDaysImage from "@/assets/images/Iztech/PastEvents/odtuBlockchainDays/1.jpeg";
import tubitakBilgemImage from "@/assets/images/Iztech/PastEvents/tubitakBilgem/1.jpeg";
import blocktalks2023Image from "@/assets/images/Iztech/PastEvents/blocktalks2023/XX.png";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const pastEvents = [
  {
    name: "Technical University of Munich & Sui Foundation",
    year: "2023",
    title: "TUM Blockchain Konferansı",
    results: [
      { title: "TUM Blockchain Konferansı'na katılım sağlandı" },
      { title: "İTÜ ve YTÜ Blockchain topluluklarıyla tanışıldı" },
      { title: "Sui Foundation'a ev sahipliği için teşekkür edildi" },
    ],
    link: "#",
    image: tumBlockchainImage,
  },
  {
    name: "Dr. Öğr. Üyesi Ayca Topalli",
    year: "2023",
    title: "Blockchain Teknolojileri Konuşması",
    results: [
      { title: "Blockchain teknolojileri hakkında değerli bilgiler edinildi" },
      { title: "Ekip arkadaşlarına ve katılımcılara teşekkür edildi" },
      { title: "Dönemin son etkinliği başarıyla gerçekleştirildi" },
    ],
    link: "#",
    image: aycaTopalliTalkImage,
  },
  {
    name: "Solana Crossroads",
    year: "2023",
    title: "SolanaCrossroad İstanbul Etkinliği",
    results: [
      { title: "Tansel Kaya, MSc ve diğer sektör uzmanlarıyla temas kuruldu" },
      { title: "Solana ağında geliştirilen projeler incelendi" },
      { title: "Verimli bir İstanbul turu gerçekleştirildi" },
    ],
    link: "#",
    image: solanaCrossroadsImage,
  },
  {
    name: "Prof. Dr. Cumhur Coşkun Küçüközmen",
    year: "2023",
    title: "Dijital ve Kripto Paralar Çerçevesinde Finans",
    results: [
      {
        title:
          "Yapay Zeka çağında finansın geleceği konusunda vizyon kazanıldı",
      },
      { title: "Prof. Dr. Cumhur Coşkun Küçüközmen'e teşekkür edildi" },
      { title: "Başarılı ve verimli bir etkinlik gerçekleştirildi" },
    ],
    link: "#",
    image: digitalFinanceImage,
  },
  {
    name: "İsmail Hakki Polat, Tansel Kaya, MSc, A. Türker Balkar",
    year: "2023",
    title: "Blockchain Semineri",
    results: [
      { title: "Uzmanlardan blockchain üzerine değerli bilgiler öğrenildi" },
      { title: "Katılan üyelere teşekkür edildi" },
      { title: "Bir sonraki buluşma için sabırsızlanılıyor" },
    ],
    link: "#",
    image: blockchainSeminarImage,
  },
  {
    name: "ODTÜ Blockchain",
    year: "2023",
    title: "BlockchainDays Etkinliği",
    results: [
      { title: "ODTÜ'nün BlockchainDays etkinliğine katılım sağlandı" },
      {
        title: "Yoğun ilgi gören standımızda katılımcılarla etkileşim kuruldu",
      },
      { title: "Gelecek etkinlikler ve projeler tanıtıldı" },
    ],
    link: "#",
    image: odtuBlockchainDaysImage,
  },
  {
    name: "TÜBİTAK BİLGEM Blokzincir Araştırma Laboratuvar",
    year: "2023",
    title: "Blockchain Bilgi Paylaşım Etkinliği",
    results: [
      { title: "Taner Dursun, PhD'a değerli bilgileri için teşekkür edildi" },
      { title: "Blockchain araştırmaları ve gelişmeleri öğrenildi" },
    ],
    link: "#",
    image: tubitakBilgemImage,
  },
  {
    name: "İYTE Blockchain Topluluğu",
    year: "2023",
    title: "BLOCKTALKS 2023",
    results: [
      { title: "İzmir'deki en büyük Blockchain etkinliği düzenlendi" },
      { title: "Blockchain ekosisteminden önemli konuşmacılar ağırlandı" },
      {
        title:
          "NFT, ödüller ve katılım belgeleri ile topluluk etkileşimi sağlandı",
      },
    ],
    link: "#",
    image: blocktalks2023Image,
  },
];

const futuredEvents = [];

export const EventsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="YAPTIĞIMIZ ETKİNLİKLER"
          title="Iztech Blockchain"
          description="Bu yıl birçok önemli etkinlikle blockchain dünyasına katkı sağlamaya
          devam ettik ve gelecekteki projelerimizle topluluğumuzu daha da
          büyütmeyi hedefliyoruz."
        ></SectionHeader>
        <div className="md:mt-20 flex flex-col mt-10 gap-20">
          {pastEvents.map((event, projectIndex) => (
            <Card
              key={event.title}
              className=" pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
              style={{
                position: "sticky",
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400
                inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent"
                  >
                    <span>{event.name}</span>
                    <span>&bull;</span>
                    <span>{event.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {event.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {event.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={event.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full px-6 md:px-8 md:w-auto 
                                  rounded-xl font-semibold inline-flex items-center 
                                  justify-center gap-2 mt-8"
                    >
                      <span>Gönderiye Göz At</span>
                      <ArrowUpRightIcon className="size-4"></ArrowUpRightIcon>
                    </button>
                  </a>
                </div>
                <div className="mt-8 mb-9 lg:mt-0">
                  <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
                    <Image
                      src={event.image}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      priority={true} // Performans için isteğe bağlı
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
