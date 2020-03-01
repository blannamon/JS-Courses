/*
STORAGE API

What is used often to store data?

    1. cookies              (4kb)
        Can be read both by the server and the client.

    2. localStorage         (1mb+)
        Can be read only by the client.

    3. sessionStorage       (1mb+)
        Can be read only by the client.

    4. Cache Storage        (1mb+)
        Can be read only by the client.

--------------------------------------------------------

document.cookie  --->  выдаёт String c cookies.

localStorage.setItem('key','value')
localStorage.getItem('key')
localStorage.removeItem('key')

--------------------------------------------------------

JSON - JavaSCript Object Notation. 
XML was used before JSON. 

String can be turned to a JSON and back.
JSON.parse(string)
JSON.stringify(obj)
*/
