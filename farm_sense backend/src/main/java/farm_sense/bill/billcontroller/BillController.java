package farm_sense.bill.billcontroller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import farm_sense.bill.billservice.BillService;
import farm_sense.bill.entity.Bill;
import farm_sense.orders.entity.Order;
import farm_sense.orders.orderservice.OrderSevice;
import farm_sense.seqService.SeqService;

@RestController
@RequestMapping("/farmsense")
@CrossOrigin(origins = "http://localhost:3000")
public class BillController {

	@Autowired
	private BillService billservice;
	
	@Autowired
	private OrderSevice orderservice;
	
	@Autowired
	private SeqService seqservice;
	
	@PostMapping("/addbill")
	public ResponseEntity<Object> addbill(@RequestBody Bill bill){
		
		try {
			if(bill.getNetweight()==0) {
				return ResponseEntity.status(HttpStatus.OK).body(-3);
			}
			Order order = orderservice.getOrderById(bill.getOrderid());
			if(order==null) {
				return ResponseEntity.status(HttpStatus.OK).body(-1);
			}
			if(order.getStatus().equals("Completed")) {
				return ResponseEntity.status(HttpStatus.OK).body(-2);
			}
			int id= orderservice.getFarmerIdByOrderId(bill.getOrderid());
			if(id==-1) {
				return ResponseEntity.status(HttpStatus.OK).body(-1);
			}else {
				bill.setBillid(seqservice.generateSequence(Bill.getSeqname()));
				bill.setFarmerid(id);
				billservice.addbill(bill);
				return ResponseEntity.status(HttpStatus.OK).body(1);
			}	
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body(0);
		}
		
	
	}
	
	@GetMapping("/getbills/{id}")
	public ResponseEntity<Object> getAllBillsByOrderId(@PathVariable("id") int id){
		
		try {
			List<Bill>  bills = billservice.getAllBillsByOrgId(id);
			return ResponseEntity.status(HttpStatus.OK).body(bills);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body(new ArrayList<Bill>());
		}
	}
	
	
	
	
	
	
	
	
}
