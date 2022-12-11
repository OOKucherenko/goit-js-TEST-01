// Change code below this line
const getNamesSortedByFriendCount = users => [...users].flatMap(item => item.friends).filter((item, index, array) => array.indexOf(item)
    === index).sort((a, b) => a.localeCompare(b));
// Change code above this line