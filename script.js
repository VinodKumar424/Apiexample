// Pokemon data

$ (function() {
    var pokeapiUrl ="https://pokeapi.co/api/v2/generation/1";
    $.getJSON(pokeapiUrl).done(function(data) {
        console.log(data);
        $.each(data.pokemon_species, function(index,pokemon) {
          var name =pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
           var par = $("<p>").html("Pokemon species no." + (index+1) + " is " + name );
           par.appendTo("#pokemon");
        });
    }).fail(function(){
        console.log("Request to Pokeapi failed");
    }).always(function(){
        console.log("Pokemon is awesome.")
    })
});


// Ajax call using get the data

$(document).ready(()=>{
    $('#get-data').click(()=>{
        getAllData();
    })
    
});

let getAllData = () =>{
    console.log("making request")
    $.ajax({
        type:'GET',
        dataType:'json',
        url:'http://api.open-notify.org/astros.json',
        success:(data)=> {
            console.log(data)
            let allPeople = data.people
            for(person of allPeople){
                let tempRow = `<div class="row">
                <div class ="col">${person.name}</div>
                <div class ="col">${person.craft}</div>
                </div>`
                $("#showData").append(tempRow);

            }
        },
        // error: (data) => {
        //    alert("some error occured")
        // },
        // beforeSend:() =>{
        //     alert("Request is being made. please wait")
        // },
        // complete: () => {
        //     alert("data fetched successfully")
        // },
        timeout:3000
    });
}