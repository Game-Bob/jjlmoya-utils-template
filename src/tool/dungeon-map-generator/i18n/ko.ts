import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DungeonMapGeneratorLocaleContent, DungeonMapGeneratorUI } from '../entry';

const ui: DungeonMapGeneratorUI = {
  intro: '시드 값을 선택하고 그리드 및 건축 스타일을 설정하세요. 메모, 인쇄 또는 가상 탁자(VTT)용 연결된 지도 지도 생성합니다.',
  seedLabel: '지도 시드 값',
  seedHint: '동일한 설정에서 동일한 시드 값을 사용하면 정확히 같은 지도를 다시 재생성할 수 있습니다.',
  randomSeed: '새 시드',
  sizeLabel: '탐험 규모',
  sizeCompact: '단발 세션 (원샷)',
  sizeSession: '표준 세션',
  sizeStronghold: '대규모 요새',
  fineTuneGrid: '그리드 및 밀도 미세 조정',
  columnsLabel: '열 (가로)',
  rowsLabel: '행 (세로)',
  densityLabel: '방 밀도',
  densityHint: '밀도가 높을수록 더 많은 방과 이동 가능한 바닥 면적이 생성됩니다.',
  styleLabel: '지도 건축 스타일',
  dungeonStyle: '던전',
  dungeonStyleHint: '단일 너비 복도가 있는 일반 석조 방.',
  cavernStyle: '동굴',
  cavernStyleHint: '곡선 형태의 불규칙한 자연 동굴.',
  scifiStyle: 'SF 모듈',
  scifiStyleHint: '2칸 너비 연결 통로가 있는 넓은 모듈.',
  generate: '지도 생성하기',
  mapRegionLabel: '생성된 던전 지도 및 내보내기 제어',
  connectedBadge: '모든 방 연결 완료',
  roomsLabel: '방 개수',
  doorsLabel: '문 개수',
  floorLabel: '바닥 커버리지',
  legendFloor: '이동 가능한 바닥',
  legendWall: '견고한 벽',
  legendDoor: '문 / 해치',
  editHint: '타일을 우클릭하여 편집',
  editCell: '타일 편집',
  paintFloor: '바닥',
  paintWall: '벽',
  paintDoor: '문',
  mapData: '지도 데이터',
  copyLink: '지도 링크 복사',
  linkCopied: '링크 복사됨',
  exportPng: 'PNG 다운로드',
  exportSvg: 'SVG 다운로드',
  exportJson: 'JSON 저장',
  importJson: 'JSON 열기',
  importError: '이 파일에는 유효한 던전 지도 설정이 포함되어 있지 않습니다.',
  compactMap: '긴장감 있는 탐험',
  balancedMap: '균형 잡힌 탐험',
  sprawlingMap: '광활한 요새',
  compactHint: '통로가 길어질수록 방 사이에 미지의 공간이 더 많이 남습니다.',
  balancedHint: '방과 통로가 균형 있게 배치됩니다.',
  sprawlingHint: '넓은 바닥 면적으로 전투 및 빠른 이동에 유리합니다.',
  mapReady: '지도 범례',
  dimensionsUnit: '그리드 칸',
};

const faq = [
  {
    question: '동일한 시드 값은 항상 동일한 지도를 생성하나요?',
    answer: '네. 시드 값, 그리드 크기, 밀도, 건축 스타일은 결정론적입니다. 4가지 설정을 동일하게 사용하면 정확히 같은 지도가 재구성됩니다.',
  },
  {
    question: '생성된 모든 방에 도달할 수 있나요?',
    answer: '네. 방 배치 후 신장 트리 통로 연결이 수행되므로 이동 가능한 모든 공간이 하나의 연결된 지도를 이룹니다.',
  },
  {
    question: '던전, 동굴, SF 스타일의 차이점은 무엇인가요?',
    answer: '던전은 일반 석조 방을, 동굴은 자연스러운 곡선 방을, SF 스타일은 넓은 모듈과 2칸 너비 통로를 생성합니다.',
  },
  {
    question: '가상 탁자(VTT)에는 어떤 형식으로 내보내야 하나요?',
    answer: 'PNG가 가장 보편적입니다. SVG는 확대해도 선명함이 유지되며 벡터 프로그램에서 편집하기 용이합니다.',
  },
  {
    question: '다른 사람과 내가 생성한 지도를 공유할 수 있나요?',
    answer: '네. 지도 링크를 복사하거나 JSON 파일을 전달하면 동일한 지도를 즉시 로드할 수 있습니다.',
  },
  {
    question: '몬스터나 보물 상자도 자동으로 배치되나요?',
    answer: '아니요. 게임 마스터가 자유롭게 연출할 수 있도록 순수한 건축 평면도만 제공합니다.',
  },
];

