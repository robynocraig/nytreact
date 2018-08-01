import axios from "axios";

export default {
  // search the NYT API
  getAllArticles: function(query) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + query);
  },
  // Gets all saved articles from the mongodb
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves an article to the database
  saveBook: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
};
