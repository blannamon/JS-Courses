
// literal object
let button = {
    text: 'OK',
    type: 'submit', // read only
    color: 'black',
    styles: {
        width: '100px',
        fontSize: '50px'
    }
}

// modification
button.color = 'white'
button.text = 'CANCEL'


// localStorage.getItem('_bubble_saved_email_thetoothbankapp_test')