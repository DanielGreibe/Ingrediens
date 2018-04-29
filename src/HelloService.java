import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Path("hello")
public class HelloService {
	
	@GET
	public String getHello() {
		return "Hello123";
	}
	
	@POST
	public String HelloName(String name) {
		return "Hello " + name;
	}
	
}

