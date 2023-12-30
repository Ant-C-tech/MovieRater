const API_URL = 'http://127.0.0.1:8000/api';
const TOKEN = '94df7a83ced3f398b7622adeac6b4f44320e3ae8';

export class API {
  static async getMovies() {
    const response = await fetch(`${API_URL}/movies/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${TOKEN}`
      },
    });
    return await response.json();
  }

  static async rateMovie(id, body) {
    const response = fetch(`${API_URL}/movies/${id}/rate_movie/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${TOKEN}`
      },
      body: JSON.stringify(body)
    });
  }

  static async updateMovie(id, body) {
    return fetch(`${API_URL}/movies/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${TOKEN}`
      },
      body: JSON.stringify(body)
    });
  }
}
