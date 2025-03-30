import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import ToggleButton from "site/islands/ToggleButton.tsx";
import OpenModalButton from "$store/islands/OpenModalButton.tsx";

interface CTA {
  label?: string;
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
    label?: string;
  }[];
  details: {
    title?: string;
    list?: string[];
  };
  buttons?: CTA[];
}

interface Training {
  smallDesc?: HTMLWidget;
  bigDesc?: {
    title: HTMLWidget;
    subtitle: HTMLWidget;
  };
  contents: Content[];
  video?: string;
}

export interface Props {
  title?: {
    top: HTMLWidget;
    bottom: string;
  }
  description?: string;
  programs?: {
    open?: Training;
    exclusive?: Training;
  };
}

export default function HeroProgram({
  title,
  description = "CONHEÇA NOSSOS TREINAMENTOS",
  programs,
}: Props) {
  const { displayProgram } = useUI();

  const activeProgram = !displayProgram.value
    ? programs?.open
    : programs?.exclusive;

  const renderContent = () => {
    if (!activeProgram) {
      return null;
    }

    return (
      <div
        id="treinamentos"
        class="flex flex-col gap-10 lg:gap-20 w-full {"
      >
        <div
          class={`flex ${
            activeProgram == programs?.exclusive ? "lg:flex-row-reverse" : ""
          } gap-2.5 md:gap-14 md:w-full md:mx-auto items-center justify-evenly max-w-[646px]`}
        >
          <p
            class="w-2/3 md:w-full max-w-[450px] font-bold text-main text-base md:text-[1.25rem] leading-[110%] md:leading-[150%] md:text-center"
            dangerouslySetInnerHTML={{
              __html: activeProgram?.smallDesc ?? "",
            }}
          />
        </div>
        {activeProgram.bigDesc &&
          (
            <div class="md:text-center mt-6 text-[1.25rem] md:text-[2rem] lg:text-[2.25rem] tracking-[-0.6px] md:tracking-[-0.96px] lg:tracking-[-1.08px]">
              <h2 class="text-[1.5rem] md:text-[2.5rem] lg:text-[3.375rem] leading-[120%] md:leading-[110%] tracking-normal font-extrabold text-b-200"
                dangerouslySetInnerHTML={{
                  __html: activeProgram?.bigDesc.title,
                }}
              />
              <h6 class="f-roman font-normal italic text-[1.25rem] md:text-[2rem] lg:text-[2.25rem] tracking-[-0.6px] md:tracking-[-0.96px] lg:tracking-[-1.08px] leading-[120%] md:leading-[110%] text-main"
                dangerouslySetInnerHTML={{
                  __html: activeProgram?.bigDesc.subtitle,
                }}
              />
            </div>
          )}
        <div class="flex flex-col-reverse items-center min-[1850px]:flex-row gap-12 lg:gap-16">
          {displayProgram.value &&
            (
              <div class="flex w-full max-h-[387px] lg:w-2/3 min-[1850px]:w-1/2 justify-center">
                <iframe
                  class="w-full aspect-video rounded-xl border border-b-200 dark:border-0 p-0.5"
                  src={activeProgram?.video ??
                    `https://player.vimeo.com/video/973597501?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                >
                </iframe>
              </div>
            )}
          <div
            class={`relative grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-6 ${
              activeProgram == programs?.exclusive
                ? "min-[1850px]:flex flex-col min-[1850px]:w-1/2"
                : ""
            }`}
          >
            {activeProgram?.contents.map((content, index) => (
              <div
                class="flex flex-col justify-end w-full"
                key={index}
              >
                {content.recomendation &&
                  (
                    <div
                      class="hidden lg:block w-full h-[132px] font-bold text-[1.25rem] text-b-200 leading-[135%] lg:text-center py-6 lg:mb-20"
                      dangerouslySetInnerHTML={{
                        __html: content.recomendation,
                      }}
                    />
                  )}
                <div class="flex-1 flex flex-col justify-between w-full border border-b-200 rounded-3xl">
                  <div class="flex items-center justify-between gap-1 bg-main text-black rounded-t-3xl p-6">
                    <div>
                      <h2 class="font-extrabold text-[1rem] md:text-[1.5rem] min-[1650px]:text-[2rem]">
                        {content.title}
                      </h2>
                      <p class="f-roman text-[1rem] md:text-[1.5rem] md:leading-[110%] min-[1650px]:text-[2rem] italic">
                        {content.description}
                      </p>
                    </div>
                    {!displayProgram.value
                      ? (
                        <span class="border-2 font-bold border-black text-sm leading-[120%] md:text-[1.125rem] min-[1650px]:text-2xl px-4 py-1 rounded-full">
                          REMOTO
                        </span>
                      )
                      : (
                        <div class="flex flex-col gap-1.5">
                          <span class="flex justify-center border-2 font-bold border-black text-sm leading-[120%] md:text-[1.125rem] min-[1650px]:text-2xl px-2 md:px-4 py-1 rounded-full">
                            REMOTO
                          </span>
                          <span class="flex justify-center border-2 font-bold border-black text-sm leading-[120%] md:text-[1.125rem] min-[1650px]:text-2xl px-2 md:px-4 py-1 rounded-full">
                            PRESENCIAL
                          </span>
                        </div>
                      )}
                  </div>
                  <div class="flex flex-col justify-between h-full gap-8 md:gap-10 p-6 md:p-8 flex-1">
                    <div>
                      <p class="text-b-200 text-sm md:text-[1.25rem] font-bold leading-[150%] text-center uppercase">
                        {content.subtitle}
                      </p>
                      {content.infos &&
                        (
                          <ul class="flex flex-col gap-6 mt-6 md:mt-10 text-[1rem] md:text-xl text-b-200 font-light">
                            {content.infos?.map((
                              info,
                              index,
                            ) => (
                              <li
                                key={index}
                                class="flex gap-2 items-center font-light"
                              >
                                <Image
                                  src={info
                                    .icon ?? ""}
                                  width={32}
                                  height={32}
                                  loading="lazy"
                                  decoding="async"
                                  fetchPriority="low"
                                  preload
                                />
                                {info.label}
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>

                    <div>
                      {content.details &&
                        (
                          <div class="flex flex-col">
                            {content.details?.title && (
                              <h3 class="text-main text-xs md:text-base font-extrabold md:font-bold">
                                {content.details
                                  .title}
                              </h3>
                            )}
                            <ul class="list-disc text-b-200 mt-4 ml-3 pl-3 text-sm md:text-[1.25rem] leading-[135%] md:leading-[150%] font-light">
                              {content.details?.list
                                ?.map((
                                  detail,
                                  index,
                                ) => (
                                  <li key={index}>
                                    {detail}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}
                      <div
                        class={`flex flex-start gap-2 md:gap-6 ${
                          !displayProgram.value ? "mt-12" : ""
                        }`}
                      >
                        {content.buttons?.map((
                          cta,
                          index,
                        ) => (
                          index === 1 ||
                            content.buttons?.length ===
                              1
                            ? (
                              <OpenModalButton
                                label={cta.label ??
                                  ""}
                              />
                            )
                            : (
                              <a
                                class={`flex flex-nowrap px-4 md:px-8 py-2 items-center rounded-3xl border border-main ${
                                  index === 0 ? "text-black" : "text-main"
                                } text-base gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer ${
                                  index === 0 ? "bg-main" : ""
                                }`}
                                href={cta.url}
                                key={index}
                              >
                                <p class="text-nowrap text-sm md:text-[1rem]">
                                  {cta.label}
                                </p>
                                <Icon
                                  id="ExternalLink"
                                  class={`hidden md:block ${
                                    index === 0 ? "" : "text-main"
                                  }`}
                                  size={20}
                                  strokeWidth={0.01}
                                />
                              </a>
                            )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section class="flex flex-col justify-center items-center bg-black">
      <div class="flex flex-col items-center w-full lg:max-w-[1228px] min-[1650px]:max-w-[1440px] py-16 lg:pt-0 min-[1650px]:pt-16 lg:pb-[104px] px-6 md:px-8 lg:px-16 mx-auto min-[1024px]:scale-90 min-[1650px]:scale-100">
        <h1
          class="flex flex-col font-extrabold text-b-200 text-[2.05rem] md:text-[4rem] lg:text-[5.0625rem] leading-[120%] lg:leading-[110%] text-center">
            <span class="f-roman text-[1.25rem] md:text-[2rem] lg:text-[2.25rem] leading-[120%] md:leading-[110%] tracking-[-0.6px] md:tracking-[-0.96px] lg:tracking-[-1.08px] text-main font-normal mb-2 md:mb-4" dangerouslySetInnerHTML={{ __html: title?.top ?? '' }}/>{title?.bottom}
        </h1>

        <div class="flex flex-col justify-center items-center w-full mt-12">
          <p class="font-bold lg:font-extrabold text-b-200 text-[1rem] leading-[135%] lg:leading-[150%]">
            {description}
          </p>
          <ToggleButton />
        </div>
        <div class="mt-[3.75rem] flex w-full justify-center items-center gap-6">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
