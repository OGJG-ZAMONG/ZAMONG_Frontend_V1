export type DreamTypeType = {
  code: string;
  name: string;
};

const dreamType: DreamTypeType[] = [
  {
    code: "LUCID_DREAM",
    name: "루시드 드림",
  },
  {
    code: "NIGHTMARE",
    name: "악몽",
  },
  {
    code: "AUSPICIOUS",
    name: "길몽",
  },
  {
    code: "PARALYSIS",
    name: "가위눌림",
  },
  {
    code: "FALSE_AWAKE",
    name: "거짓깨어남",
  },
  {
    code: "TAEMONG",
    name: "태몽",
  },
  {
    code: "WET_DREAM",
    name: "몽정",
  },
  {
    code: "HOLY_DREAM",
    name: "영몽",
  },
];

export default dreamType;
