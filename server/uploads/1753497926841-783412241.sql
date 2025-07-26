-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 26, 2025 at 08:45 AM
-- Server version: 8.0.41
-- PHP Version: 8.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `size` int NOT NULL,
  `path` varchar(255) NOT NULL,
  `mimetype` varchar(255) NOT NULL,
  `uploadedAt` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `name`, `size`, `path`, `mimetype`, `uploadedAt`) VALUES
(1, 'organization (11).csv', 70478, 'uploads\\1753430362444-646641661.csv', 'text/csv', '2025-07-25 14:59:23'),
(2, 'organization (11).csv', 70478, 'uploads\\1753430458711-132853423.csv', 'text/csv', '2025-07-25 15:00:58'),
(3, 'organization (11).csv', 70478, 'uploads\\1753433518843-228079665.csv', 'text/csv', '2025-07-25 15:51:59'),
(4, 'ReportPrint_16072025 (13) (2).pdf', 62166, 'uploads\\1753433859339-41884725.pdf', 'application/pdf', '2025-07-25 15:57:39'),
(5, 'ReportPrint_16072025 (13) (2).pdf', 62166, 'uploads\\1753434002659-633141710.pdf', 'application/pdf', '2025-07-25 16:00:02'),
(6, 'ReportPrint_16072025 (13) (2).pdf', 62166, 'uploads\\1753434412376-241933883.pdf', 'application/pdf', '2025-07-25 16:06:52'),
(7, 'bot manual (2).pdf', 733215, 'uploads\\1753434562813-252711923.pdf', 'application/pdf', '2025-07-25 16:09:23'),
(8, 'tb_organi.xlsx', 221141, 'uploads\\1753448290624-980503448.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '2025-07-25 19:58:11'),
(9, 'tb_organi.xlsx', 221141, 'uploads\\1753492411335-500649421.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '2025-07-26 08:13:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`, `updated_at`, `name`) VALUES
(1, 'john@example.com', '$2b$10$tY8mREgaVJhbNiMDTzBawOaITqiTDXKQaRs7PXDFB3yM1DazTuw/.', '2025-07-24 08:26:47', '2025-07-24 08:26:47', 'John Doe'),
(2, 'phuwanonkaewdang@gmail.com', '$2b$10$5jqxTUD4T2y3rUG.onhBneOPDI.BSvB8hIKxkUhNFGy5pQDmJbwG6', '2025-07-24 09:04:07', '2025-07-24 10:16:23', 'phuwanon kaewdang'),
(3, 'kitipong@gmail.com', '$2b$10$QmBTwKo11I4imnYkuJKSUOjLsrJW2OqW2kZXGLhV7UZAD2Ie6tC06', '2025-07-25 06:35:43', '2025-07-25 06:35:43', 'kitipong');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
