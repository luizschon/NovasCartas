const { getNews } = require('./news.js')
// Transcrevenedo as funções que foram escritas em Python.

function getEuclidianLen (vector) {
    var squaredSum = 0;
    for ([key, value] of vector) {
        squaredSum += Math.pow(value, 2);
    }
    return Math.sqrt(squaredSum);
}

function calculateIdfSingleTerm (docCount, termFreq) {
    var result = 0;
    if (termFreq != 0 && docCount != 0) {
        result = Math.log(docCount/termFreq);
    }
    return result;
}

function applyIdfToTfVector (corpusFreqIdf, docVec) {
    docVec.forEach(
        (value, key) => {
            if (corpusFreqIdf.has(key)) {
                let tfidf = docVec.get(key) * corpusFreqIdf.get(key)[1];
                docVec.set(key, tfidf);
            }
        });
}

function calculateIdfAllTerms(numOfDocuments, corpusFreqIdf) {
    corpusFreqIdf.forEach(
        (value, key) => {
            let idf = calculateIdfSingleTerm(numOfDocuments, corpusFreqIdf.get(key)[0]);
            corpusFreqIdf.get(key)[1] = idf;
        });
}

function calculateCosSimilarity (vec0, vec1) {
    let dotProd = 0;
    vec0.forEach(
        (value, key) => {
            if (vec1.has(key)) {
                dotProd += vec0.get(key) * vec1.get(key);
            }
    });
    let vec0len = getEuclidianLen(vec0);
    let vec1len = getEuclidianLen(vec1);
    let result = 0;
    if (vec0len != 0 && vec1len != 0) {
        result = dotProd/ (vec0len * vec1len);
    }
    return result;
}

function createCorpusDictionaryAndVectorizeDocs (docList) {
    let numOfDocuments = docList.length;
    let corpusFreqIdf = new Map();
    let docVectors = new Array();
    docList.forEach(
        (doc) => {
            newVec = new Map();
            doc.forEach(
                (word) => {
                    if (newVec.has(word)) {
                        newVec.set(word, newVec.get(word) + 1)
                    } else { // New word
                        newVec.set(word, 1);
                    }
            });
            newVec.forEach(
                (value, key) => {
                    if (corpusFreqIdf.has(key)) {
                        corpusFreqIdf.get(key)[0] += 1;
                    } else {
                        corpusFreqIdf.set(key, [1,0]);
                    }
            });
            docVectors.push(newVec);
    });
    calculateIdfAllTerms(numOfDocuments, corpusFreqIdf);
    docVectors.forEach(
        (vector) => {
            applyIdfToTfVector(corpusFreqIdf, vector);
        }
    );
    returnObj = new Object();
    returnObj.corpusDictionary = corpusFreqIdf;
    returnObj.docVectors = docVectors;
    return returnObj;
}





let StopWords = new Set(
    [ "último", "é", "acerca", "agora", "algmas", "alguns", "ali", "ambos", "antes", "apontar", "aquela", "aquelas", "aquele", "aqueles", "aqui", "atrás", "bem", "bom", "cada", "caminho", "cima", "com", "como", "comprido", "conhecido", "corrente", "das", "debaixo", "dentro", "desde", "desligado", "deve", "devem", "deverá", "direita", "diz", "dizer", "dois", "dos", "e", "ela", "ele", "eles", "em", "enquanto", "então", "está", "estão", "estado", "estar	", "estará", "este", "estes", "esteve", "estive", "estivemos", "estiveram", "eu", "fará", "faz", "fazer", "fazia", "fez", "fim", "foi", "fora", "horas", "iniciar", "inicio", "ir", "irá", "ista", "iste", "isto", "ligado", "maioria", "maiorias", "mais", "mas", "mesmo", "meu", "muito", "muitos", "nós", "não", "nome", "nosso", "novo", "o", "onde", "os", "ou", "outro", "para", "parte", "pegar", "pelo", "pessoas", "pode", "poderá	", "podia", "por", "porque", "povo", "promeiro", "quê", "qual", "qualquer", "quando", "quem", "quieto", "são", "saber", "sem", "ser", "seu", "somente", "têm", "tal", "também", "tem", "tempo", "tenho", "tentar", "tentaram", "tente", "tentei", "teu", "teve", "tipo", "tive", "todos", "trabalhar", "trabalho", "tu", "um", "uma", "umas", "uns", "usa", "usar", "valor", "veja", "ver", "verdade", "verdadeiro", "você", "de",  "a",  "o",  "que",  "e",  "do",  "da",  "em",  "um",  "para",  "é",  "com",  "não",  "uma",  "os",  "no",  "se",  "na",  "por",  "mais",  "as",  "dos",  "como",  "mas",  "foi",  "ao",  "ele",  "das",  "tem",  "à",  "seu",  "sua",  "ou",  "ser",  "quando",  "muito",  "há",  "nos",  "já",  "está",  "eu",  "também",  "só",  "pelo",  "pela",  "até",  "isso",  "ela",  "entre",  "era",  "depois",  "sem",  "mesmo",  "aos",  "ter",  "seus",  "quem",  "nas",  "me",  "esse",  "eles",  "estão",  "você",  "tinha",  "foram",  "essa",  "num",  "nem",  "suas",  "meu",  "às",  "minha",  "têm",  "numa",  "pelos",  "elas",  "havia",  "seja",  "qual",  "será",  "nós",  "tenho",  "lhe",  "deles",  "essas",  "esses",  "pelas",  "este",  "fosse",  "dele",  "tu",  "te",  "vocês",  "vos",  "lhes",  "meus",  "minhas",  "teu",  "tua",  "teus",  "tuas",  "nosso",  "nossa",  "nossos",  "nossas",  "dela",  "delas",  "esta",  "estes",  "estas",  "aquele",  "aquela",  "aqueles",  "aquelas",  "isto",  "aquilo",  "estou",  "está",  "estamos",  "estão",  "estive",  "esteve",  "estivemos",  "estiveram",  "estava",  "estávamos",  "estavam",  "estivera",  "estivéramos",  "esteja",  "estejamos",  "estejam",  "estivesse",  "estivéssemos",  "estivessem",  "estiver",  "estivermos",  "estiverem",  "hei",  "há",  "havemos",  "hão",  "houve",  "houvemos",  "houveram",  "houvera",  "houvéramos",  "haja",  "hajamos",  "hajam",  "houvesse",  "houvéssemos",  "houvessem",  "houver",  "houvermos",  "houverem",  "houverei",  "houverá",  "houveremos",  "houverão",  "houveria",  "houveríamos",  "houveriam",  "sou",  "somos",  "são",  "era",  "éramos",  "eram",  "fui",  "foi",  "fomos",  "foram",  "fora",  "fôramos",  "seja",  "sejamos",  "sejam",  "fosse",  "fôssemos",  "fossem",  "for",  "formos",  "forem",  "serei",  "será",  "seremos",  "serão",  "seria",  "seríamos",  "seriam",  "tenho",  "tem",  "temos",  "tém",  "tinha",  "tínhamos",  "tinham",  "tive",  "teve",  "tivemos",  "tiveram",  "tivera",  "tivéramos",  "tenha",  "tenhamos",  "tenham",  "tivesse",  "tivéssemos",  "tivessem",  "tiver",  "tivermos",  "tiverem",  "terei",  "terá",  "teremos",  "terão",  "teria",  "teríamos",  "teriam", "0","1","2","3","4","5","6","7","8","9"]
);

