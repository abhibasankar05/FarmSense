package farm_sense.org.service;

import farm_sense.org.entity.Organisation;

public interface OrganisationService {

	
	
	
	public Organisation registerOrg(Organisation org);

	public Organisation getOrganisation(int id);

	public Organisation getOrganisation(String email);

	public int deleteOrganisation(Organisation org );
	
	
}
