let n1 = parseInt(document.getElementById('c1f1').innerText)
let n2 = parseInt(document.getElementById('c1f2').innerText)
let n3 = parseInt(document.getElementById('c1f3').innerText)
let n4 = parseInt(document.getElementById('c1f4').innerText)
let n5 = parseInt(document.getElementById('c1f5').innerText)
let n6 = parseInt(document.getElementById('c1f6').innerText)
let n7 = parseInt(document.getElementById('c1f7').innerText)
let n8 = parseInt(document.getElementById('c1f8').innerText)
let n9 = parseInt(document.getElementById('c1f9').innerText)
let n10 = parseInt(document.getElementById('c1f10').innerText)
let n11 = parseInt(document.getElementById('c1f11').innerText)
let n12 = parseInt(document.getElementById('c1f12').innerText)
let n13 = parseInt(document.getElementById('c1f13').innerText)
let n14 = parseInt(document.getElementById('c1f14').innerText)
let n15 = parseInt(document.getElementById('c1f15').innerText)
let n16 = parseInt(document.getElementById('c1f16').innerText)
let n17 = parseInt(document.getElementById('c1f17').innerText)
let n18 = parseInt(document.getElementById('c1f18').innerText)
let n19 = parseInt(document.getElementById('c1f19').innerText)
let n20 = parseInt(document.getElementById('c1f20').innerText)
let n21 = parseInt(document.getElementById('c1f21').innerText)
let n22 = parseInt(document.getElementById('c1f22').innerText)
let n23 = parseInt(document.getElementById('c1f23').innerText)
let n24 = parseInt(document.getElementById('c1f24').innerText)
let n25 = parseInt(document.getElementById('c1f25').innerText)
let n26 = parseInt(document.getElementById('c1f26').innerText)
let n27 = parseInt(document.getElementById('c1f27').innerText)
let n28 = parseInt(document.getElementById('c1f28').innerText)

let arrayhora = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26,n27,n28]

console.log(n1)

let suma = [n1]

for (let i = 1; i < arrayhora.length; i++) {
suma[i]= arrayhora[i]+suma[i-1]
}

let m1 = document.getElementById('c2f1').innerHTML = suma[0]
let m2 = document.getElementById('c2f2').innerHTML = suma[1]
let m3 = document.getElementById('c2f3').innerHTML = suma[2]
let m4 = document.getElementById('c2f4').innerHTML = suma[3]
let m5 = document.getElementById('c2f5').innerHTML = suma[4]
let m6 = document.getElementById('c2f6').innerHTML = suma[5]
let m7 = document.getElementById('c2f7').innerHTML = suma[6]
let m8 = document.getElementById('c2f8').innerHTML = suma[7]
let m9 = document.getElementById('c2f9').innerHTML = suma[8]
let m10 = document.getElementById('c2f10').innerHTML = suma[9]
let m11 = document.getElementById('c2f11').innerHTML = suma[10]
let m12 = document.getElementById('c2f12').innerHTML = suma[11]
let m13 = document.getElementById('c2f13').innerHTML = suma[12]
let m14 = document.getElementById('c2f14').innerHTML = suma[13]
let m15 = document.getElementById('c2f15').innerHTML = suma[14]
let m16 = document.getElementById('c2f16').innerHTML = suma[15]
let m17 = document.getElementById('c2f17').innerHTML = suma[16]
let m18 = document.getElementById('c2f18').innerHTML = suma[17]
let m19 = document.getElementById('c2f19').innerHTML = suma[18]
let m20 = document.getElementById('c2f20').innerHTML = suma[19]
let m21 = document.getElementById('c2f21').innerHTML = suma[20]
let m22 = document.getElementById('c2f22').innerHTML = suma[21]
let m23 = document.getElementById('c2f23').innerHTML = suma[22]
let m24 = document.getElementById('c2f24').innerHTML = suma[23]
let m25 = document.getElementById('c2f25').innerHTML = suma[24]
let m26 = document.getElementById('c2f26').innerHTML = suma[25]
let m27 = document.getElementById('c2f27').innerHTML = suma[26]
let m28 = document.getElementById('c2f28').innerHTML = suma[27]

let sumaSemana = []

for (let j = 0; j < arrayhora.length; j++) {
sumaSemana[j] = suma[j]/10
}

document.getElementById('c3f1').innerHTML = Math.ceil(sumaSemana[0])
document.getElementById('c3f2').innerHTML = Math.ceil(sumaSemana[1])
document.getElementById('c3f3').innerHTML = Math.ceil(sumaSemana[2])
document.getElementById('c3f4').innerHTML = Math.ceil(sumaSemana[3])
document.getElementById('c3f5').innerHTML = Math.ceil(sumaSemana[4])
document.getElementById('c3f6').innerHTML = Math.ceil(sumaSemana[5])
document.getElementById('c3f7').innerHTML = Math.ceil(sumaSemana[6])
document.getElementById('c3f8').innerHTML = Math.ceil(sumaSemana[7])
document.getElementById('c3f9').innerHTML = Math.ceil(sumaSemana[8])
document.getElementById('c3f10').innerHTML = Math.ceil(sumaSemana[9])
document.getElementById('c3f11').innerHTML = Math.ceil(sumaSemana[10])
document.getElementById('c3f12').innerHTML = Math.ceil(sumaSemana[11])
document.getElementById('c3f13').innerHTML = Math.ceil(sumaSemana[12])
document.getElementById('c3f14').innerHTML = Math.ceil(sumaSemana[13])
document.getElementById('c3f15').innerHTML = Math.ceil(sumaSemana[14])
document.getElementById('c3f16').innerHTML = Math.ceil(sumaSemana[15])
document.getElementById('c3f17').innerHTML = Math.ceil(sumaSemana[16])
document.getElementById('c3f18').innerHTML = Math.ceil(sumaSemana[17])
document.getElementById('c3f19').innerHTML = Math.ceil(sumaSemana[18])
document.getElementById('c3f20').innerHTML = Math.ceil(sumaSemana[19])
document.getElementById('c3f21').innerHTML = Math.ceil(sumaSemana[20])
document.getElementById('c3f22').innerHTML = Math.ceil(sumaSemana[21])
document.getElementById('c3f23').innerHTML = Math.ceil(sumaSemana[22])
document.getElementById('c3f24').innerHTML = Math.ceil(sumaSemana[23])
document.getElementById('c3f25').innerHTML = Math.ceil(sumaSemana[24])
document.getElementById('c3f26').innerHTML = Math.ceil(sumaSemana[25])
document.getElementById('c3f27').innerHTML = Math.ceil(sumaSemana[26])
document.getElementById('c3f28').innerHTML = Math.ceil(sumaSemana[27])

console.log(suma)
console.log(sumaSemana);