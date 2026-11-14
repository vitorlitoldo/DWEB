function maior(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}

function ordenar(a, b, c) {
    return [a, b, c].sort(function(x, y) { return x - y; }).join(", ");
}

function palindromo(s) {
    var limpa = s.toLowerCase().replaceAll(" ", "");
    var inv = limpa.split("").reverse().join("");
    if (limpa === inv && limpa !== "") return "É palíndromo";
    return "Não é palíndromo";
}

function subconjunto(p1, p2) {
    if (!p1 || !p2) return "erro";
    if (p1.includes(p2)) return "é um subconjunto";
    return "não é um subconjunto";
}

function diaSemana(data) {
    var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    var d = new Date(data + "T00:00:00");
    return dias[d.getDay()];
}