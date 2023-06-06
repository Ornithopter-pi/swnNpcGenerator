import { manners } from "../constants/manner";
import { wants } from "../constants/wants";
import { motivations } from "../constants/motivation";
import { hooks } from "../constants/hooks";
import { powers } from "../constants/power";
import { deals } from "../constants/default_Deal_Outcome";
import { generateTag } from "./generateTags";
import { genders } from "../constants/gender";
const gender = generateTag(genders).unwrap();
const manner = generateTag(manners).unwrap();
const deal = generateTag(deals).unwrap();
const motivation = generateTag(motivations).unwrap();
const want = generateTag(wants).unwrap();
const power = generateTag(powers).unwrap();
const hook = generateTag(hooks).unwrap();

const npc = {
    gender,
    manner,
    deal,
    motivation,
    want,
    power,
    hook
}

export { npc };