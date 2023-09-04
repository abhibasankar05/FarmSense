package farm_sense.orders.orderservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import farm_sense.orders.entity.Order;
import farm_sense.orders.orderdao.OrderDao;

@Service
public class OrderServiceImpl implements OrderSevice {
    @Autowired
	private OrderDao orderdao;
	
	
	@Override
	public Order addorder(Order order) {
		
		return orderdao.save(order);
	}


	@Override
	public List<Order> getAllOrdersByOrgId(int id) {
		// TODO Auto-generated method stub
		return orderdao.findByOrgidAndStatus(id, "Pending");
	}


	@Override
	public Order getOrderById(int id) {
		Order order = orderdao.findById(id).orElse(null);
		return order;
	}


	@Override
	public List<Order> getAllCompletedOrdersByOrgId(int id) {
		// TODO Auto-generated method stub
		return orderdao.findByOrgidAndStatus(id, "Completed");
	}


	@Override
	public int getFarmerIdByOrderId(int id) {
		Order order = orderdao.findById(id).orElse(null);
		if(order!=null) {
			return order.getFarmerid();
		}
		return -1;
	}


	@Override
	public int getCountofPending(int id) {
		
		return orderdao.countOrdersByOrgidAndStatus(id, "Pending");
	}


	@Override
	public int getCountofCompleted(int id) {
		// TODO Auto-generated method stub
		return orderdao.countOrdersByOrgidAndStatus(id, "Completed");
	}


	@Override
	public double getsumofTotalAmmount(int id) {
		List<Order> order = orderdao.findByOrgidAndStatus(id, "Completed");
		double sum = order.stream().mapToDouble(Order::getTotalammount).sum();
		return sum;
	}

}
