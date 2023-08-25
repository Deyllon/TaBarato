-- DropForeignKey
ALTER TABLE "Mensagem" DROP CONSTRAINT "Mensagem_destinatarioId_fkey";

-- AlterTable
ALTER TABLE "Mensagem" ALTER COLUMN "destinatarioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_destinatarioId_fkey" FOREIGN KEY ("destinatarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
