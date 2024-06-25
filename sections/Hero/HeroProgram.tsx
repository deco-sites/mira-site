import { useSignal } from "@preact/signals";
import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "deco-sites/mira-site/components/ui/Icon.tsx";

interface WorkshopButton {
  text?: string;
  url?: string;
}

interface Content {
  /** @format rich-text */
  recomendation?: string;
  title: string;
  description?: string;
  subtitle?: string;
  infos: {
    icon?: ImageWidget;
    list?: string;
  }[];
  details: {
    title?: string;
    list?: string[];
  };
  date?: string;
  buttonLabel?: string;
  buttonUrl?: string;
}

interface Training {
  label: string;
  /** @format rich-text */
  smallDesc?: string;
  /** @format rich-text */
  bigDesc?: string;
  contents: Content[];
}

export interface Props {
  /** @format rich-text */
  title?: string;
  description?: string;
  programs?: {
    open?: Training;
    exclusive?: Training;
  };
  workshopButton?: WorkshopButton;
}

const DEFAULT_TEXT =
  '<p class="gap-4"><span class="font-merryweather text-[2rem] text-main font-normal">Empresas nos contratam para</span><br>CRIAR EQUIPES DE <br> ALTO DESEMPENHO.</p>';

export default function HeroProgram({
  title = DEFAULT_TEXT,
  description = "CONHEÇA NOSSOS TREINAMENTOS",
  workshopButton = {
    text: "PARTICIPE DO PRÓXIMO TREINAMENTO",
    url: "https://www.miraeducacao.com.br/",
  },
  programs,
}: Props) {
  const openSignal = useSignal(true);
  const exclusiveSignal = useSignal(false);

  const handleTabClick = (tab: string) => {
    if (tab === "open") {
      openSignal.value = true;
      exclusiveSignal.value = false;
    } else {
      openSignal.value = false;
      exclusiveSignal.value = true;
    }
  };

  const renderContent = () => {
    const activeProgram = openSignal.value
      ? programs?.open
      : programs?.exclusive;

    if (!activeProgram) {
      return null;
    }

    return (
      <div className="w-full">
        <p
          className="font-bold text-main text-base lg:text-[1.25rem] leading-[110%] lg:leading-[150%] lg:text-center"
          dangerouslySetInnerHTML={{ __html: activeProgram.smallDesc ?? "" }}
        />
        <h2
          className="text-[1.5rem] lg:text-[3.375rem] leading-7 lg:leading-[110%] font-extrabold"
          dangerouslySetInnerHTML={{ __html: activeProgram.bigDesc ?? "" }}
        />
        <div class="flex flex-col lg:flex-row w-full gap-6">
          {activeProgram.contents.map((content, index) => (
            <div class="flex flex-col w-1/2">
              <div
                className="font-bold text-b-200 text-[2.25rem] lg:text-[5.0625rem] leading-[120%] lg:leading-[110%] lg:text-center"
                dangerouslySetInnerHTML={{
                  __html: content.recomendation ?? "",
                }}
              />
              <div
                key={index}
                className="w-full border border-b-200 rounded-lg mb-4"
              >
                <div class="flex items-center justify-between bg-main text-black rounded-t-lg p-6">
                  <div>
                    <h2 className="font-extrabold text-lg">{content.title}</h2>
                    <p className="text-sm">{content.description}</p>
                  </div>
                  <span class="border border-black px-5 py-1 rounded-full">
                    REMOTO
                  </span>
                </div>
                <div class="p-8 ">
                  <p className="text-sm mt-2">Próxima data: {content.date}</p>

                  <ul className="list-disc ml-4">
                    {content.infos?.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <a href={content.buttonUrl} className="text-blue-500 mt-12">
                    {content.buttonLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col justify-center items-center bg-black">
      <div className="flex flex-col items-center w-full lg:max-w-[1228px] min-[1650px]:max-w-[1440px] py-16 lg:py-[104px] px-6 lg:px-16 mx-auto">
        <h1
          className="font-extrabold text-b-200 text-[2.25rem] lg:text-[5.0625rem] leading-[120%] lg:leading-[110%] lg:text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className="flex flex-col justify-center items-center mt-8">
          <p className="text-b-200 text-sm lg:text-[1rem] lg:leading-[2.25rem]">
            {description}
          </p>
          <div className="flex justify-center items-center mt-4 relative bg-transparent border border-b-200 rounded-full p-2 lg:p-3 lg:min-w-[548px]">
            <button
              className={`w-1/2 px-6 py-4 font-bold focus:outline-none transition duration-300 ${
                openSignal.value
                  ? "bg-main text-black rounded-full"
                  : "text-b-200"
              }`}
              onClick={() => handleTabClick("open")}
            >
              ABERTOS
            </button>
            <button
              className={`w-1/2 ml-6 px-6 py-4 font-bold focus:outline-none transition duration-300 ${
                exclusiveSignal.value
                  ? "bg-main text-black rounded-full"
                  : "text-b-200"
              }`}
              onClick={() => handleTabClick("exclusive")}
            >
              EXCLUSIVOS
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-2 items-center justify-center mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <g clip-path="url(#clip0_225_352)">
              <path
                opacity="0.2"
                d="M25.9999 29.2999C31.3018 29.2999 35.5999 25.0018 35.5999 19.6999C35.5999 14.3979 31.3018 10.0999 25.9999 10.0999C20.698 10.0999 16.3999 14.3979 16.3999 19.6999C16.3999 25.0018 20.698 29.2999 25.9999 29.2999Z"
                fill="#FFBC4E"
              />
              <path
                d="M26 35.7C34.8366 35.7 42 28.5365 42 19.7C42 10.8634 34.8366 3.69995 26 3.69995C17.1634 3.69995 10 10.8634 10 19.7C10 28.5365 17.1634 35.7 26 35.7Z"
                stroke="#FFBC4E"
                stroke-width="3.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.9999 29.2999C31.3018 29.2999 35.5999 25.0018 35.5999 19.6999C35.5999 14.3979 31.3018 10.0999 25.9999 10.0999C20.698 10.0999 16.3999 14.3979 16.3999 19.6999C16.3999 25.0018 20.698 29.2999 25.9999 29.2999Z"
                stroke="#FFBC4E"
                stroke-width="3.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M35.5999 32.5V48.5L25.9979 43.7L16.3999 48.5V32.502"
                stroke="#FFBC4E"
                stroke-width="3.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_225_352">
                <rect
                  width="51.2"
                  height="51.2"
                  fill="white"
                  transform="translate(0.399902 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div class="text-center">
            <p>Vanto Group</p>
            <p>Parceiro Oficial</p>
          </div>
        </div>
        <div className="mt-[3.75rem] flex w-full justify-center items-center gap-6">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
