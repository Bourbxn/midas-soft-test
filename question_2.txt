function getClockAngle(hh_mm: string): number {
  let hh_mm_split: string[] = hh_mm.split(":");
  let hh: number = parseInt(hh_mm_split[0]);
  let mm: number = parseInt(hh_mm_split[1]);
  let angle: number = (hh + mm / 60) * 30 - mm * 6;
  if (angle > 180) {
    angle = Math.abs(360 - angle);
  }
  return angle;
}
