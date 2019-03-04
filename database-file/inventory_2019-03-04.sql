# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 18.191.253.119 (MySQL 5.6.43)
# Database: inventory
# Generation Time: 2019-03-04 11:27:16 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `parent_category` int(11) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;

INSERT INTO `category` (`category_id`, `category_name`, `parent_category`)
VALUES
	(1,'Household',0),
	(2,'Electronics',0),
	(3,'Clothes',0),
	(4,'Shoes',0),
	(5,'Gaming',2),
	(12,'Snacks',1),
	(7,'Cleaning',1),
	(8,'Smartphone',2),
	(9,'T-shirt',3),
	(6,'Dresses',3),
	(11,'Sneakers',4),
	(13,'Iphone',8),
	(14,'Samsung Mobile',8),
	(15,'Adidas',4);

/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table category_product_mapping
# ------------------------------------------------------------

DROP TABLE IF EXISTS `category_product_mapping`;

CREATE TABLE `category_product_mapping` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`product_id`,`category_id`),
  KEY `FKpifs3a1lre9qux7vm3nq5x26l` (`category_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `category_product_mapping` WRITE;
/*!40000 ALTER TABLE `category_product_mapping` DISABLE KEYS */;

INSERT INTO `category_product_mapping` (`product_id`, `category_id`)
VALUES
	(0,0),
	(1,1),
	(1,7),
	(2,4),
	(5,2),
	(5,5),
	(6,3),
	(6,9),
	(7,2),
	(7,8),
	(7,13),
	(8,3),
	(8,6),
	(9,2),
	(10,4),
	(10,11),
	(11,1),
	(12,12),
	(13,2),
	(13,8),
	(13,14),
	(15,4),
	(15,15);

/*!40000 ALTER TABLE `category_product_mapping` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table hibernate_sequence
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hibernate_sequence`;

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;

INSERT INTO `hibernate_sequence` (`next_val`)
VALUES
	(1);

/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;

INSERT INTO `product` (`product_id`, `product_description`, `product_name`)
VALUES
	(1,'Removes Stains','Tide'),
	(2,'Running Shoes','Adidas Runners'),
	(8,'Cotton Dress','Floral Dress'),
	(5,'Play Super Mario','Nintendo Switch'),
	(6,'Cotton Tshirt','Gucci T-shirt'),
	(7,'Apple mobile phone','Iphone X'),
	(11,'Facial Tissues','Kleenex'),
	(9,'Apple Laptop','Macbook Pro'),
	(10,'Casual Shoes','Converse shoes'),
	(12,'Chips','Lays BBQ'),
	(13,'Mobile Phone','Samsung Galaxy '),
	(15,'Running Shoes','Adidas Ultra Boost');

/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
