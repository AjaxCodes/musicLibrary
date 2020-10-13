'use strict'


function getAllMusic(){
    $.ajax({
        url: 'http://www.devcodecampmusiclibrary.com/api/music',
        dataType:"json",
        type: "get",
        success: function(data, textStatus, jQxhr){
            //do something with response data (data parameter)
            console.log(data);
            for(let i = 0; i < data.length; i++){
                $('#table').append('<tr>' 
                                + '<td>' + data[i].title + '</td>'
                                + '<td>' + data[i].album + '</td>'
                                + '<td>' + data[i].artist + '</td>'
                                + '<td>' + data[i].genre + '</td>'
                                + '<td>' + data[i].releaseDate + '</td>'
                            + '</tr>');

            }
 },

       error: function(jQxhr, textStatus, errorThrown){
                //if the request fails, the errorThrown parameter will contain details of the error 
                console.log(errorThrown);
        },
     });

}

$(document).ready(function(){
    getAllMusic();
});

getAllMusic();

