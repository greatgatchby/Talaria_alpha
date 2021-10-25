-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 25, 2021 at 02:40 PM
-- Server version: 5.7.31
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `talaria`
--

-- --------------------------------------------------------

--
-- Table structure for table `bacs`
--

DROP TABLE IF EXISTS `bacs`;
CREATE TABLE IF NOT EXISTS `bacs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(200) DEFAULT NULL,
  `city` varchar(256) DEFAULT NULL,
  `country` varchar(3) DEFAULT NULL,
  `postcode` varchar(9) NOT NULL,
  `sort_code` varchar(8) NOT NULL,
  `account_number` varchar(9) NOT NULL,
  `billingid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `billing`
--

DROP TABLE IF EXISTS `billing`;
CREATE TABLE IF NOT EXISTS `billing` (
  `billingid` int(11) NOT NULL AUTO_INCREMENT,
  `billing_type` varchar(8) NOT NULL,
  `userid` int(11) DEFAULT NULL,
  PRIMARY KEY (`billingid`),
  UNIQUE KEY `Billing_billingid_uindex` (`billingid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `consignment`
--

DROP TABLE IF EXISTS `consignment`;
CREATE TABLE IF NOT EXISTS `consignment` (
  `consignmentid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(22) NOT NULL,
  `item_name` varchar(999) NOT NULL,
  `item_size` varchar(7) DEFAULT NULL,
  `asking_price` float NOT NULL,
  `policyid` int(11) DEFAULT NULL,
  `date_consigned` datetime DEFAULT NULL,
  `date_sold` datetime DEFAULT NULL,
  `status_code` varchar(99) NOT NULL,
  `venue` int(11) DEFAULT NULL,
  `merchantid` int(11) DEFAULT NULL,
  `item_unit` varchar(99) DEFAULT NULL,
  UNIQUE KEY `consignment_consignmentid_uindex` (`consignmentid`),
  KEY `consignment_user_userid_fk` (`userid`),
  KEY `policyid` (`policyid`),
  KEY `consignment_merchant_merchantid_fk` (`merchantid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `iban`
--

DROP TABLE IF EXISTS `iban`;
CREATE TABLE IF NOT EXISTS `iban` (
  `billingid` int(11) DEFAULT NULL,
  `iban` varchar(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ibans`
--

DROP TABLE IF EXISTS `ibans`;
CREATE TABLE IF NOT EXISTS `ibans` (
  `billingid` int(11) NOT NULL,
  `iban` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`billingid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `intake`
--

DROP TABLE IF EXISTS `intake`;
CREATE TABLE IF NOT EXISTS `intake` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `updatedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `intake_type` varchar(22) DEFAULT NULL,
  `consignmentid` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `merchantid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `intake_consignmentid_uindex` (`consignmentid`),
  UNIQUE KEY `intake_intakeid_uindex` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `intakes`
--

DROP TABLE IF EXISTS `intakes`;
CREATE TABLE IF NOT EXISTS `intakes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `consignmentid` varchar(255) DEFAULT NULL,
  `intake_type` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `intake_shipped`
--

DROP TABLE IF EXISTS `intake_shipped`;
CREATE TABLE IF NOT EXISTS `intake_shipped` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `intakeid` int(11) DEFAULT NULL,
  `venueid` int(11) DEFAULT NULL,
  `trackingid` int(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `merchants`
--

DROP TABLE IF EXISTS `merchants`;
CREATE TABLE IF NOT EXISTS `merchants` (
  `merchantid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(256) NOT NULL,
  PRIMARY KEY (`merchantid`),
  UNIQUE KEY `Merchant_merchantid_uindex` (`merchantid`),
  UNIQUE KEY `merchant_userid_uindex` (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `paypal`
--

DROP TABLE IF EXISTS `paypal`;
CREATE TABLE IF NOT EXISTS `paypal` (
  `billingid` int(11) NOT NULL AUTO_INCREMENT,
  `paypal_email` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`billingid`),
  UNIQUE KEY `paypal_billingid_uindex` (`billingid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
CREATE TABLE IF NOT EXISTS `photo` (
  `photo_address` int(11) NOT NULL,
  `consignmentid` int(11) NOT NULL,
  PRIMARY KEY (`photo_address`),
  KEY `photo_consignment_consignmentid_fk` (`consignmentid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `policy`
--

DROP TABLE IF EXISTS `policy`;
CREATE TABLE IF NOT EXISTS `policy` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) DEFAULT NULL,
  `policyTerms` varchar(255) DEFAULT NULL,
  `policyRate` float DEFAULT NULL,
  `policyName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `policys`
--

DROP TABLE IF EXISTS `policys`;
CREATE TABLE IF NOT EXISTS `policys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `policyNumber` varchar(5) DEFAULT NULL,
  `policyRate` float NOT NULL,
  `policyName` varchar(300) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `policyTerms` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
CREATE TABLE IF NOT EXISTS `staff` (
  `staffid` int(11) NOT NULL AUTO_INCREMENT,
  `merchantid` varchar(36) NOT NULL,
  `email` varchar(254) NOT NULL,
  `userid` int(11) DEFAULT NULL,
  `permissions` json DEFAULT NULL,
  PRIMARY KEY (`staffid`),
  UNIQUE KEY `Staff_staffid_uindex` (`staffid`),
  KEY `staff_merchant_merchantid_fk` (`merchantid`),
  KEY `staff_user_userid_email_fk` (`userid`,`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transfer`
--

DROP TABLE IF EXISTS `transfer`;
CREATE TABLE IF NOT EXISTS `transfer` (
  `transferid` int(11) NOT NULL AUTO_INCREMENT,
  `consignmentid` int(11) NOT NULL,
  `sender_billing_id` int(11) NOT NULL,
  `recipient_billing_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `merchantid` int(11) NOT NULL,
  PRIMARY KEY (`transferid`),
  UNIQUE KEY `transfer_transferid_uindex` (`transferid`),
  KEY `transfer_consignment_consignmentid_fk` (`consignmentid`),
  KEY `merchantid` (`merchantid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `email` varchar(254) NOT NULL,
  `firstname` varchar(254) NOT NULL,
  `lastname` varchar(254) NOT NULL,
  `password` varchar(256) NOT NULL,
  `userType` varchar(14) DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `userid` varchar(99) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
CREATE TABLE IF NOT EXISTS `vendor` (
  `vendorid` int(11) NOT NULL AUTO_INCREMENT,
  `phoneNumber` varchar(15) DEFAULT NULL,
  `address` varchar(999) DEFAULT NULL,
  `country` varchar(2) DEFAULT NULL,
  `postcode` varchar(20) DEFAULT NULL,
  `division` varchar(999) DEFAULT NULL,
  `userid` varchar(99) DEFAULT NULL,
  `merchantid` int(11) NOT NULL DEFAULT '123',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  UNIQUE KEY `vendor_vendorid_uindex` (`vendorid`),
  UNIQUE KEY `vendor_phone_uindex` (`phoneNumber`),
  KEY `vendor_user_userid_fk` (`userid`),
  KEY `vendor_merchant_merchantid_fk` (`merchantid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `venue`
--

DROP TABLE IF EXISTS `venue`;
CREATE TABLE IF NOT EXISTS `venue` (
  `venueid` int(11) NOT NULL AUTO_INCREMENT,
  `venueName` varchar(254) DEFAULT NULL,
  `venuetype` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`venueid`),
  UNIQUE KEY `venue_venueid_uindex` (`venueid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `venue_online`
--

DROP TABLE IF EXISTS `venue_online`;
CREATE TABLE IF NOT EXISTS `venue_online` (
  `venueid` int(11) NOT NULL,
  `accessToken` varchar(255) DEFAULT NULL,
  `userid` int(99) DEFAULT NULL,
  `type` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`venueid`),
  UNIQUE KEY `venue_online_venueid_uindex` (`venueid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `venue_physical`
--

DROP TABLE IF EXISTS `venue_physical`;
CREATE TABLE IF NOT EXISTS `venue_physical` (
  `venueid` int(11) NOT NULL,
  `address` varchar(254) DEFAULT NULL,
  `postcode` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`venueid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
