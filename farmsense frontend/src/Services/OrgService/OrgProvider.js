import { useState, useEffect } from 'react';
import { getOrganisation } from "../OrgService/GetService";

const useOrg = async (organizationId) => {
  const [org, setOrg] = useState(null);
  
  useEffect(() => {
    const fetchOrg = async () => {
        try {
          const response = await getOrganisation(organizationId);
          setOrg(response.data); 
           
        } catch (error) {
          console.error('Error fetching organization details:', error);
        }
      };
  
      fetchOrg();
      console.log(org);
  }, []);
  useEffect(() => {
    
    console.log('Org value changed:', org);
  }, [org]);

  return org;
};

export default useOrg;