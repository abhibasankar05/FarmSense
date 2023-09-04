package farm_sense.payment.service;

import java.util.List;

import farm_sense.payment.entity.Payment;

public interface PaymentService {

	List<Payment> getAllPaymentsByOrgId(int id);

	void addPayment(Payment payment);

	Payment getPaymentById(int id);

	List<Payment> getAllCompletdePaymentsByOrgId(int id);

}
