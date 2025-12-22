// Function to load HTML content into a target element
async function loadHTML(elementId, filePath) {
  try {
    // Fetch the external HTML file
    const response = await fetch(filePath);

    // Check if the request was successful
    if (!response.ok) {
      throw Error(`Failed to load ${filePath}: ${response.statusText}`);
    }
    
    // Extract HTML text from the response
    const html = await response.text();
    
    return html
  } catch (error) {
    console.error('Error loading content:', error);
  }
}

console.log(loadHTML("header", "header.py"));
