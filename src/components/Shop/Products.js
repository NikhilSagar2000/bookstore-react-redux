import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = [
    {
      id: "p1",
      price: 6,
      title: "React.js Book",
      description: "Learn Basics To Advance of React.",
    },
    {
      id: "p2",
      price: 5,
      title: "JavaScript Book",
      description: "All you need to know about JavaScript",
    },
    {
      id: "p3",
      price: 7,
      title: "HTML & CSS Book",
      description: "Make Cool Website Designs.",
    },
    {
      id: "p4",
      price: 10,
      title: "Node.js Book",
      description: "JavaScript Outside The Browser",
    }
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite books</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
