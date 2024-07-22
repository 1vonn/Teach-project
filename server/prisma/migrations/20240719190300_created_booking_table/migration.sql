-- CreateTable
CREATE TABLE "Booking_table" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "phone_Number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "service_Provider" TEXT NOT NULL,

    CONSTRAINT "Booking_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_table_phone_Number_key" ON "Booking_table"("phone_Number");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_table_email_key" ON "Booking_table"("email");
