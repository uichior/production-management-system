// scripts/seed.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // 古いデータを削除（任意）
  await prisma.orderItem.deleteMany();
  await prisma.delivery.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.customer.deleteMany();
  
  // 顧客データ
  const customer1 = await prisma.customer.create({
    data: {
      code: 'CUST-001',
      name: '株式会社テック',
      address: '東京都新宿区西新宿1-1-1',
      phoneNumber: '03-1234-5678',
      email: 'info@tech.example.com',
    },
  });
  
  const customer2 = await prisma.customer.create({
    data: {
      code: 'CUST-002',
      name: 'ABC商事',
      address: '大阪府大阪市中央区1-2-3',
      phoneNumber: '06-1234-5678',
      email: 'info@abc.example.com',
    },
  });
  
  // 製品データ
  const product1 = await prisma.product.create({
    data: {
      code: 'PROD-001',
      name: '高性能センサーA',
      description: '高精度・高耐久の産業用センサー',
      price: 12500,
      stock: 42,
    },
  });
  
  const product2 = await prisma.product.create({
    data: {
      code: 'PROD-002',
      name: 'IoTゲートウェイ',
      description: '複数のセンサーと接続可能な通信ゲートウェイ',
      price: 25000,
      stock: 28,
    },
  });
  
  const product3 = await prisma.product.create({
    data: {
      code: 'PROD-003',
      name: '制御基板X-200',
      description: '高性能マイコン搭載の制御基板',
      price: 7800,
      stock: 64,
    },
  });
  
  // 受注データ
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);
  
  const order1 = await prisma.order.create({
    data: {
      orderNumber: 'ORD-2025-0001',
      customerId: customer1.id,
      orderDate: today,
      dueDate: nextWeek,
      status: 'processing',
      totalAmount: 245000,
      notes: '特急対応',
      items: {
        create: [
          {
            productId: product1.id,
            quantity: 10,
            unitPrice: 12500,
          },
          {
            productId: product2.id,
            quantity: 5,
            unitPrice: 25000,
          },
        ],
      },
    },
  });
  
  const order2 = await prisma.order.create({
    data: {
      orderNumber: 'ORD-2025-0002',
      customerId: customer2.id,
      orderDate: today,
      dueDate: new Date(nextWeek.setDate(nextWeek.getDate() + 3)),
      status: 'manufacturing',
      totalAmount: 78000,
      items: {
        create: [
          {
            productId: product3.id,
            quantity: 10,
            unitPrice: 7800,
          },
        ],
      },
    },
  });
  
  // 納品データ
  await prisma.delivery.create({
    data: {
      deliveryNumber: 'DEL-2025-0001',
      orderId: order1.id,
      deliveryDate: nextWeek,
      status: 'preparing',
      notes: '午前中配達希望',
    },
  });
  
  console.log('テストデータの投入が完了しました！');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });