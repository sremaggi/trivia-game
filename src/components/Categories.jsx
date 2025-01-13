import React from "react";

const Categories = ({ categories, onSelectCategory }) => {
    return (
        <div>
            <h2 className="text-2xl font-extralight mb-4 text-center">
                Choose a Category
            </h2>
            <ul className="grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-4">
                {categories.map((category) => (
                    <li
                        key={category.id}
                        onClick={() => onSelectCategory(category.id)}
                        className="bg-slate-700/20 text-white p-2 rounded-lg shadow hover:bg-blue-700 cursor-pointer flex justify-center text-center items-center text-xs lg:text-xl"
                    >
                        {/* Remove "Entertainment:" from category name */}
                        {category.name.replace("Entertainment: ", "")}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
