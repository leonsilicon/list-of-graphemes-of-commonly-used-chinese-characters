import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");

// Parse 常用字字形表.txt — lines are: <character><tab or spaces><zero-padded index>
// The first line is a header comment; skip it.
const raw = readFileSync(join(ROOT, "data/常用字字形表.txt"), "utf-8");
const lines = raw.split("\n").slice(1);

const byIndex = new Map<number, string[]>();
for (const line of lines) {
	const trimmed = line.trim();
	if (!trimmed) continue;
	const parts = trimmed.split(/\s+/);
	const char = parts[0];
	const index = parseInt(parts[1]!, 10);
	if (!char || isNaN(index)) continue;
	const group = byIndex.get(index);
	if (group) {
		group.push(char);
	} else {
		byIndex.set(index, [char]);
	}
}

// Sort by index and emit string for single entries, string[] for variants
const sortedIndices = [...byIndex.keys()].sort((a, b) => a - b);
const characters: Array<string | string[]> = sortedIndices.map((idx) => {
	const group = byIndex.get(idx)!;
	return group.length === 1 ? group[0]! : group;
});

const outputPath = join(ROOT, "list-of-graphemes-of-commonly-used-chinese-characters.json");
writeFileSync(outputPath, JSON.stringify(characters, null, "\t"), "utf-8");

const variantCount = characters.filter(Array.isArray).length;
console.log(`Wrote ${characters.length} entries (${variantCount} with variants) to list-of-graphemes-of-commonly-used-chinese-characters.json`);
