package farm_sense.crossorigin;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CrossConfig implements WebMvcConfigurer {

	
	
	 @Override
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/*") // Adjust the mapping to match your API endpoints
	            .allowedOrigins("http://localhost:3000") // Allow requests from this origin (your React app)
	            .allowedMethods("GET", "POST", "PUT", "DELETE")
	            .allowedHeaders("*");
	    }
}
