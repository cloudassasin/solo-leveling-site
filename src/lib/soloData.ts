export type HunterRank =
  | "E-Rank"
  | "D-Rank"
  | "C-Rank"
  | "B-Rank"
  | "A-Rank"
  | "S-Rank"
  | "Shadow Monarch";

export type Character = {
  name: string;
  subtitle: string;
  rank: HunterRank;
  abilities: string[];
  statusLine: string;
};

export type Shadow = {
  name: string;
  type: string;
  signature: string[];
};

export const characters: Character[] = [
  {
    name: "Sung Jinwoo",
    subtitle: "The Weakest Hunter → The Shadow Monarch",
    rank: "Shadow Monarch",
    abilities: ["Shadow Extraction", "Shadow Exchange", "Stealth", "Bloodlust"],
    statusLine: "SYSTEM: Player detected. Growth condition satisfied.",
  },
  {
    name: "Cha Hae-In",
    subtitle: "S-Rank Hunter • Hunter’s Guild",
    rank: "S-Rank",
    abilities: ["Extreme Senses", "Sword Mastery", "Agility", "Aura Perception"],
    statusLine: "ALERT: Unidentified mana signature (abnormally clean).",
  },
  {
    name: "Choi Jong-In",
    subtitle: "S-Rank Mage • The Ultimate Soldier",
    rank: "S-Rank",
    abilities: ["Inferno", "Wide-Area Control", "Burst Casting", "Tactical Command"],
    statusLine: "SYSTEM NOTE: AoE output exceeding standard thresholds.",
  },
  {
    name: "Baek Yoonho",
    subtitle: "S-Rank • White Tiger Guild Master",
    rank: "S-Rank",
    abilities: ["Beast Transformation", "Super Strength", "Regeneration", "Intimidation"],
    statusLine: "STATUS: Transformation core stable. Threat level elevated.",
  },
  {
    name: "Yoo Jin-Ho",
    subtitle: "D-Rank Support • Loyal Ally",
    rank: "D-Rank",
    abilities: ["Negotiation", "Resource Network", "Party Support", "Logistics"],
    statusLine: "SYSTEM: Party member registered. Trust parameter high.",
  },
  {
    name: "Go Gun-Hee",
    subtitle: "Chairman • Korea Hunter Association",
    rank: "A-Rank",
    abilities: ["Authority", "Combat Experience", "Awakened Aura", "Leadership"],
    statusLine: "SYSTEM: Veteran authority detected. Hidden potential present.",
  },
];

export const shadows: Shadow[] = [
  {
    name: "Igris",
    type: "Knight Commander",
    signature: ["Crimson Blade", "Unyielding Guard", "Duelist’s Pride"],
  },
  {
    name: "Tank",
    type: "Ironhide Beast",
    signature: ["Frontline Breaker", "Taunt Presence", "Heavy Impact"],
  },
  {
    name: "Beru",
    type: "Ant King",
    signature: ["Predatory Instinct", "Rapid Regeneration", "Overwhelming Speed"],
  },
  {
    name: "Iron",
    type: "Shield Vanguard",
    signature: ["Defense Stance", "Aggro Control", "Endurance"],
  },
  {
    name: "Tusk",
    type: "High Orc Shaman",
    signature: ["Curse Weaving", "Battle Chants", "Field Control"],
  },
  {
    name: "Kaisel",
    type: "Shadow Wyvern",
    signature: ["Aerial Mobility", "Rapid Deployment", "Night Flight"],
  },
];

