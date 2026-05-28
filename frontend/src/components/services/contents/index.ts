import type { ComponentType } from "react";
import DigitalisMosolytervezes from "./digitalis-mosolytervezes";
import ElsoTalalkozas from "./elso-talalkozas";
import Szajhigienia from "./szajhigienia";
import Bolcsessegfog from "./bolcsessegfog";
import Inygyulladas from "./inygyulladas";
import Parodontologia from "./parodontologia";
import Szajsebeszet from "./szajsebeszet";

/**
 * Registry of fully-implemented service detail pages.
 * Add new entries here (and flip `hasFullContent: true` in `lib/services.ts`)
 * as additional service contents are written.
 */
export const SERVICE_CONTENTS: Record<string, ComponentType> = {
  "digitalis-mosolytervezes": DigitalisMosolytervezes,
  "elso-talalkozas": ElsoTalalkozas,
  szajhigienia: Szajhigienia,
  bolcsessegfog: Bolcsessegfog,
  inygyulladas: Inygyulladas,
  parodontologia: Parodontologia,
  szajsebeszet: Szajsebeszet,
};
