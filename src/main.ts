import { npc } from "./utility/npcGenerator";

console.log(`
    The npc is ${npc.gender.tag}
    The npc is ${npc.manner.tag}
    The npc wants to ${npc.want.tag}
    The npc is ${npc.hook.tag}
    The npc's motivation is ${npc.motivation.tag}
    ${npc.power.tag}
    ${npc.deal.tag}`
);