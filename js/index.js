function page_load() {

    const msgText = "# page5: page load"

    console.log(msgText.toUpperCase())
}

function submitBtn()
{
    
    let msgText = "# page5: giphyApiSearch1"

    console.log(msgText.toUpperCase())

    const divdisplayinfo = document.getElementById("divdisplayinfo");
    const userInput = document.getElementById("user-input");

    if (divdisplayinfo == null | divdisplayinfo == undefined){       
        msgText = "## Page3 - divdisplayinfo not found"
        console.log(msgText) 
        return false;
    }

    if (userInput.value == "") {
      divdisplayinfo.innerText = "Please enter a image to search";
      return false;
    }

    divdisplayinfo.innerText = msgText;

    //giphy url and api key  
    
    const _search_text = userInput.value;
    const _giphy_ApiKey = "jOxDlf3Mt8SbKWzrI7MJEUrWmhYljT5C"
    const _giphy_result_data_file = "./data/giphy2.json";
    const _giphyApi_Url = `https://api.giphy.com/v1/gifs/search?api_key=${_giphy_ApiKey}&q=${_search_text}&limit=25&rating=g`; 

    //fetch - then - promise - non-blocking - javascript call then when data is available 
    //another way of implementing promise = async/await 

    //inline or 1 line if statement 
    let _request_url = (_giphy_ApiKey.trim().length == 0)? _giphy_result_data_file : _giphyApi_Url;

    console.log("---- _request_url---- ");
    console.log(_request_url)
    console.log("")

    fetch(_request_url)
    .then(response => {
      if (!response.ok) {
        //throw/raise - generate or a error and descrption 
        throw new Error('Network response was not ok');
      }
      //-- convert data from text to json 
      return response.json();
    })
    .then(data => {

        console.log("#### giphy fetch.promise then - post data ###")
        console.log(data);

        console.log("")
        console.log("-------- giphy json data as string ----")
        //console.log(JSON.stringify(data))
        console.log("")

        //retrieve giphy data 
        //const giphapi_image = `<img width='200' height='150' src='${data.data[0].images.original.url}'>`

        //display multiple imgaes
        //build dynamic html in string or using DOM to dynamically append html elements

        let _html = "<div>"
        for(let i = 0; i < data.data.length; i++) {
          //unit test: display 3 images
          if(i>3) {
            //exit loop
            break;
          }

          _image = data.data[i].images.original.url
          _html += `<img width="100" height="100" src='${_image}'>`
          //display 3 images per row
          _html += ""
        }
        
        _html += "</div>"

        divdisplayinfo.innerHTML = _html;
        
    })
    .catch(error => {
      console.error('## There was a problem with the fetch operation:', error);
      divdisplayinfo.innerText = error;
    });

    console.log("..continue fetching gphy data...demo of non-blocking code")
    divdisplayinfo.innerText = "..continue fetching giphy data...demo of non-blocking code";

    
    //verify root or starting element can be a [] or {}

    //verify invalid, valid document 

    //retieve nested json document fields

    //loop through json documents , nested loops 
    
    //verify element level or starting element can be a [] or {}

    //retiieve nested json document fields or array fields reference
    
    //verify element level or starting element can be a [] or {}

    //convert json string to json object 

}

function txtClear() {
  console.log("clear")
  const divdisplayinfo = document.getElementById("divdisplayinfo");
  const userInput = document.getElementById("user-input");
  const clearedDisplay = "";
  divdisplayinfo.innerText = clearedDisplay;
  userInput.value = clearedDisplay;
}