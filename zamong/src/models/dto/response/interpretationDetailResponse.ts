import defaultResponse from "./defaultResponse";

export interface interpretationDetail {
  uuid: "14051553-040b-4616-af40-3e3c0172f9f7";
  title: "해몽 꾸움";
  content: "런 섬뜩한 꿈을 꿨는데.";
  updated_at: "2021-11-12T08:40:13";
  dream_types: ["FALSE_AWAKE", "LUCID_DREAM"];
  attachment_image: "https://ogjg-zamong.s3.ap-northeast-1.amazonaws.com/default-posting-image/Rectangle+1.png";
  user: {
    uuid: "7359fee5-426f-45f5-bd24-cc675e7bdd12";
    id: "helloworld";
    profile: "https://s3-zamong-1.s3.ap-northeast-2.amazonaws.com/user/10_01.jpg";
  };
}

export type interpretationDetailResponse = defaultResponse<interpretationDetail>;
