-- CreateTable
CREATE TABLE "Admin_table" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_table_pkey" PRIMARY KEY ("id")
);
