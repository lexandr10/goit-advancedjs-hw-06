/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: number | string;

union = 10;
union = 'Hello';


type EnableOrDisable = "enable" | "disable";
let literal: EnableOrDisable;
literal = "enable";
