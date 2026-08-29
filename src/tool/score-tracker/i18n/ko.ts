import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Score Tracker',
  addPlayer: '플레이어 추가',
  removePlayer: '제거',
  renamePlayer: '이름 변경',
  startRound: '라운드 1 시작',
  nextRound: '다음 라운드',
  resetGame: '게임 초기화',
  undoRound: '마지막 라운드 취소',
  playerLabel: '플레이어',
  scoreLabel: '점수',
  roundLabel: '라운드',
  totalLabel: '합계',
  rankLabel: '순위',
  leaderboardTitle: '리더보드',
  historyTitle: '점수 기록',
  noPlayersHint: '플레이어를 추가하여 점수 기록 시작',
  playerNamePlaceholder: '플레이어 이름',
  confirmLabel: '확인',
  cancelLabel: '취소',
  deleteRoundConfirm: '마지막 라운드를 삭제하시겠습니까?',
  playerAdded: '플레이어가 추가되었습니다',
  playerRemoved: '플레이어가 제거되었습니다',
  roundStarted: '라운드가 시작되었습니다',
  gameReset: '게임이 초기화되었습니다',
  noRoundsYet: '아직 기록된 라운드가 없습니다',
  currentRoundLabel: '현재 라운드',
  scoringTitle: '라운드 점수',
  resetAllLabel: '모두 초기화',
  confirmResetAll: '모든 플레이어와 점수가 삭제됩니다. 확실합니까?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'score-tracker',
  title: 'Score Tracker: Melliteo Peulleieo Seuko Keopowa Rideo Bodeu Maenijeo',
  description: '모든 보드게임의 점수를 추적하세요. 플레이어를 추가하고, 라운드별로 점수를 기록하며, 자동 순위 매기기로 리더보드가 실시간으로 업데이트되는 것을 지켜보세요.',
  ui,
  seo: [
    { type: 'title', text: '보드게임 점수 기록: 실수 없이 점수를 추적하는 방법', level: 2 },
    { type: 'paragraph', html: '보드게임에서 점수를 기록하는 것은 5라운드까지 진행하고 누군가 계산을 잘못했다는 것을 깨닫기 전까지는 쉬워 보입니다. 윙스팬, 테라포밍 마즈, 카탄 또는 승점 게임을 하든, 정확한 점수 기록은 공정한 게임과 논쟁의 차이를 만듭니다. 디지털 점수 추적기는 산술 오류를 없애고, 실시간 순위를 표시하며, 모든 라운드의 전체 기록을 보관하여 최종 집계를 확인할 수 있게 해줍니다.' },
    {
      type: 'stats',
      items: [
        { value: '무제한', label: '지원 플레이어' },
        { value: '실시간', label: '리더보드 업데이트' },
        { value: '무제한', label: '기록 라운드' },
      ],
      columns: 3,
    },
    { type: 'title', text: '흔한 점수 기록 실수와 피하는 방법', level: 2 },
    { type: 'paragraph', html: '가장 빈번한 점수 실수는 라운드 종료 보너스를 추가하는 것을 잊거나 숫자 열을 잘못 더하는 것입니다. 디지털로 점수를 추적하면 각 입력 후에 누계가 자동으로 업데이트됩니다. 즉, 숫자가 이상해 보이는 순간에 실수를 발견할 수 있으며, 아무도 올바른 값을 기억하지 못하는 게임 종료 시점에 발견할 필요가 없습니다. 라운드 기록 기능을 사용하면 이전 라운드를 감사하고 전체 게임을 다시 시작하지 않고도 오류를 수정할 수 있습니다.' },
    {
      type: 'tip',
      title: '빠른 점수 기록 팁',
      html: '각 라운드가 끝난 직후 모두가 결과를 기억하고 있을 때 점수를 입력하세요. 숨겨진 역할이 있는 게임의 경우 실제 이름 대신 색상이나 진영 이름과 같은 설명적인 플레이어 레이블을 사용하세요. 아이들과 게임할 때는 버튼을 직접 누르게 해서 점수 기록 과정에 참여하게 하세요.',
    },
    {
      type: 'title',
      text: '라운드별 점수 vs 최종 합계만',
      level: 3,
    },
    {
      type: 'proscons',
      title: '라운드별 점수 vs 최종 점수만',
      items: [
        {
          pro: '게임의 각 단계에서 누가 선두였고 어떻게 흐름이 바뀌었는지 확인할 수 있습니다.',
          con: '마지막에 한 번이 아니라 각 라운드 후에 데이터를 입력해야 합니다.',
        },
        {
          pro: '개별 라운드 항목을 기억과 대조할 수 있어 오류를 쉽게 찾을 수 있습니다.',
          con: '게임 세션 중에 시간이 조금 더 소요됩니다.',
        },
        {
          pro: '플레이어가 자신의 라운드 점수를 확인할 수 있어 분쟁을 줄이고 신뢰를 쌓습니다.',
          con: '한 사람이 기기를 관리하거나 플레이어가 교대로 하는 것이 가장 좋습니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '특이한 점수 시스템을 가진 게임',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '승점 게임',
          description: '대부분의 유로게임은 게임 전반에 걸쳐 수여되는 승점을 사용합니다. 과제는 자원, 업적, 엔드게임 보너스 등 여러 VP 소스를 추적하는 것입니다. 디지털 트래커를 사용하면 점수가 발생할 때 입력하고 누계를 확인할 수 있습니다.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            '여러 점수 카테고리 추적',
            '엔드게임 보너스 계산',
            '즉시 동점자 해결',
          ],
        },
        {
          title: '마이너스 점수 게임',
          description: '일부 게임은 특정 행동에 대해 플레이어에게 마이너스 점수 패널티를 부과합니다. 디지털 점수 기록기는 마이너스 값을 자연스럽게 처리하여 빨간색으로 표시해 패널티를 즉시 확인할 수 있습니다. 이것은 특히 트릭 테이킹 게임이나 패널티 메커니즘이 있는 추리 게임에서 유용합니다.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            '자동 마이너스 처리',
            '시각적 패널티 표시기',
            '정확한 누적 합계',
          ],
        },
        {
          title: '캠페인 게임',
          description: '레거시 및 캠페인 게임은 여러 세션에 걸쳐 점수를 이어갑니다. 트래커가 없으면 게임하는 날 사이에 종이 기록을 보관해야 합니다. 디지털 도구는 캠페인 점수를 정리하여 관리하고 자신의 결정이 전체 순위에 어떻게 영향을 미쳤는지 검토할 수 있게 해줍니다.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            '지속적인 캠페인 추적',
            '세션 간 비교',
            '세션별 분석',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '점수 기록 용어집',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '승점 (VP)',
          definition: '대부분의 현대 보드게임에서 사용되는 표준 점수 단위입니다. 플레이어는 행동을 통해 VP를 획득하며, 게임 종료 시 가장 많은 VP를 가진 사람이 승리합니다.',
        },
        {
          term: '라운드 점수',
          definition: '게임 종료 시에만이 아니라 각 라운드 종료 시 점수를 기록하는 것. 상세한 기록을 생성하고 오류 확인을 쉽게 만듭니다.',
        },
        {
          term: '리더보드',
          definition: '총 점수를 기준으로 각 플레이어의 순위를 보여주는 실시간 순위표입니다. 새 점수가 입력되면 리더보드가 자동으로 재정렬됩니다.',
        },
        {
          term: '마이너스 점수',
          definition: '플레이어가 패널티나 실패한 행동을 통해 점수를 잃어 마이너스 합계가 발생하는 점수 시스템. 디지털 트래커는 수동 뺄셈 오류 없이 이를 처리합니다.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '점수 분쟁 처리 방법',
      icon: 'mdi:information-outline',
      badge: '게임 팁',
      html: '플레이어가 점수에 이의를 제기하면 즉시 변경하지 마세요. 먼저 라운드 기록을 확인하여 입력된 내용을 확인하세요. 항목이 잘못된 경우 +/- 버튼을 사용하여 수정하면 합계가 자동으로 업데이트됩니다. 라운드 항목이 올바르지만 플레이어가 동의하지 않는 경우, 기록은 모든 사람이 함께 검토할 수 있는 객관적인 증거를 제공합니다.',
    },
  ],
  faq: [
    {
      question: '몇 명까지 플레이어를 추적할 수 있나요?',
      answer: '제한이 없습니다. 게임이 지원하는 만큼 플레이어를 추가하고 세션 중 언제든지 이름을 변경할 수 있습니다.',
    },
    {
      question: '실수를 취소할 수 있나요?',
      answer: '네. "마지막 라운드 취소" 버튼을 사용하여 가장 최근 점수 라운드를 제거하면 모든 합계와 순위가 자동으로 재계산됩니다.',
    },
    {
      question: '점수 추적기가 내 데이터를 저장하나요?',
      answer: '점수 추적기는 브라우저에서 완전히 실행됩니다. 데이터는 현재 세션 동안 유지됩니다. 페이지를 새로고침하면 모든 점수가 초기화됩니다.',
    },
    {
      question: '리더보드는 어떻게 작동하나요?',
      answer: '리더보드는 총점 내림차순으로 플레이어를 정렬합니다. 각 라운드에서 점수를 입력하거나 수정하면 순위가 자동으로 업데이트됩니다.',
    },
    {
      question: '마이너스 점수를 추적할 수 있나요?',
      answer: '네. +/- 버튼으로 양수와 음수 조정이 모두 가능하므로 패널티 점수나 감점 메커니즘이 있는 게임에 적합합니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '플레이어 추가',
      text: '"플레이어 추가" 입력란에 플레이어 이름을 입력하세요. 게임 중 언제든지 플레이어를 추가하거나 제거할 수 있습니다.',
    },
    {
      name: '점수 기록 시작',
      text: '"라운드 시작"을 클릭하여 새 점수 기록 라운드를 시작하세요. +/- 버튼을 사용하여 각 플레이어의 점수를 조정하세요.',
    },
    {
      name: '순위 보기',
      text: '리더보드가 자동으로 업데이트됩니다. "점수 기록" 탭을 찾아보고 이전 라운드 항목을 검토하세요.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Score Tracker & Scorekeeper',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '몇 명까지 플레이어를 추적할 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '제한이 없습니다. 게임이 지원하는 만큼 플레이어를 추가하고 세션 중 언제든지 이름을 변경할 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '실수를 취소할 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '네. "마지막 라운드 취소" 버튼을 사용하여 가장 최근 점수 라운드를 제거하면 모든 합계와 순위가 자동으로 재계산됩니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '점수 추적기가 내 데이터를 저장하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '점수 추적기는 브라우저에서 완전히 실행됩니다. 데이터는 현재 세션 동안 유지됩니다. 페이지를 새로고침하면 모든 점수가 초기화됩니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '리더보드는 어떻게 작동하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '리더보드는 총점 내림차순으로 플레이어를 정렬합니다. 각 라운드에서 점수를 입력하거나 수정하면 순위가 자동으로 업데이트됩니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '마이너스 점수를 추적할 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '네. +/- 버튼으로 양수와 음수 조정이 모두 가능하므로 패널티 점수나 감점 메커니즘이 있는 게임에 적합합니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '점수 추적기 사용 방법',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '플레이어 추가',
          'text': '"플레이어 추가" 입력란에 플레이어 이름을 입력하세요. 게임 중 언제든지 플레이어를 추가하거나 제거할 수 있습니다.',
        },
        {
          '@type': 'HowToStep',
          'name': '점수 기록 시작',
          'text': '"라운드 시작"을 클릭하여 새 점수 기록 라운드를 시작하세요. +/- 버튼을 사용하여 각 플레이어의 점수를 조정하세요.',
        },
        {
          '@type': 'HowToStep',
          'name': '순위 보기',
          'text': '리더보드가 자동으로 업데이트됩니다. "점수 기록" 탭을 찾아보고 이전 라운드 항목을 검토하세요.',
        },
      ],
    },
  ],
};
