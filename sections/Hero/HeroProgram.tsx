import { useSignal } from "@preact/signals";
import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "deco-sites/mira-site/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import ToggleButton from "deco-sites/mira-site/islands/ToggleButton.tsx";
import OpenModalButton from "$store/islands/OpenModalButton.tsx";
import Modal from "$store/components/hero/Modal.tsx"; 

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
}

const DEFAULT_TEXT =
    '<p class="gap-4"><span class="font-merryweather text-[2rem] text-main font-normal">Empresas nos contratam para</span><br>CRIAR EQUIPES DE <br> ALTO DESEMPENHO.</p>';

export default function HeroProgram({
    title = DEFAULT_TEXT,
    description = "CONHEÇA NOSSOS TREINAMENTOS",
    programs,
}: Props) {

    const { displayProgram } = useUI();

    const isModalOpen = useSignal(false);

    const openModal = () => {
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };

    console.log("displayProgram", displayProgram.value)

    const renderContent = () => {
        const activeProgram = !displayProgram.value
            ? programs?.open
            : programs?.exclusive;

        // if (!activeProgram) {
        //     return null;
        // }

        return (
            <div className="flex flex-col gap-20 w-full">
                <p
                    className="font-bold text-main text-base lg:text-[1.25rem] leading-[110%] lg:leading-[150%] lg:text-center"
                    dangerouslySetInnerHTML={{ __html: activeProgram?.smallDesc ?? "" }}
                />
                <h2
                    className="text-[1.5rem] lg:text-[3.375rem] leading-7 lg:leading-[110%] font-extrabold lg:text-center text-b-200"
                    dangerouslySetInnerHTML={{ __html: activeProgram?.bigDesc ?? "" }}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-6">
                    {activeProgram?.contents.map((content, index) => (
                         <div className="flex flex-col justify-end flex-1 min-h-full w-full space-y-20" key={index}>
                            <div
                                className="hidden lg:block w-full h-[132px] font-bold text-[1.5rem] text-b-200 leading-[135%] lg:text-center py-6"
                                dangerouslySetInnerHTML={{
                                    __html: content.recomendation ?? "",
                                }}
                            />
                            <div
                                className="flex-1 flex flex-col justify-between w-full border border-b-200 rounded-3xl"
                            >
                                <div className="flex items-center justify-between bg-main text-black rounded-t-3xl p-6">
                                    <div>
                                        <h2 className="font-extrabold text-[1rem] lg:text-[2rem]">{content.title}</h2>
                                        <p className="text-[1rem] lg:text-[2rem] italic">{content.description}</p>
                                    </div>
                                    {(!displayProgram.value &&
                                    <span className="border border-black text-sm leading-[120%] lg:text-2xl px-5 py-1 rounded-full">
                                        REMOTO
                                    </span>
                                    )}
                                </div>
                                <div className="flex flex-col justify-between h-full gap-8 lg:gap-12 p-6 lg:p-8 flex-1">
                                    <div>
                                        <p className="text-b-200 text-[1.25rem] font-bold leading-[150%] text-center uppercase">{content.subtitle}</p>

                                        <ul className="flex flex-col gap-6 mt-6 lg:mt-12">
                                            {content.infos?.map((info, index) => (
                                                <li key={index} className="flex gap-2">
                                                    <Image
                                                        src={info.icon ?? ''}
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
                                    </div>

                                    <div>

                                        <div className="flex flex-col">
                                            {content.details?.title && <h3 className="text-main text-base font-bold">{content.details.title}</h3>}
                                            <ul className="list-disc text-b-200 mt-4 ml-3">
                                                {content.details?.list?.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex flex-start gap-6 mt-12">
                                        {content.buttons?.map((cta, index) => (
                                                index === 1 ? (
                                                    <OpenModalButton
                                                        key={index}
                                                        label={cta.label ?? ""}
                                                        onOpen={openModal}
                                                    />
                                                ) : (
                                                    <a
                                                        className={`flex flex-nowrap px-8 py-2 items-center rounded-3xl border border-main ${index === 0 ? 'text-black' : 'text-main'} text-base gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer ${index === 0 ? 'bg-main' : ''}`}
                                                        href={cta.url}
                                                        key={index}
                                                    >
                                                        <p className="text-nowrap">{cta.label}</p>
                                                        <Icon id="ExternalLink" class={`${index === 0 ? '' : 'text-main'}`} size={20} strokeWidth={0.01} />
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
                    <ToggleButton />
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
