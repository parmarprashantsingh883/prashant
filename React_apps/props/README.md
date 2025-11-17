🔥 useState With Arrays & Objects — MASTER GUIDE (Deep Explanation)

React's useState behaves differently with arrays and objects because both are reference types.
This means:

🚨 React does NOT detect changes if you mutate (modify) an array or object directly.
🚨 You MUST update them immutably (create a new copy).

🟦 PART 1 — useState With OBJECTS
🧠 What is an object state?

When a component needs to store multiple related values, use an object.

Example:

const [user, setUser] = useState({
  name: "Prashant",
  age: 22,
  city: "Mumbai",
});

🟩 RULE #1 — NEVER mutate object state

❌ Wrong:

user.age = 23;
setUser(user);


React will NOT re-render because the reference didn’t change.

🟩 RULE #2 — ALWAYS create a new object using spread operator

✅ Correct:

setUser({
  ...user,
  age: 23,
});

🔵 Updating a single property
setUser({
  ...user,
  name: "Rohit",
});

🔵 Updating multiple properties
setUser({
  ...user,
  age: 23,
  city: "Delhi"
});

🔵 Dynamic property update (common in forms)
const handleChange = (e) => {
  setUser({
    ...user,
    [e.target.name]: e.target.value,
  });
};


HTML:

<input name="name" onChange={handleChange} />
<input name="city" onChange={handleChange} />

🔵 Nested Objects

If an object contains another object, you must spread both levels:

Example:

const [user, setUser] = useState({
  name: "Prashant",
  address: {
    city: "Mumbai",
    pincode: 400001,
  }
});

❌ Wrong:
setUser({
  ...user,
  address: { city: "Delhi" }
});


➡️ You LOST pincode property.

✅ Correct:
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Delhi"
  }
});

🟥 PART 2 — useState With ARRAYS

Arrays store lists, like:

Cart items

Todo list

Comments

Notifications

Users list

Example:

const [items, setItems] = useState(["Pen", "Pencil"]);

🟩 RULE #1 — NEVER mutate array directly

❌ Wrong:

items.push("Book");
setItems(items);


Fails because the reference remains same.

🟩 RULE #2 — ALWAYS create a new array
🟢 Add item
setItems([...items, "Book"]);

🟢 Remove item

Remove by index:

setItems(items.filter((item, index) => index !== 1));


Remove by value:

setItems(items.filter(item => item !== "Pen"));

🟢 Update an item
setItems(
  items.map((item, index) =>
    index === 1 ? "Updated Item" : item
  )
);

🟧 PART 3 — Array of Objects (MOST COMMON CASE)

Example:

const [products, setProducts] = useState([
  { id: 1, name: "Shoes", price: 999 },
  { id: 2, name: "Bag", price: 699 }
]);

🔵 Add object to array
setProducts([
  ...products,
  { id: 3, name: "T-Shirt", price: 499 }
]);

🔵 Remove object
setProducts(products.filter(p => p.id !== 2));

🔵 Update a specific object
setProducts(
  products.map(p =>
    p.id === 2 ? { ...p, price: 799 } : p
  )
);

🔵 Toggle boolean inside object
setProducts(
  products.map(p =>
    p.id === 1 ? { ...p, inStock: !p.inStock } : p
  )
);

🟩 PART 4 — REAL WORLD EXAMPLE (Todo List)
const [todos, setTodos] = useState([]);

const addTodo = () => {
  setTodos([
    ...todos,
    { id: Date.now(), text: "New Task", completed: false }
  ]);
};

const toggleTodo = (id) => {
  setTodos(
    todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

🟦 PART 5 — When to Use Array or Object?
✔️ Use object when:

Storing multiple related values

Form data

User profile

Settings

✔️ Use array when:

List of multiple items

Todo list

Cart

Users list

Notifications

✔️ Use array of objects when:

Each item has many properties

Example: e-commerce products, students list, orders list

🟩 SUPER SUMMARY (IMPORTANT)
🔹 React does NOT auto-merge arrays/objects
🔹 Always use immutable updates
🔹 Objects → { ...old, property: new }
🔹 Arrays → map() / filter() / [...old, newItem]
🔹 Never mutate directly (push, pop, splice, etc.)