// src/pages/ProductDetails.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../components/ProductCard";
import { ArrowLeft } from "lucide-react";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState("1"); // Changed to string for direct input

  const allProducts = [
    {
      id: 1,
      name: "Silver Beads",
      image: "https://ik.imagekit.io/os1mzoooe/1.png?updatedAt=1751811752472",
      category: "2.0mm",
      size: "2.0mm",
      color: "SGB21",
    },
    {
      id: 3,
      name: "Milky White Beads",
      image: "https://ik.imagekit.io/os1mzoooe/2.png?updatedAt=1751577008304",
      category: "2.0mm",
      size: "2.0mm",
      color: "SGB121",
    },
    {
      id: 4,
      name: "Rose Gold Light Beads",
      image: "https://ik.imagekit.io/os1mzoooe/4.png?updatedAt=1751577008492",
      category: "2.0mm",
      size: "2.0mm",
      color: "SGB39 Light",
    },
    {
      id: 5,
      name: "Rose Gold Dark Beads",
      image: "https://ik.imagekit.io/os1mzoooe/3.png?updatedAt=1751577008317",
      category: "2.0mm",
      size: "2.0mm",
      color: "SGB39 Dark",
    },
    {
      id: 6,
      name: "Rabdi Beads",
      image: "https://ik.imagekit.io/os1mzoooe/5.png?updatedAt=1751577004245",
      category: "2.0mm",
      size: "2.0mm",
      color: "SGB16",
    },
    {
      id: 8,
      name: "Gun Metal Beads",
      image: "https://ik.imagekit.io/os1mzoooe/8.png?updatedAt=1751811751240",
      category: "2.0mm",
      size: "2.0mm",
      color: "SGB576",
    },

    {
      id: 9,
      name: "Golden Beads",
      image: "https://ik.imagekit.io/os1mzoooe/9.png?updatedAt=1751811752189",
      category: "2.0mm",
      size: "2.0mm",
      color: "SGB601",
    },
    {
      id: 10,
      name: "Black Beads",
      image: "https://ik.imagekit.io/os1mzoooe/3.png?updatedAt=1751811751969",
      category: "2.0mm",
      size: "2.0mm",
      color: "SGB49",
    },
    {
      id: 11,
      name: "Rabdi Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/Beads%202.5/1.png?updatedAt=1751973196277",
      category: "2.5mm",
      size: "2.5mm",
      color: "SGBDO16",
    },
    {
      id: 12,
      name: "Red Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/Beads%202.5/7.png?updatedAt=1751973196189",
      category: "2.5mm",
      size: "2.5mm",
      color: "SGB5",
    },
    {
      id: 13,
      name: "Milky White Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/Beads%202.5/2.png?updatedAt=1751973195888",
      category: "2.5mm",
      size: "2.5mm",
      color: "SGB121",
    },
    {
      id: 14,
      name: "Transparent Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/Beads%202.5/3.png?updatedAt=1751973195216",
      category: "2.5mm",
      size: "2.5mm",
      color: "SGB161",
    },
    {
      id: 15,
      name: "Gold Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/Beads%202.5/6.png?updatedAt=1751973196161",
      category: "2.5mm",
      size: "2.5mm",
      color: "SGB39",
    },
    {
      id: 16,
      name: "Black Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/Beads%202.5/4.png?updatedAt=1751973195652",
      category: "2.5mm",
      size: "2.5mm",
      color: "SGB49",
    },
    {
      id: 17,
      name: "Transparent Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/Beads%202.5/5.png?updatedAt=1751973195679",
      category: "2.5mm",
      size: "2.5mm",
      color: "SGB101",
    },
    {
      id: 18,
      name: "Rose Gold Light Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/Beads%202.5/9.png?updatedAt=1751973196032",
      category: "2.5mm",
      size: "2.5mm",
      color: "SGB576",
    },

    {
      id: 19,
      name: "Silver Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/Beads%202.5/8.png?updatedAt=1751973196059",
      category: "2.5mm",
      size: "2.5mm",
      color: "SGB21",
    },

    {
      id: 20,
      name: "Rose Gold Dark Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/3.8/1.png?updatedAt=1752081871961",
      category: "3.8mm",
      size: "3.8mm",
      color: "SGB39",
    },
    {
      id: 21,
      name: "Rose Gold Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/3.8/2.png?updatedAt=1752081871832",
      category: "3.8mm",
      size: "3.8mm",
      color: "SGB39",
    },
    {
      id: 22,
      name: "Gold Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/3.8/3.png?updatedAt=1752081872007",
      category: "3.8mm",
      size: "3.8mm",
      color: "SGB39",
    },
    {
      id: 23,
      name: "Silver Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/3.8/4.png?updatedAt=1752081872016",
      category: "3.8mm",
      size: "3.8mm",
      color: "SGB21",
    },
    {
      id: 24,
      name: "Milky White Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/3.8/5.png?updatedAt=1752081871889",
      category: "3.8mm",
      size: "3.8mm",
      color: "SGB101",
    },
    {
      id: 25,
      name: "Transparent Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/3.8/6.png?updatedAt=1752081871838",
      category: "3.8mm",
      size: "3.8mm",
      color: "SGB101",
    },

    {
      id: 26,
      name: "Black Beads",
      image:
        "https://ik.imagekit.io/os1mzoooe/3.8/7.png?updatedAt=1752081871900",
      category: "3.8mm",
      size: "3.8mm",
      color: "SGB21",
    },
  ];

  useEffect(() => {
    const foundProduct = allProducts.find((p) => p.id.toString() === productId);
    setProduct(foundProduct || null);
    setLoading(false);
  }, [productId]);

  const handleBuyNow = () => {
    if (!product) return;

    const qty = quantity === "" ? "1" : quantity; // Default to 1 if empty
    const message = `Hi, I want to buy this product:\n\n*${product.name}*\n• Size: ${product.size}\n• Color: ${product.color}\n• Quantity: ${qty} KG\n\nPlease let me know the price and availability.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+918828403066?text=${encodedMessage}`, "_blank");
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and empty string
    if (value === "" || /^[1-9]\d*$/.test(value)) {
      setQuantity(value);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50/80 to-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-yellow-600 hover:text-yellow-700 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2" /> Back to Products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20">
            <div className="w-full h-96 rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-yellow-600 text-lg">{product.category}</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Size</h3>
                <p className="text-gray-900">{product.size}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Color</h3>
                <p className="text-gray-900">{product.color}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Description
                </h3>
                <p className="text-gray-900">
                  Premium quality beads perfect for traditional Indian wear.
                  Each bead is carefully crafted to ensure durability and
                  aesthetic appeal.
                </p>
              </div>

              {/* Quantity Input */}
              <div className="pt-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-500"
                >
                  Quantity (KG)
                </label>
                <input
                  type="text"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="mt-1 block w-full max-w-[120px] rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-2 border"
                  placeholder="Enter quantity"
                />
                {quantity === "" && (
                  <p className="mt-1 text-sm text-gray-500">
                    Default quantity will be 1
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={handleBuyNow}
              className="mt-8 w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium py-3 px-8 rounded-2xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
