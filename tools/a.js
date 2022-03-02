import { mathFromMarkdown, mathToMarkdown } from "mdast-util-math";

const a = mathFromMarkdown(`

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$
`);

console.log(a);
