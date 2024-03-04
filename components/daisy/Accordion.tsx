export interface Props {
  children: Child[];
}

interface Child {
  title?: string;
  description?: string;
}

export default function Accordion(props: Props) {
  const { children } = props;

  return (
    <>
      {children.map((c, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-5 justify-center items-center bg-primary rounded-[24px] mb-2 text-black dark:bg-secondary"
          >
            <input
              type="radio"
              name="pilar"
              id={`pilar-${index}`}
              className="appearance-none peer"
              checked={index === 0}
            />
            <h2 className="col-start-1 col-span-1 w-[66px] text-[2rem] font-black leading-loose flex justify-center items-center">
              {index + 1}
            </h2>
            <label
              htmlFor={`pilar-${index}`}
              className="col-start-2 col-span-4 flex items-center cursor-pointer font-semibold text-lg"
            >
              <h3 className="font-black text-[1.5rem] leading-relaxed">
                {c.title}
              </h3>
            </label>
            <div className="col-start-2 col-span-4 peer-checked:mt-5 peer-checked:mr-6 peer-checked:mb-8 max-h-0 peer-checked:max-h-[1000px] overflow-hidden transition-max-height duration-300 ease-in-out ">
              <p className="font-merriweather text-base">{c.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
