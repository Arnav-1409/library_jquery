$(function () {
    function loadAll() {
        var output = '';
        var URL = 'books.json';
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'books.json',
            success: function (data) {
                var user = data.book;
                for (var i = 0; i < user.length; i++) {
                    output += "<div class='row2'>";
                    output += "<div class='column2'>" + user[i].name + "</div>";
                    output += "<div class = 'column2'>" + user[i].description + "</div>";
                    output += "<div class='column2'>" + user[i].category + "</div>";
                    output += "</div>";
                }
                $('#content').html(output);
            },
            error: function (errorThrow) {
                console.log(errorThrow);
            }
        });
    }

    $('#List').on('click', function (event) {
        var user = event.target.id;
        console.log(user);
        if (user === 'All') {
            user = '';
            loadAll();

        }
        else {

            var output = ' ';
            var URL = 'books.json';
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: 'books.json',
                success: function (data) {
                    var up_user = data.book;
                    for (var i = 0; i < up_user.length; i++) {
                        if (up_user[i].category === user) {
                            output += "<div class='row2'>";
                            output += "<div class='column2'>" + up_user[i].name + "</div>";
                            output += "<div class = 'column2'>" + up_user[i].description + "</div>";
                            output += "<div class='column2'>" + up_user[i].category + "</div>";
                            output += "</div>";
                        }

                    }
                    $('#content').html(output);
                },
                error: function (errorThrow) {
                    console.log(errorThrow);
                }
            });

        }
    });

});