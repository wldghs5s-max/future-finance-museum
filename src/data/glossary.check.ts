import assert from "node:assert/strict";
import { EXHIBIT_DETAILS_MAP } from "./walkthroughData";
import { getGlossary, GLOSSARY_LIST, resolveGlossaryRef } from "./glossaryData";
import { DIRECTION_DETAILS } from "./hallDirectionDetails";
import { allDirectionItems, HALL_DIRECTIONS } from "./hallDirections";

const ids = new Set<string>();
const aliasOwners = new Map<string, string>();
for (const item of GLOSSARY_LIST) {
  assert.ok(!ids.has(item.id), `duplicate glossary id ${item.id}`);
  ids.add(item.id);
  const keys = [item.id, item.titleKo, item.term, ...(item.aliases ?? [])];
  for (const key of keys) {
    const norm = key.replace(/\s+/g, "").replace(/[()（）]/g, "").toLowerCase();
    if (!norm) continue;
    const owner = aliasOwners.get(norm);
    assert.ok(!owner || owner === item.id, `alias collision "${key}" ${owner} vs ${item.id}`);
    aliasOwners.set(norm, item.id);
  }
}

assert.ok(getGlossary("sovereign_ai"), "sovereign_ai missing");
assert.equal(resolveGlossaryRef("소버린 AI")?.id, "sovereign_ai");
assert.equal(resolveGlossaryRef("Sovereign AI")?.id, "sovereign_ai");
assert.equal(resolveGlossaryRef("국가채무")?.id, "d1");
assert.equal(resolveGlossaryRef("missing-term-xyz"), undefined);

const used = new Set<string>();
for (const exhibit of Object.values(EXHIBIT_DETAILS_MAP)) {
  for (const ref of exhibit.relatedTerms) {
    const found = getGlossary(ref);
    assert.ok(found, `${exhibit.id} relatedTerms "${ref}" is not a glossary id`);
    used.add(ref);
  }
}

const items = allDirectionItems();
assert.equal(items.length, 35, `expected 35 direction items, got ${items.length}`);

const forbidden = /숫자는 이미 앞에|다섯 갈래를 한눈에|처방의 정답은 아닙니다|숫자와 사례는 앞 전시|HALL 0[1-5] CLOSE/;

for (const hall of Object.values(HALL_DIRECTIONS)) {
  assert.ok(EXHIBIT_DETAILS_MAP[hall.firstExhibitId], hall.firstExhibitId);
  if (hall.closingExhibitId) {
    const closing = EXHIBIT_DETAILS_MAP[hall.closingExhibitId];
    assert.ok(closing, hall.closingExhibitId);
    assert.equal(closing.code, "대응 방향", hall.closingExhibitId);
    assert.ok(!forbidden.test(hall.closingLead), hall.id);
    assert.ok(!forbidden.test(closing.summary), hall.closingExhibitId);
  }
  for (const group of hall.groups) {
    for (const item of group.items) {
      for (const exhibitId of item.exhibitIds) {
        assert.ok(EXHIBIT_DETAILS_MAP[exhibitId], `${item.id} missing ${exhibitId}`);
      }
      if (hall.closingExhibitId) {
        const detail = DIRECTION_DETAILS[item.id];
        assert.ok(detail, `${item.id} missing detail`);
        assert.ok(detail.paragraphs.length >= 2, `${item.id} too thin`);
        const joined = detail.paragraphs.join(" ");
        assert.ok(joined.length > 180, `${item.id} detail too short`);
        assert.ok(!forbidden.test(joined), item.id);
        for (const ref of detail.relatedTerms) {
          const found = getGlossary(ref);
          assert.ok(found, `${item.id} relatedTerms "${ref}" is not a glossary id`);
          used.add(ref);
        }
      }
    }
  }
}

console.log(`glossary integrity: ${used.size} live term ids, ${items.length} direction items`);
