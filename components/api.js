export const fetchOverwatchData = async () => {
  try {
    // Make the API call to fetch Overwatch data
    const response = await fetch('https://ow-api.com/v1/stats/pc/us/Zealth-11447/profile', {
      headers: {
        'User-Agent': 'YourApp/1.0', // Some APIs require a User-Agent header
        // Add any other headers as needed
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON response
    const data = await response.json();

    // Process and extract the necessary data from the response
    const playerName = data.username; // Extract the player's name
    const rank = data.rank; // Extract the player's rank
    // Add more data extraction as needed

    // Print the entire result of the API
    console.log('API Result:', data);

    // Return the extracted data
    return { playerName, rank }; // Return the player's name and rank
  } catch (error) {
    // Handle any errors
    console.error('Error fetching Overwatch data:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};