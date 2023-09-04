package farm_sense.org.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import farm_sense.org.entity.Organisation;

import farm_sense.org.service.OrganisationService;
import farm_sense.seqService.SeqService;

@RestController
@RequestMapping("/farmsense")
@CrossOrigin(origins = "http://localhost:3000")
public class OrgController {
    @Autowired
	private OrganisationService orgServ;
    @Autowired
	private SeqService seqService;
    private final ObjectMapper objectMapper = new ObjectMapper();
    
	
	@PostMapping("/register")
	public ResponseEntity<Object> registerOrg(@RequestBody Organisation org){
		
		try {
			System.out.println(org.getOrgname()+" , Resiterd");
			org.setId(seqService.generateSequence(org.getSeqName()));
			orgServ.registerOrg(org);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body(0);
		}
		HttpHeaders header = new HttpHeaders();
		header.add("id", Integer.toString(org.getId()));
		header.add("email", org.getEmail());
		return ResponseEntity.status(HttpStatus.OK).headers(header).body(1);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody String requestBody){
		
		try {
            JsonNode jsonNode = objectMapper.readTree(requestBody);
            String email = jsonNode.get("email").asText();
            String password = jsonNode.get("password").asText();
            System.out.println(email+" , "+password);
            
            Organisation org = orgServ.getOrganisation(email);
            if(org==null) {
            	return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("user not registerd");
            }
            
            
            
            
            if(org.getEmail().equals(email)&&org.getPassword().equals(password)) {
            	org.setLogin(true);
            	orgServ.registerOrg(org);
            	HttpHeaders header = new HttpHeaders();
        		header.add("id", Integer.toString(org.getId()));
        		header.add("email", org.getEmail());
        		return ResponseEntity.status(HttpStatus.OK).headers(header).body(org.getId());
            }else {
            	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("password incorrect");
            }
            
            
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("Something went wrong try again");
		}
		
		
	}
	
	
	
	

	
	
	@GetMapping("/getorganisation/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Object> getOrg(@PathVariable("id") int id){
		
		try {
			
			Organisation org = orgServ.getOrganisation(id);
			if(org==null) {
				System.out.println("null");
				return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(0);
			}else {
				System.out.println(" in get one"+org);
				return ResponseEntity.status(HttpStatus.OK).body(org);
			}
	
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong");
		}
	}
	
	
	
		@DeleteMapping("/deletorganisation")
		public ResponseEntity<Object> deleteUser(@RequestHeader("id") int id){
			
			try {
				
				Organisation org = orgServ.getOrganisation(id);
				if(org==null) {
					return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Organisation Does not exists");
				}else {
					
				}
				int i = orgServ.deleteOrganisation(org);
				if(i==0) {
					return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Exception at database");
				}else {
				
				return ResponseEntity.status(HttpStatus.OK).body("Deleted");
				}
			} catch (Exception e) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("user not deleted");
			}

	}
	
		@PutMapping("/updateorganisation")
		public ResponseEntity<Object> deleteUser(@RequestBody Organisation org ){
			
			try {
				orgServ.registerOrg(org);
				return ResponseEntity.status(HttpStatus.OK).body("Updated");
				
			} catch (Exception e) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Organisation id not updated");
			}
	}
	
		
		@PutMapping("/logout")
		public ResponseEntity<Object> logout(@RequestHeader("id") int id){
			
			try {
				
				Organisation org = orgServ.getOrganisation(id);
				org.setLogin(false);
            	orgServ.registerOrg(org);
            	System.out.println(org);
            	System.out.println("Logout");
				return ResponseEntity.status(HttpStatus.OK).body("Ok");
				
				
			} catch (Exception e) {
				System.out.println("Logout Exception");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed");
			}
	}
		
		
		
		
		
		
		
		
		}
	
	
	
	
	
	
	
	

