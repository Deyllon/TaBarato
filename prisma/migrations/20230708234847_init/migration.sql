-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Computador" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "placaMae" TEXT NOT NULL,
    "processador" TEXT NOT NULL,
    "memoriaRam" TEXT[],
    "placaDeVideo" TEXT NOT NULL,

    CONSTRAINT "Computador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Computador" ADD CONSTRAINT "Computador_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
