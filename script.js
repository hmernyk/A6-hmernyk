var photos = {
    "photoSet": [
        {
            "id": 0,
            "photo1":"images/people1.JPG",
            "photo2":"images/people2.JPG",
            "photo3":"images/people3.JPG",
            "photo4":"images/people4.JPG",
            "photo5":"images/people5.JPG",
            "photo6":"images/people6.JPG",
            "photo7":"images/people7.JPG"
        },
        {
            "id": 1,
            "photo1":"images/places1.JPG",
            "photo2":"images/places2.JPG",
            "photo3":"images/places3.JPG",
            "photo4":"images/places4.JPG",
            "photo5":"images/places5.JPG",
            "photo6":"images/places6.JPG",
            "photo7":"images/places7.JPG"
        },
        {
            "id": 2,
            "photo1":"images/things1.JPG",
            "photo2":"images/things2.JPG",
            "photo3":"images/things3.JPG",
            "photo4":"images/things4.JPG",
            "photo5":"images/things5.JPG",
            "photo6":"images/things6.JPG",
            "photo7":"images/things7.JPG"
        },
        {
            "id": 3,
            "photo1":"images/arch1.JPG",
            "photo2":"images/arch2.JPG",
            "photo3":"images/arch3.JPG",
            "photo4":"images/arch4.JPG",
            "photo5":"images/arch5.JPG",
            "photo6":"images/arch6.JPG",
            "photo7":"images/arch7.JPG"
        }
    ]
}

$(document).ready(function(){
    $("#people-category").click(function(){
        updatePhotos(0);
    });
    $("#places-category").click(function(){
        updatePhotos(1);
    });
    $("#things-category").click(function(){
        updatePhotos(2);
    });
    $("#arch-category").click(function(){
        updatePhotos(3);
    });
});

/*upon clicking a category, run this function that:
    - gets script in html
    - compiles with Handlebars to make script into a template
    - fills template with photoset depending on category (id)
    - pushes filled template into container in html*/
function updatePhotos(id) {
    var source = $("#explore-imgs").html();
    var template = Handlebars.compile(source);
    var newHTML = template(photos.photoSet[id]);
    $("#imgs-container").html(newHTML);
}


