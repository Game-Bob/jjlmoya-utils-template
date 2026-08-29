import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BoardGameTimerUI } from '../entry';

const ui: BoardGameTimerUI = {
  title: '보드게임 타이머',
  setupTitle: '게임 설정',
  playerNamePlaceholder: '플레이어 이름',
  addPlayer: '플레이어 추가',
  removePlayer: '삭제',
  startGame: '게임 시작',
  pauseGame: '일시정지',
  resumeGame: '재개',
  resetGame: '초기화',
  nextTurn: '턴 종료',
  addTime: '+30초',
  removeTime: '-30초',
  playerLabel: '플레이어',
  minutesLabel: '분',
  secondsLabel: '초',
  expiredLabel: '시간 초과',
  overtimeLabel: '추가 시간',
  turnIndicator: '당신의 턴',
  warningLowTime: '시간 부족',
  pausedOverlay: '게임 일시정지됨',
  roundLabel: '라운드',
  settingsTitle: '설정',
  baseTimeLabel: '기본 시간',
  incrementLabel: '증분/지연',
  warningTimeLabel: '경고 임계값',
  confirmLabel: '확인',
  cancelLabel: '취소',
  noPlayersHint: '시작하려면 최소 2명의 플레이어를 추가하세요',
  addPlayerHint: '플레이어 이름 입력',
  timeUpLabel: '시간이 다 되었습니다!',
  presetsTitle: '프리셋',
  timeControlTitle: '시간 제어',
  modeLabel: '모드',
  modeNormal: '일반 카운트다운',
  modeFischer: '피셔 (증분)',
  modeBronstein: '브론스타인 (지연)',
  modeHourglass: '모래시계',
  modeTurn: '턴 리셋',
  audioTitle: '오디오 경고',
  soundAlerts: '음향 효과',
  playersTitle: '플레이어',
  playersAdded: '추가된 플레이어',
  statsTitle: '게임 통계',
  totalGameTime: '총 시간',
  totalRounds: '총 라운드',
  slowestPlayer: '가장 느린 플레이어',
  playerPerformance: '플레이어 시간 분석',
  playAgain: '새 게임',
};

