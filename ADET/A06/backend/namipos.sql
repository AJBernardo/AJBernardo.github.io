-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2025 at 07:44 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `namipos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(6) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `name`) VALUES
(1, 'Nigiri & Sashimi'),
(2, 'Gunkan'),
(3, 'Maki'),
(4, 'Our Rolls'),
(5, 'Drinks & Desserts');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(2) NOT NULL,
  `itemName` varchar(200) NOT NULL,
  `itemCode` varchar(20) NOT NULL,
  `itemPrice` float(11,2) NOT NULL,
  `itemPicture` varchar(200) NOT NULL,
  `isAvailable` varchar(5) NOT NULL DEFAULT 'TRUE',
  `quantityOrdered` int(11) NOT NULL DEFAULT 0,
  `categoryID` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `itemName`, `itemCode`, `itemPrice`, `itemPicture`, `isAvailable`, `quantityOrdered`, `categoryID`) VALUES
(1, 'Salmon Nigiri (2 PCS)', 'SLMNGR', 180.00, 'salmon_nigiri', '1', 0, 1),
(2, 'Tuna Nigiri (2 PCS)', 'TNANGR', 180.00, 'tuna_nigiri', '1', 0, 1),
(3, 'Unagi Nigiri (2 PCS)', 'UGINGR', 240.00, 'unagi_nigiri', '1', 0, 1),
(4, 'Ebi Nigiri (2 PCS)', 'EBINGR', 165.00, 'ebi_nigiri', '1', 0, 1),
(5, 'Ika Nigiri (2 PCS)', 'IKANGR', 150.00, 'ika_nigiri', '1', 0, 1),
(6, 'Tamago Nigiri (2 PCS)', 'TMGNGR', 120.00, 'tamago_nigiri', '1', 0, 1),
(7, 'Assorted Nigiri', 'ASRNGR', 290.00, 'assorted_nigiri', '1', 0, 1),
(8, 'Nigiri Platter (24 PCS)', 'NGRPTR', 1190.00, 'platter_nigiri', '1', 0, 1),
(9, 'Salmon Sashimi (6 PCS)', 'SALSHM', 390.00, 'salmon_sashimi', '1', 0, 1),
(10, 'Tuna Sashimi (6 PCS)', 'TNASHM', 370.00, 'tuna_sashimi', '1', 0, 1),
(11, 'Salmon Avocado Gunkan (2 PCS)', 'SLMAVGK', 190.00, 'salmonavocado_gunkan', '1', 0, 2),
(12, 'Uni Gunkan (2 PCS)', 'UGIGK', 220.00, 'uni_gunkan', '1', 0, 2),
(13, 'Spicy Tuna Gunkan (2 PCS)', 'SPTNAGK', 180.00, 'spicytuna_gunkan', '1', 0, 2),
(14, 'Spicy Tempura Gunkan (2 PCS)', 'SPTMPGK', 150.00, 'spicytempura_gunkan', '1', 0, 2),
(15, 'Kimchi Salmon Gunkan (2 PCS)', 'KMSLMGK', 190.00, 'kimchisalmon_gunkan', '1', 0, 2),
(16, 'Salmon Cucumber Gunkan(6 PCS)', 'SLMCCGK', 190.00, 'salmoncucumber_gunkan', '1', 0, 2),
(17, 'Philadelphia Maki (8 PCS)', 'PHLMK', 330.00, 'philadelphia_maki', '1', 0, 3),
(18, 'California Maki (8 PCS)', 'CALMK', 290.00, 'california_maki', '1', 0, 3),
(19, 'Creamy Tempura Maki (8 PCS)', 'CRTMPMK', 360.00, 'creamytempura_maki', '1', 0, 3),
(20, 'Spicy Tuna Maki (8 PCS)', 'SPTNAMK', 390.00, 'spicytuna_maki', '1', 0, 3),
(21, 'Tempura Maki (8 PCS)', 'TMPMK', 270.00, 'tempura_maki', '1', 0, 3),
(22, 'Salmon Avocado Maki (8 PCS)', 'SLMAVMK', 330.00, 'salmonavocado_maki', '1', 0, 3),
(23, 'Soft-Shell Crab Maki (8 PCS)', 'SSCRBMK', 360.00, 'softshellcrab_maki', '1', 0, 3),
(24, 'Beef Truffle Maki (8 PCS)', 'BTRFLMK', 390.00, 'beeftruffle_maki', '1', 0, 3),
(25, 'Salmon Skin Maki (8 PCS)', 'SLMSKMK', 310.00, 'salmonskin_maki', '1', 0, 3),
(26, 'Dynamite Roll (8 PCS)', 'DYNRLL', 390.00, 'dynamite_roll', '1', 0, 4),
(27, 'Umi Roll (8 PCS)', 'UMIRLL', 550.00, 'umi_roll', '1', 0, 4),
(28, 'Tuna Roll (8 PCS)', 'TNARLL', 360.00, 'tuna_roll', '1', 0, 4),
(29, 'Spicy Salmon Roll (8 PCS)', 'SPSLMRLL', 330.00, 'spicysalmon_roll', '1', 0, 4),
(30, 'Dragon Roll (8 PCS)', 'DRGRLL', 360.00, 'dragon_roll', '1', 0, 4),
(31, 'Pink Roll (8 PCS)', 'PNKRLL', 360.00, 'pink_roll', '1', 0, 4),
(32, 'Kamikaze Roll (6 PCS)', 'KMKZRLL', 330.00, 'kamikaze_roll', '1', 0, 4),
(33, 'Green Tea', 'GRNTEA', 80.00, 'greentea', '1', 0, 5),
(34, 'Ice Matcha Latte', 'ICMTCL', 150.00, 'icematcha_latte', '1', 0, 5),
(35, 'Ramune Soda', 'RMNSDA', 120.00, 'ramune_soda', '1', 0, 5),
(36, 'Sake (HOT/COLD)', 'SAKE', 250.00, 'sake', '1', 0, 5),
(37, 'Asahi Beer', 'ASHBER', 180.00, 'beer', '1', 0, 5),
(38, 'Mochi Ice Cream', 'MCHICCR', 100.00, 'icecream_mochi', '1', 0, 5),
(39, 'Dorayaki', 'DRAYKI', 120.00, 'dorayaki', '1', 0, 5),
(40, 'Japanese Cheesecake', 'JPCHCK', 180.00, 'classic_cheesecake', '1', 0, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
