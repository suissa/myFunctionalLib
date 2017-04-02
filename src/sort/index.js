const names = require(`./names`)

const ord = {
  ASC: ( a, b, byFields, byOrder ) => {
    for (let field in byFields) {
        if (a[byFields[field]] < b[byFields[field]]) return -1
        if (a[byFields[field]] > b[byFields[field]]) return 1
    }
  },
  DESC: ( a, b, byFields, byOrder ) => {
    for (let field in byFields) {
      if (b[byFields[field]] < a[byFields[field]]) return -1
      if (b[byFields[field]] > a[byFields[field]]) return 1
    }
  }
}

const order = require(`./order`)
const ordering = require(`./ordering`)( order )
const sorting = require(`./sorting`)

const sortA = ['name', 'age']
const sortB = ['surname', 'name']
const sortC = ['name', 'surname', 'age']
console.log(sorting(ordering, names, sortC, "ASC"))
console.log(sorting(ordering, names, sortC))
// console.log(sorting(names, sortB, "DESC"))
// console.log(sorting(names, sortC, "ASC"))