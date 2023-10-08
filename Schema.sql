-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema myRentingDatabase
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema myRentingDatabase
-- -----------------------------------------------------
DROP DATABASE IF EXISTS myRentingDatabase;
CREATE SCHEMA IF NOT EXISTS `myRentingDatabase` DEFAULT CHARACTER SET utf8 ;
USE `myRentingDatabase` ;

-- -----------------------------------------------------
-- Table `myRentingDatabase`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myRentingDatabase`.`users` (
  `users_id` INT NOT NULL AUTO_INCREMENT,
  `users_FirstName` VARCHAR(45) NOT NULL,
  `users_LastName` VARCHAR(45) NOT NULL,
  `users_email` VARCHAR(45) NOT NULL,
  `users_password` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`users_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myRentingDatabase`.`Home`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myRentingDatabase`.`Home` (
  `Home_id` INT NOT NULL AUTO_INCREMENT,
  `Home_City` VARCHAR(45) NULL,
  `Home_Governorate` VARCHAR(45) NULL,
  `Home_Nature` VARCHAR(45) NULL,
  `Home_Type` VARCHAR(45) NULL,
  `users_users_id` INT NOT NULL,
  PRIMARY KEY (`Home_id`),
  INDEX `fk_Home_users_idx` (`users_users_id` ASC) VISIBLE,
  CONSTRAINT `fk_Home_users`
    FOREIGN KEY (`users_users_id`)
    REFERENCES `myRentingDatabase`.`users` (`users_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myRentingDatabase`.`HomeImages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myRentingDatabase`.`HomeImages` (
  `HomeImages_id` INT NOT NULL AUTO_INCREMENT,
  `HomeImages_data` LONGBLOB NOT NULL,
  `Home_Home_id` INT NOT NULL,
  PRIMARY KEY (`HomeImages_id`),
  INDEX `fk_HomeImages_Home1_idx` (`Home_Home_id` ASC) VISIBLE,
  CONSTRAINT `fk_HomeImages_Home1`
    FOREIGN KEY (`Home_Home_id`)
    REFERENCES `myRentingDatabase`.`Home` (`Home_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
