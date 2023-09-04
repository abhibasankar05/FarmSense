package farm_sense.bill.billservice;

import java.util.List;

import farm_sense.bill.entity.Bill;

public interface BillService {

	
	
	public Bill addbill(Bill bill);

	public List<Bill> getAllBillsByOrderId(int id);
	public float totalNetWeight(int id);

	public List<Bill> getAllBillsByOrgId(int id);
}
