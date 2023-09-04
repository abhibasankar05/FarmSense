package farm_sense.seqService;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SeqDao extends MongoRepository<Sequence, String> {

	public Sequence findBySname(String seq_id);
	
}
