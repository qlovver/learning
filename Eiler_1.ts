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

function zadacha_11(): number {
    const tabl: number[][] = [[8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8], [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0], [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65], [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91], [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80], [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50], [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70], [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21], [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72], [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95], [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92], [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57], [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58], [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40], [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66], [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69], [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36], [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16], [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54], [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]]
    let max_diap: number[] = [0, 0, 0, 0]
    let right_left: number[] = [0, 0]
    let down_up: number[] = [0, 0]
    let diagonal: number[] = [0, 0]
    for (let strok: number = 0; strok <= 19; strok++){
        for (let stolb:number = 3; stolb <= 16; stolb++){
            right_left[0] = tabl[strok][stolb]*tabl[strok][stolb-1]*tabl[strok][stolb-2]*tabl[strok][stolb-3]
            right_left[1] = tabl[strok][stolb]*tabl[strok][stolb+1]*tabl[strok][stolb+2]*tabl[strok][stolb+3]
            if (max_diap[0] < Math.max(...right_left)){
                max_diap[0] = Math.max(...right_left)
            }
        }
    }
    for (let strok: number = 3; strok <= 16; strok++){
        for (let stolb:number = 0; stolb <= 19; stolb++){
            down_up[0] = tabl[strok][stolb]*tabl[strok-1][stolb]*tabl[strok-2][stolb]*tabl[strok-3][stolb]
            down_up[1] = tabl[strok][stolb]*tabl[strok+1][stolb]*tabl[strok+2][stolb]*tabl[strok+3][stolb]
            if (max_diap[1] < Math.max(...down_up)){
                max_diap[1] = Math.max(...down_up)
            }
        }
    }
    for (let strok: number = 0; strok <= 16; strok++){
        for (let stolb:number = 3; stolb <= 19; stolb++){
            diagonal[0] = tabl[strok][stolb]*tabl[strok+1][stolb-1]*tabl[strok+2][stolb-2]*tabl[strok+3][stolb-3]
            if (max_diap[2] < diagonal[0]){
                max_diap[2] = diagonal[0]
            }
        }
    }
    for (let strok: number = 0; strok <= 16; strok++){
        for (let stolb:number = 0; stolb <= 16; stolb++){
            diagonal[1] = tabl[strok][stolb]*tabl[strok+1][stolb+1]*tabl[strok+2][stolb+2]*tabl[strok+3][stolb+3]
            if (max_diap[3] < diagonal[1]) {
                max_diap[3] = diagonal[1]
            }
        }
    }
    return Math.max(...max_diap)
}
console.log(zadacha_11())