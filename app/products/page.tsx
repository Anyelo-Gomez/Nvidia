import CardProducts from "../components/CardProducts";

const getDatos = async () => {
  const res = await fetch(`${process.env.DB_HOST}/products`);
  return res.json();
};

type Props = {
  title: string;
  id: number;
  image: string;
  price: string;
};

export default async function Products() {
  const data = await getDatos();

  const genCard = () => {
    return data.map((item: Props) => (
      <div
        className="col-12 col-sm-6  col-lg-3 g-3 d-flex justify-content-center"
        key={item.id}
      >
        <CardProducts
          key={`${item.id}`}
          title={item.title}
          image={item.image}
          price={item.price}
        ></CardProducts>
      </div>
    ));
  };

  return (
    <main className="container mt-5">
      <section className="container">
        <div className="row d-flex justify-content-center">{genCard()}</div>
      </section>
    </main>
  );
}
