package farm_sense.orders.orderservice;

import java.util.List;

import farm_sense.orders.entity.Order;

public interface OrderSevice {

	
	public Order addorder(Order order);

	public List<Order> getAllOrdersByOrgId(int id);

	public Order getOrderById(int id);

	public List<Order> getAllCompletedOrdersByOrgId(int id);
	
	public int getFarmerIdByOrderId(int id);

	public int getCountofPending(int id);

	public int getCountofCompleted(int id);

	public double getsumofTotalAmmount(int id);
}
