

export const rateMovie = async (id, userRating) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/movies/${id}/rate_movie/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 94df7a83ced3f398b7622adeac6b4f44320e3ae8'
      },
      body: JSON.stringify({ stars: userRating })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error);
  }
}
