package farm_sense.org.dao;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import farm_sense.org.entity.Organisation;

public interface OrgDao extends MongoRepository<Organisation, Integer> {

	
	
	public Optional<Organisation>  findById(int id);
	public Optional<Organisation> findByEmail(String email);
	
}
