// @ts-ignore
import { mapper } from './html-helper.js';
// @ts-ignore
import { test } from './constants.js';
console.log(test);
const list = ['nameA', 'nameB', 'nameC', 'nameD', 'nameE']
    .map(mapper);
// .map((x, i) => {
//     return { id: i, name: x, value: test};
// });
export { list as nameList, list as default };
