export default class InvoiceService {

    getInvoice() {
		return fetch('http://192.168.1.26:5001/api/Invoice/getAll').then(res => res.json()).then(d => d.data);
	}

	getInvoiceByCompany(companyId) {

		return fetch('http://192.168.1.26:5001/api/Invoice/getByCompany'+ new URLSearchParams({
			companyId: companyId,
		}), {
			method: 'GET',
		}).then(response => response.json()).then(d => d.data)
	}

	getInvoiceByCode(consignmentId, cusNo) {
		return fetch('http://192.168.1.26:5001/api/Invoice/getByCode?' + new URLSearchParams({
			consignmentId: consignmentId,
			cusNo: cusNo,
		}), {
			method: 'GET',
		}).then(response => response.json()).then(d => d.data)
	}

	getInvoiceDetail() {
		return fetch('http://192.168.1.26:5001/api/InvoiceDetail/getAll').then(res => res.json()).then(d => d.data);
	}

	getInvoiceDetailByCompany(companyId) {


		return fetch('http://192.168.1.26:5001/api/InvoiceDetail/getByCompany'+ new URLSearchParams({
			companyId: companyId,
		}), {
			method: 'GET',
		}).then(response => response.json()).then(d => d.data)
	}

	getInvoiceDetailByCode(consignmentId, cusNo) {

		return fetch('http://192.168.1.26:5001/api/InvoiceDetail/getByCode'+ new URLSearchParams({
			consignmentId: consignmentId,
			cusNo: cusNo,
		}), {
			method: 'GET',
		}).then(response => response.json()).then(d => d.data)
	}
	

	deleteInvoice(id) {
		const formData = new FormData();
		formData.append('id', id);
		return fetch('http://192.168.1.26:5001/api/Invoice/deleteInvoice', {
			method: 'DELETE',
			body: formData,
		}).then(response => response.json())
	}

	deleteInvoiceDetail(id) {
		const formData = new FormData();
		formData.append('id', id);
	
		return fetch('http://192.168.1.26:5001/api/InvoiceDetail/deleteInvoiceDetail', {
			method: 'DELETE',
			body: formData
		}).then(response => response.json())
	}
	//Tên viết tắt đơn vị vận tải/(Mã lô + id lô + Mã Khách hàng đơn vị vận tải)
		
}