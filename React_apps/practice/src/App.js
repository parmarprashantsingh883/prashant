import Card from "./components/Card";

const App = () => {
 
  return (
    <>
    <div className="parent">
      <Card 
      title="laptop"
      description="Powerful laptop with 16GB RAM and 512GB SSD."
       buttonText="Buy Now"
       img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuaWqDZxP5nbQaFnugT06LWjBaI_50XUrfA&s"
       />
        <Card 
      title="phone"
      description="Powerful phone with 8GB RAM and 128GB Storage."
       buttonText="Buy Now"
       img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3agUX-jsrVyL4_-JOESngaNZNFxvmWzpWg&s"
       />
       <Card 
      title="phone"
      description="Powerful phone with 8GB RAM and 128GB Storage."
       buttonText="Buy Now"
       img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3agUX-jsrVyL4_-JOESngaNZNFxvmWzpWg&s"
       />
     
    </div>
      </>
  );
};

export default App;
