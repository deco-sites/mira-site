import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

interface Content {
  /** @format rich-text */
  title: string;
  description?: string;
  subtitle?: string;
  details: {
    title?: string;
    list?: string[];
  };
}

interface Recommendation {
  header?: {
    prefix?: string;
    logo?: ImageWidget;
    suffix?: string;
  };
  /** @format html */
  quote: string;
}

interface Training {
  contents: Content[];
}

export interface Props {
  title?: {
    top: HTMLWidget;
    bottom: string;
  };
  recommendations?: Recommendation[];
  programs?: {
    open?: Training;
  };
  videoUrl?: string;
}

export default function HeroProgram({
  title,
  recommendations,
  programs,
  videoUrl,
}: Props) {
  const activeProgram = programs?.open;

  const renderContent = () => {
    if (!activeProgram && !recommendations?.length) {
      return null;
    }

    return (
      <div
        id="treinamentos"
        class="flex flex-col gap-10 lg:gap-20 w-full"
      >
        {/* Recommendations Section */}
        {recommendations && recommendations.length > 0 && (
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recommendations.map((recommendation, index) => (
              <div
                key={`recommendation-${index}`}
                class="w-full"
              >
                {/* Recommendation Header */}
                {recommendation.header && (
                  <div class="flex items-center justify-center text-b-200 text-[1.25rem] font-bold mb-2 gap-2">
                    {recommendation.header.prefix && (
                      <span>{recommendation.header.prefix}</span>
                    )}
                    {recommendation.header.logo && (
                      <img
                        src={recommendation.header.logo}
                        alt="Company logo"
                        class="max-h-5 md:max-h-7 object-contain"
                      />
                    )}
                    {recommendation.header.suffix && (
                      <span>{recommendation.header.suffix}</span>
                    )}
                  </div>
                )}

                {/* Recommendation Quote */}
                <div
                  class="w-full italic text-[1rem] text-main leading-[135%] text-center"
                  dangerouslySetInnerHTML={{
                    __html: recommendation.quote,
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Modules Cards */}
        {activeProgram && (
          <div class="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-6">
            {activeProgram.contents.map((content, index) => (
              <div
                class="flex flex-col justify-end w-full"
                key={index}
              >
                <div class="flex-1 flex flex-col justify-between w-full border border-b-200 rounded-3xl overflow-hidden">
                  <div class="flex items-center justify-between gap-1 bg-main text-black p-6">
                    <div>
                      <h2 class="font-extrabold text-[1rem] md:text-[1.5rem] min-[1650px]:text-[2rem]">
                        {content.title}
                      </h2>
                      <p class="f-roman text-[1rem] md:text-[1.5rem] md:leading-[110%] min-[1650px]:text-[2rem] italic">
                        {content.description}
                      </p>
                    </div>
                    <div class="flex flex-col gap-1.5">
                      <span class="flex justify-center border-2 font-bold border-black text-sm leading-[120%] md:text-[1.125rem] min-[1650px]:text-2xl px-2 md:px-4 py-1 rounded-full">
                        REMOTO
                      </span>
                      <span class="flex justify-center border-2 font-bold border-black text-sm leading-[120%] md:text-[1.125rem] min-[1650px]:text-2xl px-2 md:px-4 py-1 rounded-full">
                        PRESENCIAL
                      </span>
                    </div>
                  </div>

                  <div class="flex flex-col bg-black p-6 md:p-8 flex-1">
                    <p class="text-b-200 text-center uppercase font-bold text-xl md:text-2xl leading-[150%] mb-6">
                      {content.subtitle}
                    </p>

                    <div class="text-b-200 font-normal text-lg md:text-xl">
                      {content.details?.title && (
                        <p class="text-main text-lg md:text-xl font-bold mb-4">
                          {content.details.title}
                        </p>
                      )}

                      <div class="mb-8">
                        {content.details?.list && (
                          <ul class="list-disc pl-5 space-y-2">
                            {content.details.list.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section class="flex flex-col justify-center items-center bg-black">
      <div class="flex flex-col items-center w-full lg:max-w-[1228px] min-[1650px]:max-w-[1440px] py-16 lg:pt-0 min-[1650px]:pt-16 lg:pb-[104px] px-6 md:px-8 lg:px-16 mx-auto min-[1024px]:scale-90 min-[1650px]:scale-100">
        <h1 class="flex flex-col font-extrabold text-b-200 text-[2.05rem] md:text-[4rem] lg:text-[5.0625rem] leading-[120%] lg:leading-[110%] text-center">
          <span
            class="f-roman text-[1.25rem] md:text-[2rem] lg:text-[2.25rem] leading-[120%] md:leading-[110%] tracking-[-0.6px] md:tracking-[-0.96px] lg:tracking-[-1.08px] text-main font-normal mb-2 md:mb-4"
            dangerouslySetInnerHTML={{ __html: title?.top ?? "" }}
          />
          {title?.bottom}
        </h1>

        <div class="mt-[3.75rem] flex w-full justify-center items-center gap-6">
          {renderContent()}
        </div>

        {videoUrl && (
          <div class="w-full mt-10 lg:mt-20">
            <div class="flex w-full justify-center">
              <iframe
                class="w-full lg:w-4/5 aspect-video rounded-xl border border-b-200 dark:border-0 p-0.5"
                src={videoUrl}
                title="Video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              >
              </iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
