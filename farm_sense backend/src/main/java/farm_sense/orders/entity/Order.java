package farm_sense.orders.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.validation.annotation.Validated;

import com.mongodb.lang.NonNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Document(collection="Orders")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Validated
public class Order {
	
	
	

	@Transient
	private static final String seqname = "order_seq";	
	@Id
	@NonNull
	private int orderid;
	private String status;
	@NonNull
	private int farmerid;
	
	private int plotid;
	private int price;
	private Date date;
	private float totalammount;
	@NonNull
	private int orgid;
	private String paymentstatus;
	
	
	
	public int getOrgid() {
		return orgid;
	}
	public void setOrgid(int orgid) {
		this.orgid = orgid;
	}
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
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
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public static String getSeqname() {
		return seqname;
	}
	public float getTotalammount() {
		return totalammount;
	}
	public void setTotalammount(float totalammount) {
		this.totalammount = totalammount;
	}
	public String getPaymentstatus() {
		return paymentstatus;
	}
	public void setPaymentstatus(String paymentstatus) {
		this.paymentstatus = paymentstatus;
	}
	
	
	
}
