const { News } = require("../models/news.model.js");

// Retorna todas as notícias paginadas 
const getNews = (req, res) => {
  const page = req.query.page || req.body.page || 1;
  const pageSize = 20;

  const options = {
    page: page,
    limit: pageSize,
    sort: 'title' // TODO: criar um sort para ranking por cosine-diff
  };

  // Pagina resulados da query
  News.paginate(
    { createdOn: { $lte: req.createdOnBefore } },
    options,
    (err, result) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json({
          news: result.docs,
          page: result.page,
          total_pages: result.totalPages,
          next_page: result.nextPage,
          prev_page: result.prevPage
        });
      }
    }
  );
}

// Função que deleta todas as notícias do db
const deleteNews = (req, res) => {
  News.deleteMany({}, (err) => {
    if (err) res.status(500).send()
  })

  res.status(200).send()
}

module.exports = {
  getNews, deleteNews
}
