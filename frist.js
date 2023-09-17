const family = [
  { name: "Jack", age: 26 },
  { name: "Jill", age: 22 },
  { name: "James", age: 5 },
  { name: "Jenny", age: 2 }
];

function sortFamilyByName(family, order) {
  return new Promise((resolve, reject) => {
    if (family.length === 0) {
      reject("NO RECORDS");
    } else {
      if (order === "ASC") {
        family.sort((a, b) => a.name.localeCompare(b.name));
      } else if (order === "DESC") {
        family.sort((a, b) => b.name.localeCompare(a.name));
      } else {
        reject("Invalid sorting order");
      }
      resolve(family);
    }
  });
}

// Example usage:
sortFamilyByName(family, 'ASC')
  .then(sortedFamily => {
    console.log(sortedFamily);
  })
  .catch(error => {
    console.error(error);
  });
