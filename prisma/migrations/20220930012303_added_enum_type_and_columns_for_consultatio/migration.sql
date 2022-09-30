/*
  Warnings:

  - Added the required column `consultation_date` to the `consultations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consultation_turn` to the `consultations` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "consultation_turn" AS ENUM ('manha', 'tarde');

-- AlterTable
ALTER TABLE "consultations" ADD COLUMN     "consultation_date" DATE NOT NULL,
ADD COLUMN     "consultation_turn" "consultation_turn" NOT NULL;
