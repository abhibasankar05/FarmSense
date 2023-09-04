package farm_sense.farmer.dao;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import farm_sense.farmer.entity.Farmer;

public interface FarmerDao extends MongoRepository<Farmer, Integer> {

	
	public Optional<Farmer> findById(int id);
	public Optional<Farmer> findByAdharnumber(long num);
	
}
