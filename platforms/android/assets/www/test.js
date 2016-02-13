document.addEventListener('deviceready', function () {
  if (navigator.notification) { // Override default HTML alert with native dialog
      window.alert = function (message) {
          navigator.notification.alert(
              message,    // message
              null,       // callback
              "Workshop", // title
              'OK'        // buttonName
          );
      };
  }
}, false);

function renderHomeView() {
    var html =
      "<h1>Directory</h1>" +
      "<input class='search-key' type='search' placeholder='Enter name'/>" +
      "<ul class='employee-list'></ul>";
    $('body').html(html);
    $('.search-key').on('keyup', findByName);
}

var service = new EmployeeService();
service.initialize().done(function () {
    renderHomeView();
});