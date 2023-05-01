package hac.javareact;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.io.*;

import java.util.stream.Collectors;
import javax.servlet.http.*;
import javax.servlet.annotation.*;


@WebServlet(name = "ServletApi", value = "/api/highScores")
public class ApiServlet extends HttpServlet {

    private HighScore highScores;
    String path;

    public void init() {
        this.highScores = new HighScore();
        path = getServletContext().getRealPath(".") + File.separator + "scores.dat";
    }

    /**
     * Handles GET requests to retrieve high scores.
     *
     * @param request the request object
     * @param response the response object
     * @throws ServletException if there is an error while processing the request
     * @throws IOException if there is an error with the input/output
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Create a JSON response with the top scores
        JsonObject jsonResponse = new JsonObject();
        JsonArray scoreArray = new JsonArray();

        try {
            for (HighScore score : highScores.getHighScores(this.path)) {
                JsonObject scoreObject = new JsonObject();
                scoreObject.addProperty("name", score.getName());
                scoreObject.addProperty("score", score.getScore());
                scoreArray.add(scoreObject);
            }
            jsonResponse.add("scores", scoreArray);
            // Send the JSON response to the client
            PrintWriter out = response.getWriter();
            out.println(jsonResponse);
            response.setStatus(HttpServletResponse.SC_OK);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Handles POST requests to add a new high score.
     *
     * @param request the request object
     * @param response the response object
     * @throws ServletException if there is an error while processing the request
     * @throws IOException if there is an error with the input/output
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Allowing React client side development on a different server:
        response.setContentType("application/json");
        response.setHeader("Access-Control-Allow-Origin", "*");

        try {
            // get the request body as a JSON string
            String requestBody = request.getReader().lines().collect(Collectors.joining());
            // Parse the JSON ject from the request body
            Gson gson = new Gson();
            HighScore newScore = gson.fromJson(requestBody, HighScore.class);
            // Add the new score to the list
            highScores.addToHighScores(this.path, newScore.getName(), newScore.getScore());
            // Create a JSON response with a success message
            JsonObject jsonResponse = new JsonObject();
            jsonResponse.addProperty("message", "Post request processed successfully.");
            // Send the JSON response to the client
            PrintWriter out = response.getWriter();
            out.println(jsonResponse);
            response.setStatus(HttpServletResponse.SC_OK);

        } catch (NumberFormatException e) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}