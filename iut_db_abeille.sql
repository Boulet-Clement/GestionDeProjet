-- Adminer 4.8.1 MySQL 5.5.5-10.6.5-MariaDB-1:10.6.5+maria~focal dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `description`;
CREATE TABLE `description` (
  `id_catalogue` int(11) NOT NULL,
  `nom_latin` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `nom_français` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `nectar` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `miellat` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `floraison` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `couleur` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `emplacements_jardin` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `photos` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  PRIMARY KEY (`id_catalogue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `description` (`id_catalogue`, `nom_latin`, `nom_français`, `nectar`, `miellat`, `floraison`, `couleur`, `emplacements_jardin`, `photos`, `latitude`, `longitude`) VALUES
(1,	'Acer campestris',	'érable champêtre',	'3',	'M',	'avril,mai',	'vert clair',	'collection historique',	'Acer_campestre.jpg',	3.456,	31.234),
(2,	'Acer pseudoplatanus',	'érable sycomore',	'2',	'',	'mai',	'jaunâtre',	'forêt',	'Acer_pseudoplatanus.jpg',	3.456,	31.234),
(3,	'Alnus glutinosa',	'aulne glutineux',	'1',	'M',	'mars,avril',	'jaune',	'étang',	'Alnus_glutinosa.jpg',	3.456,	31.234),
(4,	'Aquilegia vulgaris',	'ancolie',	'2',	'M',	'mai,juin',	'bleu',	'collection historique',	'Aquilegia_vulgaris.jpg',	3.456,	31.234),
(5,	'Asclépias syriaca',	'herbe à la ouate',	'3',	'M',	'juin,juillet,août',	'mauve',	'collection ornementale',	'',	3.456,	31.234),
(6,	'Berberis vulgaris',	'épine vinette',	'2',	'',	'juin,juillet',	'jaune',	'secteur arboretum Chine',	'',	3.456,	31.234),
(7,	'Borago officinalis',	'bourrache officinalis',	'3',	'',	'juin,juillet,août',	'bleu tendre',	'collection historique',	'',	3.456,	31.234),
(8,	'brassica arvensis',	'moutarde des champs',	'3',	'',	'juin,juillet,août',	'jaune',	'collection historique',	'',	3.456,	31.234),
(9,	'brassica arvensis',	'moutarde des champs',	'3',	'',	'juin,juillet,août',	'jaune',	'collection historique',	'',	3.456,	31.234),
(10,	'Calluna vulgaris',	'bruyère commune callune',	'2',	'',	'août,blanc',	'rose',	'secteur terre de bruyère',	'Calluna_vulgaris.jpg',	3.456,	31.234),
(11,	'Corylus colurna',	'noisetier de Bysance',	'0',	'',	'fevrier,mars',	'jaune',	'secteur arboretum Europe',	'corylus_colurna.jpg',	3.456,	31.234),
(12,	'Cotoneaster horizontalis',	'cotoneaster',	'3',	'',	'juin,juillet',	'rose',	'arboretum,secteur chine',	'cotoneaster_horizontalis.jpg',	3.456,	31.234),
(13,	'Crocus vernus',	'crocus de printemps',	'1',	'',	'fevrier,mars',	'toutes les couleurs',	'pelouses',	'crocus_vernus.jpg',	3.456,	31.234),
(14,	'Dalhia variabilis',	'dalhia CV',	'0',	'',	'juillet,août,septembre',	'toutes les couleurs',	'collection de dahlias',	'Dalhia_variabilis.jpg',	3.456,	31.234),
(15,	'Epilobium angustifolium',	'epilobe en épis',	'3',	NULL,	'juillet,août',	'rose',	'collection de dahlias',	'epilobium_angustifolium.jpg',	NULL,	NULL);

DROP TABLE IF EXISTS `partie`;
CREATE TABLE `partie` (
  `id_partie` int(11) NOT NULL,
  `id_joueur` int(11) NOT NULL,
  `pollen_ramasse` int(11) NOT NULL,
  `Pollen_valide` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL,
  `date_start` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_end` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_partie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id_user` int(45) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(256) NOT NULL,
  `role` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `user` (`id_user`, `username`, `password`, `role`) VALUES
(1,	'test',	'$2a$10$ZL/gCnRpxeSrkPCIrawE4.cklil/9e15JZGkEqX4ZYannbV1vsvIS',	0),
(2,	'testaea',	'$2a$10$2OAcCvHyMDnXkAAO8o2trev5S5c2/OD53M0pRwrLLmwImeBnvurp6',	0),
(3,	'ouaaaa',	'$2a$10$/s44dkqekbAQnT995kNtzuPZFvFZrVPCniFdol31L8uK10M6WzDBm',	0),
(12,	'jules',	'$2a$10$uz/CBC3Wj/t/WBKfg1R2i.YBU3bbc/YB31NlondYEFckC/G7eP7CO',	0),
(13,	'boulet',	'$2a$10$TSBuOh1KKemezEo/KD7WKej4GaAPmuvHtrsWnQ41MCbtsFrl0e7B6',	0),
(14,	'ouais',	'$2a$10$BCGjJZ8P6KrL69L.7vZNdeCJVECXBjLpWcy7JGucoGJeHKfNWUZji',	0);

-- 2022-01-28 08:18:25
