package farm_sense.farorg.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.validation.annotation.Validated;

import com.mongodb.lang.NonNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Document(collection="farmerorg")
@AllArgsConstructor
@NoArgsConstructor
@Validated
@ToString
public class FarmerOrg {

	
	@Transient
	private static final String seqname = "FarmerOrg_seq";
	@Id
	@NonNull
	private int id;
	@NonNull
	private int orgid;
	@NonNull
	private int farmerid;
	
	
	
	public FarmerOrg() {
		
	}
	
	
	public FarmerOrg(int id, int orgid, int farmerid) {
		super();
		this.id = id;
		this.orgid = orgid;
		this.farmerid = farmerid;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getOrgid() {
		return orgid;
	}
	public void setOrgid(int orgid) {
		this.orgid = orgid;
	}
	public int getFarmerid() {
		return farmerid;
	}
	public void setFarmerid(int farmerid) {
		this.farmerid = farmerid;
	}
	public static String getSeqname() {
		return seqname;
	}

	
	
	
	
	
	
}
