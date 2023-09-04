package farm_sense.farmer.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import com.mongodb.lang.NonNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PesticideReport {

	@Transient
	private static final String seqname = "pestReport_seq";
	@Id
	@NonNull
	private int id;
	private String report;
	private long year;
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getReport() {
		return report;
	}
	public void setReport(String report) {
		this.report = report;
	}
	public long getYear() {
		return year;
	}
	public void setYear(long year) {
		this.year = year;
	}
	public static String getSeqname() {
		return seqname;
	}

	
	
}
