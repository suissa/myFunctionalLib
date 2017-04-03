
const ord = {
  ASC: ( a, b, byFields ) => {
    for (let field in byFields) 
      (a[byFields[field]] < b[byFields[field]]) ? -1 : 1
  },
  DESC: ( a, b, byFields ) => {
    for (let field in byFields)
      (a[byFields[field]] > b[byFields[field]]) ? -1 : 1
  }
}

module.exports = (a, b, byFields, byOrder) => 
    ord[ byOrder ]( a, b, byFields, byOrder )