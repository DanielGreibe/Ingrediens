import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("ingredients")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class JSON {
	
	static Map<String, Ingrediens> ingredients = new HashMap<>();
	   //Insert some dummy data
		   static {
		      ingredients.put("1", new Ingrediens("1", "sukker", "200"));
		      ingredients.put("2", new Ingrediens("2", "fløde", "300"));
		      ingredients.put("3", new Ingrediens("3", "champignon", "50"));
		      ingredients.put("4", new Ingrediens("4", "agurk", "30"));
	   }

	@GET
	@Path("{id}")
	public Ingrediens getIngrediens( @PathParam("id") String id)
	{
		return ingredients.get(id);
	}
	
	
	@POST
	public Ingrediens addIngredient(Ingrediens ingrediens)
	{
		return ingrediens;
	}
	
	
}
