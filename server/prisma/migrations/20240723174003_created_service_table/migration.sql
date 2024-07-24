-- CreateTable
CREATE TABLE "service_table" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "serviceProvider" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "serviceImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_table_pkey" PRIMARY KEY ("id")
);
