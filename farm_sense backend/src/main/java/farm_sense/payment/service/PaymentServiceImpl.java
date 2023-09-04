package farm_sense.payment.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import farm_sense.payment.dao.PaymentDao;
import farm_sense.payment.entity.Payment;


@Service
public class PaymentServiceImpl implements PaymentService {
   @Autowired
	private PaymentDao paymentdao;
	
	@Override
	@Transactional
	public List<Payment> getAllPaymentsByOrgId(int id) {
		
		try {
			return paymentdao.findByOrgidAndStatus(id, "Pending");
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ArrayList<Payment>();
		}
		
	}

	@Override
	@Transactional
	public void addPayment(Payment payment) {
		paymentdao.save(payment);
		
	}

	@Override
	public Payment getPaymentById(int id) {
		
		return paymentdao.findById(id).orElse(null);
	}

	@Override
	public List<Payment> getAllCompletdePaymentsByOrgId(int id) {
		try {
			return paymentdao.findByOrgidAndStatus(id, "Completed");
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ArrayList<Payment>();
		}
		
	}

}
