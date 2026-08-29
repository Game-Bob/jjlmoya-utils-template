import { bibliography } from '../bibliography';
import type { ScatterSelectorLocaleContent } from '../entry';

const ui = {
  title: '산탄방향 선택기',
  setupTitle: '산탄 설정',
  sectorsLabel: '나침반 섹터',
  sectors8: '8방향',
  sectors12: '12방향 (시계)',
  diceLabel: '편차 거리 롤',
  diceD6: '1D6 인치',
  dice2D6: '2D6 인치',
  diceD10: '1D10 인치',
  diceCustom: '사용자 지정 범위',
  customMaxLabel: '최대 거리',
  hitChanceLabel: '직격 확률 (%)',
  rollButton: '산탄 롤',
  hitResult: '직격!',
  scatterResult: '산탄!',
  distanceLabel: '거리',
  angleLabel: '각도',
  dragHint: '나침반을 드래그하여 풍향을 수동으로 설정하세요',
  historyTitle: '최근 롤',
  clearHistory: '기록 지우기',
  presetTitle: '워게이밍 프리셋',
  soundOn: '사운드 켜짐',
  soundOff: '사운드 꺼짐',
  guideStep1: '나침반을 드래그하여 테이블 방향에 맞추세요',
  guideStep2: '섹터, 주사위, 직격 확률을 선택하세요',
  guideStep3: '중앙 = 목표. 녹색 빛이 정확히 그곳에 도달했음을 의미합니다',
  guideStep3Scatter: '화살표 = 편차 방향. 중앙에서 화살표 방향으로 그 인치만큼 사격을 이동하세요',
  scatterModeLabel: '산탄 방향',
  scatterModeRandom: '무작위',
  scatterModeWind: '바람 표류',
  scatterModeWindHint: '화살표는 항상 나침반을 따름 - 거리만 무작위',
};

const faq = [
  {
    question: '산탄방향 선택기는 어떻게 작동하나요?',
    answer: '선택한 주사위 구성에 따라 무작위 각도(0-359도)와 거리를 계산합니다. 또한 산탄 주사위를 시뮬레이션하여 직격을 확인합니다.',
  },
  {
    question: '섹터 형식을 변경할 수 있나요?',
    answer: '네, 8방향 기본 섹터와 12방향 시계판 섹터 간에 전환할 수 있습니다.',
  },
  {
    question: '직격 확률이란 무엇인가요?',
    answer: '발사체가 조준한 지점에 정확히 편차 없이 착탄할 확률을 나타냅니다. 표준 산탄 주사위의 "명중" 결과를 시뮬레이션합니다.',
  },
  {
    question: 'Warhammer나 Bolt Action과 호환되나요?',
    answer: '네, 대부분의 전술 워게임과 미니어처 룰셋에서 사용하는 표준 8방향 템플릿과 12방향 시계 정렬을 지원합니다.',
  },
  {
    question: '산탄 거리는 시각적으로 어떻게 표시되나요?',
    answer: '거리(인치)가 충돌 지점에 떠 있는 레이블로 표시되며, 편차 방향을 따라 배치됩니다. 빨간색 나침반 화살표도 최종 각도에 고정되어 템플릿을 빠르게 정렬할 수 있습니다.',
  },
  {
    question: '더 빠른 결과를 위해 애니메이션을 비활성화할 수 있나요?',
    answer: '애니메이션은 약 2초간 지속되며, 그 후 최종 결과가 중앙에 표시되고 나침반 화살표가 고정됩니다. 현재 건너뛰기 옵션은 없지만, 이 지연은 실제 주사위를 굴리는 속도에 맞게 설계되었습니다.',
  },
  { question: '산란 방향은 어떻게 정하나요?', answer: '선택한 섹터 방식과 주사위 결과, 설정한 편차 거리를 조합해 계산합니다.' },
  { question: '바람 모드를 사용할 수 있나요?', answer: '네, 바람 모드는 나침반 각도를 따르며 거리는 무작위로 유지합니다.' },
];

const howTo = [
  {
    name: '규칙 설정',
    text: '나침반 섹터를 선택하고, 거리 주사위 프리셋을 고르고, 직격 확률을 조정하세요.',
  },
  {
    name: '롤 또는 드래그',
    text: '"산탄 롤"을 클릭하여 편차를 시뮬레이션하거나, 나침반 휠을 드래그하여 방향을 수동으로 조정하세요.',
  },
  {
    name: '결과 확인',
    text: '중앙 디스플레이와 벡터 화살표를 확인하여 산탄의 정확한 거리, 각도, 방향을 파악하세요.',
  },
  {
    name: '궤적 관찰',
    text: '롤 후, 애니메이션된 발사체가 나침반을 가로질러 이동하는 것을 관찰하세요. 점선 궤적은 편차 경로를 나타내고, 충돌 지점에 거리가 인치로 표시됩니다.',
  },
  {
    name: '결과 해석',
    text: '녹색 펄스와 "DIRECT HIT"는 편차가 없음을 의미합니다. 거리 레이블이 있는 빨간색 폭발은 산탄을 의미합니다 - 목표에서 화살표 방향으로 그 인치만큼 템플릿을 배치하세요.',
  },
];

