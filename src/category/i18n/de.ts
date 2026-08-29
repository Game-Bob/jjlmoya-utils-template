import type { CategoryLocaleContent } from '../../types';

const slug = 'brettspiele';
const title = 'Brettspiel Utilities und Werkzeuge';
const description = 'Kostenlose Werkzeuge für Brett- und Rollenspiele: würfle virtuelle Polyederwürfel mit Live-Statistiken, verwalte Zugzeiten mit einem Multiplayer-Timer und mehr. Läuft im Browser, ohne Anmeldung, 100 % privat.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Brettspiel-Werkzeuge | Online Würfeln & Zugzeiten Messen', level: 2 },
    { type: 'paragraph', html: 'Spieleabende sollen Spaß machen: nicht aus der Suche nach verlorenen Würfeln oder dem Warten auf Ergebnisse bestehen. Diese Werkzeugsammlung bietet dir und deiner Gruppe schnelle, durchdachte Helfer, die sofort einsatzbereit sind. Ob Spielleiter mit tausend Dingen im Kopf oder Spieler, der einfach würfeln will: diese Tools sind für dich gemacht.' },
    { type: 'title', text: 'Virtuelle Würfel mit Echtzeit-Statistiken', level: 2 },
    { type: 'paragraph', html: 'Keine Lust mehr, unter dem Tisch nach Würfeln zu suchen oder darauf zu warten, dass jemand Ergebnisse zusammenzählt? Der virtuelle Würfelbecher lässt dich jede Kombination von Polyederwürfeln sofort werfen - mit Modifikatoren, Vorteil, Nachteil und vollständigem Wurfverlauf. Der integrierte Wahrscheinlichkeitsrechner zeigt dir vor dem Wurf deine echten Erfolgschancen. Perfekt für Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun oder jedes Spiel, das auf Zufall basiert.' },
    { type: 'title', text: 'Halte dein Spiel im Takt mit einem intelligenten Zug-Timer', level: 2 },
    { type: 'paragraph', html: 'Jeder kennt diesen einen Spieler, der sich in jedem Zug unendlich Zeit lässt. Der Spiel-Timer erlaubt dir faire und unterhaltsame Zeitlimits mit Modi für jeden Spielstil: von einfachem Countdown über Fischer-Inkrement bis Bronstein-Verzögerung. Funktioniert für Zweikämpfe mit geteiltem Bildschirm oder Gruppen bis zu acht Spielern mit zentraler Zugsteuerung. Nach dem Spiel gibt es detaillierte Statistiken zu Zeit und Spieltempo.' },
    { type: 'title', text: 'Datenschutz an erster Stelle: Alles läuft auf deinem Gerät', level: 2 },
    { type: 'paragraph', html: 'Eine der größten Stärken dieser Bibliothek: Die gesamte Verarbeitung findet in deinem Browser statt. Keine Daten werden an einen Server gesendet, keine Tracking-Cookies, keine E-Mail oder Registrierung nötig. Nutze die Werkzeuge offline, teile den Bildschirm mit deiner Gruppe oder projiziere ihn auf einen Fernseher: nichts außer dem Spiel zählt. Und weitere Tools sind in Entwicklung, immer darauf ausgelegt, das Leben von Brettspielern zu erleichtern.' },
    { type: 'stats', items: [
      { label: 'Werkzeuge', value: '2+', icon: 'mdi:tools' },
      { label: 'Spieler', value: '2-8', icon: 'mdi:account-group' },
      { label: 'Sprachen', value: '15', icon: 'mdi:translate' },
      { label: 'Datenschutz', value: '100 % Lokal', icon: 'mdi:shield-check' },
    ] },
  ],
};
