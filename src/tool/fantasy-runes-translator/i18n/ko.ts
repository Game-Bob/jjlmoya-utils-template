import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { FantasyRunesTranslatorUI } from '../entry';

const ui: FantasyRunesTranslatorUI = {
  title: '판타지 룬 번역기',
  inputPlaceholder: '번역할 단어 또는 이름을 입력하세요...',
  alphabetLabel: '룬 알파벳',
  elderFuthark: '엘더 푸타르크',
  angloSaxon: '앵글로색슨',
  fantasy: '판타지 문자',
  theban: '테반',
  enochian: '에노키아어',
  daemonic: '데모닉',
  ogham: '오검',
  translate: '번역',
  clear: '지우기',
  copy: '텍스트 복사',
  copied: '복사됨!',
  runeName: '이름',
  runeMeaning: '의미',
  runePhonetic: '발음',
  clickHint: '룬을 클릭하면 세부 정보를 볼 수 있습니다',
  outputLabel: '룬 출력',
  noInput: '룬으로 변환할 텍스트를 위에 입력하세요',
  unknownChar: '?',
  gmMode: 'GM 모드',
  exitGmMode: '종료',
  gmHint: '이것을 플레이어에게 보여주세요',
  seedLabel: '시드',
  seedPlaceholder: '선택 사항',
  seedApplied: '잠김',
  shuffleSeed: '셔플',
};

const faq = [
  {
    question: '엘더 푸타르크란 무엇인가요?',
    answer: '엘더 푸타르크는 룬 문자 중 가장 오래된 형태로, 2세기부터 8세기까지 게르만 부족들에 의해 사용되었습니다. 아티르(aettir)라고 불리는 8개씩 세 그룹으로 나뉜 24개의 룬으로 구성됩니다. 각 룬은 음가와 자연 또는 신화적 개념을 나타내는 상징적인 이름을 가지고 있습니다.',
  },
  {
    question: '엘더 푸타르크와 앵글로색슨 룬의 차이점은 무엇인가요?',
    answer: '앵글로색슨 푸토르크는 영국에서 발전된 엘더 푸타르크의 확장 버전입니다. 고대 영어의 고유한 소리를 표현하기 위해 추가 룬이 더해져 24자에서 최대 33자로 확장되었습니다. 의미와 음가도 시간이 지남에 따라 변화했습니다.',
  },
  {
    question: '이 번역기는 단어를 완벽하게 변환하나요?',
    answer: '이 도구는 룬 기호로 글자-대-글자 음역을 제공합니다. 역사적 룬 사용은 문자 그대로의 글자 대신 음성에 기반했으므로 결과는 현대적 해석입니다. 판타지 문자 옵션은 테이블탑 RPG 분위기를 위한 창의적인 가상 알파벳을 제공합니다.',
  },
  {
    question: '이 룬들을 테이블탑 RPG 캠페인에서 사용할 수 있나요?',
    answer: '네! 게임 마스터와 플레이어 모두 번역기를 사용하여 룬 문자 비문, 마법 문자, 비밀 메시지 또는 캐릭터와 장소의 장식용 이름을 만들 수 있습니다. 판타지 문자 옵션은 특히 판타지 롤플레잉 설정을 위해 설계되었습니다.',
  },
  {
    question: '이 도구는 제가 입력한 텍스트를 저장하나요?',
    answer: '아니요. 모든 것은 브라우저에서 로컬로 실행됩니다. 텍스트, 번역 또는 선택 사항이 서버로 전송되지 않습니다. 창작 작업은 완전히 비공개로 유지됩니다.',
  },
  {
    question: '룬을 클릭하면 어떻게 되나요?',
    answer: '룬 카드를 클릭하면 전통적인 이름, 상징적 의미 및 음가가 표시됩니다. 이를 통해 룬을 배우고 RPG 필요에 맞는 적절한 기호를 선택할 수 있습니다.',
  },
];

const howTo = [
  {
    name: '텍스트 입력',
    text: '입력 필드에 영어 단어, 이름 또는 구문을 입력하세요. 번역기는 단일 단어 또는 짧은 구문에 가장 잘 작동합니다.',
  },
  {
    name: '알파벳 선택',
    text: '엘더 푸타르크(고대 게르만), 앵글로색슨(중세 영어), 또는 판타지 문자(테이블탑 RPG 스타일) 중에서 선택하세요.',
  },
  {
    name: '번역하고 탐색하기',
    text: '"번역"을 클릭하여 텍스트를 변환하세요. 각 룬이 카드로 나타납니다. 룬을 클릭하여 이름, 의미 및 소리를 확인하세요. 복사 버튼을 사용하여 룬 텍스트를 클립보드에 저장하세요.',
  },
];

