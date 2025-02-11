import { motion } from "framer-motion";
const HeaderTitle = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1 }}
      className="pt-[60px] pb-[30px] md:pt-[120px] md:pb-[60px]"
    >
      <h2 className="text-[28px] font-semibold md:text-[48px] md:font-bold text-center">
        {title}
      </h2>
      <p className="text-[12px] md:text-[18px] font-normal text-center pt-[10px] md:pt-[16px]">
        {description}
      </p>
    </motion.div>
  );
};

export default HeaderTitle;
