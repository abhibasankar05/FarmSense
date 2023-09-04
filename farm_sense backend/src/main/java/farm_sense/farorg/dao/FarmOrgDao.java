package farm_sense.farorg.dao;



import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;


import farm_sense.farorg.entity.FarmerOrg;

@Repository
public interface FarmOrgDao extends MongoRepository<FarmerOrg, Integer> {
	
    @Query("{ 'orgid': ?0, 'farmerid': ?1 }")
    public Optional<FarmerOrg> findByOrgidAndFarmerid (int orgid, int farmerid);
    
    @Query(value = "{ 'orgid': ?0 }", fields = "{ 'farmerid': 1 }")
    List<FarmerOrg> findAllFarmerIdsByOrgid(int orgid);
	
    public int countFarmerOrgsByOrgid(int id);
}
