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
  const len2 = 8 * (len - 1);

  return (
    <>
      {children2.map((c, index) => {
        return (
          <li
            className={`list-none lg:mr-2 rounded-[24px] mb-2 ${
              itemVisible.value == index
                ? "bg-primary dark:bg-secondary"
                : "bg-[#FCD28A] dark:bg-[#F4B9AD] flex items-center lg:items-start lg:justify-center"
            } text-black`}
            onClick={() => (itemVisible.value = index)}
          >
            <button
              className={`flex items-center w-full px-6 py-3`}
            >
              <div
                className={`${
                  itemVisible.value == index
                    ? "pr-4"
                    : "flex items-center lg:items-start lg:justify-center"
                }`}
              >
                <span
                  className={`text-[2rem] lg:text-[3rem] font-black leading-[100%] tracking-[-3.2px] lg:leading-[140%] lg:tracking-[-4.8px]`}
                >
                  {index + 1}
                </span>
              </div>
              {itemVisible.value == index && (
                <h3 className="lg:hidden pl-6 lg:pl-12 font-black text-[1.5rem] leading-relaxed lg:text-[4rem] lg:leading-[110%]">
                  {c.title}
                </h3>
              )}
            </button>
            <div
              className={`grid 
              overflow-hidden transition-all duration-700 ease-in-out ${
                itemVisible.value === index
                  ? "grid-rows-[1fr] opacity-100 ml-4 pl-8 pr-6 py-8 lg:px-12 lg:py-16 lg:pt-0 gap-10"
                  : "grid-rows-[0fr] opacity-0 lg:w-0"
              }`}
            >
              <div className="overflow-hidden">
                <h3 className="hidden lg:block pl-6 lg:pl-0 lg:pb-10 font-black text-[1.5rem] leading-relaxed lg:text-[4rem] lg:leading-[110%]">
                  {c.title}
                </h3>
                <p className="ml-6 lg:ml-0 font-merriweather text-base lg:text-[1.5rem] lg:leading-9">
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
