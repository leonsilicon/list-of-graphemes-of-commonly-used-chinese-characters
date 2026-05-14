# list-of-graphemes-of-commonly-used-chinese-characters

Typed JSON package for the **List of Graphemes of Commonly-used Chinese Characters** (`常用字字形表`) — a list of commonly-used Traditional Chinese characters published by the Hong Kong Education Bureau (香港教育局).

## Installation

```sh
npm install list-of-graphemes-of-commonly-used-chinese-characters
```

## Usage

```ts
import characters from "list-of-graphemes-of-commonly-used-chinese-characters";

console.log(characters.length); // number of characters in the list
console.log(characters[0]);     // 一
```

The default export is a flat `string[]` of characters in official list order.

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
