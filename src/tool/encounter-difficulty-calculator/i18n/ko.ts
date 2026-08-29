import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { EncounterDifficultyLocaleContent, EncounterDifficultyUI } from '../entry';

const ui: EncounterDifficultyUI = {
  intro: '파티와 위협을 설정하세요. 계산기가 D&D 5e 2014 임계값을 기준으로 조우 난이도를 측정합니다.',
  partySection: '파티 설정',
  partyLevel: '캐릭터 레벨',
  partyLevelHint: '비슷한 레벨의 파티인 경우 평균 레벨을 사용하세요.',
  partySize: '캐릭터 수',
  partySizeHint: '규칙에 따라 소규모 또는 대규모 파티의 몬스터 배율이 조정됩니다.',
  threatSection: '위협 설정',
  monsterCr: '몬스터 도전 자격 (CR)',
  monsterCrHint: '동일한 몬스터의 CR을 선택하세요. 혼합 그룹은 별도 계산이 필요합니다.',
  moreCr: '높은 CR 표시',
  lessCr: 'CR 표시 줄이기',
  monsterCount: '몬스터 수',
  monsterCountHint: '개체 수가 많으면 기본 XP가 낮아도 행동 경제상의 압박이 커집니다.',
  presets: '시나리오 예시로 시작',
  presetClassic: '클래식 순찰대',
  presetBoss: '단독 보스',
  presetSwarm: '하급 몬스터 무리',
  resultSection: '조우 압박도',
  belowEasyHint: '다음 도전 과제를 위해 자원을 아낄 수 있는 가벼운 전투입니다.',
  easyHint: '파티에 대한 압박이 적고 무난하게 해결 가능한 전투입니다.',
  mediumHint: '체력이나 주요 자원 소모가 예상되는 의미 있는 시험입니다.',
  hardHint: '전술과 자원 관리가 중요한 위험한 전투입니다.',
  deadlyHint: '치명적 위협 신호. 도주 경로, 지형, 한 턴의 실수가 가져올 비용을 점검하세요.',
  adjustedXp: '조정된 XP',
  baseXp: '기본 XP',
  multiplier: '그룹 배율',
  partyThreshold: '보통 임계값',
  belowEasy: '쉬움 미만',
  easy: '쉬움',
  medium: '보통',
  hard: '어려움',
  deadly: '치명적',
  warning: '주의 사항',
  partyAdjustment: '파티원 수가 3명 미만이거나 6명 이상이므로 몬스터 배율이 조정되었습니다.',
  highCr: '파티 레벨보다 높은 CR을 가진 몬스터는 캐릭터를 한 번에 쓰러뜨릴 수 있습니다.',
  manyMonsters: '11마리 이상의 몬스터는 전투 진행을 복잡하게 만들 수 있습니다.',
  rulesNote: 'D&D 5e 2014 규칙 기준 추정치입니다. 지형이나 전술은 반영되지 않습니다.',
  rulesLinkLabel: '원문 규칙 읽기',
  reset: '샘플로 초기화',
  xpUnit: 'XP',
  sceneLabel: '전투 압박도 시각화',
  partyMarker: '파티',
  threatMarker: '위협',
};

const faq = [
  {
    question: '이 조우 난이도 계산기는 어떤 규칙을 사용하나요?',
    answer: '기본 규칙에 수록된 D&D 5e 2014 공식 공식을 사용하며, 파티 임계값과 몬스터의 조정된 XP를 비교합니다.',
  },
  {
    question: '조정된 XP가 몬스터의 보상 XP와 다른 이유는 무엇인가요?',
    answer: '한 라운드에 여러 개체가 동시에 행동하는 위험성을 반영하기 위해 총 XP에 배율을 곱하기 때문입니다.',
  },
  {
    question: '혼합 몬스터 그룹에도 사용할 수 있나요?',
    answer: '동일한 몬스터 그룹의 빠른 계산에 적합합니다. 혼합 그룹은 각 몬스터의 기본 XP를 합산한 후 배율을 적용하세요.',
  },
  {
    question: '치명적 결과가 나오면 파티가 전멸한다는 의미인가요?',
    answer: '아니요. 조정된 XP가 치명적 임계값에 도달했음을 의미합니다. 지형, 전술, 주문 사용에 따라 실제 결과는 달라집니다.',
  },
  {
    question: '파티 인원수에 따라 배율이 변하는 이유는 무엇인가요?',
    answer: '3명 미만의 소규모 파티는 배율을 높이고, 6명 이상의 파티는 배율을 낮추도록 공식 규칙에서 권장하기 때문입니다.',
  },
];

