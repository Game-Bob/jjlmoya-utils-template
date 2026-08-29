import { bibliography } from '../bibliography';
import type { InvestigationBoardLocaleContent } from '../entry';

export const content: InvestigationBoardLocaleContent = {
  slug: "investigation-board",
  title: "Conspiracy Board Maker: Online Detective RPG Clue & Relationship Map Organizer",
  description: "Design interactive digital conspiracy boards, virtual cork boards with red string, and RPG investigation maps. Connect clues, suspects, and locations for tabletop mystery campaigns.",
  ui: {
  "title": "Conspiracy Board Maker",
  "addCard": "Add Card",
  "searchPlaceholder": "Search cards by name or clues",
  "filterAll": "All Categories",
  "filterCharacter": "Characters",
  "filterClue": "Clues",
  "filterLocation": "Locations",
  "filterItem": "Items",
  "cardName": "Card Name",
  "cardCategory": "Category",
  "cardDescription": "Description",
  "cardNotes": "Private Notes",
  "cardTags": "Tags separated by commas",
  "cardColor": "Card Highlight Color",
  "save": "Save Changes",
  "delete": "Delete",
  "cancel": "Cancel",
  "clearBoard": "Clear Board",
  "connectionsTitle": "Relationships Map",
  "addConnection": "Add Connection",
  "connectionLabel": "Relationship Label",
  "connectionColor": "Line Color",
  "sourceCard": "From Card",
  "targetCard": "To Card",
  "close": "Close",
  "character": "Character",
  "clue": "Clue",
  "location": "Location",
  "item": "Item",
  "custom": "Custom",
  "immersive": "Fullscreen"
},
  seo: [
    { type: 'title', text: "Online Conspiracy Board Maker: Organize Detective RPG Clues & Relationship Maps", level: 2 },
    { type: 'paragraph', html: "Unraveling a complex web of lies, tracking suspect alibis, and connecting crime scene evidence can overwhelm any detective RPG group. Whether you are running a Call of Cthulhu campaign, a Cyberpunk murder mystery, a homebrew D&D detective quest, or writing a thriller novel, our online conspiracy board maker is the ultimate tool. Drag, drop, categorize, and link clues, NPCs, and physical evidence on an infinite digital cork board. Use color-coded relationship threads to instantly see how suspects relate to crime scenes, alibis, and hidden motives, eliminating messy paper notes and keeping players fully immersed in the investigation." },
    {
      type: 'stats',
      items: [
        { value: "Unlimited", label: "Nodes Board" },
        { value: "4", label: "Categories" },
        { value: "Drag-and-Drop", label: "Interface" }
      ],
      columns: 3
    },
    { type: 'title', text: "Tips for Structuring Your Detective RPG Mystery Board", level: 2 },
    { type: 'tip', title: "The Three Clue Rule", html: "For every conclusion or deduction you want the players to make, add at least three distinct clues to the board. Connect them using custom colored threads to show alternative lines of reasoning. Use Character cards for suspects and witnesses, Locations for crime scenes, and Items for physical evidence or documents. Keep notes updated with player discoveries." },
    { type: 'title', text: "Digital Conspiracy Boards vs Physical Cork Boards", level: 2 },
    {
      type: 'proscons',
      title: "Digital Conspiracy Boards vs Physical Cork Boards",
      items: [
        { pro: "Infinite canvas size to add as many clues and character relationships as needed without space limits.", con: "Requires a screen, tablet, or digital device during the tabletop session." },
        { pro: "Instant search and category filters to locate specific witnesses or clues during sessions.", con: "Lacks the tactile feel of physical red string and pins on a wall." },
        { pro: "Save, load, and share maps digitally without taking up physical space between game nights.", con: "Requires internet access or local storage to persist the board state." }
      ]
    },
    { type: 'title', text: "Choosing Card Categories for Your Mystery Map", level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: "Character Nodes",
          description: "Used to represent NPCs, suspects, witnesses, or organizations. Highlight relationships with colored lines.",
          icon: 'mdi:account-group',
          highlight: true,
          points: [
            "Track suspect alibis and motives",
            "Link family and faction ties",
            "Record witness testimonies"
          ]
        },
        {
          title: "Clue Nodes",
          description: "Represent physical evidence, autopsy reports, alibis, or rumors discovered by the players during the campaign.",
          icon: 'mdi:magnify',
          highlight: false,
          points: [
            "Autopsy and forensic reports",
            "Physical items from crime scenes",
            "Heard rumors and secrets"
          ]
        },
        {
          title: "Location Nodes",
          description: "Crime scenes, suspect houses, local hideouts, or cities where events take place.",
          icon: 'mdi:map-marker',
          highlight: false,
          points: [
            "Crime scene photos and maps",
            "Residences of key NPCs",
            "Secret hideouts and portals"
          ]
        }
      ],
      columns: 3
    },
    { type: 'title', text: "Conspiracy Mapping Terminology Glossary", level: 3 },
    {
      type: 'glossary',
      items: [
        { term: "Node", definition: "Any card on the canvas representing a person, location, clue, or item." },
        { term: "Relationship Thread", definition: "A colored line linking two cards, indicating how they are connected (e.g. Investigating, Alibi, Owner)." },
        { term: "Immersive Mode", definition: "A fullscreen layout that hides control panels, maximizing canvas workspace on mobile or tablets." },
        { term: "Highlight Path", definition: "A visual path showing only the connected nodes and lines of a selected card, dimming the rest of the board." }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Performance Tip for Mobile Devices",
      icon: 'mdi:information-outline',
      badge: 'GRID TIP',
      html: "If dragging nodes feels slow on older tablets or phones, toggle the fullscreen mode to hide unnecessary menus. Make sure grid snapping is enabled (cards snap to every 15px) for consistent alignment with minimal effort."
    }
  ],
  faq: [
    { question: "How do I add cards?", answer: "Click Add Card in the control panel or long press on any empty space on the background canvas to open the context menu and select Add Card at that position." },
    { question: "How do I connect two cards?", answer: "Click the link icon (chain) on a card, then click on the target card to create a connection. Or select Add Connection in the control panel to choose cards manually." },
    { question: "Can I use custom card colors?", answer: "Yes. Open a card by double-clicking it, select Custom under the Category dropdown, pick your desired highlight color, and click Save Changes." },
    { question: "Does the board save my work?", answer: "Yes. Your progress is saved automatically to your browser local storage under the current board name. You can create multiple boards using the dropdown selector." },
    { question: "How do I zoom and pan the board?", answer: "Use pinch-to-zoom gestures or the mouse wheel to zoom in and out. Drag the background to pan the canvas around smoothly." }
  ],
  bibliography,
  howTo: [
    { name: "Add Investigation Cards", text: "Create cards representing NPCs, clues, crime scenes, or items." },
    { name: "Link Relationships", text: "Create connection lines between cards to show how clues relate." }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': "Conspiracy Board Maker: Online Detective RPG Clue & Relationship Map Organizer",
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
          'name': "How do I add cards?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Click Add Card in the control panel or long press on any empty space on the background canvas to open the context menu and select Add Card at that position."
          }
        },
        {
          '@type': 'Question',
          'name': "How do I connect two cards?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Click the link icon (chain) on a card, then click on the target card to create a connection. Or select Add Connection in the control panel to choose cards manually."
          }
        },
        {
          '@type': 'Question',
          'name': "Can I use custom card colors?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Yes. Open a card by double-clicking it, select Custom under the Category dropdown, pick your desired highlight color, and click Save Changes."
          }
        },
        {
          '@type': 'Question',
          'name': "Does the board save my work?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Yes. Your progress is saved automatically to your browser local storage under the current board name. You can create multiple boards using the dropdown selector."
          }
        },
        {
          '@type': 'Question',
          'name': "How do I zoom and pan the board?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "Use pinch-to-zoom gestures or the mouse wheel to zoom in and out. Drag the background to pan the canvas around smoothly."
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': "How to Use the Conspiracy Board Maker",
      'step': [
        {
          '@type': 'HowToStep',
          'name': "Add Investigation Cards",
          'text': "Create cards representing NPCs, clues, crime scenes, or items."
        },
        {
          '@type': 'HowToStep',
          'name': "Link Relationships",
          'text': "Create connection lines between cards to show how clues relate."
        }
      ]
    }
  ]
};
