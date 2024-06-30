const userService = require('../../services/v1/User')
const cheerio = require('cheerio');
const axios = require('axios');



async function retrieveUser(req, res) {
    try {
        console.log('happy scraping');

        const URL = 'https://bn.wikivoyage.org/wiki/%E0%A6%95%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0_%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE'
             axios.get(URL)
            .then(response => {
                const htmlData = response.data;
                const $ = cheerio.load(htmlData);
                const articles = [];

                const firstSection = $('.wpb-banner-image').attr('src');
               
                
                // Get the text content of its first child `p` tag
                // const firstTitleURL = $(firstSection).find('p').first().text();

                console.log(firstSection); // Or do something else with the text

                    // const titleURL = $(element).children('value').text();
                    // console.log($('.wpb-name').text());

                    // Assuming the correct way to get the title URL
                  
         

                res.status(200).json({ articles });
            })
            .catch(err => {
                console.error('Error fetching the URL:', err);
                res.status(500).send('Error fetching the URL');
            });

    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).send('Error retrieving user');
    }
}

module.exports = retrieveUser;



module.exports = {

    retrieveUser,

}
