import type { Building, Point, SettlementMap, ServiceType } from './logic';
import type { SettlementMapUI } from './ui';

function serviceLabel(service: ServiceType, ui: SettlementMapUI): string {
  const labels: Record<string, string> = { tavern: ui.serviceTavern, smithy: ui.serviceSmithy, temple: ui.serviceTemple, market: ui.serviceMarket, stable: ui.serviceStable, hall: ui.serviceHall };
  return labels[service] ?? service;
}

function escapeSvgText(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character] ?? character);
}

function roofSvg(building: Building, style: string): string {
  const base = building.y + 0.39;
  const left = building.x - 0.15;
  const right = building.x + building.width + 0.15;
  const peak = building.x + building.width / 2;
  if (style === 'edo') return `<path class="rsm-house-roof" d="M${left} ${base}Q${building.x + 0.55} ${building.y - 0.05} ${peak} ${building.y + 0.08}Q${building.x + building.width - 0.55} ${building.y - 0.05} ${right} ${base}Z" />`;
  if (style === 'sahelian') return `<path class="rsm-house-roof" d="M${building.x + 0.05} ${base}H${building.x + building.width - 0.05}V${building.y + 0.68}H${building.x + 0.05}Z" />`;
  return `<polygon class="rsm-house-roof" points="${left},${base} ${peak},${building.y - (style === 'highland' ? 0.62 : 0.48)} ${right},${base}" />`;
}

function buildingDetails(building: Building, style: string): string {
  if (style === 'timber') return `<path class="rsm-house-frame" d="M${building.x + 0.38} ${building.y + 0.5}V${building.y + building.height - 0.25}M${building.x + building.width - 0.38} ${building.y + 0.5}V${building.y + building.height - 0.25}M${building.x + 0.25} ${building.y + 0.72}H${building.x + building.width - 0.25}" />`;
  if (style === 'edo') return `<path class="rsm-house-wood-slats" d="M${building.x + 0.42} ${building.y + 0.52}V${building.y + building.height - 0.25}M${building.x + 0.72} ${building.y + 0.52}V${building.y + building.height - 0.25}M${building.x + building.width - 0.72} ${building.y + 0.52}V${building.y + building.height - 0.25}M${building.x + building.width - 0.42} ${building.y + 0.52}V${building.y + building.height - 0.25}" />`;
  if (style === 'stone' || style === 'medieval') return `<path class="rsm-house-masonry" d="M${building.x + 0.25} ${building.y + 1.05}H${building.x + building.width - 0.25}M${building.x + 0.25} ${building.y + 1.42}H${building.x + building.width - 0.25}M${building.x + 0.65} ${building.y + 0.7}V${building.y + 1.05}M${building.x + building.width - 0.65} ${building.y + 1.42}V${building.y + 1.78}" />`;
  if (style === 'coastal') return `<path class="rsm-house-awning" d="M${building.x + 0.2} ${building.y + 0.42}H${building.x + building.width - 0.2}" />`;
  if (style === 'sahelian') return `<path class="rsm-house-sunband" d="M${building.x + 0.25} ${building.y + 0.82}H${building.x + building.width - 0.25}" />`;
  return `<path class="rsm-house-chimney" d="M${building.x + building.width - 0.8} ${building.y - 0.35}V${building.y + 0.2}H${building.x + building.width - 0.42}V${building.y - 0.25}" />`;
}

function getSignFontSize(size?: string): number {
  if (size === 'town') return 1.05;
  if (size === 'village') return 0.92;
  return 0.84;
}

function serviceSignSvg(building: Building, map: SettlementMap, service: string): string {
  if (!service) return '';
  const signFontSize = getSignFontSize(map.config.size);
  const signWidth = Math.min(8, Math.max(2.1, service.length * signFontSize * 0.58 + 0.72));
  const signX = building.x + building.width / 2 - signWidth / 2;
  const signHeight = signFontSize + 0.34;
  const signY = building.y - signHeight - 0.58;
  return `<g class="rsm-service-sign rsm-service-sign-${map.config.size}"><path class="rsm-service-stem" d="M${building.x + building.width / 2} ${signY + signHeight}V${building.y - 0.49}" /><rect class="rsm-service-plaque" x="${signX}" y="${signY}" width="${signWidth}" height="${signHeight}" rx="0.12" /><text class="rsm-building-glyph" x="${building.x + building.width / 2}" y="${signY + signHeight / 2}" font-size="${signFontSize}" dominant-baseline="middle">${service}</text></g>`;
}

