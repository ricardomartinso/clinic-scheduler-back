/*
  Warnings:

  - Added the required column `clinic_id` to the `consultations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clinic_id` to the `patients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `treatments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "consultations" ADD COLUMN     "clinic_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "patients" ADD COLUMN     "clinic_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "treatments" ADD COLUMN     "description" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "clinic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "clinic_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultations" ADD CONSTRAINT "consultations_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
