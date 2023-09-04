package farm_sense.bill.billservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import farm_sense.bill.billdao.BillDao;
import farm_sense.bill.entity.Bill;

@Service
public class BillServiceImpl implements BillService {

	@Autowired
	private BillDao billdao;
	
	@Transactional
	@Override
	public Bill addbill(Bill bill) {
		// TODO Auto-generated method stub
		return billdao.save(bill);
	}

	@Override
	public List<Bill> getAllBillsByOrderId(int id) {
		// TODO Auto-generated method stub
		return  billdao.findById(id);
	}

	@Override
	public float totalNetWeight(int id) {
		try {
			List<Bill> bills = billdao.findByOrderid(id);
			float total=0;
			if(!(bills.isEmpty())) {
				for (Bill i : bills) {
					
					total+=i.getNetweight();
					
				}
			}
			
			return total;
		} catch (Exception e) {
			System.out.println("exception in billServiseimpl total net weight");
			
			// TODO: handle exception
		}
		return 0;
	}

	@Override
	public List<Bill> getAllBillsByOrgId(int id) {
		
		return billdao.findByOrgid(id);
	}

}
