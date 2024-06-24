import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  logo?: AvailableIcons;
  title?: string;
  subtitle?: string;
  classification?: string;
  programDescription?: string;
  itemsList?: Array<{ icon: AvailableIcons; text: string }>;
  highlightedNote?: string;
  noteItems?: string[];
  ctaMain?: { text: string; link: string };
  ctaOutline?: { text: string; link: string };
  photo?: ImageWidget;
}

const IMAGE_WIDTH = 80;

export default function ProgramCards(props: Props) {
  const {
    title,
    subtitle,
    classification,
    programDescription,
    itemsList,
    highlightedNote,
    noteItems,
    ctaMain,
    ctaOutline,
  } = props;

  return (
    <div className="p-6 lg:p-8 text-black bg-yellow-500 rounded-[24px_24px_0_24px]">
      <div className="flex flex-col h-full gap-6 items-start justify-between">
        {/* Header */}
        <div className="space-y-2">
          {title && <h1 className="text-xl font-bold">{title}</h1>}
          {subtitle && <h2 className="text-lg">{subtitle}</h2>}
          {classification && (
            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
              {classification}
            </span>
          )}
        </div>

        {/* Program Description */}
        {programDescription && (
          <p className="text-white text-[0.8125rem] lg:text-[15px] leading-[150%]">
            {programDescription}
          </p>
        )}

        {/* Items List */}
        {itemsList && (
          <ul className="space-y-2">
            {itemsList.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Icon
                  id={item.icon}
                  className="flex fill-white dark:fill-black max-h-[24px]"
                />
                <span className="text-white">{item.text}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Highlighted Note */}
        {highlightedNote && (
          <div className="bg-main text-white p-2 rounded">
            <p>{highlightedNote}</p>
          </div>
        )}

        {/* Note Items */}
        {noteItems && (
          <ul className="list-disc list-inside space-y-1 text-white">
            {noteItems.map((note, index) => <li key={index}>{note}</li>)}
          </ul>
        )}

        {/* CTAs */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {ctaMain && (
            <a
              href={ctaMain.link}
              className="bg-main text-white px-4 py-2 rounded text-center"
            >
              {ctaMain.text}
            </a>
          )}
          {ctaOutline && (
            <a
              href={ctaOutline.link}
              className="border border-main text-main px-4 py-2 rounded text-center"
            >
              {ctaOutline.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
