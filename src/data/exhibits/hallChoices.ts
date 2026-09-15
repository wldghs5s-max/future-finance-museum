import { cite } from "../citations";
import { HALL_DIRECTIONS, HallDirectionId } from "../hallDirections";
import { ex } from "./build";

function choicesExhibit(hallId: HallDirectionId, id: string) {
  const hall = HALL_DIRECTIONS[hallId];
  return ex({
    id,
    code: "대응 방향",
    hallName: hall.closingTitle,
    titleKo: hall.closingTitle,
    titleEn: "",
    category: "대응 방향",
    coreQuestion: hall.openingQuestion,
    summary: hall.closingLead,
    kind: "source_body",
    featuredMetrics: [],
    causes: [],
    responses: [],
    tradeoffs: [],
    sources: cite("closing"),
    relatedTerms: [],
  });
}

export const hallChoiceExhibits = {
  exhibit_1_choices: choicesExhibit("hall01", "exhibit_1_choices"),
  exhibit_2_choices: choicesExhibit("hall02", "exhibit_2_choices"),
  exhibit_3_choices: choicesExhibit("hall03", "exhibit_3_choices"),
  exhibit_4_choices: choicesExhibit("hall04", "exhibit_4_choices"),
  exhibit_5_choices: choicesExhibit("hall05", "exhibit_5_choices"),
};
