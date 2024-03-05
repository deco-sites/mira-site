import { useSignal } from "@preact/signals";

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
  const len2 = 8 * (len-1);

  return (
    <>
      {children2.map((c, index) => {
        return (
          <li
            key={index}
            className={`flex w-[calc((100%/${len})-${len2}px)] items-start lg:mr-2 rounded-[24px] mb-2 text-black hover:cursor-pointer
            ${
              itemVisible.value == index
                ? "bg-primary dark:bg-secondary"
                : "bg-[#FCD28A] dark:bg-[#F4B9AD]"
            }
            `}
            onClick={() => (itemVisible.value = index)}
          >
            <p
              className={`flex justify-center items-center 
              ${
                itemVisible.value == index ? "px-4 py-8" : "px-6 py-3"
              } lg:px-6 w-[66px] text-[2rem] lg:text-[3rem] font-black leading-[100%] tracking-[-3.2px] lg:leading-[140%] lg:tracking-[-4.8px]`}
            >
              {index + 1}
            </p>
            <div
              className={`${
                itemVisible.value == index ? "flex" : "hidden"
              } flex-col px-6 py-8 lg:px-12 lg:py-16 gap-10 items-start`}
            >
              <h3 className="flex items-start font-black text-[1.5rem] leading-relaxed lg:text-[4rem] lg:leading-[110%]">
                {c.title}
              </h3>
              <div className="overflow-hidden transition-max-height duration-300 ease-in-out 
              mt-5 mr-6 mb-8 max-h-[1000px]
              ">
                <p className="font-merriweather text-base lg:text-[1.5rem] lg:leading-9">
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
