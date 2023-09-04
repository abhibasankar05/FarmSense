package farm_sense.bill.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.validation.annotation.Validated;

import com.mongodb.lang.NonNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Document(collection="bills")
@NoArgsConstructor
@AllArgsConstructor
@Validated
@ToString

public class Bill {
	@Transient
	private static final String seqname = "bill_seq";
	public static String getSeqname() {
		return seqname;
	}
	@Id
	@NonNull
	private int billid;
	@NonNull
	private int farmerid;
	
	private int plotid;
	@NonNull
	private int orderid;
	@NonNull
	private Date date;
	@NonNull
	private float netweight;
	@NonNull
	private int orgid;
	public int getOrgid() {
		return orgid;
	}
	public void setOrgid(int orgid) {
		this.orgid = orgid;
	}
	public int getBillid() {
		return billid;
	}
	public void setBillid(int billid) {
		this.billid = billid;
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
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public float getNetweight() {
		return netweight;
	}
	public void setNetweight(float netweight) {
		this.netweight = netweight;
	}
	
	
	
	
}
