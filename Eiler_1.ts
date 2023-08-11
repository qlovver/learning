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

function zadacha_6() : number{
    let summ_kv: number = 0
    let kv_summ: number = 0
    for (let i: number = 1; i<=100; i++) {
        summ_kv += i**2
        kv_summ += i
    }
    kv_summ = kv_summ ** 2
    return kv_summ - summ_kv
}

function zadacha_7(): number{
    let ind: number = 0
    for (let i: number = 1; i<=10000000; i++) {
        if (prosto_or_not(i)) {
            ind++
        }
        if (ind === 10001){
            return i
        }
    }
}

function zadacha_8(): number{
    const chislo:string = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450'
    let proizv:number = 1
    let maximum:number = 0
    for (let i : number = 0; i<= chislo.length - 12; i++){
        for (let j: number = 0; i<= 12; i++) {
            proizv *= +chislo[i+j]
        }
        if (maximum < proizv){
            maximum = proizv
        }
        proizv = 0
    }
    return maximum
}

function zadacha_9(): number{
    for (let a : number = 2; a<=1000; a++){
        for (let b : number = 2; b<=1000; b++){
            for (let c : number = 2; c<=1000; c++){
                if ((a<b) && (b<c) && (a**2 + b**2 === c**2) && (a+b+c === 1000)){
                    return a*b*c
                }
            }
        }
    }
}

function zadacha_10(): number{
    let summ: number = 0
    for (let i: number = 1; i<=2000000; i++) {
        if (prosto_or_not(i)) {
            summ += i
        }
    }
    console.log(1)
    return summ
}
console.log(zadacha_10())