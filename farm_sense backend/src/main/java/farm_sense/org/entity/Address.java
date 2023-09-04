package farm_sense.org.entity;



public class Address {
	private String area;
	private String city;
	private String dist;
	private String state;
	private long pincode;
	
	
	public Address() {

	}
	
	public Address(String area, String city, String dist, String state, long pincode) {
		super();
		this.area = area;
		this.city = city;
		this.dist = dist;
		this.state = state;
		this.pincode = pincode;
	}
	
	
	
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDist() {
		return dist;
	}
	public void setDist(String dist) {
		this.dist = dist;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public long getPincode() {
		return pincode;
	}
	public void setPincode(long pincode) {
		this.pincode = pincode;
	}
	
	@Override
	public String toString() {
		return "Address [area=" + area + ", city=" + city + ", dist=" + dist + ", state=" + state + ", pincode="
				+ pincode + "]";
	}

	
	
}
