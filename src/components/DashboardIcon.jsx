
import { motion } from 'framer-motion';

const ShoeCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src="path_to_shoe_image"
        alt="Shoe"
        className="w-32 h-auto mb-4"
      />
      <h2 className="text-xl font-semibold">Nike Air Max</h2>
      <p className="text-gray-500">Mens Running Shoe</p>
      <button className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ShoeCard;
