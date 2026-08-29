import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { TokenStampLocaleContent, TokenStampUI } from '../entry';

const ui: TokenStampUI = {
  frameLegend: 'Choose a frame',
  frameHint: 'Pick the silhouette that tells the table who this character is before anyone reads the name.',
  randomFrame: 'Random frame',
  surfaceLegend: 'Paint the token',
  backgroundLabel: 'Backdrop',
  borderLabel: 'Frame',
  textLabel: 'Lettering',
  overlayLabel: 'Tint',
  randomColors: 'Random colours',
  borderWidthLabel: 'Frame weight',
  opacityLabel: 'Frame opacity',
  overlayOpacityLabel: 'Portrait tint',
  stageLabel: 'Live token forge',
  chooseImage: 'Choose portrait',
  positionHint: 'Drag the portrait or a label directly on the token.',
  markerName: 'Marker name',
  markerNamePlaceholder: 'Name this marker',
  textLegend: 'Add table readable details',
  textHint: 'Use short labels such as a name, level, role, or condition. Drag each one on the token.',
  textPlaceholder: 'Character name or role',
  addText: 'Add label',
  removeText: 'Remove label',
  textSizeLabel: 'Letter size',
  alignmentLabel: 'Label alignment',
  alignLeft: 'Align label left',
  alignCenter: 'Align label center',
  alignRight: 'Align label right',
  imageLegend: 'Tune the portrait',
  imageZoomLabel: 'Portrait zoom',
  scaleLabel: 'Export scale',
  savedMarkers: 'Saved markers',
  noSavedMarkers: 'Saved markers will appear here so you can reopen, edit, and reuse them for another scene.',
  reuseMarker: 'Select a marker to reopen it in the forge.',
  deleteMarker: 'Delete marker',
  newMarker: 'New marker',
  download: 'Download PNG',
  copy: 'Copy PNG',
  downloadBatch: 'Download batch',
  batchLabel: 'Advanced batch export',
  batchHint: 'Optional: export several portraits with the current frame and paint settings.',
  chooseBatch: 'Choose portraits',
  batchReady: '{count} portraits ready to forge.',
  noImage: 'No portrait loaded',
  noText: 'No labels yet. Add the detail your group needs.',
  tokenDetails: 'Character token controls',
  exportHint: 'The PNG is transparent outside the chosen silhouette, ready for a virtual tabletop or print sheet.',
};

const faq = [
  {
    question: 'What makes a good character token portrait?',
    answer: 'Choose art with a clear face or strong silhouette and enough contrast against the frame. A head and shoulders crop usually stays readable when the token is small on a virtual tabletop.',
  },
  {
    question: 'How do I position a portrait inside the frame?',
    answer: 'Drop in the image, then drag directly on the token to move the crop. Use Portrait zoom to bring a face forward without changing the frame or labels.',
  },
  {
    question: 'Can I add a character name and level?',
    answer: 'Yes. Add as many short labels as you need, select each label in the inspector, change its size and alignment, and drag it to a readable position on the token.',
  },
  {
    question: 'Does the PNG keep transparency outside the token?',
    answer: 'Yes. The exported image keeps the outside of the selected silhouette transparent, which makes it easy to place the marker over a map or print a sheet of tokens.',
  },
  {
    question: 'Can I create a whole party at once?',
    answer: 'Yes. Load several portraits in Batch forge, keep the current frame and paint settings, then download one PNG per portrait. Each file uses its source filename.',
  },
  {
    question: 'Where is my saved marker stored?',
    answer: 'Save on this device keeps the current marker in local browser storage. It never uploads the portrait, but clearing site data or using another device removes that local copy.',
  },
];

const howTo = [
  { name: 'Choose the character silhouette', text: 'Start with the frame that matches the character mood: ring for a classic hero, hex for a tactical game, star for a champion, or a softer shape for a spirit or fey creature.' },
  { name: 'Drop in and frame the portrait', text: 'Choose a portrait or drag it onto the live token. Drag the image until the face or defining silhouette sits inside the frame, then adjust Portrait zoom.' },
  { name: 'Add only the information the table needs', text: 'Add a short name, role, level, or condition. Keep labels brief, choose a readable size, and drag them so the artwork remains visible.' },
  { name: 'Reuse and export for play', text: 'Your active marker saves as you work. Reopen it from Saved markers, or download a transparent PNG for your virtual tabletop, print sheet, or campaign handout.' },
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
  description: 'Create readable character tokens for tabletop RPG maps with custom silhouettes, portraits, labels, transparency, and batch PNG export.',
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to make a tabletop character token',
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

export const content: TokenStampLocaleContent = {
  slug: 'token-stamp-studio',
  title: 'Character Token Maker for Tabletop RPGs',
  description: 'Forge readable character markers from portraits with expressive frames, draggable crops, labels, transparency, local saving, and batch PNG export.',
  ui,
  seo: [
    { type: 'title', text: 'Make a Character Token That Reads Across the Map', level: 2 },
    { type: 'paragraph', html: 'A token is a piece of table language. Its silhouette tells the group whether they are looking at a hero, a monster, a spell effect, or a named location before anyone zooms in. Start with the frame that matches the character, then keep the portrait and label readable at the scale your virtual tabletop uses.' },
    { type: 'title', text: 'Choose the Right Frame for the Character', level: 2 },
    { type: 'list', items: ['<strong>Ring:</strong> dependable for player characters and recurring allies.', '<strong>Hex or octagon:</strong> easy to distinguish in tactical scenes with many units.', '<strong>Star:</strong> useful for a champion, boss, or character who needs instant attention.', '<strong>Cloud:</strong> a softer signal for spirits, familiars, and fey creatures.'] },
    { type: 'tip', title: 'Design for the smallest size you will actually play at', html: 'Zoom the map out until a token is only a few dozen pixels wide. If the face, border, and label still separate from one another, the marker will remain useful during a busy encounter.' },
    { type: 'title', text: 'Keep Labels Short and Useful During Play', level: 2 },
    { type: 'paragraph', html: 'A character token is not a character sheet. Add the one or two facts the table repeatedly needs: a short name, a level, a role such as healer, or a condition such as stunned. Long sentences become visual noise and compete with the portrait.' },
    { type: 'title', text: 'Prepare a Whole Party Without Losing Their Identity', level: 2 },
    { type: 'paragraph', html: 'Batch export is useful after a session zero or when a campaign gains new allies. Choose one frame and paint language for the group, then let each portrait stay individual. Consistent framing makes the party feel like one cast while the faces remain instantly distinct.' },
    { type: 'tip', title: 'Your marker saves as you work', html: 'Local saving keeps the editable portrait crop and labels on this device. Exported PNGs are the play copies; the saved marker is the version to reopen when the character changes.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, appSchema, howToSchema] as unknown as Record<string, unknown>[],
};
