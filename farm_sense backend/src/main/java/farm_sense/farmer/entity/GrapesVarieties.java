package farm_sense.farmer.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import com.mongodb.lang.NonNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class GrapesVarieties {
	
	
	@Transient
	private static final String seqname = "variety_seq";
	@Id
	@NonNull
	private int plotid;
	@NonNull
	private String name;
	@NonNull
	private float area;
	private List<PesticideReport> reports;
	
	
	public int getPlotid() {
		return plotid;
	}
	public void setPlotid(int plotid) {
		this.plotid = plotid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getArea() {
		return area;
	}
	public void setArea(float area) {
		this.area = area;
	}
	public static String getSeqname() {
		return seqname;
	}
	public List<PesticideReport> getReports() {
		return reports;
	}
	public void setReports(List<PesticideReport> reports) {
		this.reports = reports;
	}
	
	
	
}
