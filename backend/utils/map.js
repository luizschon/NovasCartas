/* Junta dois maps, somando os valores das chaves repetidas e concatenando
 * as que não existe ao map1. */
function mergeMaps(map1, map2) {
  map2.forEach((value, key) => {
    if (map1.has(key)) {
      map1.set(key, map1.get(key) + value);
    } else {
      map1.set(key, value);
    }
  });
}

/* Subtrai o valor contido na chave do map2 nas chaves do map1, caso sejam
 * iguais. */
function removeMapEntries(map1, map2) {
  map2.forEach((value, key) => {
    if (map1.has(key)) {
      map1.set(key, map1.get(key) - value);
      if (map1.get(key) === 0)
        map1.delete(key);
    }
  });
}

/* Caso a notícia não esteja inclusa na lista de notícias (like ou dislike),
 * combina as frenquências dos termos já salvos com as da notícia sendo
 * adicionada e adiciona a notícia à lista de notícias do usuário. Caso
 * contrário, remove as frequências da notícia sendo removida das frequências
 * salvas e remove a notícia do lista de notícias. */
updateNewsIdArrayAndTerms = function(news_id, array, map1, map2) {
  if (!array.includes(news_id)) { 
    mergeMaps(map1, map2);
    array.push(news_id);
  } else {
    removeMapEntries(map1, map2);
    array = array.filter((saved_ids) => saved_ids != news_id);
  }
  return array;
}

module.exports = {
  updateNewsIdArrayAndTerms
};
