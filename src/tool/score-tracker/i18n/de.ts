import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreTrackerUI } from '../entry';

const ui: ScoreTrackerUI = {
  title: 'Punktezahler',
  addPlayer: 'Spieler hinzufügen',
  removePlayer: 'Entfernen',
  renamePlayer: 'Umbenennen',
  startRound: 'Runde 1 starten',
  nextRound: 'Nächste Runde',
  resetGame: 'Spiel zurücksetzen',
  undoRound: 'Letzte Runde rückgängig',
  playerLabel: 'Spieler',
  scoreLabel: 'Punkte',
  roundLabel: 'Runde',
  totalLabel: 'Gesamt',
  rankLabel: 'Rang',
  leaderboardTitle: 'Rangliste',
  historyTitle: 'Punkteverlauf',
  noPlayersHint: 'Spieler hinzufügen, um mit der Punkteerfassung zu beginnen',
  playerNamePlaceholder: 'Spielername',
  confirmLabel: 'Bestätigen',
  cancelLabel: 'Abbrechen',
  deleteRoundConfirm: 'Die letzte Runde löschen?',
  playerAdded: 'Spieler hinzugefügt',
  playerRemoved: 'Spieler entfernt',
  roundStarted: 'Runde gestartet',
  gameReset: 'Spiel wurde zurückgesetzt',
  noRoundsYet: 'Noch keine Runden aufgezeichnet',
  currentRoundLabel: 'Aktuelle Runde',
  scoringTitle: 'Rundenwertung',
  resetAllLabel: 'Alles zurücksetzen',
  confirmResetAll: 'Dies löscht alle Spieler und Punkte. Bist du sicher?',
};

