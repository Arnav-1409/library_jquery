$(function () {
    function loadAll() {
        console.log('hi');
        var outlook = '';
        var URL = 'books.json';
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'books.json',
            success: function (data) {
                var user = data.book;
                for (var i = 0; i < user.length; i++) {
                    outlook += "<div class='row2'>";
                    outlook += "<div class='column2'>" + user[i].name + "</div>";
                    outlook += "<div class = 'column2'>" + user[i].description + "</div>";
                    outlook += "<div class='column2'>" + user[i].category + "</div>";
                    outlook += "</div>";
                }
                $('#content').html(outlook);
                console.log(data);
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

            var outlook = ' ';
            var URL = 'books.json';
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: 'books.json',
                success: function (data) {
                    var up_user = data.book;
                    for (var i = 0; i < up_user.length; i++) {
                        if (up_user[i].category === user) {
                            outlook += "<div class='row2'>";
                            outlook += "<div class='column2'>" + up_user[i].name + "</div>";
                            outlook += "<div class = 'column2'>" + up_user[i].description + "</div>";
                            outlook += "<div class='column2'>" + up_user[i].category + "</div>";
                            outlook += "</div>";
                        }

                    }
                    $('#content').html(outlook);

                },
                error: function (errorThrow) {
                    console.log(errorThrow);
                }
            });

        }
    });

});