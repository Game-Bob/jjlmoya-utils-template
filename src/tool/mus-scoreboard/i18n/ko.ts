import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { MusScoreboardLocaleContent, MusScoreboardUI } from '../entry';

const ui: MusScoreboardUI = {
  onboarding: '두 페어의 이름을 입력하고 테이블 규칙을 설정한 후, 핸드별 점수 계산에 맞춰 돌(Piedras)을 탭하세요.',
  pairOneLabel: '페어 1',
  pairTwoLabel: '페어 2',
  pairOneDefault: '노스 테이블',
  pairTwoDefault: '사우스 테이블',
  targetPointsLabel: '게임(Chico)당 목표 점수',
  targetPointsHint: '각 게임의 목표 점수를 선택하세요 (30, 40 또는 50점).',
  gamesToWinLabel: '바카(Vaca) 승리에 필요한 게임 수',
  gamesToWinHint: '이 게임 수에 먼저 도달하는 페어가 매치에서 승리합니다.',
  deckLabel: '사용할 카드 덱',
  deckHint: '40장의 스페인 전통 덱(Baraja española)이 무스(Mus)의 기본입니다. 프랑스 덱은 8, 9, 10을 제외하고 사용합니다.',
  spanishDeck: 'Baraja española (스페인 덱)',
  frenchDeck: '프랑스 덱 (일반 카드)',
  frenchDeckNotice: '프랑스 덱을 사용할 경우 8, 9, 10을 제거하여 40장으로 플레이하세요. Jack은 Sota, Queen은 Caballo, King은 Rey에 대응합니다.',
  pointsOption30: '30 점',
  pointsOption40: '40 점',
  pointsOption50: '50 점',
  gamesOption1: '1 게임',
  gamesOption2: '2 게임',
  gamesOption3: '3 게임',
  startMatch: '스코어보드 열기',
  matchSettings: '페어 및 규칙 설정',
  liveMatch: '실시간 매치',
  targetLabel: '점수 게임',
  gameLabel: '게임',
  gamePlural: '게임',
  vacaLabel: '게임 선승 시 완료',
  scoreLabel: '현재 점수 (Piedras)',
  handLabel: '이번 핸드의 선(Mano) 페어 선택',
  handSelected: '이(가) 선(Mano)입니다.',
  stonesLabel: '점수 카운터',
  stoneSingular: '1점 (Piedra)',
  stonePlural: '점수 (Piedras)',
  amarracoSingular: '5점 (Amarraco)',
  amarracoPlural: '5점 칩 (Amarracos)',
  pointsToGo: '점 남음',
  addStone: '1점 (Piedra)',
  addAmarraco: '5점 (Amarraco)',
  closeGame: '게임(Chico) 종료 및 확정',
  closeGamePrompt: '이 페어가 게임(Chico)에서 승리했음을 확인하고 다음 게임을 시작하시겠습니까?',
  confirmationTitle: '테이블 조작 확인',
  confirmAction: '확인',
  cancelAction: '계속 플레이',
  undo: '실행 취소',
  resetMatch: '매치 리셋',
  resetMatchPrompt: '현재 매치를 리셋하고 점수 기록을 삭제하시겠습니까?',
  historyTitle: '최근 기록',
  noHistory: '아직 기록이 없습니다. 점수를 입력하면 여기에 표시됩니다.',
  matchReady: '테이블 준비가 완료되었습니다.',
  closeGameHint: '목표 점수에 도달한 페어가 있습니다. 게임 승자를 확정하세요.',
  waitingForScore: '계속 점수를 계산하세요. 선두 페어의 남은 점수:',
  gameWon: '게임(Chico) 종료.',
  vacaWon: '바카(Vaca) 승리! 준비가 되면 새 매치를 시작하세요.',
  gameClosed: '이(가) 게임(Chico)을 획득했습니다.',
  pointsAdded: '이(가) 획득:',
  matchSaved: '점수가 이 기기에 자동 저장됩니다.',
  lastAction: '최근 작업',
  settingsApplied: '새 규칙이 적용되고 매치가 리셋되었습니다.',
  pairNameRequired: '스코어보드를 열기 전에 두 페어의 이름을 모두 입력하세요.',
  visualScoreLabel: 'Mus 카드 게임용 실시간 디지털 점수판',
};

const faq = [
  {
    question: '이 온라인 무스(Mus) 스코어보드는 무엇을 기록하나요?',
    answer: '두 페어 이름, 돌(Piedras), 아마라코(Amarracos), 획득 게임 수(Chicos), 바카(Vaca) 승리, 선(Mano) 위치 및 최근 점수 기록을 실시간으로 관리합니다.',
  },
  {
    question: '돌(Piedras)과 아마라코(Amarracos)는 왜 따로 표시되나요?',
    answer: '1점(Piedra)과 5점 칩(Amarraco)을 따로 표시하여 실제 테이블 위에 놓인 피스나 칩과 쉽게 대조할 수 있게 도와줍니다.',
  },
  {
    question: '30점, 40점, 50점 게임 설정이 가능한가요?',
    answer: '네. 스코어보드를 열기 전에 게임(Chico)당 목표 점수를 30점, 40점, 50점 중에서 자유롭게 선택할 수 있습니다.',
  },
  {
    question: '목표 점수에 도달한 게임은 어떻게 종료하나요?',
    answer: '목표 점수에 도달하면 게임 종료 버튼이 활성화됩니다. 승자를 확정하면 1게임(Chico)이 추가되고 점수(Piedras)가 0으로 초기화됩니다.',
  },
  {
    question: '페이지를 새로고침해도 점수가 유지되나요?',
    answer: '네. 게임 설정, 페어 이름, 점수 및 게임 승리 기록은 브라우저에 안전하게 자동 저장됩니다.',
  },
  {
    question: '특정 지역의 무스(Mus) 규칙을 강제로 적용하나요?',
    answer: '아니요. 무스에는 다양한 지역 규칙이 존재합니다. 이 디지털 스코어보드는 정확한 점수 기록에 집중하며, 수신호와 멘트는 테이블 플레이어에게 맡깁니다.',
  },
  {
    question: '일반 카드로 무스 게임을 하려면 어떻게 하나요?',
    answer: '프랑스 덱에서 8, 9, 10을 제외하여 40장으로 만듭니다. Jack은 Sota, Queen은 Caballo, King은 Rey로 사용합니다.',
  },
];

