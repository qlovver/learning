function zadacha_1() {
    var a = 0;
    for (var i = 1; i < 1000; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            a += i;
        }
    }
    return a;
}
function zadacha_2() {
    var first = 1;
    var second = 1;
    var fibo = 0;
    var summ = 0;
    while (second < 4000000) {
        fibo = first + second;
        first = second;
        second = fibo;
        if (fibo % 2 === 0) {
            summ++;
        }
    }
    return fibo;
}
function prosto_or_not(x) {
    for (var i = 2; i < (Math.pow(x, 0.5)).toFixed(); i++) {
        if (x % i === 0) {
            return true;
        }
    }
    return false;
}
function zadacha_3() {
    var chislo = 600851475143;
    for (var i = (Math.pow(chislo, 0.5)).toFixed(); i > 2; --i) {
        if (chislo % i === 0 && prosto_or_not(i)) {
            return i;
        }
    }
}
function zadacha_4() {
    var strok = '';
    var rstrok = '';
    var maximum = 0;
    var chislo = 0;
    for (var i = 999; i >= 100; --i) {
        for (var j = 999; j >= 100; --j) {
            chislo = i * j;
            strok = String(chislo);
            for (var v = strok.length - 1; v >= 0; --v) {
                rstrok += strok[v];
            }
            if (rstrok === strok) {
                if (maximum < chislo) {
                    maximum = chislo;
                }
            }
            rstrok = '';
        }
    }
    return maximum;
}
function zadacha_5() {
    for (var minimal = 2520; minimal <= 100000000000; minimal++) {
        for (var delitel = 2; delitel <= 20; delitel++) {
            if (minimal % delitel !== 0) {
                break;
            }
            if (delitel === 20) {
                return minimal;
            }
        }
    }
}
console.log(zadacha_5());
