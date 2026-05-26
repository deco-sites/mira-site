import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Layout {
  sectionWidth?: "100%" | "Contained";
  innerContentWidth?: "Contained" | "2/3" | "100%";
}

export interface SectionBackGround {
  bgColor?: Colors;
  bgImage?: ImageWidget;
}

export type Colors =
  | "Transparent"
  | "Backdrop opacity"
  | "Primary"
  | "Secondary"
  | "Tertiary"
  | "Base"
  | "Base inverted";

export type BorderRadius =
  | "None"
  | "Small"
  | "Normal"
  | "Medium"
  | "Large"
  | "Extra large"
  | "Full";

export type Shadow =
  | "None"
  | "Small"
  | "Normal"
  | "Medium"
  | "Large"
  | "Extra large";

export type TextColors =
  | "Auto"
  | "Primary"
  | "Secondary"
  | "Tertiary"
  | "Base"
  | "Base inverted";

export type BorderColors =
  | "Transparent"
  | "Primary"
  | "Secondary"
  | "Tertiary"
  | "Base"
  | "Base inverted";

export type ButtonColor =
  | "Default"
  | "Primary"
  | "Secondary"
  | "Tertiary";

export interface ButtonType {
  color?: ButtonColor;
  outline?: boolean;
}

export const borderRadiusClasses = {
  "None": "rounded-none",
  "Small": "rounded-sm",
  "Normal": "rounded",
  "Medium": "rounded-md",
  "Large": "rounded-lg",
  "Extra large": "rounded-3xl",
  "Full": "rounded-full",
};

export const shadowClasses = {
  "None": "drop-shadow-none",
  "Small": "drop-shadow-sm",
  "Normal": "drop-shadow",
  "Medium": "drop-shadow-md",
  "Large": "drop-shadow-lg",
  "Extra large": "drop-shadow-2xl",
};

export const layoutClasses = {
  "100%": "",
  "Contained": "lg:container lg:mx-auto",
  "2/3": "lg:mx-auto lg:w-2/3",
};

export const imgPh = {
  "sq":
    "https://decoims.com/mira-site/60b26760-a684-498c-b70e-26583bde0891/331b997080873d67.png",
  "rct-sm":
    "https://decoims.com/mira-site/c3867e78-2194-4b0b-be21-1dc63f1f6128/956fd212ebb6246d.png",
  "rct-lg":
    "https://decoims.com/mira-site/01025bc4-6c2d-4127-9ee9-1647ca7a7d14/de2e97d647a7a1af.png",
};

export const colorClasses = {
  "Transparent": "",
  "Backdrop opacity": "backdrop-opacity-30 bg-white/40",
  "Primary": "bg-primary text-primary-content",
  "Secondary": "bg-secondary text-secondary-content",
  "Tertiary": "bg-accent text-accent-content",
  "Base": "bg-base-100 text-base-content",
  "Base inverted": "bg-base-content text-base-100",
};

export const borderColorClasses = {
  "Transparent": "",
  "Backdrop opacity": "border-base-100",
  "Primary": "border-primary-content",
  "Secondary": "border-secondary-content",
  "Tertiary": "border-accent-content",
  "Base": "border-base-content",
  "Base inverted": "border-base-100",
};

export const borderColorClasses2 = {
  "Transparent": "border-transparent",
  "Primary": "border-primary",
  "Secondary": "border-secondary",
  "Tertiary": "border-accent",
  "Base": "border-base",
  "Base inverted": "border-base-content",
};

export const lineColorClasses = {
  "Auto": "",
  "Primary": "border-primary",
  "Secondary": "border-secondary",
  "Tertiary": "border-accent",
  "Base": "border-base",
  "Base inverted": "border-base-content",
};

export const textColorClasses = {
  "Auto": "",
  "Primary": "text-primary",
  "Secondary": "text-secondary",
  "Tertiary": "text-accent",
  "Base": "text-base-100",
  "Base inverted": "text-base-content",
};

export const buttonClasses = {
  "Default": "",
  "Primary": "btn-primary",
  "Secondary": "btn-secondary",
  "Tertiary": "btn-accent",
};

export function getButtonClasses(style: ButtonType) {
  const allButtonClasses = `btn ${buttonClasses[style?.color || "Default"]} ${
    style?.outline ? "btn-outline" : ""
  }`;

  return allButtonClasses;
}