function buildingSvg(building: Building, map: SettlementMap, ui: SettlementMapUI): string {
  const style = map.config.style ?? 'medieval';
  const roof = roofSvg(building, style);
  const windowY = building.y + 0.82;
  const leftWindowX = building.x + 0.48;
  const rightWindowX = building.x + building.width - 0.86;
  const doorX = building.x + building.width / 2 - 0.23;
  const doorY = building.y + building.height - 0.9;
  const windows = `<rect class="rsm-house-window" x="${leftWindowX}" y="${windowY}" width="0.38" height="0.42" rx="0.05" />${building.width > 2.5 ? `<rect class="rsm-house-window" x="${rightWindowX}" y="${windowY}" width="0.38" height="0.42" rx="0.05" />` : ''}`;
  const details = buildingDetails(building, style);
  const service = building.service ? escapeSvgText(serviceLabel(building.service, ui)) : '';
  const title = building.service ? `<title>${serviceLabel(building.service, ui)}</title>` : '<title>Home</title>';
  const serviceMark = serviceSignSvg(building, map, service);
  return `<g class="rsm-building rsm-house-style-${style}" data-building-id="${building.id}" data-cell-x="${building.x}" data-cell-y="${building.y}">${title}<rect class="rsm-house-body" x="${building.x + 0.12}" y="${building.y + 0.35}" width="${building.width - 0.24}" height="${building.height - 0.35}" rx="0.18" />${roof}${details}${windows}<rect class="rsm-house-door" x="${doorX}" y="${doorY}" width="0.46" height="0.8" rx="0.06" />${serviceMark}</g>`;
}

function waterComponents(points: Point[]): Point[][] {
  const remaining = new Set(points.map((point) => `${point.x},${point.y}`));
  const components: Point[][] = [];
  while (remaining.size) {
    const first = [...remaining][0]!;
    const queue = [first.split(',').map(Number) as [number, number]];
    const component: Point[] = [];
    remaining.delete(first);
    while (queue.length) {
      const [x, y] = queue.shift()!;
      component.push({ x, y });
      [{ x: x + 1, y }, { x: x - 1, y }, { x, y: y + 1 }, { x, y: y - 1 }].forEach((neighbor) => {
        const key = `${neighbor.x},${neighbor.y}`;
        if (remaining.delete(key)) queue.push([neighbor.x, neighbor.y]);
      });
    }
    components.push(component);
  }
  return components;
}

function waterKind(component: Point[]): string {
  if (component.length <= 2) return 'river';
  if (component.length === 3) return 'pond';
  return 'lake';
}

function waterSvg(map: SettlementMap): string {
  return waterComponents(map.water).map((component) => `<g class="rsm-water-component rsm-water-${waterKind(component)}" data-water-size="${component.length}">${component.map((point) => `<rect x="${point.x}" y="${point.y}" width="1" height="1" />`).join('')}</g>`).join('');
}

interface RoadCell { point: Point; neighbors: Point[] }

function roadCell(cells: Map<string, RoadCell>, point: Point): RoadCell {
  const key = `${point.x},${point.y}`;
  const existing = cells.get(key);
  if (existing) return existing;
  const created = { point, neighbors: [] };
  cells.set(key, created);
  return created;
}

function roadNetwork(map: SettlementMap): Map<string, RoadCell> {
  const cells = new Map<string, RoadCell>();
  map.paths.forEach((path) => {
    path.points.forEach((point) => roadCell(cells, point));
    path.points.slice(1).forEach((point, index) => {
      const previous = path.points[index]!;
      roadCell(cells, previous).neighbors.push(point);
      roadCell(cells, point).neighbors.push(previous);
    });
  });
  return cells;
}

function roadCellPath(cell: RoadCell): string {
  const center = `${cell.point.x + 0.5},${cell.point.y + 0.5}`;
  if (!cell.neighbors.length) return `M${center}h0`;
  return cell.neighbors.map((neighbor) => `M${center}L${neighbor.x + 0.5},${neighbor.y + 0.5}`).join('');
}

function pathSvg(map: SettlementMap): string {
  return [...roadNetwork(map).values()].map((cell) => `<path class="rsm-road-base" d="${roadCellPath(cell)}" /><path class="rsm-road-line" d="${roadCellPath(cell)}" />`).join('');
}

function getTreeStyle(env: string, style?: string): string {
  if (env === 'coast') return 'coastal';
  if (env === 'mountain') return 'highland';
  return style ?? 'medieval';
}

