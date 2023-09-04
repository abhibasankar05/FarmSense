package farm_sense.farmer.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.validation.annotation.Validated;

import com.mongodb.lang.NonNull;

import farm_sense.org.entity.Address;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Document(collection="farmers")

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Validated
public class Farmer {
	@Transient
	private static final String seqname = "farmer_seq";
	@Id
	@NonNull
    private int id;
	@NonNull
    private String name;
    private String middelname;
    @NonNull
    private String lastname;
    private Address address;
    @NonNull
    @Indexed(unique=true)
    private long adharnumber;
    @NonNull
    private long whatsappnumber;
    @NonNull
    private long alternatenumber;
    private List<GrapesVarieties> varieties;
    
    
    
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMiddelname() {
		return middelname;
	}
	public void setMiddelname(String middelname) {
		this.middelname = middelname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public long getAdharnumber() {
		return adharnumber;
	}
	public void setAdharnumber(long adharnumber) {
		this.adharnumber = adharnumber;
	}
	public long getWhatsappnumber() {
		return whatsappnumber;
	}
	public void setWhatsappnumber(long whatsappnumber) {
		this.whatsappnumber = whatsappnumber;
	}
	public long getAlternatenumber() {
		return alternatenumber;
	}
	public void setAlternatenumber(long alternatenumber) {
		this.alternatenumber = alternatenumber;
	}
	public List<GrapesVarieties> getVarieties() {
		return varieties;
	}
	public void setVarieties(List<GrapesVarieties> varieties) {
		this.varieties = varieties;
	}
	
	public static String getSeqname() {
		return seqname;
	}
	
	
	
}
