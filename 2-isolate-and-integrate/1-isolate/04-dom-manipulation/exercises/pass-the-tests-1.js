'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
//  insert something before the <section>
//  remove the <h1>
//  append something to the end
const pEl = divEl.children[0];
divEl.replaceChild(document.createElement('nav'), pEl);

const sectionEl = divEl.querySelector('section');
divEl.insertBefore(document.createElement('h2'), sectionEl);

const h1El = divEl.querySelector('h1');

divEl.removeChild(h1El);

divEl.append(document.createElement('p'))
// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P', 'Test: 4th child');
