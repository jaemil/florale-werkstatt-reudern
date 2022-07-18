import { ImageGallery, Image } from "@findnlink/neuro-ui";
import blume1 from "../public/images/blume1.jpg";
import blume2 from "../public/images/blume2.jpg";
import blume3 from "../public/images/blume3.jpg";
import blume4 from "../public/images/blume4.jpg";
import blume5 from "../public/images/blume5.jpg";

export default function IndexPage() {
  return (
    <>
      <ImageGallery
        autoplay
        interval={4000}
        showPaginate
        imageObjectFit="cover"
        style={{ height: "100vh", marginTop: "- var(--navbarHeight)" }}
      >
        <Image src={blume1.src} />
        <Image src={blume2.src} />
        <Image src={blume3.src} />
        <Image src={blume4.src} />
        <Image src={blume5.src} />
      </ImageGallery>
    </>
  );
}
