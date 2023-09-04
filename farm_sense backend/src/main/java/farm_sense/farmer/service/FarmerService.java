package farm_sense.farmer.service;

import java.util.List;

import farm_sense.farmer.entity.Farmer;
import farm_sense.farmer.entity.GrapesVarieties;

public interface FarmerService {

	
	
	
	public Farmer addFarmer(Farmer farmer);
	public List<GrapesVarieties> getAllVarieties(int id);
	public Farmer getFarmerByAdharNumber(long num);
	public Farmer getFarmerById(int farmerid);
	
}
