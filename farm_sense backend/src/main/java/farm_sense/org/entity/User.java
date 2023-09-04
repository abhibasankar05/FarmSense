package farm_sense.org.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import com.mongodb.lang.NonNull;

public class User {

	@Transient
	private static final String seq_name = "user_seq";
	
	@Id
	@NonNull
	private int id;
	@NonNull
	private int userid;
	@NonNull
	private String role;
	@NonNull
	private String password;
	private List<String> access;
	
	
	
	
	public User() {
		
	}
		
	public User(int id, int userid, String role, String password) {
		super();
		this.id = id;
		this.userid = userid;
		this.role = role;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", user_id=" + userid + ", role=" + role + ", password=" + password + "]";
	}

	public List<String> getAccess() {
		return access;
	}

	public void setAccess(List<String> access) {
		this.access = access;
	}
	
	
	
	
}
