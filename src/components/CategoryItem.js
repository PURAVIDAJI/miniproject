const CategoryItem = ({
    category_id,
    category_img,
    category_description,
    onClick,
    isSelected }) => {
    return (
        <div onClick={() => onClick(category_id)} className={["CategoryItem",
            isSelected ? `CategoryItem_on_${category_id}` : `CategoryItem_off`].join(" ")}>
            <img src={category_img} />
            <span>{category_description}</span>

        </div>
    );

};

export default CategoryItem;