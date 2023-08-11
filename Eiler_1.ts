function zadacha_1(): number {
    let a=0;
    for (let i = 1; i < 1000; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            a+=i;
        }
    }
    return a
}

function zadacha_2(): number {
    let first: number = 1
    let second: number = 1
    let fibo: number = 0
    let summ : number = 0
    while (second < 4000000) {
        fibo = first + second
        first = second
        second = fibo
        if (fibo % 2 === 0) {
            summ++
        }
    }
    return fibo
}


function prosto_or_not(x : number): boolean{
    for (let i: number = 2; i < (x**0.5).toFixed(); i++) {
        if (x % i === 0) {
            return true
        }
    }
    return false
}

function zadacha_3(): number{
    let chislo: number = 600851475143
    for (let i : number = (chislo**0.5).toFixed(); i > 2; --i){
        if (chislo % i === 0 && prosto_or_not(i)){
            return i
        }
    }
}
function zadacha_4(): number{
    let strok: string = ''
    let rstrok: string = ''
    let maximum: number = 0
    let chislo : number = 0
    for (let i: number = 999; i>=100; --i){
        for (let j: number = 999; j>=100; --j) {
            chislo = i*j
            strok = String(chislo)
            for (let v: number = strok.length-1; v >= 0; --v) {
                rstrok += strok[v]
            }
            if (rstrok === strok){
                if (maximum < chislo) {
                    maximum = chislo
                }
            }
            rstrok = ''
        }
    }
    return maximum
}

function zadacha_5():number{
    for (let minimal: number = 2520; minimal<=100000000000; minimal++) {
        for (let delitel: number = 2; delitel <= 20; delitel++) {
            if (minimal % delitel !== 0) {
                break
            }
            if (delitel === 20) {
                return minimal
            }
        }
    }
}
console.log(zadacha_5())