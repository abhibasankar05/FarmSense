package farm_sense.seqService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeqServiceImpl implements SeqService {
    @Autowired
	private SeqDao seqdao;
	
	@Override
	public int generateSequence(String seq_id) {
		Sequence seq= seqdao.findBySname(seq_id);
		
		if(seq==null) {
			seq = new Sequence();
			seq.setSname(seq_id);
		}
		seq.setCounter(seq.getCounter()+1);
		seqdao.save(seq);
		
		return seq.getCounter();
	}

	
	
	
}
