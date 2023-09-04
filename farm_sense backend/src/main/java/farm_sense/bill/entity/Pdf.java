package farm_sense.bill.entity;

import java.util.Date;
import java.util.List;

import farm_sense.org.entity.Address;

public class Pdf {

	private int billid;
	private Date billdate;
	private float netweight;
	private int orgid;
	private String orgname;
	private String orgemail;
	private long orgnumber;
	private Address orgaddress;
	private int farmerid;
	private String farmername;
	private String farmermiddelname;
	private String farmerlastname;
	private Address farmeraddress;
	private long farmeradharnumber;
	private long farmerwhatssappnumber;
	private long farmeralternatenumber;
	private int orderid;
	private Date orderdate;
	private float totalammount;
	private String orderstatus;
	private String paymentstatus;
	
	private int price;
	private List<Bill> bills;
	
	public Pdf() {
	
	}
		
	
	
	public Pdf(int billid, Date billdate, int orgid, float netweight, String orgname, String orgemail, long orgnumber,
			Address orgaddress, int farmerid, String farmername, String farmermiddelname, String farmerlastname,
			Address farmeraddress, long farmeradharnumber, long farmerwhatssappnumber, long farmeralternatenumber,
			int orderid, int price, List<Bill> bills, String paymentstatus) {
		super();
		this.billid = billid;
		this.billdate = billdate;
		this.orgid = orgid;
		this.netweight = netweight;
		this.orgname = orgname;
		this.orgemail = orgemail;
		this.orgnumber = orgnumber;
		this.orgaddress = orgaddress;
		this.farmerid = farmerid;
		this.farmername = farmername;
		this.farmermiddelname = farmermiddelname;
		this.farmerlastname = farmerlastname;
		this.farmeraddress = farmeraddress;
		this.farmeradharnumber = farmeradharnumber;
		this.farmerwhatssappnumber = farmerwhatssappnumber;
		this.farmeralternatenumber = farmeralternatenumber;
		this.orderid = orderid;
		this.price = price;
		this.bills=bills;
		this.paymentstatus=paymentstatus;
	}



	public int getBillid() {
		return billid;
	}



	public void setBillid(int billid) {
		this.billid = billid;
	}



	public Date getBilldate() {
		return billdate;
	}



	public void setBilldate(Date billdate) {
		this.billdate = billdate;
	}



	public int getOrgid() {
		return orgid;
	}



	public void setOrgid(int orgid) {
		this.orgid = orgid;
	}



	public float getNetweight() {
		return netweight;
	}



	public void setNetweight(float netweight) {
		this.netweight = netweight;
	}



	public String getOrgname() {
		return orgname;
	}



	public void setOrgname(String orgname) {
		this.orgname = orgname;
	}



	public String getOrgemail() {
		return orgemail;
	}



	public void setOrgemail(String orgemail) {
		this.orgemail = orgemail;
	}



	public long getOrgnumber() {
		return orgnumber;
	}



	public void setOrgnumber(long orgnumber) {
		this.orgnumber = orgnumber;
	}



	public Address getOrgaddress() {
		return orgaddress;
	}



	public void setOrgaddress(Address orgaddress) {
		this.orgaddress = orgaddress;
	}



	public int getFarmerid() {
		return farmerid;
	}



	public void setFarmerid(int farmerid) {
		this.farmerid = farmerid;
	}



	public String getFarmername() {
		return farmername;
	}



	public void setFarmername(String farmername) {
		this.farmername = farmername;
	}



	public String getFarmermiddelname() {
		return farmermiddelname;
	}



	public void setFarmermiddelname(String farmermiddelname) {
		this.farmermiddelname = farmermiddelname;
	}



	public String getFarmerlastname() {
		return farmerlastname;
	}



	public void setFarmerlastname(String farmerlastname) {
		this.farmerlastname = farmerlastname;
	}



	public Address getFarmeraddress() {
		return farmeraddress;
	}



	public void setFarmeraddress(Address farmeraddress) {
		this.farmeraddress = farmeraddress;
	}



	public long getFarmeradharnumber() {
		return farmeradharnumber;
	}



	public void setFarmeradharnumber(long farmeradharnumber) {
		this.farmeradharnumber = farmeradharnumber;
	}



	public long getFarmerwhatssappnumber() {
		return farmerwhatssappnumber;
	}



	public void setFarmerwhatssappnumber(long farmerwhatssappnumber) {
		this.farmerwhatssappnumber = farmerwhatssappnumber;
	}



	public long getFarmeralternatenumber() {
		return farmeralternatenumber;
	}



	public void setFarmeralternatenumber(long farmeralternatenumber) {
		this.farmeralternatenumber = farmeralternatenumber;
	}



	public int getOrderid() {
		return orderid;
	}



	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}



	public int getPrice() {
		return price;
	}



	public void setPrice(int price) {
		this.price = price;
	}



	@Override
	public String toString() {
		return "Pdf [billid=" + billid + ", date=" + billdate + ", orgid=" + orgid + ", netweight=" + netweight
				+ ", orgname=" + orgname + ", orgemail=" + orgemail + ", orgnumber=" + orgnumber + ", orgaddress="
				+ orgaddress + ", farmerid=" + farmerid + ", farmername=" + farmername + ", farmermiddelname="
				+ farmermiddelname + ", farmerlastname=" + farmerlastname + ", farmeraddress=" + farmeraddress
				+ ", farmeradharnumber=" + farmeradharnumber + ", farmerwhatssappnumber=" + farmerwhatssappnumber
				+ ", farmeralternatenumber=" + farmeralternatenumber + ", orderid=" + orderid + ", price=" + price
				+ "]";
	}



	public List<Bill> getBills() {
		return bills;
	}



	public void setBills(List<Bill> bills) {
		this.bills = bills;
	}



	public Date getOrderdate() {
		return orderdate;
	}



	public void setOrderdate(Date orderdate) {
		this.orderdate = orderdate;
	}



	public float getTotalammount() {
		return totalammount;
	}



	public void setTotalammount(float totalammount) {
		this.totalammount = totalammount;
	}



	public String getOrderstatus() {
		return orderstatus;
	}



	public void setOrderstatus(String orderstatus) {
		this.orderstatus = orderstatus;
	}



	public String getPaymentstatus() {
		return paymentstatus;
	}



	public void setPaymentstatus(String paymentstatus) {
		this.paymentstatus = paymentstatus;
	}
	
	
	
	
	
	
}
