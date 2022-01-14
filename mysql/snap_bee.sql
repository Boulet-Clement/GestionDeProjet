-- MySQL Script generated by MySQL Workbench
-- Fri Jan 14 17:10:30 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema spap_bee
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema spap_bee
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `spap_bee` DEFAULT CHARACTER SET utf8 ;
USE `spap_bee` ;

-- -----------------------------------------------------
-- Table `spap_bee`.`descition`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spap_bee`.`descition` (
  `id_catalogue` INT NOT NULL,
  `nom_latin` VARCHAR(45) NULL,
  `nom_français` VARCHAR(45) NULL,
  `nectar` VARCHAR(45) NULL,
  `miellat` VARCHAR(45) NULL,
  `floraison_couleur` VARCHAR(45) NULL,
  `emplacements_jardin` VARCHAR(45) NULL,
  `photos` VARCHAR(45) NULL,
  `latitude` FLOAT NULL,
  `longitude` FLOAT NULL,
  PRIMARY KEY (`id_catalogue`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spap_bee`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spap_bee`.`user` (
  `id_user` INT NOT NULL,
  `ursername` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `role` BINARY NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
