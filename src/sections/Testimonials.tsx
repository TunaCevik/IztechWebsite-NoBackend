import memojiAvatar1 from "@/assets/images/Iztech/Üyeler/Aleyna Karataş.png";
import memojiAvatar2 from "@/assets/images/Iztech/Üyeler/Alp Arda Koçak.png";
import memojiAvatar3 from "@/assets/images/Iztech/Üyeler/Arda Çevik.png";
import memojiAvatar4 from "@/assets/images/Iztech/Üyeler/alp gülcüler.png";
import memojiAvatar5 from "@/assets/images/Iztech/Üyeler/Kayra Alan.png";
import memojiAvatar6 from "@/assets/images/Iztech/Üyeler/Tuna Cevik-Yönetim kurulu üyesi.png";
import memojiAvatar7 from "@/assets/images/Iztech/Üyeler/Tasarım koordinatörlüğü lideri.png";
import memojiAvatar8 from "@/assets/images/Iztech/Üyeler/Nida EFE.png";
import memojiAvatar9 from "@/assets/images/Iztech/Üyeler/Zeynep Nisa Yıldırımkaraman.png";
import memojiAvatar10 from "@/assets/images/Iztech/Üyeler/ege kiraz.png";
import memojiAvatar11 from "@/assets/images/Iztech/Üyeler/Melik Fırat Menekşe.png";
import memojiAvatar12 from "@/assets/images/Iztech/Üyeler/Ömer Faruk Çoban.png";
import memojiAvatar13 from "@/assets/images/Iztech/Üyeler/Umut.jpeg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";
const testimonials = [
  {
    name: "Aleyna Karataş",
    position: "İşbirliği ve Partnerlik Koordinatörlüğü Üyesi",
    text: "XX",
    avatar: memojiAvatar1,
  },
  {
    name: "Alp Arda Koçak",
    position: "Eğitim Koordinatörlüğü Üyesi",
    text: "XX",
    avatar: memojiAvatar2,
  },
  {
    name: "Arda Çevik",
    position: "Yardımcı Başkan",
    text: "XX",
    avatar: memojiAvatar3,
  },
  {
    name: "Alp Gülcüler",
    position: "Yönetim Kurulu Üyesi",
    text: "XX",
    avatar: memojiAvatar4,
  },
  {
    name: "Kayra Alan",
    position: "Organizasyon Koordinatörlüğü Başkanı",
    text: "XX",
    avatar: memojiAvatar5,
  },
  {
    name: "Tuna Cevik",
    position: "Yönetim Kurulu Üyesi",
    text: "XX",
    avatar: memojiAvatar6,
  },
  {
    name: "Ahmet Yılmaz",
    position: "Tasarım Koordinatörlüğü Lideri",
    text: "XX",
    avatar: memojiAvatar7,
  },

  {
    name: "Nida Efe",
    position: "Denetim Kurulu Üyesi",
    text: "XX",
    avatar: memojiAvatar8,
  },
  {
    name: "Zeynep Nisa",
    position: "Mühasip Üye",
    text: ".XX",
    avatar: memojiAvatar9,
  },
  {
    name: "Ege Kiraz",
    position: "Başkan",
    text: "XX",
    avatar: memojiAvatar10,
  },
  {
    name: "Melik Fırat",
    position: "İşbirliği ve Partnerlik Koordinatörlüğü Başkanı",
    text: "XX",
    avatar: memojiAvatar11,
  },
  {
    name: "Ömer Faruk Çoban",
    position: "Denetim Kurulu Üyesi",
    text: "XX",
    avatar: memojiAvatar12,
  },
  {
    name: "Umut Kızıl Toprak",
    position: "Has Üye",
    text: "XX",
    avatar: memojiAvatar13,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Bu Seneki Kadromuz"
          title="Üyeler"
          description="Aktif Üyelerimiz Canla Başla Çalışmaktadır"
        ></SectionHeader>
        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip 
        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"
        >
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-m hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="transparent inline-flex items-center justify-center">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
