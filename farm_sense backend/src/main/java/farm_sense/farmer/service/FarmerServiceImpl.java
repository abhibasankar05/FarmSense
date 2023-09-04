package farm_sense.farmer.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import farm_sense.farmer.dao.FarmerDao;
import farm_sense.farmer.entity.Farmer;
import farm_sense.farmer.entity.GrapesVarieties;
@Service
public class FarmerServiceImpl implements FarmerService {
    
	@Autowired
	private FarmerDao farmerdao;
	
	@Transactional
	@Override
	public Farmer addFarmer(Farmer farmer) {
		
		
		return farmerdao.save(farmer);
	}

	@Override
	public List<GrapesVarieties> getAllVarieties(int id) {
		Farmer farmer = farmerdao.findById(id).orElse(null);
		
		if(farmer!=null) {
			return farmer.getVarieties();
		}else {
			
			return new ArrayList<GrapesVarieties>();
		}
		
	}

	@Override
	public Farmer getFarmerByAdharNumber(long num) {
		Farmer farmer = farmerdao.findByAdharnumber(num).orElse(null);
		return farmer;
	}

	@Override
	public Farmer getFarmerById(int farmerid) {
		
		return farmerdao.findById(farmerid).orElse(null);
	}

	

}
