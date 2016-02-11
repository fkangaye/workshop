// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
	/*-----------View Rendering----------**/

	var homeTpl = Handlebars.compile($("#home-tpl").html());
	var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());

	/* ---------------------------------- Local Variables ---------------------------------- */
	var service = new EmployeeService();
	service.initialize().done(function () {
		console.log('this is a test');
		renderHomeView();
	});

	/* --------------------------------- Event Registration -------------------------------- */


	/* ---------------------------------- Local Functions ---------------------------------- */
	function findByName() {
		service.findByName($('.search-key').val()).done(function (employees) {
		$('.content').html(employeeListTpl(employees));
		});

	}

	function renderHomeView() {
  //   var html =
		// "<h1>Directory</h1>" +
		// "<input class='search-key' type='search' placeholder='Enter name'/>" +
		// "<ul class='employee-list'></ul>";
		$('body').html(homeTpl());
		$('.search-key').on('keyup', findByName);
	}


/*---------------------*/
	document.addEventListener('deviceready', function () {
		FastClick.attach(document.body);
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

}());