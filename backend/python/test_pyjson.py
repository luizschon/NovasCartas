import sys
import json

# Usa a biblioteca json para convert string de entrada em um objeto Python.
# Depois, converte o objeto em string a ser passada ao processo Node.js pai.
def testJsonExchange():
    input = sys.argv[1]
    inputPy = json.loads(input)
    outputPy = json.dumps(inputPy)
    print(outputPy)

testJsonExchange()