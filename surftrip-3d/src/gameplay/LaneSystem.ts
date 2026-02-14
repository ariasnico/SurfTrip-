// Lane positions on the X axis
export const LANE_WIDTH = 2.5;
export const LANES = [-LANE_WIDTH, 0, LANE_WIDTH] as const;
export const LANE_LEFT = 0;
export const LANE_CENTER = 1;
export const LANE_RIGHT = 2;

export function getLaneX(laneIndex: number): number {
  return LANES[laneIndex] ?? 0;
}
