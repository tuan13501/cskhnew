export default class ProductService {

	login(user, pass) {
		const formData = new FormData();
		formData.append('user', user);
		formData.append('pass', pass);

		return fetch('http://192.168.1.26:5001/api/Auth/login', {
			method: 'POST',
			body: formData,
		}).then(response => response.json())
	}
	
	register(username, password, companyCode) {
		const formData = new FormData();
		formData.append('username', username);
		formData.append('password', password);
		formData.append('companyCode', companyCode);

		return fetch('http://192.168.1.26:5001/api/Auth/register', {
			method: 'POST',
			body: formData,
		}).then(response => response.json())
	}
}