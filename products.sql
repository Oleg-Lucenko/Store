-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: products
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Headphones`
--

DROP TABLE IF EXISTS `Headphones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Headphones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `img_path` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Headphones`
--

LOCK TABLES `Headphones` WRITE;
/*!40000 ALTER TABLE `Headphones` DISABLE KEYS */;
INSERT INTO `Headphones` VALUES (1,'JBL Tune Flex True Wireless','../img/JBL_Tune_Flex_True_Wireless_Bluetooth_noise-cancelling_headphones.jpeg','JBL Pure Bass Sound. Active Noise Cancelling with Smart. Ambient. 4 mics for perfect calls. Up to 32 hours of battery life. Water resistant & sweatproof. All-day fit & comfort.',73.85),(2,'Micro Logitech Headset H540',' ../img/Micro_Logitech_Headset_H540.jpeg','Plug into high-performance audio for PC calls, music and more with this USB headset. Simply insert the USB and instantaneously experience crisp, digital stereo and crystal-clear calls. Includes laser-tuned drivers and a built-in equalizer.',27.99),(3,'Huawei FreeBuds Pro True Wireless Headphones',' ../img/Huawei_FreeBuds_Pro_True_Wireless_Headphones.jpeg','Active noise cancellatioand. Charging time about 40 minutes, rated battery life up to 4 Hours. Just a long press, you can switch to awareness mode and reconnect with your surroundings. Combines a 3-mic system and the bone voice sensor.',196.50),(4,'OPPO Enco Buds2 Pro','../img/OPPO_Enco_Buds2_Pro.jpeg','Sound Master EQ & Dolby Atmos. 12.4mm Extra large drivers. Up to 38 hours battery life (Buds: Up to 8 hours playback, plus 30 hours in the case.). IP55 Water and sweat resistance. Dual Mics and AI Clear Call. Wind-noise control design.',45.00),(5,'JBL Tune 770NC','../img/JBL_Tune_770NC.jpeg','Adaptive Noise Cancelling with Smart Ambient. JBL Pure Bass Sound. Customize your listening experience. Hands-free calls with VoiceAware. Multi-Point connection. Built-in Microphone. USB Type-C.',95.77),(6,'Sennheiser Momentum True Wireless 4','../img/Sennheiser_Momentum_True_Wireless_4.jpeg','Up to 30 hours playtime with new battery system. Adjustable Adaptive Noise Cancellation. Sound personalization and EQ modes. Auracast Technology. Assembled Product Dimensions (L x W x H) 3.00 x 7.00 x 4.33 Inches.es.',521.46);
/*!40000 ALTER TABLE `Headphones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Laptops`
--

DROP TABLE IF EXISTS `Laptops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Laptops` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `img_path` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Laptops`
--

