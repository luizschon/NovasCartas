const express = require('express');
const router = express.Router();

// Calcula comprimento da subsequência mais longa comum entre duas sequências.
// Argumentos: 2 sequências (arrays), número de elementos na sequência 1, número de elementos na sequência 2.
const LCS = function (seq0, seq1, n, m) {
    // Inicializar C, matriz para salvar valores dos subproblemas.
    // Para representar a matriz, usa-se uma array de arrays.
    var C = new Array(n+1);
    for (let i = 0; i <= n; i++) {
        C[i] = new Array(m+1);
    }
    // Primeira fileira é toda zero...
    for (let i = 0; i <= m; i++) {
        C[0][i] = 0;
    }
    // Assim como a primeira coluna.
    for (let i = 1; i <= n; i++) {
        C[i][0] = 0;
    }
    // Agora para o algoritmo em si.
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (seq0[i] == seq1[j]) {
                C[i][j] = C[i-1][j-1] + 1;
            } else {
                C[i][j] = Math.max(C[i][j-1], C[i-1][j]);
            }
        }
    }

    return C[n][m];
}

// Teste.
router.get("/", (_req, res) => {
    var s1 = Object.values(_req.body.a1);
    var s2 = Object.values(_req.body.a2);
    r = LCS(s1, s2, s1.length, s2.length);
    res.json(r);
})

module.exports = router