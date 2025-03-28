import { useState } from "react";

const Todo = () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const[error,setError] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleAddItem = () => {
        const newTask = input.trim();

        if (!newTask){
            setError("Task cannot be empty!");
            return;
        } 

        if (items.includes(newTask)){
            setError("Task already exists!")
            return;
        };

        if (input.trim()) {
            setItems([...items, newTask]);
            setError("")
            setInput(""); // Clear input after adding
        }
    };

    const handleDeleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 p-6">
            <div className="bg-white shadow-lg rounded-3xl p-8 max-w-lg w-full">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">📝 Todo List</h1>

                {/* Input & Button */}
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={input}
                        placeholder="What needs to be done?"
                        onChange={handleChange}
                        className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        onClick={handleAddItem}
                        className="bg-indigo-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all"
                    >
                        Add
                    </button>
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                {/* Todo List */}
                <ul className="space-y-3">
                    {items.length === 0 ? (
                        <p className="text-gray-500 text-center">No tasks yet. Start adding!</p>
                    ) : (
                        items.map((item, index) => (
                            <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-xl shadow-md">
                                <span className="text-gray-700">{item}</span>
                                <button
                                    onClick={() => handleDeleteItem(index)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all"
                                >
                                    Delete
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
