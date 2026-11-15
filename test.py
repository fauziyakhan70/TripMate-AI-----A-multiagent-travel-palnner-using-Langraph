
from tools.tavily_tool import tavily_search
from tools.flight_tool import search_flights
from backend import run_travel_agent
from backend import run_travel_agent


# Test Tavily search
# res = tavily_search("Best hotels in India")
# print(res)


# Test flight search
# res = search_flights("Plan a 7 days Nepal trip from Bangladesh")
# print(res)


# Get travel request from user
user_input = input("Enter travel request: ")

# Run travel agent
response = run_travel_agent(
    user_input=user_input,
    thread_id="test_user"
)

# Print final response
print("\nFINAL RESPONSE:\n")
print(response["answer"])
