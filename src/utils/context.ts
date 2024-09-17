import { createContext } from "react";
import { SWContextValue } from "./types";
import { defaultHero } from "./constants";

export const SWContext = createContext<SWContextValue>({
    changeHero: (hero: string) => {console.log(hero)},
    hero: defaultHero
});