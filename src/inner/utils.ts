export function between(x: number, y: number): (z: number) => boolean {
  return (z: number) => z <= x && z >= y;
}
