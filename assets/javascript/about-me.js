$(document).ready(function() {
    $("#coder-button").on("click", function() {
        $(".about-text").empty();
        var coderText = "<br><h1><b>Shehan, the Coder</b></h1><h4>Front End</h4>";
        var frontEnd = "<ul><li>HTML5</li><li>CSS3 (& Bootstrap)</li><li>JavaScript (& jQuery)</li></ul>";
        var backEnd = "<h4>Back End</h4><ul><li>APIs & AJAX</li><li>NodeJS</li>"
                        + "<li>MySQL</li><li>NodeExpress</li><li>Handlebars</li>"
                        + "<li>MongoDB</li><li>ES6</li><li>React</li><li>Python</li><li>Django</li></ul>";
        var theCoder = coderText + frontEnd + backEnd;
        $(".about-text").append(theCoder);
    });
    
    $("#person-button").on("click", function() {
        $(".about-text").empty();
        var personText = "<br><h1><b>Shehan, the Person</b></h1>";
        var personality = "<h4>Personality Traits</h4><ul><li>fun-loving</li>"
                            + "<li>analytical</li><li>open-minded</li><li>intellectually curious</li>"
                            + "<li>detail-oriented</li><li>a growth mindset</li></ul>";
        var loves = "<h4>Loves</h4><ul><li>my wonderful wife, Jess</li><li>our eccentric spaniel (Jordan)</li>"
                        + "<li>our rascally kitten (Luna)</li><li>traveling the world</li>"
                        + "<li>experiencing new things</li><li>delicious food</li></ul>";
        var hobbies = "<h4>Hobbies</h4><ul><li>basketball (an unhealthy obsession)</li>"
                        + "<li>reading & learning</li><li>writing</li><li>hiking</li></ul>";    
        var thePerson = personText + personality + loves + hobbies;
        $(".about-text").append(thePerson);
    });                
});