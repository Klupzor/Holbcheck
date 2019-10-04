$.ajax({
  type: 'GET',
  dataType: 'json',
  url: 'https://intranet.hbtn.io/users/me.json?auth_token=ef2aefa07313fca805ce9a90726e3263a8dd060213239333b716f1954e508875'
}).done(function (data) {
  console.log(data);
});
