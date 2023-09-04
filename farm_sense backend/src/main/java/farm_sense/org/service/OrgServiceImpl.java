package farm_sense.org.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import farm_sense.org.dao.OrgDao;
import farm_sense.org.entity.Organisation;
@Service
public class OrgServiceImpl implements OrganisationService {
	
	@Autowired
	private OrgDao orgdao;
	@Override
	@Transactional
	public Organisation registerOrg(Organisation org) {
	
		return orgdao.save(org);
	}



	@Override
	public Organisation getOrganisation(int id) {
		// TODO Auto-generated method stub
		return orgdao.findById(id).orElse(null);
	}



	@Override
	public Organisation getOrganisation(String email) {
		// TODO Auto-generated method stub
		return orgdao.findByEmail(email).orElse(null);
	}



	@Override
	public int deleteOrganisation(Organisation org) {
		try {
			orgdao.delete(org);
			return 1;
		} catch (Exception e) {
			return 0;
		}
		
	}

	
	
	
	
	
}
