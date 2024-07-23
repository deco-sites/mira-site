import { App, AppContext as AC } from "deco/mod.ts";
import website, { Props as WebsiteAPP } from "apps/website/mod.ts";
import { Secret } from "apps/website/loaders/secret.ts";

import manifest, { Manifest } from "../manifest.gen.ts";

type WebsiteApp = ReturnType<typeof website>;

export type Props = {
  /**
   * @title Active Commerce Platform
   * @description Choose the active ecommerce platform
   * @default custom
   */
  airtableKey: Secret;
  airtableBase: string;
  airtableTable: string;
} & WebsiteAPP;

export default function Site(
  state: Props,
): App<Manifest, Props, [
  WebsiteApp,
]> {
  return {
    state,
    manifest,
    dependencies: [
      website(state),
    ],
  };
}

export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps, Preview } from "apps/website/mod.ts";
