$.ajax('/api/articles', {
  type: 'GET',
  //data: JSON.stringify(formdata),
  contentType: 'application/json',
  success: function (articleCollections) {

  },
  error: function () { console.log('error'); }
});

