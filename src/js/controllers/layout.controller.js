function LayoutController ($http, SERVER, $cookies, $state) {

// Sets up this as vm.
	let vm = this;
// Sets up a variable to toggle between true and false.
	vm.login = false;
// Adds the function to the vm object.
	vm.showLogin = showLogin;
// Adds register function to vm object
	vm.loginUser = loginUser;

// Defines the function and hoists to top of file.
	function showLogin(){
		// If vm.login is true, showLogin() toggles vm.login to false.
		if (vm.login){
			vm.login = false;
		} else {
			// If vm.login is false, showLogin() toggles vm.login to true, resuling in
			// ngShow showing the dropdown.
			vm.login = true;
		}
	}

// ------------------

	function loginUser (user) {
		console.log(user);
		// Testing to internal Adonis server
		$http.post('http://localhost:3333/login', user).then( res => {

		// ************ Following line for production ************
		// $http.post(SERVER.URL + 'login').then( res => {
				console.log(res);
	      $cookies.put('access_token', res.data.access_token);
	      $state.go('root.host');
	    });
	  }
// ------------------



}

LayoutController.$inject = ['$http', 'SERVER', '$cookies', '$state'];
export { LayoutController };
