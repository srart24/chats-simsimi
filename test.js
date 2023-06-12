const simsimi = require('./lib/main');

(async () => {
  try {
    const response = await simsimi("Halo, apa kabar?", "id"); 
    console.log('Response:', JSON.stringify(response, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
})();
