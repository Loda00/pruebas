// arrNotas = [ {c:01, nota:B, bimestre}, {c:01, nota:C, bimestre}, {c:01, nota:C, bimestre},

//     {c:01, nota:C, bimestre}, {c:01, nota:C, bimestre}, {c:01, nota:C, bimestre} ]

// ALUMNOSCONACOMPANAMIENTO = []
// contador = {}
// arrNotas.forEach(val => {
//     contador[val.nota]++
//     {}
// }

// //salida
// //contador => {B: 1, c: 5}

// reglasCumplidas = []
// foreach(reglas val){
// 	if( val['ACOMPANAMIENTO']===1){
// 	//validar si el alumnom esta en acompañamiento

// 		reglasCumplidas.push(val['id'])
// 	} else {

// 		notaRequerida = va['nota'];
// 		if( (notaRequerida in contador) && contador[notaRequerida]==val[numero]) {
// 			reglasCumplidas.push(val['id'])

// 		}
// 	}
// }        

var z = [
    {curso:'12',nota: '2'},
    {curso:'15',nota: '08', name:'asda'},
    {curso:'4',nota: '09', name:'asda'},
    {curso:'5',nota: '12', name:'asda'},
    {curso:'6',nota: '11', name:'asda'},
    {curso:'7',nota: '19'},
    {curso:'8',nota: '02'},
    {curso:'1',nota: '12', name:'asda'},
    {curso:'9',nota: '18', name:'asda'}
]

const con = {}

z.forEach(x =>{
	// if ("name" in x) {
		con[x.nota]++
	// }
})

console.log(con) 