const howTo = [
  {
    name: '그리드 크기 설정',
    text: '메모 공간이나 VTT 화면 크기에 맞춰 열과 행 개수를 설정합니다.',
  },
  {
    name: '건축 스타일 선택',
    text: '던전, 동굴, SF 중 선택하고 방 밀도를 조절합니다.',
  },
  {
    name: '생성 및 검토',
    text: '시드 값을 입력하여 지도를 생성하고 통계를 확인합니다.',
  },
  {
    name: '내보내기 및 공유',
    text: 'PNG/SVG로 다운로드하거나 링크 및 JSON으로 공유합니다.',
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
  name: '랜덤 던전 지도 생성기',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  description: '모든 방이 연결된 랜덤 던전 지도를 결정론적으로 생성하는 툴.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '연결된 던전 지도를 생성하는 방법',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

export const content: DungeonMapGeneratorLocaleContent = {
  slug: 'random-dungeon-map-generator',
  title: 'TRPG용 랜덤 던전 지도 생성기',
  description: '던전, 동굴, SF 지도를 생성. 전 방 연결 보장, PNG 및 SVG 내보내기 지원.',
  ui,
  seo: [
    { type: 'title', text: '재사용 가능한 시드로 재생성 가능한 던전 지도 만들기', level: 2 },
    { type: 'paragraph', html: '실용적인 던전 지도는 무작위 노이즈 이상의 구조가 필요합니다. 모든 방이 통로로 연결되어야 하며, 그리드가 플레이 환경에 맞고 언제든 동일한 구조를 다시 불러올 수 있어야 합니다.' },
    { type: 'title', text: '인쇄 및 가상 탁자(VTT) 환경에 맞춘 그리드 설정', level: 2 },
    { type: 'paragraph', html: '작은 그리드는 종이 인쇄가 쉽고 짧은 세션에 적합하며, 큰 지도는 광범위한 탐험 공간을 제공합니다. 내보낸 이미지는 정사각형 그리드를 유지하여 VTT 격자 맞춤이 용이합니다.' },
    {
      type: 'table',
      headers: ['그리드 크기', '주요 용도', '권장 밀도', '설계 메모'],
      rows: [
        ['20 × 16 칸', '단발 세션 (원샷)', '35 ~ 45', '인쇄하기 쉽고 직관적인 구조'],
        ['36 × 26 칸', '표준 세션 던전', '45 ~ 55', '방과 통로의 균형이 우수함'],
        ['52 × 38 칸', '대규모 복합 던전', '50 ~ 65', '다수의 세력 및 우회로 배치 가능'],
      ],
    },
    { type: 'tip', title: '전투 스케일에 맞춘 공간 확보', html: '전체 지도 크기를 정하기 전에 가장 큰 전투 상황에 필요한 칸 수를 미리 계산하세요.' },
    { type: 'title', text: '바닥 커버리지로 탐험 템포 조절하기', level: 2 },
    { type: 'paragraph', html: '바닥 커버리지는 이동 가능한 바닥 면적 비율을 나타냅니다. 커버리지가 낮으면 긴장감이 고조되고, 높으면 전투가 활발하게 일어납니다.' },
    {
      type: 'list',
      items: [
        '<strong>긴장감 있는 탐험:</strong> 여백 공간을 활용해 고립감이나 비밀 통로를 연출합니다.',
        '<strong>균형 잡힌 탐험:</strong> 조사 공간, 복도, 전투 방을 균형 있게 배치합니다.',
        '<strong>광활한 요새:</strong> 시야가 확보되고 적 패트롤 경로가 복잡하게 교차하도록 구성합니다.',
      ],
    },
    { type: 'title', text: '중립적인 평면도를 스토리의 무대로 변환', level: 2 },
    { type: 'paragraph', html: '생성된 지도는 순수한 건축 구조만을 제공합니다. 각 방에 역할을 부여하고 단서와 함정을 배치하세요.' },
    { type: 'tip', title: '메모 작성 전 설정 보존하기', html: '인카운터 메모를 적기 전에 지도 링크나 JSON을 저장하면 플레이어에게 깔끔한 지도를 제공할 수 있습니다.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
