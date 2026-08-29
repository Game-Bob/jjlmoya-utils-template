import type { CategoryLocaleContent } from '../../types';

const slug = 'jogos-de-mesa';
const title = 'Utilitários e Ferramentas para Jogos de Mesa';
const description = 'Ferramentas gratuitas para jogos de mesa e RPG: lance dados virtuais com estatísticas ao vivo, controle os tempos de turno com um cronómetro multijogador e muito mais. Funciona no navegador, sem registo, 100% privado.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Ferramentas para Jogos de Mesa | Lançar Dados Online e Cronómetro de Turnos', level: 2 },
    { type: 'paragraph', html: 'As noites de jogo deviam ser diversão, não uma caça aos dados perdidos ou espera interminável por resultados. Esta biblioteca de utilitários oferece a ti e ao teu grupo ferramentas rápidas, bem desenhadas, que funcionam instantaneamente, sem pedir nada em troca. Quer sejas um mestre de jogo a fazer malabarismos com mil coisas ou um jogador que só quer lançar dados sem complicações, estas ferramentas são para ti.' },
    { type: 'title', text: 'Lança Dados Virtuais com Estatísticas em Tempo Real', level: 2 },
    { type: 'paragraph', html: 'Cansado de procurar dados pelo chão ou de esperar que alguém some os resultados? O lançador de dados virtual permite-te lançar qualquer combinação de dados poliédricos instantaneamente, com modificadores, vantagem, desvantagem e um histórico completo. O analisador de probabilidades integrado mostra as tuas hipóteses reais antes de lançar. Perfeito para Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun ou qualquer jogo que dependa do acaso.' },
    { type: 'title', text: 'Mantém o Ritmo do Jogo com um Cronómetro de Turnos Inteligente', level: 2 },
    { type: 'paragraph', html: 'Todos conhecemos aquele jogador que demora uma eternidade em cada turno. O cronómetro de jogo permite-te definir limites de tempo justos e divertidos, com modos que se adaptam a cada estilo: desde um simples cronómetro partilhado até sistemas de xadrez com incremento Fischer ou atraso Bronstein. Funciona para duelos a dois com ecrã dividido ou grupos até oito jogadores com controlo centralizado. No final da partida, consulta estatísticas detalhadas de tempos e ritmo de jogo.' },
    { type: 'title', text: 'Privacidade em Primeiro Lugar: Os Teus Dados Ficam no Teu Dispositivo', level: 2 },
    { type: 'paragraph', html: 'Uma das grandes vantagens desta biblioteca é que todo o processamento ocorre no teu navegador. Nenhum dado é enviado para servidores, sem cookies de rastreio, sem email ou registo necessário. Usa as ferramentas offline, partilha o ecrã com a mesa ou projeta numa televisão - nada com que te preocupar além do próprio jogo. E mais ferramentas estão a chegar, sempre pensadas para facilitar a vida dos jogadores de mesa.' },
    { type: 'stats', items: [
      { label: 'Ferramentas', value: '2+', icon: 'mdi:tools' },
      { label: 'Jogadores', value: '2-8', icon: 'mdi:account-group' },
      { label: 'Idiomas', value: '15', icon: 'mdi:translate' },
      { label: 'Privacidade', value: '100% Local', icon: 'mdi:shield-check' },
    ] },
  ],
};
