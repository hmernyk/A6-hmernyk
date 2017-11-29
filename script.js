var photos = {
    "photoSet": [
        {
            "id": 0,
            "photo1":"images/people1.jpg",
            "photo2":"images/people2.jpg",
            "photo3":"images/people3.jpg",
            "photo4":"images/people4.jpg",
            "photo5":"images/people5.jpg",
            "photo6":"images/people6.jpg",
            "photo7":"images/people7.jpg"
        },
        {
            "id": 1,
            "photo1":"images/places1.jpg",
            "photo2":"images/places2.jpg",
            "photo3":"images/places3.jpg",
            "photo4":"images/places4.jpg",
            "photo5":"images/places5.jpg",
            "photo6":"images/places6.jpg",
            "photo7":"images/places7.jpg"
        },
        {
            "id": 2,
            "photo1":"images/things1.jpg",
            "photo2":"images/things2.jpg",
            "photo3":"images/things3.jpg",
            "photo4":"images/things4.jpg",
            "photo5":"images/things5.jpg",
            "photo6":"images/things6.jpg",
            "photo7":"images/things7.jpg"
        },
        {
            "id": 3,
            "photo1":"images/arch1.jpg",
            "photo2":"images/arch2.jpg",
            "photo3":"images/arch3.jpg",
            "photo4":"images/arch4.jpg",
            "photo5":"images/arch5.jpg",
            "photo6":"images/arch6.jpg",
            "photo7":"images/arch7.jpg"
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


