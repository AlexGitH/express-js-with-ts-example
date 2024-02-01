const list = ['nameA', 'nameB', 'nameC', 'nameD', 'nameE']
    .map((x, i) => {
    return { id: i, name: x };
});
export { list as nameList, list as default };
