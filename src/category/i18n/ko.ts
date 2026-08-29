import type { CategoryLocaleContent } from '../../types';

const slug = 'tabletop';
const title = '보드게임 유틸리티 및 도구';
const description = '보드게임과 TRPG를 위한 무료 도구: 실시간 통계가 포함된 가상 주사위 굴리기, 멀티플레이어 턴 타이머 등. 브라우저에서 작동, 가입 불필요, 100% 비공개.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: '보드게임 도구 | 온라인 주사위 굴리기 및 턴 타이머', level: 2 },
    { type: 'paragraph', html: '게임 나이트는 즐거움을 위한 시간이지, 잃어버린 주사위를 찾거나 누군가 결과를 계산하기를 기다리는 시간이 아닙니다. 이 유틸리티 라이브러리는 여러분과 여러분의 그룹을 위해 즉시 작동하는 빠르고 잘 설계된 도구를 제공합니다. 수백 가지 일을 처리하는 던전 마스터든, 간편하게 주사위를 굴리고 싶은 플레이어든, 이 도구들은 여러분을 위해 만들어졌습니다.' },
    { type: 'title', text: '실시간 통계와 함께하는 가상 주사위 굴리기', level: 2 },
    { type: 'paragraph', html: '테이블 아래에서 주사위를 찾느라 지치셨나요? 누군가 결과를 합산할 때까지 기다리는 데 지치셨나요? 가상 주사위 굴리기를 사용하면 모든 종류의 다면체 주사위를 수정자, 어드밴티지, 디스어드밴티지, 전체 기록과 함께 즉시 굴릴 수 있습니다. 내장된 확률 분석기가 굴리기 전에 실제 성공 확률을 보여줍니다. Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun 등 운에 의존하는 모든 게임에 완벽합니다.' },
    { type: 'title', text: '스마트 턴 타이머로 게임 페이스 유지하기', level: 2 },
    { type: 'paragraph', html: '매 턴마다 영원한 시간을 쓰는 그 플레이어, 모두 알고 계실 겁니다. 게임 타이머를 사용하면 공정하고 재미있는 시간 제한을 설정할 수 있습니다. 단순한 공유 카운트다운부터 Fischer 증분 또는 Bronstein 지연과 같은 체스 시스템까지 모든 플레이 스타일에 맞는 모드를 제공합니다. 분할 화면의 2인 대결부터 최대 8인의 중앙 제어 그룹까지 지원합니다. 게임 종료 후에는 시간과 플레이 페이스에 대한 자세한 통계를 확인할 수 있습니다.' },
    { type: 'title', text: '프라이버시 우선: 모든 데이터는 사용자 기기에 저장됩니다', level: 2 },
    { type: 'paragraph', html: '이 라이브러리의 가장 큰 장점 중 하나는 모든 처리가 브라우저 내에서 이루어진다는 것입니다. 서버로 전송되는 데이터가 없으며, 추적 쿠키도 없고, 이메일이나 가입이 필요하지 않습니다. 오프라인에서 도구를 사용하고, 화면을 테이블과 공유하거나 TV에 투사할 수 있습니다. 게임 자체 외에는 걱정할 것이 없습니다. 그리고 보드게이머의 삶을 더 편하게 만들기 위해 더 많은 도구가 계속 추가될 예정입니다.' },
    { type: 'stats', items: [
      { label: '도구', value: '2+', icon: 'mdi:tools' },
      { label: '플레이어', value: '2-8', icon: 'mdi:account-group' },
      { label: '언어', value: '15', icon: 'mdi:translate' },
      { label: '개인정보 보호', value: '100% 로컬', icon: 'mdi:shield-check' },
    ] },
  ],
};
