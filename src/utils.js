export const fetcher = async (url) => {
    const responsee = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`
    );
    const data = await res.json();
  
    console.log("data", data);
  
    return data;
  };