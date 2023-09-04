package farm_sense.orders.orderdao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import farm_sense.orders.entity.Order;
@Repository
public interface OrderDao extends MongoRepository<Order, Integer> {

	
	public List<Order> findByOrgidAndStatus(int id, String Status);
	public Optional<Order> findById(int id);
	public int countOrdersByOrgidAndStatus(int id, String string );
	public List<Order> findByStatus(String str);
	
}