function trimWords(json) {
    let words = json.title + ' ' + json.description;
    let wordsList = words
                  .toLowerCase()
                  .replace(new RegExp("[\n]", "g"), " ")      // Troca quebra de linha por um espaço
                  .replace(new RegExp("[^a-zzáàâãéèêíïóôõöúçñ0-9 ]", "g"), "") // Remove caracteres não alfanuméricos
                  .split(new RegExp(" +", "g"));              // Separa palavras separadas por um ou mais espaços
    StopWords.forEach((stopWord) => {
        wordsList = wordsList.filter(x => x != stopWord);
    });
    return wordsList;
}

function processNewsArray (newsArray) {
    let docList = new Array();
    newsArray.forEach(
        (element) => {
            let doc = trimWords(element);
            docList.push(doc);
    });
    return docList;
}

function getCosSimForQuery (corpusObject, queryVector) {
    // Element format: [cosSim, original position index].
    // The order will be changed later.
    let cosSimArray = new Array();
    // Apply idf to query vector.
    applyIdfToTfVector(corpusObject.corpusDictionary, queryVector);
    let i = 0;
    corpusObject.docVectors.forEach(
        (docVec) => {
            let cosSim = calculateCosSimilarity(queryVector, docVec);
            cosSimArray.push([cosSim, i]);
            i += 1;
        });
    return cosSimArray;
}

function cosSimArrayCompare (obj0, obj1) {
    return obj1[0] - obj0[0];
}

async function getRankingForQuery (queryVector) {
    let news = await getNews('https://feeds.bbci.co.uk/portuguese/rss.xml');

    let docList = processNewsArray(news);
    corpusObject = createCorpusDictionaryAndVectorizeDocs(docList);
    cosSimArray = getCosSimForQuery(corpusObject, queryVector);

    // Sorting by highest cosSim.
    cosSimArray.sort(cosSimArrayCompare);
    console.log(cosSimArray);

    // Sorting news list.
    let sortedNews = new Array();
    cosSimArray.forEach(
        (element) => {
            sortedNews.push(news[element[1]]);
    });
    // console.log(sortedNews);
    return sortedNews;
}

// Testes.

let queryVector = new Map([
    ["tênis", 2],
    ["cinema", 1],
    ["bolsonaro", 1],
    ["ucrânia", 1]
]);

let output = getRankingForQuery(queryVector);
output.then(
    (value) => {
        console.log(value);
    }
);






// Apagar depois
// output.then((value)=>{console.log(value);});

// map = new Map([
//     ["one", 3],
//     ["two", 5]
// ]);

// map.set('three', 1);


// let documents = [
//     ["the", "sky", "is", "blue"],
//     ["the", "sun", "is", "bright"],
//     ["the", "sun", "in", "the", "sky", "is", "bright"],
//     ["we", "can", "see", "the", "shining", "sun", "the", "bright", "sun"]
//     ];

// result = createCorpusDictionaryAndVectorizeDocs(output);
// console.log(result);