import { bibliography } from '../bibliography';
import type { DecisionWheelLocaleContent } from '../entry';

export const content: DecisionWheelLocaleContent = {
  slug: 'decision-wheel',
  title: '결정 휠: 랜덤 선택기 및 옵션 회전판',
  description: '보드게임용 맞춤형 결정 휠. 가중치가 부여된 세그먼트를 추가하고 편집하여 결과를 무작위로 선택하세요.',
  ui: {
    title: '결정 휠',
    spinButton: '휠 돌리기',
    clearHistory: '기록 지우기',
    resultHeading: '결과',
    historyTitle: '스핀 기록',
    noHistory: '기록 없음. 휠 돌리기를 클릭하여 시작하세요.',
    addSegmentLabel: '세그먼트 추가',
    removeSegmentLabel: '삭제',
    segmentLabelPlaceholder: '라벨',
    presetLabel: '프리셋',
    presetYesNo: '예 또는 아니오',
    presetNumbers: '숫자 1-6',
    presetActions: '행동',
    presetCustom: '사용자 정의',
    presetD20: 'D20',
    presetAlignment: '성향',
    presetLoot: '전리품 등급',
    weightLabel: '가중치',
    spinAgain: '다시 돌리기',
    noSegments: '돌리기 전에 휠에 세그먼트를 추가하세요.',
  },
  seo: [
    { type: 'title', text: '보드게임 및 그룹 모임을 위한 결정 휠 선택기', level: 2 },
    { type: 'paragraph', html: '결정 휠은 보드게임, TRPG, 파티 모임에서 유용한 디지털 무작위 추첨 도구입니다. 공정하고 완전히 무작위로 선택지를 결정할 수 있습니다. 항목별 라벨, 색상, 당첨 확률 가중치를 자유롭게 설정해 플레이 규칙에 맞게 맞춤형 휠을 구성할 수 있습니다.' },
    {
      type: 'stats',
      items: [
        { value: '16', label: '세그먼트 추가' },
        { value: '7', label: '프리셋' },
        { value: '10', label: '스핀 기록' },
      ],
      columns: 3,
    },
    { type: 'title', text: '결정 휠 사용법', level: 2 },
    { type: 'paragraph', html: '예/아니오, D20, 성향, 전리품 등 미리 준비된 템플릿을 선택하거나 나만의 무작위 항목을 생성해보세요. 가중치를 1부터 5까지 조정하여 특정 선택지가 당첨될 확률을 세밀하게 제어할 수 있습니다. 감속 물리가 적용된 부드러운 회전 애니메이션이 긴장감을 더해줍니다.' },
    { type: 'title', text: '추가 시나리오', level: 3 },
    { type: 'paragraph', html: '모임 내 빠른 투표, TRPG 무작위 인카운터 결정, 플레이 순서 정하기, 벌칙 수행자 선정 등 다양한 상황에서 편리하게 활용할 수 있습니다.' },
    { type: 'title', text: '테이블탑 게임 프리셋', level: 3 },
    { type: 'paragraph', html: '자주 쓰이는 결정 템플릿이 미리 준비되어 있어 게임 준비 시간을 단축하고 세션을 매끄럽게 진행할 수 있습니다.' },
    { type: 'title', text: '결과 가중치 조정', level: 3 },
    { type: 'paragraph', html: '가중치를 높이면 휠에서 차지하는 영역이 넓어져 해당 항목이 선택될 확률이 높아집니다.' },
    { type: 'title', text: '회전 기록 확인', level: 3 },
    { type: 'paragraph', html: '최근 10회의 회전 기록이 저장되므로 그룹 구성원 모두가 결과를 투명하게 확인할 수 있습니다.' },
  ],
  faq: [
    {
      question: '결정 휠은 어떻게 작동하나요?',
      answer: '원하는 항목을 만들고 각 세그먼트의 가중치를 설정한 후 휠 돌리기를 클릭해 결과를 얻습니다.',
    },
    {
      question: '색상과 이름을 바꿀 수 있나요?',
      answer: '네, 라벨 이름과 색상뿐만 아니라 각 세그먼트의 가중치 값을 1부터 5까지 조절할 수 있습니다.',
    },
    {
      question: "확률을 바꿀 수 있나요?",
      answer: "네. 세그먼트의 가중치를 변경합니다.",
    },
    {
      question: "세그먼트는 몇 개까지 가능한가요?",
      answer: "최대 16개이며 작동하려면 2개 이상 필요합니다.",
    },
    {
      question: "어떤 프리셋이 있나요?",
      answer: "예 또는 아니요, 숫자, 행동, 사용자 지정, D20, 성향, 전리품입니다.",
    },
    {
      question: "이전 회전이 표시되나요?",
      answer: "네. 브라우저에 최근 10개가 표시됩니다.",
    },
  ],
  bibliography,
  howTo: [
    {
      name: '세그먼트 구성',
      text: '프리셋을 사용하거나 나만의 라벨, 색상 및 가중치를 설정한 항목들을 생성합니다.',
    },
    {
      name: '휠 돌리기',
      text: '휠 돌리기를 실행하면 감속 물리가 적용된 부드러운 회전 애니메이션이 실행됩니다.',
    },
    {
      name: "결과 확인",
      text: "룰렛이 멈춘 뒤 당첨 세그먼트와 최근 회전 기록을 확인합니다.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '결정 휠',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 Canvas. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': '결정 휠은 어떻게 작동하나요?', 'acceptedAnswer': { '@type': 'Answer', 'text': '원하는 항목을 만들고 각 세그먼트의 가중치를 설정한 후 휠 돌리기를 클릭해 결과를 얻습니다.' } },
        { '@type': 'Question', 'name': '색상과 이름을 바꿀 수 있나요?', 'acceptedAnswer': { '@type': 'Answer', 'text': '네, 라벨 이름과 색상뿐만 아니라 각 세그먼트의 가중치 값을 1부터 5까지 조절할 수 있습니다.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use the Decision Wheel Spinner',
      'step': [
        { '@type': 'HowToStep', 'name': '세그먼트 구성', 'text': '프리셋을 사용하거나 나만의 라벨, 색상 및 가중치를 설정한 항목들을 생성합니다.' },
        { '@type': 'HowToStep', 'name': '휠 돌리기', 'text': '휠 돌리기를 실행하면 감속 물리가 적용된 부드러운 회전 애니메이션이 실행됩니다.' },
      ],
    },
  ],
};
