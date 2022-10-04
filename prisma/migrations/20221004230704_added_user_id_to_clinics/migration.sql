/*
  Warnings:

  - Added the required column `userId` to the `clinic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clinic" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "clinic" ADD CONSTRAINT "clinic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
