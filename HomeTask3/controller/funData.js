export async function dataLoading(){
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=25517c086fef47eb8e36ec453354200d";
    let categorySet = new Set();
    
    // Get Response
    let response = await fetch(url);

    // Convert TO JSON Object
    let responseJSON = await response.json();

    let apiData = []; 

    // Iterate through the newsArticles
    responseJSON.articles.forEach(element => {
        // Create new Object
        let obj = {
            category : element.source.name,
            images : element.urlToImage,
            title : element.title ,
            date : element.publishedAt,
            content : element.content
        };
        obj.category=obj.category.replace(".com","");
        obj.category=obj.category.replace(".in","");
        obj.category=obj.category.replace("Www.","");
        let categoryString = obj.category;
        categorySet.add(categoryString);
        apiData.push(obj)
    });
    // Return APIDATA
    console.log(apiData);
    return [apiData, categorySet];
}