const howTo = [
  {
    name: '파티 레벨 설정',
    text: '파티 캐릭터들의 평균 레벨을 선택합니다.',
  },
  {
    name: '파티 인원수 설정',
    text: '전투에 참여할 캐릭터 수를 입력합니다.',
  },
  {
    name: '위협 요소 설정',
    text: '몬스터의 도전 자격 (CR)과 개체 수를 선택합니다.',
  },
  {
    name: '난이도 확인',
    text: '조정된 XP와 공식 임계값 구간을 비교합니다.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'D&D 5e 조우 난이도 계산기',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: '레벨, 인원수, 몬스터 CR, 개체 수, 조정된 XP 및 공식 임계값을 기준으로 D&D 5e 2014 조우 난이도를 계산합니다.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'D&D 5e 조우 난이도 계산 방법',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: EncounterDifficultyLocaleContent = {
  slug: 'dnd-5e-encounter-difficulty-calculator',
  title: 'D&D 5e 조우 난이도 계산기',
  description: '파티 레벨, 인원수, 몬스터 CR, 조정된 XP 및 공식 임계값을 이용하여 D&D 5e 2014 전투 압박도를 추정합니다.',
  ui,
  seo: [
    { type: 'title', text: '우선권 굴림 전에 전투 난이도를 평가하세요', level: 2 },
    { type: 'paragraph', html: 'D&D 전투는 몬스터 수치 이상의 의미를 갖습니다. 이 계산기는 인원수, 레벨, CR, 개체 수를 D&D 5e 2014 공식 조정 XP로 변환합니다. 시각적 그래프를 통해 계획한 조우가 쉬움, 보통, 어려움, 치명적 구간 중 어디에 위치하는지 한눈에 확인할 수 있습니다.' },
    { type: 'title', text: 'D&D 5e 전투 계산식의 작동 원리', level: 2 },
    { type: 'paragraph', html: '각 난이도별 캐릭터 XP 임계값을 합산한 후 몬스터의 기본 XP 합계에 개체 수 배율을 적용합니다. 3명 미만의 소규모 파티는 한 단계 높은 배율을 적용하고, 6명 이상의 파티는 한 단계 낮은 배율을 적용합니다.' },
    {
      type: 'table',
      headers: ['신호', '테이블에서 점검할 사항'],
      rows: [
        ['쉬움 미만', '워밍업이나 소규모 자원 소모용 조우입니다.'],
        ['쉬움', '자원 소모를 최소화하며 무난히 승리할 수 있습니다.'],
        ['보통', '적절한 압박과 자원 사용에 대한 선택이 발생합니다.'],
        ['어려움', '체력 손실 및 주문 슬롯 소모를 예상해야 합니다.'],
        ['치명적', '전술, 지형, 도주 경로를 사전에 점검하세요.'],
      ],
    },
    { type: 'title', text: '몬스터 개체 수가 중요한 이유', level: 2 },
    { type: 'paragraph', html: '여러 몬스터는 라운드당 공격 및 반응 기회가 많아 기본 XP 이상의 위험을 유발합니다. 따라서 같은 총 XP를 가진 단일 몬스터보다 두 마리의 몬스터 조합에 더 높은 배율이 적용됩니다.' },
    { type: 'tip', title: '높은 CR 몬스터에 대한 경계', html: '파티 레벨보다 높은 CR의 몬스터는 한 번의 강력한 행동으로 캐릭터를 쓰러뜨릴 수 있습니다. 난이도 라벨만 믿지 말고 피해량과 상태 이상 능력을 사전에 점검하세요.' },
    { type: 'title', text: '전투 준비 도구로 활용하세요', level: 2 },
    { type: 'paragraph', html: '어려움이나 치명적 전투를 배치하기 전 좁은 공간, 기습, 파티 피로도를 점검하세요. 좁은 공간, 엄폐물, 환경 피해, 집중 주문 등은 실제 테이블에서의 위험도를 크게 변화시킬 수 있습니다.' },
    { type: 'tip', title: '혼합 몬스터 그룹 계산', html: '각 몬스터의 기본 XP를 합산한 후 전체 개체 수에 해당하는 배율을 곱해 평가합니다.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
