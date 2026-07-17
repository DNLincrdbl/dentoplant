import type { ComponentType } from "react";
import type { Locale } from "@/lib/i18n/config";
import DigitalisMosolytervezes from "./digitalis-mosolytervezes";
import ElsoTalalkozas from "./elso-talalkozas";
import Szajhigienia from "./szajhigienia";
import Gyermekfogaszat from "./gyermekfogaszat";
import Gyokerkezeles from "./gyokerkezeles";
import Bolcsessegfog from "./bolcsessegfog";
import Inygyulladas from "./inygyulladas";
import Parodontologia from "./parodontologia";
import Szajsebeszet from "./szajsebeszet";
import EsztetikaiFogaszat from "./esztetikai-fogaszat";
import Fogfeherites from "./fogfeherites";
import Implantatum from "./implantatum";
import Fogszabalyozas from "./fogszabalyozas";

/**
 * Registry of fully-implemented service detail pages.
 * Add new entries here (and flip `hasFullContent: true` in `lib/services.ts`)
 * as additional service contents are written.
 */
export type ServiceContentProps = { locale: Locale };

export const SERVICE_CONTENTS: Record<string, ComponentType<ServiceContentProps>> = {
  "digitalis-mosolytervezes": DigitalisMosolytervezes,
  "elso-talalkozas": ElsoTalalkozas,
  szajhigienia: Szajhigienia,
  gyermekfogaszat: Gyermekfogaszat,
  gyokerkezeles: Gyokerkezeles,
  bolcsessegfog: Bolcsessegfog,
  inygyulladas: Inygyulladas,
  parodontologia: Parodontologia,
  szajsebeszet: Szajsebeszet,
  "esztetikai-fogaszat": EsztetikaiFogaszat,
  fogfeherites: Fogfeherites,
  implantatum: Implantatum,
  fogszabalyozas: Fogszabalyozas,
};
