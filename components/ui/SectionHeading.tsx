export interface HeadingProps {
  /** @format rich-text */
  title?: string;
  subtitle?: string;
}

function SectionHeading({ title, subtitle }: HeadingProps) {
  return (
    <>
      <h2
        class="text-[1.5rem] lg:text-[3.375rem] leading-7 lg:leading-[110%] font-extrabold uppercase text-b-20"
        dangerouslySetInnerHTML={{ __html: title ?? "" }}
      />

      <p class="text-base lg:text-[1.25rem] leading-[135%] lg:leading-[150%] font-light">
        {subtitle}
      </p>
    </>
  );
}

export default SectionHeading;
