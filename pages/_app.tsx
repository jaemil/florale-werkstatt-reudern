import "../styles/index.scss";
import type { AppProps } from "next/app";
import {
  Button,
  Flex,
  Footer,
  FooterItem,
  Input,
  Layout,
  Navigation,
  StoreProvider,
  Tab,
  Tabs,
  TabsHeader,
  Text,
  ThemeChanger,
} from "@findnlink/neuro-ui";
import "@findnlink/neuro-ui/lib/style.css";
import scss from "../styles/app.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../public/images/logo4.png";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <StoreProvider disableSplashScreen defaultTheme="light">
      <Layout type="default">
        <Flex
          className={scss.navigation}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex
            margin="xl"
            flexDirection="row"
            alignItems="center"
            pointer
            onClick={() => {
              router.push("/");
            }}
          >
            <Image width={40} height={50} src={Logo}></Image>
            <div style={{ marginLeft: "10px", width: "100%" }}>
              Florale Werkstatt
              <br />
              Anne-Kathrin Faiss
            </div>
          </Flex>
          <Navigation type="top" _class={scss.navigation2}>
            <Tabs id="navigation" margin="0 m 0 0" _class={scss.tabs}>
              <TabsHeader>
                <Tab
                  onClick={() => {
                    router.push("/aktuelles");
                  }}
                  index={0}
                >
                  Aktuelles
                </Tab>
                <Tab
                  onClick={() => {
                    router.push("/uebermich");
                  }}
                  index={1}
                >
                  Über mich
                </Tab>
                <Tab
                  onClick={() => {
                    router.push("/termine");
                  }}
                  index={2}
                >
                  Termine
                </Tab>
                <Tab
                  onClick={() => {
                    router.push("/maerkte");
                  }}
                  index={3}
                >
                  Märkte
                </Tab>
                <Tab
                  onClick={() => {
                    router.push("/oeffnungszeiten");
                  }}
                  index={4}
                >
                  Öffnungszeiten
                </Tab>
                <Tab
                  onClick={() => {
                    router.push("/kontakt");
                  }}
                  index={5}
                >
                  Kontakt
                </Tab>
                {/* <Tab index={6}>
                  <ThemeChanger />
                </Tab> */}
              </TabsHeader>
            </Tabs>
          </Navigation>
        </Flex>
        <Component {...pageProps} />
        <Footer>
          <FooterItem>
            <Flex flexDirection="row" alignItems="center" _class={scss.flex}>
              <Image width={60} height={80} src={Logo}></Image>
              <div style={{ marginLeft: "20px", fontSize: "20px" }}>
                Florale Werkstatt
                <br />
                Anne-Kathrin Faiss
              </div>
            </Flex>
          </FooterItem>
          <FooterItem>
            <Flex
              flexDirection="row"
              flexWrap="wrap"
              alignItems="center"
              _class={scss.flex}
            >
              <div>
                E-Mail: anne-kathrin_faiss@web.de
                <br /> Telefon: 07022 211117
                <br />
                Handy: 0175 4981104
                <br />
                Kelterweg 20 <br />
                72622 Reudern
              </div>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.2283700454764!2d9.384210915992071!3d48.62461182509219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47999546133ab62f%3A0x442f459126a63d04!2sFlorale%20Werkstatt%20Anne-Kathrin%20Faiss!5e0!3m2!1sde!2sde!4v1652357450232!5m2!1sde!2sde"
                width="300"
                height="300"
                //style="border:0;"
                //allowfullscreen=""
                loading="lazy"
                //referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </Flex>
          </FooterItem>
          <FooterItem>
            <Flex
              flexDirection="row"
              flexWrap="wrap"
              alignItems="center"
              _class={scss.flex}
            >
              Öffnungzeiten: <br />
              Montag und Dienstag: 15:00 - 18:30 Uhr <br />
              Mittwoch, Donnerstag und Freitag: 15:00 - 20:00 Uhr
            </Flex>
          </FooterItem>
        </Footer>
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
