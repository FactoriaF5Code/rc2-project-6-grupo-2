import { useFetch } from "../../useFetch";

export const Catalogo = () => {
  const { data } = useFetch("http://localhost:8080/api/hotels");
  return (
    <div className="Catalogo">
      {data?.map((hotel) => (
        <section key={hotel.id}>
          <section>
            <p>{hotel.name}</p>
            <svg
              width="46"
              height="41"
              viewBox="0 0 46 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.4167 4.60415C40.3527 3.53958 39.0893 2.69508 37.6987 2.11891C36.3082 1.54274 34.8178 1.24619 33.3126 1.24619C31.8074 1.24619 30.317 1.54274 28.9264 2.11891C27.5359 2.69508 26.2725 3.53958 25.2084 4.60415L23.0001 6.81249L20.7918 4.60415C18.6424 2.4548 15.7272 1.2473 12.6876 1.2473C9.64793 1.2473 6.73278 2.4548 4.58342 4.60415C2.43406 6.75351 1.22656 9.66867 1.22656 12.7083C1.22656 15.748 2.43406 18.6631 4.58342 20.8125L6.79175 23.0208L23.0001 39.2291L39.2084 23.0208L41.4167 20.8125C42.4813 19.7484 43.3258 18.485 43.902 17.0945C44.4782 15.7039 44.7747 14.2135 44.7747 12.7083C44.7747 11.2031 44.4782 9.7127 43.902 8.32216C43.3258 6.93162 42.4813 5.66823 41.4167 4.60415Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </section>
          <img src={hotel.photoUrl} alt={hotel.name}></img>
          <p>{hotel.description}</p>
          <p>{hotel.pricePerNight}</p>
        </section>
      ))}
    </div>
  );
};
