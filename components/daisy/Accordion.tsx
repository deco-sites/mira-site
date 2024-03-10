import { useSignal } from "@preact/signals";
import Icon from "deco-sites/mira-site/components/ui/Icon.tsx";

interface Child {
  title?: string;
  /** @format textarea */
  description?: string;
}
export interface Props {
  children2: Child[];
}

export default function Accordion(props: Props) {
  const { children2 } = props;
  const itemVisible = useSignal(0);
  const len = children2.length;
  const len2 = 8 * (len - 1);

  return (
    <>
      {children2.map((c, index) => {
        const firstTitle = c.title?.split(" ")[0];
        const secondTitle = c.title?.split(" ")[1];
        return (
          <li
            className={`flex flex-row w-[calc((100%/${len})-${len2}px)] max-h-[540px] list-none min-[1264px]:mr-2 rounded-[24px] mb-2 ${
              itemVisible.value == index
                ? "bg-main dark:bg-sub"
                : "bg-[#FCD28A] dark:bg-[#F4B9AD] min-[1264px]:justify-center  hover:cursor-pointer hover:opacity-75 transition-opacity duration-300"
            } text-black`}
            onClick={() => (itemVisible.value = index)}
          >
            <div
              className={`flex items-start ${
                itemVisible.value == index ? "pt-8" : "py-3"
              } px-6 min-[1264px]:py-8`}
            >
              <div
                className={`${
                  itemVisible.value !== index &&
                  "flex items-center min-[1264px]:items-start min-[1264px]:justify-center"
                }`}
              >
                <span
                  className={`text-[2rem] min-[1264px]:text-[3rem] font-black leading-[100%] tracking-[-3.2px] min-[1264px]:leading-[140%] min-[1264px]:tracking-[-4.8px]`}
                >
                  {index + 1}
                </span>
              </div>
            </div>
            <div
              className={`grid 
              overflow-hidden transition-all min-[1264px]:transition-opacity duration-700 min-[1264px]:duration-[1200ms] ease-in-out ${
                itemVisible.value === index
                  ? "max-[1263px]:grid-rows-[1fr] min-[1264px]:grid-cols-[1fr] opacity-100 px-6 py-8 min-[1264px]:px-12 min-[1264px]:py-16 gap-10"
                  : "max-[1263px]:grid-rows-[0fr] min-[1264px]:grid-cols-[0fr] opacity-0 min-[1264px]:w-0"
              }`}
            >
              <div className="overflow-hidden space-y-10">
                <h3 className="font-black text-[1.35rem] leading-relaxed min-[1264px]:text-[2.5rem] min-[1264px]:leading-[110%]">
                  {firstTitle}
                  <div className="flex items-center flex-wrap-reverse">
                    <div class="p-1 min-[1264px]:p-4 mr-1">
                      <Icon
                        id="InverseExternalLink"
                        class="mx-0 min-[1264px]:w-[35px] min-[1264px]:h-[35px]"
                        size={14.2}
                        strokeWidth={20}
                      />
                    </div>
                    <span className="text-[1.35rem] leading-relaxed min-[1264px]:text-[2.5rem] min-[1264px]:leading-[110%]">
                      {secondTitle}
                    </span>
                  </div>
                </h3>
                <p className="font-merriweather text-base min-[1264px]:text-[1.5rem] min-[1264px]:leading-9">
                  {c.description}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
