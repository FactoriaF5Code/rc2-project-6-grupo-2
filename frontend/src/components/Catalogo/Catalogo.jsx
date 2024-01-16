import { useFetch } from "../../useFetch";

export const Catalogo = () => {
  const {data} =useFetch("http://localhost:8080/api/hotels")
  return (
    <div className="Catalogo">
      <h1>Fetch like a Pro</h1>
      <ul>
        {data?.map((hotel) => (
          <li key={hotel.id}>{hotel.name}</li>
        ))}
      </ul>
    </div>
  );
};
