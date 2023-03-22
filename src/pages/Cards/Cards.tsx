import { pageAnimation } from '../../animates/animates';
import { motion } from 'framer-motion';
import { CardsWrapper } from '../../components/CardsWrapper';
import { SearchBar } from '../../components/SearchBar';

export const Cards = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <SearchBar />
      <CardsWrapper />
    </motion.div>
  );
};
