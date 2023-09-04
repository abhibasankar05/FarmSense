package farm_sense.farmer.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import farm_sense.farmer.entity.Farmer;
import farm_sense.farmer.entity.GrapesVarieties;

import farm_sense.farmer.service.FarmerService;
import farm_sense.farorg.entity.FarmerOrg;
import farm_sense.farorg.service.FarmOrgService;
import farm_sense.seqService.SeqService;

@RestController
@RequestMapping("/farmsense")
@CrossOrigin(origins = "http://localhost:3000")
public class FarmerController {
    @Autowired
	private FarmerService farmerserv;
    @Autowired
    private SeqService seqserv;
    @Autowired
    private FarmOrgService farmorg;
	
	@PostMapping("/addfarmer/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> addFarmer(@RequestBody Farmer farmer, @PathVariable("id") int id){
    	    
		
		
		try {
			Farmer oldFarmer =farmerserv.getFarmerByAdharNumber(farmer.getAdharnumber());
			if(oldFarmer!=null) {
				FarmerOrg oldFarmOrg = farmorg.findByOrgidAndFarmerid(id, oldFarmer.getId());
				if(oldFarmOrg!=null) {
					return ResponseEntity.status(HttpStatus.OK).body(3);
				}else {
					int k = seqserv.generateSequence(FarmerOrg.getSeqname());
					farmorg.addfarmertoOrganisation(new FarmerOrg(k,id,oldFarmer.getId()));
					return ResponseEntity.status(HttpStatus.OK).body(4);
				}
			}
			
			
			
			farmer.setId(seqserv.generateSequence(Farmer.getSeqname()));
			farmerserv.addFarmer(farmer);
			System.out.println("in add farmer " +farmer);
			int m = seqserv.generateSequence(FarmerOrg.getSeqname());
			farmorg.addfarmertoOrganisation(new FarmerOrg(m,id,farmer.getId()));
			System.out.println("in add farmerOrg ");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body(0);
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(1);
    }
    
	@PutMapping("/addvarieties/{id}")
    public ResponseEntity<Object> addVarieties(@RequestBody GrapesVarieties varieties, @PathVariable("id") int id){
    	
		try {
			List<GrapesVarieties> list = farmerserv.getAllVarieties(id);
			if(list.isEmpty()) {
				varieties.setPlotid(1);
			}else {
				int i =0;
				Iterator<GrapesVarieties> itr = list.iterator();
				while(itr.hasNext()) {
					i++;
				}
				varieties.setPlotid(i);
			}
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(0);
		}
		
		return ResponseEntity.ok(1);
    }
	
	@GetMapping("/getfarmers/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> getfarmers(@PathVariable("id") int id){
		try {
			List<FarmerOrg> farmerid = farmorg.findAllFarmerIdsByOrgid(id);
			List<Farmer> farmers = new ArrayList<Farmer>();
			
			for (FarmerOrg i : farmerid) {
				Farmer f =farmerserv.getFarmerById(i.getFarmerid());
				if(f!=null) {
					farmers.add(f);
					
				}
			}
			
			return ResponseEntity.status(HttpStatus.OK).body(farmers);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body(new ArrayList<Farmer>());
		}
		
    

    }
	
	@GetMapping("/getfarmer/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> getfarmer(@PathVariable("id") int id){
		try {
			Farmer farmer = farmerserv.getFarmerById(id);
			return ResponseEntity.status(HttpStatus.OK).body(farmer);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body(0);
		}
    }
	
	@GetMapping("/countfarmers/{id}")

    public ResponseEntity<Object> countfarmers(@PathVariable("id") int id){
		try {
			int count = farmorg.getCount(id);
			return ResponseEntity.status(HttpStatus.OK).body(count);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK).body(-1);
		}
    }
	
}
