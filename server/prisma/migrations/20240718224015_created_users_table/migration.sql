-- CreateTable
CREATE TABLE "Users_table" (
    "id" SERIAL NOT NULL,
    "full_Name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "phone_Number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_table_phone_Number_key" ON "Users_table"("phone_Number");

-- CreateIndex
CREATE UNIQUE INDEX "Users_table_email_key" ON "Users_table"("email");
