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
    '<p class="gap-4"><span class="font-merryweather text-[1.25rem] lg:text-[2rem] text-main font-normal">Empresas nos contratam para</span><br>CRIAR EQUIPES DE <br> ALTO DESEMPENHO.</p>';

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
            <div id="treinamentos" class="flex flex-col gap-10 lg:gap-20 w-full">
                <div class="flex gap-2.5">
                    <p
                        class="w-2/3 lg:w-full lg:mx-auto max-w-[450px] font-bold text-main text-base lg:text-[1.25rem] leading-[110%] lg:leading-[150%] lg:text-center"
                        dangerouslySetInnerHTML={{ __html: activeProgram?.smallDesc ?? "" }}
                    />
                    <div class="w-1/3 flex lg:hidden flex-col gap-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <g clip-path="url(#clip0_208_464)">
                                <path opacity="0.2" d="M11.5001 12.3929C13.7816 12.3929 15.6311 10.5433 15.6311 8.26186C15.6311 5.98037 13.7816 4.13086 11.5001 4.13086C9.21865 4.13086 7.36914 5.98037 7.36914 8.26186C7.36914 10.5433 9.21865 12.3929 11.5001 12.3929Z" fill="#FFBC4E" />
                                <path d="M11.5 15.1472C15.3025 15.1472 18.385 12.0647 18.385 8.2622C18.385 4.45972 15.3025 1.3772 11.5 1.3772C7.69751 1.3772 4.61499 4.45972 4.61499 8.2622C4.61499 12.0647 7.69751 15.1472 11.5 15.1472Z" stroke="#FFBC4E" stroke-width="1.377" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.5001 12.3929C13.7816 12.3929 15.6311 10.5433 15.6311 8.26186C15.6311 5.98037 13.7816 4.13086 11.5001 4.13086C9.21865 4.13086 7.36914 5.98037 7.36914 8.26186C7.36914 10.5433 9.21865 12.3929 11.5001 12.3929Z" stroke="#FFBC4E" stroke-width="1.377" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.6311 13.77V20.655L11.4993 18.5895L7.36914 20.655V13.7709" stroke="#FFBC4E" stroke-width="1.377" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_208_464">
                                    <rect width="22.032" height="22.032" fill="white" transform="translate(0.483887)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="text-center text-b-200">
                            <p class="text-[10.71px]">Vanto Group</p>
                            <p class="text-xs font-extrabold">Parceiro Oficial</p>
                        </div>
                    </div>
                </div>
                <h2
                    class="text-[1.5rem] lg:text-[3.375rem] leading-7 lg:leading-[110%] font-extrabold lg:text-center text-b-200 mt-6"
                    dangerouslySetInnerHTML={{ __html: activeProgram?.bigDesc ?? "" }}
                />
                <div class="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-6">
                    {activeProgram?.contents.map((content, index) => (
                        <div class="flex flex-col justify-end flex-1 min-h-full w-full" key={index}>
                            <div
                                class="hidden lg:block w-full h-[132px] font-bold text-[1.5rem] text-b-200 leading-[135%] lg:text-center py-6 lg:mb-20"
                                dangerouslySetInnerHTML={{
                                    __html: content.recomendation ?? "",
                                }}
                            />
                            <div
                                class="flex-1 flex flex-col justify-between w-full border border-b-200 rounded-3xl"
                            >
                                <div class="flex items-center justify-between bg-main text-black rounded-t-3xl p-6">
                                    <div>
                                        <h2 class="font-extrabold text-[1rem] lg:text-[2rem]">{content.title}</h2>
                                        <p class="text-[1rem] lg:text-[2rem] italic">{content.description}</p>
                                    </div>
                                    {(!displayProgram.value &&
                                        <span class="border border-black text-sm leading-[120%] lg:text-2xl px-5 py-1 rounded-full">
                                            REMOTO
                                        </span>
                                    )}
                                </div>
                                <div class="flex flex-col justify-between h-full gap-8 lg:gap-12 p-6 lg:p-8 flex-1">
                                    <div>
                                        <p class="text-b-200 text-[1.25rem] font-bold leading-[150%] text-center uppercase">{content.subtitle}</p>

                                        <ul class="flex flex-col gap-6 mt-6 lg:mt-12">
                                            {content.infos?.map((info, index) => (
                                                <li key={index} class="flex gap-2">
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

                                        <div class="flex flex-col">
                                            {content.details?.title && <h3 class="text-main text-base font-bold">{content.details.title}</h3>}
                                            <ul class="list-disc text-b-200 mt-4 ml-3">
                                                {content.details?.list?.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div class="flex flex-start gap-2 lg:gap-6 mt-12">
                                            {content.buttons?.map((cta, index) => (
                                                index === 1 ? (
                                                    <OpenModalButton
                                                        key={index}
                                                        label={cta.label ?? ""}
                                                        onOpen={openModal}
                                                    />
                                                ) : (
                                                    <a
                                                        class={`flex flex-nowrap px-6 lg:px-8 py-2 items-center rounded-3xl border border-main ${index === 0 ? 'text-black' : 'text-main'} text-base gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer ${index === 0 ? 'bg-main' : ''}`}
                                                        href={cta.url}
                                                        key={index}
                                                    >
                                                        <p class="text-nowrap">{cta.label}</p>
                                                        <Icon id="ExternalLink" class={`hidden lg:block ${index === 0 ? '' : 'text-main'}`} size={20} strokeWidth={0.01} />
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
        <section class="flex flex-col justify-center items-center bg-black">
            <div class="flex flex-col items-center w-full lg:max-w-[1228px] min-[1650px]:max-w-[1440px] py-16 lg:py-[104px] px-6 lg:px-16 mx-auto">
                <h1
                    class="font-extrabold text-b-200 text-[2.25rem] lg:text-[5.0625rem] leading-[120%] lg:leading-[110%] text-center"
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                <div class="flex flex-col justify-center items-center w-full mt-12 lg:mt-8">
                    <p class="font-bold lg:font-extrabold text-b-200 text-[1rem] leading-[135%] lg:leading-[150%]">
                        {description}
                    </p>
                    <ToggleButton />
                </div>
                <div class="hidden lg:flex flex-col gap-2 items-center justify-center mt-12">
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
                    <div class="text-center text-b-200">
                        <p>Vanto Group</p>
                        <p class="font-extrabold">Parceiro Oficial</p>
                    </div>
                </div>
                <div class="mt-[3.75rem] flex w-full justify-center items-center gap-6">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
}
