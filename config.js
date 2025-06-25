// variable with rootPath, and it's assigned to the database
const rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
// custom function with name checkApiKey
function checkApiKey(){
    // if statement was created to check behind the scenes if an api key was entered; if no key was entered, the system will automatically redirect to a web page that's going to ask you to enter the key
    // !exclamation mark means NOT
    if(!localStorage.getItem("apiKey"))
    {
        // if not found then redirect to enter-api-key.html
        window.open("enter-api-key.html","_self");

    }

    return localStorage.getItem("apiKey");
}
// variable apiKey is assigned to a custom function named checkApiKey
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = checkApiKey();
});