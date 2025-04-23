'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <li>Frog</li>
  <li>salad</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- write some code ---
const things = ['toad', 'frog', 'salamander'];

things.array.forEach((element, index) => {
    ulEl.children[index].innerHTML = element;
});
// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
    const actual = ulEl.children[i].innerHTML;
    const expected = expectedInnerHTMLs[i];
    console.assert(actual === expected, `Test child ${i}`);
}
