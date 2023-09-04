package farm_sense.payment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import farm_sense.orders.entity.Order;
import farm_sense.orders.orderservice.OrderSevice;
import farm_sense.payment.entity.Payment;
import farm_sense.payment.service.PaymentService;

@RestController
@RequestMapping("/farmsense")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

	@Autowired
	private PaymentService paymentservice;
	
	@Autowired
	private OrderSevice orderservice;
	 
	
	
	@GetMapping("/getpayments/{id}")
	public ResponseEntity<Object> getAllPayments(@PathVariable("id") int id){
		
		List<Payment> payments = paymentservice.getAllPaymentsByOrgId(id);
		
		
		return ResponseEntity.status(HttpStatus.OK).body(payments);
	}
	
	
	@GetMapping("/updatepayment/{id}")
	public  ResponseEntity<Object> updatePaymentStatus(@PathVariable("id") int id){
		
		try {
		      Payment payment = paymentservice.getPaymentById(id);
		      if(payment==null) {
		    	  return ResponseEntity.status(HttpStatus.OK).body(0);
		      }
		      Order order = orderservice.getOrderById(payment.getOrderid());
		      if(order==null) {
		    	  return ResponseEntity.status(HttpStatus.OK).body(0);
		      }
		      payment.setStatus("Completed");
		      order.setPaymentstatus("Completed");
		      orderservice.addorder(order);
		      paymentservice.addPayment(payment);
		      
		      
		      return ResponseEntity.status(HttpStatus.OK).body(1);
	
		} catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.OK).body(-1);
		}
		
	}
	
	@GetMapping("/getcompletdpayments/{id}")
	public ResponseEntity<Object> getAllCompletedPayments(@PathVariable("id") int id){
		
		List<Payment> payments = paymentservice.getAllCompletdePaymentsByOrgId(id);
		
		
		return ResponseEntity.status(HttpStatus.OK).body(payments);
	}
	
	
}
