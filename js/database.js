//  Declare SQL Query for SQLite
var createStatement = "CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, fullname TEXT, email TEXT, username TEXT, password TEXT, country TEXT )";


var selectAllStatement = "SELECT password, username FROM Users where username = ?";

var insertStatement = "INSERT INTO Users (fullname, email, username, password, country) VALUES (?, ?, ?, ?, ?)";

var db = openDatabase("MauritiusTripAdvisor", "1.0", "MTA", 200000); // Open SQLite Database

var dataset;

var DataType;

function initDatabase() // Function Call When Page is ready.
{
    try {
        if (!window.openDatabase) // Check browser is supported SQLite or not.
        {
            alert('Databases are not supported in this browser.');
        } else {
            createTable(); // If supported then call Function for create table in SQLite
        }
    } catch (e) {
        if (e == 2) {
            // Version number mismatch. 
            console.log("Invalid database version.");
        } else {
            console.log("Unknown error " + e + ".");
        }
        return;
    }
}


function createTable() // Function for Create Table in SQLite.
{
    db.transaction(function (tx) {
        tx.executeSql(createStatement, [], onError);
    });
}

function insertRecord() // Get value from Input and insert record . Function Call when Save/Submit Button Click..
{
    var userfullname = $('input:text[id=fullname]').val();
    var useremail = $('input:text[id=email]').val();
    var username = $('input:text[id=username]').val();
    var userpassword = $('input:password[id=password]').val();
    var usercountry = $('#selectCountry option:selected').text();



    db.transaction(function (tx) {
        tx.executeSql(insertStatement, [userfullname, useremail, username, userpassword, usercountry], onError);
    });
    window.location.href = 'login.html?user=' + username + '&password=' + userpassword + '';

}

function showRecords() {
    var username = document.getElementById('username').value;
    var userpassword = document.getElementById('password').value;

    db.transaction(function (tx) {

        tx.executeSql(selectAllStatement, [username], function (tx, result) {

            dataset = result.rows;


            item = dataset.item(0);

            var upassword = item['password'];
            var uname = item['username'];


            if (userpassword == upassword && username == uname) {
                window.location.href = 'index.html';
            } else {
                alert("wrong password");

            }






        });

    });

}


function onError(tx, error) // Function for Hendeling Error...
{

}