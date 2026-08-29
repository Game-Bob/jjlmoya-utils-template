import type { CategoryLocaleContent } from '../../types';

const slug = 'tabletop';
const title = '桌游工具与实用程序';
const description = '免费的桌游和TRPG工具：虚拟骰子带实时统计，多人回合计时器等。在浏览器中运行，无需注册，100%隐私保护。';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: '桌游工具 | 在线掷骰子和回合计时器', level: 2 },
    { type: 'paragraph', html: '游戏之夜本该充满乐趣，而不是到处找丢失的骰子或等待别人计算结果。这款实用工具库为您和您的团队提供快速、精心设计的工具，即刻可用，无需任何回报。无论您是手忙脚乱的 dungeon master，还是只想轻松掷骰的玩家，这些工具都是为您打造的。' },
    { type: 'title', text: '使用虚拟骰子进行实时统计分析', level: 2 },
    { type: 'paragraph', html: '厌倦了在桌子下找骰子或等待别人加总结果？虚拟骰子掷投器让您立即投掷任何组合的多面骰子，支持调整值、优势、劣势和完整历史记录。内置概率分析器在投掷前显示您的真实成功率。非常适合 Dungeons & Dragons、Pathfinder、Call of Cthulhu、Shadowrun 或任何依赖运气的游戏。' },
    { type: 'title', text: '使用智能回合计时器掌控游戏节奏', level: 2 },
    { type: 'paragraph', html: '我们都知道那个每回合都要花上大量时间的玩家。游戏计时器让您设定公平又有趣的时间限制，提供适应各种风格的模式：从简单的共享倒计时到 Fischer 增量或 Bronstein 延迟等国际象棋系统。支持双人分屏对决和最多八人的中央控制模式。游戏结束后，可查看时间和游戏节奏的详细统计数据。' },
    { type: 'title', text: '隐私至上：所有数据保留在您的设备上', level: 2 },
    { type: 'paragraph', html: '该库的最大优势之一是所有处理都在您的浏览器内完成。不会有数据发送到服务器，没有跟踪 Cookie，无需电子邮件或注册。可离线使用工具，与桌上玩家共享屏幕，或投影到电视上，除了游戏本身，无需担心任何事。更多的工具正在开发中，始终以方便桌游玩家为设计目标。' },
    { type: 'stats', items: [
      { label: '工具', value: '2+', icon: 'mdi:tools' },
      { label: '玩家', value: '2-8', icon: 'mdi:account-group' },
      { label: '语言', value: '15', icon: 'mdi:translate' },
      { label: '数据隐私', value: '100% 本地', icon: 'mdi:shield-check' },
    ] },
  ],
};
