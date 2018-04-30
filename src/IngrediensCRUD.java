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
public class IngrediensCRUD {
	
	static Map<String, Ingrediens> ingredients = new HashMap<>();
	   		/* Creates some dummy data to test */
		   static {
		      ingredients.put("1", new Ingrediens("1", "sukker", "200"));
		      ingredients.put("2", new Ingrediens("2", "fløde", "300"));
		      ingredients.put("3", new Ingrediens("3", "champignon", "50"));
		      ingredients.put("4", new Ingrediens("4", "agurk", "30"));
	   }

	/* Reads one ingredient from the Map */
	@GET
	@Path("read/{id}")
	public Ingrediens getIngrediens( @PathParam("id") String id)
	{
		return ingredients.get(id);
	}
	
	/* Reads all ingredients in the Map */
	@GET
	@Path("read")
	public Map<String, Ingrediens> getIngredients()
	{
		return ingredients;	
	}
	
	/* Updates an ingredient */
	@GET
	@Path("update/{id}/{name}/{amount}")
	public void updateIngrediens(@PathParam("id") String id, @PathParam("name") String name, @PathParam("amount") String amount)
	{
		Ingrediens currentIngrediens;
		currentIngrediens = ingredients.get(id);
		currentIngrediens.setAmount(amount);
		currentIngrediens.setId(id);
		currentIngrediens.setName(name);
	}
	
	/* Creates an ingredient and puts it in the list */
	@POST
	@Path("create")
	public void addIngredient(Ingrediens ingrediens)
	{
		ingredients.put(ingrediens.getId(), ingrediens);
	}
	
	/* Deletes an ingredient */
	@GET
	@Path("delete/{id}")
	public void deleteIngrediens(@PathParam("id") String id)
	{
		ingredients.remove(id);
	}
	
}
