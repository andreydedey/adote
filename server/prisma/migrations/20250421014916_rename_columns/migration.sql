/*
  Warnings:

  - You are about to drop the column `cidade` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `raca` on the `Race` table. All the data in the column will be lost.
  - Added the required column `city` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pet_name` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phonenumber` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `race` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "cidade",
DROP COLUMN "descricao",
DROP COLUMN "estado",
DROP COLUMN "nome",
DROP COLUMN "telefone",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "pet_name" TEXT NOT NULL,
ADD COLUMN     "phonenumber" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "raca",
ADD COLUMN     "race" TEXT NOT NULL;
