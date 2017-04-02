const compose = ( ...fs ) => y =>
  fs.reduceRight( ( x, f ) => f( x ), y )

const range = l => h =>
  Array( {length: h - l} ).map( ( _, i ) => i + l )
    
const all = pred => xs =>
  xs.every( pred )

const sum = y => x => x + y
const multiply = y => x => x * y
const eq = x => y => x === y
const prop = p => o => o[ p ]
const map = f => xs => xs.map( f )
const reduce = f => xs => xs.reduce( f )
const reverse = xs => xs.reverse()
const split = separator => s => s.split( separator )
const join = separator => xs => xs.join( separator )
const uncurry2 = f => ( x, y ) => f( x )( y )

module.exports = {
  compose,
  range,
  all,
  sum,
  multiply,
  eq,
  prop,
  map,
  reduce,
  reverse,
  split,
  join,
  uncurry2
}


