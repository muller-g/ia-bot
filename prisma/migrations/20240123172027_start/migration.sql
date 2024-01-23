/*
  Warnings:

  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profile_image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `User_Adress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User_Adress" DROP CONSTRAINT "User_Adress_user_id_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "created_at",
DROP COLUMN "password",
DROP COLUMN "profile_image",
DROP COLUMN "type",
DROP COLUMN "updated_at";

-- DropTable
DROP TABLE "User_Adress";
