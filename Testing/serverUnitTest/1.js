import { mock } from "node:test";

const a = mock.fn(() => 42);

console.log(a());
console.log(a());
console.log(a.mock.calls.length);
