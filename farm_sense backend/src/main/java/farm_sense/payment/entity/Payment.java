package farm_sense.payment.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.validation.annotation.Validated;

import com.mongodb.lang.NonNull;



@Document(collection="payments")
@Validated

public class Payment { 

	@Transient
	private static final String seqname = "payment_seq";
	@Id
	@NonNull
	private int id;
	@NonNull
	private int orderid;
	@NonNull
	private int farmerid;
	
	private int plotid;
	
	private String status;
	@NonNull
	private float totalammount;
	@NonNull
	private int orgid;
	
	
	
	
	
	public Payment() {
	
	}
	
	public Payment(int id, int orderid, int farmerid, int plotid, String status, float totalammount, int orgid) {
		super();
		this.id = id;
		this.orderid = orderid;
		this.farmerid = farmerid;
		this.plotid = plotid;
		this.status = status;
		this.totalammount = totalammount;
		this.orgid = orgid;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getOrderid() {
		return orderid;
	}

	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}

	public int getFarmerid() {
		return farmerid;
	}

	public void setFarmerid(int farmerid) {
		this.farmerid = farmerid;
	}

	public int getPlotid() {
		return plotid;
	}

	public void setPlotid(int plotid) {
		this.plotid = plotid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public float getTotalammount() {
		return totalammount;
	}

	public void setTotalammount(float totalammount) {
		this.totalammount = totalammount;
	}

	public int getOrgid() {
		return orgid;
	}

	public void setOrgid(int orgid) {
		this.orgid = orgid;
	}

	public static String getSeqname() {
		return seqname;
	}

	@Override
	public String toString() {
		return "Payment [id=" + id + ", orderid=" + orderid + ", farmerid=" + farmerid + ", plotid=" + plotid
				+ ", status=" + status + ", totalammount=" + totalammount + ", orgid=" + orgid + "]";
	}
	
	
	
	
	
}
