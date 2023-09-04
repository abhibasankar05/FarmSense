package farm_sense.payment.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import farm_sense.payment.entity.Payment;

@Repository
public interface PaymentDao extends MongoRepository<Payment, Integer> {

	
	public List<Payment> findByOrgidAndStatus(int id, String Status);
	public List<Payment> findByOrgid(int id);
	public Optional<Payment> findById(int id);
}
