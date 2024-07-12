/*
  Warnings:

  - You are about to drop the column `brand` on the `Beer` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Beer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Beer" DROP COLUMN "brand",
DROP COLUMN "type",
ADD COLUMN     "brewery" TEXT,
ADD COLUMN     "categories" TEXT,
ADD COLUMN     "family" TEXT,
ADD COLUMN     "style" TEXT,
ADD COLUMN     "tp" TEXT;
