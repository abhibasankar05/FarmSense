package farm_sense.bill.billdao;

import java.util.List;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import farm_sense.bill.entity.Bill;
@Repository
public interface BillDao extends MongoRepository<Bill, Integer> {
	
	
	public List<Bill> findById(int id);
	public List<Bill> findByOrderid(int id);
	public List<Bill> findByOrgid(int id);

}
