import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;

@Path("ingredients")
public class Ingredients {
	
	@POST
	public String createIngredientForm(@FormParam("name") String name, @FormParam("id") String id ,@FormParam("amount") String amount) {
		return "You have made a new ingredient:" + "\n"
				+ "The name is: " + name + "\n"
				+ "The ID is: " + id  + "\n"
				+ "The amount is: " + amount;
		
	}
	
	@POST
	@Path("{id}/{name}/{amount}")
	public String createIngredientPost(@PathParam("name") String name, @PathParam("id") String id ,@PathParam("amount") String amount) {
		return "You have made a new ingredient:" + "\n"
				+ "The name is: " + name + "\n"
				+ "The ID is: " + id  + "\n"
				+ "The amount is: " + amount;
		
	}
	
	@POST
	@Path("query")
	public String createIngredientQuery(@QueryParam("name") String name, @QueryParam("id") String id , @PathParam("amount") String amount) {
		return "You have made a new ingredient:" + "\n"
				+ "The name is: " + name + "\n"
				+ "The ID is: " + id  + "\n"
				+ "The amount is: " + amount;
	}

}
