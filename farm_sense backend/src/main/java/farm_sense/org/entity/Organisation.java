package farm_sense.org.entity;



import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.validation.annotation.Validated;


import com.mongodb.lang.NonNull;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;


@Document(collection="organisation")

@NoArgsConstructor
@AllArgsConstructor

@Validated
public class Organisation {
    

	@Transient
	private static final String seq_name = "org_seq";
	
	@Id
	@NonNull
	private int id;
	@NonNull
	private String orgname;
	@NonNull
	@Indexed(unique=true,name = "email_unique_index")
	private String email;
	@NonNull
	private long contact;
	private String profileimage;
	private Address address;
	@NonNull
	private String password;
	private boolean isLogin;
	
	
	public Organisation() {
	}
	
	
	
	public Organisation(int id, String orgname, String email, long contact, String profileimage, Address address,
			 String password, boolean isLogin) {
		super();
		this.id = id;
		this.orgname = orgname;
		this.email = email;
		this.contact = contact;
		this.profileimage = profileimage;
		this.address = address;
		
		this.password = password;
		this.isLogin = isLogin;
	}
	
	
	public int getId() {
		return id;
	}
	public String getOrgname() {
		return orgname;
	}
	public void setOrgname(String orgname) {
		this.orgname = orgname;
	}
	public String getProfileimage() {
		return profileimage;
	}
	public void setProfileimage(String profileimage) {
		this.profileimage = profileimage;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}

	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getSeqName() {
		return seq_name;
	}
	public boolean isLogin() {
		return isLogin;
	}
	public void setLogin(boolean isLogin) {
		this.isLogin = isLogin;
	}



	@Override
	public String toString() {
		return "Organisation [id=" + id + ", orgname=" + orgname + ", email=" + email + ", contact=" + contact
				+ ", profileimage=" + profileimage + ", address=" + address + ", password="
				+ password + ", isLogin=" + isLogin + "]";
	}

	
	
}
