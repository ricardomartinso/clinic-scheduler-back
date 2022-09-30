/*
  Warnings:

  - Added the required column `patientName` to the `consultations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "consultations" ADD COLUMN     "patientName" TEXT NOT NULL;
