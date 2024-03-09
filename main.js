const axios = require('axios');

// Function to get the number of active addresses in the past week
async function getWeeklyActiveUsers(network, apiKey) {
    const apiUrl = `https://api.etherscan.io/api?module=ga&apikey=${apiKey}&action=addresshistory&address=${network}`;
    const response = await axios.get(apiUrl);
    const activeUsers = response.data.result;
    return activeUsers;
}

// Example usage
const apiKey = 'YourEtherscanAPIKey';
const network = 'YourL2NetworkAddress';
getWeeklyActiveUsers(network, apiKey)
    .then(activeUsers => {
        console.log("Weekly Active Users:", activeUsers);
    })
    .catch(error => {
        console.error("Error fetching active users:", error);
    });
