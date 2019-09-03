import createListItem from './createListItem';

function renderNoteList(ref, arr) {
    ref.innerHTML = '';
    // try {
    //     localStorage.setItem("key-note", JSON.stringify(arr));
    //     const locale = JSON.parse(localStorage.getItem("key-note"));
    //     if (locale !== '') {
    //         localStorage.setItem("key-note", JSON.stringify(locale));
    //         console.log(locale);
    //     }
    //     return newArr;
    // }
    // catch (err) {
    //     console.error('Get state error: ', err);
    // }
    const newArr = arr.map(el => ref.append(createListItem(el)));

}

export default renderNoteList;