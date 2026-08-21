import type { Rng } from "./rng";

export function polyLatex(coeffsHighFirst: number[]): string {
  const degree = coeffsHighFirst.length - 1;
  const parts: string[] = [];
  coeffsHighFirst.forEach((c, i) => {
    if (c === 0) return;
    const power = degree - i;
    const abs = Math.abs(c);
    const sign = parts.length === 0 ? (c < 0 ? "-" : "") : c < 0 ? " - " : " + ";
    let mag: string;
    if (power === 0) mag = String(abs);
    else if (power === 1) mag = abs === 1 ? "x" : `${abs}x`;
    else mag = abs === 1 ? `x^{${power}}` : `${abs}x^{${power}}`;
    parts.push(`${sign}${mag}`);
  });
  return parts.join("") || "0";
}

export function signedNum(n: number): string {
  return n < 0 ? `-${Math.abs(n)}` : String(n);
}

export function fourOptions(correct: string, wrong: string[], rng: Rng): { options: string[]; correctAnswer: string } {
  const unique = [correct];
  for (const item of rng.shuffle(wrong)) {
    if (!unique.includes(item)) unique.push(item);
    if (unique.length === 4) break;
  }
  let extra = 1;
  while (unique.length < 4) {
    const filler = `$${extra}$`;
    if (!unique.includes(filler)) unique.push(filler);
    extra += 1;
  }
  return { options: rng.shuffle(unique), correctAnswer: correct };
}

export function nonzero(rng: Rng, min: number, max: number): number {
  let n = 0;
  while (n === 0) n = rng.int(min, max);
  return n;
}
