# 박물관 시각 자료 기록

전시 화면에 이 문서를 노출하지 않습니다.

## 생성 이미지

도구: Cursor `GenerateImage`. 저장 위치: `public/images/museum/`. JPEG(품질 82).

| 파일 | 적용 | 비율 | 생성 설명 |
|---|---|---|---|
| `lobby-six-pillars.png` | 로비 `exhibit_lobby_monument` | 1448×1086 | Codex 원본. 여섯 주제 기둥 조형물과 원형 받침대. CSS 받침대 없음. |
| `corridor-care.jpg` | `exhibit_corridor_01` 옆 벽 | 16:9 | 세대가 함께 쓰는 동네와 돌봄. |
| `corridor-green.jpg` | `exhibit_corridor_02` 옆 벽 | 16:9 | 주거·건강·녹지. |
| `corridor-power.jpg` | `exhibit_corridor_03` 옆 벽 | 16:9 | 에너지·전력망·데이터센터. |
| `corridor-infra.jpg` | `exhibit_corridor_04` 옆 벽 | 16:9 | 기술과 공공서비스가 한 도시. |
| `corridor-table.jpg` | `exhibit_corridor_05`, 게임 입구 | 16:9 | 도시 모형과 선택 테이블. |
| `village/village-base.jpg` | 나라살림게임 고정 마을 | 16:9, 1280×720 | 세 구역이 도로로 이어진 기준 마을. |
| `village/care_{-3..+3}.jpg` | 생활·돌봄 구역 7상태 | 16:9, 1280×720 | 같은 아파트·병원 자리. clip-path로 왼쪽만 교체. |
| `village/work_{-3..+3}.jpg` | 배움·일자리 구역 7상태 | 16:9, 1280×720 | 같은 학교·상점 자리. clip-path로 가운데만 교체. |
| `village/commons_{-3..+3}.jpg` | 공동 기반 구역 7상태 | 16:9, 1280×720 | 같은 공원·작업장 자리. clip-path로 오른쪽만 교체. |
| `game-tax-up.jpg` | 정책 `tax_up` | 16:9, 1280×720 | 공공 보관함 증가, 가계·기업 몫 감소. |
| `game-tax-down.jpg` | 정책 `tax_down` | 16:9, 1280×720 | 가계·상점 활동 증가, 공공 여유 감소. |
| `game-tax-hold.jpg` | 정책 `tax_hold` | 16:9, 1280×720 | 기존 유지, 추가 재원 부족. |
| `game-spend-care.jpg` | 정책 `spend_care` | 16:9, 1280×720 | 돌봄 시설·인력 증가, 공공 가용 감소. |
| `game-spend-future.jpg` | 정책 `spend_future` | 16:9, 1280×720 | 배움·일자리 확장, 다른 서비스 여력 제한. |
| `game-spend-hold.jpg` | 정책 `spend_hold` | 16:9, 1280×720 | 기존 시설 유지, 새 지원 공간 없음. |
| `game-cut-grant.jpg` | 정책 `cut_grant` | 16:9, 1280×720 | 중앙 곳간 증가, 지역 학교·서비스 축소. |
| `game-borrow-keep.jpg` | 정책 `borrow_keep` | 16:9, 1280×720 | 현재 서비스 유지, 미래 상환 부담 증가. |
| `game-tighten-rule.jpg` | 정책 `tighten_rule` | 16:9, 1280×720 | 미래 부담 감소, 현재 시설·활동 제한. |
| `concept-care.jpg` | `exhibit_1g` 벽면 | 4:3, 1152×864 | 세대와 돌봄의 연결. 실존 사례 사진처럼 보이지 않는 개념 장면. |
| `concept-city.jpg` | `exhibit_1f` 벽면 | 4:3, 1152×864 | 변화하는 도시·생활 공간 디오라마. 공식 지도·통계 위조 없음. |
| `concept-climate.jpg` | `exhibit_3a` 벽면 | 4:3, 1152×864 | 기후 대응과 미래 에너지 개념. 그래프·기관 문서 위조 없음. |
| `concept-ai-power.jpg` | `exhibit_3b` 벽면 | 4:3, 1152×864 | AI·데이터센터·전력의 관계. 브랜드·UI 글자 없음. |

## 원본 PDF 추출

목록과 쪽·출처는 `docs/pdf-시각자료-목록.md`와 `src/data/visualAssets.ts`를 따른다. 웹 경로는 `public/exhibits/`.

이번 보완에서 생성 이미지와 함께 쓰는 추출본:

| 전시 | PDF | 쪽 | 용도 |
|---|---|---|---|
| `exhibit_1g` | `p013-single-household.jpg` | 13 | 1인가구 비중 실제 차트. 상세 보기. |
| `exhibit_3a` | `p040-climate-ssp.jpg`, `p040-ssp-table.png` | 40 | 기후 시나리오 실제 차트·표. 상세 보기. |
| `exhibit_3b` | `p043-044-power-table.png`, `p044-carbon-free-power.jpg`, `p044-power-table.png` | 43–44 | 무탄소 발전 실제 표·차트. 상세 보기. |

`exhibit_1f`는 해당 주제를 설명하는 독립 PDF 도판이 없어 생성 개념 이미지만 벽에 두고, 지역 수치는 웹 텍스트로 둔다.
