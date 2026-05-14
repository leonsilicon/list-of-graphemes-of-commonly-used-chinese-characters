# list-of-graphemes-of-commonly-used-chinese-characters

Typed JSON package for the **List of Graphemes of Commonly-used Chinese Characters** (`常用字字形表`) — a list of commonly-used Traditional Chinese characters published by the Hong Kong Education Bureau (香港教育局).

## Installation

```sh
npm install list-of-graphemes-of-commonly-used-chinese-characters
```

## Usage

```ts
import characters from "list-of-graphemes-of-commonly-used-chinese-characters";

console.log(characters.length); // 4762

// Most entries are a single character string
console.log(characters[0]);  // "一"

// Entries where multiple variant forms share the same index are string arrays
// e.g. characters[16] === ["丟", "丢"]
for (const entry of characters) {
  if (Array.isArray(entry)) {
    console.log("variants:", entry);
  }
}
```

The default export is `Array<string | string[]>` with 4,762 entries in official list order. Single-character entries are plain strings; entries with variant forms are arrays of strings.

## Data source

The character list and ordering follow the Hong Kong publication:

> 香港教育學院，《常用字字形表》（二零零零年修訂本），香港：香港教育學院，2000，ISBN 962-949-040-4。

The raw source data is in `data/常用字字形表.txt`.

## Regenerating the JSON

```sh
node --experimental-strip-types scripts/parse.ts
```

## License

MIT
