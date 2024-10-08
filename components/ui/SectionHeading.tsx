export interface HeadingProps {
  /** @format rich-text */
  title?: string;
  /** @format rich-text */
  subtitle?: string;
}

function SectionHeading({ title, subtitle }: HeadingProps) {
  return (
    <div class="space-y-6 text-b-200">
      <h2
        class="text-[1.5rem] md:text-[3.375rem] leading-7 md:leading-[110%] font-extrabold uppercase"
        dangerouslySetInnerHTML={{ __html: title ?? "" }}
      />

      <p class="text-base md:text-[1.25rem] leading-[135%] md:leading-[150%] font-light"
        dangerouslySetInnerHTML={{ __html: subtitle ?? "" }}
      />
    </div>
  );
}

export default SectionHeading;
