import { XMLParser } from 'fast-xml-parser';
import fetch from 'node-fetch';

const xml = new XMLParser();

// Função que recebe URL de um RSS de um site de noticias e 
// interpreta XML como objeto JavaScript
export async function parseXMLfromURL(url) {
  const res = await fetch(url);

  // Captura charset usado no XML
  const charsetStr = res.headers.get('content-type');
  const regexp = new RegExp('charset=(.*)', 'g');
  const match = regexp.exec(charsetStr);

  // Decodifica texto da resposta usando charset da resposta
  // (UTF-8/ISO-8859-1) e interpreta XML como Object
  const dec = new TextDecoder(match[1]);
  const xmlStringData = dec.decode(await res.arrayBuffer());
  return xml.parse(xmlStringData).rss.channel;
}

// Função que filtra informações relevantes do array de
// notícia, como título, descrição, link e data de publicação
export function filterNewsInfo(newsObj) {
  return newsObj.item.map((news) => ({
    id: Math.random() * 100000,
    title: news.title,
    link: news.link,
    description: news.description,
    date: news.pubDate,
  }));
}

// Função chamada pela rota que retorna notícias de uma URL de um RSS
export async function getNews(url) {
  return filterNewsInfo(await parseXMLfromURL(url));
}