export const content: ToolLocaleContent<FantasyRunesTranslatorUI> = {
  slug: 'fantasy-runes-translator',
  title: '판타지 룬 번역기 / 엘더 푸타르크, 테반, 에노키아어 and 데모닉 룬 변환기',
  description: '텍스트를 엘더 푸타르크, 앵글로색슨 푸토르크, 테반, 에노키아어, 데모닉, 오검 또는 판타지 문자로 번역하세요. 테이블탑 RPG 퍼즐, 캠페인, 마법사 두루마리, 신비로운 룬에 완벽합니다.',
  ui,
  seo: [
    { type: 'title', text: '테이블탑 RPG 세계 구축을 위한 룬 문자와 신비로운 문자 체계', level: 2 },
    { type: 'paragraph', html: '신비로운 룬 문자, 고대 상징, 비밀 문자는 D&D, Pathfinder, Warhammer와 같은 판타지 테이블탑 롤플레잉 게임에 비교할 수 없는 몰입감을 선사합니다. 엘더 푸타르크로 새겨진 숨겨진 드워프 유적을 만들든, 에노키아어 천사의 언어 문자가 담긴 신비한 마법서를 디자인하든, 테반 알파벳을 사용하여 마녀의 단서를 흩뿌리든, 금지된 데모닉 메시지를 작성하든, 저희 룬 생성기는 일반 영어 텍스트를 실시간으로 양식화된 기호로 변환합니다. 물리적 소품, 미스터리 암호, 고대 석조 조각으로 플레이어의 호기심을 자극하세요.' },
    {
      type: 'stats',
      items: [
        { value: '7', label: '룬 문자 종류' },
        { value: '150+', label: '기호 변형' },
        { value: '즉시', label: '시각적 음역' },
      ],
      columns: 3,
    },
    { type: 'title', text: '엘더 푸타르크 & 앵글로색슨 푸토르크: 고대 게르만 및 북유럽 룬', level: 2 },
    { type: 'paragraph', html: '2세기로 거슬러 올라가는 엘더 푸타르크는 자연의 근본적인 힘을 나타내는 24자로 구성된 가장 오래된 룬 체계입니다. 앵글로색슨 푸토르크는 고대 영어 음성학을 위해 이 체계를 33자까지 확장했습니다. 이러한 역사적 상징들은 RPG 캠페인 설정에서 드워프 씨족, 북유럽 신화에서 영감을 받은 문화, 바이킹 조각, 야만인 씨족 휘장을 표현하는 데 완벽합니다.' },
    { type: 'title', text: '테반 & 오검: 중세 마녀술과 켈트 나무 알파벳', level: 2 },
    { type: 'paragraph', html: '흔히 호노리우스의 룬 또는 마녀의 알파벳으로 불리는 테반 문자는 오컬트 전통과 위카에서 사용된 역사적으로 유명한 중세 암호입니다. 오검은 가장자리를 따라 새겨진 선형 획을 사용하는 초기 중세 알파벳으로, 켈트 민속학 및 드루이드 나무 마법과 유명하게 연관되어 있습니다. 이 문자들을 사용하여 드루이드 성소, 엘프 숲, 이교도 제단 또는 비밀 마녀 집회의 숨겨진 메시지를 장식하세요.' },
    { type: 'title', text: '에노키아어 & 데모닉 문자: 신비로운 천사와 심연의 언어', level: 2 },
    { type: 'paragraph', html: '16세기 존 디와 에드워드 켈리에 의해 처음 기록된 에노키아어는 천사의 언어로 믿어졌던 상세한 인공 언어입니다. 데모닉 문자는 심연의 글리프, 어두운 계약, 지옥의 표식을 나타냅니다. 해독 가능한 악마 계약서, 어둠의 숭배 조각, 천사 유물을 위저드, 팔라딘, 클레릭이 조사할 수 있도록 남겨두어 캠페인의 서사적 중요성을 높이세요.' },
    { type: 'title', text: '맞춤형 판타지 문자: 롤플레이 준비 완료 창의적 알파벳', level: 2 },
    { type: 'paragraph', html: '실제 역사를 넘어서는 세계를 위해, 저희 맞춤형 판타지 문자는 클래식 하이 판타지 미학을 불러일으키기 위해 특별히 설계된 가상의 룬 세트를 제공합니다. 각 룬은 게임 마스터 인쇄물, 디지털 지도, 맞춤형 플레이어 토큰에서 돋보이도록 디자인되었습니다. 시드 기반 무작위화와 결합하여 다른 파벌, 국가 또는 고대 신들에게 고유한 비밀 언어를 만들어 보세요.' },
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
      'name': '판타지 룬 번역기',
      'operatingSystem': '모두',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 필요. JavaScript 필요.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '판타지 룬 번역기 사용 방법',
      'step': howTo.map((h) => ({
        '@type': 'HowToStep',
        'name': h.name,
        'text': h.text,
      })),
    },
  ],
};