export const content: ToolLocaleContent<ScoreTrackerUI> = {
  slug: 'punktezahler',
  title: 'Punktezahler: Multiplayer Scorekeeper und Ranglistenmanager',
  description: 'Verfolge die Punktzahlen für jedes Brettspiel. Füge Spieler hinzu, erfasse Runde für Runde die Punkte und sieh zu, wie sich die Rangliste mit automatischen Platzierungen in Echtzeit aktualisiert.',
  ui,
  seo: [
    { type: 'title', text: 'Brettspiel Punkteverwaltung: So behältst du den Überblick ohne Fehler', level: 2 },
    { type: 'paragraph', html: 'Punktezählen bei Brettspielen scheint einfach, bis du fünf Runden tief im Spiel steckst und jemand merkt, dass er sich verrechnet hat. Ob du Wingspan, Terraforming Mars, Catan oder ein anderes Siegpunktspiel spielst, genaue Punkteerfassung ist der Unterschied zwischen einem fairen Spiel und einem Streit. Ein digitaler Punktezähler beseitigt Rechenfehler, zeigt Live-Platzierungen und bewahrt eine vollständige Historie jeder Runde, damit du die endgültige Abrechnung überprüfen kannst.' },
    {
      type: 'stats',
      items: [
        { value: 'Unbegrenzt', label: 'Spieler unterstützt' },
        { value: 'Echtzeit', label: 'Ranglisten-Updates' },
        { value: 'Unbegrenzt', label: 'Runden aufgezeichnet' },
      ],
      columns: 3,
    },
    { type: 'title', text: 'Häufige Punktefehler und wie du sie vermeidest', level: 2 },
    { type: 'paragraph', html: 'Der häufigste Fehler ist das Vergessen von Endrundenboni oder das falsche Addieren einer Zahlenspalte. Wenn du Punkte digital erfasst, aktualisiert sich der Gesamtstand automatisch nach jeder Eingabe. So kannst du einen Fehler sofort bemerken, wenn eine Zahl komisch aussieht, anstatt ihn erst am Ende des Spiels zu entdecken, wenn sich niemand mehr an den richtigen Wert erinnert. Die Rundenhistorie ermöglicht es dir, jede vorherige Runde zu prüfen und Fehler zu korrigieren, ohne das gesamte Spiel neu starten zu müssen.' },
    {
      type: 'tip',
      title: 'Schnelle Tipps zur Punkteerfassung',
      html: 'Trage die Punkte sofort nach jeder Runde ein, während sich alle noch an die Ergebnisse erinnern. Verwende beschreibende Spielerbezeichnungen wie Farben oder Fraktionsnamen statt echten Namen bei Spielen mit versteckten Rollen. Wenn du mit Kindern spielst, lass sie selbst die Knöpfe drücken, damit sie am Punktesystem beteiligt bleiben.',
    },
    {
      type: 'title',
      text: 'Rundenwertung vs. Nur Gesamtpunktzahl',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Pro Runde bewerten vs. nur Endpunktzahl',
      items: [
        {
          pro: 'Du siehst, wer in welcher Phase geführt hat und wie sich das Spiel entwickelt hat.',
          con: 'Erfordert Dateneingabe nach jeder Runde statt nur einmal am Ende.',
        },
        {
          pro: 'Fehler sind leicht zu finden, da du einzelne Rundeneinträge mit deiner Erinnerung abgleichen kannst.',
          con: 'Nimmt während der Spielsitzung etwas mehr Zeit in Anspruch.',
        },
        {
          pro: 'Spieler können ihre eigenen Rundenergebnisse überprüfen, was Streitigkeiten reduziert und Vertrauen schafft.',
          con: 'Funktioniert am besten, wenn eine Person das Gerät bedient oder die Spieler sich abwechseln.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Spiele mit ungewöhnlichen Wertungssystemen',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Siegpunktspiele',
          description: 'Die meisten Eurogames vergeben Siegpunkte im Laufe des Spiels. Die Herausforderung besteht darin, mehrere VP-Quellen zu verfolgen: Ressourcen, Errungenschaften, Endspielboni. Ein digitaler Tracker lässt dich Punkte eingeben, sobald sie anfallen, und den laufenden Gesamtstand sehen.',
          icon: 'mdi:chess-queen',
          highlight: true,
          points: [
            'Mehrere Wertungskategorien verfolgen',
            'Endspielbonus-Berechnungen',
            'Sofortige Gleichstandsauflösung',
          ],
        },
        {
          title: 'Spiele mit negativer Wertung',
          description: 'Einige Spiele bestrafen Spieler mit negativen Punkten für bestimmte Aktionen. Ein digitaler Punktezähler behandelt negative Werte ganz natürlich und färbt sie rot ein, damit die Strafe sofort sichtbar ist. Dies ist besonders nützlich bei Stichspielen oder Deduktionsspielen mit Strafmechaniken.',
          icon: 'mdi:minus-circle-outline',
          highlight: false,
          points: [
            'Automatische Negativverarbeitung',
            'Visuelle Strafanzeiger',
            'Präzise kumulierte Gesamtwerte',
          ],
        },
        {
          title: 'Kampagnenspiele',
          description: 'Legacy- und Kampagnenspiele übertragen Punktestände über mehrere Sitzungen hinweg. Ohne einen Tracker musst du zwischen den Spielabenden Papiernotizen führen. Ein digitales Tool hält deine Kampagnenpunkte organisiert und lässt dich überprüfen, wie sich deine Entscheidungen auf die Gesamtwertung ausgewirkt haben.',
          icon: 'mdi:book-open-variant',
          highlight: false,
          points: [
            'Dauerhafte Kampagnenverfolgung',
            'Sitzungsübergreifender Vergleich',
            'Aufschlüsselung Sitzung für Sitzung',
          ],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Punkteglossar',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Siegpunkte (VP)',
          definition: 'Die Standardwertungseinheit in den meisten modernen Brettspielen. Spieler verdienen VP durch Aktionen, und wer die meisten VP hat, wenn das Spiel endet, gewinnt.',
        },
        {
          term: 'Rundenwertung',
          definition: 'Punkte am Ende jeder Runde erfassen, nicht erst am Ende des Spiels. Dies erstellt eine detaillierte Historie und macht die Fehlerprüfung einfach.',
        },
        {
          term: 'Rangliste',
          definition: 'Eine Live-Platzierung, die die Position jedes Spielers basierend auf der Gesamtpunktzahl anzeigt. Die Rangliste ordnet sich automatisch neu, wenn neue Punkte eingegeben werden.',
        },
        {
          term: 'Negative Wertung',
          definition: 'Ein Wertungssystem, bei dem Spieler durch Strafen oder fehlgeschlagene Aktionen Punkte verlieren können, was zu negativen Gesamtwerten führt. Ein digitaler Tracker bewältigt dies ohne manuelle Subtraktionsfehler.',
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'So behandelst du umstrittene Punkte',
      icon: 'mdi:information-outline',
      badge: 'SPIELTIPP',
      html: 'Wenn ein Spieler eine Punktzahl anzweifelt, ändere sie nicht sofort. Überprüfe zuerst die Rundenhistorie, um zu bestätigen, was eingegeben wurde. Wenn der Eintrag falsch ist, korrigiere ihn mit den +/- Tasten und der Gesamtstand aktualisiert sich automatisch. Wenn der Rundeneintrag korrekt ist, der Spieler aber widerspricht, liefert die Historie einen objektiven Nachweis, den alle gemeinsam überprüfen können.',
    },
  ],
  faq: [
    {
      question: 'Wie viele Spieler kann ich verfolgen?',
      answer: 'Es gibt keine Begrenzung. Füge so viele Spieler hinzu, wie dein Spiel unterstützt, und benenne sie jederzeit während der Sitzung um.',
    },
    {
      question: 'Kann ich einen Fehler rückgängig machen?',
      answer: 'Ja. Verwende den Button Letzte Runde Rückgängig, um die letzte Punkterunde zu entfernen. Alle Gesamtwerte und Platzierungen werden automatisch neu berechnet.',
    },
    {
      question: 'Speichert der Punktezähler meine Daten?',
      answer: 'Der Punktezähler läuft vollständig in deinem Browser. Die Daten bleiben während der aktuellen Sitzung erhalten. Ein Neuladen der Seite setzt alle Punkte zurück.',
    },
    {
      question: 'Wie funktioniert die Rangliste?',
      answer: 'Die Rangliste sortiert die Spieler absteigend nach Gesamtpunktzahl. Die Platzierungen aktualisieren sich automatisch, wenn du Punkte eingibst oder änderst.',
    },
    {
      question: 'Kann ich negative Punkte erfassen?',
      answer: 'Ja. Die +/- Tasten ermöglichen sowohl positive als auch negative Anpassungen, sodass es sich für Spiele mit Strafpunkten oder Abzugsmechaniken eignet.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Spieler hinzufügen',
      text: 'Gib Spielernamen über das Eingabefeld Spieler Hinzufügen ein. Du kannst während des Spiels jederzeit Spieler hinzufügen oder entfernen.',
    },
    {
      name: 'Mit der Wertung beginnen',
      text: 'Klicke auf Runde Starten, um eine neue Wertungsrunde zu beginnen. Verwende die +/- Tasten, um die Punktzahl jedes Spielers anzupassen.',
    },
    {
      name: 'Platzierungen anzeigen',
      text: 'Die Rangliste aktualisiert sich automatisch. Durchstöbere den Reiter Punkteverlauf, um vergangene Rundeneinträge zu überprüfen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Punktezahler & Scorekeeper',
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
          'name': 'Wie viele Spieler kann ich verfolgen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Es gibt keine Begrenzung. Füge so viele Spieler hinzu, wie dein Spiel unterstützt, und benenne sie jederzeit während der Sitzung um.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich einen Fehler rückgängig machen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Verwende den Button Letzte Runde Rückgängig, um die letzte Punkterunde zu entfernen. Alle Gesamtwerte und Platzierungen werden automatisch neu berechnet.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Speichert der Punktezähler meine Daten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Der Punktezähler läuft vollständig in deinem Browser. Die Daten bleiben während der aktuellen Sitzung erhalten. Ein Neuladen der Seite setzt alle Punkte zurück.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie funktioniert die Rangliste?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die Rangliste sortiert die Spieler absteigend nach Gesamtpunktzahl. Die Platzierungen aktualisieren sich automatisch, wenn du Punkte eingibst oder änderst.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich negative Punkte erfassen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Die +/- Tasten ermöglichen sowohl positive als auch negative Anpassungen, sodass es sich für Spiele mit Strafpunkten oder Abzugsmechaniken eignet.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So verwendest du den Punktezähler',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Spieler hinzufügen',
          'text': 'Gib Spielernamen über das Eingabefeld Spieler Hinzufügen ein. Du kannst während des Spiels jederzeit Spieler hinzufügen oder entfernen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Mit der Wertung beginnen',
          'text': 'Klicke auf Runde Starten, um eine neue Wertungsrunde zu beginnen. Verwende die +/- Tasten, um die Punktzahl jedes Spielers anzupassen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Platzierungen anzeigen',
          'text': 'Die Rangliste aktualisiert sich automatisch. Durchstöbere den Reiter Punkteverlauf, um vergangene Rundeneinträge zu überprüfen.',
        },
      ],
    },
  ],
};
