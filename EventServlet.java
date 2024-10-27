package src;
@WebServlet("/getEvents")
public class EventServlet extends HttpServlet {
    private EventDAO eventDAO = new EventDAO();

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        try {
            List<Event> events = eventDAO.getAllEvents();
            String json = new Gson().toJson(events); // Use Gson for JSON serialization
            out.write(json);
        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        } finally {
            out.close();
        }
    }
}
