const axios = require('axios')
class newYorkTimesController{
   static getArticleNYT(req, res, next){
       console.log(req.params, ">>>")
       axios({
           method: 'GET',
           //url : `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req.params.query}&api-key=${process.env.NY_API_KEY}`,
           url:'https://api.nytimes.com/svc/search/v2/articlesearch.json',
           params: {"q":"election", "api-key":process.env.NY_API_KEY}
       })
       .then(response => {
           res.status(200).json(response.data)
       })
       .catch(err => {
           next(err)
       })
   }
}

module.exports = newYorkTimesController