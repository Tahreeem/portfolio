$('.btn').click(function () {
  var formdata = {
    name: $('#name').val().trim(),
    email: $('#email').val().trim(),
    message: $('#message').val().trim()
  }

  $.ajax('/api/contactme', {
    type: 'POST',
    data: JSON.stringify(formdata),
    contentType: 'application/json',
    success: function (createdContact) {
  
    },
    error: function () { console.log('error'); }
  });



});









