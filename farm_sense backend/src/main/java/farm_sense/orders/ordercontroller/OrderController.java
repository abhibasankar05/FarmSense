package farm_sense.orders.ordercontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import farm_sense.bill.billservice.BillService;
import farm_sense.bill.entity.Bill;
import farm_sense.bill.entity.Pdf;
import farm_sense.farmer.entity.Farmer;
import farm_sense.farmer.service.FarmerService;
import farm_sense.farorg.entity.FarmerOrg;
import farm_sense.farorg.service.FarmOrgService;
import farm_sense.orders.entity.Order;

import farm_sense.orders.orderservice.OrderSevice;
import farm_sense.org.entity.Organisation;
import farm_sense.org.service.OrganisationService;
import farm_sense.payment.entity.Payment;
import farm_sense.payment.service.PaymentService;
import farm_sense.seqService.SeqService;

@RestController
@RequestMapping("/farmsense")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
	@Autowired
	private OrderSevice orderservice;
	@Autowired
	private BillService billservice;
	
	@Autowired
	private PaymentService paymentservice;
	
	@Autowired
	private OrganisationService orgserv;
	
	@Autowired
	private FarmerService farmerserv;
	
	@Autowired
	private FarmOrgService farmerorg;

	@Autowired
	private SeqService seqserv;

	@PostMapping("/addorder")
	public  ResponseEntity<Object> addOrder(@RequestBody Order order){
		
		try {
			
			FarmerOrg farmorg = farmerorg.findByOrgidAndFarmerid(order.getOrgid(), order.getFarmerid());
			if(farmorg==null) {
				return ResponseEntity.status(HttpStatus.OK).body(2);
			}
			order.setOrderid(seqserv.generateSequence(Order.getSeqname()));
			order.setStatus("Pending");
			order.setPaymentstatus("Pending");
			
			orderservice.addorder(order);
	
		} catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.OK).body(0);
		}
		return ResponseEntity.status(HttpStatus.OK).body(1);
	}
	
	
	@GetMapping("/getorders/{id}")
	public  ResponseEntity<Object> getOrders(@PathVariable("id") int id){
		
		try {
			
			List<Order> orders = orderservice.getAllOrdersByOrgId(id);
			return ResponseEntity.status(HttpStatus.OK).body(orders);
		
	
		} catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.OK).body(0);
		}
		
	}
	
	@PutMapping("/updatestatus/{id}")
	
	public ResponseEntity<Object> updateStatus(@PathVariable("id") int id){
		
		try {
			
			Order order = orderservice.getOrderById(id);
			System.out.println("in update status");
			if(order!=null) {
				
				float totalweight = billservice.totalNetWeight(id);
				float totalammount = (totalweight * order.getPrice());
				if(totalammount==0) {
					return ResponseEntity.status(HttpStatus.OK).body(3);
				}
				
				
				order.setStatus("Completed");
				order.setTotalammount(totalammount);
				
				Payment payment = new Payment();
			    payment.setId(seqserv.generateSequence(Payment.getSeqname()));
			    payment.setFarmerid(order.getFarmerid());
			    payment.setOrderid(order.getOrderid());
			    payment.setOrgid(order.getOrgid());
			    payment.setStatus("Pending");
			    payment.setTotalammount(order.getTotalammount());
			    orderservice.addorder(order);
			    paymentservice.addPayment(payment);
				
				return ResponseEntity.status(HttpStatus.OK).body(1);
			}else {
				return ResponseEntity.status(HttpStatus.OK).body(0);
			}
			
			
		} catch (Exception e) {
			System.out.println("exception");
			return ResponseEntity.status(HttpStatus.OK).body(-1);
		}
		
	}
	
	
	@GetMapping("/completedorders/{id}")
	public  ResponseEntity<Object> getCompletedOrders(@PathVariable("id") int id){
		
		try {
			
			List<Order> orders = orderservice.getAllCompletedOrdersByOrgId(id);
			return ResponseEntity.status(HttpStatus.OK).body(orders);
		
	
		} catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.OK).body(0);
		}
		
	}
	
	
	@GetMapping("/getpdf/{id}")
	public  ResponseEntity<Object> getPdf(@PathVariable("id") int id){
		
		try {
			
			Order order = orderservice.getOrderById(id);
			Organisation org = orgserv.getOrganisation(order.getOrgid());
			Farmer farmer = farmerserv.getFarmerById(order.getFarmerid());
			List<Bill> bills = billservice.getAllBillsByOrderId(order.getOrderid());
			Pdf pdf = new Pdf();
			pdf.setOrgid(org.getId());
			pdf.setOrgaddress(org.getAddress());
			pdf.setOrgname(org.getOrgname());
			pdf.setOrgemail(org.getEmail());
			pdf.setOrgnumber(org.getContact());
			pdf.setFarmerid(farmer.getId());
			pdf.setFarmername(farmer.getName());
			pdf.setFarmermiddelname(farmer.getMiddelname());
			pdf.setFarmerlastname(farmer.getLastname());
			pdf.setFarmeraddress(farmer.getAddress());
			pdf.setFarmerwhatssappnumber(farmer.getWhatsappnumber());
			pdf.setFarmeralternatenumber(farmer.getAlternatenumber());
			pdf.setFarmeradharnumber(farmer.getAdharnumber());
			pdf.setOrderid(order.getOrderid());
			pdf.setOrderdate(order.getDate());
			pdf.setOrderstatus(order.getStatus());
			pdf.setPaymentstatus(order.getPaymentstatus());
			pdf.setBills(bills);
			pdf.setTotalammount(order.getTotalammount());
			pdf.setPrice(order.getPrice());
			System.out.println(pdf);
			return ResponseEntity.status(HttpStatus.OK).body(pdf);
			
	
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body(0);
			
		}
		
	}
	
	@GetMapping("/countorders/{id}")
	public  ResponseEntity<Object> getcountofOrders(@PathVariable("id") int id){
		
		try {
			
			int count = orderservice.getCountofPending(id);
			return ResponseEntity.status(HttpStatus.OK).body(count);
		
	
		} catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.OK).body(-1);
		}
		
	}
	
	@GetMapping("/countcorders/{id}")
	public  ResponseEntity<Object> getcountofCompletdeOrders(@PathVariable("id") int id){
		
		try {
			
			int count = orderservice.getCountofCompleted(id);
			return ResponseEntity.status(HttpStatus.OK).body(count);
		
	
		} catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.OK).body(-1);
		}
		
	}
	
	@GetMapping("/sumofammount/{id}")
	public  ResponseEntity<Object> getsumofTotalAmmount(@PathVariable("id") int id){
		
		try {
			
			double sum = orderservice.getsumofTotalAmmount(id);
			return ResponseEntity.status(HttpStatus.OK).body(sum);
		
	
		} catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.OK).body(-1);
		}
		
	}
	
	
	
	
	
	
	
}
