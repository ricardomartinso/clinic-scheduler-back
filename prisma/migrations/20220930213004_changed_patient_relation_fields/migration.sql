/*
  Warnings:

  - You are about to drop the column `addressId` on the `patients` table. All the data in the column will be lost.
  - You are about to drop the column `phoneId` on the `patients` table. All the data in the column will be lost.
  - Added the required column `patientId` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientId` to the `phones` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "patients" DROP CONSTRAINT "patients_addressId_fkey";

-- DropForeignKey
ALTER TABLE "patients" DROP CONSTRAINT "patients_phoneId_fkey";

-- AlterTable
ALTER TABLE "address" ADD COLUMN     "patientId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "patients" DROP COLUMN "addressId",
DROP COLUMN "phoneId",
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "cpf" DROP NOT NULL,
ALTER COLUMN "health_insurance" DROP NOT NULL,
ALTER COLUMN "birth_date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "phones" ADD COLUMN     "patientId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "phones" ADD CONSTRAINT "phones_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
