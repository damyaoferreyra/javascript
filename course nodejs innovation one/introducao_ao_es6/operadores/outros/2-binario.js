// in - atriibuto está /  objeto tem atributo
// something in somethingItems

var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicômoro')

0 in arvores // true
3 in arvores // true
6 in arvores // false
'cedro' in arvores // false - deve especificar o índice

'length' in arvores // true - length é uma propriedade de array

// Objetos primitivos
"PI" in Math // true
var minhaString = new String("coral")
"length" in minhaString // true

// Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano: 1998}
"marca" in meuCarro // true


// instanceof
// object instanceof tipoObject

var dia = new Date(2018, 12, 17)
console.log(dia instanceof Date);