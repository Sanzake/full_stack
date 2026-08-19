import mongoose from "mongoose";

await mongoose.connect(
	"mongodb+srv://danhab20_db_user:1234@cluster0.nbbanfp.mongodb.net/pabam",
);
console.log("DB connected!");

const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, min: 0 },
});

const Product = mongoose.model("Product", productSchema);

const createProduct = async ({ productName, productPrice }) => {
	try {
		const newProduct = await Product.create({
			name: productName,
			price: productPrice,
		});
		console.log(newProduct._id);
	} catch (err) {
		console.log("Validation Error! Parameter name is required!\n", err);
	}
};

createProduct({ productName: "pupupu", productPrice: 322 });
createProduct({ productPrice: 322 });