export const content: ToolLocaleContent<BoardGameTimerUI> = {
  slug: 'board-game-timer',
  title: '보드게임 타이머: 듀얼 체스 클록 및 멀티플레이어 턴 관리기',
  description: '프로급 보드게임 타이머로 턴을 추적하고 시간을 관리하세요. 체스 클록 듀얼 모드, 멀티플레이어 레이아웃, 피셔 증분, 브론스타인 지연, 아워글래스 등을 지원합니다.',
  ui,
  seo: [
    { type: 'title', text: '테이블탑의 페이스 지배하기: 전문적인 시간 제어가 게임 플레이를 향상시키는 이유', level: 2 },
    { type: 'paragraph', html: '시간 관리는 현대 보드게임에서 매우 중요한 부분입니다. 빠른 페이스의 파티 게임을 하든, 깊이 있는 전략 게임을 하든, 생각 시간을 제한하면 모든 참가자가 공평한 차례를 누릴 수 있습니다. 피셔 증분, 브론스타인 지연, 모래시계 모드 같은 전문 타이머 방식을 사용하면 장고(장시간 고민)를 방지하고 일관된 게임 진행 속도를 보장하며 보드 위에 추가적인 전략적 선택지를 더할 수 있습니다.' },
    {
      type: 'stats',
      items: [
        { value: '2-8명', label: '지원 플레이어 수' },
        { value: '5개 모드', label: '시간 제어 방식' },
        { value: '100ms', label: '엔진 정밀도' },
      ],
      columns: 3,
    },
    { type: 'title', text: '피셔, 브론스타인, 모래시계: 고급 시간 제어 방식 규칙 설명', level: 2 },
    { type: 'paragraph', html: '당사의 전문 보드게임 타이머는 토너먼트 대회 경기에서 영감을 받은 여러 가지 시간 측정 옵션을 지원하여 게임을 원활하게 진행시킵니다.' },
    {
      type: 'table',
      headers: ['모드', '작동 방식', '가장 적합한 게임'],
      rows: [
        ['일반 카운트다운', '턴 종료 시 일시정지하는 표준적인 글로벌 카운트다운 타이머.', '공동의 생각 시간 풀을 가진 캐주얼 보드게임'],
        ['피셔 (증분)', '턴을 마칠 때마다 설정한 초 단위의 시간이 플레이어의 시계에 추가됩니다.', '빠른 플레이로 시간 버퍼를 축적할 수 있는 전략 유로 게임 및 워게임'],
        ['브론스타인 (지연)', '턴 시작 시 지연 시간(유예)을 부여하며, 그동안은 메인 타이머가 줄어들지 않습니다.', '짧은 규칙 정리 등 잔여 처리를 무료 시간 내에 해결하고 싶은 복잡한 전술 게임'],
        ['모래시계', '내 시간이 줄어드는 동시에 상대방의 시간이 실시간으로 증가합니다.', '치열한 2인용 대결 및 체스 경기'],
        ['턴 리셋', '턴마다 고정된 시간이 새로 부여되며 턴이 교체될 때 완전히 재설정됩니다.', '페이스가 빠른 파티 게임, 퀴즈 대결, 빠른 라운드 게임'],
      ],
    },
    {
      type: 'tip',
      title: '이상적인 시간 설정 찾기',
      html: '가벼운 파티 게임에는 30~45초, 중량급 유로 게임에는 5초 브론스타인 지연을 포함한 1~2분, 그리고 무거운 워게임이나 긴 전략 캠페인에는 10초 피셔 증분을 더한 30~45분을 설정하여 시작하는 것이 좋습니다.',
    },
    {
      type: 'title',
      text: '시각적 최적화: 대면 대결용 분할 화면 vs 멀티플레이용 중앙 턴 종료 버튼',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '2인 대결을 시작하면 화면이 자동으로 체스 클록식 분할 화면 레이아웃으로 바뀝니다. 각 플레이어의 화면 영역을 180도 회전할 수 있어 테이블 반대편에 앉아 있는 상대방도 남은 시간을 편리하게 볼 수 있습니다. 3인 이상의 플레이에서는 활성 플레이어를 빛으로 강조해 주는 멀티플레이어 그리드로 바뀌며, 개별 시간 조정 카드와 함께 테이블 중앙에 두고 공동 부저처럼 누를 수 있는 거대한 턴 종료 버튼이 제공됩니다.',
    },
    {
      type: 'proscons',
      title: '피셔 증분 vs 브론스타인 지연 비교 분석',
      items: [
        {
          pro: '피셔 방식은 빠른 결정을 내리면 미래의 턴을 위해 시간을 모아둘 수 있게 보상합니다.',
          con: '플레이어들이 일관되게 너무 빠르게 턴을 마치면 총 게임 시간이 늘어날 수 있습니다.',
        },
        {
          pro: '브론스타인 방식은 시간의 과도한 축적 없이 짧은 행정적 턴 처리 동안 시간 낭비를 방지해 줍니다.',
          con: '피지컬 컴포넌트 정리에 필요한 시간에 맞춰 적절한 지연 값을 설정해야 합니다.',
        },
        {
          pro: '모래시계 방식은 내 시간이 상대방에게 그대로 넘어가기 때문에 대결에서 엄청난 긴장감을 유발합니다.',
          con: '플레이어가 3명 이상일 때 수학적으로 계산이 복잡해지고 전략성이 떨어집니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '턴 타이머의 효과를 톡톡히 보는 보드게임 장르',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '전략 유로 게임',
          description: '일꾼 배치 및 자원 관리 게임으로 턴의 깊이가 매번 다릅니다. 피셔 증분을 사용하면 초반을 빠르게 진행하고 후반의 중요한 결정적 국면에서 길게 생각할 시간을 확보할 수 있습니다.',
          icon: 'mdi:chess-knight',
          highlight: true,
          points: [
            '장고(생각 정지) 현상 완화',
            '턴의 복잡도 변화에 맞춘 시간 설계 가능',
            '시간을 적극적인 자원으로 활용',
          ],
        },
        {
          title: '파티 및 퀴즈 게임',
          description: '순발력과 속도가 생명인 게임. 고정 턴 리셋 타이머를 도입하면 텐포를 높게 유지하고 한 플레이어의 긴 생각으로 분위기가 처지는 것을 막아줍니다.',
          icon: 'mdi:party-popper',
          highlight: false,
          points: [
            '짧고 고정된 카운트다운',
            '파티의 재미와 텐션 유지',
            '즉각적인 판단과 행동 강제',
          ],
        },
        {
          title: '대회 및 토너먼트 대결',
          description: '엄격한 체스 클록 룰 하의 2인 대결에서는 대국 공정성을 보장하고 여러 경기의 타임 테이블을 맞추기 위해 화면 회전이 가능한 정밀 타이머가 필수적입니다.',
          icon: 'mdi:trophy',
          highlight: false,
          points: [
            '180도 화면 회전 대응',
            '100ms 단위의 정확한 시간 측정',
            '서든데스 및 추가시간 상태 적용',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '피셔 증분 (Fischer Increment)',
          definition: '매 턴을 마치고 버튼을 누를 때마다 사전에 약속된 일정 초만큼 남은 시간에 합산되는 시간 제어 방법.',
        },
        {
          term: '브론스타인 지연 (Bronstein Delay)',
          definition: '턴이 시작될 때 일정량의 유예 시간을 주며, 그 유예 시간 내에 턴을 마치면 남은 시간이 전혀 깎이지 않는 제어 방법.',
        },
        {
          term: '모래시계 모드 (Hourglass Mode)',
          definition: '한 플레이어에게서 깎인 시간이 실시간으로 상대방의 시간 시계에 바로 채워지는 역동적인 매치 시간 룰.',
        },
        {
          term: '장고 (Analysis Paralysis)',
          definition: '생각할 수 있는 옵션이 너무 많아 플레이어가 정보 과부하에 걸려 턴을 넘기지 못하고 진행을 정체시키는 현상.',
        },
        {
          term: '게임 데이터 통계',
          definition: '게임이 모두 끝난 후에 표시되는 총 라운드 수, 평균 생각 속도, 최장 생각 시간, 그리고 장고를 한 플레이어 순위 등의 분석 데이터.',
        },
      ],
    },
  ],
  faq: [
    {
      question: '듀얼(Duel) 모드 레이아웃은 어떻게 사용하나요?',
      answer: '2인 플레이어로 게임을 시작하면 화면이 자동으로 분할 화면 체스 클록 레이아웃으로 변경됩니다. 각자의 영역을 누르면 자신의 턴이 끝나고 상대의 턴이 시작됩니다. 마주 보고 앉아 있는 경우 화면을 180도 회전시킬 수 있습니다.',
    },
    {
      question: '피셔 모드와 브론스타인 모드의 차이는 무엇인가요?',
      answer: '피셔 모드는 턴 종료 후에 추가 시간이 충전되므로 빠르게 플레이할수록 시간이 축적됩니다. 반면 브론스타인 모드는 턴 시작 시 유예 시간이 적용되어 그 유예 시간 이내에 완료하면 남은 시간이 소모되지 않습니다.',
    },
    {
      question: '게임 종료 후에 플레이 통계를 확인할 수 있나요?',
      answer: '네! 게임이 완전히 끝나거나 한 명의 타이머가 만료되면 통계 모달이 팝업되며 총 소요 시간, 진행 라운드 수, 평균 및 최대 생각 시간, 그리고 플레이어의 속도 랭킹을 시각적으로 보여줍니다.',
    },
    {
      question: '새로고침을 해도 플레이어 목록이 보존되나요?',
      answer: '네, 등록한 플레이어 목록과 지정된 색상 정보는 웹 브라우저의 로컬 스토리지에 자동으로 저장되므로 새로고침하거나 다음에 페이지를 다시 열어도 복구됩니다.',
    },
    {
      question: '게임 도중에 시간을 더 주거나 줄일 수 있나요?',
      answer: '네! 멀티플레이어 모드에서 각 플레이어 카드의 하단에 있는 +30초, -30초 버튼을 터치하여 라이브 게임 중에 언제든지 유연하게 시간을 조절할 수 있습니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '게임 방식 설정',
      text: '프리셋(캐주얼, 블리츠, 전략, 모래시계)을 클릭하거나 기본 시간, 증분/지연 설정, 경고 임계 시간을 자유롭게 구성합니다.',
    },
    {
      name: '플레이어 등록 및 순서 변경',
      text: '플레이어 이름을 입력하고 캐릭터 색상을 정합니다. 화살표 컨트롤러로 턴 순서를 원하는 대로 변경할 수 있으며 설정은 자동 저장됩니다.',
    },
    {
      name: '시작 및 턴 종료',
      text: '게임을 시작합니다. 듀얼 모드에서는 자신의 화면 절반을 터치하여 턴을 넘기고, 멀티플레이 모드에서는 화면 중앙의 거대한 턴 종료 버튼을 누릅니다.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '보드게임 타이머 및 턴 관리기',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '듀얼(Duel) 모드 레이아웃은 어떻게 사용하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '2인 플레이어로 게임을 시작하면 화면이 자동으로 분할 화면 체스 클록 레이아웃으로 변경됩니다. 각자의 영역을 누르면 자신의 턴이 끝나고 상대의 턴이 시작됩니다. 마주 보고 앉아 있는 경우 화면을 180도 회전시킬 수 있습니다.'
          }
        },
        {
          '@type': 'Question',
          'name': '피셔 모드와 브론스타인 모드의 차이는 무엇인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '피셔 모드는 턴 종료 후에 추가 시간이 충전되므로 빠르게 플레이할수록 시간이 축적됩니다. 반면 브론스타인 모드는 턴 시작 시 유예 시간이 적용되어 그 유예 시간 이내에 완료하면 남은 시간이 소모되지 않습니다.'
          }
        },
        {
          '@type': 'Question',
          'name': '게임 종료 후에 플레이 통계를 확인할 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '네! 게임이 완전히 끝나거나 한 명의 타이머가 만료되면 통계 모달이 팝업되며 총 소요 시간, 진행 라운드 수, 평균 및 최대 생각 시간, 그리고 플레이어의 속도 랭킹을 시각적으로 보여줍니다.'
          }
        },
        {
          '@type': 'Question',
          'name': '새로고침을 해도 플레이어 목록이 보존되나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '네, 등록한 플레이어 목록과 지정된 색상 정보는 웹 브라우저의 로컬 스토리지에 자동으로 저장되므로 새로고침하거나 다음에 페이지를 다시 열어도 복구됩니다.'
          }
        },
        {
          '@type': 'Question',
          'name': '게임 도중에 시간을 더 주거나 줄일 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '네! 멀티플레이어 모드에서 각 플레이어 카드의 하단에 있는 +30초, -30초 버튼을 터치하여 라이브 게임 중에 언제든지 유연하게 시간을 조절할 수 있습니다.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '보드게임 타이머 사용 방법',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '게임 방식 설정',
          'text': '프리셋(캐주얼, 블리츠, 전략, 모래시계)을 클릭하거나 기본 시간, 증분/지연 설정, 경고 임계 시간을 자유롭게 구성합니다.'
        },
        {
          '@type': 'HowToStep',
          'name': '플레이어 등록 및 순서 변경',
          'text': '플레이어 이름을 입력하고 캐릭터 색상을 정합니다. 화살표 컨트롤러로 턴 순서를 원하는 대로 변경할 수 있으며 설정은 자동 저장됩니다.'
        },
        {
          '@type': 'HowToStep',
          'name': '시작 및 턴 종료',
          'text': '게임을 시작합니다. 듀얼 모드에서는 자신의 화면 절반을 터치하여 턴을 넘기고, 멀티플레이 모드에서는 화면 중앙의 거대한 턴 종료 버튼을 누릅니다.'
        }
      ]
    }
  ],
};