function treeSvg(point: Point, map: SettlementMap): string {
  const x = point.x + 0.5;
  const y = point.y + 0.5;
  const style = getTreeStyle(map.config.environment, map.config.style);
  const edoBlossom = (point.x * 7 + point.y * 11) % 3 === 0 ? 'green' : 'pink';
  const shapes: Record<string, string> = {
    coastal: '<path d="M0 .65V.05" /><path d="M0 .08C-.16-.2-.58-.27-.62-.52M0 .08C.16-.2.58-.27.62-.52M0 .08C-.05-.22.1-.5.22-.7" />',
    highland: '<path d="M0 .65V.1" /><path d="M-.48 .15L0-.72 .48 .15Z" /><path d="M-.34-.18L0-.88 .34-.18Z" />',
    edo: '<path d="M0 .65V.08" /><path d="M-.52 .08Q0-.48 .52 .08Q0 .27-.52 .08Z" /><path d="M-.34-.22Q0-.68 .34-.22Q0-.08-.34-.22Z" />',
    sahelian: '<path d="M0 .65V.02" /><path d="M-.65 .02Q0-.48 .65 .02Q0 .2-.65 .02Z" />',
    medieval: '<path d="M0 .65V.1" /><path d="M-.55 .14L0-.58 .55 .14Q0 .28-.55 .14Z" /><path d="M-.34-.15L0-.72 .34-.15Z" />',
    timber: '<path d="M0 .65V.1" /><path d="M-.5 .12Q0-.48 .5 .12Q0 .28-.5 .12Z" /><path d="M-.3-.2Q0-.7 .3-.2Q0-.05-.3-.2Z" />',
    stone: '<path d="M0 .65V.1" /><path d="M-.5 .12Q0-.5 .5 .12Q0 .28-.5 .12Z" /><path d="M-.3-.2Q0-.7 .3-.2Q0-.05-.3-.2Z" />',
  };
  const blossomClass = style === 'edo' ? ` rsm-tree-edo-${edoBlossom}` : '';
  return `<g class="rsm-tree rsm-tree-${style}${blossomClass}" transform="translate(${x} ${y})">${shapes[style] ?? shapes.medieval}</g>`;
}

function wildSvg(map: SettlementMap): string { return map.wild.map((point) => treeSvg(point, map)).join(''); }

function plazaSvg(map: SettlementMap): string {
  const plaza = map.plaza ?? { x: Math.floor(map.width / 2) - 3, y: Math.floor(map.height / 2) - 2, width: 6, height: 4 };
  return `<g class="rsm-plaza"><rect x="${plaza.x}" y="${plaza.y}" width="${plaza.width}" height="${plaza.height}" rx="0.3" /><path d="M${plaza.x + 1} ${plaza.y + 1}H${plaza.x + plaza.width - 1}M${plaza.x + 1} ${plaza.y + plaza.height - 1}H${plaza.x + plaza.width - 1}" /></g>`;
}

function gridSvg(map: SettlementMap): string {
  const vertical = Array.from({ length: map.width + 1 }, (_, index) => `<path d="M${index} 0V${map.height}" />`).join('');
  const horizontal = Array.from({ length: map.height + 1 }, (_, index) => `<path d="M0 ${index}H${map.width}" />`).join('');
  return `<g class="rsm-grid">${vertical}${horizontal}</g>`;
}

function environmentClass(environment: string): string { return `rsm-environment-${environment}`; }

export function buildMapSvg(map: SettlementMap, ui: SettlementMapUI): string {
  return `<svg class="rsm-map-svg ${environmentClass(map.config.environment)}" data-settlement-map viewBox="0 0 ${map.width} ${map.height}" role="img" aria-label="Settlement map"><rect class="rsm-paper" x="0" y="0" width="${map.width}" height="${map.height}" rx="0.5" />${gridSvg(map)}${waterSvg(map)}${plazaSvg(map)}${wildSvg(map)}${pathSvg(map)}${map.buildings.map((building) => buildingSvg(building, map, ui)).join('')}</svg>`;
}

export function updateMapHost(host: HTMLElement, map: SettlementMap, ui: SettlementMapUI): void { host.innerHTML = buildMapSvg(map, ui); }
export function svgToDataUrl(svg: string): string { return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`; }
export function downloadFile(content: string | Blob, filename: string, type?: string): void { const blob = typeof content === 'string' ? new Blob([content], { type: type ?? 'text/plain' }) : content; const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = filename; anchor.click(); URL.revokeObjectURL(url); }
