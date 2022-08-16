CREATE DATABASE  IF NOT EXISTS `pucciapi`;
USE `pucciapi`;

DROP TABLE IF EXISTS `tbl_carts`;
DROP TABLE IF EXISTS `tbl_orders_purchase_list`;
DROP TABLE IF EXISTS `tbl_orders`;
DROP TABLE IF EXISTS `tbl_products`;
DROP TABLE IF EXISTS `tbl_user_roles`;
DROP TABLE IF EXISTS `tbl_roles`;
DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE `tbl_users` (
  `user_id` int(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL UNIQUE,
  `name` varchar(50) DEFAULT NULL,
  `sign_in_type` varchar(50) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL UNIQUE,
  `verification_code` varchar(64) DEFAULT NULL,
  `enabled` BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (`user_id`)
);


CREATE TABLE `tbl_roles` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
);


CREATE TABLE `tbl_user_roles` (
  `user_id` int(20) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`)
);


CREATE TABLE `tbl_products` (
  `product_id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `price` decimal(11, 2) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
);


CREATE TABLE `tbl_orders` (
  `order_id` int(20) NOT NULL AUTO_INCREMENT,
  `created_on` datetime DEFAULT NULL,
  `purchase_total` float(11, 2) DEFAULT NULL,
  `purchase_list` int(11) default null,
  `user_id` int(20) NOT NULL,
  PRIMARY KEY (`order_id`)
);

create table `tbl_orders_purchase_list` (
	`order_order_id` int(20) NOT NULL,
    `purchase_list_product_id` int(20) NOT NULL,
    PRIMARY KEY(`order_order_id`, `purchase_list_product_id`)
);


CREATE TABLE `tbl_carts` (
  `user_id` int(20) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT 1,
  PRIMARY KEY (`user_id`, `product_id`)
);

INSERT INTO tbl_roles(name) VALUES('ROLE_USER');
INSERT INTO tbl_roles(name) VALUES('ROLE_ADMIN');
-- INSERT INTO tbl_products(name, price) VALUES('puppy sweater', '2.49');
-- INSERT INTO tbl_products(name, price) VALUES('dog leash', '3.50');