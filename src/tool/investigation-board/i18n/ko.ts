import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "investigation-board",
  title: "관계도 제작기: 온라인 추리 RPG 단서 및 인물 관계도 맵",
  description: "대화형 음모 보드 및 수사 지도를 제작하세요. 캐릭터, 단서, 장소를 연결하고 맞춤형 실로 관계를 추적하세요.",
  ui: {
  "title": "관계도 제작기",
  "addCard": "카드 추가",
  "searchPlaceholder": "이름이나 단서로 카드 검색",
  "filterAll": "모든 카테고리",
  "filterCharacter": "인물",
  "filterClue": "단서",
  "filterLocation": "장소",
  "filterItem": "아이템",
  "cardName": "카드 이름",
  "cardCategory": "카테고리",
  "cardDescription": "설명",
  "cardNotes": "개인 메모",
  "cardTags": "쉼표로 구분된 태그",
  "cardColor": "카드 강조 색상",
  "save": "변경사항 저장",
  "delete": "삭제",
  "cancel": "취소",
  "clearBoard": "보드 지우기",
  "connectionsTitle": "관계도 맵",
  "addConnection": "연결 추가",
  "connectionLabel": "관계 설명",
  "connectionColor": "선 색상",
  "sourceCard": "시작 카드",
  "targetCard": "대상 카드",
  "close": "닫기",
  "character": "인물",
  "clue": "단서",
  "location": "장소",
  "item": "아이템",
  "custom": "사용자 정의",
  "immersive": "전체 화면"
},
  seo: [
    { type: 'title', text: "온라인 관계도 제작기: 추리 RPG 단서 정리 및 관계도 지도", level: 2 },
    { type: 'paragraph', html: "복잡한 거짓말의 그물을 풀고, 용의자의 알리바이를 추적하며, 범죄 현장의 증거를 연결하는 작업은 추리 RPG 세션에서 플레이어를 혼란스럽게 만들기 쉽습니다. 크툴루의 부름 캠페인, 사이버펑크 살인 미스터리, D&D의 탐정 퀘스트, 또는 미스터리 소설 집필 등 어떤 상황에서도 이 온라인 관계도 제작기가 완벽한 해결책입니다. 무제한 디지털 코르크 보드 위에 단서, NPC, 물리적 증거를 드래그 앤 드롭으로 정리하세요. 색상별로 구분된 관계선을 사용하여 용의자가 사건 현장, 알리바이, 숨겨진 동기와 어떻게 연결되어 있는지 한눈에 파악할 수 있습니다." },
    {
      type: 'stats',
      items: [
        { value: "무제한", label: "노드 보드" },
        { value: "4", label: "카테고리" },
        { value: "드래그 앤 드롭", label: "인터페이스" }
      ],
      columns: 3
    },
    { type: 'title', text: "추리 RPG 수사 보드를 구성하는 팁", level: 2 },
    { type: 'tip', title: "세 가지 단서 법칙", html: "플레이어가 도달하기를 원하는 결론이나 추리마다 보드에 최소 세 개의 서로 다른 단서를 추가하세요. 이를 색상선으로 연결하여 다양한 추리 경로를 시각화합니다. 용의자에는 인물 카드, 사건 현장에는 장소 카드, 물리적 증거나 문서에는 아이템 카드를 사용하세요. 플레이어의 발견에 따라 개인 메모를 업데이트하세요." },
    { type: 'title', text: "디지털 관계도 보드 vs 물리적 코르크 보드", level: 2 },
    {
      type: 'proscons',
      title: "디지털 관계도 보드 vs 물리적 코르크 보드",
      items: [
        { pro: "공간 제한 없이 필요한 만큼 단서와 용의자, 관계를 추가할 수 있는 무제한 보드 크기.", con: "테이블 세션 중에 화면, 태블릿 또는 디지털 기기를 준비해야 합니다." },
        { pro: "세션 중 특정 증인이나 단서를 즉시 찾을 수 있는 빠른 검색 및 카테고리 필터.", con: "실제 벽에 빨간 실과 핀을 꽂는 물리적인 촉감은 없습니다." },
        { pro: "물리적 공간을 차지하지 않고 수사 지도를 디지털로 저장, 로드, 공유할 수 있습니다.", con: "보드 상태를 저장하기 위해 인터넷 연결이나 브라우저의 로컬 스토리지가 필요합니다." }
      ]
    },
    { type: 'title', text: "수사 지도의 카드 카테고리 선택", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "인물 노드",
          description: "NPC, 용의자, 증인을 나타냅니다. 색상선으로 인물 관계를 강조합니다.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "용의자 알리바이 및 동기 추적",
            "가족 관계 및 비밀 조직 연대 링크",
            "증인의 진술 기록"
          ]
        },
        {
          title: "단서 노드",
          description: "플레이어가 발견한 물리적 증거, 부검 보고서, 알리바이 또는 소문을 나타냅니다.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "부검 보고서 및 과학수사 자료",
            "범죄 현장에서 수집한 물리적 증거품",
            "소문 및 도청한 비밀 정보"
          ]
        },
        {
          title: "장소 노드",
          description: "범죄 현장, 용의자의 집, 비밀 은신처 또는 도시.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "범죄 현장 사진 및 평면도",
            "주요 NPC 거주지 및 근무지",
            "비밀 은신처 및 포탈"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "관계도 매핑 용어 사전", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "수사 노드", definition: "사람, 장소, 단서, 아이템을 나타내는 보드 위의 각 카드." },
        { term: "관계선", definition: "두 카드를 연결하는 색상선으로, 어떤 관계인지 나타냅니다 (예: 용의자, 알리바이, 소유자)." },
        { term: "몰입 모드", definition: "제어판을 숨겨 작업 공간을 최대화하는 전체 화면 레이아웃으로 모바일이나 태블릿에 유용합니다." },
        { term: "강조 경로", definition: "선택한 카드의 연결된 노드와 연결선만 표시하고 나머지는 어둡게 만드는 시각 효과." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "모바일 기기 성능 팁",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "구형 태블릿에서 노드 드래그가 느린 경우, 몰입 모드를 켜서 메뉴를 숨기세요. 또한 그리드 스냅(15px 단위)을 켜면 최소한의 노력으로 보드를 깔끔하게 정렬할 수 있습니다."
    }
  ],
  faq: [
    { question: "연결선은 어떻게 추가하나요?", answer: "제어판에서 연결 추가를 클릭하거나 카드의 링크 아이콘을 클릭한 뒤 대상 카드를 선택합니다." },
    { question: "모바일에서도 카드를 드래그할 수 있나요?", answer: "네, 터치 이벤트를 지원하여 스마트폰과 태블릿에서도 카드를 부드럽게 드래그하고 이동할 수 있습니다." },
    { question: "커스텀 카드 색상을 사용할 수 있나요?", answer: "네. 카드를 더블 클릭하고 카테고리에서 Custom을 선택한 다음 강조 색상을 선택합니다." },
    { question: "보드는 진행 상황을 저장하나요?", answer: "네. 진행 상황은 브라우저의 로컬 스토리지에 자동으로 저장됩니다." },
    { question: "보드를 확대하고 이동하려면 어떻게 하나요?", answer: "핀치 줌 제스처나 마우스 휠로 확대합니다. 배경을 드래그해 보드를 이동합니다." }
  ],
  bibliography,
  howTo: [
    { name: "수사 카드 추가", text: "NPC, 단서, 범죄 현장 또는 아이템을 나타내는 카드를 생성합니다." },
    { name: "관계 연결", text: "카드 사이에 연결선을 만들어 단서들의 연관 관계를 보여줍니다." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "관계도 제작기: 온라인 추리 RPG 단서 및 인물 관계도 맵",
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5 SVG support. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "연결선은 어떻게 추가하나요?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "제어판에서 연결 추가를 클릭하거나 카드의 링크 아이콘을 클릭한 뒤 대상 카드를 선택합니다."
          }
        },
        {
          '@type': 'Question',
          'name': "모바일에서도 카드를 드래그할 수 있나요?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "네, 터치 이벤트를 지원하여 스마트폰과 태블릿에서도 카드를 부드럽게 드래그하고 이동할 수 있습니다."
          }
        },
        {
          '@type': 'Question',
          'name': "커스텀 카드 색상을 사용할 수 있나요?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "네. 카드를 더블 클릭하고 카테고리에서 Custom을 선택한 다음 강조 색상을 선택합니다."
          }
        },
        {
          '@type': 'Question',
          'name': "보드는 진행 상황을 저장하나요?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "네. 진행 상황은 브라우저의 로컬 스토리지에 자동으로 저장됩니다."
          }
        },
        {
          '@type': 'Question',
          'name': "보드를 확대하고 이동하려면 어떻게 하나요?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "핀치 줌 제스처나 마우스 휠로 확대합니다. 배경을 드래그해 보드를 이동합니다."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "관계도 제작기 사용법",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "수사 카드 추가",
          'text': "NPC, 단서, 범죄 현장 또는 아이템을 나타내는 카드를 생성합니다."
        },
        {
          '@type': 'HowToStep',
          'name': "관계 연결",
          'text': "카드 사이에 연결선을 만들어 단서들의 연관 관계를 보여줍니다."
        }
      ]
    }
  ]
};
