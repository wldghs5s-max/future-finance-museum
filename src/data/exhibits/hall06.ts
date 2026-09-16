import { cite, C } from "../citations";
import { ex, m, t } from "./build";

const hall = "HALL 06: 나라살림게임 랩";

export const hall06Exhibits = {
  exhibit_6a: ex({
    id: "exhibit_6a",
    code: "CONSOLE 6-A",
    hallName: hall,
    titleKo: "선택이 바꾸면 미래 부담도 바뀝니다",
    titleEn: "CHOICES CHANGE THE LOAD",
    category: "도입",
    coreQuestion: "세금을 줄이고 씀씀이를 늘리면 누가 나중에 갚을까요?",
    summary:
      "기자들이 나라살림게임을 해본 보도에는 2055년 기준 현행 추세 202%, 방어 조합 161.5%와 135.1%, 감세·확대 조합 490.9%가 등장합니다. 정부 전망이 아니라 체험 사례입니다.",
    kind: "press_game_case",
    featuredMetrics: [
      m("감세·확대 체험", "490.9%", "2055년 기자 플레이", "세금을 크게 줄이고 지출을 늘린 경우", "press_game_case", { highlight: true, citationId: "press_joongang" }),
      m("현행 추세 체험", "202%", "같은 보도 차트", "지금 흐름을 유지한 가상 결과", "press_game_case", { citationId: "press_joongang" }),
      m("증세·조정 체험", "135.1%", "복지 확대와 세금 인상", "같은 게임에서 짐을 나눈 경우", "press_game_case", { citationId: "press_joongang" }),
    ],
    causes: [
      "세입을 줄이면서 지출을 키우면 나중에 갚을 돈이 빨리 불어납니다.",
      "복지를 지키면서 세금을 함께 올리면 짐은 줄어들지만 지금 부담은 커집니다.",
    ],
    responses: [
      "옆 콘솔에서 여섯 라운드를 직접 고르며 비슷한 상충을 체험할 수 있습니다.",
    ],
    tradeoffs: [
      t("지금 혜택 vs 나중 짐", "서비스를 유지하면 오늘 삶은 덜 아픕니다.", "모자란 돈은 다음 세대가 갚을 수 있습니다."),
    ],
    comparison: {
      caption: "보도된 체험 결과입니다. 공식 국가 전망과 같은 줄에 두지 않습니다.",
      headers: ["선택", "2055 체험", "성격"],
      rows: [
        { label: "감세·확대", values: ["490.9%", "기자 플레이"] },
        { label: "현행 추세", values: ["202%", "보도 차트"] },
        { label: "증세·조정", values: ["135.1%", "기자 플레이"] },
      ],
    },
    sources: cite("press_joongang", "peri_glossary", "peri_game"),
    relatedTerms: ["GDP 대비 나랏빚 비율", "재정 지속가능성"],
  }),

  exhibit_6b: ex({
    id: "exhibit_6b",
    code: "CONSOLE 6-B",
    hallName: hall,
    titleKo: "세입·지출·미래 부담",
    titleEn: "REVENUE, SPENDING, TOMORROW",
    category: "배경",
    coreQuestion: "오늘 편한 선택이 내일의 세금을 어떻게 바꿀까요?",
    summary:
      "미래 세대가 지금 세대보다 더 내는 세금 격차를 한 교육 게임은 31.8%p로 소개합니다. 복지를 늘리면 격차가 커지고, 지원금을 함께 줄이면 격차가 줄어든다는 그림이 같은 자료에 있습니다.",
    kind: "peri_game_rule",
    featuredMetrics: [
      m("기본 격차", "31.8%p", "2022년 이후 출생 세대", "생애 세금 부담의 차이로 설명됨", "peri_game_rule", { highlight: true, citationId: "peri_glossary" }),
      m("복지 확대 후", "33.4%p", "30년 뒤 그림", "생활은 나아지고 격차는 커짐", "press_game_case", { citationId: "peri_game" }),
      m("지원금 조정 후", "28.5%p", "30년 뒤 그림", "격차는 줄고 지역·학교는 빠듯해질 수 있음", "press_game_case", { citationId: "peri_game" }),
    ],
    causes: ["세금, 씀씀이, 나중에 갚을 돈은 한 주머니에서 만납니다."],
    responses: ["나라살림 랩에서 같은 관계를 가상 점수로 직접 움직여 봅니다."],
    tradeoffs: [],
    sources: cite("peri_glossary", "peri_game"),
    relatedTerms: ["PERI-Young 지수", "순조세부담", "세대 간 회계"],
  }),

  exhibit_6c: ex({
    id: "exhibit_6c",
    code: "CONSOLE 6-C",
    hallName: hall,
    titleKo: "나라살림 랩 입장",
    titleEn: "ENTER THE CIVIC LAB",
    category: "체험",
    coreQuestion: "한 번의 선택으로 모든 사람을 만족시킬 수 있을까요?",
    summary:
      "세금, 씀씀이, 모자란 돈을 세 단계에서 고릅니다. 그림과 지표가 바로 바뀌고, 선택을 되돌리면 결과도 되돌아갑니다. 정답 조합은 없습니다.",
    kind: "creative_staging",
    featuredMetrics: [
      m("선택 단계", "3번", "세금 · 씀씀이 · 맞춤", "한 단계에 하나만 고름", "creative_staging", { highlight: true }),
      m("지표", "5개", "곳간·생활·활력·미래 부담·나눔", "가상 살림 점수", "creative_staging"),
    ],
    causes: [],
    responses: ["가운데 버튼으로 게임을 열고, 끝나면 이 전시로 돌아옵니다."],
    tradeoffs: [],
    sources: cite("peri_game"),
    relatedTerms: ["의무지출", "재량지출"],
  }),

  exhibit_6d: ex({
    id: "exhibit_6d",
    code: "CONSOLE 6-D",
    hallName: hall,
    titleKo: "더 살펴보고 싶다면",
    titleEn: "FURTHER READING",
    category: "안내",
    coreQuestion: "체험을 마친 뒤 실제 살림 정보는 어디서 볼까요?",
    summary:
      "이 관의 게임은 교육용 가상 살림입니다. 숫자는 자료 발표 시점 기준이며 이후 달라질 수 있습니다. 실제 예산은 열린재정과 국민참여예산에서, 다른 교육 게임은 PERI에서 이어서 볼 수 있습니다. 외부 사이트가 이 체험을 대신하지는 않습니다.",
    kind: "peri_game_rule",
    featuredMetrics: [
      m("열린재정", "재정 공개", "기획재정부", "실제 예산 흐름", "source_body", {
        highlight: true,
        citationId: "open_fiscal",
        href: C.open_fiscal.url,
      }),
      m("PERI 게임", "외부 교육 게임", "참고 자료", "이 관의 체험을 대신하지 않음", "peri_game_rule", {
        citationId: "peri_game",
        href: C.peri_game.url,
      }),
    ],
    causes: [],
    responses: ["지도와 용어사전에서 출처와 참여 경로를 다시 볼 수 있습니다."],
    tradeoffs: [],
    sources: cite("peri_game", "open_fiscal", "my_budget"),
    relatedTerms: ["재정 지속가능성"],
  }),
};
