package farm_sense.farorg.service;

import java.util.List;

import farm_sense.farorg.entity.FarmerOrg;

public interface FarmOrgService {

	public FarmerOrg addfarmertoOrganisation(FarmerOrg farmerorg);
	public FarmerOrg findByOrgidAndFarmerid(int orgid, int farmerid);
	public List<FarmerOrg> findAllFarmerIdsByOrgid(int orgid);
	public int getCount(int id);
}
