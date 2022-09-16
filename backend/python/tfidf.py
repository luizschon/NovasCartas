# Tarefas.

# . Parsear um texto, criando uma lista de todos os termos presentes.
#   - Converter as palavras para caixa baixa, para evitar que termos iguais com caixas diferentes sejam vistos como palavras distintas.
#   - Também remover acentuação.
# . Remover "stop words" da lista. (Talvez não seja necessário, visto que o idf diminui a relevância de palavras comuns)
# . Criar um vetor de frequência na forma de um dictionary:
#   - Cada palavra única no texto torna-se uma chave, e seu valor é o número de vezes que ocorre no texto.
# . Calcular idf do corpo de documentos.
# . Para cada vetor de documento, multiplicar cada valor de frequência de termo pelo idf correspondente.
# . Normalizar os valores de frequência. (Usar distância euclidiana, ou L2-norm)

import math

# L2-Norm
def getEuclidianLen (vector: dict):
    squaredSum = 0
    for value in vector.values():
        squaredSum += pow(value, 2)
    return math.sqrt(squaredSum)

def normalizeWordVec (vector: dict):
    length = getEuclidianLen(vector)
    for key in vector.keys():
        vector[key] = vector[key] / length

def calculateIdf (docCount: int, termFreq: int) -> float:
    return math.log(docCount/(termFreq))

def setIdfForCorpus (docCount: int, corpusFreqIdfVec: dict):
    for key in corpusFreqIdfVec.keys():
        termFreq = corpusFreqIdfVec[key][0]
        corpusFreqIdfVec[key][1] = calculateIdf(docCount, termFreq)

def setTfIdf (corpusFreqIdf: dict, docVec: dict):
    for key in docVec.keys():
        docVec[key] = docVec[key] * corpusFreqIdf[key][1]

def setTfidfForAllDocs (corpusFreqIdf: dict, docVecList: list):
    for vec in docVecList:
        setTfIdf(corpusFreqIdf, vec)

def calculateCosSimilarity (vec0: dict, vec1: dict):
    dotProd = 0
    for key in vec0.keys():
        if (key in vec1):
            dotProd += vec0[key] * vec1[key]

    # Make sure there aren't 0!
    vec0len = getEuclidianLen(vec0)
    vec1len = getEuclidianLen(vec1)
    return dotProd / (vec0len * vec1len)

def createcorpusFrequencyIdfVector(docList: list) -> dict:
    numOfDocuments = len(docList)
    corpusFreqIdf = dict()
    for doc in docList:
        wordInDoc = dict()
        for word in doc:
            if (word not in wordInDoc):
                wordInDoc[word] = 1
        for word in wordInDoc:
            if word not in corpusFreqIdf:
                corpusFreqIdf[word] = [1,0]
            else:
                corpusFreqIdf[word][0] += 1
    setIdfForCorpus(numOfDocuments, corpusFreqIdf)
    return corpusFreqIdf

def createDocVectors(docList: list) -> list:
    docVectors = list()
    for doc in docList:
        newVec = dict()
        for word in doc:
            if (word not in newVec):
                newVec[word] = 1
            else:
                newVec[word] += 1
        docVectors.append(newVec)
    return docVectors

def test():

    ## Testes com os dados tirados do artigo base.
    ## Artigo: https://blog.christianperone.com/2013/09/machine-learning-cosine-similarity-for-vector-space-models-part-iii/
    ## Problema: Os valores de similaridade de cosseno não batem com o do artigo.
    ## No artigo, foi usado a biblioteca sklearn para fazer o cálculo. Não sei o que é feito diferente nela.

    numOfDocuments = 4
    corpusFrequencyIdfVector = {
    "blue": [1, 0],
    "sun": [3, 0],
    "bright": [3, 0],
    "sky": [2, 0],
    }


    vec1 = {"blue": 1, "sky": 1}
    vec2 = {"sun": 1, "bright": 1}
    vec3 = {"sun": 1, "bright": 1, "sky": 1}
    vec4 = {"sun": 2, "bright": 1}
    vecAll = [vec1, vec2, vec3, vec4]
    setIdfForCorpus(numOfDocuments, corpusFrequencyIdfVector)
    setTfidfForAllDocs(corpusFrequencyIdfVector, vecAll)
    for vec in vecAll:
        normalizeWordVec(vec)
    print(vecAll)
    print(corpusFrequencyIdfVector)
    cosTest = calculateCosSimilarity(vec3, vec4)
    print(cosTest)

    # O programa tem como entrada uma lista de listas: cada lista contém uma sequência de palavras.
    # Ou seja, é necessário parsear o documento de forma a eliminar elementos que não sejam palavras (remover pontuação).
    # Além disso, as palavras devem estar em caixa baixa somente ou alta spmente.

    documents = [
    ["the", "sky", "is", "blue"],
    ["the", "sun", "is", "bright"],
    ["the", "sun", "in", "the", "sky", "is", "bright"],
    ["we", "can", "see", "the", "shining", "sun", "the", "bright", "sun"]
    ]

    cfiv = createcorpusFrequencyIdfVector(documents)
    veca = createDocVectors(documents)
    print(veca)
    setTfidfForAllDocs(cfiv, veca)
    cosTest = calculateCosSimilarity(veca[1], veca[3])
    print(cosTest)

    ## O Código abaixo foi retirado do artigo base.

    # from sklearn.feature_extraction.text import TfidfVectorizer
    # tfidf_vectorizer = TfidfVectorizer()
    # tfidf_matrix = tfidf_vectorizer.fit_transform(documents)
    # print (tfidf_matrix.shape)
    # from sklearn.metrics.pairwise import cosine_similarity
    # print(cosine_similarity(tfidf_matrix[0:1], tfidf_matrix))