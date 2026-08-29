import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: '프레임 선택',
  frameHint: '이름을 읽기 전에 캐릭터의 역할이 전달되는 실루엣을 선택하세요.',
  randomFrame: '무작위 프레임',
  surfaceLegend: '토큰 색상 설정',
  backgroundLabel: '배경색',
  borderLabel: '테두리색',
  textLabel: '글자색',
  overlayLabel: '톤 덮어씌우기',
  randomColors: '무작위 색상',
  borderWidthLabel: '테두리 두께',
  opacityLabel: '테두리 투명도',
  overlayOpacityLabel: '초상화 투명도',
  stageLabel: '실시간 토큰 제작소',
  chooseImage: '초상화 선택',
  positionHint: '토큰 위에서 직접 이미지나 라벨을 드래그하여 이동하세요.',
  markerName: '마커 이름',
  markerNamePlaceholder: '마커 이름 입력',
  textLegend: '플레이용 상세 정보 추가',
  textHint: '이름, 레벨, 역할, 상태 등 짧은 라벨을 추가하여 토큰 위에 배치하세요.',
  textPlaceholder: '캐릭터 이름 또는 역할',
  addText: '라벨 추가',
  removeText: '라벨 삭제',
  textSizeLabel: '글자 크기',
  alignmentLabel: '텍스트 정렬',
  alignLeft: '왼쪽 정렬',
  alignCenter: '가운데 정렬',
  alignRight: '오른쪽 정렬',
  imageLegend: '초상화 조절',
  imageZoomLabel: '초상화 확대',
  scaleLabel: '내보내기 크기',
  savedMarkers: '저장된 마커',
  noSavedMarkers: '저장된 마커가 여기에 표시되며 언제든지 다시 열어 수정할 수 있습니다.',
  reuseMarker: '수정할 마커를 선택하세요.',
  deleteMarker: '마커 삭제',
  newMarker: '새 마커',
  download: 'PNG 다운로드',
  copy: 'PNG 복사',
  downloadBatch: '일괄 다운로드',
  batchLabel: '고급 일괄 내보내기',
  batchHint: '여러 초상화 이미지에 현재 프레임 설정을 적용하여 한 번에 내보냅니다.',
  chooseBatch: '일괄 이미지 선택',
  batchReady: '{count}개의 초상화 준비 완료.',
  noImage: '불러온 초상화가 없습니다',
  noText: '라벨이 없습니다. 필요한 정보를 추가하세요.',
  tokenDetails: '캐릭터 토큰 제어판',
  exportHint: '프레임 외곽은 투명 PNG로 저장되어 VTT(온라인 세션) 및 인쇄용으로 바로 사용 가능합니다.',
};

const faq = [
  {
    question: '시인성이 좋은 캐릭터 토큰 초상화 조건은 무엇인가요?',
    answer: '얼굴이 명확히 보이고 테두리와의 대비가 분명한 이미지를 선택하세요. 머리와 어깨 위주의 크롭이 온라인 세션 화면에서 축소되어도 잘 보입니다.',
  },
  {
    question: '프레임 안에서 초상화 위치를 어떻게 맞추나요?',
    answer: '이미지를 불러온 후 토큰 위에서 직접 드래그하여 맞춥니다. 초상화 확대 기능을 사용하면 프레임 형태 변경 없이 얼굴을 맞출 수 있습니다.',
  },
  {
    question: '캐릭터 이름이나 레벨을 토큰에 넣을 수 있나요?',
    answer: '네. 짧은 라벨을 여러 개 추가하고 크기와 정렬을 조절한 후 보기 좋은 위치로 드래그하여 배치할 수 있습니다.',
  },
  {
    question: '저장된 PNG의 배경은 투명하게 유지되나요?',
    answer: '네. 선택한 실루엣 외곽은 배경이 투명한 PNG로 저장되어 지도 위에 자연스럽게 배치됩니다.',
  },
  {
    question: '파티원 전체의 토큰을 한 번에 만들 수 있나요?',
    answer: '네. 일괄 내보내기 기능을 활용하면 일관된 프레임 스타일을 여러 이미지에 적용하여 한 번에 다운로드할 수 있습니다.',
  },
  {
    question: '저장한 마커는 어디에 보관되나요?',
    answer: '마커 데이터는 사용 중인 브라우저의 로컬 저장소에 보관됩니다. 외부 서버로 사진이 업로드되지 않습니다.',
  },
];

