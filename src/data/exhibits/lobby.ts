import { cite } from "../citations";
import { MUSEUM_SPACE_GUIDE } from "../../types/exhibit";
import { ex, m } from "./build";

export const lobbyExhibits = {
  exhibit_lobby_intro: ex({
    id: "exhibit_lobby_intro",
    code: "INTRO 00",
    hallName: "재정미래관 중앙 로비",
    titleKo: "재정미래관이 다루는 갈림길",
    titleEn: "FROM POPULATION CHANGE TO THE FISCAL GAME",
    category: "전시 취지",
    coreQuestion: "인구변화에서 나라살림게임까지, 재정이 서 있는 자리는 어디인가?",
    summary:
      "「재정미래관」은 「모두의 재정 | 재정박물관」 시리즈의 세 번째 전시관입니다. 인구변화에서 출발해 복지·연금, 환경, AI의 재정 압력을 쌓고, 장기재정전망으로 그 무게를 더한 뒤 나라살림게임에서 선택을 다시 조립해 보게 합니다.",
    kind: "source_body",
    featuredMetrics: [
      m("전시 구성", "6부", "Ⅰ~Ⅵ", "인구·복지연금·환경·AI·장기재정전망·나라살림게임", "source_body", { highlight: true }),
      m("시계열 범위", "발표 시점별", "기관·연도가 전시마다 다름", "한 줄의 공식 예측으로 묶지 않음", "source_body"),
    ],
    causes: [
      "인구변화는 노동·지역·재정·사회보장 전반의 지속가능성을 흔드는 복합 변수로 서술됩니다.",
      "복지·환경·AI는 각각 다른 재정 압력으로 쌓이고, 장기전망이 그 무게를 숫자로 보여 줍니다.",
    ],
    responses: [
      "전시는 위험 수치만 나열하지 않고, 대응 방안과 정책의 장단점을 함께 읽도록 구성합니다.",
      "마지막 나라살림게임은 정부 공식 전망기가 아니라 선택 학습용 체험입니다.",
    ],
    tradeoffs: [
      {
        title: "전시와 공식 통계",
        benefit: "여러 기관 공개 자료를 한자리에서 대조할 수 있습니다.",
        cost: "이 사이트 자체는 정부 공식 누리집이 아닙니다.",
      },
    ],
    sources: cite("closing"),
    relatedTerms: ["재정 지속가능성", "세대 간 형평성"],
    stagingNote: MUSEUM_SPACE_GUIDE.civicNote,
  }),

  exhibit_lobby_monument: ex({
    id: "exhibit_lobby_monument",
    code: "MONUMENT 00",
    hallName: "재정미래관 중앙 로비",
    titleKo: "선택의 자리",
    titleEn: "THE PLACE OF CHOICE",
    category: "공간 연출",
    coreQuestion: "여섯 주제는 어떻게 한자리에 모이는가?",
    summary:
      "인구·복지·환경·AI·재정전망·정책 선택. 여섯 이야기는 우리가 함께 살아갈 미래로 이어집니다.",
    kind: "creative_staging",
    featuredMetrics: [],
    causes: ["전시는 인구 이야기에서 시작해 나라살림 선택으로 이어집니다."],
    responses: ["조형물은 상징 연출이며 통계가 아닙니다."],
    tradeoffs: [],
    sources: cite("closing"),
    relatedTerms: [],
    stagingNote: "창작 연출. 공식 통계로 읽지 마세요.",
  }),

  exhibit_lobby_directory: ex({
    id: "exhibit_lobby_directory",
    code: "GUIDE 00",
    hallName: "재정미래관 중앙 로비",
    titleKo: "관람 안내와 공간 구성",
    titleEn: "EXHIBITION DIRECTORY",
    category: "전시안내",
    coreQuestion: "이 박물관은 몇 개의 공간으로 이어지는가?",
    summary: `지도에서 이동할 수 있는 구역은 ${MUSEUM_SPACE_GUIDE.mapZoneCount}개입니다. ${MUSEUM_SPACE_GUIDE.breakdown}. ${MUSEUM_SPACE_GUIDE.introNote}`,
    kind: "creative_staging",
    featuredMetrics: [
      m("지도 구역", `${MUSEUM_SPACE_GUIDE.mapZoneCount}개`, MUSEUM_SPACE_GUIDE.breakdown, "입장 영상은 별도 오프닝", "creative_staging", { highlight: true }),
      m("전시 본문", "6개 관", "인구에서 나라살림까지", "회랑은 주제를 바꾸는 사이 공간", "source_body"),
    ],
    causes: [
      "로비에서 시작해 여섯 전시관과 회랑을 지나 나라살림 랩에서 관람을 마칩니다.",
    ],
    responses: [
      "지도로 원하는 전시관으로 바로 이동할 수 있습니다. 입장 영상은 문을 열 때 한 번 봅니다.",
    ],
    tradeoffs: [],
    sources: cite("closing"),
    relatedTerms: [],
    stagingNote: MUSEUM_SPACE_GUIDE.civicNote,
  }),
};
