export interface TurnRecord {
  playerId: string;
  round: number;
  duration: number;
}

export class StatsManager {
  private startTime: number = 0;
  private endTime: number = 0;
  private turns: TurnRecord[] = [];
  private currentTurnStart: number = 0;

  public start() {
    this.startTime = Date.now();
    this.turns = [];
    this.currentTurnStart = 0;
  }

  public end() {
    this.endTime = Date.now();
  }

  public startTurn() {
    this.currentTurnStart = Date.now();
  }

  public endTurn(playerId: string, round: number) {
    if (this.currentTurnStart === 0) return;
    const duration = (Date.now() - this.currentTurnStart) / 1000;
    this.turns.push({ playerId, round, duration: +duration.toFixed(2) });
    this.currentTurnStart = 0;
  }

  public pauseTurn() {
    if (this.currentTurnStart === 0) return;
    const elapsed = (Date.now() - this.currentTurnStart) / 1000;
    this.currentTurnStart = Date.now();
    return elapsed;
  }

  public resumeTurn() {
    this.currentTurnStart = Date.now();
  }

  public getTotalElapsedTime(): number {
    const end = this.endTime || Date.now();
    return (end - this.startTime) / 1000;
  }

  public getPlayerStats(playerId: string) {
    const playerTurns = this.turns.filter(t => t.playerId === playerId);
    if (playerTurns.length === 0) {
      return { total: 0, average: 0, max: 0, count: 0 };
    }
    const total = playerTurns.reduce((acc, t) => acc + t.duration, 0);
    const max = Math.max(...playerTurns.map(t => t.duration));
    const average = total / playerTurns.length;
    return {
      total: +total.toFixed(2),
      average: +average.toFixed(2),
      max: +max.toFixed(2),
      count: playerTurns.length
    };
  }

  public getSlowestPlayerId(playerIds: string[]): string | null {
    let slowestId: string | null = null;
    let maxAvg = -1;
    for (const id of playerIds) {
      const stats = this.getPlayerStats(id);
      if (stats.count > 0 && stats.average > maxAvg) {
        maxAvg = stats.average;
        slowestId = id;
      }
    }
    return slowestId;
  }

  public getRanking(playerIds: string[]) {
    return playerIds
      .map(id => ({
        id,
        ...this.getPlayerStats(id)
      }))
      .sort((a, b) => b.average - a.average);
  }
}