LOCK TABLES `Laptops` WRITE;
/*!40000 ALTER TABLE `Laptops` DISABLE KEYS */;
INSERT INTO `Laptops` VALUES (1,'Lenovo IdeaPad Slim 3 14','../img/Lenovo_IdeaPad_Slim_3_14.jpeg','14 Full HD (1920 x 1080) TN display Intel core i5-12450H, 8 core processor (1.4 - 4.4GHz), 512GB SSD storage, 8GB RAM, Intel UHD graphics. It has 1 HDMI port, 2 USB 3.2 ports, 1 USB-C 3.2 port',657.45),(2,'Lenovo ThinkPad T14 Gen 5 14','../img/lenovo_14_ThinkPad_T14s_Gen_5.jpeg','14\" HD (1366 x 768) 60Hz TN display, Intel Core Celeron N4500 Dual core processor (1.1 - 2.8GHz), 128GB eMMC Storage with 4GB RAM, Intel UHD graphics, 1 x HDMI port, 1 USB 2.0 port, 1 USB 3.2 port',1370.99),(3,'Apple Macbook 13 Air','../img/apple_macbook_13_air_m2.jpeg','13.6\" Liquid Retina display with True Tone. Integrated 1080p FaceTime HD webcam. Touch ID. Backlit Magic Keyboard. Two Thunderbolt 3/USB 4 ports. Apple M2 8-Core processor. RAM 8GB unified memory.',565.34),(4,'Acer Predator Helios 18','../img/acer-predator-helios-18.jpeg','Screen Resolution 2560x1600. Processor Intel Core i9 with a speed of 1.6 GHz and 24 cores, processor model 14900HX. RAM 32 GB. Connections: RJ45 (LAN), USB-C, USB-A, 1/8\" Headphone Jack, HDMI.',3293.80),(5,'ASUS Vivibook S 15,6','../img/ASUS_Vivibook_S_15,6_32.jpeg','Display 15.6 3K OLED (2880 x 1620) 16:9 120Hz NanoEdge display. Processor Intel Ultra 7-155H 1.4 GHz (24MB Cache, up to 4.8G GHz, 16 Cores, 22 Threads). Memory 16GB LPDDR5X RAM. Storage 1TB PCIE G4 SSD.',805.46),(6,'ASUS ROG Zephyrus G14','../img/ASUS_ROG_Zephyrus_G14.jpeg','AMD Ryzen 7 5800HS Processor and NVIDIA GeForce RTX 3060 6GB GDDR6 Graphics. Standing screen display size	‎14 Inches. Screen Resolution ‎1920 x 1080 pixels. 16GB Memory. Memory Speed ‎3200 MHz. RAM ‎16 GB. 100% sRGB Pantone Display',1490.00);
/*!40000 ALTER TABLE `Laptops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Smartphones`
--

DROP TABLE IF EXISTS `Smartphones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Smartphones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `img_path` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Smartphones`
--

LOCK TABLES `Smartphones` WRITE;
/*!40000 ALTER TABLE `Smartphones` DISABLE KEYS */;
INSERT INTO `Smartphones` VALUES (1,'Samsung Galaxy A05s','../img/samsung_galaxy_a05s.jpeg','The Samsung Galaxy A05s is a Dual SIM smartphone with 64GB of storage and 4GB of RAM, a 6.7-inch PLS LCD screen at 90Hz, 50+2+2MP rear cameras and 13MP front camera, Qualcomm Snapdragon 680 4G processor and 5000mAh battery with fast charging at 25W25W',140.35),(2,'Samsung Galaxy S21','../img/Samsung_Galaxy_S21.jpeg','Galaxy S21 256GB has a generous 6.8 AMOLED display with a 1440x3200 resolution. The model runs on a 2.9 GHz Samsung Exynos 2100 processor. Equipped with 4 108 MP cameras. Galaxy S21 256GB offers a generous display and top-tier performance.',312.74),(3,'Apple iphone 13','../img/Apple_iphone_13.jpeg','The iPhone 13 512GB of storage has 5G technology, 6.1-inch Super Retina XDR OLED screen with a resolution of 1170x2532 pixels, 12+12MP rear cameras and 12MP front camera, Apple A15 Bionic processor and 3240mAh battery.',305.40),(4,'Apple iphone 16 Pro','../img/AppleiPhone_16_Pro.jpeg','iPhone 16 Pro has 6.3-inch Super Retina XDR display with a resolution of 1206x2622 pixels at 120Hz. Processor A18 pro. Internal Memory Size 256GB. Battery Capacity 3582 mAh. Camera Resolution (front) 12.0 MP.',925.57),(5,'Xiaomi Redmi A3','../img/Xiaomi_Redmi_A3.jpeg','The Redmi A3 is a Dual SIM smartphone with 128GB of storage and 4GB of RAM, 6.71-inch IPS LCD display at 90Hz, 8+0.3MP rear cameras and 5MP front camera, Mediatek Helio G36 processor and 5000mAh battery with 10W fast charge.',114.55),(6,'Xiaomi Redmi Note 14','../img/Xiaomi_Redmi_Note_14.jpeg','The Redmi Note 14 5G is a Dual SIM smartphone. 256GB storage and 8GB of RAM, 6.67-inch AMOLED screen at 120Hz, 200+8+2MP rear cameras and 20MP front camera, Qualcomm Snapdragon 7s Gen 3 processor and 5110mAh battery compatible with 120W fast charge.',207.20);
/*!40000 ALTER TABLE `Smartphones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-09 16:58:27