const howTo = [
  { name: '캐릭터에 어울리는 프레임 선택', text: '플레이어 캐릭터는 원형, 전술 전투용은 육각형, 보스는 별 모양 등 캐릭터 성격에 맞는 형태를 선택합니다.' },
  { name: '초상화 등록 및 위치 조절', text: '이미지를 드롭하고 얼굴이 중앙에 오도록 드래그 및 확대율을 조절합니다.' },
  { name: '플레이에 필요한 라벨 추가', text: '이름이나 역할 등 짧은 텍스트를 추가하여 그림을 가리지 않는 위치에 배치합니다.' },
  { name: '투명 PNG로 내보내기', text: '완성된 토큰을 PNG로 저장하여 VTT 프로그램이나 인쇄용 시트에서 사용합니다.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Token Stamp Studio',
  operatingSystem: 'All',
  applicationCategory: 'DesignApplication',
  description: 'TRPG 온라인 세션용 캐릭터 토큰 생성기. 맞춤 프레임, 투명 PNG 다운로드, 일괄 제작 지원.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'TRPG 캐릭터 토큰 만드는 법',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'token-stamp-studio',
  title: 'TRPG 캐릭터 토큰 만들기 스튜디오 (투명 PNG)',
  description: 'TRPG 온라인 세션용 캐릭터 토큰 생성기. 맞춤 프레임, 투명 PNG 다운로드, 일괄 제작 지원.',
  ui,
  seo: [
    { type: 'title', text: '지도에서 한눈에 구분되는 캐릭터 토큰 제작', level: 2 },
    { type: 'paragraph', html: 'TRPG 및 보드게임 지도에서 토큰의 실루엣은 캐릭터의 형태와 정체를 직관적으로 보여주는 중요한 요소입니다. 캐릭터에 맞는 프레임을 고르고 축소 상태에서도 잘 보이도록 디자인하세요.' },
    { type: 'title', text: '캐릭터 역할에 맞는 프레임 선택', level: 2 },
    { type: 'list', items: ['<strong>원형:</strong> 플레이어 캐릭터 및 동료 NPC에 가장 무난한 디자인.', '<strong>육각형/팔각형:</strong> 많은 단위가 등장하는 전술 전투에서 구분이 용이.', '<strong>별 모양:</strong> 보스 몬스터나 강조가 필요한 캐릭터용.', '<strong>구름형:</strong> 정령, 소환수, 소환물 등 특수 존재용.'] },
    { type: 'tip', title: '실제 게임 플레이 화면 크기를 고려', html: '지도를 축소해 토큰이 작아진 상태에서도 얼굴과 이름이 명확히 구별되는지 확인하며 제작하세요.' },
    { type: 'title', text: '게임에 도움 되는 짧은 라벨 활용', level: 2 },
    { type: 'paragraph', html: '토큰에는 이름이나 짧은 상태 정보만 넣어 일러스트를 가리지 않도록 하는 것이 좋습니다.' },
    { type: 'title', text: '파티 전체 토큰 일괄 생성', level: 2 },
    { type: 'paragraph', html: '일괄 작업 기능을 사용하면 통일된 프레임 디자인으로 파티원 전체의 토큰을 빠르게 완성할 수 있습니다.' },
    { type: 'tip', title: '자동 로컬 저장 기능', html: '작업 중인 토큰은 브라우저에 저장되므로 캐릭터 성장에 맞춰 언제든 수정할 수 있습니다.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
