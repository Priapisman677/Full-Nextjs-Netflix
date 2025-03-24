export const fetchFromTMDB = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.TMDB_API_KEY,
      },
      next: { revalidate: 15 }, // ✅ if you want to revalidate here directly
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch TMDB data: ${response.status}`);
    }
  
    return response.json();
  };