const howTo = [
  {
    name: '페어 이름 입력',
    text: '테이블에서 식별하기 쉽도록 두 페어의 이름을 입력합니다.',
  },
  {
    name: '목표 점수 및 바카(Vaca) 설정',
    text: '게임당 목표 점수(30, 40, 50점)와 바카(Vaca) 승리에 필요한 게임 수를 선택합니다.',
  },
  {
    name: '점수(Piedras) 및 아마라코(Amarracos) 계산',
    text: '각 핸드 승부(Grande, Chica, Pares, Juego, Punto) 결과에 따라 1점(Piedra) 또는 5점(Amarraco)을 탭합니다.',
  },
  {
    name: '게임 승리 확정',
    text: '목표 점수 도달 시 승자를 확정하여 게임 수를 기록하고 점수를 초기화합니다.',
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
  name: '온라인 무스 스코어보드',
  operatingSystem: 'All',
  applicationCategory: 'GameApplication',
  description: '스페인 전통 카드 게임 Mus(무스) 전용 실시간 디지털 점수판.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '무스 카드 게임 점수 기록 방법',
  step: howTo.map((item) => ({
    '@type': 'HowToStep',
    name: item.name,
    text: item.text,
  })),
};

const schemas: WithContext<SoftwareApplication | FAQPage | HowTo>[] = [
  faqSchema,
  appSchema,
  howToSchema,
];

export const content: MusScoreboardLocaleContent = {
  slug: 'online-mus-scoreboard',
  title: '온라인 무스(Mus) 스코어보드',
  description: '스페인 전통 카드 게임 무스(Mus)의 점수(Piedras), 아마라코(Amarracos), 게임(Chicos), 바카(Vacas)를 실시간으로 기록하세요.',
  ui,
  seo: [
    { type: 'title', text: '무스 카드 게임을 위한 명확하고 빠른 실시간 점수판', level: 2 },
    { type: 'paragraph', html: '무스(Mus)는 심리전과 페어워크가 돋보이는 스페인 전통 카드 게임입니다. 한 핸드 내에서 여러 승부(Grande, Chica, Pares, Juego, Punto)가 진행되므로 디지털 점수판을 사용하면 계산 착오를 방지할 수 있습니다.' },
    { type: 'title', text: '첫 카드를 나누기 전에 목표 점수 설정', level: 2 },
    { type: 'paragraph', html: '일반적인 40점 경기 외에도 30점이나 50점 경기 규칙도 많이 사용됩니다. 첫 딜링 전에 목표 점수를 맞춰 디지털 점수판을 테이블과 동기화하세요.' },
    {
      type: 'table',
      headers: ['설정', '효과', '추천 게임'],
      rows: [
        ['30 점', '단판 경기', '빠른 매치나 토너먼트 예선에 적합'],
        ['40 점', '표준 경기', '가장 대중적이고 전통적인 클래식 규칙'],
        ['50 점', '장기 경기', '더 깊은 전략과 넉넉한 턴을 즐기는 매치'],
      ],
    },
    { type: 'tip', title: '테이블 규칙을 소리 내어 확인', html: '카드를 떼기 전에 8킹과 8에이스 규칙(3을 K로, 2를 A로 처리) 및 칩 담당자를 두 페어가 함께 확인하세요.' },
    { type: 'title', text: '스페인 덱(Baraja española)과 프랑스 덱의 호환성', level: 2 },
    { type: 'paragraph', html: '전통적인 40장 스페인 덱(Baraja española)이 기본이지만, 일반 카드(프랑스 덱)에서 8, 9, 10을 제외해도 동일하게 플레이할 수 있습니다.' },
    { type: 'title', text: '실전 테이블 피스와의 실시간 점수 대조', level: 2 },
    { type: 'paragraph', html: '메인 숫자로 총점을 보여주고 바로 아래 줄에서 아마라코(Amarracos, 5점)와 돌(Piedras, 1점) 단위로 자동 환산하여 테이블 칩과의 대조가 매우 쉽습니다.' },
    { type: 'list', items: ['<strong>Piedra:</strong> 1점 단위 점수.', '<strong>Amarraco:</strong> 돌 5개에 해당하는 5점 단위 칩.', '<strong>Chico:</strong> 목표 점수 도달 시 획득하는 1세트.', '<strong>Vaca:</strong> 정해진 게임 수를 먼저 획득하여 거두는 최종 승리.'] },
    { type: 'title', text: '게임 승리 확정 및 입력 실수 취소', level: 2 },
    { type: 'paragraph', html: '목표 점수에 도달하면 게임 확정 버튼이 활성화됩니다. 점수를 잘못 입력한 경우 실행 취소 버튼으로 즉시 이전 상태로 복구할 수 있습니다.' },
    { type: 'tip', title: '점수 오입력 시 실행 취소 기능 활용', html: '점수를 잘못 더했을 때 실행 취소 버튼을 누르면 기록을 어지럽히지 않고 바로 복구할 수 있습니다.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas,
};
