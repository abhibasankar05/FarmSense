package farm_sense.farorg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import farm_sense.farorg.dao.FarmOrgDao;
import farm_sense.farorg.entity.FarmerOrg;

@Service
public class FarmOrgServiceImpl implements FarmOrgService {
	
	@Autowired
	private FarmOrgDao farmorgdao;

	@Override
	public FarmerOrg addfarmertoOrganisation(FarmerOrg farmerorg) {
		System.out.println("in impl");
     
		return farmorgdao.save(farmerorg);
	}

	@Override
	public FarmerOrg findByOrgidAndFarmerid(int orgid, int farmerid) {
		FarmerOrg farmerOrg = farmorgdao.findByOrgidAndFarmerid(orgid, farmerid).orElse(null);
		return farmerOrg;
	}

	@Override
	public List<FarmerOrg> findAllFarmerIdsByOrgid(int orgid) {
		
		return farmorgdao.findAllFarmerIdsByOrgid(orgid);
	}

	@Override
	public int getCount(int id) {
		
		return farmorgdao.countFarmerOrgsByOrgid(id);
	}

}
