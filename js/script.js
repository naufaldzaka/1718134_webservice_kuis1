function CariData() {

    $('#baseketball').html('');
    $.ajax({
        "url": "https://www.balldontlie.io/api/v1/teams",
        "type": "get",
        "dataType": "json",
        "data": {
            
            "print": "teams",
            "name": $('#text-cari').val()
        },
        success: function (teams) {
            console.log(teams);

        }
    })
}