export const content: ScatterSelectorLocaleContent = {
  slug: 'scatter-direction-selector',
  title: '산탄방향 선택기: 테이블탑 워게이밍 나침반',
  description: '미니어처 워게임을 위한 무작위 편차, 바람 표류, 산탄 방향을 3D 촉각 나침반으로 결정합니다.',
  ui,
  seo: [
    { type: 'title', text: '실시간 발사체 애니메이션을 갖춘 인터랙티브 산탄 나침반', level: 2 },
    { type: 'paragraph', html: '산탄방향 선택기는 정적 숫자 생성을 넘어 나침반 오버레이에 애니메이션 발사체 궤적을 직접 렌더링합니다. "산탄 롤"을 클릭하면 발광하는 발사체가 중심에서 편차 각도를 따라 이동하며, 점선 궤적을 남기고 충돌 지점에서 입자로 폭발합니다. 이를 통해 워게임 포격이나 마법 탄착점의 빗나감을 직관적으로 판정할 수 있습니다.' },
    { type: 'stats', items: [
      { value: '2', label: '섹터 시스템', icon: 'mdi:compass-rose' },
      { value: '4', label: '주사위 프리셋', icon: 'mdi:dice-d6' },
      { value: '0-100%', label: '명중 확률 범위', icon: 'mdi:target' },
      { value: '10', label: '최근 롤 기록', icon: 'mdi:history' },
    ], columns: 4 },
    { type: 'title', text: '궤적 애니메이션이 워게임 의사 결정을 향상시키는 방법', level: 3 },
    { type: 'paragraph', html: '전통적인 산탄 도구는 숫자 각도와 거리만 표시하여 플레이어가 테이블 위의 오프셋을 머릿속으로 시각화해야 합니다. 애니메이션 궤적은 조준점에서 산탄 착륙 지점까지의 정확한 비행 경로를 그려 이 간격을 메웁니다. 게임 진행 템포를 획기적으로 향상시키고 폭발 템플릿 배치 논쟁을 없애줍니다.' },
    { type: 'diagnostic', variant: 'success', title: '직격', html: '롤이 직격 확률을 초과하면 나침반 중앙이 맥동하는 녹색 링과 "DIRECT HIT" 텍스트 애니메이션으로 폭발합니다. 발사체는 중앙으로 돌아와 편차 없는 완벽한 충돌을 확인합니다.' },
    { type: 'diagnostic', variant: 'error', title: '산탄', html: '산탄 결과의 경우 발사체가 점선 궤적을 따라 착륙 지점으로 이동합니다. 입자 폭발, 발광 마커, 거리(인치) (예: <strong>5"</strong>)가 충돌 위치에 나타나 즉시 측정이 가능합니다.' },
    { type: 'tip', title: '전문가 팁: 바람 표류 모드 사용하기', html: '바람 표류를 활성화하면 산탄 방향이 수동으로 회전한 나침반 각도에 고정됩니다. 이는 우세풍이나 고정 변위 벡터를 시뮬레이션합니다 - 무유도 로켓, 가스 구름, 범위 마법, 순간이동 사고 등에 이상적입니다.' },
    { type: 'title', text: '워게임의 산란 해결하기', level: 2 },
    { type: 'paragraph', html: '많은 미니어처 워게임 및 전술 RPG에서는 포격, 박격포, 가스 표류, 실패한 순간이동 등을 예측 불가능하고 현실적으로 표현하기 위해 편차를 사용합니다. 1D6, 2D6, 1D10 등 유연한 주사위 설정으로 어떤 룰북에도 적응합니다.' },
    { type: 'table', headers: ['게임 시나리오', '주사위 설정', '산탄 모드', '전술적 효과'], rows: [['포격 & 박격포', '2D6 인치', '8 섹터 + 명중 %', '목표 주변 무작위 흩어짐'], ['가스 구름 & 바람', '1D6 인치', '바람 표류 (고정 각도)', '바람 방향으로 직선 이동'], ['순간이동 실패', '1D10 인치', '12 섹터 (시계방향)', '전 방향 무작위 편차']] },
    { type: 'title', text: '바람과 편차 관리하기', level: 2 },
    { type: 'paragraph', html: '명중 확률을 설정하면 유닛의 숙련도를 정밀하게 반영할 수 있으며, 사격 페이즈 동안 테이블 위에서 거리를 측정하는 시간을 획기적으로 줄여줍니다.' },
    { type: 'comparative', items: [{ title: '워게임의 산란 해결하기', description: '많은 워게임은 포격, 바람, 실패한 순간이동을 편차로 표현합니다. 이 디지털 나침반을 사용하면 주사위가 모형을 쓰러뜨릴 위험이 없습니다.', icon: 'mdi:compass-outline', highlight: true, points: ['바람과 편차 관리하기', '마찰 없는 빠른 측정', '정확한 벡터 시각화'] }], columns: 1 },
    { type: 'glossary', items: [{ term: '바람과 편차 관리하기', definition: '명중 확률을 설정하면 유닛의 신뢰성을 판단하고 게임 중 측정을 빠르게 할 수 있습니다.' }] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faq.map((f) => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '산탄방향 선택기',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '산탄방향 선택기 사용 방법',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
