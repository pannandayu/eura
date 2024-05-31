import { motion } from "framer-motion";
import styles from "../../css/Address.module.css";

const Address: React.FC = () => {
  return (
    <motion.div
      className={styles.address}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Address</h2>
      <p>Jl. Demang Lebar Daun No.3 </p>
      <p>Ilir Barat 1, Palembang, Sumatera Selatan</p>
      <p>Telp. 0711 - 440838</p>
      <p>Fax. 0711 - 446314</p>
    </motion.div>
  );
};

export default Address;
