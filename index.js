// returns an introduction given a name
function introduction (name) {
    return `Hi, my name is ${name}.`;
}

//  takes in two arguments, a name and a language, 
// and returns a phrase using those arguments
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

//  takes in two arguments, a name and a language, 
// and returns a phrase using those arguments, with default language being JavaScript
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}